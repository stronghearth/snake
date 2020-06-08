document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0
    let appleIndex = 0
    let currentSnake = [2,1,0] //2 head, 0 tail of snake

    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    function control(e) {
        squares[currentIndex].classList.remove('snake')

        if(e.keyCode === 39) {
            direction = 1
        } else if(e.keyCode === 38) {
            direction = -width
        } else if(e.keyCode === 37) {
            direction -1
        } else if(e.keyCode === 40) {
            direction = +width
        }
    }
})