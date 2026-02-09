# DAY 4: Unary & Special Operators

## Session Outline (3 Hours)
- **0:00-0:10:** Recap & Quiz on Comparison & Logical Ops
- **0:10-1:00:** Theory: Unary Operators, Ternary, typeof, Nullish Coalescing
- **1:00-1:30:** Break
- **1:30-2:45:** Practical: Advanced Operator Puzzles
- **2:45-3:00:** Q&A & Assignment Intro

---

## 📖 Theory Content

### Unary Operators

Unary operators work with **one value**. We've seen some before!

#### Unary Plus & Minus
```javascript
const num = 5;
+num            // 5 (positive)
-num            // -5 (negative)

// Useful for type conversion
const str = "42";
+str            // 42 (converts to number)
-str            // -42

const price = "99.99";
+price          // 99.99 (forces number)
```

#### Increment & Decrement (++, --)

```javascript
let count = 5;

// Pre-increment (increment, then use)
++count;        // count = 6, then returns 6
const result1 = ++count;  // count = 7, result1 = 7

// Post-increment (use, then increment)
count++;        // count increases, but returns old value
const result2 = count++;  // result2 = 7, then count = 8

// Same for decrement
--count;        // Pre-decrement
count--;        // Post-decrement
```

**Rule of Thumb:** Avoid ++ and -- in complex expressions. They confuse beginners.

```javascript
// ❌ Confusing
let x = 5;
console.log(++x * 2);  // 12 (x becomes 6, then 6*2)

// ✅ Clear
let x = 5;
x = x + 1;
console.log(x * 2);    // 12
```

#### typeof Operator

Returns the type of a value as a string.

```javascript
typeof 42               // "number"
typeof "hello"          // "string"
typeof true             // "boolean"
typeof undefined        // "undefined"
typeof null             // "object" (quirk!)
typeof Symbol()         // "symbol"
typeof {}               // "object"
typeof []               // "object"
typeof function(){}     // "function"

// Check if variable exists
typeof undefinedVar     // "undefined" (doesn't throw error)
```

**Real-World: Type Checking**
```javascript
function processInput(value) {
    if (typeof value === "string") {
        console.log("Processing text: " + value);
    } else if (typeof value === "number") {
        console.log("Processing number: " + value);
    } else {
        console.log("Unknown type");
    }
}
```

### The Ternary (Conditional) Operator

The **only operator with 3 parts**: `condition ? valueIfTrue : valueIfFalse`

```javascript
// Simple example
const age = 20;
const status = (age >= 18) ? "Adult" : "Minor";
console.log(status);  // "Adult"

// Format: condition ? trueValue : falseValue
const score = 45;
const result = (score >= 50) ? "PASS" : "FAIL";
console.log(result);  // "FAIL"

// Nested ternary (avoid if possible—hard to read!)
const temp = 25;
const weather = (temp > 30) ? "Hot" : (temp > 20) ? "Warm" : "Cold";
console.log(weather);  // "Warm"
```

