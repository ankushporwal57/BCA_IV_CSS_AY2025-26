# DAY 5: Week 1 Mini-Project & Review

## Session Outline (3 Hours)
- **0:00-0:15:** Recap & Quiz on All Week 1 Topics
- **0:15-1:15:** Mini-Project Introduction & Development
- **1:15-1:45:** Break
- **1:45-2:45:** Complete Project & Testing
- **2:45-3:00:** Presentations & Feedback

---

## 🎯 Learning Objectives

By end of Day 5, students will have:
1. ✅ Integrated all Week 1 concepts into one project
2. ✅ Built a real-world calculator application
3. ✅ Practiced error handling and edge cases
4. ✅ Presented their work to peers

---

## 📋 Quick Review Quiz (10 minutes)

Before starting the project, test your understanding:

**Question 1:** What will this return?
```javascript
typeof null           // Answer: "object" (quirk!)
```

**Question 2:** What will this output?
```javascript
"5" + 3               // Answer: "53"
"5" - 3               // Answer: 2
```

**Question 3:** What is the result?
```javascript
(true && false) || true   // Answer: true
```

**Question 4:** Use ternary to check if age >= 18:
```javascript
age >= 18 ? "Adult" : "Minor"
```

**Question 5:** Find the modulo result:
```javascript
17 % 5                // Answer: 2
```

---

## 🎬 Mini-Project: Smart Expense Calculator

### Project Overview

**Title:** Personal Expense Manager  
**Difficulty:** Beginner-Intermediate  
**Time:** 1 hour development + 15 min presentation  
**Skills:** All Week 1 operators, type conversion, real-world logic

### Project Description

Create an **expense calculator** that:
- Takes expense data (category, amount, GST %)
- Calculates total with tax
- Determines if the expense is a "big purchase" (> ₹5000)
- Suggests a savings recommendation
- Formats output beautifully

### Requirements

✅ **Functional Requirements:**
1. Accept expenses in multiple categories
2. Calculate GST (Goods and Services Tax)
3. Identify large expenses
4. Provide savings advice based on total

✅ **Technical Requirements:**
1. Use variables for all data
2. Use at least 5 different operators
3. Use at least 2 conditional statements (ternary)
4. Type conversions where appropriate
5. Formatted output (fixed decimals)

---

## 💻 Project Implementation

### Step 1: Create Project File

Create a file called `day5_expense_calculator.js` or `index.html`:

**Option A: HTML File (Recommended for beginners)**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Expense Calculator</title>
    <style>
        body { font-family: Arial; padding: 20px; }
        .receipt { border: 1px solid #333; padding: 20px; max-width: 400px; }
        h1 { color: #333; }
        .item { display: flex; justify-content: space-between; margin: 10px 0; }
        .total { font-weight: bold; border-top: 1px solid #333; padding-top: 10px; }
        .warning { color: red; font-weight: bold; }
        .tip { color: green; font-style: italic; }
    </style>
</head>
<body>
    <h1>💰 Personal Expense Manager</h1>
    <div class="receipt" id="receipt"></div>
    <script src="calculator.js"></script>
</body>
</html>
```

### Step 2: Implementation Code

Create `calculator.js`:

```javascript
// ============================================
// EXPENSE CALCULATOR - Week 1 Project
// ============================================

// Step 1: Define expense data
const expenseCategory = "Electronics";
const baseAmount = 8500;              // ₹
const gstPercentage = 18;             // %

// Step 2: Calculate GST and total
const gstAmount = baseAmount * (gstPercentage / 100);
const totalAmount = baseAmount + gstAmount;

// Step 3: Check if it's a "big purchase"
const isBigPurchase = totalAmount > 5000;
const purchaseStatus = isBigPurchase ? "BIG PURCHASE" : "Regular purchase";

// Step 4: Determine savings advice
const monthlyBudget = 20000;
const percentageOfBudget = (totalAmount / monthlyBudget) * 100;
const savingsAdvice = percentageOfBudget > 30 ? 
    "⚠️ Consider reducing expenses" : 
    "✓ Within reasonable budget";

// Step 5: Calculate discount if eligible
const discountPercent = isBigPurchase ? 5 : 0;
const discountAmount = baseAmount * (discountPercent / 100);
const finalAmount = totalAmount - discountAmount;

// Step 6: Format and display
const receipt = `
╔════════════════════════════════════╗
║     EXPENSE RECEIPT                ║
╚════════════════════════════════════╝

Category: ${expenseCategory}
Base Amount: ₹${baseAmount.toFixed(2)}

GST (${gstPercentage}%): ₹${gstAmount.toFixed(2)}
════════════════════════════════════
Subtotal: ₹${totalAmount.toFixed(2)}

${discountPercent > 0 ? `Discount (${discountPercent}%): -₹${discountAmount.toFixed(2)}` : "No discount available"}
════════════════════════════════════
FINAL AMOUNT: ₹${finalAmount.toFixed(2)}

Status: ${purchaseStatus}
Budget Usage: ${percentageOfBudget.toFixed(1)}%
Advice: ${savingsAdvice}

════════════════════════════════════
`;

console.log(receipt);

// Step 7: Display in HTML (bonus)
if (document.getElementById("receipt")) {
    document.getElementById("receipt").innerHTML = `<pre>${receipt}</pre>`;
}
```

### Sample Output

```
╔════════════════════════════════════╗
║     EXPENSE RECEIPT                ║
╚════════════════════════════════════╝

Category: Electronics
Base Amount: ₹8500.00

GST (18%): ₹1530.00
════════════════════════════════════
Subtotal: ₹10030.00

Discount (5%): -₹425.00
════════════════════════════════════
FINAL AMOUNT: ₹9605.00

Status: BIG PURCHASE
Budget Usage: 48.0%
Advice: ⚠️ Consider reducing expenses

════════════════════════════════════
```

---

## 🚀 Project Enhancements

### Challenge 1: Multiple Expenses

Track 3 different expenses and calculate total spending:

```javascript
// Expense 1: Groceries
const exp1Category = "Groceries";
const exp1Amount = 2500;
const exp1Gst = 5;

// Expense 2: Electricity
const exp2Category = "Electricity";
const exp2Amount = 1200;
const exp2Gst = 0;

// Expense 3: Entertainment
const exp3Category = "Entertainment";
const exp3Amount = 3000;
const exp3Gst = 18;

// Calculate each
const exp1Total = exp1Amount * (1 + exp1Gst / 100);
const exp2Total = exp2Amount * (1 + exp2Gst / 100);
const exp3Total = exp3Amount * (1 + exp3Gst / 100);

// Grand total
const grandTotal = exp1Total + exp2Total + exp3Total;
const avgExpense = grandTotal / 3;

console.log("Total: ₹" + grandTotal.toFixed(2));
console.log("Average: ₹" + avgExpense.toFixed(2));
```

### Challenge 2: Budget Analyzer

Compare actual spending vs budget:

```javascript
const actualSpending = 15000;
const budgetLimit = 20000;

const remaining = budgetLimit - actualSpending;
const spentPercent = (actualSpending / budgetLimit) * 100;

const status = spentPercent > 80 ? 
    "⚠️ Approaching limit" : 
    spentPercent > 50 ? 
    "⚡ Moderate spending" : 
    "✓ Well within budget";

console.log(`Status: ${status}`);
console.log(`Spent: ${spentPercent.toFixed(1)}% of budget`);
console.log(`Remaining: ₹${remaining}`);
```

### Challenge 3: Loyalty Program

Add reward points based on spending:

```javascript
const totalSpent = 45000;
const isPremieMember = totalSpent > 50000;

const pointsPerRupee = isPremieMember ? 2 : 1;
const totalPoints = totalSpent * pointsPerRupee;
const cashback = totalPoints * 0.1;

console.log(`Points Earned: ${totalPoints}`);
console.log(`Cashback: ₹${cashback.toFixed(2)}`);
console.log(`Member Status: ${isPremieMember ? "Prime" : "Regular"}`);
```

---

## 🎓 Week 1 Concepts Summary

| Day | Topic | Key Concept | Real-World Use |
|-----|-------|------------|-----------------|
| **1** | Values & Types | Numbers, Strings, Booleans | Data representation |
| **2** | Arithmetic | +, -, *, /, %, ** | Calculations |
| **3** | Logic | &&, \|\|, ! | Decision making |
| **4** | Unary & Special | typeof, ?:, ?? | Type checking, defaults |
| **5** | Integration | All concepts | Real projects |

---

## 📊 Week 1 Learning Outcomes Checklist

Before moving to Week 2, ensure you can:

- [ ] Identify and use all 7 data types
- [ ] Perform arithmetic operations (including modulo)
- [ ] Understand type coercion and conversion
- [ ] Use comparison operators (===, >, <, etc.)
- [ ] Combine conditions with &&, ||, !
- [ ] Use typeof to check data types
- [ ] Use ternary operator for simple conditionals
- [ ] Apply real-world logic in calculations
- [ ] Format numbers with toFixed()
- [ ] Understand operator precedence

---

## 🎯 Project Grading Rubric

| Criteria | Excellent (5) | Good (4) | Fair (3) | Poor (2-1) |
|----------|---------------|---------|---------|-----------|
| **Functionality** | All features work | Minor bugs | Major bugs | Doesn't run |
| **Code Quality** | Clear, commented | Readable | Some comments | Messy |
| **Math Accuracy** | All correct | 1-2 errors | Multiple errors | Incorrect |
| **Presentation** | Clear explanation | Good | Adequate | Poor |

---

## 📝 Week 1 Final Assignment

**Due:** End of Day 5

**Submission Requirements:**
1. `day5_expense_calculator.js` or `.html` file
2. At least one enhanced version (Challenge 1, 2, or 3)
3. Written reflection (100-150 words):
   - What was the hardest concept?
   - How did you approach solving problems?
   - What would you do differently next time?

**Submission:** 
- Push to GitHub (create repo: `bca-client-side-scripting`)
- Upload to Google Classroom
- Be ready to present (2-3 minutes)

---

## 🔗 Resources for Week 1 Review

- [MDN: JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [JavaScript.info: Values and Variables](https://javascript.info/variables)
- [FreeCodeCamp: JavaScript Fundamentals](https://www.youtube.com/watch?v=PkZNo7MFNFg)

---

## ❓ Common Questions From Week 1

**Q: Why do we use === instead of ==?**  
A: === doesn't convert types, so it's more predictable. "5" === 5 is false (different types), but "5" == 5 is true (converted).

**Q: When should I use toFixed()?**  
A: Use toFixed() when displaying money or decimals to users. It rounds and returns a string.

**Q: What's the difference between ++ and +=?**  
A: x++ increments by 1. x += 5 increments by 5. Both modify the variable.

**Q: Can I use ternary for multiple conditions?**  
A: Yes, but it gets messy: `a ? b : c ? d : e`. For multiple conditions, use if/else (next week!).

---

## 🎉 Week 1 Achievement Unlocked!

You've learned:
- ✅ JavaScript values and data types
- ✅ Arithmetic, logical, and comparison operators
- ✅ Type conversion and coercion
- ✅ Real-world problem-solving
- ✅ Building functional programs

**Next week:** Control Flow - if/else, loops, functions!

---

**Excellent Work, Students! 🌟**

Take the weekend to rest and reflect on what you've learned. Next week, we'll build on these foundations to create interactive programs with decision-making and repetition.

See you in **Week 2: Program Structure & Control Flow**!
