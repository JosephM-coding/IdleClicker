const clickerDisplay = document.getElementById("clickerDisplay")
const leftContainerInners = document.getElementById("leftContainerInners")
const plus = document.getElementById("plus");
const cashCount = document.getElementById("cashCount")
const AlertBoxInners = document.getElementById("AlertBoxInners")
const RightHeaderControls = document.getElementById('RightHeaderControls')
const rightContainerInners = document.getElementById("rightContainerInners")
const leftContainer = document.getElementById("leftContainer")
const middleContainer = document.getElementById("middleContainer")
const rightContainer = document.getElementById("rightContainer")
const rightContainerHeaderTitle = document.getElementById('rightContainerHeaderTitle')
const rightContainerHeader = document.getElementById('rightContainerHeader')
const middleContainerHeader = document.getElementById('middleContainerHeader')
const leftContainerHeader = document.getElementById('leftContainerHeader')
const body = document.getElementById("body")
const gameContainer = document.getElementById("gameContainer")
const rightArrow = document.getElementById("rightArrow")
const leftArrow = document.getElementById('leftArrow')
const progress = document.getElementById('progress')
const totalPart1 = document.getElementById('totalPart1')
const totalPart2 = document.getElementById('totalPart2')
const totalPart3 = document.getElementById('totalPart3')
const totalPart4 = document.getElementById('totalPart4')
const totalPart5 = document.getElementById('totalPart5')
const totalUpgrade1 = document.getElementById('totalUpgrade1')
const totalUpgrade2 = document.getElementById('totalUpgrade2')
const totalUpgrade3 = document.getElementById('totalUpgrade3')
const totalUpgrade4 = document.getElementById('totalUpgrade4')
const totalUpgrade5 = document.getElementById('totalUpgrade5')
const totalUpgrade6 = document.getElementById('totalUpgrade6')
const totalUpgrade7 = document.getElementById('totalUpgrade7')
const totalUpgrade8 = document.getElementById('totalUpgrade8')
const totalUpgrade9 = document.getElementById('totalUpgrade9')
const totalSuperUpgrade1 = document.getElementById('totalSuperUpgrade1')
const totalSuperUpgrade2 = document.getElementById('totalSuperUpgrade2')

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
//First Super Upgrade
const FirstSuperUpgrade = document.getElementById('FirstSuperUpgrade')
const FirstSuperCost = document.getElementById("FirstSuperCost")
let CostFirstSuper = 300000
//Second Super Upgrade
const SecondSuperUpgrade = document.getElementById('SecondSuperUpgrade')
const SecondSuperCost = document.getElementById("SecondSuperCost")
let CostSecondSuper = 500000
//Third Super Upgrade
const ThirdSuperUpgrade = document.getElementById('ThirdSuperUpgrade')
const ThirdSuperCost = document.getElementById("ThirdSuperCost")
let CostThirdSuper = 20000000
//Fourth Super Upgrade
const FourthSuperUpgrade = document.getElementById('FourthSuperUpgrade')
const FourthSuperCost = document.getElementById("FourthSuperCost")
let CostFourthSuper = 25000
//Fifth Super Upgrade
const FifthSuperUpgrade = document.getElementById('FifthSuperUpgrade')
const FifthSuperCost = document.getElementById("FifthSuperCost")
let CostFifthSuper = 1000000000000000

let cash = 0
let multiplier = 1
let additionalClicks = 0
let autoClickTimer = 1000
let ConsolePopTime = 5000
let CurrentClickValue = (1 + additionalClicks) * multiplier
let maxAutoClickers1 = 0
let maxAutoClickers2 = 0
let maxAutoClickers3 = 0
let current = 0
let totalRebriths = 0
let page = 1
let part1 = 0
let part2 = 0
let part3 = 0
let part4 = 0
let part5 = 0

let intervalId1 = null
let intervalId2 = null
let intervalId3 = null

let theme = 0
let initialNum = 0

let totalAutoClickers1 = 0
let totalAutoClickers2 = 0
let totalAutoClickers3 = 0

let totalUpgrade1amount = 0
let totalUpgrade2amount = 0
let totalUpgrade3amount = 0
let totalUpgrade4amount = 0
let totalUpgrade5amount = 0
let totalUpgrade6amount = 0
let totalUpgrade7amount = 0
let totalUpgrade8amount = 0
let totalUpgrade9amount = 0
let totalSuperUpgrade1amount = 0
let totalSuperUpgrade2amount = 0

