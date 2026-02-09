# Week 1: JavaScript Fundamentals & Syntax
## Days 1-5 | Total: 15 Hours

**Learning Outcomes:**
- Understand JavaScript values, data types, and operators
- Write basic JavaScript programs with correct syntax
- Apply automatic type conversion in real-world scenarios
- Master arithmetic and logical operations

---

## 📅 Weekly Overview

| Day | Topic | Duration | Key Activities |
|-----|-------|----------|-----------------|
| **Day 1** | Introduction & Values | 3 hrs | What is JavaScript? Values, Execution Environment |
| **Day 2** | Types & Operators - Part 1 | 3 hrs | Numbers, Strings, Boolean; Arithmetic Operators |
| **Day 3** | Types & Operators - Part 2 | 3 hrs | Logical Operators, Comparison, Type Coercion |
| **Day 4** | Unary & Advanced Operators | 3 hrs | Unary ops, Ternary, typeof, Nullish Coalescing |
| **Day 5** | Mini-Project & Review | 3 hrs | Build a Calculator, Week Review, Assessment |

---

## 🎯 Week Learning Goals

By the end of Week 1, students will be able to:
1. ✅ Understand what JavaScript is and why it's important
2. ✅ Identify and work with different data types
3. ✅ Perform arithmetic, logical, and comparison operations
4. ✅ Understand type coercion and conversion
5. ✅ Build a simple calculator program

---

---

# DAY 1: Introduction to JavaScript & Values

## Session Outline (3 Hours)
- **0:00-0:10:** Icebreaker & Course Overview
- **0:10-1:00:** Theory: JavaScript Intro, Values, Environment Setup
- **1:00-1:30:** Break & Environment Setup
- **1:30-2:45:** Practical: First Programs
- **2:45-3:00:** Q&A & Assignment

---

## 📖 Theory Content

### What is JavaScript?

**Definition:** JavaScript is a **lightweight, interpreted programming language** that runs in web browsers and servers (Node.js). It's used to make web pages interactive and dynamic.

**Historical Context:**
- Created by **Brendan Eich** in 1995 (originally "Mocha," then "LiveScript")
- Standardized as **ECMAScript** (ES) by ECMA International
- **ES6 (2015):** Modern JavaScript revolution with classes, arrows, modules
- **Today:** Runs everywhere – browsers, servers, mobile apps, desktop apps

### Why Learn JavaScript?

| Reason | Impact |
|--------|--------|
| **Browser Native** | The ONLY language that runs natively in all browsers |
| **Full-Stack** | Can build frontend (React, Vue) AND backend (Node.js) |
| **Employer Demand** | #1 most wanted skill in web development |
| **Ecosystem** | 1000s of libraries: React, Vue, Angular, Express |
| **Versatility** | Games, mobile apps, desktop apps, IoT |

**Real-World Jobs:**
- Frontend Developer: $90k-150k (React/Vue)
- Full-Stack Developer: $110k-180k (JavaScript+Node.js)
- Cloud Engineer: $120k-200k (JavaScript in AWS/Azure)

### JavaScript vs. HTML vs. CSS

```
┌─────────────────────────────────┐
│  HTML (Structure)               │
│  "What is on the page?"         │
│  <button>Click Me</button>      │
├─────────────────────────────────┤
│  CSS (Appearance)               │
│  "How does it look?"            │
│  button { color: blue; }        │
├─────────────────────────────────┤
│  JavaScript (Behavior)          │
│  "What happens when you click?" │
│  button.onclick = ...           │
└─────────────────────────────────┘
```

### Environment Setup

**Three Ways to Run JavaScript:**

1. **Browser Console** (Easiest for Learning)
   ```
   Press F12 or Right-click > Inspect > Console tab
   Type: console.log("Hello World")
   ```

2. **VS Code + Node.js** (Professional)
   ```bash
   node script.js
   ```

3. **Browser HTML File** (Web Development)
   ```html
   <script src="script.js"></script>
   ```

---

## 🔢 Values in JavaScript

### What is a Value?

A **value** is any piece of data that your program works with. Think of values as the ingredients in a recipe.

```javascript
// Examples of values:
42                      // Number value
"Hello"                 // String value
true                    // Boolean value
null                    // Special value
undefined               // Special value
```

### Number Values

