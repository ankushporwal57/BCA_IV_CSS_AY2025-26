# DAY 2: Types & Operators - Part 1

## Session Outline (3 Hours)
- **0:00-0:10:** Recap of Day 1 & Quick Quiz
- **0:10-1:00:** Theory: Data Types, Arithmetic Operators
- **1:00-1:30:** Break
- **1:30-2:45:** Practical: Number & String Operations
- **2:45-3:00:** Q&A & Assignment

---

## 📖 Theory Content

### The Seven Data Types (typeof operator)

JavaScript has 7 primitive data types:

```javascript
typeof 42              // "number"
typeof "hello"         // "string"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof null            // "object" (quirk—technically null, but typeof says "object")
typeof Symbol()        // "symbol" (unique identifiers, Week 5)
typeof 123n            // "bigint" (large integers, advanced)

// Plus Objects (arrays, objects, functions)
typeof {}              // "object"
typeof []              // "object"
typeof function(){}    // "function"
```

### Numbers in Detail

#### Integer vs Float
```javascript
const integer = 42;       // Whole number
const float = 3.14;       // Decimal number
const scientific = 1e3;   // Scientific: 1000
const negative = -42;
```

#### Number Methods (Preview)
```javascript
const num = 3.14159;

// Converting to string
num.toString();           // "3.14159"
num.toFixed(2);           // "3.14" (round to 2 decimals)

// Checking special values
isNaN(NaN);               // true
isFinite(100);            // true
isFinite(Infinity);       // false
```

**Real-World: Product Pricing**
```javascript
const price = 1299.567;
console.log(price.toFixed(2));  // "1299.57" (for display)
console.log(price * 1.18);      // With 18% tax
```

### Strings in Detail

#### Creating Strings
```javascript
const single = 'Hello';
const double = "World";
const backtick = `JavaScript`;     // Template literals (more on Day 3)
const empty = "";                  // Empty string (length = 0)

// Escape sequences
"Line 1\nLine 2"                   // Newline
"Path: C:\\Users\\Name"            // Backslash
"He said \"Hi\""                   // Double quote
'It\'s working'                    // Single quote (escape not needed in double quotes)
```

#### String Methods
```javascript
const text = "JavaScript";

// Case
text.toUpperCase();        // "JAVASCRIPT"
text.toLowerCase();        // "javascript"

// Length
text.length;               // 10

// Accessing characters (index starts at 0)
text[0];                   // "J"
text[4];                   // "S"
text[text.length - 1];     // "t" (last character)

// Finding substrings
text.indexOf("Script");    // 4 (position where "Script" starts)
text.includes("Java");     // true
text.startsWith("Java");   // true

// Extracting parts
text.substring(0, 4);      // "Java" (from index 0 to 3)
text.slice(4);             // "Script" (from index 4 to end)

// Trimming whitespace
"  hello  ".trim();        // "hello"

// Replacing
text.replace("Java", "Type"); // "TypeScript"
```

**Real-World: Email Validation (Simple)**
```javascript
const email = "priya@university.edu";

console.log(email.includes("@"));        // true
console.log(email.indexOf("@") > 0);     // true (@ not at start)
```

### Arithmetic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | 5 + 3 | 8 |
| `-` | Subtraction | 5 - 3 | 2 |
| `*` | Multiplication | 5 * 3 | 15 |
| `/` | Division | 15 / 3 | 5 |
| `%` | Modulo (Remainder) | 17 % 5 | 2 |
| `**` | Exponentiation | 2 ** 3 | 8 |

#### Modulo Operator (%)
The modulo operator returns the **remainder** after division.

```javascript
// Finding remainder
console.log(17 % 5);       // 2 (17 = 5*3 + 2)
console.log(10 % 3);       // 1
console.log(20 % 2);       // 0 (20 is divisible by 2)

// Check if number is even or odd
10 % 2 === 0;             // true (even—next week we use this!)
11 % 2 === 1;             // true (odd)

// Cycling through values (next week: arrays!)
index % arrayLength;      // Always gives 0 to arrayLength-1
```

**Real-World Example: Shift Scheduling**
```javascript
// Assign 3 shifts: Morning (0), Afternoon (1), Night (2)
const employeeId = 5;
const shift = employeeId % 3;

console.log(shift);  // 2 (employee 5 gets Night shift)
// Employee 6 → 6 % 3 = 0 → Morning
// Employee 7 → 7 % 3 = 1 → Afternoon
// Employee 8 → 8 % 3 = 2 → Night
// Pattern repeats!
```

#### Order of Operations (PEMDAS)

```javascript
// Parentheses
2 + 3 * 4           // 14 (multiply first)
(2 + 3) * 4         // 20 (parentheses first)

// Exponents
2 ** 3 * 2          // 16 (2^3 = 8, then 8*2)

// Multiplication/Division (left to right)
100 / 10 * 2        // 20 (100/10 = 10, then 10*2)

// Addition/Subtraction (left to right)
10 - 5 + 3          // 8 (10-5 = 5, then 5+3)
```

### Type Coercion with Operators

```javascript
// Number + Number = Number
5 + 3                   // 8

// String + Anything = String
"5" + 3                 // "53"
3 + "5"                 // "35"
"Hello" + " " + "World" // "Hello World"

// Number - String = Number (tries to convert string)
"10" - 3                // 7
"20" - "5"              // 15
"abc" - 3               // NaN

// Multiplication/Division also convert
"6" * "2"               // 12
"10" / "2"              // 5
"abc" * 2               // NaN
```

---

## 💻 Practical Session (1h 15min)