//A function that limits numbers to a smaller name by giving it a indicator once it passes a certian value
function addThousandSeparators(number) {
    if(number >= 1000000){
        if(number >= 1000000000){
            if(number >= 1000000000000){
                if(number >= 1000000000000000){
                    number = `${(number/1000000000000000).toFixed(2)}Quad`
                }else{
                    number = `${(number/1000000000000).toFixed(2)}Tril`
                }
            } else {
                number = `${(number/1000000000).toFixed(2)}Bil`
            }
        } else {
            number = `${(number/1000000).toFixed(2)}Mil`
        }
    }
    
    return number.toLocaleString();
}
//It calls each value of every upgrade to list its cost
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
    SecondSuperCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSecondSuper))}`
    ThirdSuperCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostThirdSuper))}`
    FourthSuperCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFourthSuper))}`
    FifthSuperCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFifthSuper))}`
}
callAllCostValues()

//Saves your theme preference
theme = Number(localStorage.getItem("theme"))
console.log(theme)
if (theme != 1){
    theme = 1
    ChangeTheme()
}

//Changes theme once the button is clicked
function ChangeTheme(){
    console.log("Here")
    if(theme == 1){
        console.log("There")
        if(page == 1){
            rightContainerHeader.style.backgroundColor = "cornflowerblue"
            rightContainerHeader.style.color = "powderblue"
        }
        middleContainerHeader.style.backgroundColor = "cornflowerblue"
        middleContainerHeader.style.color = "powderblue"
        leftContainerHeader.style.backgroundColor = "cornflowerblue"
        leftContainerHeader.style.color = "powderblue"
        document.querySelectorAll(".right-container-inners > div").forEach((Element)=>{
            Element.style.backgroundColor = "blue"
            Element.style.color = 'powderblue'
        })
        Invetory.style.backgroundColor = "blue"
        Invetory.style.color = "powderblue"
        Upgrades.style.backgroundColor = "blue"
        Upgrades.style.color = "powderblue"
        rightContainer.style.border = "none"
        middleContainer.style.border = "none"
        leftContainer.style.border = "none"
        leftContainerInners.style.background = "rgba(0, 0, 255, 0)"
        rightContainer.style.backgroundColor = "rgba(0, 0, 255, 0)"
        leftContainer.style.backgroundColor = "rgba(0, 0, 255, 0)"
        middleContainer.style.backgroundColor = "rgba(0, 0, 255, 0)"
        rightContainerHeader.style.borderRadius = "40px"
        middleContainerHeader.style.borderRadius = "40px"
        leftContainerHeader.style.borderRadius = "40px"
        leftArrow.style.color = "orange"
        rightArrow.style.color = "orange"
        theme = 0
        localStorage.setItem("theme", theme)
    }else if(theme == 0){
        if(page == 1){
            rightContainerHeader.style.backgroundColor = "blue"
            rightContainerHeader.style.color = "powderblue"
        }
        middleContainerHeader.style.backgroundColor = "blue"
        middleContainerHeader.style.color = "powderblue"
        leftContainerHeader.style.backgroundColor = "blue"
        leftContainerHeader.style.color = "powderblue"
        document.querySelectorAll(".right-container-inners > div").forEach((Element)=>{
            Element.style.backgroundColor = "powderblue"
            Element.style.color = "blue"
        })
        Invetory.style.backgroundColor = "powderblue"
        Invetory.style.color = "blue"
        Upgrades.style.backgroundColor = "powderblue"
        Upgrades.style.color = "blue"
        rightContainer.style.border = "1px solid white"
        middleContainer.style.border = "1px solid white"
        leftContainer.style.border = "1px solid white"
        leftContainerInners.style.backgroundImage = "url(giphy.gif)"
        leftContainerInners.style.backgroundSize = "cover"
        rightContainer.style.backgroundColor = "black"
        rightContainerHeader.style.borderRadius = "0px"
        middleContainerHeader.style.borderRadius = "0px"
        leftContainerHeader.style.borderRadius = "0px"
        leftArrow.style.color = "blue"
        rightArrow.style.color = "blue"
        theme = 1
        localStorage.setItem("theme", theme)
    }
}
//Gets every cookie in use, Not in use curently
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
//Saves each value needed to play the game in the local storage
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
    localStorage.setItem("CostCostFirstSuper", CostFirstSuper)
    localStorage.setItem("CostSecondSuper", CostSecondSuper)
    localStorage.setItem("CostThirdSuper", CostThirdSuper)
    localStorage.setItem("CostFourthSuper", CostFourthSuper)
    localStorage.setItem("totalUpgrade1amount", totalUpgrade1amount)
    localStorage.setItem("totalUpgrade2amount", totalUpgrade2amount)
    localStorage.setItem("totalUpgrade3amount", totalUpgrade3amount)
    localStorage.setItem("totalUpgrade4amount", totalUpgrade4amount)
    localStorage.setItem("totalUpgrade5amount", totalUpgrade5amount)
    localStorage.setItem("totalUpgrade6amount", totalUpgrade6amount)
    localStorage.setItem("totalUpgrade7amount", totalUpgrade7amount)
    localStorage.setItem("totalUpgrade8amount", totalUpgrade8amount)
    localStorage.setItem("totalUpgrade9amount", totalUpgrade9amount)
    localStorage.setItem("totalSuperUpgrade1amount", totalSuperUpgrade1amount)
    localStorage.setItem("totalSuperUpgrade2amount", totalSuperUpgrade2amount)
    localStorage.setItem("totalRebriths", totalRebriths)
    localStorage.setItem("part1", part1)
    localStorage.setItem("part1", part2)
    localStorage.setItem("part1", part3)
    localStorage.setItem("part1", part4)
    localStorage.setItem("part1", part5)
    AlertBoxInners.innerHTML += `<p style="color: Green; font-size: bold;">Saved Progress!<p>`

}
//Pulls each value out of the local storage
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
    CostFirstSuper = Number(localStorage.getItem("CostFirstSuper"))
    CostSecondSuper = Number(localStorage.getItem("CostSecondSuper"))
    CostThirdSuper = Number(localStorage.getItem("CostThirdSuper"))
    CostFourthSuper = Number(localStorage.getItem("CostFourthSuper"))
    totalRebriths = Number(localStorage.getItem("totalRebriths"))
    intervalId1 = setInterval(autoClick1, autoClickTimer);
    intervalId2 = setInterval(autoClick2, autoClickTimer);
    intervalId3 = setInterval(autoClick3, autoClickTimer);

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
    FirstSuperCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFirstSuper))}`
    SecondSuperCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSecondSuper))}`
    ThirdSuperCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostThirdSuper))}`
    FourthSuperCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFourthSuper))}`
    totalPart1.textContent = `${part1}`
    totalPart2.textContent = `${part2}`
    totalPart3.textContent = `${part3}`
    totalPart4.textContent = `${part4}`
    totalPart5.textContent = `${part5}`

    if(maxAutoClickers1 >= 20){
        ThirdCost.textContent = `Max Amount`
    }
    if(maxAutoClickers2 >= 20){
        SixthCost.textContent = `Max Amount`
    }
    if(maxAutoClickers3 >= 20){
        NinthCost.textContent = `Max Amount`
    }


    if(totalRebriths > 0){
        RightHeaderControls.style.display = "flex"
    }
}
//Deletes all values in the local storage
function deleteAll() {
    //Deletes all locally stored values
    if(confirm("Are you sure you want to delete your progress???")){
        localStorage.clear()
    } else{
        console.log("someone misclikced")
    }
    AlertBoxInners.innerHTML += "<p>Deleted All Progress<p>"
}

