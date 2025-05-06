const clickerDisplay = document.getElementById("clickerDisplay")
const plus = `<div>+1</div>`//document.getElementById("plus");
const box = document.getElementById("leftContainerInners")
const cashCount = document.getElementById("cashCount")
const AlertBoxInners = document.getElementById("AlertBoxInners")
const RightHeaderControls = document.getElementById('RightHeaderControls')
const rightContainerInners = document.getElementById("rightContainerInners")
const rightContainerHeaderTitle = document.getElementById('rightContainerHeaderTitle')
const rightArrow = document.getElementById("rightArrow")
const leftArrow = document.getElementById('leftArrow')
const progress = document.getElementById('progress')
const totalPart1 = document.getElementById('totalPart1')
const totalPart2 = document.getElementById('totalPart2')
const totalPart3 = document.getElementById('totalPart3')
const totalPart4 = document.getElementById('totalPart4')
const totalPart5 = document.getElementById('totalPart5')

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
//Firsth Super Upgrade
const FirstSuperUpgrade = document.getElementById('FirstSuperUpgrade')
const FirstSuperCost = document.getElementById("FirstSuperCost")
let CostFirstSuper = 300000
//Second Super Upgrade
const SecondSuperUpgrade = document.getElementById('SecondSuperUpgrade')
const SecondSuperCost = document.getElementById("SecondSuperCost")
let CostSecondSuper = 0
//Firsth Super Upgrade
const ThirdSuperUpgrade = document.getElementById('ThirdSuperUpgrade')
const ThirdSuperCost = document.getElementById("ThirdSuperCost")
let CostThirdSuper = 0
//Firsth Super Upgrade
const FourthSuperUpgrade = document.getElementById('FourthSuperUpgrade')
const FourthSuperCost = document.getElementById("FourthSuperCost")
let CostFourthSuper = 0
//Firsth Super Upgrade
const FifthSuperUpgrade = document.getElementById('FifthSuperUpgrade')
const FifthSuperCost = document.getElementById("FifthSuperCost")
let CostFifthSuper = 0

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

