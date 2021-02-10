let allcanvas = document.getElementsByClassName("judgeViewCanvas");
let allCanvas = Array.from(allcanvas);

function drawCanvas(data){
    let drawerImage = new Image();
    let imgData = data.data;
    const canvas = document.getElementById(data.uuid);
    const ctx = canvas.getContext("2d");
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    drawerImage.src = imgData;
    ctx.clearRect(0, 0, cw, ch)
    ctxDraw(ctx, drawerImage, cw, ch);
}
socket.on('connect', function(){
    console.log("hello");
});

socket.on('drawingToJudge', function (data) {
    drawCanvas(data);
});

socket.on('hoveringToViews', function(elemId){
    let hvrElem = document.getElementById(elemId);
    hvrElem.classList.add('sendState');

});

 socket.on('endHoverView', function(elemId) {
    let hvrElem = document.getElementById(elemId);
    hvrElem.classList.remove('sendState');
});

socket.on('updateWinnerChosenView', function (elemId) {
    console.log(elemId);
    let winnerElem = document.getElementById(elemId);
    winnerElem.classList.add('winner');
});

function ctxDraw(ctx, drawerImage, cw, ch) {
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(drawerImage, 0, 0, cw / 1.9, ch / 2.2);
};

function enableJudgingFunctionality()    {
    for (let i = 0; i < allCanvas.length; i++) {
        allCanvas[i].classList.add("judgeState");
        allCanvas[i].addEventListener("click", chooseWinner, false);
        allCanvas[i].addEventListener("mouseenter", emitHover, false);
        allCanvas[i].addEventListener("mouseout", emitEndHover, false);

    };
};

function chooseWinner(event) {
    let winner = event.target;  
    let winnerId = winner.id;
    winner.classList.add("winner");
    winner.classList.remove('judgeState');
    applyLoserStyle();
    socket.emit('winnerChosen', winnerId);
    slideAnimation(winnerId);
};
function emitHover(event){
    let elem = event.target;
    let elemID = elem.id;
    socket.emit('hovering', elemID);
   
};
function emitEndHover(event){
    let elem = event.target
    let elemID = elem.id
    socket.emit('hoverEnd', elemID);
   
};


function slideAnimation(winnerId) {
  //  $("#winnerName").text(winner.data-displayname);
    setTimeout(() => {
        console.log(winnerId);
        endRound(winnerId);
       /*  $("#slideInWinner").animate({
            right: 725
        }, 1000); */

        /* $("#slideInWinner").animate({
            right: 725
        }, 1000); */
    }, 1500);

};
function applyLoserStyle() {
    allCanvas.forEach(function (i) {
        i.classList.remove("judgeState");
        if (!i.classList.contains("winner")) {
            i.classList.add('losers');
        }
    });
};

function endRound(winnerUuid) {
    $.post(`/game/end-round/${gamecode}`, {
        judgeUuid: playerUuid, // We are on the judges view so we can simply take the current player's uuid.
        winnerUuid: winnerUuid
    }).catch((error) => {
        logError(error, "Error Failed to send post request to end the round");
    });
};