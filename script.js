let content = document.querySelectorAll('.pop-overall');
let flyer = document.querySelectorAll('.fly-cont')
let popupcont = document.querySelector('.pop-box')
function Popup() {
    flyer.forEach(function (fly) {
        fly.classList.add('pop-show')
        document.querySelector('.pop-box-overall').classList.add('ease-down')
        document.querySelector('body').classList.add('hidden')
        document.querySelector('.pop-box-overall').classList.remove('ease-up')
    })
    popupcont.innerHTML = `${this.innerHTML}`
}
function ClosePop() {
    this.classList.remove('pop-show')
    document.querySelector('body').classList.remove('hidden')
    document.querySelector('.pop-box-overall').classList.remove('ease-down')
    document.querySelector('.pop-box-overall').classList.add('ease-up')
}
content.forEach(function (con) {
    con.addEventListener('click', Popup)
})
flyer.forEach(function (fly) {
    fly.addEventListener('click', ClosePop)
})
