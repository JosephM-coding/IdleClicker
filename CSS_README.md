Here’s a **README** file for the **CSS file (`styles.css`) only**, focusing on its structure, styling choices, and custom components.

---

## README - `styles.css`

### Overview

The `styles.css` file provides the complete styling for a web-based clicker game, themed around space exploration. It defines the visual layout, responsive behaviors, and aesthetic feel of all UI components, including navigation, game containers, modals, and interactive elements.

---

### Global Styles

* **Reset Defaults:**

  ```css
  * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }
  ```

  Resets default browser spacing to create a consistent baseline.
  Global Reset and Box model

* **Body:**

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

  Applies a space-themed background and centers the layout.

---

### Navigation Bar

* `.navBar`: Top section displaying time and links with centered content and borders.
  ```css
  .navBar{
    display: flex;
    justify-content: space-evenly;
    color: white;
    width: 80%;
    align-items: center;
    padding: 10px;
    border: 1px solid white;
}
```
---

### Game Container

* `.game-container`: Uses a 5-column CSS grid to layout the **left**, **middle**, and **right** UI sections with visual separators (`2%` gaps).
```css
.game-container{
    display: grid;
    grid-template-columns: 1fr 2% 1fr 2% 1fr;
    margin: 10px;
    height: 80vh;
    max-height: 700px;
}
```
---

### Section Breakdown

#### Left Container (`.left-container`)

* Contains the main clickable image.
* `.Clicker-display` has an animated "tilt" effect.
* `.Clickerimg` is a circular, responsive image.
```css
.left-container {
    grid-column: 1;
    /* height: 100%;     */
    border: 1px solid white;
    background-color: black;
}
```

#### Middle Container (`.middle-container`)

* Contains:

  * `.CashCount-box`: Shows current player cash.
  * `.progress-box`: Save/load/delete buttons.
  * `.Interface`: Game control buttons (Inventory, Upgrades, Theme).
  * `.AlertBox`: Logs game events like purchases.
```css
.middle-container{
 grid-column: 3;
 /* height: 100%;     */
 border: 1px solid white;
 /* background-color: black; */
}
```

#### Right Container (`.right-container`)

* Displays all available upgrades.
* `.right-container-inners` and `.right-container-inners-upgraded`: Different layouts for normal and "rebirth" upgrades.
  ```css
  .right-container{
    grid-column: 5;
    /* height: 100%;     */
    border: 1px solid white;
    background-color: black;
    overflow: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */ 
    overflow-x: hidden;
}
```
---

### Theming and Effects

* **Animations:**

  * `@keyframes tilt`: Rotates the image gently.
  * `@keyframes tilt2`: Used for effects like click bounce.

* **Theme Support:**

  * Supports dark and light themes by altering background and text colors dynamically.

* **Responsive Design:**

  * Media queries for screens <772px adjust font sizes, layout widths, and component spacing for mobile-friendliness.

---

### Utility Classes

* `.noselect`: Disables user text selection.
* `.hidden`: Fully hides elements using `display: none !important`.
* `.Affordable`, `.UnAffordable:hover`: Used to visually indicate affordability of upgrades.
* `.clickable-item`: Applies a hover effect and scale transformation.

---

### Modals

* `.Inventory`, `.Upgrades`: Hidden by default; shown via JavaScript when triggered.
* Contain custom tables and upgrade lists with defined borders and scroll behaviors.

---

### Fonts & Links

* Custom fonts loaded from Google Fonts (`Pixelify Sans`, `Jersey 10`, etc.).
* `.LinkClass`: Styled hyperlinks that change on hover.

---

## Recommendations

* Consider modularizing CSS with SASS or CSS modules for scalability.
* Use CSS variables for theme management to simplify toggling.
* Add transition effects to improve modal and button interactions.

---

Let me know if you’d like the README in Markdown file format or included in the project!
