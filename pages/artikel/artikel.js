// ============================================
// ARTIKEL FUNCTIONALITY
// ============================================

// Articles Database
const articles = [
    {
        id: 1,
        title: "Kenali Tanda-tanda Depresi dan Cara Mengatasinya",
        excerpt: "Ngerasa sedih terus-terusan? Bisa jadi itu bukan cuma bad mood biasa. Yuk, kenali tanda-tanda depresi dan cara mengatasinya!",
        category: "mental-health",
        author: "Tim BK SMANSA",
        date: "2025-01-15",
        readTime: "8 menit",
        emoji: "😔",
        content: `
            <h2>Apa Sih Depresi Itu?</h2>
            <p>Depresi bukan cuma "lagi sedih" atau "bad mood" biasa, guys. Depresi itu kondisi di mana kamu ngerasa sedih, hampa, atau nggak semangat dalam waktu yang lama - biasanya lebih dari 2 minggu. Ini bisa bikin kamu males ngapa-ngapain, bahkan hal yang biasanya kamu suka.</p>
            
            <h3>Tanda-tanda Depresi</h3>
            <ul>
                <li><strong>Sedih terus-terusan</strong> - Lebih dari dua minggu, bukan cuma sesekali</li>
                <li><strong>Males ngapa-ngapain</strong> - Hobi yang biasa seru jadi hambar</li>
                <li><strong>Tidur berantakan</strong> - Susah tidur atau malah kebanyakan tidur</li>
                <li><strong>Nafsu makan berubah</strong> - Makan terlalu banyak atau malah nggak nafsu</li>
                <li><strong>Capek terus</strong> - Padahal nggak ngapa-ngapain</li>
                <li><strong>Susah fokus belajar</strong> - Konsentrasi buyar, sulit ambil keputusan</li>
                <li><strong>Ngerasa worthless</strong> - Banyak self-blame tanpa alasan jelas</li>
                <li><strong>Pikiran negatif tentang hidup</strong> - Termasuk pikiran untuk menyakiti diri sendiri</li>
            </ul>
            
            <h3>Cara Mengatasi Depresi</h3>
            <p>Kalau kamu ngerasa beberapa tanda di atas, coba langkah-langkah ini:</p>
            
            <ol>
                <li><strong>Cerita ke orang yang dipercaya:</strong> Bisa ke guru BK, orang tua, atau sahabat. Nggak perlu dipendam sendiri.</li>
                <li><strong>Olahraga rutin:</strong> Gerak-gerakin badan bisa bantu ningkatin mood. Jalan kaki keliling sekolah juga oke!</li>
                <li><strong>Tidur yang cukup:</strong> Usahakan 7-9 jam setiap malam.</li>
                <li><strong>Jaga pertemanan positif:</strong> Hindari lingkungan toxic dan stay sama teman-teman yang supportive.</li>
                <li><strong>Kurangi sosmed:</strong> Kadang scrolling sosmed bikin overthinking. Take a break!</li>
                <li><strong>Coba teknik relaksasi:</strong> Ada di halaman Relaksasi website ini lho!</li>
            </ol>
            
            <h3>Kapan Harus Minta Bantuan?</h3>
            <p>Segera cerita ke guru BK atau orang tua kalau:</p>
            <ul>
                <li>Gejala udah lebih dari dua minggu</li>
                <li>Bikin susah belajar dan aktivitas sehari-hari</li>
                <li>Kamu punya pikiran buat menyakiti diri sendiri</li>
                <li>Ngerasa nggak kuat handle sendiri</li>
            </ul>
            
            <p><strong>Ingat:</strong> Minta tolong itu BUKAN kelemahan, tapi tanda keberanian. Banyak yang peduli sama kamu, dan ada jalan keluar dari kondisi ini. ❤️</p>
        `
    },
    {
        id: 2,
        title: "Cara Atasi Kecemasan Saat Ujian dan Presentasi",
        excerpt: "Deg-degan sebelum ujian? Keringat dingin pas mau presentasi? Tenang, kamu nggak sendirian. Yuk belajar cara atasinya!",
        category: "stress",
        author: "Tim BK SMANSA",
        date: "2025-01-12",
        readTime: "6 menit",
        emoji: "😰",
        content: `
            <h2>Kecemasan di Sekolah Itu Normal!</h2>
            <p>Hampir semua siswa pernah ngerasain deg-degan atau cemas saat mau ujian, presentasi, atau ketemu guru. Itu wajar kok! Tapi kalau cemasnya sampai bikin nggak bisa mikir, susah tidur, atau malah jadi males sekolah, mungkin perlu dikelola lebih baik.</p>
            
            <h3>Penyebab Cemas di Sekolah</h3>
            <ul>
                <li>Tekanan nilai dan ranking</li>
                <li>Deadline tugas yang numpuk</li>
                <li>Takut salah atau gagal</li>
                <li>Perbandingan sama teman lain</li>
                <li>Ekspektasi dari orang tua</li>
                <li>Perfeksionisme yang berlebihan</li>
            </ul>
            
            <h3>Teknik Mengelola Kecemasan</h3>
            
            <h4>1. Teknik Pernapasan 4-7-8</h4>
            <p>Tarik napas 4 detik, tahan 7 detik, hembuskan 8 detik. Ulangi 3-4 kali. Ini bisa langsung bikin lebih tenang!</p>
            
            <h4>2. Persiapan yang Matang</h4>
            <p>Kecemasan sering muncul karena ngerasa belum siap. Belajar jauh hari, bikin jadwal, dan latihan presentasi di depan cermin bisa bantu banget.</p>
            
            <h4>3. Positive Self-Talk</h4>
            <p>Ganti "Aku pasti gagal" jadi "Aku sudah belajar dan akan melakukan yang terbaik". Otak kita percaya sama apa yang kita ucapkan lho!</p>
            
            <h4>4. Istirahat yang Cukup</h4>
            <p>Jangan begadang belajar sampai larut! Otak yang capek malah bikin blank saat ujian.</p>
            
            <h4>5. Break Sejenak</h4>
            <p>Kalau lagi belajar terus ngerasa overwhelmed, istirahat 5-10 menit. Jalan-jalan kecil atau dengerin musik.</p>
            
            <h3>Kapan Harus Cerita ke Guru BK?</h3>
            <ul>
                <li>Kecemasan bikin nggak bisa fokus belajar sama sekali</li>
                <li>Sampai nggak berani masuk sekolah</li>
                <li>Sering sakit kepala atau sakit perut tanpa sebab medis</li>
                <li>Pikiran negatif terus-terusan</li>
                <li>Jadi males makan atau malah makan berlebihan</li>
            </ul>
            
            <p>Guru BK SMANSA siap membantu kamu menemukan cara yang cocok untuk mengelola kecemasan. Privasi kamu dijamin! 💪</p>
        `
    },
    {
        id: 3,
        title: "Tips Jaga Pertemanan yang Sehat di Sekolah",
        excerpt: "Teman itu penting banget buat kehidupan sekolah. Tapi gimana sih caranya punya pertemanan yang sehat dan nggak toxic?",
        category: "relationship",
        author: "Tim BK SMANSA",
        date: "2025-01-10",
        readTime: "7 menit",
        emoji: "💕",
        content: `
            <h2>Pentingnya Pertemanan yang Sehat</h2>
            <p>Punya teman yang supportive bisa bikin hidup sekolah jadi lebih seru dan menyenangkan. Tapi, pertemanan yang toxic malah bisa bikin stress dan down. Yuk, pelajari ciri-ciri pertemanan yang sehat!</p>
            
            <h3>Ciri-ciri Pertemanan yang Sehat</h3>
            <ul>
                <li><strong>Saling mendukung:</strong> Senang kalau teman sukses, bukan iri</li>
                <li><strong>Bisa jadi diri sendiri:</strong> Nggak perlu pura-pura jadi orang lain</li>
                <li><strong>Ada give and take:</strong> Nggak cuma satu pihak yang selalu ngasih</li>
                <li><strong>Respect boundaries:</strong> Menghargai kalau kamu butuh waktu sendiri</li>
                <li><strong>Jujur tapi nggak menyakiti:</strong> Bisa kasih kritik dengan cara baik</li>
                <li><strong>Ada di saat susah:</strong> Nggak cuma pas senang-senang aja</li>
            </ul>
            
            <h3>Tips Jaga Pertemanan</h3>
            
            <h4>1. Jadilah Pendengar yang Baik</h4>
            <p>Kadang teman cuma butuh didengar, bukan dinasihati. Tahan godaan buat langsung kasih solusi, dengerin dulu dengan tulus.</p>
            
            <h4>2. Tunjukkan Apresiasi</h4>
            <p>Bilang "makasih" untuk hal-hal kecil. Apresiasi yang tulus bikin pertemanan makin erat.</p>
            
            <h4>3. Quality Time</h4>
            <p>Sisihkan waktu buat hangout tanpa gadget. Ngobrol langsung itu beda rasanya sama chat-an!</p>
            
            <h4>4. Kelola Konflik dengan Baik</h4>
            <p>Konflik itu normal. Yang penting, selesaikan dengan kepala dingin. Jangan bawa-bawa masalah ke orang lain atau ke sosmed.</p>
            
            <h4>5. Hormati Perbedaan</h4>
            <p>Nggak harus selalu setuju atau sama. Perbedaan justru bisa bikin pertemanan lebih kaya.</p>
            
            <h3>Tanda-tanda Pertemanan Toxic</h3>
            <p>Hati-hati kalau temanmu sering:</p>
            <ul>
                <li>Mengontrol atau possessive berlebihan</li>
                <li>Sering merendahkan atau membuatmu merasa buruk</li>
                <li>Menyebarkan rahasiamu ke orang lain</li>
                <li>Hanya menghubungi saat butuh bantuan</li>
                <li>Membuat kamu harus milih: aku atau mereka</li>
                <li>Ikut-ikutan bully atau menyakiti orang lain</li>
            </ul>
            
            <p>Kalau kamu merasa pertemananmu nggak sehat, jangan ragu cerita ke guru BK. Kami bisa bantu kamu menemukan solusi. 🤗</p>
        `
    },
    {
        id: 4,
        title: "Self-Care untuk Siswa: Merawat Diri Sendiri",
        excerpt: "Tugas numpuk, kegiatan padat, tapi jangan lupa jaga diri sendiri! Yuk pelajari self-care versi anak sekolah.",
        category: "self-development",
        author: "Tim BK SMANSA",
        date: "2025-01-08",
        readTime: "5 menit",
        emoji: "🌸",
        content: `
            <h2>Apa Sih Self-Care Itu?</h2>
            <p>Self-care itu bukan cuma spa atau liburan mewah. Self-care adalah kegiatan sehari-hari untuk menjaga kesehatan fisik dan mental kamu. Ini BUKAN egois, tapi kebutuhan biar kamu bisa tetap produktif dan happy!</p>
            
            <h3>Jenis-jenis Self-Care untuk Siswa</h3>
            
            <h4>1. Self-Care Fisik 🏃</h4>
            <ul>
                <li>Tidur cukup 7-9 jam (iya, jangan begadang main game!)</li>
                <li>Olahraga ringan - jalan kaki, senam, atau ikut ekskul olahraga</li>
                <li>Makan teratur dan sehat (jangan skip sarapan!)</li>
                <li>Minum air putih yang cukup</li>
            </ul>
            
            <h4>2. Self-Care Emosional 💭</h4>
            <ul>
                <li>Journaling - tulis perasaanmu di diary atau notes HP</li>
                <li>Cerita ke teman atau guru BK kalau lagi berat</li>
                <li>Izinkan diri untuk ngerasa sedih atau kecewa</li>
                <li>Jangan terlalu keras sama diri sendiri</li>
            </ul>
            
            <h4>3. Self-Care Mental 🧠</h4>
            <ul>
                <li>Baca buku yang kamu suka (bukan buku pelajaran!)</li>
                <li>Belajar skill baru yang menarik</li>
                <li>Digital detox - istirahat dari sosmed sesekali</li>
                <li>Hindari baca berita negatif berlebihan</li>
            </ul>
            
            <h4>4. Self-Care Sosial 👫</h4>
            <ul>
                <li>Hangout sama teman-teman yang supportive</li>
                <li>Quality time sama keluarga</li>
                <li>Join komunitas atau ekskul yang kamu suka</li>
                <li>Jauhkan diri dari lingkungan toxic</li>
            </ul>
            
            <h3>Tips Mulai Self-Care Routine</h3>
            
            <p><strong>Mulai dari yang kecil:</strong> Jangan langsung mau berubah 180 derajat. Mulai dengan satu kebiasaan dulu.</p>
            
            <p><strong>Jadikan prioritas:</strong> Masukkan ke jadwal seperti tugas lainnya. "Me time" itu penting!</p>
            
            <p><strong>Cari yang cocok buat kamu:</strong> Self-care orang lain mungkin beda sama yang kamu butuhkan. Explore dan temukan yang pas!</p>
            
            <p><strong>Konsisten:</strong> Lebih baik 10 menit setiap hari daripada 2 jam sekali seminggu.</p>
            
            <h3>Self-Care Bukan Egois!</h3>
            <p>Kamu nggak bisa jadi teman yang baik, siswa yang rajin, atau anak yang berbakti kalau kamu sendiri kelelahan dan burnout. Merawat diri sendiri justru memungkinkan kamu untuk lebih baik dalam segala hal! 💪</p>
        `
    },
    {
        id: 5,
        title: "Mengenal dan Menghadapi Bullying di Sekolah",
        excerpt: "Bullying bisa terjadi di mana saja, termasuk di sekolah. Yuk kenali tandanya dan cara menghadapinya!",
        category: "mental-health",
        author: "Tim BK SMANSA",
        date: "2025-01-05",
        readTime: "9 menit",
        emoji: "🛡️",
        content: `
            <h2>Apa Itu Bullying?</h2>
            <p>Bullying adalah perilaku agresif yang dilakukan secara berulang oleh seseorang atau kelompok yang merasa lebih kuat terhadap orang yang lebih lemah. Ini BUKAN candaan biasa atau sekadar bercanda!</p>
            
            <h3>Jenis-jenis Bullying</h3>
            
            <h4>1. Bullying Fisik</h4>
            <p>Memukul, mendorong, menendang, merusak barang milik korban.</p>
            
            <h4>2. Bullying Verbal</h4>
            <p>Mengejek, menghina, memberikan julukan buruk, mengancam.</p>
            
            <h4>3. Bullying Sosial</h4>
            <p>Mengucilkan, menyebarkan gosip, mempermalukan di depan orang lain.</p>
            
            <h4>4. Cyberbullying</h4>
            <p>Mengintimidasi lewat sosial media, menyebarkan foto/video tanpa izin, membuat akun palsu untuk menghina.</p>
            
            <h3>Dampak Bullying</h3>
            <ul>
                <li>Kehilangan rasa percaya diri</li>
                <li>Takut ke sekolah</li>
                <li>Prestasi belajar menurun</li>
                <li>Gangguan tidur dan makan</li>
                <li>Depresi dan kecemasan</li>
                <li>Dalam kasus parah, pikiran untuk menyakiti diri sendiri</li>
            </ul>
            
            <h3>Kalau Kamu Korban Bullying</h3>
            
            <h4>1. Ingat, Ini BUKAN Salahmu!</h4>
            <p>Pelaku bullying yang salah, bukan kamu. Jangan menyalahkan diri sendiri.</p>
            
            <h4>2. Jangan Diam!</h4>
            <p>Cerita ke orang yang kamu percaya - guru BK, wali kelas, orang tua, atau kakak. Lapor bukan berarti lemah!</p>
            
            <h4>3. Simpan Bukti</h4>
            <p>Untuk cyberbullying, screenshot chat atau postingan. Ini bisa jadi bukti penting.</p>
            
            <h4>4. Hindari Balas Dendam</h4>
            <p>Membalas dengan kekerasan hanya akan memperburuk situasi dan malah kamu yang bisa kena masalah.</p>
            
            <h4>5. Stay dengan Teman yang Supportive</h4>
            <p>Jangan sendirian. Pelaku biasanya target orang yang terlihat sendiri.</p>
            
            <h3>Kalau Kamu Melihat Bullying</h3>
            <ul>
                <li>Jangan ikut-ikutan atau malah menertawakan</li>
                <li>Support korban - ajak bicara atau temani</li>
                <li>Lapor ke guru atau orang dewasa yang dipercaya</li>
                <li>Jadi teman yang baik untuk korban</li>
            </ul>
            
            <h3>Guru BK Siap Membantu!</h3>
            <p>SMANSA punya sistem pelaporan yang aman dan privasi kamu dijamin. Guru BK akan membantu menangani masalah ini dengan bijak. Jangan takut melapor! 💙</p>
        `
    },
    {
        id: 6,
        title: "Mindfulness: Cara Fokus dan Tenang di Tengah Kesibukan",
        excerpt: "Pikiran kemana-mana? Susah fokus belajar? Coba teknik mindfulness yang bisa dipraktikkan di mana saja!",
        category: "self-development",
        author: "Tim BK SMANSA",
        date: "2025-01-03",
        readTime: "6 menit",
        emoji: "🧘",
        content: `
            <h2>Apa Sih Mindfulness Itu?</h2>
            <p>Mindfulness adalah praktik untuk fokus pada saat ini - apa yang kamu rasakan, pikirkan, dan alami sekarang. Bukan mikirin masa lalu yang bikin nyesel, atau masa depan yang bikin cemas. Just be present!</p>
            
            <h3>Manfaat Mindfulness untuk Siswa</h3>
            <ul>
                <li><strong>Fokus lebih baik:</strong> Belajar jadi lebih efektif</li>
                <li><strong>Kurangi stres:</strong> Lebih tenang menghadapi ujian</li>
                <li><strong>Kontrol emosi:</strong> Nggak gampang marah atau sedih berlebihan</li>
                <li><strong>Tidur lebih nyenyak:</strong> Pikiran nggak racing saat mau tidur</li>
                <li><strong>Percaya diri:</strong> Lebih aware sama kelebihan diri sendiri</li>
            </ul>
            
            <h3>Teknik Mindfulness yang Gampang</h3>
            
            <h4>1. Mindful Breathing (5 menit)</h4>
            <p>Duduk nyaman, pejamkan mata. Fokus pada napas - rasakan udara masuk dan keluar. Kalau pikiran ngembara (pasti bakal!), balikkan fokus ke napas. Nggak usah judge diri sendiri.</p>
            
            <h4>2. Body Scan (Sebelum Tidur)</h4>
            <p>Berbaring, mulai dari ujung kaki, perhatikan sensasi di setiap bagian tubuh sampai ke kepala. Relakskan bagian yang terasa tegang.</p>
            
            <h4>3. Mindful Eating (Saat Makan Siang)</h4>
            <p>Taruh HP! Makan dengan aware - perhatikan rasa, tekstur, dan aroma makanan. Kunyah pelan-pelan. Kamu bakal lebih menikmati dan nggak overeating.</p>
            
            <h4>4. 5-4-3-2-1 Grounding</h4>
            <p>Pas lagi cemas, coba ini: Sebutkan 5 hal yang kamu lihat, 4 yang kamu dengar, 3 yang kamu sentuh, 2 yang kamu cium, 1 yang kamu rasakan. Langsung lebih grounded!</p>
            
            <h3>Kapan Bisa Praktik?</h3>
            
            <p><strong>Pagi:</strong> 3-5 menit mindful breathing sebelum berangkat sekolah.</p>
            
            <p><strong>Di Sekolah:</strong> Ambil 3 napas dalam sebelum mulai ujian atau presentasi.</p>
            
            <p><strong>Istirahat:</strong> Makan siang dengan mindful, tanpa HP.</p>
            
            <p><strong>Malam:</strong> Body scan sebelum tidur biar tidur lebih nyenyak.</p>
            
            <h3>Tips untuk Pemula</h3>
            <ul>
                <li><strong>Mulai dari 3 menit:</strong> Nggak perlu langsung lama-lama</li>
                <li><strong>Konsisten:</strong> Lebih baik 3 menit setiap hari daripada 30 menit sekali seminggu</li>
                <li><strong>Pikiran ngembara itu normal:</strong> Itu bukan gagal!</li>
                <li><strong>Pakai app:</strong> Coba app meditasi seperti Headspace atau Calm</li>
                <li><strong>Cek halaman Relaksasi:</strong> Ada guided meditation di website ini!</li>
            </ul>
            
            <p>Mulai journey mindfulness kamu hari ini. Setiap momen adalah kesempatan untuk kembali ke saat ini! 🧘‍♀️</p>
        `
    }
];

