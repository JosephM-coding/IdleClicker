# Space Clicker

**Space Clicker** is a browser-based idle clicker game where players accumulate parts and money by clicking a spinning planet. Use upgrades, unlock super upgrades, and eventually rebirth for exponential growth.

## Features

- Click to earn in-game currency and collect parts
- Upgrade system with increasing click power, multipliers, and autoclickers
- Super upgrades unlocked through rebirth
- Inventory and upgrade stats display
- Save/Load/Delete game progress via `localStorage`
- Dynamic UI with light/dark themes
- Animated planet click effect
- Real-time clock and total time tracker

## How to Play

1. Click the spinning planet to earn cash.
2. Use cash to buy upgrades and multipliers.
3. Collect 10 of each part to finish the game.
4. Rebirth for a permanent global multiplier bonus.
5. Super upgrades unlock after rebirthing!

> Tips:
> - Autoclickers don’t count towards part drops.
> - Clicking has a 1 in 1000 chance to drop a part.
> - You can switch themes (dark/light) from the interface.
> - Keep rebirthing to progress further.

##  Technologies Used

- **HTML/CSS**: UI layout and styling
- **JavaScript**: Game logic, state management, animations
- **LocalStorage API**: Save/load game data persistently
- **Google Fonts**: Custom typography

---
## JavaScript
```
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
```
This initalizes any value that need to be defined in order to use if statments and the save and load function change some of these value initially to keep your progress

© 2025 Joseph Mendias
