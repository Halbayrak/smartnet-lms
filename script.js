// Function to load lessons dynamically
function loadLesson(lesson) {
    let content = document.getElementById("lesson-content");

    // Define lesson content mapping
    const lessons = {
        "sales_offer_intro": `
            <h1>Ders 1: Satış Teklifine Giriş</h1>
            <h3>1. Satış Teklifi Nedir?</h3>
            <p>Satış teklifi, müşterilere belirli bir fiyat ve şartlarla mal veya hizmet sunmak için hazırlanan bir belgedir.</p>
            <h3>2. Satış Teklifi Sayfasına Nasıl Girilir?</h3>
            <p>SmartNet ERP üzerinden erişim için:</p>
            <ul>
                <li>Satış İşlemleri menüsüne tıklayın.</li>
                <li>Satış Teklifi seçeneğini seçin.</li>
                <li>Yeni bir teklif oluşturmak için ilgili butona tıklayın.</li>
            </ul>
            <img src="images/sales_offer_intro.png" alt="Satış Teklifi Giriş">
        `,
        "sales_offer_creation": `
            <h1>Ders 2: Satış Teklifi Oluşturma</h1>
            <h3>Adım 1: Teklif Tarihini Girme</h3>
            <p>Teklifin geçerliliği için önemli bir adımdır.</p>
            <img src="images/sales_offer_creation.png" alt="Teklif Tarihi">
        `,
        "sales_offer_approval": `
            <h1>Ders 3: Satış Teklifi Onaylama</h1>
            <h3>Adım 1: Satış Teklifi Onaylama Sayfasına Giriş</h3>
            <p>Yetkili kişiler tarafından teklifin onaylanması gerekir.</p>
            <img src="images/sales_offer_approval.png" alt="Teklif Onaylama">
        `
    };

    // Update content
    content.innerHTML = lessons[lesson] || "<h1>İçerik bulunamadı</h1>";
}

// Sidebar navigation highlight
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener("click", function () {
        document.querySelectorAll('.sidebar a').forEach(el => el.classList.remove("active"));
        this.classList.add("active");
    });
});

// Search Functionality
document.querySelector(".search-bar").addEventListener("input", function () {
    let query = this.value.toLowerCase();
    document.querySelectorAll(".lesson a").forEach(lesson => {
        if (lesson.textContent.toLowerCase().includes(query)) {
            lesson.style.display = "block";
        } else {
            lesson.style.display = "none";
        }
    });
});
