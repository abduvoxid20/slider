class Slider {
    constructor(props) {
        const { slider, sliderLine, next, prev } = props
        this.slider = document.querySelector(slider)
        this.sliderLine = document.querySelector(sliderLine)
        this.next = document.querySelector(next)
        this.prev = document.querySelector(prev)
        this.slides = this.sliderLine.children
        this.height = this.slider.clientHeight
        this.width = this.slider.clientWidth
        this.active = 0
        this.moves = this.width

        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style = `position: absolute;
            width: 100%;
            height: 100%;`

            if (i !== this.active) {
                this.slides[i].style.transform = `translateX(${this.width}px)`
            }
            if (i === this.slides.length - 1) {
                this.slides[i].style.transform = `translateX(${-this.width}px)`
            }
        }




        this.sliderLine.style = `position: relative;
        height: ${this.height}px`


        this.next.addEventListener('click', () => this.move(this.next))
        this.prev.addEventListener('click', () => this.move(this.prev))
    }

    move(btn) {
        let moves = btn === this.next ? -this.moves : this.moves
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.transition = '0ms'
            if (i != this.active) {
                this.slides[i].style.transform = `translateY(${-moves}px)`
            }
        }
        this.slides[this.active].style.transform = `translateY(${moves}px)`
        this.slides[this.active].style.transition = '500ms'
        if (btn == this.next) {
            if (this.active < this.slides.length - 1) {
                this.active++
            }else{
                this.active = 0
            }
        }else{
            if (this.active == 0) {
                this.active = this.slides.length - 1
            }else{
                this.active--
            }
        }
        this.slides[this.active].style.transform = `translateY(0px)`
        this.slides[this.active].style.transition = '500ms'
    }
}
new Slider({
    slider: '.slider',
    sliderLine: '.slider__line',
    next: '.slider__next',
    prev: '.slider__prev',
})