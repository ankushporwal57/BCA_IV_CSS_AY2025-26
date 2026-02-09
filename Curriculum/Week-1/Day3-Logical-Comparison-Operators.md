# DAY 3: Logical & Comparison Operators

## Session Outline (3 Hours)
- **0:00-0:10:** Recap & Quiz on Day 1-2
- **0:10-1:00:** Theory: Comparison & Logical Operators
- **1:00-1:30:** Break
- **1:30-2:45:** Practical: Boolean Logic Puzzles
- **2:45-3:00:** Q&A & Assignment

---

## 📖 Theory Content

### Comparison Operators

Comparison operators return **true** or **false**. They answer "yes/no" questions.

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Loose equality | 5 == "5" | true (converts types) |
| `===` | Strict equality | 5 === "5" | false (checks type too) |
| `!=` | Loose inequality | 5 != "5" | false |
| `!==` | Strict inequality | 5 !== "5" | true |
| `<` | Less than | 5 < 10 | true |
| `>` | Greater than | 10 > 5 | true |
| `<=` | Less than or equal | 5 <= 5 | true |
| `>=` | Greater than or equal | 10 >= 5 | true |

#### The Equality Trap: `==` vs `===`

```javascript
// Loose equality (==) converts types—avoid!
5 == "5"           // true (string converts to number)
null == undefined  // true (special rule)
0 == ""            // true (both falsy)
false == 0         // true

// Strict equality (===) checks type—use this!
5 === "5"          // false (different types)
null === undefined // false (different types)
0 === ""           // false
false === 0        // false
```

**Rule of Thumb:** **Always use `===` and `!==`**

```javascript
// ✅ Good practice
if (userAge === 18) { ... }

// ❌ Avoid
if (userAge == 18) { ... }
```

**Real-World Example: Login Validation**
```javascript
const password = "SecurePass123";
const userInput = "SecurePass123";

if (userInput === password) {
    console.log("Login successful!");
} else {
    console.log("Wrong password!");
}
```

### Logical Operators

Logical operators combine boolean values.

| Operator | Name | Example | Returns |
|----------|------|---------|---------|
| `&&` | AND | true && true | true |
| `\|\|` | OR | true \|\| false | true |
| `!` | NOT | !true | false |

#### AND Operator (&&)

Returns true **only if BOTH** sides are true.

```javascript
const age = 20;
const hasLicense = true;

// Both conditions must be true
const canDrive = (age >= 18) && hasLicense;
console.log(canDrive);  // true

const age2 = 16;
const canDrive2 = (age2 >= 18) && hasLicense;
console.log(canDrive2);  // false (age too young)
```

**Truth Table for AND:**
```
true  && true   = true
true  && false  = false
false && true   = false
false && false  = false
```

#### OR Operator (||)

Returns true **if AT LEAST ONE** side is true.

```javascript
const hasStudentId = true;
const hasSeniorCitizen = false;

// At least one condition must be true
const getDiscount = hasStudentId || hasSeniorCitizen;
console.log(getDiscount);  // true (has student ID)

const hasStudentId2 = false;
const hasSeniorCitizen2 = false;
const getDiscount2 = hasStudentId2 || hasSeniorCitizen2;
console.log(getDiscount2);  // false (neither)
```

**Truth Table for OR:**
```
true  || true   = true
true  || false  = true
false || true   = true
false || false  = false
```

#### NOT Operator (!)

Reverses the boolean value.

```javascript
const isRaining = true;
const isSunny = !isRaining;
console.log(isSunny);  // false

!true           // false
!false          // true
!(5 > 10)       // true (5 is not > 10)
!(10 > 5)       // false
```

### Combining Operators

```javascript
// Student eligibility: age >= 18 AND has high school certificate
const age = 19;
const hasGraduated = true;
const isEligible = (age >= 18) && hasGraduated;

// Job requirement: 5+ years experience OR Masters degree
const yearsExp = 3;
const hasMasters = true;
const canApply = (yearsExp >= 5) || hasMasters;

// Complex: Can watch movie?
// R-rated: need parent OR be 18+
// Needs tickets AND available seats
const rating = "R";
const userAge = 16;
const hasParent = true;
const hasTickets = true;
const hasSeats = true;

const canWatch = (hasSeats && hasTickets) && ((userAge >= 18) || hasParent);
```

---

## 💻 Practical Session (1h 15min)

### Exercise 3.1: Comparison Operators

**Goal:** Understand comparison results

```javascript
// Comparisons
console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(10 >= 10);    // true
console.log(5 <= 5);      // true
console.log(10 === "10"); // false (different types)
console.log(10 == "10");  // true (type conversion)

// String comparison (alphabetical)
console.log("Apple" < "Banana");  // true (A comes before B)
console.log("z" > "a");           // true

// Date/Time comparison
const time1 = 9;    // 9 AM
const time2 = 14;   // 2 PM
console.log(time1 < time2);  // true
```

### Exercise 3.2: AND Operator Logic

**Goal:** Practice combining conditions

```javascript
// All conditions must be true
const ageValid = 20 >= 18;        // true
const hasId = true;               // true
const bothTrue = ageValid && hasId;
console.log(bothTrue);            // true

// One condition fails
const hasBalance = 500 > 1000;    // false
const isActive = true;            // true
const canBuy = hasBalance && isActive;
console.log(canBuy);              // false

// Real example: Game entry
const hasTicket = true;
const noWeapons = true;
const fitsAge = 16 >= 13;

const canEnter = hasTicket && noWeapons && fitsAge;
console.log(canEnter);  // true
```

