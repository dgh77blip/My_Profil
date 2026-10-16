// Mengambil bagian deskripsi dan tombol dari HTML
const deskripsi = document.querySelector('#deskripsi');
const tombolUbahTeks = document.querySelector('#ubah-teks');
const tombolGantiTema = document.querySelector('#ganti-tema');

// Mengubah teks deskripsi saat tombol ditekan
tombolUbahTeks.addEventListener('click', function() {
    deskripsi.textContent = 'Saya memiliki hobi dan keterampilan dan ingin terus berkembang cihuyy..';
});

// Mengganti tema terang menjadi gelap, atau sebaliknya
tombolGantiTema.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


// Membuat kartu hobi bisa dipilih saat diklik
const kartuHobi = document.querySelectorAll('.kartu');

kartuHobi.forEach(function(kartu) {
    kartu.addEventListener('click', function() {
        kartu.classList.toggle('active');
    });
});


