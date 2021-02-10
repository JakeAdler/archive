const utils = require('./utils');
const Firebase = require('../config/firebase');
const firebase = Firebase.admin;
const nodes = Firebase.nodes;

exports.setCanvasManager = function (gamecode) {
    var socket = utils.getSocketConnection(gamecode);

    socket.on('connection', function (socket) {
        console.log('a user connected');
        socket.on('drawing', function (dataObj) {
            updateJudgeCanvas(gamecode, dataObj);
        });

        socket.on('hovering', function (data) {
            updateJudgeViews(gamecode, data);
        });
        socket.on('hoverEnd', function (data) {
            updateHoverView(gamecode, data);
        })
        socket.on('winnerChosen',function (data) {
            updateWinnerChosenView(gamecode, data)
        });

        socket.on('saveDrawing', function(dataObj){
            saveDrawingInFirebase(gamecode, dataObj);
        });

        socket.on('getAllDrawings', function(){
            getAllDrawingsFromFirebase(gamecode);
        });

        socket.on('disconnect', function (socket) {
            console.log('user disconnected');
        });
    });
};

function updateJudgeCanvas(gamecode, dataObj) {
    var socket = utils.getSocketConnection(gamecode);
    socket.emit('drawingToJudge', dataObj);
};

function updateJudgeViews(gamecode, data) {
    var socket = utils.getSocketConnection(gamecode);
    socket.emit('hoveringToViews', data);
};
function updateHoverView(gamecode, data) {
    var socket = utils.getSocketConnection(gamecode);
    socket.emit('endHoverView', data);
};
function updateWinnerChosenView(gamecode, data){
    console.log(data);
    var socket = utils.getSocketConnection(gamecode);
    socket.emit('updateWinnerChosenView', data);
}

function saveDrawingInFirebase(gamecode, dataObj){    
    firebase.database().ref(nodes.games).child(gamecode).child(nodes.players)
        .once('value')
        .then((snap) => {
            return utils.getPlayerIfEnrolledInGame(snap.val(), dataObj.uuid);
        })
        .then((playeruid) => {
            firebase.database().ref(nodes.games).child(gamecode).child(nodes.players).child(playeruid).child(nodes.drawing)
                .set(dataObj.data)
                .catch((error) => {
                    utils.logError(error, "Error failed to save off player drawing in firebase.");
                });
        })
        .catch((error) => {
            utils.logError(error, "Error failed to save off player drawing in firebase.");
        });
}

function getAllDrawingsFromFirebase(gamecode){

    firebase.database().ref(nodes.games).child(gamecode).child(nodes.round).child(nodes.timerActive)
        .once('value')
        .then((snap) => {
            if (!snap.val()){
                firebase.database().ref(nodes.games).child(gamecode).child(nodes.players)
                    .once('value')
                    .then((snap) => {
                        // First we need to retrieve all drawings from the drawer players.
                        var allDrawings = getAllDrawings(snap.val());

                        // Emit all drawings to game clients.
                        var socket = utils.getSocketConnection(gamecode);
                        socket.emit('allDrawings', allDrawings);
                    }).catch((error) => {
                        utils.logError(error, "Failed to retrieve drawings!");
                    });
            }
        })
        .catch((error) => {
            utils.logError(error, "Failed to check if the round timer was active!");
        });
}

function getAllDrawings(allPlayers){
    return Object.keys(allPlayers).filter((uid) => {
        return !allPlayers[uid].judge;
    }).map((uid)=>{
        return {
            uuid: allPlayers[uid].uuid,
            data: allPlayers[uid].drawing
        }
    });
};