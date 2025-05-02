const clickerDisplay = document.getElementById("clickerDisplay")
const plus = `<div>+1</div>`//document.getElementById("plus");
const box = document.getElementById("leftContainerInners")
const cashCount = document.getElementById("cashCount")
const AlertBoxInners = document.getElementById("AlertBoxInners")
const RightHeaderControls = document.getElementById('RightHeaderControls')

//First Upgrade
const firstUpgrade = document.getElementById('firstUpgrade')
const FirstCost = document.getElementById('FirstCost')
let CostFirst = 10
//Second Upgrade
const secondUpgrade = document.getElementById('secondUpgrade')
const SecondCost = document.getElementById('SecondCost')
let CostSecond = 25
//Third Upgrade
const thirdUpgrade = document.getElementById('thirdUpgrade')
const ThirdCost = document.getElementById('ThirdCost')
let CostThird = 50
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
let CostSixth = 10000
//Seventh Upgrade
const seventhUpgrade = document.getElementById('seventhUpgrade')
const SeventhCost = document.getElementById('SeventhCost')
let CostSeventh = 20000
//Eighth Upgrade
const eighthUpgrade = document.getElementById('eighthUpgrade')
const EighthCost = document.getElementById('EighthCost')
let CostEighth = 40000
//Ninth Upgrade
const ninthUpgrade = document.getElementById('ninthUpgrade')
const NinthCost = document.getElementById('NinthCost')
let CostNinth = 60000
//Tenth Upgrade
const tenthUpgrade = document.getElementById('tenthUpgrade')
const TenthCost = document.getElementById('TenthCost')
let CostTenth = 5000000

let cash = 0
let multiplier = 1
let additionalClicks = 0
let autoClickTimer = 1000
let CurrentClickValue = (1 + additionalClicks) * multiplier
let maxAutoClickers1 = 0
let maxAutoClickers2 = 0
let maxAutoClickers3 = 0
let current = 0
let totalRebriths = 0

let intervalId1 = null

let intervalId2 = null

let intervalId3 = null

function addThousandSeparators(number) {
    if(number >= 1000000){
        if(number >= 1000000000){
            if(number >= 1000000000000){
                number = `${(number/1000000000000).toFixed(2)}Tril`
            } else {
                number = `${(number/1000000000).toFixed(2)}Bil`
            }
        } else {
            number = `${(number/1000000).toFixed(2)}Mil`
        }
    }
    
    return number.toLocaleString();
  }

FirstCost.textContent = `Cost:$${addThousandSeparators(CostFirst)}`
SecondCost.textContent = `Cost:$${addThousandSeparators(CostSecond)}`
ThirdCost.textContent = `Cost:$${addThousandSeparators(CostThird)}`
FourthCost.textContent = `Cost:$${addThousandSeparators(CostFourth)}`
FifthCost.textContent = `Cost:$${addThousandSeparators(CostFifth)}`
SixthCost.textContent = `Cost:$${addThousandSeparators(CostSixth)}`
SeventhCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSeventh))}`
EighthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostEighth))}`
NinthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostNinth))}`
TenthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostTenth))}`

// const name = prompt("Insert your name")
// document.cookie = `name=${name}`


// PLace here
// let alerts = Array.from(document.querySelectorAll(".AlertBox-inners p")) //make array of all p tags in AlertBoxInners
// alerts.pop //remove last from array 
// AlertBoxInners.innerHTML = alerts //put back all the other alerts


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
// AlertBoxInners.innerHTML += "Hi"
function save(){
    console.log("File saved")
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
    // document.cookie = `maxAutoClickers1=${maxAutoClickers1}`
    localStorage.setItem("maxAutoClickers2", maxAutoClickers2)
    // document.cookie = `maxAutoClickers2=${maxAutoClickers2}`
    localStorage.setItem("maxAutoClickers3", maxAutoClickers3)
    // document.cookie = `maxAutoClickers3=${maxAutoClickers3}`
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
    AlertBoxInners.innerHTML += `<p style="color: Green; font-size: bold;">Saved Progress!<p>`
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
    maxAutoClickers3 = Number(localStorage.getItem("maxAutoClickers3"))//Number(getCookie('maxAutoClickers3'))
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
    console.log("Made it")
}

