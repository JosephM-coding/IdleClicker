const clickerDisplay = document.getElementById("clickerDisplay")
const plus = `<div>+1</div>`//document.getElementById("plus");
const box = document.getElementById("leftContainerInners")
const cashCount = document.getElementById("cashCount")
//First Upgrade
const firstUpgrade = document.getElementById('firstUpgrade')
const FirstCost = document.getElementById('FirstCost')
let CostFirst = 10
//Second Upgrade
const secondUpgrade = document.getElementById('secondUpgrade')
const SecondCost = document.getElementById('SecondCost')
let CostSecond = 50
//Third Upgrade
const thirdUpgrade = document.getElementById('thirdUpgrade')
const ThirdCost = document.getElementById('ThirdCost')
let CostThird = 100
//fourth Upgrade
const fourthUpgrade = document.getElementById('fourthUpgrade')
const FourthCost = document.getElementById('FourthCost')
let CostFourth = 1000

let cash = 0
let multiplier = 1
let additionalClicks = 0
let autoClickTimer = 1000
let CurrentClickValue = (1 + additionalClicks) * multiplier
let maxAutoClickers = 0

FirstCost.textContent = `Cost:$${CostFirst}`
SecondCost.textContent = `Cost:$${CostSecond}`
ThirdCost.textContent = `Cost:$${CostThird}`
FourthCost.textContent = `Cost:$${CostFourth}`

function enlargeItem(imgElement) {
    imgElement.style.transition = "transform 0.001s ease";
    imgElement.style.transform = "scale(1.1)";

    setTimeout(() => {
        imgElement.style.transform = "scale(1)";
    }, 300);
}
function addMoney(){
    cash = (cash + (1 + additionalClicks) * multiplier)
    CurrentClickValue = (1 + additionalClicks) * multiplier
    cashCount.textContent = `${(Math.round(cash * 100) / 100)}`
}
function ClickIndication(){
    console.log("click")
    addMoney()
    // const boxRect = box.getBoundingClientRect();
    // const boxWidth = boxRect.width;
    // const boxHeight = boxRect.height;
    // // Ensure the dot stays within the box and doesn't overflow
    // let left = Math.floor(Math.random() * (boxWidth - 50));
    // let bottom = Math.floor(Math.random() * (boxHeight - 50));

    // // Update dot's position, using left and top only
    // plus.style.left = `${left}px`;
    // plus.style.top = `${bottom}px`;
}
function FiUpgrade(){
    console.log("First Upgrade")
    if(cash >= CostFirst){
        additionalClicks++
        cash = cash - CostFirst
        CostFirst = CostFirst * 1.5
    } else {
        console.log("Not enough money")
    }
    cashCount.textContent = `${(Math.round(cash * 100) / 100)}`
    FirstCost.textContent = `Cost:$${Math.floor(CostFirst)}`
}
function SeUpgrade(){
    console.log("Second Upgrade")
    if(cash >= CostSecond){
        multiplier = multiplier + .2
        cash = cash - CostSecond
        CostSecond = CostSecond * 1.5
    } else {
        console.log("Not enough money")
    }

    cashCount.textContent = `${(Math.round(cash * 100) / 100)}`
    SecondCost.textContent = `Cost:$${Math.floor(CostSecond)}`
    
}
function ThUpgrade(){
    console.log("Third Upgrade")
    if(maxAutoClickers < 20) {
        if(cash >= CostThird){
            console.log("Confirm Third Upgrade Bought")
            cash = cash - CostThird
            CostThird = CostThird * 1.5
            let intervalId = setInterval(autoClick, autoClickTimer);
            cashCount.textContent = `${(Math.round(cash * 100) / 100)}`
            ThirdCost.textContent = `Cost:$${Math.floor(CostThird)}`
            maxAutoClickers++
        } else {
            console.log("Not enough money")
        }
    } else {
        ThirdCost.textContent = `Max amount`
        console.log("Max Amount")
    }
    
}
function autoClick(){
    CurrentClickValue = (1 + additionalClicks) * multiplier
    cash = cash + CurrentClickValue
    cashCount.textContent = `${(Math.round(cash * 100) / 100)}`

}

function FoUpgrade(){
    console.log("Fourth Upgrade")
        if(cash >= CostFourth){
            additionalClicks = additionalClicks + 5
            cash = cash - CostFourth
            CostFourth = CostFourth * 1.5
            FourthCost.textContent = `Cost:$${Math.floor(CostFourth)}`
        } else {
            console.log("Not enough money")
        }
        cashCount.textContent = `${(Math.round(cash * 100) / 100)}`
}

firstUpgrade.addEventListener('click', FiUpgrade)
secondUpgrade.addEventListener('click', SeUpgrade)
thirdUpgrade.addEventListener('click', ThUpgrade)
fourthUpgrade.addEventListener('click', FoUpgrade)
clickerDisplay.addEventListener('click', ClickIndication)

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      // Action to perform when spacebar is pressed
      console.log('Spacebar was pressed');
      cash = cash + 10000000
      cashCount.textContent = `${(Math.round(cash * 100) / 100)}`
    }
  });