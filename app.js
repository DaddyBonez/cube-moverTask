const box = document.getElementById('box');
// let box = document.querySelector('.box');
let fiende = document.querySelector('.fiende')
const moveBy = 10;
// let moveBy = 10;


// window.addEventListener('load', () => {
//     box.style.left = "200px";
//     box.style.top = "200px";
// });



window.addEventListener('keydown', (e) =>{
    console.log()
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