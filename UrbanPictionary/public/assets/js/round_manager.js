const socket = io.connect(window.location.origin + window.location.pathname);
const gamecode = extractGameCodeFromUrl();
const playerUuid = extractQueryParametersFromUrl().uuid;
const gameStartCountdown = "game-start-countdown";
const roundCountdown = "round-countdown";
const wordId = "word";

socket.on('connect', function() {
    console.log('client is connected')
})
// Gets triggered upon user reconnect
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // Only authenticated users can connect to a game.
        setRoundManagerSockets(user);
    }
});

function setRoundManagerSockets(user) {

    // Notify server that we want to retrieve all drawings if timer is no longer active.
    socket.emit('getAllDrawings', 'signal');

    // If a judge looses connection while selecting the winner, the game could be left in a dead lock.
    // This listener will be triggered by the server if a judge reconnects and the current state of the round 
    // is in selecting the winner.
    socket.on('judge-reconnect', (reconnect) => {
        if (reconnect) {
            enableJudgingFunctionality();
        }
    });

    socket.on('allDrawings', (drawings) => {
        for (let i = 0; i < drawings.length; i++) {
            const drawing = drawings[i];
            drawCanvas(drawing);
        }
    });

    socket.on(gameStartCountdown, (data) => {
        $(`#${gameStartCountdown}`).text(data);
    });

    socket.on(roundCountdown, (data) => {
        $(`#${roundCountdown}`).text(data.timeLeft);

        // Check if round is still active.
        if (!data.active) {
            // Check if client it a judge.
            if (data.judgeUuid !== playerUuid) {
                // Save the the drawing so it can be retrieved later.
                socket.emit('saveDrawing', DRAWING);

                // Reroute client to judge view.
                window.location.replace(`/game/play/${gamecode}?uuid=${data.judgeUuid}`);
            } else {
                enableJudgingFunctionality();
            }
        }
    });

    // Firebase socket listener for round word/phrase.
    firebase.database().ref(nodes.games).child(gamecode).child(nodes.round).child(nodes.word)
        .on('value', (snap) => {
            $(`#${wordId}`).text(snap.val());
        });

    // Set firebase socket listener that will notify clients when the round is officially over (after judge selects winner).
    firebase.database().ref(nodes.games).child(gamecode).child(nodes.round).child(nodes.started)
        .on('value', (snap) => {
            if (!snap.val()) {
                // Send request to retrieve the proper redirect url for the client based on their private uid.
                $.post(`/game/lobby-redirect/${gamecode}`, {
                    uid: user.uid
                }).then((res) => {
                    if (res.redirect) {
                        window.location.replace(res.redirect);
                    } else {
                        logError("Error", "Failed to route all players back to the lobby");
                    }
                }).catch((error) => {
                    logError(error, "Error occurred while sending a post request reroute all users back to the lobby.");
                });
            };
        });
};