var box = document.getElementById('box');
var screenwidth = window.innerWidth;
var screenheight = window.innerHeight;

document.addEventListener('keydown', function(event) {
    if (event.key === 37) { 
        var newLeft = parseInt(box.style.left) - 10;
        if (newLeft >= 0) {
          box.style.left = newLeft + 'px';
        }
    } else if (event.key === 38) { 
        var newTop = parseInt(box.style.top) - 10;
        if (newTop >= 0) {
          box.style.top = newTop + 'px';
        }
    } else if (event.key === 39) { 
        var newLeft = parseInt(box.style.left) - 10;
        if (newLeft >= 0) {
          box.style.left = newLeft + 'px';
        }
    } else if (event.key === 40) { 
        var newTop = parseInt(box.style.top) - 10;
        if (newTop >= 0) {
          box.style.top = newTop + 'px';
        }
    }
});