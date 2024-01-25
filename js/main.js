
function onBallClick(elBall){
    var num = parseInt(elBall.innerText)
    num+=50
    elBall.innerText=num
    elBall.style.width=`${num}px`
    elBall.style.height=`${num}px`
}