
function onBallClick(elBall){
    var num = parseInt(elBall.innerText)
    num+=getRandomInt(20, 60)
    if(num>400) num=100
    elBall.innerText=num
    elBall.style.width=`${num}px`
    elBall.style.height=`${num}px`
    elBall.style.backgroundColor=`#${getRendomColor()}`

}