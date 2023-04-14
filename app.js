let box = document.querySelector('.box');
let moveby = "10px";

window.addEventListener('load', () => {
    box.style.left = "200px";
    box.style.top = "200px";
});

window.addEventListener('keydown', (e) =>{

    console.log(box.style.left = parseInt(box.style.left) - moveBy + 'px')
    switch(e.key){
        case 'ArrowLeft' :
            box.style.left = parseInt(box.style.left) - moveBy + 'px'
            break;
        case 'ArrowRight' :    
            box.style.left = parseInt(box.style.left) + moveBy + 'px'
            break;
        case 'ArrowUp' :    
            box.style.top = parseInt(box.style.top) - moveBy + 'px'
            break;
        case 'ArrowDown' :   
            box.style.top = parseInt(box.style.top) + moveBy + 'px'
            break;
    }
});