function main() {
    var barang1, barang2, barang3, lanjut;
    var harga1, harga2, harga3, jumlah1, jumlah2, jumlah3, totalharga, totalharga2, totalharga3;

    lanjut = "Y";
    while (lanjut == "Y" || lanjut == "y") {
        window.alert("Silahkan masukkan nama barang anda!");
        barang1 = window.prompt('Enter a value for barang1');
        barang2 = window.prompt('Enter a value for barang2');
        barang3 = window.prompt('Enter a value for barang3');
        window.alert("Silahkan masukkan harga barang " + barang1);
        harga1 = Number(window.prompt('Enter a value for harga1'));
        window.alert("Silahkan masukkan harga barang " + barang2);
        harga2 = Number(window.prompt('Enter a value for harga2'));
        window.alert("Silahkan masukkan harga barang " + barang3);
        harga3 = Number(window.prompt('Enter a value for harga3'));
        window.alert("Silahkan masukkan jumlah barang " + barang1);
        jumlah1 = Number(window.prompt('Enter a value for jumlah1'));
        window.alert("Silahkan masukkan jumlah barang " + barang2);
        jumlah2 = Number(window.prompt('Enter a value for jumlah2'));
        window.alert("Silahkan masukkan jumlah barang " + barang3);
        jumlah3 = Number(window.prompt('Enter a value for jumlah3'));
        totalharga = harga1 * jumlah1 + harga2 * jumlah2 + harga3 * jumlah3;
        window.alert("Nominal belanja anda sebelum diskon adalah " + totalharga);
        if (totalharga < 50000) {
            window.alert("Anda tidak mendapat diskon");
            window.alert("Nominal belanja anda adalah " + totalharga);
        } else {
            if (totalharga >= 50000 && totalharga <= 99000) {
                window.alert("Anda mendapat diskon 5%");
                totalharga2 = totalharga * 0.95;
                window.alert("Nominal anda setelah diskon adalah " + totalharga2);
            } else {
                if (totalharga >= 100000) {
                    window.alert("Anda mendapat diskon 10%");
                    totalharga3 = totalharga * 0.9;
                    window.alert("Nominal belanja anda setelah diskon adalah " + totalharga3);
                } else {
                    window.alert("Error");
                }
            }
        }
        window.alert("Apakah ingin input barang lagi? (Y/N)");
        lanjut = window.prompt('Enter a value for lanjut');
    }
    window.alert("Terimakasih telah berbelanja");
}
