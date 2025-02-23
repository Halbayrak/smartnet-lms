function loadLesson(lessonId) {
    let content = document.getElementById('lesson-content');
    switch (lessonId) {
        case 'sales_offer_intro':
            content.innerHTML = `<h2>Ders 1: Satış Teklifine Giriş</h2><p>Satış teklifi, müşterilere sunulan fiyat ve şartları içeren bir belgedir.</p><img src='images/sales_offer_intro.png'>`;
            break;
        case 'sales_offer_creation':
            content.innerHTML = `<h2>Ders 2: Satış Teklifi Oluşturma</h2><p>Teklif tarihini girin, teslim tarihi belirleyin ve ödeme seçeneklerini ekleyin.</p><img src='images/sales_offer_creation.png'>`;
            break;
        case 'sales_offer_approval':
            content.innerHTML = `<h2>Ders 3: Satış Teklif Onaylama</h2><p>Teklif onay süreçlerini takip edin ve filtreleme seçeneklerini kullanın.</p><img src='images/sales_offer_approval.png'>`;
            break;
        default:
            content.innerHTML = `<h2>SMARTNET EĞİTİM VİDEOLARI</h2><p>Lütfen bir ders seçin.</p>`;
            break;
    }
}
