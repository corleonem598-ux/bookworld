// Hamburger Menü Elemanlarını Seç
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Menüye Tıklama Olayı
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Linklere tıklandığında menüyü kapat (Mobil kullanıcı deneyimi için)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});