//Upon clicking an element that uses this function is enlarges it slightly
function enlargeItem(imgElement) {
    //Lets the Gif Shown its clicked by growing in size for a milisecond
    imgElement.style.transition = "transform 0.001s ease";
    imgElement.style.transform = "scale(1.1)";

    setTimeout(() => {
        imgElement.style.transform = "scale(1)";
    }, 300);
}
//A real time clock
function updateClock() {
    //Keeps track of the current time to display a real time clock
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    const time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('Clock').innerText = time;
    setTimeout(updateClock, 1000);
}
updateClock();

let second = 0   
let minute = 0
let hour = 0

//Tells how much time has been spent in the browser, Deletes upon refreshing or quiting the browser
function TotalTimeSpent(){
   //Shows how long the browser has not been open
    second++
    if (second >= 60){
        second = 0
        minute++
    }
    if (minute >= 60){
        minute = 0
        hour++
    }
    const time = hour + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
    document.getElementById('TimeSpent').innerText =`Total Time Spent ${time}`;
    setTimeout(TotalTimeSpent, 1000)
}
TotalTimeSpent()

//These two functions allow for the upgrade list to be switched once the user rebirths
function changeUpgrades(){
    page = 2
    rightContainerHeader.style.backgroundColor = "orange"
    rightContainerHeader.style.color = "blue"
    rightContainerHeaderTitle.textContent = "Super Upgrades"
    leftArrow.style.color = "blue"
    rightArrow.style.color = "blue"
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
    page = 1
    if(theme){
        rightContainerHeader.style.backgroundColor = "blue"
        rightContainerHeader.style.color = "powderblue"
    } else{
        rightContainerHeader.style.backgroundColor = "cornflowerblue"
        rightContainerHeader.style.color = "powderblue"
    }
    leftArrow.style.color = "orange"
    rightArrow.style.color = "orange"
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

//Calculates evey variable that can affect the multiplier or iterative value of gaining money and then gives that amount of cash to the total
function addMoney(){
    console.log(CurrentClickValue)
    CurrentClickValue = ((1 + additionalClicks) * multiplier) * (1 + (totalRebriths))
    cash = (cash + CurrentClickValue)
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
}

//A function that gives you a part neccessary to complete the game
function findPart(){
    let RandomNumber = Math.floor((Math.random() * 5) + 1);
    //Random Number 1-5 to determine which part to get
    if(RandomNumber == 1){
        if(part1 >= 10){
            part2++
        } else{
            part1++ 
        }
        totalPart1.textContent = `${part1}`
    }
    if(RandomNumber == 2){
        if(part2 >= 10){
            part3++
        } else{
            part2++ 
        }
        totalPart2.textContent = `${part2}`
    } 
    if(RandomNumber == 3){
        if(part3 >= 10){
            part4++
        } else{
            part3++ 
        }
        totalPart3.textContent = `${part3}`
    }
    if(RandomNumber == 4){
        if(part4 >= 10){
            part5++
        } else{
            part4++ 
        }
        totalPart4.textContent = `${part4}`
    }
    if(RandomNumber == 5){
        if(part5 >= 10){
            part1++
        } else{
            part5++ 
        }
        totalPart5.textContent = `${part5}`
    }
}

//Uses an onlick with HTML to determines when the element is clicked
function ClickIndication(){
    console.log("click")
    addMoney()

    let RandomNumber = Math.floor((Math.random() * 1000) + 1);
    if (RandomNumber == 1){
        findPart()
    }
    
    ClickPlusOne()
    console.log("Here")
    initialNum++
}

//Everytime you click it displays the value of each click
function ClickPlusOne(){
    let boxRect = leftContainerInners.getBoundingClientRect();
    const boxWidth = boxRect.width;
    const boxHeight = boxRect.height;
    console.log(`BoxHeight`,boxHeight)
    console.log(`boxWidth`, boxWidth)
    let left = Math.floor(Math.random() * (boxWidth));
    let bottom = Math.floor(Math.random() * (boxHeight));
    console.log(`Left`, left)
    console.log('Bottom', bottom)
    // let id = Date.now()
    let p = document.createElement('p');
    p.id = initialNum;
    p.style.color = 'gold'
    p.style.fontSize = "20px" 
    p.style.position = "absolute"
    p.style.left = `${left}px`;
    p.style.bottom = `${bottom}px`;
    p.style.animation = "tilt2 1s infinite ease-in-out"
    p.innerText = `+${addThousandSeparators(CurrentClickValue)}`;
    leftContainerInners.appendChild(p)
    // Remove the element after 2 seconds
    setTimeout(() => {
        console.log("detected")
        p.remove();
        // or
        // leftContainerInners.parentNode.removeChild(p)
    }, 2000);
    // setInterval(function(p){
    //     p.remove()
    //     console.log("Detected")
    // }, 3000)

    // leftContainerInners.innerHTML += `<p id="${initialNum}" style="color: gold; font-size: 10px; postition: absolute; top: '${top}'; bottom: '${bottom}'">+1</p>`
    // Update dot's position, using left and top only
    // document.getElementById(`${initialNum}`).style.left = `${left}px`;
    // document.getElementById(`${initialNum}`).style.bottom = `${bottom}px`;

}

//It displays every upgrade or counted value that you have bought
function checkUpgrades(){
    totalUpgrade1.textContent = `${totalUpgrade1amount}`
    totalUpgrade2.textContent = `${totalUpgrade2amount}`
    totalUpgrade3.textContent = `${totalUpgrade3amount}`
    totalUpgrade4.textContent = `${totalUpgrade4amount}`
    totalUpgrade5.textContent = `${totalUpgrade5amount}`
    totalUpgrade6.textContent = `${totalUpgrade6amount}`
    totalUpgrade7.textContent = `${totalUpgrade7amount}`
    totalUpgrade8.textContent = `${totalUpgrade8amount}`
    totalUpgrade9.textContent = `${totalUpgrade9amount}`
    totalSuperUpgrade1.textContent = `${totalSuperUpgrade1amount}`
    totalSuperUpgrade2.textContent = `${totalSuperUpgrade2amount}`
    totalClickValue.textContent = `${CurrentClickValue} per click`
    TotalMultiplier.textContent = `${multiplier.toFixed(2)}x Multipler`
    TotalAutoclickers.textContent = `${(totalUpgrade3amount) + (totalUpgrade6amount * 3) + (totalUpgrade9amount * 10)}`
    totalRebirthCount.textContent = `${totalRebriths} Rebriths`
}

//Closes the inventory by displaying is at "none"
function exitInventory(){
    Invetory.style.display = "none"
}

//Opens the inventory by displaying it as "flex"
function openInventory(){
    Invetory.style.display = "flex"
}

//Opens the upgrades by displaying it as "flex"
function openUpgrades(){
    checkUpgrades()
    Upgrades.style.display = "flex"
}

//Closes the upgrades by displaying is at "none"
function exitUpgrades(){
    Upgrades.style.display = "none"
}

//Check your progress til the next rebirth and changes the bar at the bottom to the percentage remaining
function progressCheck(){
    let Progression = (cash/CostTenth) * 100
    if (Progression > 100){
        progress.style.width = `100%`
        progress.textContent = `Progress 100%`
    } else{
        // console.log(Progression)
        progress.style.width = `${Progression}%`  
        progress.textContent = `Progress ${Progression.toFixed(1)}%`
    }
}
setInterval(progressCheck, 1)

//An empty array to display future actions such as buying a upgrade
let alerts = []

//Displays the array that keeps track of you activity
function DisplayArray(){
    AlertBoxInners.innerHTML = " "
    for(let i = 0; i < alerts.length; i++){
        AlertBoxInners.innerHTML += alerts[i]
    }
}

//Deletes the last element in the array to prevent an overflow of names
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
    DisplayArray()
    ChangePopTime()
}