function loadAutoclickers(){
    console.log("Hello")
    console.log(maxAutoClickers1)
    for(let i = 0; i < maxAutoClickers1; i++){
        let intervalId = setInterval(autoClick1, autoClickTimer);
        console.log("Goes into loop")
    }
    if(maxAutoClickers1 >= 20){
        ThirdCost.textContent = `Max amount`
    }
    
    for(let i = 0; i < maxAutoClickers2; i++){
        let intervalId = setInterval(autoClick2, autoClickTimer);
    }
    if(maxAutoClickers2 >= 20){
        SixthCost.textContent = `Max amount`
    }
    for(let i = 0; i < maxAutoClickers3; i++){
        let intervalId = setInterval(autoClick3, autoClickTimer);
    }
    if(maxAutoClickers3 >= 20){
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
    if(confirm("Are you sure you want to delete your progress???")){
        localStorage.clear()
    } else{
        console.log("someone misclikced")
    }
    AlertBoxInners.innerHTML += "<p>Deleted All Progress<p>"
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
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
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

let alerts = []

function DisplayArray(){
    AlertBoxInners.innerHTML = " "
    for(let i = 0; i < alerts.length; i++){
        AlertBoxInners.innerHTML += alerts[i]
    }
}

function PopsArray() {
    // function DisplayArray(){
    //     for(let i = 0; i < alerts.length; i++){
    //         AlertBoxInners.innerHTML += alerts[i]
    //     }
    // }
    // alerts = Array.from(document.querySelectorAll(".AlertBox-inners p")) //make array of all p tags in AlertBoxInners
    alerts.pop() //remove last from array 
    // console.log(alerts)
    alerts.forEach(alert => AlertBoxInners.innerHTML = alert )
     //put back all the other alerts
    // console.log("pop")
}

setInterval(PopsArray, 2000)
setInterval(DisplayArray, 1)

let SelectArray = [
    [CostFirst, firstUpgrade],
    [CostSecond, secondUpgrade],
    [CostThird, thirdUpgrade],
    [CostFourth, fourthUpgrade],
    [CostFifth, fifthUpgrade],
    [CostSixth, sixthUpgrade],
    [CostSeventh, seventhUpgrade],
    [CostEighth, eighthUpgrade],
    [CostNinth, ninthUpgrade],
    [CostTenth, tenthUpgrade]
]

function select(){
    SelectArray = [
        [CostFirst, firstUpgrade],
        [CostSecond, secondUpgrade],
        [CostThird, thirdUpgrade],
        [CostFourth, fourthUpgrade],
        [CostFifth, fifthUpgrade],
        [CostSixth, sixthUpgrade],
        [CostSeventh, seventhUpgrade],
        [CostEighth, eighthUpgrade],
        [CostNinth, ninthUpgrade],
        [CostTenth, tenthUpgrade]
    ]
    console.log("We are here")
    console.log(SelectArray[current][0])
    if(cash <= SelectArray[current][0]){
        console.log("Not enough Cash")
        SelectArray[current][1].style.border = ("5px solid red")
    } else {
        console.log("Has Enough Cash")
        SelectArray[current][1].style.border = ("5px solid greenyellow")
    }
}
function unselect(){
    firstUpgrade.style.border = ("none")
    secondUpgrade.style.border = ("none")
    thirdUpgrade.style.border = ("none")
    fourthUpgrade.style.border = ("none")
    fifthUpgrade.style.border = ("none")
    sixthUpgrade.style.border = ("none")
    seventhUpgrade.style.border = ("none")
    eighthUpgrade.style.border = ("none")
    ninthUpgrade.style.border = ("none")
    tenthUpgrade.style.border = ("none")
}

function FiUpgrade(){
    console.log("First Upgrade")
    if(cash >= CostFirst){
        additionalClicks++
        cash = cash - CostFirst
        CostFirst = CostFirst * 1.5
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought First Upgrade<p>`)
    } else {
        console.log("Not enough money")
        // AlertBoxInners.innerHTML += `<p style="color: red; font-size: bold;">Not Enough money<p>`
        alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)
    }
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    FirstCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFirst))}`
}
function SeUpgrade(){
    console.log("Second Upgrade")
    if(cash >= CostSecond){
        multiplier = multiplier + .2
        cash = cash - CostSecond
        CostSecond = CostSecond * 1.5
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Second Upgrade<p>`)

    } else {
        console.log("Not enough money")
        AlertBoxInners.innerHTML += `<p style="color: red; font-size: bold;">Not Enough money<p>`
    }
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    SecondCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSecond))}`
}
function ThUpgrade(){
    console.log("Third Upgrade")
    if(maxAutoClickers1 < 20) {
        if(cash >= CostThird){
            console.log("Confirm Third Upgrade Bought")
            cash = cash - CostThird
            CostThird = CostThird * 1.5
            intervalId1 = setInterval(autoClick1, autoClickTimer);
            cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
            ThirdCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostThird))}`
            maxAutoClickers1++
            alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Third Upgrade<p>`)
        } else {
            console.log("Not enough money")
            AlertBoxInners.innerHTML += `<p style="color: red; font-size: bold;">Not Enough money<p>`
        }
    } else {
        ThirdCost.textContent = `Max amount`
        console.log("Max Amount")
    }
}
function autoClick1(){
    CurrentClickValue = (1 + additionalClicks) * multiplier
    cash = cash + CurrentClickValue
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`

}

function FoUpgrade(){
    console.log("Fourth Upgrade")
        if(cash >= CostFourth){
            additionalClicks = additionalClicks + 5
            cash = cash - CostFourth
            CostFourth = CostFourth * 1.5
            FourthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFourth))}`
            alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Fourth Upgrade<p>`)

        } else {
            console.log("Not enough money")
            AlertBoxInners.innerHTML += `<p style="color: red; font-size: bold;">Not Enough money<p>`
        }
        cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
}

function FifUpgrade(){
    console.log("Fifth Upgrade")
    if(cash >= CostFifth){
        multiplier = multiplier + .5
        cash = cash - CostFifth
        CostFifth = CostFifth * 1.5
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Fifth Upgrade<p>`)

    } else {
        console.log("Not enough money")
        AlertBoxInners.innerHTML += `<p style="color: red; font-size: bold;">Not Enough money<p>`
    }

    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    FifthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFifth))}`
    
}

function SiUpgrade(){
    console.log("Sixth Upgrade")
    if(maxAutoClickers2 < 20) {
        if(cash >= CostSixth){
            console.log("Confirm Sixth Upgrade Bought")
            cash = cash - CostSixth
            CostSixth = CostSixth * 1.5;
            
            intervalId2 = setInterval(autoClick2, autoClickTimer)
            cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
            SixthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSixth))}`
            maxAutoClickers2++
            alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Sixth Upgrade<p>`)

        } else {
            console.log("Not enough money")
            AlertBoxInners.innerHTML += `<p style="color: red; font-size: bold;">Not Enough money<p>`
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
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    }
}

function SevUpgrade(){
    console.log("Seventh Upgrade")
    if(cash >= CostSeventh){
        additionalClicks++
        cash = cash - CostSeventh
        CostSeventh = CostSeventh * 1.5
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Seventh Upgrade<p>`)

    } else {
        console.log("Not enough money")
        AlertBoxInners.innerHTML += `<p style="color: red; font-size: bold;">Not Enough money<p>`
    }
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    SeventhCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSeventh))}`
}

function EiUpgrade(){
    console.log("Eighth Upgrade")
    if(cash >= CostEighth){
        multiplier = multiplier + 3
        cash = cash - CostEighth
        CostEighth = CostEighth * 1.5
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Eighth Upgrade<p>`)

    } else {
        console.log("Not enough money")
        AlertBoxInners.innerHTML += `<p style="color: red; font-size: bold;">Not Enough money<p>`
    }

    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    EighthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostEighth))}`
}

function NiUpgrade(){
    console.log("Ninth Upgrade")
    if(maxAutoClickers3 < 20) {
        if(cash >= CostNinth){
            console.log("Confirm Ninth Upgrade Bought")
            cash = cash - CostNinth
            CostNinth = CostNinth * 1.5
            intervalId3 = setInterval(autoClick3, autoClickTimer)
            cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
            NinthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostNinth))}`
            maxAutoClickers2++
            alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Ninth Upgrade<p>`)

        } else {
            console.log("Not enough money")
            AlertBoxInners.innerHTML += `<p style="color: red; font-size: bold;">Not Enough money<p>`
        }
    } else {
        NinthCost.textContent = `Max amount`
        console.log("Max Amount")
    }
}

function autoClick3(){
    for(i=0; i < 10; i++){
    CurrentClickValue = (1 + additionalClicks) * multiplier
    cash = cash + CurrentClickValue
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    }
}

function rebirth(){
    console.log("rebirthed")
    if(cash >= CostTenth){
        console.log("confirm tenth upgrade bought")
        cash = 0
        CostTenth = CostTenth * 100
        cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) /100))}`
        TenthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostTenth))}`
        totalRebriths++
        resetNum()
        RightHeaderControls.style.display = "flex"
    } else{
        console.log("Not enough money")

    }
}

function resetNum(){
    console.log("Reset Numbers")
    let CostFirst = 10
    let CostSecond = 25
    let CostThird = 50
    CostFourth = 1000
    CostFifth = 2500
    CostSixth = 10000
    CostSeventh = 20000
    CostEighth = 40000
    CostNinth = 60000
    cash = 0
    multiplier = 1
    additionalClicks = 0
    autoClickTimer = 1000
    CurrentClickValue = (1 + additionalClicks) * multiplier
    for(i = 0; i < maxAutoClickers1; i++){clearInterval(intervalId1)}
    for(i = 0; i < maxAutoClickers2; i++){clearInterval(intervalId2)}
    for(i = 0; i < maxAutoClickers3; i++){clearInterval(intervalId3)}
    maxAutoClickers1 = 0
    maxAutoClickers2 = 0
    maxAutoClickers3 = 0

    FirstCost.textContent = `Cost:$${addThousandSeparators(CostFirst)}`
    SecondCost.textContent = `Cost:$${addThousandSeparators(CostSecond)}`
    ThirdCost.textContent = `Cost:$${addThousandSeparators(CostThird)}`
    FourthCost.textContent = `Cost:$${addThousandSeparators(CostFourth)}`
    FifthCost.textContent = `Cost:$${addThousandSeparators(CostFifth)}`
    SixthCost.textContent = `Cost:$${addThousandSeparators(CostSixth)}`
    SeventhCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSeventh))}`
    EighthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostEighth))}`
    NinthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostNinth))}`
}

