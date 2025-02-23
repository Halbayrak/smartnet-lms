function loadLesson(lessonId) {
    const lessonContent = {
        "sales_offer_intro": {
            "title": "Satış Teklifine Giriş",
            "video": "https://www.youtube.com/embed/sample-video-1",
            "description": "Satış teklifi, müşterilere belirli bir fiyat ve şartlarla mal veya hizmet sunmak için hazırlanan bir belgedir."
        },
        "sales_offer_creation": {
            "title": "Satış Teklifi Oluşturma",
            "video": "https://www.youtube.com/embed/sample-video-2",
            "description": "Satış Teklifi Oluşturma süreci hakkında detaylı bilgi."
        },
        "sales_offer_approval": {
            "title": "Satış Teklifi Onaylama",
            "video": "https://www.youtube.com/embed/sample-video-3",
            "description": "Satış Tekliflerinin onay süreci hakkında bilgi."
        },
        "purchase_offer_intro": {
            "title": "Alış Teklifine Giriş",
            "video": "https://www.youtube.com/embed/sample-video-4",
            "description": "Alış Teklifleri ile ilgili temel bilgiler."
        },
        "purchase_offer_creation": {
            "title": "Alış Teklifi Oluşturma",
            "video": "https://www.youtube.com/embed/sample-video-5",
            "description": "Alış Teklifi oluşturma süreci detaylı olarak anlatılmaktadır."
        },
        "purchase_offer_approval": {
            "title": "Alış Teklifi Onaylama",
            "video": "https://www.youtube.com/embed/sample-video-6",
            "description": "Alış Tekliflerinin onaylanma süreci."
        }
    };

    if (lessonContent[lessonId]) {
        document.getElementById("lesson-content").innerHTML = `
            <h3>${lessonContent[lessonId].title}</h3>
            <iframe width="100%" height="315" src="${lessonContent[lessonId].video}" allowfullscreen></iframe>
            <p>${lessonContent[lessonId].description}</p>
        `;
    }
}
