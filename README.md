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

Shopping Total & Discount Calculator (Flowgorithm)

A simple Flowgorithm program that lets a user repeatedly enter items (name, price, quantity), calculates the total purchase amount, and applies a tiered discount based on the total.

How It Works
1. Setup

The program declares the following variables:

namabarang (String) — item name
lanjut (String) — whether the user wants to continue adding items (Y/N)
harga (Integer) — item price
jumlah (Integer) — item quantity
totalharga (Integer) — running total price

It initializes totalharga to 0 and lanjut to "Y".

2. Input Loop

While lanjut equals "Y" or "y", the program repeats the following:

Prompts "Silahkan masukkan nama barang!" → stores input in namabarang
Prompts "Silahkan masukkan harga barang anda!" → stores input in harga
Prompts "Silahkan masukkan jumlah barang anda!" → stores input in jumlah
Adds harga * jumlah to totalharga
Prompts "apakah anda ingin menambah barang lagi? (Y/N)" → stores input in lanjut

The loop keeps repeating until the user enters anything other than Y/y.

3. Discount Logic

After the loop ends, the program compares totalharga against price thresholds:

- Less than 50,000 → the program prints "You get no discount" along with the total amount
- Between 50,000 and 99,000 (inclusive) → the program prints "You get a 5% discount", recalculates `totalharga` as `totalharga * 0.95`, and prints the discounted total
- 100,000 or more → the program prints "You get a 10% discount", recalculates `totalharga` as `totalharga * 0.90`, and prints the discounted total
- (Fallback) → if none of the above conditions somehow match, it prints "Error"
---

## 7. Output

The program displays:

- Total purchase before discount
- Discount received
- Total purchase after discount

---

## 8. Algorithm

The algorithm used in the program is described in:

[pseudocode.txt](kelompok%206%20psedocode.txt)

---

## 9. Flowchart

The flowchart is created using Flowgorithm.

File:

[flowchart.fprg](kelompok%206%20final.fprg)

---

## 10. JavaScript Implementation

The JavaScript implementation of the program is available in:

[kelompok 6 javascript.js] (Kelompok%206%20Javascript.js) 
---

## 11. Testing

The program is tested using several test scenarios.

Testing documentation:

[test-cases.md](test-cases.md)
[Case 1.mp4](https://github.com/Misael0702/Kelompok6/blob/cf7c62a26eda8cb8fed5bbfe7879927109f7ffad/Case%201.mp4)
[Case 2.mp4](https://github.com/Misael0702/Kelompok6/blob/cf7c62a26eda8cb8fed5bbfe7879927109f7ffad/Case%202.mp4)
[Case 3.mp4](https://github.com/Misael0702/Kelompok6/blob/cf7c62a26eda8cb8fed5bbfe7879927109f7ffad/Case%203.mp4)
[Case 4.mp4](https://github.com/Misael0702/Kelompok6/blob/cf7c62a26eda8cb8fed5bbfe7879927109f7ffad/Case%204.mp4)
