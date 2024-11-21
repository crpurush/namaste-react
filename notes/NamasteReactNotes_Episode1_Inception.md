# Namaste React Notes - Episode 1: Inception 🚀

## **1. React.createElement: The Foundation of React**

### Syntax:
```javascript
React.createElement(tag, {attributes}, child);
```

### Example:
```javascript
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world in React"
);
console.log(heading);
```
- **Output of `React.createElement`**: A **React Element**, which is a **JavaScript object**.
- The object will look like this:
  ```javascript
  {
    type: "h1",
    props: {
      id: "heading",
      children: "Hello world in React"
    }
  }
  ```

---

## **2. Adding Attributes to React Elements**
- You can add multiple attributes to a tag:
  ```javascript
  React.createElement("h1", { id: "heading", className: "title" }, "Hello React");
  ```
  - **Attributes**: `{ id: "heading", className: "title" }`
  - **Content**: `"Hello React"`

---

## **3. Rendering React Elements**

### Using ReactDOM to Render:
```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```
- **Process**:
  - `React Element (Object)` → **HTML** (Browser understands).
- **Key Point**:
  - React **renders content only inside the root container** specified by `document.getElementById("root")`.

---

## **4. React's Behavior with DOM Content**

### Example 1: Replacing Root Content
#### HTML Before Rendering:
```html
<div id="root">
  <h1>Initial h1 tag</h1>
</div>
```
- After calling `root.render(heading)`:
  ```html
  <div id="root">
    <h1 id="heading">Hello world in React</h1>
  </div>
  ```
  - React replaces everything inside the `<div id="root">`.

---

### Example 2: Content Outside Root
#### HTML Structure:
```html
<h1>Hello Top of root</h1>
<div id="root"></div>
<h1>Hello bottom of root</h1>
```
- After `root.render(heading)`:
  - React **only updates content inside** `<div id="root">`.
  - The elements `<h1>Hello Top of root</h1>` and `<h1>Hello bottom of root</h1>` remain unaffected.

---

## **5. Key Concepts Recap**
1. **React.createElement**:
   - Converts JSX-like syntax into a React Element (object).
   - Example: 
     ```javascript
     React.createElement("h1", { id: "heading" }, "Hello React");
     ```
2. **ReactDOM.render**:
   - Renders the React Element into the DOM by replacing the content inside the root container.
   - Example:
     ```javascript
     const root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(heading);
     ```
3. **Controlled DOM Updates**:
   - React only updates the content inside the specified root element (`id="root"`).

---

## Quick Commands Summary:
| **Command**                | **Purpose**                              |
|----------------------------|------------------------------------------|
| `React.createElement`      | Creates a React Element (JS object).     |
| `ReactDOM.createRoot`      | Initializes the root container for React.|
| `root.render(element)`     | Renders the React Element into the DOM.  |

---

## **Don't Forget** 📝
1. **React Element**:
   - A React Element is just a **JavaScript object**, not an HTML tag.
   - It gets converted to HTML when rendered.
2. **React Only Replaces Content Inside `root`**:
   - Any content outside the `id="root"` container will remain unaffected.
3. **Use ReactDOM to Render**:
   - Always initialize React with `ReactDOM.createRoot` and render using `root.render`.

---