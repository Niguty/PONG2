class Player {
    constructor(initial) {
        this.x = initial.x
        this.y = initial.y
        this.size = initial.size
        this.speed = initial.speed
        this.keyboardMove = { left: false, right: false, up: false, down: false }
        this.element = this.createElement();
        this.initEvents()
    }

    createElement(){
        const player = document.createElement('div')
        player.classList.add('player')
        player.style.width = `${this.size}px`
        player.style.height = `${this.size}px`
        return player
    }

    update(){
        this.move()
        this.colisionWall()
        this.draw()
    }

    move(){
        if(this.keyboardMove.left) this.x -= this.speed
        if(this.keyboardMove.right) this.x += this.speed
        if(this.keyboardMove.up) this.y -= this.speed
        if(this.keyboardMove.down) this.y += this.speed
    }

    colisionWall(){

        const cW = window.innerWidth;
        const cH = window.innerHeight;
        
        if(this.x < 0) this.x = 0
        if(this.y < 0) this.y = 0

        if((
            this.x + this.size
        )> cW) this.x = cW - this.size

        if((
            this.y + this.size
        )> cH) this.y = cH - this.size
    }

    draw(){
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    initEvents(){
        const p = this;
        document.body.addEventListener('keydown', (event) => {
            
            const key = event.key.toLowerCase()

            if(key == 'a') {p.keyboardMove.left = true}
            if(key == 'd') {p.keyboardMove.right = true}
            if(key == 'w') {p.keyboardMove.up = true}
            if(key == 's') {p.keyboardMove.down = true}

        })

        document.body.addEventListener('keyup', (event) => {
            
            const key = event.key.toLowerCase()

            if(key == 'a') {p.keyboardMove.left = false}
            if(key == 'd') {p.keyboardMove.right = false}
            if(key == 'w') {p.keyboardMove.up = false}
            if(key == 's') {p.keyboardMove.down = false}

        })
    }
}