firstUpgrade.addEventListener('click', FiUpgrade)
firstUpgrade.addEventListener('mouseout', unselect)
firstUpgrade.addEventListener('mousemove', function(){
    current = 0
    select()
    console.log(current)
})

secondUpgrade.addEventListener('click', SeUpgrade)
secondUpgrade.addEventListener('mouseout', unselect)
secondUpgrade.addEventListener('mousemove', function(){
    current = 1
    select()
    console.log(current)
})

thirdUpgrade.addEventListener('click', ThUpgrade)
thirdUpgrade.addEventListener('mouseout', unselect)
thirdUpgrade.addEventListener('mousemove', function(){
    current = 2
    select()
    console.log(current)
})

fourthUpgrade.addEventListener('click', FoUpgrade)
fourthUpgrade.addEventListener('mouseout', unselect)
fourthUpgrade.addEventListener('mousemove', function(){
    current = 3
    select()
    console.log(current)
})

fifthUpgrade.addEventListener('click', FifUpgrade)
fifthUpgrade.addEventListener('mouseout', unselect)
fifthUpgrade.addEventListener('mousemove', function(){
    current = 4
    select()
    console.log(current)
})

sixthUpgrade.addEventListener('click', SiUpgrade)
sixthUpgrade.addEventListener('mouseout', unselect)
sixthUpgrade.addEventListener('mousemove', function(){
    current = 5
    select()
    console.log(current)
})

seventhUpgrade.addEventListener('click', SevUpgrade)
seventhUpgrade.addEventListener('mouseout', unselect)
seventhUpgrade.addEventListener('mousemove', function(){
    current = 6
    select()
    console.log(current)
})

eighthUpgrade.addEventListener('click', EiUpgrade)
eighthUpgrade.addEventListener('mouseout', unselect)
eighthUpgrade.addEventListener('mousemove', function(){
    current = 7
    select()
    console.log(current)
})

ninthUpgrade.addEventListener('click', NiUpgrade)
ninthUpgrade.addEventListener('mouseout', unselect)
ninthUpgrade.addEventListener('mousemove', function(){
    current = 8
    select()
    console.log(current)
})

tenthUpgrade.addEventListener('click', rebirth)
tenthUpgrade.addEventListener('mouseout', unselect)
tenthUpgrade.addEventListener('mousemove', function(){
    current = 9
    select()
    console.log(current)
})

clickerDisplay.addEventListener('click', ClickIndication)

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      // Action to perform when spacebar is pressed
      console.log('Spacebar was pressed');
      cash = cash + 10000000000000
      cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    }
  });
