# Sample Code Repository - Week 1 Examples

## 📁 File: 01-values-and-types.js

```javascript
// ============================================
// WEEK 1: Values, Types, and Basic Operations
// ============================================

// 1. NUMBERS
console.log("=== NUMBERS ===");
console.log(42);              // Whole number
console.log(3.14);            // Decimal
console.log(-17);             // Negative
console.log(1e3);             // Scientific: 1000
console.log(Infinity);        // Positive infinity
console.log(NaN);             // Not a Number

// Arithmetic with numbers
console.log(10 + 5);          // 15
console.log(10 - 5);          // 5
console.log(10 * 5);          // 50
console.log(10 / 5);          // 2
console.log(17 % 5);          // 2 (remainder)
console.log(2 ** 3);          // 8 (2^3)

// ------------------------------------------

// 2. STRINGS
console.log("=== STRINGS ===");
console.log("Hello");         // String with double quotes
console.log('World');         // String with single quotes
console.log(`JavaScript`);    // String with backticks

// String length
const message = "Hello World";
console.log(message.length);  // 11

// String operations
console.log("Hello" + " " + "World");      // Concatenation
console.log("5" + 5);                      // "55" (type conversion!)
console.log("JavaScript".toUpperCase());   // "JAVASCRIPT"
console.log("JAVASCRIPT".toLowerCase());   // "javascript"

// ------------------------------------------

// 3. BOOLEANS
console.log("=== BOOLEANS ===");
console.log(true);            // Boolean true
console.log(false);           // Boolean false

// Comparisons result in booleans
console.log(10 > 5);          // true
console.log(10 < 5);          // false
console.log(10 === 10);       // true
console.log(10 === "10");     // false

// ------------------------------------------

// 4. TYPE CONVERSION (COERCION)
console.log("=== TYPE CONVERSION ===");
console.log("5" + 3);         // "53" (number becomes string)
console.log("5" - 3);         // 2 (string becomes number)
console.log("10" * "2");      // 20 (both become numbers)
console.log(true + 1);        // 2 (true = 1)
console.log(false + 1);       // 1 (false = 0)

// Explicit conversion
console.log(String(42));      // "42"
console.log(Number("42"));    // 42
console.log(Boolean(0));      // false
console.log(Boolean(1));      // true

// ------------------------------------------

// 5. UNDEFINED AND NULL
console.log("=== UNDEFINED AND NULL ===");
let x;
console.log(x);               // undefined (declared but not assigned)
console.log(null);            // null (explicitly empty)

// ------------------------------------------

// 6. REAL-WORLD EXAMPLE: SIMPLE CALCULATOR
console.log("=== FRUIT STORE CALCULATOR ===");

const applePricePer kg = 50;
const bananaPricePerKg = 30;
const applesQty = 2;
const bananasQty = 3;

const appleCost = applePricePerKg * applesQty;
const bananasCost = bananaPricePerKg * bananasQty;
const totalCost = appleCost + bananasCost;

console.log("Apples (2kg @ ₹50): ₹" + appleCost);
console.log("Bananas (3kg @ ₹30): ₹" + bananasCost);
console.log("Total: ₹" + totalCost);
```

---

## 📁 File: 02-operators.js

```javascript
// ============================================
// WEEK 1: Operators
// ============================================

// 1. ARITHMETIC OPERATORS
console.log("=== ARITHMETIC OPERATORS ===");
console.log(10 + 5);          // 15 - Addition
console.log(10 - 5);          // 5 - Subtraction
console.log(10 * 5);          // 50 - Multiplication
console.log(10 / 5);          // 2 - Division
console.log(17 % 5);          // 2 - Modulo (remainder)
console.log(2 ** 3);          // 8 - Exponentiation

// Order of operations (PEMDAS)
console.log(2 + 3 * 4);       // 14 (multiply first)
console.log((2 + 3) * 4);     // 20 (parentheses first)

// ------------------------------------------

// 2. COMPARISON OPERATORS
console.log("=== COMPARISON OPERATORS ===");
console.log(10 > 5);          // true
console.log(10 < 5);          // false
console.log(10 >= 10);        // true
console.log(5 <= 5);          // true
console.log(10 === 10);       // true (strict)
console.log(10 === "10");     // false (different types)
console.log(10 == "10");      // true (type conversion)
console.log(10 !== "10");     // true (strict inequality)

// ------------------------------------------

// 3. LOGICAL OPERATORS
console.log("=== LOGICAL OPERATORS ===");

// AND (&&) - both must be true
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && false);  // false

// OR (||) - at least one must be true
console.log(true || false);   // true
console.log(false || false);  // false
console.log(false || true);   // true

// NOT (!) - reverses boolean
console.log(!true);           // false
console.log(!false);          // true

// ------------------------------------------

// 4. REAL-WORLD EXAMPLE: BANK ACCOUNT
console.log("=== BANK ACCOUNT LOGIC ===");

const balance = 5000;
const withdrawAmount = 2000;
const dailyLimit = 10000;

const hasEnoughBalance = balance >= withdrawAmount;
const withinDailyLimit = withdrawAmount <= dailyLimit;
const canWithdraw = hasEnoughBalance && withinDailyLimit;

console.log("Balance: ₹" + balance);
console.log("Withdrawal Amount: ₹" + withdrawAmount);
console.log("Can withdraw: " + canWithdraw);

// ------------------------------------------

// 5. MODULO IN PRACTICE
console.log("=== MODULO OPERATOR ===");

// Check if even or odd
console.log(10 % 2 === 0 ? "10 is even" : "10 is odd");
console.log(7 % 2 === 1 ? "7 is odd" : "7 is even");

// Cycling through options
const items = ["Apple", "Banana", "Orange"];
for (let i = 0; i < 6; i++) {
    console.log(i + ": " + items[i % 3]);
}

// Convert seconds to minutes
const totalSeconds = 125;
const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;
console.log(minutes + ":" + seconds);  // "2:5"

// ------------------------------------------

// 6. TERNARY OPERATOR
console.log("=== TERNARY OPERATOR ===");

const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"

const score = 75;
const result = (score >= 90) ? "A+" : 
               (score >= 80) ? "A" :
               (score >= 70) ? "B" : "C";
console.log("Grade: " + result);  // "Grade: B"

// ------------------------------------------

// 7. typeof OPERATOR
console.log("=== typeof OPERATOR ===");
console.log(typeof 42);               // "number"
console.log(typeof "hello");          // "string"
console.log(typeof true);             // "boolean"
console.log(typeof undefined);        // "undefined"
console.log(typeof {});               // "object"
console.log(typeof []);               // "object" (arrays are objects)
console.log(typeof function(){});     // "function"
console.log(typeof null);             // "object" (quirk!)
```

