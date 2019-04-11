
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }




const container = document.getElementById('container');


function start (){
        const pixels = 500;
        userSquares = prompt("How large would you like the grid to be? (Please enter number)");
        pixelCount = String(pixels / userSquares) + "px";
        container.style.gridTemplateColumns = `repeat(${userSquares}, ${pixelCount})`;
        container.style.gridTemplateRows = `repeat(${userSquares}, ${pixelCount})`;
        buildGrid();
}


container.addEventListener('mouseover', event => {
    if(event.target.style.background !== 'white' && !event.target.id.includes('container') && !event.target.id.includes('changed')){       
            event.target.style.background = getRandomColor();
            event.target.setAttribute('id', 'changed');
    }
})




const resetButton = document.getElementById('reset-button-id');
resetButton.addEventListener('click', event => {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    start()

})


var style = document.createElement('style');
style.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(style);
style = document.getElementsByTagName('style')[0];

function buildGrid(){
    for(i = 1; i <= parseInt(userSquares); i++){
        for(j = 1; j <= parseInt(userSquares); j++){
            const div = document.createElement('div');
            div.style.gridColumnStart = i;
            div.style.gridColumnEnd = i+1;
            div.style.gridRowStart = j;
            div.style.gridRowEnd = j+1;
            div.style.borderColor = "black";
            div.style.borderWidth = ".1px";
            div.style.borderStyle = "solid";
            container.appendChild(div);
        }
    }
}

let userSquares = 50;
buildGrid();
container.style.gridTemplateColumns = `repeat(50, 10px)`;
container.style.gridTemplateRows = `repeat(50, 10px)`;

