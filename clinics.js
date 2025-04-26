
const clinics = [
    {   
        name: "A Klinik (örnek)",
        type: "Diş Hekimliği",
        rating: 8.4,
        region: "Aliağa, Siteler Mahallesi",
        price: "350 - 400 ₺ <i> [Bu fiyat bölgenizdeki kliniklerden %37 daha ucuzdur.] </i>",
        procedureDuration: "30 Dakika",
        afterTreatmentRating: 8.1,
        advantages: ["İlk Muayene Ücretsiz, Hazır Park Yeri"],
        HbH: "1.5",
        description: "Kristal Klinik 2018 yılında hekim Walter Bishop tarafından kurulmuştur. 3 hekim ile diş hekimliği alanında faaliyet göstermektedir.",
        procedure: `Sıranızı aldıktan sonra belirtilen saatte muayene odasında bekleyiniz. <br>
        Randevu aldıktan sonra muayene için herhangi bir onay işlemi yapmanıza gerek yoktur.`,
        impNote: "12 Haziran - 19 Haziran arasında MR çekimi hizmetimiz geçici süreliğine iptal olmuştur.",
        beforeAppointment: "<br> Kanal tedavisi veya implant tedavisi görecekseniz ve zaman sıkıntınız var ise, randevunuzu saat 11'den önce almaya çalışınız.",
        details: {
            //founded: 2012,
            specialties: ["İmplant", "Diş Beyazlatma", "Kanal Tedavi"],
            telephone: "0535 xxx xx xx",
            contact: "info@kristalKlinik.com",
            socials: `<a href="https://example.com" target="_blank" rel="noopener noreferrer"> instagram.com </a>`,
            workHours: "<br> Pazartesi-Cuma, 9:00-18:00 <br> Cumartesi: 12:00-16:00 <br> Pazar: Kapalı",
            adress: "Aliağa, Siteler Mahallesi, Hasan Caddesi (İzmir)",
            usefulNote: ["<br> Kliniğin ön tarafı araç parkı için hep müsaittir. <br> Kliniğin hemen karşısında çocuk parkı bulunmaktadır."],
        },
        testPrices: [
            { test: "Genel Diş Kontrolü", price: "300 TL", exp: `Dişlerinizin hekim tarafından fiziksel muayenesini ve dişlerinizin MR 
            görüntüsü çekilmesini içerir. <br>
            İşlem yaklaşık 5 dakika sürer. <br> <br>
            <i> [Tedavi görmeniz durumunda test ücreti iade edilir.] </i> <br>
            <i> [Bu test bölgenizdeki en düşük fiyata sahip.] </i>` },
            {test: "İmplant Muayenesi", price: "400 TL", exp: `Diş implatları düzenli periyodik bakım gerektirir. <br>
            Yeni implantar için ilk 6 haftanın sonunda bir sefer, ardından her yıl için tek sefer muayene gerektirir.` },
        ],
        treatmentPrices: [
            {treatment: "Kanal Tedavi", price: "12.000 - 18.000 ₺", treatmentExp: `Diş kökünde ağrıya sebep olan iltihaplı sinirlerin yenilenmesi işlemidir. <br>
            Tek seansta, veya ilerlemiş rahatsızlıklarda 2 seans içerisinde işlem tamamlanır.`, lastSame3M:"5"},
            {treatment: "Diş Beyazlatma", price: "4.000 - 20.000 ₺", lastSame3M: "12", treatmentExp: `text <br>
            [Bu işlemin devlet hastanesinde bulunmamaktadır.]`},
        ],
        staff: [
            {name: "Evren Kure", role: "Diş Hekimi", profession: "İmplant Uygulamaları", description: "text1"},
            {name: "Walter Bishop", role: "Diş Hekimi", profession: "Ortodonti Uygulamaları", description: "text2"},
            {name: "Melanie Rochess", role: "Hemşire", profession: "-", description: "text2"},
        ],
        faq: [
            {question: `Enfeksiyon için reçete ettiğiniz Augmentin'i 7 gün kullandım, fakat gelecek randevum 7 günden daha ileri tarihte. Boşta kalan süre
            zarfında enfeksiyonum yeniden gelir mi? `,
            answer: `Augmentin'in etkisi ilaç bittikten sonra da devam eder. İlaç bittikten sonra geçen süre 15-20 günü geçmediği sürece endişe edilecek bir durum yoktur. <b> [Evren Kure] </b>`},
            {question: "soru2",
            answer: "cevap2"},
        ]
    },

    { 
        name: "Bahçedent Ağız ve Diş Sağlığı Polikliniği (Siteler)",
        type: "Diş Hekimliği", 
        rating: "9.8 (192)", 
        region: "Aliağa, Siteler Mahallesi", 
        price: "", 
        afterTreatmentRating: "",
        advantages: "Kolay Park Yeri",
        HbH: "",
        description: "201x yılından beri faaliyet gösteren, 3-6 hekim barındıran bir diş hekimliği.",
        impNote: "",
        details: {
            /* team: ["isim1 -x uzmanı", "isim2 -y operatörü", "isim3 -hemşire"], */
            specialties: "",
            contact: `<br> info@bahcedent.com <br>
            0544 725 63 77 (Merkez Şube)`,
            socials: `<a href="https://www.instagram.com/bahcedentdis" target="_blank" rel="noopener noreferrer"> instagram.com </a>`,
            workHours: "<br> Pazartesi-Cuma: 9:00-19:00 <br> Cumartesi: 9:00-17:00 <br> Pazar: Kapalı",
            adress: "",
        },
        testPrices: [
            {test: "Genel Diş Kontrolü", price: "", exp: `Dişlerin fiziksel muayenesini ve diş MR çekim işlemini kapsar. <br>
            İşlem yaklaşık 5 dakika içinde tamamlanır. <br>
            MR görüntüleriniz sizinle de internet üzerinden paylaşılır.` },
        ],
        treatmentPrices: [
            {treatment: "Diş İmplant", price: "", lastSame3M: "", treatmentExp: `
            Çene kemiğine vida yerleştirme işlemidir, eklenecek diş için kök görevi görürler. Çoğunlukla ömürlük kullanıma sahiptir.
            İşlemden 3 ay sonra, diş etinin implanta tutunması ile protez diş uygulamasına hazır hale gelir. <br>
            İmplant işlemi yalnızca kökün hazırlanmasını kapsar, protez diş eklenmesi işlemini kapsamaz.`},
            {treatment: "Kanal Tedavisi", price: "", lastSame3M: "", treatmentExp: `
            Diş kökünde ağrıya sebep olan iltihaplı sinirlerin yenilenmesi   işlemidir. <br>
            Tek seansta, veya ilerlemiş rahatsızlıklarda 2 seans içerisinde işlem tamamlanır.`, },
            {treatment: "Diş Protezi (Sabit)", price: "", lastSame3M:"", treatmentExp:`
            İmplant protez diş işlemi, eski dişinizin kaplanıp yerine geri takılmasını kapsar. Bu işlem için diş kökünüz sağlam olmalı veya
            işlem yapılacak yerde diş implantına sahip olmalısınız. <br>
            Eski dişiniz çıkarıldıktan sonra kaplanması işlemi yaklaşık 10 gündür. <br>
            Tedavi sürecinde hasta 4-5 kez hekime gitmelidir. <br>
            Kullanılan protezlerin ömrü 6-8 yıldır. Verilen kullanım ömrünün sonunda protez değişimi gereklidir.`},
            {treatment: "Diş Protezi (Hareketli)", price:"", lastSame3M:"", treatmentExp: `
            Takılan hareketli diş protezi kolayca taklıp çıkarılabilmektedir. Fakat protezlerin günlük bakımı gereklidir. <br>
            Hareketli protez işleminde hasta en az 7 seans kliniğe gelmelidir. Yapım süresi yaklaşık 6-7 hafta sürer. <br>
            Hareketli protez işlemi yalnızca dişlerinin büyük kısmını kaybetmiş hastalara uygulanır, aksi durumda sabit protez tercih
            edilmelidir.`},
            {treatment: "Çocuk Diş Hekimliği (Pedodonti)", price:"", lastSame3M:"",treatmentExp:`
            Çocuk için uygun olan muayenelerin süreç boyunca oyun haline getirilmesidir. Çocuğun hekimden ve muaeyeneden rahatsız olmaması amaçlanır. <br>
            Yapılacak işlemler çürüklerin risk grubuna göre değişkenlik gösterir.
            <ul><li>Diş çürümesi önleyici uygulamalar, </li>
            <li> Diş çıkarma takibi ile diş çarpışıklarının önlenmesi, </li>
            <li> Özel bakım durumları, </li></ul> işlemlerini barındırır.`},
            {treatment: "Dental Diş Temizliği ☆ ", price: "", lastSame3M: "", treatmentExp: `
            Bu uygulama tek seans içerisinde; <ul>
            <li> Diş temizliği </li>
            <li> Dişlerin pastalanması </li>
            <li> Florür tedavisi </li>
            <li> Plaklardan arındırma </li> </ul> işlemlerini barındırır.`}
        ],//serviceP: [],
        staff: [
            {name: "Hatice Samur Akın", role: "Diş Hekimi", profession: "İmplant, Protez", description: `2017 yılında aktif olarak mesleğe başladı. <br>
            2021 yılında İzmir-Aliağa'da kendi
            kliniğin açtı. <br>
            2022 yılında Aliağa'da ikinci kliniğini açtı. <br>
            Languages: English, Turkish`},
            {name: "Sıla Bilgin Yener", role: "Diş Hekimi", profession: "Genel Uygulamalar", description: ""},
            {name: "Ceren Ünal", role: "Ortodonti Uzmanı", profession: "Ortodonti", description: ""},
            {name: "Ayşe Yıldız", role: "Diş Hekimi", profession: "Genel Uygulamalar", description: ""},
            {name: "Ali Çiçek", role: "Diş Hekimi", profession: "Genel Uygulamalar, Rehabilitasyon", description: ""},
        ],
        
    },

    { 
        name: "Ata Diş Polikinliği (Aliağa)",
        type: "Diş Hekimliği", 
        rating: "9.6 (62)", 
        region: "Aliağa, Kültür Mahallesi", 
        price: "",
        advantages: "", 
        HbH: "",
        description: "",
        details: {
            specialties: "",
            contact: "0232 616 12 82 (Aliağa)",
            socials: `<a href="https://www.instagram.com/atadispoliklinigi" target="_blank" rel="noopener noreferrer"> instagram.com </a>`,
            workHours: "<br> Pazartesi-Cuma, 10:00-19:00 <br> Cumartesi: 10:00-17:00 <br> Pazar: Kapalı",
        },

        treatmentPrices: [
            {treatment: "Kanal Tedavisi", price: "", lastSame3M:"", treatmentExp:``},
            {treatment: "Diş Protezi", price: "", lastSame3M:"", treatmentExp:``},
            {treatment: "All on Four <br> (12 diş protez)", price: "", lastSame3M:"", treatmentExp:`Tek seansta bütün alt veya üst dişlerinizin implantı yapılır.
            Sabit protezdir. <br>
            Yerleştirilecek 4 adet vida üzerine 12-dişlik implant seti sabitlenir.`},
            {treatment: "Kanal Tedavisi", price: "", lastSame3M:"", treatmentExp:``},
            ],

        staff: [
            {name:"Sinan Dönmez", role: "Diş Hekimi",  profession: "İmplantoloji", description: `Aktif olarak diş hekimliğine 2006'da başlamıştır. <br>
            Languages: English, German`},
            {name:"Ozan Moğulkoç", role: "Diş Hekimi",  profession: "İmplantoloji", description: "Languages: English"},
            {name:" Rıfat Özhak", role: "Diş Hekimi",  profession: "İmplantoloji", description: "Languages: English"},

            ]
    },

    {name: "Dentiste Ağız ve Diş Sağlığı Polikliniği",
        type: "Diş Hekimliği", 
        rating: "10 (84)", 
        region: "Aliağa, Siteler Mahallesi", 
        price: "",
        advantages: "", 
        HbH: "",
        description: "",
        details: {
            specialties: "",
            contact: "",
            socials: ""},
        treatmentPrices: [
            {treatment: "Gece Plağı", price:"", lastSame3M:"", treatmentExp:""}

        ],
        staff: [
            {name: "Elif Dilay Ünal", role: "Diş Hekimi", profession: "Periodontoloji", description:""},
            {name: "İbrahim Işık", role: "Diş Hekimi", profession: "", description:""},
            {name: "Meltem Gediz", role: "Diş Hekimi", profession: "", description:""}
        ]
    },
    {name: "Suat Eroğlu Diş Polikinliği",
        type: "Diş Hekimliği", 
        rating: "9.8 (332)", 
        region: "Aliağa, Kazımdirik Mahallesi", 
        price: "",
        advantages: "", 
        HbH: "",
        description: "",
        details: {
            specialties: "",
            contact: "",
            socials: ""
        }
    },
    { 
        name: "Dentalizm Diş Polikinliği",
        type: "Diş Hekimliği", 
        rating: "10 (40)", 
        region: "Aliağa, Siteler Mahallesi", 
        price: "",
        advantages: "", 
        HbH: "",
        description: "",
        details: {
            specialties: "",
            contact: "",
            socials: ""
        }
    },


];