let currentCategory = 'all';

// Initialize Articles
function initArticles() {
    renderArticles();
}

// Render Articles
function renderArticles() {
    const grid = document.getElementById('artikelGrid');
    const filtered = filterArticles();

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <h3 style="color: var(--text-primary); margin-bottom: 12px;">Artikel Tidak Ditemukan</h3>
                <p style="color: var(--text-muted);">Coba kata kunci atau kategori lain ya!</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map((article, index) => `
        <div class="article-card" onclick="openArticle(${article.id})" style="animation-delay: ${index * 0.05}s">
            <div class="article-image">${article.emoji}</div>
            <div class="article-content">
                <div class="article-meta">
                    <span class="article-category">${getCategoryName(article.category)}</span>
                    <span class="article-date">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        ${formatDate(article.date)}
                    </span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-footer">
                    <div class="article-author">
                        <div class="author-avatar">${article.author.charAt(0)}</div>
                        <span class="author-name">${article.author}</span>
                    </div>
                    <span class="read-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ${article.readTime}
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter Articles
function filterArticles() {
    const searchTerm = document.getElementById('articleSearch')?.value.toLowerCase() || '';

    return articles.filter(article => {
        const matchesCategory = currentCategory === 'all' || article.category === currentCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchTerm) ||
                            article.excerpt.toLowerCase().includes(searchTerm) ||
                            article.author.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });
}

// Search Articles
function searchArticles() {
    renderArticles();
}

// Filter by Category
function filterByCategory(category) {
    currentCategory = category;

    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    renderArticles();
}

// Get Category Name
function getCategoryName(category) {
    const names = {
        'mental-health': 'Kesehatan Mental',
        'relationship': 'Pertemanan',
        'stress': 'Stres & Kecemasan',
        'self-development': 'Self-Development'
    };
    return names[category] || category;
}

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });
}

// Open Article
function openArticle(id) {
    const article = articles.find(a => a.id === id);
    if (!article) return;

    const modal = document.getElementById('articleModal');
    const content = document.getElementById('articleContent');

    content.innerHTML = `
        <div class="modal-header-image">${article.emoji}</div>
        <div class="article-full-meta">
            <span class="article-category">${getCategoryName(article.category)}</span>
            <span class="article-date">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                ${formatDate(article.date)}
            </span>
            <span class="read-time">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                </svg>
                ${article.readTime}
            </span>
        </div>
        <h1 class="article-full-title">${article.title}</h1>
        <div class="article-author" style="margin-bottom: 32px;">
            <div class="author-avatar">${article.author.charAt(0)}</div>
            <span class="author-name">${article.author}</span>
        </div>
        <div class="article-full-content">${article.content}</div>
        <div class="article-cta">
            <h3>Butuh Bantuan Lebih Lanjut?</h3>
            <p>Yuk, cerita ke guru BK! Kami siap mendengarkan dan membantu dengan privasi yang dijamin.</p>
            <button class="btn-primary btn-large" onclick="window.open('https://wa.me/6281234567890?text=Halo Pak/Bu, saya siswa SMANSA yang ingin curhat', '_blank')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat Guru BK
            </button>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Track reading
    trackArticleRead(id);
}

// Close Article
function closeArticle() {
    const modal = document.getElementById('articleModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Track Article Read
function trackArticleRead(id) {
    let readArticles = JSON.parse(localStorage.getItem('readArticles') || '[]');
    if (!readArticles.includes(id)) {
        readArticles.push(id);
        localStorage.setItem('readArticles', JSON.stringify(readArticles));
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('artikelGrid')) {
        initArticles();
    }
});

// Close modal when clicking overlay
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeArticle();
    }
});