### Exercise 2.1: Basic Arithmetic

**Goal:** Master arithmetic operations

```javascript
// Simple calculations
console.log(10 + 5);      // 15
console.log(10 - 5);      // 5
console.log(10 * 5);      // 50
console.log(10 / 5);      // 2
console.log(17 % 5);      // 2
console.log(2 ** 3);      // 8

// Order of operations
console.log(2 + 3 * 4);   // ? (predict first!)
console.log((2 + 3) * 4); // ?
console.log(100 / 4 + 5); // ?

// Real problem: Calculate compound interest
const principal = 10000;  // ₹
const rate = 5;           // 5% per year
const years = 2;

const amount = principal * (1 + rate / 100) ** years;
console.log("Amount: ₹" + amount);
```

### Exercise 2.2: Modulo Operator Deep Dive

**Goal:** Understand practical uses of modulo

```javascript
// Check even/odd
const num1 = 42;
console.log(num1 % 2 === 0 ? "Even" : "Odd");

// Cycle through options
const day = 7;
const weeks = Math.floor(day / 7);
const dayOfWeek = day % 7;
console.log("Day " + day + " is week " + weeks + ", day " + dayOfWeek);

// Find last digit
const number = 12345;
const lastDigit = number % 10;
console.log("Last digit: " + lastDigit);  // 5

// Convert seconds to minutes and seconds
const totalSeconds = 125;
const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;
console.log(minutes + ":" + seconds);  // "2:5"
```

### Exercise 2.3: String Operations

**Goal:** Manipulate and analyze strings

```javascript
const firstName = "Priya";
const lastName = "Patel";
const email = "priya.patel@university.edu";

// Concatenation
const fullName = firstName + " " + lastName;
console.log(fullName);

// Length operations
console.log("Name length: " + firstName.length);

// Case conversion
console.log(firstName.toUpperCase());
console.log(email.toLowerCase());

// Finding substrings
console.log(email.indexOf("@"));      // Position of @
console.log(email.includes("university")); // true

// Extracting parts
const domain = email.slice(email.indexOf("@") + 1);
console.log("Domain: " + domain);  // "university.edu"
```

### Exercise 2.4: Type Conversion Puzzle

**Goal:** Predict and understand type conversions

```javascript
// Predict output BEFORE running!

// String concatenation
console.log("Price: $" + 99.99);
console.log(5 + 5 + " items");
console.log("Items: " + 5 + 5);  // Different from above!

// Type coercion in calculations
console.log("10" - 3);           // 7
console.log("10" * "2");         // 20
console.log("10" / "2");         // 5
console.log("10" + "2");         // "102" (not 12!)

// Boolean arithmetic
console.log(true + true);        // 2 (true = 1)
console.log(false + 5);          // 5
console.log(true + "message");   // "truemessage"
```

### Exercise 2.5: Real-World Application - Currency Converter

**Goal:** Apply arithmetic to real problem

**Scenario:** Convert between currencies

```javascript
// Exchange rates (hardcoded for now)
const inrToUsd = 0.012;           // 1 INR = 0.012 USD
const inrToEuro = 0.011;          // 1 INR = 0.011 EUR

// User amount in INR
const amountInr = 5000;

// Convert
const amountUsd = amountInr * inrToUsd;
const amountEuro = amountInr * inrToEuro;

// Display with formatting
console.log("=== CURRENCY CONVERSION ===");
console.log("Input: ₹" + amountInr);
console.log("USD: $" + amountUsd.toFixed(2));
console.log("EUR: €" + amountEuro.toFixed(2));
console.log("==========================");
```

### Exercise 2.6: BMI Calculator

**Goal:** Combine arithmetic operations for health calculation

**Formula:** BMI = weight (kg) / (height (m))²

```javascript
const weight = 70;        // kg
const height = 1.75;      // meters

const bmi = weight / (height ** 2);

console.log("=== BMI CALCULATOR ===");
console.log("Weight: " + weight + " kg");
console.log("Height: " + height + " m");
console.log("BMI: " + bmi.toFixed(2));

// Interpretation
if (bmi < 18.5) {
    console.log("Category: Underweight");
} else if (bmi < 25) {
    console.log("Category: Normal weight");
} else if (bmi < 30) {
    console.log("Category: Overweight");
} else {
    console.log("Category: Obese");
}
// (if/else next week!)
```

---

## 🎓 Summary

| Topic | Key Concept | Example |
|-------|------------|---------|
| **Numbers** | 42, 3.14, Infinity, NaN | toFixed(), toString() |
| **Strings** | "text", backticks | length, toUpperCase(), slice() |
| **Addition** | + operator | "a" + "b" = "ab" |
| **Arithmetic** | +, -, *, /, %, ** | 17 % 5 = 2 |
| **Modulo** | Remainder operation | Check even/odd |
| **Order** | PEMDAS rules | (2+3)*4 = 20 |
| **Coercion** | Auto type conversion | "10" - 3 = 7 |

---

## 📝 Day 2 Assignment

**Task 1:** Create `day2_operators.js` with:
- 10 arithmetic calculations
- 5 string operations
- 3 modulo examples

**Task 2:** Build a "Pizza Delivery Calculator":
- Pizza price: ₹250
- Delivery charge: ₹50
- Tax: 18%
- Calculate total for 3 pizzas

**Submission:** Push to GitHub + Upload to Google Classroom

---

## 🔗 References

- [MDN: Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
- [JavaScript.info: Operators](https://javascript.info/operators)
- [String Methods Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

**Next:** Day 3 - Logical & Comparison Operators
