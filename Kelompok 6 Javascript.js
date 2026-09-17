function main() { 
    var namabarang, lanjut; 
    var harga, jumlah, totalharga; 
 
    totalharga = 0; 
    lanjut = "Y"; 
    
    while (lanjut == "Y" || lanjut == "y") { 
        
        alert("Silahkan masukkan nama barang!");
        namabarang = prompt("Masukkan nama barang:");
        
        alert("Silahkan masukkan harga barang anda!");
        harga = Number(prompt("Masukkan harga:"));
        
        alert("Silahkan masukkan jumlah barang anda!");
        jumlah = Number(prompt("Masukkan jumlah:"));
        
        totalharga = totalharga + harga * jumlah;
        
        alert("Apakah anda ingin menambah barang lagi? (Y/N)");
        lanjut = prompt("Masukkan pilihan:");
    } 
    
    if (totalharga < 50000) { 
        
        alert("Anda tidak mendapat diskon");
        alert("Nominal belanja anda adalah " + totalharga);
        
    } else { 
        
        if (totalharga >= 50000 && totalharga <= 99000) {
            
            alert("Anda mendapat diskon 5%");
            totalharga = totalharga * 0.95;
            alert("Nominal anda setelah diskon adalah " + totalharga);
            
        } else {
            
            if (totalharga >= 100000) {
                
                alert("Anda mendapat diskon 10%");
                totalharga = totalharga * 0.9;
                alert("Nominal belanja anda setelah diskon adalah " + totalharga);
                
            } else {
                
                alert("Error");
                
            }
        }
    }
}

main();