let PopArray = setInterval(PopsArray, ConsolePopTime)
PopArray
setInterval(DisplayArray, 1)

//The more elements in the array the faster the array will pop
function ChangePopTime(){
    console.log("Here")
    console.log(ConsolePopTime)
    if(alerts.length > 10){
        ConsolePopTime = 50
        if (PopArray) {
            clearInterval(PopArray);
        }
        PopArray = setInterval(PopsArray, ConsolePopTime)
    }else if(alerts.length > 5){
        ConsolePopTime = 1000
        if (PopArray) {
            clearInterval(PopArray);
        }
        PopArray = setInterval(PopsArray, ConsolePopTime)
    }else{
        ConsolePopTime = 2000
        if (PopArray) {
            clearInterval(PopArray);
        }
        PopArray = setInterval(PopsArray, ConsolePopTime)
    }

}

//Initilizes each upgrade button to be selected
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
    [CostTenth, tenthUpgrade],
    [CostFirstSuper, FirstSuperUpgrade],
    [CostSecondSuper, SecondSuperUpgrade],
    [CostThirdSuper, ThirdSuperUpgrade],
    [CostFourthSuper, FourthSuperUpgrade],
    [CostFifthSuper, FifthSuperUpgrade]
]

//When hovering oven the button it calls "current" which tells it what button is being selected
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
        [CostTenth, tenthUpgrade],
        [CostFirstSuper, FirstSuperUpgrade],
        [CostSecondSuper, SecondSuperUpgrade],
        [CostThirdSuper, ThirdSuperUpgrade],
        [CostFourthSuper, FourthSuperUpgrade],
        [CostFifthSuper, FifthSuperUpgrade]
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
//after the button is unselected it reverts back to how it was originally
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
    FirstSuperUpgrade.style.border = ("none")
    SecondSuperUpgrade.style.border = ("none")
    ThirdSuperUpgrade.style.border = ("none")
    FourthSuperUpgrade.style.border = ("none")
    FifthSuperUpgrade.style.border = ("none")
}

