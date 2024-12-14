// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
  
    burger.addEventListener("click", () => {
      // Toggle nav list and burger class
      navLists.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
    });
  };
  
  navSlide();
  
  // Clear form before unload
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
  
// Ambil elemen yang dibutuhkan
const zoomImage = document.querySelector('.zoom-image');
const modal = document.getElementById('full-screen-modal');
const closeBtn = document.getElementById('close-btn');

// Fungsi untuk membuka gambar dalam mode layar penuh
zoomImage.addEventListener('click', function() {
    modal.style.display = 'flex';
});

// Fungsi untuk menutup modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Tutup modal jika klik di luar gambar
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
