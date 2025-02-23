// Sayfa Yüklenirken Aktif Sayfayı İşaretleme
window.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("nav ul li a");
    let currentURL = window.location.pathname;
    
    links.forEach(link => {
        if (link.getAttribute("href") === currentURL) {
            link.classList.add("active");
        }
    });
});

// Açılır Menü İçin Toggle İşlevi
document.querySelectorAll(".dropdown").forEach(dropdown => {
    dropdown.addEventListener("click", function () {
        this.classList.toggle("open");
    });
});

// Eğitim Videoları Filtreleme
function filterVideos() {
    let searchInput = document.getElementById("videoSearch").value.toLowerCase();
    let videos = document.querySelectorAll(".video-list li");
    
    videos.forEach(video => {
        let text = video.textContent.toLowerCase();
        video.style.display = text.includes(searchInput) ? "block" : "none";
    });
}