### Exercise 3.3: OR Operator Logic

**Goal:** Learn when at least one condition works

```javascript
// At least one is true
const isWeekend = true;   // Saturday
const isHoliday = false;  // Not a holiday
const offdDay = isWeekend || isHoliday;
console.log(offDay);      // true

// Free delivery condition
const isStudent = false;  // Not student
const orderAbove500 = true; // Order > ₹500
const freeDelivery = isStudent || orderAbove500;
console.log(freeDelivery); // true

// Multiple conditions
const hasAccount = true;
const isGuest = false;
const hasInvite = false;

const canAccess = hasAccount || isGuest || hasInvite;
console.log(canAccess);   // true
```

### Exercise 3.4: NOT Operator

**Goal:** Negate conditions

```javascript
const isDayTime = true;
const isNightTime = !isDayTime;
console.log(isNightTime);  // false

const hasError = false;
const isValid = !hasError;
console.log(isValid);      // true

// Double negation (avoid!)
const value = true;
console.log(!!value);      // true (but confusing)
console.log(value);        // Better: just true
```

### Exercise 3.5: Complex Logic - Movie Theater

**Goal:** Real-world decision logic

**Scenario:** Determine if someone can watch an R-rated movie

```javascript
const userAge = 15;
const parentPresent = true;
const rating = "R";

// R-rated movie requires:
// User age >= 17 OR parent present (if under 17)

const canWatch = (userAge >= 17) || (userAge < 17 && parentPresent);

console.log("=== MOVIE TICKET ELIGIBILITY ===");
console.log("Age: " + userAge);
console.log("Rating: " + rating);
console.log("Parent Present: " + parentPresent);
console.log("Can Watch: " + canWatch);
```

### Exercise 3.6: School Grading System

**Goal:** Use multiple conditions for decisions

```javascript
const marksEng = 75;
const marksMath = 85;
const marksScience = 70;

const avgMarks = (marksEng + marksMath + marksScience) / 3;

console.log("=== GRADE REPORT ===");
console.log("English: " + marksEng);
console.log("Math: " + marksMath);
console.log("Science: " + marksScience);
console.log("Average: " + avgMarks.toFixed(2));

// Determine grade
let grade;
if (avgMarks >= 90) {
    grade = "A+";
} else if (avgMarks >= 80) {
    grade = "A";
} else if (avgMarks >= 70) {
    grade = "B";
} else if (avgMarks >= 60) {
    grade = "C";
} else {
    grade = "F";
}

console.log("Grade: " + grade);

// Passed or failed
const passed = (marksEng >= 40) && (marksMath >= 40) && (marksScience >= 40);
console.log("Status: " + (passed ? "PASSED" : "FAILED"));
```

### Exercise 3.7: E-Commerce Discount Logic

**Goal:** Apply operators to real business logic

```javascript
const cartValue = 2500;     // ₹
const isStudent = false;
const isMember = true;
const cartHasPromoCode = true;

// Discount rules:
// ₹1000-2000: 5%
// ₹2000-5000: 10%
// ₹5000+: 15%
// Students: +5%
// Members: +3%

let discountPercent = 0;

if (cartValue >= 1000 && cartValue < 2000) {
    discountPercent = 5;
} else if (cartValue >= 2000 && cartValue < 5000) {
    discountPercent = 10;
} else if (cartValue >= 5000) {
    discountPercent = 15;
}

// Additional bonuses
if (isStudent) {
    discountPercent += 5;
}
if (isMember) {
    discountPercent += 3;
}

const discountAmount = cartValue * discountPercent / 100;
const finalPrice = cartValue - discountAmount;

console.log("=== CART CALCULATION ===");
console.log("Original: ₹" + cartValue);
console.log("Discount %: " + discountPercent + "%");
console.log("Discount: ₹" + discountAmount.toFixed(2));
console.log("Final Price: ₹" + finalPrice.toFixed(2));
```

---

## 🎓 Summary

| Operator | Use Case | Example | Result |
|----------|----------|---------|--------|
| `===` | Check equality | 5 === "5" | false |
| `>`, `<` | Compare numbers | 10 > 5 | true |
| `&&` | All must be true | true && false | false |
| `\|\|` | At least one true | true \|\| false | true |
| `!` | Reverse boolean | !true | false |

---

## ⚠️ Common Mistakes

```javascript
// ❌ Using == instead of ===
if (userAge == "21") { }      // Bad!

// ✅ Always use ===
if (userAge === 21) { }       // Good!

// ❌ Forgetting parentheses in complex logic
canApply = age >= 18 && hasDegree || hasExperience;  // Confusing!

// ✅ Use parentheses for clarity
canApply = (age >= 18 && hasDegree) || hasExperience;  // Clear!
```

---

## 📝 Day 3 Assignment

**Task 1:** Create `day3_logical_ops.js` with:
- 10 comparison examples
- 5 AND operator examples
- 5 OR operator examples
- 3 complex logic problems

**Task 2:** Build an "Eligibility Checker":
```
Input: age, income, credit score
Output: Eligible for loan? (age >= 21 AND income >= 30000 AND score >= 650)
```

**Submission:** GitHub + Google Classroom

---

## 🔗 References

- [MDN: Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [MDN: Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)
- [JavaScript.info: Comparisons](https://javascript.info/comparison)

---

**Next:** Day 4 - Unary & Special Operators