//A basic upgrade that adds +1 to "CurrentClickValue"
function FiUpgrade(){
    console.log("First Upgrade")
    if(cash >= CostFirst){
        additionalClicks++
        cash = cash - CostFirst
        CostFirst = CostFirst * 1.5
        totalUpgrade1amount++
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought First Upgrade<p>`)
    } else {
        console.log("Not enough money")
        // AlertBoxInners.innerHTML += `<p style="color: red; font-size: bold;">Not Enough money<p>`
        alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)
    }
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    FirstCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFirst))}`
    checkUpgrades()
}
//A basic upgrade that adds .2 to "Multiplier"
function SeUpgrade(){
    console.log("Second Upgrade")
    if(cash >= CostSecond){
        multiplier = multiplier + .2
        cash = cash - CostSecond
        CostSecond = CostSecond * 1.5
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Second Upgrade<p>`)
        totalUpgrade2amount++
    } else {
        console.log("Not enough money")
        alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)
    }
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    SecondCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSecond))}`
    checkUpgrades()
}
//A complex autoclick function that redefines the autoclick each time totaling to 1 click per upgrade
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
            totalAutoClickers1++
            intervalId1 = setInterval(autoClick1, autoClickTimer);
            
            // Increment the max auto-clickers counter
            maxAutoClickers1++;
            totalUpgrade3amount++
            
            // Add an alert for the purchase
            alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Third Upgrade<p>`);
            ThirdCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostThird))}`;
        } else {
            console.log("Not enough money");
            alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)
        }
    } else {
        ThirdCost.textContent = `Max amount`;
        console.log("Max Amount");
    }
    cashCount.textContent = `${addThousandSeparators(Math.round(cash * 100) / 100)}`;
    checkUpgrades()
}
//it works with the third upgrade to determine how many times its used
function autoClick1(){
    for(i=0; i < totalAutoClickers1; i++){
        addMoney()
        cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    }
}
//A basic upgrade that adds +5 to "CurrentClickValue"
function FoUpgrade(){
    console.log("Fourth Upgrade")
        if(cash >= CostFourth){
            additionalClicks = additionalClicks + 5
            cash = cash - CostFourth
            CostFourth = CostFourth * 1.5
            alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Fourth Upgrade<p>`)
            totalUpgrade4amount++
        } else {
            console.log("Not enough money")
            alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)
        }
        cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
        FourthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFourth))}`
        checkUpgrades()
}
//A basic upgrade that adds .5 to "Multiplier"
function FifUpgrade(){
    console.log("Fifth Upgrade")
    if(cash >= CostFifth){
        multiplier = multiplier + .5
        cash = cash - CostFifth
        CostFifth = CostFifth * 1.5
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Fifth Upgrade<p>`)
        totalUpgrade5amount++
    } else {
        console.log("Not enough money")
        alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)
    }

    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    FifthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFifth))}`
    checkUpgrades()  
}
//A complex autoclick function that redefines the autoclick each time totaling to 3 click per upgrade
function SiUpgrade(){
    console.log("Sixth Upgrade")
    console.log(maxAutoClickers2)
    if(maxAutoClickers2 <= 20) {
        if(cash >= CostSixth){
            console.log("Confirm Sixth Upgrade Bought")
            cash = cash - CostSixth
            CostSixth = CostSixth * 1.5;
            // Set the new interval
            maxAutoClickers2++
            alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Sixth Upgrade<p>`)
            totalUpgrade6amount++
            totalAutoClickers2++
            if (intervalId2) {
                clearInterval(intervalId2);
            }
            intervalId2 = setInterval(autoClick2, autoClickTimer);
            SixthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSixth))}`
        } else {
            console.log("Not enough money")
            alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)
        }
    } else {
        SixthCost.textContent = `Max amount`
        console.log("Max Amount")
    }
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    checkUpgrades()
}
//it works with the sixth upgrade to determine how many times its used
function autoClick2(){ 
    console.log(totalAutoClickers2)
    for(i = 0; i < totalAutoClickers2; i++){
        for(a=0; a < 3; a++){
        addMoney()
        cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
        }
    }
}
//A basic upgrade that adds +20 to "CurrentClickValue"
function SevUpgrade(){
    console.log("Seventh Upgrade")
    if(cash >= CostSeventh){
        additionalClicks = additionalClicks + 20
        cash = cash - CostSeventh
        CostSeventh = CostSeventh * 1.5
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Seventh Upgrade<p>`)
        totalUpgrade7amount++
    } else {
        console.log("Not enough money")
        alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)
    }
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    SeventhCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSeventh))}`
    checkUpgrades()
}
//A basic upgrade that adds 3 to "Multiplier"
function EiUpgrade(){
    console.log("Eighth Upgrade")
    if(cash >= CostEighth){
        multiplier = multiplier + 3
        cash = cash - CostEighth
        CostEighth = CostEighth * 1.5
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Eighth Upgrade<p>`)
        totalUpgrade8amount++
    } else {
        console.log("Not enough money")
        alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)
    }

    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    EighthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostEighth))}`
    checkUpgrades()
}
//A complex autoclick function that redefines the autoclick each time totaling to 10 click per upgrade
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
            maxAutoClickers3++
            alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Ninth Upgrade<p>`)
            totalUpgrade9amount++
            totalAutoClickers3++
            intervalId3 = setInterval(autoClick3, autoClickTimer);
            NinthCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostNinth))}`
        } else {    
            console.log("Not enough money")
            alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)
        }
    } else {
        NinthCost.textContent = `Max amount`
        console.log("Max Amount")
    }
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    checkUpgrades()
}
//it works with the ninth upgrade to determine how many times its used
function autoClick3(){
    for(i = 0; i < totalAutoClickers3; i++){
        for(a=0; a < 10; a++){
        addMoney()
        cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
        }
    }
}
//It refreshes everything for a slight money boost and unlocks the next upgrades
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
        if(totalRebriths >= 1){
            RightHeaderControls.style.display = "flex"
        }
        alerts.unshift(`<p style="color: pink; font-size: bold;">Rebirthed!<p>`)

    } else{
        console.log("Not enough money")
        alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)

    }
}
//Resets every value that is used
function resetNum(){
    try{
        console.log("Reset Numbers")
        CostFirst = 10
        CostSecond = 25
        CostThird = 50
        CostFourth = 1000
        CostFifth = 2500
        CostSixth = 10000
        CostSeventh = 20000
        CostEighth = 40000
        CostNinth = 60000
        totalUpgrade1amount = 0
        totalUpgrade2amount = 0
        totalUpgrade3amount = 0
        totalUpgrade4amount = 0
        totalUpgrade5amount = 0
        totalUpgrade6amount = 0
        totalUpgrade7amount = 0
        totalUpgrade8amount = 0
        totalUpgrade9amount = 0
        totalSuperUpgrade1amount = 0
        totalSuperUpgrade2amount = 0

        cash = 0
        multiplier = 1
        additionalClicks = 0
        autoClickTimer = 1000
        CCurrentClickValue = ((1 + additionalClicks) * multiplier) * (1 + (totalRebriths))
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
        
    } catch(e){
        console.error(e)
        console.error("Numbers failed to reset")
    }
}
//A super upgrade that adds 300 to "CurrentClickValue"
function FiSuperUpgrade(){
    if(cash >= CostFirstSuper){
        console.log("First Super Upgrade")
        additionalClicks = additionalClicks + 300
        cash = cash - CostFirstSuper
        CostFirstSuper = CostFirstSuper * 2.5
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought First Super Upgrade<p>`)
        totalSuperUpgrade1amount++
    } else {
        console.log("Not enough money")
        alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)
    }
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    FirstSuperCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFirstSuper))}`
    checkUpgrades()
}
//A super upgrade that adds 100 to "Multiplier"
function SeSuperUpgrade(){
    if(cash >= CostSecondSuper){
        console.log("Second Super Upgrade")
        multiplier = multiplier + 100
        cash = cash - CostSecondSuper
        CostSecondSuper = CostSecondSuper * 2.5
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Second Super Upgrade<p>`)
        totalSuperUpgrade2amount++
    } else {
        console.log("Not enough money")
        AlertBoxInners.innerHTML += `<p style="color: red; font-size: bold;">Not Enough money<p>`
    }
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    SecondSuperCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostSecondSuper))}`
    checkUpgrades()
}
//A discounter that divides every upgrade by 10
function ThSuperUpgrade(){
    if(cash >= CostThirdSuper){
        console.log("third Super Upgrade")
        discount()
        cash = cash - CostThirdSuper
        CostThirdSuper = CostThirdSuper * 15
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Third Super Upgrade<p>`)
    } else{
        console.log("Not enough money")
        alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)
    }
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    ThirdSuperCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostThirdSuper))}`
}
//Finds a part that is required to complete the game which doubles in price each time but is limited to a max of 1Trillion
function FoSuperUpgrade(){
    if(cash >= CostFourthSuper){
        console.log("Fourth Super Upgrade")
        findPart()
        cash = cash - CostFourthSuper
        CostFourthSuper = CostFourthSuper * 1.5
        if(CostFourthSuper > 1000000000000){
            CostFourthSuper = 1000000000000
        }
        alerts.unshift(`<p style="color: powderblue; font-size: bold;">Bought Fourth Super Upgrade<p>`)
    } else{
        console.log("Not enough money")
        alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)
    }
    cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    FourthSuperCost.textContent = `Cost:$${addThousandSeparators(Math.floor(CostFourthSuper))}`
}
//When all the conditions of 50parts, 5rebirths, and 50Quintillian dollars are met it completes the game
function FifSuperUpgrade(){
    if(cash >= CostFifthSuper){
        if(totalRebriths >= 5){
            if(part1 >= 10 && part2 >= 10 && part3 >= 10 && part4 >= 10 && part5 >= 10){
                alerts.unshift(`<p style="color: powderblue; font-size: bold;">Finished the game<p>`)
                cash = Infinity
            } else{
                alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough Parts<p>`)
            }
        } else{
            alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough Rebirths<p>`)
        }
    } else{
        alerts.unshift(`<p style="color: red; font-size: bold;">Not Enough money<p>`)
    }
}
//Is called by ThirdSuperUpgrade and it reduces the prices of upgrades
function discount(){
    CostFirst = CostFirst/10
    CostSecond = CostSecond/10
    CostThird = CostThird/10
    CostFourth = CostFourth/10
    CostFifth = CostFifth/10
    CostSixth = CostSixth/10
    CostSeventh = CostSeventh/10
    CostEighth = CostEighth/10
    CostNinth = CostNinth/10
    CostFirstSuper = CostFirstSuper/4
    CostSecondSuper = CostSecondSuper/4
    CostFourthSuper = CostFourthSuper/4
    callAllCostValues() 
}

//Current is used to define which button is being hovered over
//Event listeners figure out when a button is either clicked or hovered over
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
FirstSuperUpgrade.addEventListener('mouseout', unselect)
FirstSuperUpgrade.addEventListener('mousemove', function(){
    current = 10
    select()
    console.log(current)
})

SecondSuperUpgrade.addEventListener('click', SeSuperUpgrade)
SecondSuperUpgrade.addEventListener('mouseout', unselect)
SecondSuperUpgrade.addEventListener('mousemove', function(){
    current = 11
    select()
    console.log(current)
})

ThirdSuperUpgrade.addEventListener('click', ThSuperUpgrade)
ThirdSuperUpgrade.addEventListener('mouseout', unselect)
ThirdSuperUpgrade.addEventListener('mousemove', function(){
    current = 12
    select()
    console.log(current)
})

FourthSuperUpgrade.addEventListener('click', FoSuperUpgrade)
FourthSuperUpgrade.addEventListener('mouseout', unselect)
FourthSuperUpgrade.addEventListener('mousemove', function(){
    current = 13
    select()
    console.log(current)
})

FifthSuperUpgrade.addEventListener('click', FifSuperUpgrade)
FifthSuperUpgrade.addEventListener('mouseout', unselect)
FifthSuperUpgrade.addEventListener('mousemove', function(){
    current = 14
    select()
    console.log(current)
})

//used to switch between upgrade pages
rightArrow.addEventListener('click', changeUpgrades)
leftArrow.addEventListener('click', changeUpgradesBack)
//it tells the funtion ClickIndication to run each time you click the element
clickerDisplay.addEventListener('click', ClickIndication)

//When space is clicker it adds the value below to your cash, used for development only
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      // Action to perform when spacebar is pressed
      console.log('Spacebar was pressed');
      cash = cash + 100000000000
      console.log(totalRebriths)
      cashCount.textContent = `${addThousandSeparators((Math.round(cash * 100) / 100))}`
    }
});
