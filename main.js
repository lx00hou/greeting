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

    // 最大区域范围
    let bigLeft = blessing.offsetWidth - 150;
    let bigTop = blessing.offsetHeight - 150;

    // 在范围位置内 随机
    let radLeft = Math.floor(Math.random() * bigLeft);
    let radTop = Math.floor(Math.random() * bigTop);


    let huerotate = Math.random()*360+'deg';
    let rotateDeg = 20 - Math.random()*40+'deg';


    card.style.left = radLeft + 'px';
    card.style.top = radTop + 'px';

    card.style.transform = `rotate(${rotateDeg})` 
    card.style.filter = `hue-rotate(${huerotate})` 

    dragCard(card,bigLeft,bigTop);

    blessing.append(card)
}
dataText.forEach(addCard)

let focusIndex = 1;
function dragCard(card,bigLeft,bigTop){
    card.onmousedown = (e) => {
        // 将被点击的 卡片置顶
        card.style.zIndex = focusIndex++;

        var disX = e.pageX - card.offsetLeft;
        var disY = e.pageY - card.offsetTop;

        document.onmousemove = (e) => {

            let newX = e.pageX - disX; 
            let newY = e.pageY - disY; 

            if(newX > 0 && newX < bigLeft) {
                card.style.left = newX + 'px'; 
            }
            if(newY > 0 && newY < bigTop) {
                card.style.top = newY + 'px'; 
            }

        }
    }
    card.onmouseup = () => {
        document.onmousemove = null;
    }
}