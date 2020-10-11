const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');
let tool = null;


canvas.addEventListener('mousedown', (e) => {
    if (tool) {
        switch (tool) {
            case 'word':
                drawWord(e);
                break;
            case 'pencil':
                drawPencil(e);
                break;
            case 'word':
                drawBrush(e);
                break;
            default:
                break;
        }
    }
})

document.querySelector('#tools').addEventListener('click', buttons)

function buttons(e) {
    switch (e.target.dataset.tool) {
        case 'pencil':
            tool = 'pencil';
            break;
        case 'word':
            tool = 'word';
            break;
        case 'brush':
            tool = 'brush';
            break;
        default:
            break;
    }
}

function drawPencil(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    ctx.fillRect(x, y, 50, 50)
}

// TODO:  могу понять почему не рисуется эллипс?
function drawBrush(e) {
    ctx.beginPath()
    ctx.ellipse(100, 300, 50, 75, Math.PI / 4, 0, 2 * Math.PI)
    ctx.fill()
}

// drawWord рисует случайный символ случайного размера
function drawWord(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    ctx.font = `${Math.floor(Math.random() * 60)}px Verdana`;
    ctx.fillText(getRandomWord(), x, y)
}

//getRandom генерирует случайный символ [0-9], [a-z]
function getRandomWord() {
    return Math.random().toString(36).substr(2, 1);
}

// ctx.fillRect(100, 50, 300, 150)
// ctx.beginPath()
// ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI)
// ctx.fill()

// ctx.beginPath()
// ctx.ellipse(250, 100, 50, 50, Math.PI / 4, 0, 2 * Math.PI)
// ctx.stroke()

