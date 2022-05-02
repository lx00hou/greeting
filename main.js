let dataText = [
    '现在几点了',
    '还在苦逼写代码',
    '但是太菜了',
    '赶紧学习'
]


let blessing = document.querySelector('.blessing')

function addCard(val) {
    let card = document.createElement('div')
    card.className = 'card'
    card.innerText = val

    let bigLeft = blessing.offsetWidth - 150;
    let bigTop = blessing.offsetHeight - 150;

    let radLeft = Math.floor(Math.random() * bigLeft);
    let radTop = Math.floor(Math.random() * bigTop);


    let huerotate = Math.random()*360+'deg';
    let rotateDeg = 20 - Math.random()*40+'deg';


    card.style.left = radLeft + 'px';
    card.style.top = radTop + 'px';

    card.style.transform = `rotate(${rotateDeg})` 
    card.style.filter = `hue-rotate(${huerotate})` 

    blessing.append(card)
}
dataText.forEach(addCard)