**JavaScript treats all numbers the same—no distinction between integers and decimals.**

```javascript
// Examples
42
3.14159
-17
0
1e3              // Scientific notation: 1 × 10³ = 1000
```

**Operations on Numbers:**
```javascript
console.log(10 + 5);      // 15 (addition)
console.log(10 - 5);      // 5 (subtraction)
console.log(10 * 5);      // 50 (multiplication)
console.log(10 / 5);      // 2 (division)
console.log(10 % 3);      // 1 (modulo/remainder)
console.log(2 ** 3);      // 8 (exponent: 2³)
```

**Special Number Values:**
```javascript
Infinity          // Division by zero
-Infinity
NaN               // "Not a Number" (invalid calculation)
```

⚠️ **Common Pitfall:**
```javascript
console.log(0.1 + 0.2);   // 0.30000000000000004 (floating-point quirk)
// WHY? Computers store decimals in binary, which can't represent 0.1 exactly
```

### String Values

**Strings are sequences of characters.** Think of them as text.

```javascript
"Hello, World!"
'Single quotes work too'
`Backticks allow interpolation`
"He said, \"Hello\"" // Escaped quotes
```

**String Features:**
```javascript
// Length
console.log("Hello".length);      // 5

// Concatenation (combining strings)
console.log("Hello" + " " + "World");  // "Hello World"

// Escape sequences
"Line 1\nLine 2"    // \n = newline
"Tab\tseparated"    // \t = tab
"Quote\"inside"     // \" = literal quote

// Case conversion (preview—more in Week 3)
"HELLO".toLowerCase()   // "hello"
"hello".toUpperCase()   // "HELLO"
```

**Real-World Example: User Greeting**
```javascript
// When a user signs up
const firstName = "Priya";
const userName = "priya.patel";
const greeting = "Welcome, " + firstName + "! Your username is " + userName;
console.log(greeting);
// Output: "Welcome, Priya! Your username is priya.patel!"
```

### Boolean Values

**Booleans** are simple: `true` or `false`. They answer YES/NO questions.

```javascript
true     // Yes
false    // No
```

**When Do We Use Booleans?**
```javascript
const isStudentEnrolled = true;
const isWeekend = false;
const ageAbove18 = true;

// We'll use these with conditionals (if/else) next week!
```

---

## 🔄 Automatic Type Conversion

**JavaScript is "loosely typed"—it converts types automatically when needed.**

```javascript
console.log("5" + 3);        // "53" (number becomes string)
console.log("5" - 3);        // 2 (string becomes number)
console.log(true + 1);       // 2 (true is treated as 1)
console.log(false + 1);      // 1 (false is treated as 0)
console.log("10" * "2");     // 20 (both become numbers)
```

**When Values Are "Falsy":**
```javascript
false, 0, "", null, undefined, NaN   // Treated as false
```

**When Values Are "Truthy":**
```javascript
true, 1, "0", "false", [], {}        // Treated as true
```

**Real-World Example: Discount Calculator**
```javascript
const discountString = "20";    // From user input
const price = 500;
const discount = discountString * price / 100;  // String auto-converts!
console.log(discount);  // 100
```

---

## 💻 Practical Session (1h 15min)

### Exercise 1.1: Hello World in Different Environments

**Goal:** Run JavaScript code in 3 environments

**Method 1: Browser Console**
```javascript
// Open browser → F12 → Console tab
console.log("Hello from Browser!");
console.log(42);
console.log(3.14);
```

**Method 2: Node.js (CLI)**
```bash
# Open terminal/PowerShell
node
console.log("Hello from Node.js!");
.exit  # Exit Node REPL
```

**Method 3: HTML File**
```html
<!DOCTYPE html>
<html>
<head>
    <title>First JavaScript Program</title>
</head>
<body>
    <h1>My First JavaScript Program</h1>
    <script>
        console.log("Hello from HTML file!");
        alert("Welcome to JavaScript!");
    </script>
</body>
</html>
```

### Exercise 1.2: Working with Numbers

**Goal:** Understand number operations

**Instructions:** In browser console, type and observe:

