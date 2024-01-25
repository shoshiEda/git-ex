
function onBallClick(elBall){
    var num = parseInt(elBall.innerText)
    num+=50
    if(num===450) num=100
    elBall.innerText=num
    elBall.style.width=`${num}px`
    elBall.style.height=`${num}px`
}