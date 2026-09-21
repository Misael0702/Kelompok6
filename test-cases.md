# Test Cases

## Test Case 1: Total < 50,000 (No Discount)
- Input: Item = Kopi, Harga = 20000, Jumlah = 1, Lanjut = N
- Expected Output: "Anda tidak mendapat diskon", total = 20000
- Actual Output: ✅ Sesuai

## Test Case 2: Total 50,000–99,000 (5% Discount)
- Input: Item = Teh, Harga = 60000, Jumlah = 1, Lanjut = N
- Expected Output: "Anda mendapat diskon 5%", total = 57000
- Actual Output: ✅ Sesuai

## Test Case 3: Total ≥ 100,000 (10% Discount)
- Input: Item = Gula, Harga = 100000, Jumlah = 1, Lanjut = N
- Expected Output: "Anda mendapat diskon 10%", total = 90000
- Actual Output: ✅ Sesuai

## Test Case 4: Multiple Items
- Input: Item1 = Kopi (20000 x 2), Lanjut = Y → Item2 = Teh (30000 x 1), Lanjut = N
- Expected Output: total = 70000, "Anda mendapat diskon 5%", hasil akhir = 66500
- Actual Output: ✅ Sesuai
