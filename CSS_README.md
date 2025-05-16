## README - `styles.css`

### Overview

The `styles.css` file provides the complete styling for a web-based clicker game themed around **space exploration**. It sets the visual layout, animations, responsiveness, and aesthetic elements across all game UI components.

---
- global reset is used with the * selector
- Css Variables use :root to initialize every element with a black background and powderblue color to math the game style
- All the CSS is organized and well comented to give a brief explanation
- Typrography Styling is used by a class name of pixelify-sans-font and jersey-10-regular
- Color Scheme and COntrast are a blend of blue and black with a hint of orange
- Flexbox and grid are both used set columns and simple text boxes such as Flex direction: column;
- Buttons and Input styling are used to match their outer container
- I use common classes such as hidden to be utilized throughout the code
- I use CSS transitions to slowly rotate elements
- I use Hover and focus effects to determine whether an upgrade is buyable or affordable
- I use layout containers to determine the main game container and the left, right, and middle containers as well as their inner elements
- I use Z index to layer elements that I want to be infront of others such as the inventory and Upgrade checker
- I Impliment the Pseudo classes/elements with javascript applying it to newly created children made with append child
- I use shadows and borders subtly with only a few text boxes
- I use custom scroll bars to either change the size of the scroll bar or to hide it completely
- Themes are applied dynamically or toggled
- Naming Conventions are used to clearly describle what class is being used on which element
- The code is clean and well commented


### Global Styles

#### Reset and Root Theme

```css
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
:root {
    background-color: black;
    color: powderblue;
}
```

* Ensures consistent box model.
* Sets default background and text color scheme for space theme.

#### Body Styling

```css
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(SpaceBackground.webp);
    background-repeat: repeat;
    height: 100%;
}
```

* Centers the content and applies a repeating space-themed background.

---

### Navigation Bar

```css
.navBar {
    display: flex;
    justify-content: space-evenly;
    color: white;
    width: 80%;
    align-items: center;
    padding: 10px;
    border: 1px solid white;
}
```

* Horizontally spaces out nav elements with a white border and white text.

---

### Game Layout

#### Grid Container

```css
.game-container {
    display: grid;
    grid-template-columns: 1fr 2% 1fr 2% 1fr;
    margin: 10px;
    height: 80vh;
    max-height: 700px;
}
```

* Defines a 5-column layout for left, middle, and right sections.

---

### Left Panel (`.left-container`)

```css
.left-container {
    grid-column: 1;
    border: 1px solid white;
    background-color: black;
}
.left-container-inners {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(giphy.gif);
    background-size: cover;
}
.Clicker-display {
    animation: tilt 8s infinite ease-in-out;
}
.Clickerimg {
    border-radius: 100%;
    width: 100%;
    height: 100%;
}
```

* Hosts the main clickable image with a rotating animation and circular styling.

---

###  Middle Panel (`.middle-container`)

```css
.middle-container {
    grid-column: 3;
    border: 1px solid white;
}
.CashCount-box {
    background-color: darkgreen;
    border: 3px solid lightgreen;
}
.progress-box button {
    font-size: 16px;
    border: 3px solid black;
}
.Interface button {
    background-color: blue;
    border: 3px solid powderblue;
    color: powderblue;
}
```

* Central control zone for displaying player stats, alerts, and control buttons.

---

### Right Panel (`.right-container`)

```css
.right-container {
    grid-column: 5;
    border: 1px solid white;
    background-color: black;
    overflow: scroll;
    scrollbar-width: none;
}
.right-container-inners div {
    background-color: powderblue;
    color: blue;
    border: 1px solid white;
    border-radius: 20px;
}
```

* Contains upgrade options with scroll hiding and hoverable card designs.

---

### Animations & Effects

```css
@keyframes tilt {
    0%, 100% { transform: rotate(0deg); }
    25%, 75% { transform: rotate(10deg); }
    50%      { transform: rotate(0deg); }
}

.clickable-item {
    cursor: pointer;
    transition: transform 0.3s ease;
}
.enlarge {
    transform: scale(1.2);
}
```

* Adds gentle rotation to clickable elements and a bounce effect on interaction.

---

### Modals (`.Inventory`, `.Upgrades`)

```css
.Inventory, .Upgrades {
    display: none;
    position: absolute;
    background-color: powderblue;
    color: blue;
    border: 5px solid white;
    padding: 10px;
    height: 60%;
    overflow: scroll;
}
```

* Initially hidden and shown dynamically with JavaScript for inventory and upgrades.

---

### Responsive Design

```css
@media screen and (max-width: 772px) {
    .Interface button {
        font-size: 8px;
    }
    .AlertBox {
        font-size: 8px;
    }
}
```

* Adjusts font sizes and widths for optimal mobile display.

---

### Utility Classes

```css
.hidden {
    display: none !important;
}
.noselect {
    user-select: none;
}
.Affordable {
    border: 5px solid greenyellow;
}
.UnAffordable:hover {
    border: 5px solid red;
}
```

* Adds utility for toggling visibility, click feedback, and preventing unwanted text selection.

---

### Fonts & Links

```css
.LinkClass {
    color: orange;
    text-decoration: none;
}
.LinkClass:hover {
    text-decoration: underline;
}
```

* Custom hyperlink styling and hover effect.
* Fonts like `Pixelify Sans` and `Jersey 10` are used for game text.