let totalAutoClickers1 = 0
let totalAutoClickers2 = 0
let totalAutoClickers3 = 0

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
function callAllCostValues(){
    FirstCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFirst))}`
    SecondCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSecond))}`
    ThirdCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostThird))}`
    FourthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFourth))}`
    FifthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFifth))}`
    SixthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSixth))}`
    SeventhCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSeventh))}`
    EighthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostEighth))}`
    NinthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostNinth))}`
    TenthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostTenth))}`
    FirstSuperCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFirstSuper))}`
}
callAllCostValues()

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
    localStorage.setItem("intervalId1", intervalId1)
    // document.cookie = `intervalId1=${intervalId1}`
    localStorage.setItem("intervalId2", intervalId2)
    // document.cookie = `intervalId2=${intervalId2}`
    localStorage.setItem("intervalId3", intervalId3)
    // document.cookie = `intervalId3=${intervalId3}`
    localStorage.setItem("totalAutoClickers1", totalAutoClickers1)
    // document.cookie = `totalAutoClickers1=${totalAutoClickers1}`
    localStorage.setItem("totalAutoClickers2", totalAutoClickers2)
    // document.cookie = `totalAutoClickers2=${totalAutoClickers2}`
    localStorage.setItem("totalAutoClickers3", totalAutoClickers3)
    // document.cookie = `totalAutoClickers3=${totalAutoClickers3}`
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
    localStorage.setItem("CostTenth", CostTenth)
    // document.cookie = `CostTenth=${CostTenth}`
    localStorage.setItem("totalRebriths", totalRebriths)
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
    totalAutoClickers1 = Number(localStorage.getItem("totalAutoClickers1"))
    totalAutoClickers2 = Number(localStorage.getItem("totalAutoClickers2"))
    totalAutoClickers3 = Number(localStorage.getItem("totalAutoClickers3"))
    CostFirst = Number(localStorage.getItem("CostFirst"))//Number(getCookie('CostFirst'))
    CostSecond = Number(localStorage.getItem("CostSecond"))//Number(getCookie('CostSecond'))
    CostThird = Number(localStorage.getItem("CostThird"))//Number(getCookie('CostThird'))
    CostFourth = Number(localStorage.getItem("CostFourth"))//Number(getCookie('CostFourth'))
    CostFifth = Number(localStorage.getItem("CostFifth"))//Number(getCookie('CostFifth'))
    CostSixth = Number(localStorage.getItem("CostSixth"))//Number(getCookie('CostSixth'))
    CostSeventh = Number(localStorage.getItem("CostSeventh"))//Number(getCookie('CostSeventh'))
    CostEighth = Number(localStorage.getItem("CostEighth"))//Number(getCookie('CostEighth'))
    CostNinth = Number(localStorage.getItem("CostNinth"))//Number(getCookie('CostNinth'))
    CostTenth = Number(localStorage.getItem("CostTenth"))//Number(getCookie('CostNinth'))
    totalRebriths = Number(localStorage.getItem("totalRebriths"))

    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    FirstCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFirst))}`
    SecondCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSecond))}`
    ThirdCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostThird))}`
    FourthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFourth))}`
    FifthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFifth))}`
    SixthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSixth))}`
    SeventhCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSeventh))}`
    EighthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostEighth))}`
    NinthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostNinth))}`
    TenthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostTenth))}`

    loadAutoclickers()
    console.log("Made it")

    if(totalRebriths > 0){
        RightHeaderControls.style.display = "flex"
    }
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

function changeUpgrades(){
    rightContainerHeaderTitle.textContent = "Super Upgrades"
    firstUpgrade.classList.add("hidden")
    secondUpgrade.classList.add("hidden")
    thirdUpgrade.classList.add("hidden")
    fourthUpgrade.classList.add("hidden")
    fifthUpgrade.classList.add("hidden")
    sixthUpgrade.classList.add("hidden")
    seventhUpgrade.classList.add("hidden")
    eighthUpgrade.classList.add("hidden")
    ninthUpgrade.classList.add("hidden")
    tenthUpgrade.classList.add("hidden")
    FirstSuperUpgrade.classList.remove("hidden")
    SecondSuperUpgrade.classList.remove("hidden")
    ThirdSuperUpgrade.classList.remove("hidden")
    FourthSuperUpgrade.classList.remove("hidden")
    FifthSuperUpgrade.classList.remove("hidden")

    rightContainerInners.classList.add("right-container-inners-upgraded")
    rightContainerInners.classList.remove("right-container-inners")
    callAllCostValues()
}

function changeUpgradesBack(){
    rightContainerHeaderTitle.textContent = "Upgrades"
    firstUpgrade.classList.remove("hidden")
    secondUpgrade.classList.remove("hidden")
    thirdUpgrade.classList.remove("hidden")
    fourthUpgrade.classList.remove("hidden")
    fifthUpgrade.classList.remove("hidden")
    sixthUpgrade.classList.remove("hidden")
    seventhUpgrade.classList.remove("hidden")
    eighthUpgrade.classList.remove("hidden")
    ninthUpgrade.classList.remove("hidden")
    tenthUpgrade.classList.remove("hidden")
    FirstSuperUpgrade.classList.add("hidden")
    SecondSuperUpgrade.classList.add("hidden")
    ThirdSuperUpgrade.classList.add("hidden")
    FourthSuperUpgrade.classList.add("hidden")
    FifthSuperUpgrade.classList.add("hidden")
    rightContainerInners.classList.add("right-container-inners")
    rightContainerInners.classList.remove("right-container-inners-upgraded")
    callAllCostValues()
}

function addMoney(){
    cash = (cash + (1 + additionalClicks) * multiplier)
    CurrentClickValue = (1 + additionalClicks) * multiplier
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
}

function findPart(){
}

function ClickIndication(){
    console.log("click")
    addMoney()
    findPart()
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

function exitInventory(){
    Invetory.style.display = "none"
}
function openInventory(){
    Invetory.style.display = "flex"
}

function progressCheck(){
    let Progression = (cash/CostTenth) * 100
    if (Progression > 100){
        progress.style.width = `100%`
    } else{
        console.log(Progression)
        progress.style.width = `${Progression}%`  
    }
}
setInterval(progressCheck, 1)

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

setInterval(PopsArray, 1500)
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
function ThUpgrade() {
    console.log("Third Upgrade");
    
    // Check if the number of auto-clickers is less than 20
    if (maxAutoClickers1 < 20) {
        // Check if there's enough cash to buy the upgrade
        if (cash >= CostThird) {
            console.log("Confirm Third Upgrade Bought");
            
            // Deduct the cost from the cash
            cash = cash - CostThird;
            // Increase the cost for the next upgrade
            CostThird = CostThird * 1.5;
            
            // Clear the previous interval (if it exists)
            if (intervalId1) {
                clearInterval(intervalId1);
            }
            
            // Set the new interval
            intervalId1 = setInterval(autoClick1, autoClickTimer);
            
            // Update the UI elements
            cashCount.textContent = `${addThousandSeparators(Math.round(cash * 100) / 100)}`;
            ThirdCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostThird))}`;
            
            // Increment the max auto-clickers counter
            maxAutoClickers1++;
            
            // Add an alert for the purchase
            alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Third Upgrade<p>`);
        } else {
            console.log("Not enough money");
            AlertBoxInners.innerHTML += `<p style="color: red; font-size: bold;">Not Enough money<p>`;
        }
    } else {
        ThirdCost.textContent = `Max amount`;
        console.log("Max Amount");
    }
}
function autoClick1(){
    totalAutoClickers1++
    for(i=0; i <= totalAutoClickers1; i++){
        CurrentClickValue = (1 + additionalClicks) * multiplier
        cash = cash + CurrentClickValue
        cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    }
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
            
            // Clear the previous interval (if it exists)
            if (intervalId2) {
                clearInterval(intervalId2);
            }
            
            // Set the new interval
            intervalId2 = setInterval(autoClick2, autoClickTimer);

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
    totalAutoClickers2++
    for(i = 0; i < totalAutoClickers2; i++){
        for(a=0; a < 3; a++){
        CurrentClickValue = (1 + additionalClicks) * multiplier
        cash = cash + CurrentClickValue
        cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
        }
    }
}

function SevUpgrade(){
    console.log("Seventh Upgrade")
    if(cash >= CostSeventh){
        additionalClicks = additionalClicks + 20
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

            // Clear the previous interval (if it exists)
            if (intervalId3) {
                clearInterval(intervalId3);
            }
            
            // Set the new interval
            intervalId3 = setInterval(autoClick3, autoClickTimer);

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
    totalAutoClickers3++
    for(i = 0; i < totalAutoClickers3; i++){
        for(a=0; a < 10; a++){
        CurrentClickValue = (1 + additionalClicks) * multiplier
        cash = cash + CurrentClickValue
        cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
        }
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
        if(totalRebriths = 1){
            RightHeaderControls.style.display = "flex"
        }
        alerts.unshift(`<p style="color: pink; font-size: bold;">Rebirthed!<p>`)

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
    if (intervalId1) {
        clearInterval(intervalId1);
        clearInterval(autoClick3)

        intervalId1 = null; // optional: reset the variable
      }
      if (intervalId2) {
        clearInterval(intervalId2);
    }
      if (intervalId3) {
        clearInterval(intervalId3);
        clearInterval(autoClick3)
        intervalId3 = null; // optional: reset the variable
      }
    // for(i = 0; i < maxAutoClickers1; i++){clearInterval(intervalId1)}
    // for(i = 0; i < maxAutoClickers2; i++){clearInterval(intervalId2)}
    // for(i = 0; i < maxAutoClickers3; i++){clearInterval(intervalId3)}
    maxAutoClickers1 = 0
    maxAutoClickers2 = 0
    maxAutoClickers3 = 0
    // intervalId1 = null
    // intervalId2 = null
    // intervalId3 = null

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

function FiSuperUpgrade(){
    if(cash >= CostFirstSuper){
        console.log("First Super Upgrade")
        additionalClicks = additionalClicks + 300
        cash = cash - CostFirstSuper
        CostFirstSuper = CostFirstSuper * 1.5
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought First Super Upgrade<p>`)

    } else {
        console.log("Not enough money")
        AlertBoxInners.innerHTML += `<p style="color: red; font-size: bold;">Not Enough money<p>`
    }
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    FirstSuperCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFirstSuper))}`
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

FirstSuperUpgrade.addEventListener('click', FiSuperUpgrade)

rightArrow.addEventListener('click', changeUpgrades)
leftArrow.addEventListener('click', changeUpgradesBack)
clickerDisplay.addEventListener('click', ClickIndication)

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      // Action to perform when spacebar is pressed
      console.log('Spacebar was pressed');
      cash = cash + 100000
      cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    }
  });