function openModal(clinicName) {
    const clinic = clinics.find(c => c.name === clinicName);
    if (!clinic) return;

    // Generate the details section if available
    let detailsHTML = "";
    if (clinic.details) {
        detailsHTML = `
            <h3>Detaylar</h3>
            <ul style="font-size: 12px;">
                ${clinic.details.workHours ? `<li><strong>Çalışma Saatleri:</strong> ${clinic.details.workHours}</li>` : ""}
                ${clinic.details.telephone ? `<li><strong>Telefon:</strong> ${clinic.details.telephone}</li>` : ""}
                ${clinic.details.team ? `<li><strong>Kadro:</strong></li>${clinic.details.team.map(member => `<ul><li>${member}</li></ul>`).join("")}</ul></ul>` : ""}
                ${clinic.details.doctors ? `<li><strong>Doktor Sayısı:</strong> ${clinic.details.doctors}</li>` : ""}
                ${clinic.details.specialties ? `<li><strong>Uzmanlıklar:</strong> ${clinic.details.specialties.join(", ")}</li>` : ""}
                ${clinic.details.contact ? `<li><strong>İletişim:</strong> ${clinic.details.contact}</li>` : ""}
                ${clinic.details.socials ? `<li><strong>Sosyal Medya:</strong> ${clinic.details.socials}</li>` : ""}
                ${clinic.details.adress ? `<li><strong>Adres:</strong> ${clinic.details.adress}</li>` : ""}
                ${clinic.details.usefulNote ? `<li><strong>Bilgi:</strong> ${clinic.details.usefulNote}</li>` : ""}
            
            </ul>
        `;
    }

    let modalHTML = `
        <h2>${clinicName} - Klinik Detayları</h2>
        <div class="clinic-image">
            ${clinic.image ? `<img src="${clinic.image}" alt="${clinicName}">` : ""}
        </div>


        ${clinic.impNote ? `<h3 style="font-size: 14px;
        border: 2px solid red; 
        padding: 8px; 
        background: #ffe6e6; 
        border-radius: 5px;
        display: inline-block;"> <span style="color: red;"> Bilgilendirme! </span> ${clinic.impNote}</h3>` : ''}

        <div style="display: flex;">
            <div style="width: 70%">
            <p><strong>Tip:</strong> ${clinic.type || "belirtilmemiş"}</p>
            <p><strong>Puan:</strong> ${clinic.rating || "henüz mevcut değil"}</p>
            <p><strong>Bölge:</strong> ${clinic.region || "belirtilmemiş"}</p>
            <p><strong>Muayene Fiyat:</strong> ${clinic.price || "belirtilmemiş"}</p>
            <p><strong>Muayene Süresi:</strong> ${clinic.procedureDuration || "belirtilmemiş"}</p>
            <p><strong>Randevu Almadan Önce:</strong> ${clinic.beforeAppointment || "belirtilmemiş"}</p>
            <p><strong>Randevu Prosedür:</strong> ${clinic.procedure || "belirtilmemiş"}</p>
            <p><strong>Avantajlar:</strong> ${clinic.advantages || "belirtilmemiş"}</p>
            <p><strong>Açıklama:</strong> ${clinic.description || "Ek bilgi henüz bulunmamaktadır."}</p>
            </div>

        </div>

        ${detailsHTML} <!-- Inject the generated details section here -->

        
        ${clinic.testPrices ? generateTestPricesTable(clinic.testPrices) : ""}
        ${clinic.treatmentPrices ? generateTreatmentPricesTable(clinic.treatmentPrices) : ""}
        ${clinic.serviceP ? generateServicePTable(clinic.serviceP) : ""}
        ${clinic.staff ? generateStaffTable(clinic.staff) : ""}
        ${clinic.faq ? generateFAQ(clinic.faq) : ""}

    `; 

    document.getElementById("modal-content").innerHTML = modalHTML;
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
} 
//<div class="clinic-description"> ${clinic.description || ""} </div>
//<div style="margin-left: 20px; width: 30%;">Right Table</div>
//⭐

function generateTestPricesTable(testPrices) {
    if (!testPrices || testPrices.length === 0) return "";

    let tableHTML = `
        <hr>
        <h3>Test Fiyatları</h3> 
        <p style="font-size: 12px; margin-top: 2px;"> *fiyat güncellenme tarihi xx.xx.25 </p>
        <table border="1">
            <tr>
                <th>Test</th>
                <th style="width: 140px;">Fiyat</th>
                <th>Açıklama</th>
            </tr>
    `;

    testPrices.forEach(test => {
        tableHTML += `
            <tr>
                <td>${test.test || "güncellenecektir"}</td>
                <td>${test.price || "güncellenecektir"}</td>
                <td>${test.exp || "güncellenecektir"}</td>
            </tr>
        `;
    }),

    tableHTML += `</table>`;
    return tableHTML;
}

function generateTreatmentPricesTable(treatmentPrices) {
    if (!treatmentPrices || treatmentPrices.length === 0) return "";

    let tableHTML = `
        <hr>
        <h3>Tedavi Fiyatları</h3>
        <p style="font-size: 12px; margin-top: 2px;"> *fiyat güncellenme tarihi xx.xx.25 </p>
        <table border="1">
            <tr>
                <th>Tedavi</th>
                <th style="width: 140px;">Fiyat</th>
                <th>Açıklama</th>
                <th style="width: 80px;">Tedavi Sıklık <span style="font-size: 10px;"> (Son 3 Ay) </span> </th>

            </tr>
    `;

    treatmentPrices.forEach(treatment => {
        tableHTML += `
            <tr>
                <td>${treatment.treatment}</td>
                <td>${treatment.price || "güncellenecektir"}</td>
                <td>${treatment.treatmentExp || "güncellenecektir"}</td>
                <td>${treatment.lastSame3M || "güncellenecektir"}</td>


            </tr>
        `;
    })
    ;

    tableHTML += `</table>`;
    return tableHTML;
}
function generateServicePTable(serviceP) {
    if (!serviceP || serviceP.length === 0) return "";

    let tableHTML = `
        <hr>
        <h3>Hizmet Fiyatları</h3>
        <p style="font-size: 12px; margin-top: 2px;"> *fiyat güncellenme tarihi xx.xx.25 </p>
        <table border="1">
            <tr>
                <th>Hizmet</th>
                <th style="width: 130px;">Fiyat</th>
                <th>Açıklama</th>
                <th style="width: 80px;">Hizmet Sıklık <span style="font-size: 10px;"> (Son 3 Ay) </span> </th>

            </tr>
    `;

    serviceP.forEach(service => {
        tableHTML += `
            <tr>
                <td>${service.name}</td>
                <td>${service.price || "güncellenecektir"}</td>
                <td>${service.serviceExp || "güncellenecektir"}</td>
                <td>${service.lastSame3M || "güncellenecektir"}</td>
            </tr>
        `;
    })
    ;

    tableHTML += `</table>`;
    return tableHTML;
}
function generateStaffTable(staff) {
    if (!staff || staff.length === 0) return "";

    let tableHTML = `
        <hr>
        <h3>Kadro</h3>
        <table border="1">
            <tr>
                <th>Kişi</th>
                <th style="width: 100px;">Rol</th>
                <th style="width: 190px;">Uzmanlık</th>
                <th>Açıklama</th>

            </tr>
    `;

    staff.forEach(staff => {
        tableHTML += `
            <tr>
                <td>${staff.name}</td>
                <td>${staff.role || "güncellenecektir"}</td>
                <td>${staff.profession || "güncellenecektir"}</td>
                <td>${staff.description || "güncellenecektir"}</td>
            </tr>
        `;
    })
    ;

    tableHTML += `</table>`;
    return tableHTML;
}

function generateFAQ(faq) {
    if (!faq || faq.length === 0) return "";

    let textOutput = `
        <hr>
        <h2>Sıkça Sorulan Sorular</h2>
        <p>Bu sorular klinik tarafından spesifik olarak cevaplanmıştır.
        Verilen cevaplar yalnızca kliniğin kendisine özeldir. </p>
        <ul>
    `;

    faq.forEach(item => {
        textOutput += `<li style="margin-bottom: 10px;"> <strong>${item.question}</strong><br> ${item.answer}</li>`;
    });

    textOutput += `</ul>`; // Close the unordered list properly
    return textOutput;
}


function populateClinicTable() {
    const table = document.getElementById("myTable");
    clinics.forEach(clinic => {
        const row = table.insertRow();
        row.innerHTML = `
            <td><a href="#" onclick="openModal('${clinic.name}')">${clinic.name}</a></td>
            <td>${clinic.type}</td>
            <td>${clinic.rating || "-"}</td>
            <td>${clinic.treatment || "-"}</td>
            <td>${clinic.afterTreatmentRating || "-"}</td>
            <td>${clinic.service || "-"}</td>
            <td>${clinic.region}</td>
            <td>${clinic.price ? clinic.price.split('[')[0] : "belirtilmemiş"}</td>
            
        `;
    });
}
/* <td>${clinic.price != null && clinic.price !== "" ? clinic.price : "Sorunuz"}</td> */

function searchTable() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const rows = document.querySelectorAll("#myTable tr:not(:first-child)");
    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(input) ? "" : "none";
    });
}



function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


        // Search Function
        function searchTable() {
            const input = document.getElementById("searchBar").value.toLowerCase();
            const rows = document.querySelectorAll("#myTable tr:not(:first-child)");
            rows.forEach(row => {
                row.style.display = row.innerText.toLowerCase().includes(input) ? "" : "none";
            });
        }

        // Sorting Function
        document.querySelectorAll('th').forEach((th, index) => {
            if (index === 7) return;
            th.addEventListener('click', function () {
                const table = document.getElementById("myTable");
                const rows = Array.from(table.rows).slice(1);
                const isAscending = th.classList.contains("sorted-asc");

                rows.sort((a, b) => {
                    const valA = a.cells[index].innerText;
                    const valB = b.cells[index].innerText;
                    const isNumeric = !isNaN(valA) && !isNaN(valB);
                    return isNumeric
                        ? (isAscending ? valB - valA : valA - valB)
                        : (isAscending ? valB.localeCompare(valA) : valA.localeCompare(valB));
                });

                th.classList.toggle("sorted-asc", !isAscending);
                th.classList.toggle("sorted-desc", isAscending);

                rows.forEach(row => table.appendChild(row));
            });
        });


document.addEventListener("DOMContentLoaded", populateClinicTable);
