var intervalId;

function startChangingColors() {
    intervalId = setInterval(changeColor, 400); // Altera a cor a cada 1 segundo (1000 milissegundos)
}

function stopChangingColors() {
    clearInterval(intervalId); // Para de alterar as cores
}

function changeColor() {
    var body = document.querySelector("body");
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = randomColor;
}
