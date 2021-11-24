let qazax = document.querySelector("#qazax")
let quba = document.querySelector("#quba")
let sumqayit = document.querySelector("#sumqayit")
let baki = document.querySelector("#baki")
let buttons = document.querySelectorAll("button")
buttons.forEach(btn => {
    btn.onclick = function () {
        let cards = document.querySelectorAll(".info")
        cards.forEach(c => {
            c.style.width = "0px";
            c.style.height = "0px";
            c.style.overflow = "hidden";
        })
        let dataId = btn.getAttribute("data-id")
        let card = document.getElementById(dataId)
        card.style.width = "100%";
        card.style.height = "250px";
    }
});