

const abobe = {
    container: null,
    canvas: null,
    ctx: null,
    tools: null,
    coordinates: null,
    x: 0,
    y: 0,
    editor: {
        currentTool: null,
        currentColor: '#000',
        currentBrushSize: 10
    },

    init() {
        this.container = document.getElementById('app');
        this.canvas = document.getElementById('canv');
        this.ctx = this.canvas.getContext('2d');
        this.tools = document.getElementById('tools');
        this.coordinates = document.getElementById('coordinates');
        this._handleEvents();
    },

    _handleEvents() {
        // без .bind(this) метод бы вызвался применимо к canvas
        this.canvas.addEventListener('mousemove', this._moveHandler.bind(this));
        this.canvas.addEventListener('mousedown', this._startDraw.bind(this));
        document.addEventListener('mouseup', this._endDraw.bind(this)); //применяем ко всему документу, а то будет рисоваться по всему экрану
        this.tools.addEventListener('click', this._clickHandler.bind(this));
        this.tools.addEventListener('change', this._changeHandler.bind(this));
    },

    _moveHandler(e) {
        this.x = e.offsetX;
        this.y = e.offsetY;
        this._renderCoordinates();
    },
    _renderCoordinates() {
        this.coordinates.querySelector('#x-coord').innerText = this.x;
        this.coordinates.querySelector('#y-coord').innerText = this.y;
    },
    _clickHandler(e) {
        if (e.target.name == 'tool') {
            this.editor.currentTool = e.target.dataset.tool;
        }

        if (e.target.id == 'save-img') {
            this._save();
        }
    },
    _changeHandler(e) {
        if (e.target.name == 'tool-input') {
            this.editor[e.target.dataset.tool] = e.target.value;
        }
    },
    _startDraw() {
        this.ctx.fillStyle = this.editor.currentColor;
        this[`_${this.editor.currentTool}`]();
    },
    _endDraw() {
        this.canvas.onmousemove = null;
    },
    _pencil() {
        let size = this.editor.currentBrushSize;
        this.canvas.onmousemove = () => {
            this.ctx.fillRect(this.x, this.y, size, size);
        }
    },
    _fill() {
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    _eraser() {
        let size = this.editor.currentBrushSize;
        this.canvas.onmousemove = () => {
            this.ctx.clearRect(this.x, this.y, size, size);
        }
    },
    _clearCnv() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    _save() {
        let img = new Image();
        img.src = this.canvas.toDataURL();

        let a = document.createElement('a');
        a.setAttribute('href', img.src);
        a.setAttribute('download', 'image_');

        a.click();
    }
}

abobe.init();
