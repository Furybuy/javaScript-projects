//botão Cores Aleatórias
let button = document.getElementById('button-random-color');
button.addEventListener('click', changeColor);
//botão Limpar
let button2 = document.getElementById('clear-board');
button2.addEventListener('click', clearBoard);
//botões paleta de cores
let squareButton = document.getElementsByClassName('color');
for(let index=1; index<5; index+=1 ){
    document.getElementById(`square${index}`).addEventListener('click', selectNewColor);
}
//Seleciona o preto
selectBlack();
function selectBlack (){
    document.getElementById('square1').classList.add('selected'); 
}
//Seleciona nova cor
function selectNewColor (event){
    document.getElementsByClassName('selected')[0].className = 'color';
    event.target.classList.add('selected');
}
//Captura as cores da paleta de cores
let color2 = document.getElementById('square2');
let color3 = document.getElementById('square3');
let color4 = document.getElementById('square4');

createBoard();
applyColor();
//cria cores aleatórias
function randomCollor(){
    let r = Math.floor(Math.random() * 250);
    let g = Math.floor(Math.random() * 250);
    let b = Math.floor(Math.random() * 250);
    return `rgb(${r},${g},${b})`
}
//guarda as cores no localStorage
function saveColor(){
    let saveColors = [];
    saveColors.push(color2.style.backgroundColor);
    saveColors.push(color3.style.backgroundColor);
    saveColors.push(color4.style.backgroundColor);
    localStorage.setItem('colorPalette', JSON.stringify(saveColors));
}
//trocar a paleta por cores ateatórias
function changeColor () {
    color2.style.backgroundColor = randomCollor();
    color3.style.backgroundColor = randomCollor();
    color4.style.backgroundColor = randomCollor();
    saveColor();
}
//aplica a cor salva no localStorage
function applyColor(){
    if(localStorage.getItem('colorPalette') === null){
    }
    else {
        color2.style.backgroundColor = JSON.parse(localStorage.colorPalette)[0];
        color3.style.backgroundColor = JSON.parse(localStorage.colorPalette)[1];
        color4.style.backgroundColor = JSON.parse(localStorage.colorPalette)[2];
    }
}
//Função que cria o quadro de pixels
function createBoard() {
    for (let file=0; file<5; file+=1){
        let createDiv = document.createElement('div');
        createDiv.id = `line${file}`;
        document.getElementById('pixel-board').appendChild(createDiv);
        for (let column=0; column<5; column+=1){
            let pixels = document.createElement('div');
            pixels.className = 'pixel';
            pixels.style.backgroundColor = "white"; 
            createDiv.appendChild(pixels);
        }
    }
}
//Função que pinta o quadro 5x5
let pixel = document.getElementsByClassName('pixel');
for (let i=0; i<pixel.length; i+=1){
    pixel[i].addEventListener('click', paint);
}
function paint (event){
    let selectedColor = document.getElementsByClassName('selected')[0];
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
}
//Função botão Limpar
function clearBoard(){
    localStorage.clear();
    location.reload();
    for(let i=0; i<pixel.length; i+=1){
        pixel.style.backgroundColor = "white"; 
    }
}