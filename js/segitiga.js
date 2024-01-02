function hitungLuas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);

    if (!isNaN(alas) && !isNaN(tinggi)) {
        var luas = Math.round(0.5 * alas * tinggi);
        document.getElementById("luasResult").textContent = luas + " cm²";

        var rumus = "L = 1/2 x a x t";
        var langkah1 = "L = 1/2 x " + alas + " x " + tinggi;
        var langkah2 = "L = " + luas + " cm²";

        document.getElementById("rumusLuas").textContent = rumus;
        document.getElementById("langkah1Luas").textContent = langkah1;
        document.getElementById("langkah2Luas").textContent = langkah2;
    } else {
        alert("Masukkan nilai yang benar untuk alas dan tinggi.");
    }
}


function hitungKeliling() {
    var sisiA = parseFloat(document.getElementById("sisiA").value);
    var sisiB = parseFloat(document.getElementById("sisiB").value);
    var sisiC = parseFloat(document.getElementById("sisiC").value);

    if (!isNaN(sisiA) && !isNaN(sisiB) && !isNaN(sisiC)) {
        var keliling = Math.round(sisiA + sisiB + sisiC);
        document.getElementById("kelilingResult").textContent = keliling + " cm";

        // Menampilkan rumus dan langkah-langkahnya
        var rumus = "k = sisi1 + sisi2 + sisi3";
        var langkah1 = "k = " + sisiA + " + " + sisiB + " + " + sisiC;
        var langkah2 = "k = " + keliling + " cm";

        document.getElementById("rumusKeliling").textContent = rumus;
        document.getElementById("langkah1Keliling").textContent = langkah1;
        document.getElementById("langkah2Keliling").textContent = langkah2;
    } else {
        alert("Masukkan nilai yang benar untuk sisi A, sisi B, dan sisi C.");
    }
}

function resetLuas() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("luasResult").textContent = "";
}

function resetKeliling() {
    document.getElementById("sisiA").value = "";
    document.getElementById("sisiB").value = "";
    document.getElementById("sisiC").value = "";
    document.getElementById("kelilingResult").textContent = "";
}

