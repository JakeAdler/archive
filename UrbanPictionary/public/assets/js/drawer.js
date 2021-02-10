// TODO: Make sure that only the client with the matching private uid of the public uuid can draw.

var DRAWING = '';
const canvas = document.getElementById('drawerCanvas');
let colors = document.getElementsByClassName('color');
const ctx = canvas.getContext('2d');
const uuid = extractQueryParametersFromUrl().uuid;
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
ctx.strokeStyle = '#000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;
let current = {
    color: 'black'
};
// event listeners
for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', onColorUpdate, false);
};
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', throttle(mousemove, 10));
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    getDataAndEmit();
});
canvas.addEventListener('mouseout', () => isDrawing = false);

socket.on('connect', function () {
    console.log("User is connected");
});

function draw(e) {
    if (!isDrawing) {
        return; // stop the function when not moused down.
    }
    let strokeWidth;
    if(current.color === 'white'){
        strokeWidth = 35;
    } else {
        strokeWidth = 10;
    }
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = current.color;
    ctx.lineWidth = strokeWidth
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    getDataAndEmit();
};

function getDataAndEmit() {
    let data = canvas.toDataURL();
    let dataObj = {
        data: data,
        uuid: playerUuid
    };
    socket.emit('drawing', dataObj);
    DRAWING = dataObj;
};
// Event callbacks
function onColorUpdate(e) {
    current.color = e.target.className.split(' ')[1];
};

function mousemove(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
};

// limit the number of events per second
function throttle(callback, delay) {
    var previousCall = new Date().getTime();
    return function () {
        var time = new Date().getTime();

        if ((time - previousCall) >= delay) {
            previousCall = time;
            callback.apply(null, arguments);
        };
    };
};
