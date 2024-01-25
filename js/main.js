
var maxDiameter=400

function onBallClick(elBall){
    var num = parseInt(elBall.innerText)
    num+=getRandomInt(20, 60)
    if(num>maxDiameter) num=100
    elBall.innerText=num
    elBall.style.width=`${num}px`
    elBall.style.height=`${num}px`
    elBall.style.backgroundColor=`#${getRendomColor()}`

}