---

## 📁 File: 03-real-world-projects.js

```javascript
// ============================================
// WEEK 1: Real-World Project Examples
// ============================================

// PROJECT 1: CURRENCY CONVERTER
console.log("=== PROJECT 1: CURRENCY CONVERTER ===");

const amountInr = 5000;
const exchangeRateToUsd = 0.012;
const exchangeRateToEuro = 0.011;

const amountUsd = amountInr * exchangeRateToUsd;
const amountEuro = amountInr * exchangeRateToEuro;

console.log("Amount in INR: ₹" + amountInr);
console.log("Amount in USD: $" + amountUsd.toFixed(2));
console.log("Amount in EUR: €" + amountEuro.toFixed(2));

// ------------------------------------------

// PROJECT 2: BMI CALCULATOR
console.log("\n=== PROJECT 2: BMI CALCULATOR ===");

const weight = 70;           // kg
const height = 1.75;         // meters
const bmi = weight / (height ** 2);

console.log("Weight: " + weight + " kg");
console.log("Height: " + height + " m");
console.log("BMI: " + bmi.toFixed(2));

// Categorize BMI
const bmiCategory = bmi < 18.5 ? "Underweight" :
                    bmi < 25 ? "Normal" :
                    bmi < 30 ? "Overweight" : "Obese";
console.log("Category: " + bmiCategory);

// ------------------------------------------

// PROJECT 3: RESTAURANT BILL CALCULATOR
console.log("\n=== PROJECT 3: RESTAURANT BILL ===");

const foodCost = 500;
const taxPercentage = 18;
const tipPercentage = 15;

const taxAmount = foodCost * (taxPercentage / 100);
const tipAmount = foodCost * (tipPercentage / 100);
const totalBill = foodCost + taxAmount + tipAmount;

console.log("Food: ₹" + foodCost);
console.log("Tax (18%): ₹" + taxAmount.toFixed(2));
console.log("Tip (15%): ₹" + tipAmount.toFixed(2));
console.log("Total: ₹" + totalBill.toFixed(2));

// ------------------------------------------

// PROJECT 4: STUDENT ELIGIBILITY CHECKER
console.log("\n=== PROJECT 4: STUDENT ELIGIBILITY ===");

const gpa = 3.5;
const attendance = 0.95;
const feePaid = true;
const minGpa = 3.0;
const minAttendance = 0.90;

const isEligible = (gpa >= minGpa) && 
                   (attendance >= minAttendance) && 
                   feePaid;

const status = isEligible ? "✓ Eligible for exam" : "✗ Not eligible";

console.log("GPA: " + gpa);
console.log("Attendance: " + (attendance * 100) + "%");
console.log("Fee Paid: " + feePaid);
console.log("Status: " + status);

// ------------------------------------------

// PROJECT 5: DISCOUNT CALCULATOR
console.log("\n=== PROJECT 5: DISCOUNT CALCULATOR ===");

const purchaseAmount = 3500;
const isStudent = false;
const isMember = true;

// Base discount by amount
let discount = 0;
if (purchaseAmount >= 5000) {
    discount = 20;
} else if (purchaseAmount >= 3000) {
    discount = 10;
} else if (purchaseAmount >= 1000) {
    discount = 5;
}

// Additional discount
if (isStudent) discount += 5;
if (isMember) discount += 3;

const discountAmount = purchaseAmount * (discount / 100);
const finalPrice = purchaseAmount - discountAmount;

console.log("Original Price: ₹" + purchaseAmount);
console.log("Total Discount: " + discount + "%");
console.log("Discount Amount: ₹" + discountAmount.toFixed(2));
console.log("Final Price: ₹" + finalPrice.toFixed(2));
```

---

## How to Use These Files

1. **Copy code** to your text editor or browser console
2. **Run in browser:** F12 → Console tab, paste code
3. **Run in VS Code:** Save as `.js` file, then `node filename.js`
4. **Modify and experiment:** Change values and see results
5. **Extend examples:** Add your own variations

---

## 🎯 Learning Strategy

| File | Purpose | Time |
|------|---------|------|
| 01-values... | Understand basics | 30 min |
| 02-operators... | Master operations | 40 min |
| 03-real-world... | Apply to problems | 50 min |
| **Total** | **Complete overview** | **2 hours** |

---

**These examples are your reference! Use them, modify them, learn from them! 💪**
