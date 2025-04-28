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
//fifth Upgrade
const fifthUpgrade = document.getElementById('fifthUpgrade')
const FifthCost = document.getElementById('FifthCost')
let CostFifth = 2500
//Sixth Upgrade
const sixthUpgrade = document.getElementById('sixthUpgrade')
const SixthCost = document.getElementById('SixthCost')
let CostSixth = 5000
//Seventh Upgrade
const seventhUpgrade = document.getElementById('seventhUpgrade')
const SeventhCost = document.getElementById('SeventhCost')
let CostSeventh = 10000
//Eighth Upgrade
const eighthUpgrade = document.getElementById('eighthUpgrade')
const EighthCost = document.getElementById('EighthCost')
let CostEighth = 20000
//Ninth Upgrade
const ninthUpgrade = document.getElementById('ninthUpgrade')
const NinthCost = document.getElementById('NinthCost')
let CostNinth = 40000

let cash = 0
let multiplier = 1
let additionalClicks = 0
let autoClickTimer = 1000
let CurrentClickValue = (1 + additionalClicks) * multiplier
let maxAutoClickers1 = 0
let maxAutoClickers2 = 0

FirstCost.textContent = `Cost:$${CostFirst}`
SecondCost.textContent = `Cost:$${CostSecond}`
ThirdCost.textContent = `Cost:$${CostThird}`
FourthCost.textContent = `Cost:$${CostFourth}`
FifthCost.textContent = `Cost:$${CostFifth}`
SixthCost.textContent = `Cost:$${CostSixth}`
SeventhCost.textContent = `Cost:$${Math.floor(CostSeventh)}`
EighthCost.textContent = `Cost:$${Math.floor(CostEighth)}`
NinthCost.textContent = `Cost:$${Math.floor(CostNinth)}`



function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}
function save(){
    console.log("File saved")
    const name = prompt("Insert your name")
    document.cookie = `name=${name}`
    localStorage.setItem("cash", cash)
    // document.cookie = `cash=${cash}`
    localStorage.setItem("multiplier", multiplier)
    // document.cookie = `multiplier=${multiplier}`
    localStorage.setItem("additionalClicks", additionalClicks)
    // document.cookie = `additionalClicks=${additionalClicks}`
    localStorage.setItem("autoClickTimer", autoClickTimer)
    // document.cookie = `autoClickTimer=${autoClickTimer}`
    localStorage.setItem("CurrentClickValue", CurrentClickValue)
    // document.cookie = `CurrentClickValue=${CurrentClickValue}`
    localStorage.setItem("maxAutoClickers1", maxAutoClickers1)
    // document.cookie = `maxAutoClickers=${maxAutoClickers1}`
    localStorage.setItem("maxAutoClickers2", maxAutoClickers2)
    // document.cookie = `maxAutoClickers=${maxAutoClickers2}`
    localStorage.setItem("CostFirst", CostFirst)
    // document.cookie = `CostFirst=${CostFirst}`
    localStorage.setItem("CostSecond", CostSecond)
    // document.cookie = `CostSecond=${CostSecond}`
    localStorage.setItem("CostThird", CostThird)
    // document.cookie = `CostThird=${CostThird}`
    localStorage.setItem("CostFourth", CostFourth)
    // document.cookie = `CostFourth=${CostFourth}`
    localStorage.setItem("CostFifth", CostFifth)
    // document.cookie = `CostFifth=${CostFifth}`
    localStorage.setItem("CostSixth", CostSixth)
    // document.cookie = `CostFifth=${CostSixth}`
    localStorage.setItem("CostSeventh", CostSeventh)
    // document.cookie = `CostFifth=${CostSeventh}`
    localStorage.setItem("CostEighth", CostEighth)
    // document.cookie = `CostFifth=${CostEighth}`
    localStorage.setItem("CostNinth", CostNinth)
    // document.cookie = `CostFifth=${CostNinth}`
}
function load(){
    console.log("File Loaded")

    cash = Number(localStorage.getItem("cash"))//Number(getCookie('cash'))
    multiplier = Number(localStorage.getItem("multiplier"))//Number(getCookie('multiplier'))
    additionalClicks = Number(localStorage.getItem("additionalClicks"))//Number(getCookie('additionalClicks'))
    autoClickTimer = Number(localStorage.getItem("autoClickTimer"))//Number(getCookie('autoClickTimer'))
    CurrentClickValue = Number(localStorage.getItem("CurrentClickValue"))//Number(getCookie('CurrentClickValue'))
    maxAutoClickers1 = Number(localStorage.getItem("maxAutoClickers1"))//Number(getCookie('maxAutoClickers1'))
    maxAutoClickers2 = Number(localStorage.getItem("maxAutoClickers2"))//Number(getCookie('maxAutoClickers2'))
    CostFirst = Number(localStorage.getItem("CostFirst"))//Number(getCookie('CostFirst'))
    CostSecond = Number(localStorage.getItem("CostSecond"))//Number(getCookie('CostSecond'))
    CostThird = Number(localStorage.getItem("CostThird"))//Number(getCookie('CostThird'))
    CostFourth = Number(localStorage.getItem("CostFourth"))//Number(getCookie('CostFourth'))
    CostFifth = Number(localStorage.getItem("CostFifth"))//Number(getCookie('CostFifth'))
    CostSixth = Number(localStorage.getItem("CostSixth"))//Number(getCookie('CostSixth'))
    CostSeventh = Number(localStorage.getItem("CostSeventh"))//Number(getCookie('CostSeventh'))
    CostEighth = Number(localStorage.getItem("CostEighth"))//Number(getCookie('CostEighth'))
    CostNinth = Number(localStorage.getItem("CostNinth"))//Number(getCookie('CostNinth'))

    cashCount.textContent = `${(Math.round(cash * 100) / 100)}`
    FirstCost.textContent = `Cost:$${Math.floor(CostFirst)}`
    SecondCost.textContent = `Cost:$${Math.floor(CostSecond)}`
    ThirdCost.textContent = `Cost:$${Math.floor(CostThird)}`
    FourthCost.textContent = `Cost:$${Math.floor(CostFourth)}`
    FifthCost.textContent = `Cost:$${Math.floor(CostFifth)}`
    SixthCost.textContent = `Cost:$${Math.floor(CostSixth)}`
    SeventhCost.textContent = `Cost:$${Math.floor(CostSeventh)}`
    EighthCost.textContent = `Cost:$${Math.floor(CostEighth)}`
    NinthCost.textContent = `Cost:$${Math.floor(CostNinth)}`
    loadAutoclickers()
}
function loadAutoclickers(){
    for(i = 0; i > maxAutoClickers1; i++){
        let intervalId = setInterval(autoClick1, autoClickTimer);
    }
    if(maxAutoClickers1 >= 20){
        ThirdCost.textContent = `Max amount`
    }
    
    for(i = 0; i > maxAutoClickers2; i++){
        let intervalId = setInterval(autoClick2, autoClickTimer);
    }
    if(maxAutoClickers2 >= 20){
        SixthCost.textContent = `Max amount`
    }
}