```javascript
// Arithmetic
console.log(100 + 50);
console.log(100 - 50);
console.log(100 * 2);
console.log(100 / 4);

// Order of operations (PEMDAS)
console.log(2 + 3 * 4);     // 14 or 20? (20 - multiplication first)
console.log((2 + 3) * 4);   // 20 (parentheses override)

// Decimal numbers
console.log(0.1 + 0.1);     // 0.2 ✓
console.log(0.1 + 0.2);     // 0.30000000000000004 ✗ (floating point!)

// Special values
console.log(1 / 0);         // Infinity
console.log(0 / 0);         // NaN
```

### Exercise 1.3: String Operations

**Goal:** Combine and manipulate strings

```javascript
// Concatenation
console.log("Java" + "Script");              // "JavaScript"
console.log("Price: " + 99.99);              // "Price: 99.99"
console.log("My age is " + 20 + " years");   // "My age is 20 years"

// String properties
const message = "Hello";
console.log(message.length);                 // 5
console.log(message[0]);                     // "H" (first character)
console.log(message[4]);                     // "o" (fifth character)

// String methods
console.log("UPPERCASE".toLowerCase());      // "uppercase"
console.log("lowercase".toUpperCase());      // "LOWERCASE"
console.log("hello world".length);           // 11
```

### Exercise 1.4: Type Conversion in Action

**Goal:** Understand how JavaScript converts types

```javascript
// Number to String
console.log(123 + "");      // "123"
console.log(String(456));   // "456"

// String to Number
console.log("789" * 1);     // 789
console.log(Number("789")); // 789
console.log(Number("abc"));  // NaN (invalid number)

// To Boolean
console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean("text"));// true
```

### Exercise 1.5: Real-World Scenario - Fruit Stand Billing

**Goal:** Apply concepts to real-world problem

**Scenario:** You own a fruit stand. Create a billing program.

```javascript
// Fruit prices
const applePrice = 50;      // ₹ per kg
const bananasPrice = 40;    // ₹ per kg
const orangesPrice = 60;    // ₹ per kg

// Customer purchase
const applesKg = 2;
const bananasKg = 3;
const orangesKg = 1;

// Calculate total
const appleCost = applePrice * applesKg;
const bananasCost = bananasPrice * bananasKg;
const orangesCost = orangesPrice * orangesKg;
const totalCost = appleCost + bananasCost + orangesCost;

// Display receipt
console.log("=== FRUIT STAND RECEIPT ===");
console.log("Apples: ₹" + appleCost);
console.log("Bananas: ₹" + bananasCost);
console.log("Oranges: ₹" + orangesCost);
console.log("TOTAL: ₹" + totalCost);
console.log("==========================");
```

**Expected Output:**
```
=== FRUIT STAND RECEIPT ===
Apples: ₹100
Bananas: ₹120
Oranges: ₹60
TOTAL: ₹280
==========================
```

---

## 🎓 Summary

| Concept | Key Point | Example |
|---------|-----------|---------|
| **Values** | Basic data units | 42, "Hello", true |
| **Numbers** | All numeric data | 3.14, 100, -5 |
| **Strings** | Text data | "Hello World" |
| **Booleans** | True/False | true, false |
| **Type Coercion** | Auto conversion | "5" + 3 = "53" |
| **Operations** | Math on values | 10 + 5 = 15 |

---

## 📝 Day 1 Assignment

**Task 1:** Create a `day1_values.html` file with:
- Welcome message in console.log
- 5 number calculations
- 3 string concatenations
- Boolean value operations

**Task 2:** Calculate and display:
- Your height in cm
- Your height in meters
- Comparison: "My height is X meters"

**Submission:** Upload to Google Classroom as `Day1_YourName.html`

---

## 🔗 References

- [MDN: JavaScript Values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [MDN: Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
- [JavaScript.info: Values and Variables](https://javascript.info/variables)

---

## ❓ Common Questions

**Q: What's the difference between `null` and `undefined`?**
A: `undefined` means a variable hasn't been assigned yet. `null` means "intentionally empty." (We'll explore this more in Week 2)

**Q: Why does 0.1 + 0.2 ≠ 0.3?**
A: Computers store decimals in binary. Some decimals can't be represented exactly (like 1/3 in math). This is normal across all programming languages.

**Q: Can I use JavaScript without a browser?**
A: Yes! Node.js lets you run JavaScript on your computer or server, just like Python or Java.

---

**Next:** Day 2 - Types & Operators Part 1
