# Mini Programming Project

## 1. Group Information

**Class:** C  
**Group:** 6

### Group Members
| 1 | Sebastian Dostun Danitza  | 2610312098 | Project Coordinator |
| 2 | Ifan Rudiansyah | 2610312103 | Algorithm |
| 3 | Misael | 2610312086 | Flowchart |
| 4 | Zakiya Hazati  | 2610312089 | JavaScript |
| 5 | Muhammad Islami Pasya | 2610312104 | Testing & Documentation |



## 2. Project Title

Simple Shopping Calculator



## 3. Project Description

A simple shopping calculator program that helps customers calculate the total purchase cost. Customers can enter information about the items they want to buy, including the item name, price, and quantity. The program will then calculate the total spending and apply discount rules based on the purchase amount.

---

## 4. Objectives

This project is designed to apply the following programming concepts:

- Variables
- Data types
- Operators
- Conditional statements
- Loops
- Algorithms
- JavaScript

---

## 5. Input

The program receives:

- Item's Name
- Item's Price
- Item's Quantity

---

## 6. Process

1. Setup
The program declares variables: namabarang (item name) and lanjut (continue Y/N) as Strings, and harga (price), jumlah (quantity), totalharga (total price) as Integers. It initializes totalharga to 0 and lanjut to "Y".

2. Input loop (repeats while the user wants to keep adding items)
As long as lanjut equals "Y" or "y", the program:

Asks the user to enter an item name → stores it in namabarang
Asks the user to enter the item's price → stores it in harga
Asks the user to enter the quantity → stores it in jumlah
Adds harga * jumlah to totalharga (running total)
Asks "do you want to add another item? (Y/N)" → stores the answer in lanjut

The loop keeps repeating this input sequence until the user answers anything other than "Y"/"y".

3. Discount decision (after the loop ends)
The program compares totalharga against price thresholds. If it is:

Less than 50,000 → the program prints "You get no discount" along with the total amount
Between 50,000 and 99,000 (inclusive) → the program prints "You get a 5% discount", recalculates totalharga as totalharga * 0.95, and prints the discounted total
100,000 or more → the program prints "You get a 10% discount", recalculates totalharga as totalharga * 0.90, and prints the discounted total
(Fallback) → if none of the above conditions somehow match, it prints "Error"
---

## 7. Output

The program displays:

- Total purchase before discount
- Discount received
- Total purchase after discount

---

## 8. Algorithm

The algorithm used in the program is described in:

`pseudocode.txt`

---

## 9. Flowchart

The flowchart is created using Flowgorithm.

File:

`flowchart.fprg`

---

## 10. JavaScript Implementation

The JavaScript implementation of the program is available in:

`program.js`

---

## 11. Testing

The program is tested using several test scenarios.

Testing documentation:

`test-cases.md`