function deleteAll() {
    // if (document.cookie && document.cookie !== '') {
    //     const cookies = document.cookie.split(';');
    //     for (let i = 0; i < cookies.length; i++) {
    //         const cookie = cookies[i];
    //         const parts = cookie.split('=');
    //         const name = parts.shift();
    //         document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
    //     }
    // }
    localStorage.clear()
}

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
    if(maxAutoClickers1 < 20) {
        if(cash >= CostThird){
            console.log("Confirm Third Upgrade Bought")
            cash = cash - CostThird
            CostThird = CostThird * 1.5
            let intervalId = setInterval(autoClick1, autoClickTimer);
            cashCount.textContent = `${(Math.round(cash * 100) / 100)}`
            ThirdCost.textContent = `Cost:$${Math.floor(CostThird)}`
            maxAutoClickers1++
        } else {
            console.log("Not enough money")
        }
    } else {
        ThirdCost.textContent = `Max amount`
        console.log("Max Amount")
    }
    
}
function autoClick1(){
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

function FifUpgrade(){
    console.log("Fifth Upgrade")
    if(cash >= CostFifth){
        multiplier = multiplier + .5
        cash = cash - CostFifth
        CostFifth = CostFifth * 1.5
    } else {
        console.log("Not enough money")
    }

    cashCount.textContent = `${(Math.round(cash * 100) / 100)}`
    FifthCost.textContent = `Cost:$${Math.floor(CostFifth)}`
    
}

function SiUpgrade(){
    console.log("Sixth Upgrade")
    if(maxAutoClickers2 < 20) {
        if(cash >= CostSixth){
            console.log("Confirm Sixth Upgrade Bought")
            cash = cash - CostSixth
            CostSixth = CostSixth * 1.5
            let intervalId = setInterval(autoClick2, autoClickTimer)
            cashCount.textContent = `${(Math.round(cash * 100) / 100)}`
            SixthCost.textContent = `Cost:$${Math.floor(CostSixth)}`
            maxAutoClickers2++
        } else {
            console.log("Not enough money")
        }
    } else {
        SixthCost.textContent = `Max amount`
        console.log("Max Amount")
    }
    
}

function autoClick2(){
    for(i=0; i < 3; i++){
    CurrentClickValue = (1 + additionalClicks) * multiplier
    cash = cash + CurrentClickValue
    cashCount.textContent = `${(Math.round(cash * 100) / 100)}`
    }
}

// function SeUpgrade(){
//     console.log("First Upgrade")
//     if(cash >= CostSeventh){
//         additionalClicks++
//         cash = cash - CostSeventh
//         CostSeventh = CostSeventh * 1.5
//     } else {
//         console.log("Not enough money")
//     }
//     cashCount.textContent = `${(Math.round(cash * 100) / 100)}`
//     SeventhCost.textContent = `Cost:$${Math.floor(CostSeventh)}`
// }

// function EiUpgrade(){
//     console.log("Eighth Upgrade")
//     if(cash >= CostEighth){
//         multiplier = multiplier + 3
//         cash = cash - CostEighth
//         CostEighth = CostEighth * 1.5
//     } else {
//         console.log("Not enough money")
//     }

//     cashCount.textContent = `${(Math.round(cash * 100) / 100)}`
//     EighthCost.textContent = `Cost:$${Math.floor(CostEighth)}`
    
// }

firstUpgrade.addEventListener('click', FiUpgrade)
secondUpgrade.addEventListener('click', SeUpgrade)
thirdUpgrade.addEventListener('click', ThUpgrade)
fourthUpgrade.addEventListener('click', FoUpgrade)
fifthUpgrade.addEventListener('click', FifUpgrade)
sixthUpgrade.addEventListener('click', SiUpgrade)
clickerDisplay.addEventListener('click', ClickIndication)

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      // Action to perform when spacebar is pressed
      console.log('Spacebar was pressed');
      cash = cash + 10000000000000
      cashCount.textContent = `${(Math.round(cash * 100) / 100)}`
    }
  });