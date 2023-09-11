// JavaScript code for Pac-Man animation and click functionality

var pos = 0;
var pageWidth = window.innerWidth;
var pacArray = [
    ['./images/PacMan1.png', './images/PacMan2.png'],
    ['./images/PacMan3.png', './images/PacMan4.png'],
];
var direction = 0;
var focus = 0;

function Run() {
    var img = document.getElementById('pacman');
    var imgWidth = img.width;
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + 'px';
    } else {
        pos += 20;
        img.style.left = pos + 'px';
    }
}

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
    if (pos + imgWidth > pageWidth) {
        return 1;
    } else if (pos < 0) {
        return 0;
    } else {
        return direction;
    }
}

// Add a click event listener to the Pac-Man element
var pacman = document.getElementById('pacman');
pacman.addEventListener('click', function () {
    // Toggle the direction when clicked
    direction = 1 - direction;
});

setInterval(Run, 300);
