            const namaToko = "AmeKohi";
            let jumlahPengunjung = 0;

            function sapaPengunjung() {
                jumlahPengunjung++;
                
                const hasil = document.getElementById("hasilSapaan");
                hasil.textContent
                 = "Selamat datang di " + 
                  namaToko + 
                  "! Anda adalah pengunjung ke-" +
                  jumlahPengunjung + 
                  ".";

                  alert("Selamat datang di " + namaToko + "! Anda adalah pengunjung ke-" + jumlahPengunjung + ".");
            }

            document
            .getElementById("TombolSapaan")
            .addEventListener("click", sapaPengunjung);

    const inputCari = document.getElementById("cariMenu");
    const barisMenu = document.querySelectorAll("#daftarMenu tr");
    const hasilPencarian = document.getElementById("hasilPencarian");

    inputCari.addEventListener("input", function () {
        const kataKunci = inputCari.value.toLowerCase();
        let JumlahDitemukan = 0;

        barisMenu.forEach(function (baris) {
            const namaMenu = baris.cells[1].textContent.toLowerCase();
            const kategori = baris.cells[2].textContent.toLowerCase();

            if (namaMenu.includes(kataKunci) || kategori.includes(kataKunci)) {
                baris.style.display = "";
                JumlahDitemukan++;
            } else {
                baris.style.display = "none";
            }
        });

    if (JumlahDitemukan > 0) {
        hasilPencarian.textContent = 
        "Ditemukan " + JumlahDitemukan + " menu.";
    } else {
        hasilPencarian.textContent = "Menu tidak ditemukan.";
    }
});