**vs if/else (we'll learn next week):**
```javascript
// Using ternary (one-liner)
const message = isValid ? "Success" : "Error";

// Using if/else (multi-line)
let message;
if (isValid) {
    message = "Success";
} else {
    message = "Error";
}
```

**Real-World: User Display**
```javascript
const isLoggedIn = true;
const displayText = isLoggedIn ? "Logout" : "Login";
console.log(displayText);  // "Logout"

// Message based on email verification
const emailVerified = false;
const message = emailVerified ? "Account active" : "Verify email first";
```

### The typeof Operator in Detail

```javascript
// Primitives
typeof 123        // "number"
typeof "str"      // "string"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof Symbol()   // "symbol"
typeof 123n       // "bigint"

// Objects
typeof null       // "object" (BUG in JavaScript!)
typeof {}         // "object"
typeof []         // "object" (arrays are objects)
typeof function(){} // "function"

// Check for null properly
const value = null;
console.log(value === null);        // true (correct)
console.log(typeof value === "object");  // true (but misleading)
```

### Nullish Coalescing Operator (??)

Returns the **right value if left is null/undefined**. (ES2020)

```javascript
// Practical use: default values
const name = null;
const displayName = name ?? "Guest";
console.log(displayName);  // "Guest"

const age = 0;
const displayAge = age ?? "Unknown";
console.log(displayAge);   // 0 (because 0 is not null/undefined)

// Compare with OR operator (||)
const value = 0;
const result1 = value || 10;   // 10 (0 is falsy)
const result2 = value ?? 10;   // 0 (0 is not null)
```

**Real-World: API Response Handling**
```javascript
// Server returns null if data unavailable
const userData = null;
const userName = userData ?? "Not provided";
console.log(userName);  // "Not provided"

// Default configuration
const timeout = null;
const finalTimeout = timeout ?? 3000;  // 3000 ms if not specified
```

### Optional Chaining Operator (?.)

Access nested properties safely. (ES2020)

```javascript
// Without optional chaining (crashes if obj is null)
const obj = null;
const value = obj.property;  // Error: Cannot read property of null

// With optional chaining (returns undefined safely)
const value = obj?.property;  // undefined (no error)

// With arrays
const arr = null;
const first = arr?.[0];  // undefined (safe)

// With functions
const obj = { method: function() { return 42; } };
const result = obj.method?.();  // 42
```

---

## 💻 Practical Session (1h 15min)

### Exercise 4.1: typeof Operator

**Goal:** Identify data types

```javascript
// Test different values
console.log(typeof 123);       // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (quirk!)
console.log(typeof {});        // "object"
console.log(typeof []);        // "object"

// Practical: Validate input type
function doubleNumber(value) {
    if (typeof value === "number") {
        return value * 2;
    } else {
        return "Error: Please provide a number";
    }
}

console.log(doubleNumber(5));     // 10
console.log(doubleNumber("5"));   // Error message
```

### Exercise 4.2: Ternary Operator

**Goal:** Use ternary for concise conditionals

```javascript
// Simple cases
const age = 25;
console.log(age >= 18 ? "Adult" : "Minor");

const score = 73;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade);  // "C"

// Real use: Toggle states
let isDarkMode = false;
const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";
console.log("Button: " + buttonText);

// CSS class selection
const isActive = true;
const className = isActive ? "btn-active" : "btn-inactive";
console.log(className);
```

### Exercise 4.3: Increment/Decrement Operators

**Goal:** Use ++ and -- correctly

```javascript
let counter = 0;

// Post-increment (use first, then increment)
console.log(counter++);  // 0, then counter = 1
console.log(counter);    // 1

// Pre-increment (increment first, then use)
console.log(++counter);  // 2
console.log(counter);    // 2

// Decrement
console.log(counter--);  // 2, then counter = 1
console.log(--counter);  // 0

// In loops (next week!)
let i = 0;
while (i < 3) {
    console.log(i);
    i++;  // Increment by 1
}
```

### Exercise 4.4: Nullish Coalescing

**Goal:** Handle null/undefined gracefully

```javascript
// User profile with missing data
const user = {
    name: "Priya",
    bio: null,
    website: undefined,
    age: 0
};

console.log(user.name ?? "Unknown");     // "Priya"
console.log(user.bio ?? "No bio");       // "No bio"
console.log(user.website ?? "Not set");  // "Not set"
console.log(user.age ?? 18);             // 0 (not null/undefined!)

// Compare with ||
console.log(user.age || 18);  // 18 (0 is falsy)
console.log(user.age ?? 18);  // 0 (0 is not null)
```

### Exercise 4.5: Operator Precedence Puzzle

**Goal:** Understand operation order

```javascript
// Predict output BEFORE running!

// 1. Arithmetic first
console.log(2 + 3 * 4);           // 14

// 2. Comparison next
console.log(5 > 3 && 2 < 4);      // true

// 3. Logical operators
console.log(true || false && false);  // true (AND first)

// 4. Ternary last
console.log(true ? 1 : 2 + 3);    // 1 (ternary happens first!)
console.log((true ? 1 : 2) + 3);  // 4

// Complex
const x = 5;
const result = x > 3 ? x * 2 : x + 10;
console.log(result);  // 10
```

### Exercise 4.6: Real-World - Parking Fee Calculator

**Goal:** Apply operators to calculate fees

```javascript
const hours = 5;
const isHandicapped = true;

// Rules:
// First hour: ₹50
// Each additional hour: ₹20
// Handicapped: Free parking

let fee;

if (isHandicapped) {
    fee = 0;
} else if (hours <= 1) {
    fee = 50;
} else {
    fee = 50 + (hours - 1) * 20;
}

// OR using ternary
fee = isHandicapped ? 0 : (hours <= 1 ? 50 : 50 + (hours - 1) * 20);

console.log("=== PARKING FEE ===");
console.log("Hours: " + hours);
console.log("Handicapped: " + isHandicapped);
console.log("Fee: ₹" + fee);
```

### Exercise 4.7: Student Status Checker

**Goal:** Combine multiple operators

```javascript
const name = "Rohan";
const gpa = 3.5;
const attendance = 0.95;
const feePaid = true;

// Status rules:
// GPA >= 3.0 AND attendance >= 90% AND fee paid = Active
// Otherwise = Inactive

const isActive = (gpa >= 3.0) && (attendance >= 0.90) && feePaid;
const status = isActive ? "✓ Active" : "✗ Inactive";

console.log("=== STUDENT STATUS ===");
console.log("Name: " + name);
console.log("GPA: " + gpa);
console.log("Attendance: " + (attendance * 100) + "%");
console.log("Fee Paid: " + feePaid);
console.log("Status: " + status);
```

---

## 🎓 Summary

| Operator | Purpose | Example | Result |
|----------|---------|---------|--------|
| `typeof` | Get type | typeof "5" | "string" |
| `?:` | Conditional value | true ? "A" : "B" | "A" |
| `++` | Increment | x++ | x+1 |
| `??` | Nullish default | null ?? "default" | "default" |
| `?.` | Safe property access | obj?.prop | undefined if null |

---

## 📝 Day 4 Assignment

**Task 1:** Create `day4_unary_special.js` with:
- 10 typeof examples
- 5 ternary operator examples
- 3 nullish coalescing examples
- 2 optional chaining examples

**Task 2:** Build a "Temperature Advisory System":
```javascript
- Input: temperature in Celsius
- Output: "Too Cold" (< 10), "Comfortable" (10-25), "Too Hot" (> 25)
Use ternary operators
```

**Submission:** GitHub + Google Classroom

---

**Next:** Day 5 - Mini Project & Week Review
