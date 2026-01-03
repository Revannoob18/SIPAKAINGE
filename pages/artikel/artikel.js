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
    },
    {
        id: 7,
        title: "Dampak Media Sosial pada Kesehatan Mental Remaja",
        excerpt: "Riset dari Universitas Pennsylvania membuktikan bahwa penggunaan sosmed berlebihan bisa meningkatkan depresi. Yuk, pahami lebih dalam!",
        category: "mental-health",
        author: "Dr. Jean Twenge (Psikolog, San Diego State University)",
        date: "2025-12-28",
        readTime: "10 menit",
        emoji: "📱",
        content: `
            <h2>Apa Kata Penelitian?</h2>
            <p>Dr. Jean Twenge, profesor psikologi dari San Diego State University dan penulis buku "iGen", telah meneliti dampak smartphone dan media sosial pada remaja sejak 2012. Temuannya mengejutkan: tingkat depresi dan kecemasan remaja meningkat drastis bersamaan dengan meluasnya penggunaan smartphone.</p>
            
            <p><strong>Sumber:</strong> Twenge, J. M. (2017). "iGen: Why Today's Super-Connected Kids Are Growing Up Less Rebellious, More Tolerant, Less Happy." Atria Books.</p>
            
            <h3>Fakta dari Penelitian</h3>
            <ul>
                <li><strong>Studi Universitas Pennsylvania (2018):</strong> Penelitian oleh Dr. Melissa Hunt menunjukkan bahwa membatasi penggunaan sosmed menjadi 30 menit/hari selama 3 minggu dapat mengurangi kesepian dan depresi secara signifikan.</li>
                <li><strong>Data WHO (2021):</strong> 1 dari 7 remaja usia 10-19 tahun mengalami gangguan mental, dan penggunaan internet berlebihan menjadi salah satu faktor risiko.</li>
                <li><strong>Riset Royal Society for Public Health UK:</strong> Instagram dinilai sebagai platform paling berbahaya untuk kesehatan mental remaja, terutama terkait body image dan FOMO (Fear of Missing Out).</li>
            </ul>
            
            <h3>Mengapa Sosmed Bisa Berbahaya?</h3>
            
            <h4>1. Perbandingan Sosial</h4>
            <p>Menurut teori perbandingan sosial (Leon Festinger, 1954), manusia cenderung membandingkan diri dengan orang lain. Di sosmed, kita hanya lihat "highlight reel" orang lain, bukan realitanya.</p>
            
            <h4>2. Dopamine Loop</h4>
            <p>Dr. Anna Lembke dari Stanford University menjelaskan dalam bukunya "Dopamine Nation" bahwa likes dan notifikasi memicu dopamin - hormon "reward" di otak. Ini bisa bikin ketagihan seperti judi.</p>
            
            <h4>3. Gangguan Tidur</h4>
            <p>Cahaya biru dari layar mengganggu produksi melatonin (hormon tidur). Penelitian di Journal of Youth and Adolescence menunjukkan remaja yang gunakan gadget sebelum tidur punya kualitas tidur lebih buruk.</p>
            
            <h4>4. Cyberbullying</h4>
            <p>Data Kemenkominfo RI (2023) menunjukkan 49% remaja Indonesia pernah mengalami cyberbullying. Dampaknya bisa lebih parah dari bullying offline karena bisa terjadi 24/7.</p>
            
            <h3>Tips Sehat Gunakan Sosmed</h3>
            <ol>
                <li><strong>Batasi waktu:</strong> Gunakan fitur Screen Time (iOS) atau Digital Wellbeing (Android) untuk set limit harian.</li>
                <li><strong>Unfollow akun toxic:</strong> Kurasi feed-mu. Ikuti akun yang menginspirasi, bukan yang bikin insecure.</li>
                <li><strong>No phone before bed:</strong> Taruh HP minimal 1 jam sebelum tidur.</li>
                <li><strong>Social media detox:</strong> Coba 1 hari tanpa sosmed per minggu.</li>
                <li><strong>Real connection:</strong> Prioritaskan ketemu langsung dengan teman.</li>
            </ol>
            
            <p class="source-note"><strong>📚 Referensi:</strong><br>
            - Hunt, M.G., et al. (2018). "No More FOMO: Limiting Social Media Decreases Loneliness and Depression." Journal of Social and Clinical Psychology.<br>
            - WHO (2021). "Adolescent Mental Health Fact Sheet."<br>
            - Twenge, J.M. & Campbell, W.K. (2018). "Associations between screen time and lower psychological well-being among children and adolescents." Preventive Medicine Reports.</p>
        `
    },
    {
        id: 8,
        title: "Growth Mindset: Cara Berpikir yang Bikin Sukses",
        excerpt: "Penelitian Dr. Carol Dweck dari Stanford membuktikan bahwa cara kita berpikir tentang kemampuan menentukan kesuksesan. Pelajari caranya!",
        category: "self-development",
        author: "Dr. Carol Dweck (Psikolog, Stanford University)",
        date: "2025-12-25",
        readTime: "8 menit",
        emoji: "🧠",
        content: `
            <h2>Apa Itu Growth Mindset?</h2>
            <p>Dr. Carol Dweck, profesor psikologi Stanford University, telah meneliti selama 30+ tahun tentang mengapa beberapa orang sukses sementara yang lain tidak. Jawabannya bukan IQ atau bakat, tapi <strong>mindset</strong>.</p>
            
            <p><strong>Sumber:</strong> Dweck, C.S. (2006). "Mindset: The New Psychology of Success." Random House.</p>
            
            <h3>Dua Jenis Mindset</h3>
            
            <h4>1. Fixed Mindset (Pola Pikir Tetap)</h4>
            <p>Percaya bahwa kecerdasan dan bakat itu bawaan lahir dan tidak bisa diubah.</p>
            <ul>
                <li>"Aku memang nggak bakat matematika"</li>
                <li>"Dia pintar karena memang dari sananya"</li>
                <li>Takut gagal karena gagal = bukti "aku bodoh"</li>
                <li>Menghindari tantangan</li>
            </ul>
            
            <h4>2. Growth Mindset (Pola Pikir Berkembang)</h4>
            <p>Percaya bahwa kemampuan bisa dikembangkan melalui usaha dan pembelajaran.</p>
            <ul>
                <li>"Aku belum bisa matematika, tapi bisa belajar"</li>
                <li>"Dia pintar karena rajin latihan"</li>
                <li>Gagal = kesempatan belajar</li>
                <li>Menyukai tantangan</li>
            </ul>
            
            <h3>Bukti dari Penelitian</h3>
            <p>Dalam eksperimen terkenal Dweck, siswa dibagi dua kelompok setelah berhasil mengerjakan soal:</p>
            <ul>
                <li><strong>Kelompok A</strong> dipuji: "Kamu pintar!"</li>
                <li><strong>Kelompok B</strong> dipuji: "Kamu sudah bekerja keras!"</li>
            </ul>
            <p>Hasilnya? Ketika diberi soal lebih sulit, Kelompok B (dipuji usahanya) 90% memilih tantangan baru. Kelompok A (dipuji kepintarannya) mayoritas memilih soal mudah karena takut terlihat "tidak pintar".</p>
            
            <h3>Bagaimana Mengubah Mindset?</h3>
            
            <h4>1. Tambahkan Kata "BELUM"</h4>
            <p>Ganti "Aku nggak bisa" menjadi "Aku belum bisa". Kata kecil ini mengubah segalanya!</p>
            
            <h4>2. Rayakan Proses, Bukan Hasil</h4>
            <p>Fokus pada usaha dan strategi yang kamu gunakan, bukan hanya nilai akhir.</p>
            
            <h4>3. Lihat Kegagalan Sebagai Data</h4>
            <p>Setiap kegagalan memberi informasi tentang apa yang perlu diperbaiki. Thomas Edison berkata, "Aku tidak gagal 10.000 kali. Aku berhasil menemukan 10.000 cara yang tidak bekerja."</p>
            
            <h4>4. Belajar dari Kritik</h4>
            <p>Kritik bukan serangan personal, tapi kesempatan untuk berkembang.</p>
            
            <h4>5. Terinspirasi dari Kesuksesan Orang Lain</h4>
            <p>Daripada iri, pelajari apa yang mereka lakukan untuk sukses.</p>
            
            <h3>Neuroplastisitas: Bukti Ilmiah</h3>
            <p>Penelitian neurosains modern membuktikan bahwa otak kita terus berubah sepanjang hidup - ini disebut <strong>neuroplastisitas</strong>. Setiap kali kita belajar hal baru, koneksi saraf baru terbentuk. Artinya, kemampuan benar-benar bisa dikembangkan!</p>
            
            <p class="source-note"><strong>📚 Referensi:</strong><br>
            - Dweck, C.S. (2006). "Mindset: The New Psychology of Success."<br>
            - Blackwell, L.S., Trzesniewski, K.H., & Dweck, C.S. (2007). "Implicit Theories of Intelligence Predict Achievement Across an Adolescent Transition." Child Development.<br>
            - Doidge, N. (2007). "The Brain That Changes Itself." Viking Press.</p>
        `
    },
    {
        id: 9,
        title: "Tidur dan Otak Remaja: Kenapa Kamu Butuh 8-10 Jam",
        excerpt: "Penelitian dari National Sleep Foundation menunjukkan remaja butuh lebih banyak tidur dari dewasa. Ini alasan ilmiahnya!",
        category: "mental-health",
        author: "Dr. Matthew Walker (Neuroscientist, UC Berkeley)",
        date: "2025-12-20",
        readTime: "9 menit",
        emoji: "😴",
        content: `
            <h2>Fakta Mengejutkan tentang Tidur Remaja</h2>
            <p>Dr. Matthew Walker, profesor neurosains di UC Berkeley dan penulis buku bestseller "Why We Sleep", menyebut kurang tidur pada remaja sebagai "silent epidemic" (epidemi diam-diam) yang berdampak serius pada kesehatan mental dan prestasi akademik.</p>
            
            <p><strong>Sumber:</strong> Walker, M. (2017). "Why We Sleep: Unlocking the Power of Sleep and Dreams." Scribner.</p>
            
            <h3>Mengapa Remaja Butuh Lebih Banyak Tidur?</h3>
            
            <h4>Pergeseran Jam Biologis</h4>
            <p>Saat pubertas, jam biologis (circadian rhythm) remaja bergeser sekitar 2 jam lebih lambat. Ini bukan malas - ini <strong>biologi</strong>! Makanya kamu susah tidur jam 9 malam tapi sulit bangun pagi.</p>
            
            <p>Penelitian Dr. Mary Carskadon dari Brown University menunjukkan bahwa melatonin (hormon tidur) remaja baru diproduksi sekitar jam 11 malam, berbeda dengan anak-anak atau dewasa.</p>
            
            <h3>Dampak Kurang Tidur</h3>
            
            <h4>1. Pada Otak</h4>
            <ul>
                <li><strong>Memori:</strong> Tidur adalah waktu otak "menyimpan" pelajaran. Kurang tidur = susah ingat materi.</li>
                <li><strong>Konsentrasi:</strong> Begadang 1 malam = kemampuan kognitif setara mabuk alkohol!</li>
                <li><strong>Kreativitas:</strong> Tidur REM (mimpi) penting untuk problem-solving dan kreativitas.</li>
            </ul>
            
            <h4>2. Pada Emosi</h4>
            <p>Penelitian Walker menunjukkan amigdala (pusat emosi di otak) jadi 60% lebih reaktif saat kurang tidur. Makanya gampang baper, marah, atau sedih kalau begadang!</p>
            
            <h4>3. Pada Kesehatan</h4>
            <ul>
                <li>Sistem imun melemah</li>
                <li>Risiko obesitas meningkat (hormon lapar jadi kacau)</li>
                <li>Risiko depresi dan kecemasan naik signifikan</li>
            </ul>
            
            <h3>Rekomendasi dari Penelitian</h3>
            <p><strong>National Sleep Foundation</strong> merekomendasikan:</p>
            <ul>
                <li>Remaja 14-17 tahun: 8-10 jam per malam</li>
                <li>Dewasa muda 18-25 tahun: 7-9 jam per malam</li>
            </ul>
            
            <h3>Tips Tidur Lebih Baik (Evidence-Based)</h3>
            
            <h4>1. Konsisten Jadwal Tidur</h4>
            <p>Tidur dan bangun di waktu yang sama setiap hari, termasuk weekend. Ini melatih jam biologis.</p>
            
            <h4>2. No Gadget 1 Jam Sebelum Tidur</h4>
            <p>Cahaya biru dari layar menekan produksi melatonin hingga 50%.</p>
            
            <h4>3. Kamar yang Optimal</h4>
            <p>Gelap, sejuk (sekitar 18-20°C), dan tenang.</p>
            
            <h4>4. Hindari Kafein Setelah Jam 2 Siang</h4>
            <p>Kafein bertahan di tubuh hingga 6 jam. Minum kopi sore = susah tidur malam.</p>
            
            <h4>5. Olahraga Teratur</h4>
            <p>Tapi jangan terlalu dekat dengan waktu tidur. Minimal 3-4 jam sebelumnya.</p>
            
            <h3>Pesan untuk Sekolah dan Orang Tua</h3>
            <p>American Academy of Pediatrics merekomendasikan sekolah menengah mulai paling awal jam 8.30 pagi untuk mengakomodasi jam biologis remaja. Di Indonesia, ini masih jadi tantangan.</p>
            
            <p class="source-note"><strong>📚 Referensi:</strong><br>
            - Walker, M. (2017). "Why We Sleep." Scribner.<br>
            - Carskadon, M.A. (2011). "Sleep in adolescents: The perfect storm." Pediatric Clinics of North America.<br>
            - National Sleep Foundation Guidelines (2015). Sleep Health Journal.<br>
            - American Academy of Pediatrics (2014). "School Start Times for Adolescents." Pediatrics.</p>
        `
    },
    {
        id: 10,
        title: "Kecanduan Game: Kapan Hobi Jadi Masalah?",
        excerpt: "WHO sudah mengakui Gaming Disorder sebagai gangguan mental resmi. Pelajari tanda-tandanya dan cara mengatasinya!",
        category: "mental-health",
        author: "WHO & Dr. Andrew Przybylski (Oxford Internet Institute)",
        date: "2025-12-15",
        readTime: "8 menit",
        emoji: "🎮",
        content: `
            <h2>Gaming Disorder: Pengakuan Resmi WHO</h2>
            <p>Pada tahun 2018, World Health Organization (WHO) resmi memasukkan "Gaming Disorder" ke dalam International Classification of Diseases (ICD-11). Ini bukan berarti main game = sakit, tapi ada kondisi khusus yang perlu diwaspadai.</p>
            
            <p><strong>Sumber:</strong> WHO ICD-11 (2018). "Gaming Disorder." 6C51.</p>
            
            <h3>Kriteria Gaming Disorder Menurut WHO</h3>
            <ol>
                <li><strong>Kehilangan kontrol</strong> atas gaming (durasi, frekuensi, intensitas)</li>
                <li><strong>Prioritas gaming</strong> meningkat sampai mengalahkan aktivitas lain dan kebutuhan sehari-hari</li>
                <li><strong>Terus gaming</strong> meski ada konsekuensi negatif (nilai turun, hubungan rusak, kesehatan terganggu)</li>
                <li>Pola ini berlangsung <strong>minimal 12 bulan</strong> dan menyebabkan gangguan signifikan</li>
            </ol>
            
            <h3>Bedakan: Hobi vs Kecanduan</h3>
            
            <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="background: var(--primary-color); color: white;">
                    <th style="padding: 12px; border: 1px solid #ddd;">Hobi Sehat</th>
                    <th style="padding: 12px; border: 1px solid #ddd;">Tanda Kecanduan</th>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;">Bisa berhenti saat diminta</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Marah/gelisah kalau disuruh berhenti</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;">Tugas sekolah tetap prioritas</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Skip tugas/sekolah demi game</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;">Tidur dan makan teratur</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Begadang, lupa makan</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;">Masih hangout dengan teman offline</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Mengisolasi diri, hanya main game</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;">Mood stabil</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">Mood sangat tergantung game</td>
                </tr>
            </table>
            
            <h3>Mengapa Game Bisa Adiktif?</h3>
            <p>Dr. Andrew Przybylski dari Oxford Internet Institute menjelaskan bahwa game dirancang untuk memenuhi kebutuhan psikologis dasar:</p>
            <ul>
                <li><strong>Kompetensi:</strong> Merasa jago dan berhasil</li>
                <li><strong>Otonomi:</strong> Bebas memilih dan mengontrol</li>
                <li><strong>Koneksi sosial:</strong> Main bareng teman, komunitas</li>
            </ul>
            <p>Ketika kebutuhan ini tidak terpenuhi di kehidupan nyata, game jadi "pelarian" yang sangat menarik.</p>
            
            <h3>Data di Indonesia</h3>
            <p>Menurut survei Kemenkominfo (2022):</p>
            <ul>
                <li>94% remaja Indonesia bermain game</li>
                <li>Rata-rata durasi bermain: 3-4 jam/hari</li>
                <li>15% menunjukkan tanda-tanda problematic gaming</li>
            </ul>
            
            <h3>Tips Gaming yang Sehat</h3>
            <ol>
                <li><strong>Set timer:</strong> Batasi 1-2 jam per hari di hari sekolah</li>
                <li><strong>No gaming before homework:</strong> Selesaikan kewajiban dulu</li>
                <li><strong>Pilih game bijak:</strong> Hindari game dengan sistem gacha yang eksploitatif</li>
                <li><strong>Variasi aktivitas:</strong> Seimbangkan dengan olahraga dan aktivitas sosial offline</li>
                <li><strong>No gadget di kamar:</strong> Charge HP di luar kamar tidur</li>
            </ol>
            
            <h3>Kapan Harus Minta Bantuan?</h3>
            <p>Cerita ke guru BK atau orang tua kalau:</p>
            <ul>
                <li>Nilai turun drastis karena game</li>
                <li>Konflik terus-terusan dengan keluarga soal game</li>
                <li>Ngerasa "kosong" atau cemas kalau nggak main</li>
                <li>Sudah mencoba berhenti tapi gagal</li>
            </ul>
            
            <p class="source-note"><strong>📚 Referensi:</strong><br>
            - WHO (2018). ICD-11: Gaming Disorder.<br>
            - Przybylski, A.K., et al. (2017). "Internet Gaming Disorder: Investigating the Clinical Relevance of a New Phenomenon." American Journal of Psychiatry.<br>
            - Kemenkominfo RI (2022). Survei Penggunaan Internet di Indonesia.</p>
        `
    },
    {
        id: 11,
        title: "Emotional Intelligence: Kunci Sukses yang Sering Dilupakan",
        excerpt: "Penelitian Daniel Goleman menunjukkan EQ lebih penting dari IQ untuk kesuksesan hidup. Yuk, tingkatkan kecerdasan emosionalmu!",
        category: "self-development",
        author: "Daniel Goleman (Psikolog & Penulis)",
        date: "2025-12-10",
        readTime: "9 menit",
        emoji: "💡",
        content: `
            <h2>IQ vs EQ: Mana Lebih Penting?</h2>
            <p>Daniel Goleman, psikolog dan penulis buku "Emotional Intelligence" (1995), mempopulerkan konsep bahwa kecerdasan emosional (EQ) sama pentingnya - bahkan lebih penting - dari kecerdasan intelektual (IQ) untuk sukses dalam hidup.</p>
            
            <p><strong>Sumber:</strong> Goleman, D. (1995). "Emotional Intelligence: Why It Can Matter More Than IQ." Bantam Books.</p>
            
            <h3>Fakta Menarik dari Penelitian</h3>
            <ul>
                <li>IQ hanya menyumbang sekitar 20% kesuksesan hidup, sisanya ditentukan faktor lain termasuk EQ (Goleman, 1995)</li>
                <li>Penelitian Harvard Business Review menunjukkan 90% top performers punya EQ tinggi</li>
                <li>EQ dapat dipelajari dan ditingkatkan sepanjang hidup - berbeda dengan IQ yang relatif stabil</li>
            </ul>
            
            <h3>5 Komponen Kecerdasan Emosional</h3>
            
            <h4>1. Self-Awareness (Kesadaran Diri)</h4>
            <p>Kemampuan mengenali emosi sendiri saat terjadi.</p>
            <p><strong>Cara melatih:</strong></p>
            <ul>
                <li>Journaling perasaan setiap hari</li>
                <li>Berhenti sejenak saat emosi intens, tanya "Apa yang aku rasakan sekarang?"</li>
                <li>Minta feedback dari orang terdekat</li>
            </ul>
            
            <h4>2. Self-Regulation (Pengendalian Diri)</h4>
            <p>Kemampuan mengelola emosi, tidak reaktif berlebihan.</p>
            <p><strong>Cara melatih:</strong></p>
            <ul>
                <li>Teknik STOP: Stop - Take a breath - Observe - Proceed</li>
                <li>Hitung sampai 10 sebelum merespons saat marah</li>
                <li>Identifikasi trigger emosi negatif</li>
            </ul>
            
            <h4>3. Motivation (Motivasi Internal)</h4>
            <p>Dorongan dari dalam untuk mencapai tujuan, bukan karena reward eksternal.</p>
            <p><strong>Cara melatih:</strong></p>
            <ul>
                <li>Tentukan "why" - alasan mendalam di balik tujuanmu</li>
                <li>Set goals yang bermakna secara personal</li>
                <li>Rayakan progress kecil</li>
            </ul>
            
            <h4>4. Empathy (Empati)</h4>
            <p>Kemampuan memahami perasaan orang lain.</p>
            <p><strong>Cara melatih:</strong></p>
            <ul>
                <li>Active listening - dengarkan tanpa menyela</li>
                <li>Coba lihat situasi dari sudut pandang orang lain</li>
                <li>Perhatikan bahasa tubuh dan ekspresi wajah</li>
            </ul>
            
            <h4>5. Social Skills (Keterampilan Sosial)</h4>
            <p>Kemampuan membangun hubungan dan berinteraksi efektif.</p>
            <p><strong>Cara melatih:</strong></p>
            <ul>
                <li>Praktik komunikasi asertif (jujur tapi tetap menghargai)</li>
                <li>Belajar mengelola konflik dengan konstruktif</li>
                <li>Terlibat dalam kegiatan kelompok/organisasi</li>
            </ul>
            
            <h3>The Marshmallow Experiment</h3>
            <p>Eksperimen terkenal oleh Dr. Walter Mischel (Stanford, 1972) memberikan anak-anak pilihan: makan 1 marshmallow sekarang, atau tunggu 15 menit dan dapat 2 marshmallow.</p>
            
            <p>Follow-up 40 tahun kemudian menunjukkan anak-anak yang bisa menunda kepuasan (delayed gratification) cenderung lebih sukses dalam karir, hubungan, dan kesehatan. Ini adalah salah satu aspek self-regulation.</p>
            
            <h3>EQ di Sekolah</h3>
            <p>Social and Emotional Learning (SEL) sudah diterapkan di banyak sekolah dunia. Meta-analisis CASEL (Collaborative for Academic, Social, and Emotional Learning) menemukan program SEL meningkatkan prestasi akademik rata-rata 11 poin persentil.</p>
            
            <p class="source-note"><strong>📚 Referensi:</strong><br>
            - Goleman, D. (1995). "Emotional Intelligence." Bantam Books.<br>
            - Mischel, W. (2014). "The Marshmallow Test." Little, Brown and Company.<br>
            - CASEL (2011). "The Impact of Enhancing Students' Social and Emotional Learning."<br>
            - Bradberry, T. & Greaves, J. (2009). "Emotional Intelligence 2.0." TalentSmart.</p>
        `
    },
    {
        id: 12,
        title: "Teknik Pomodoro: Belajar Efektif dengan Sains",
        excerpt: "Teknik manajemen waktu yang terbukti ilmiah meningkatkan fokus dan produktivitas. Cocok banget buat siswa!",
        category: "self-development",
        author: "Francesco Cirillo (Penemu Teknik Pomodoro)",
        date: "2025-12-05",
        readTime: "6 menit",
        emoji: "🍅",
        content: `
            <h2>Apa Itu Teknik Pomodoro?</h2>
            <p>Teknik Pomodoro dikembangkan oleh Francesco Cirillo pada akhir 1980-an saat dia masih mahasiswa. Namanya dari timer dapur berbentuk tomat (pomodoro dalam bahasa Italia) yang dia gunakan.</p>
            
            <p><strong>Sumber:</strong> Cirillo, F. (2006). "The Pomodoro Technique." FC Garage.</p>
            
            <h3>Cara Kerja Pomodoro</h3>
            <ol>
                <li><strong>Pilih tugas</strong> yang ingin dikerjakan</li>
                <li><strong>Set timer 25 menit</strong> (= 1 Pomodoro)</li>
                <li><strong>Fokus 100%</strong> pada tugas sampai timer berbunyi</li>
                <li><strong>Istirahat 5 menit</strong> - benar-benar istirahat!</li>
                <li><strong>Ulangi</strong> - setelah 4 Pomodoro, istirahat panjang 15-30 menit</li>
            </ol>
            
            <h3>Mengapa Ini Efektif? Sains di Baliknya</h3>
            
            <h4>1. Attention Span Manusia</h4>
            <p>Penelitian menunjukkan fokus manusia optimal sekitar 25-30 menit. Setelah itu, konsentrasi menurun drastis. Pomodoro memanfaatkan "prime time" otak ini.</p>
            
            <h4>2. Efek Zeigarnik</h4>
            <p>Psikolog Bluma Zeigarnik menemukan bahwa otak lebih mengingat tugas yang belum selesai. Dengan memotong tugas besar jadi segmen 25 menit, otakmu tetap "engaged" dengan materi.</p>
            
            <h4>3. Time Pressure</h4>
            <p>Deadline 25 menit menciptakan "positive stress" yang meningkatkan fokus - berbeda dengan deadline jauh yang bikin procrastinate.</p>
            
            <h4>4. Reward System</h4>
            <p>Istirahat setiap 25 menit adalah "reward" yang memicu dopamin dan bikin belajar terasa lebih menyenangkan.</p>
            
            <h3>Penelitian Pendukung</h3>
            <ul>
                <li><strong>DeskTime Study:</strong> Pekerja paling produktif bekerja rata-rata 52 menit lalu istirahat 17 menit</li>
                <li><strong>University of Illinois:</strong> Brief diversions (istirahat singkat) dramatically improve focus</li>
                <li><strong>Draugiem Group:</strong> Productivity tertinggi dicapai dengan rasio kerja:istirahat yang konsisten</li>
            </ul>
            
            <h3>Tips Pomodoro untuk Siswa</h3>
            
            <h4>Untuk Belajar</h4>
            <ul>
                <li>1 Pomodoro = 1 bab atau 1 topik</li>
                <li>Gunakan istirahat untuk stretching atau minum air</li>
                <li>Jangan cek HP saat Pomodoro berlangsung!</li>
            </ul>
            
            <h4>Untuk Mengerjakan PR</h4>
            <ul>
                <li>List semua PR, estimasi berapa Pomodoro per PR</li>
                <li>Mulai dari yang paling sulit saat energi masih tinggi</li>
                <li>Track progress: berapa Pomodoro sudah selesai</li>
            </ul>
            
            <h4>Untuk Persiapan Ujian</h4>
            <ul>
                <li>Bagi materi jadi segmen-segmen kecil</li>
                <li>Review di istirahat: "Apa yang baru aku pelajari?"</li>
                <li>Setelah 4 Pomodoro, test diri sendiri</li>
            </ul>
            
            <h3>Tools yang Bisa Dipakai</h3>
            <ul>
                <li><strong>App:</strong> Forest, Focus To-Do, Pomodone</li>
                <li><strong>Website:</strong> Pomofocus.io, Tomato Timer</li>
                <li><strong>Simple:</strong> Timer HP atau jam dapur biasa</li>
            </ul>
            
            <p class="source-note"><strong>📚 Referensi:</strong><br>
            - Cirillo, F. (2006). "The Pomodoro Technique."<br>
            - Zeigarnik, B. (1927). "On Finished and Unfinished Tasks." Psychologische Forschung.<br>
            - DeskTime (2014). "The Secret of the 10% Most Productive People."<br>
            - Ariga, A. & Lleras, A. (2011). "Brief and rare mental breaks keep you focused." Cognition.</p>
        `
    },
    {
        id: 13,
        title: "Stres pada Remaja: Memahami dari Perspektif Ilmiah",
        excerpt: "Kenapa remaja lebih rentan stres? Ilmuwan menjelaskan perubahan otak dan hormon yang terjadi saat pubertas.",
        category: "stress",
        author: "Dr. Adriana Galván (Neuroscientist, UCLA)",
        date: "2025-11-30",
        readTime: "10 menit",
        emoji: "🧬",
        content: `
            <h2>Otak Remaja: Sedang dalam Konstruksi</h2>
            <p>Dr. Adriana Galván, profesor neurosains di UCLA, menjelaskan bahwa otak remaja sedang mengalami "renovasi besar-besaran" yang membuatnya lebih sensitif terhadap stres.</p>
            
            <p><strong>Sumber:</strong> Galván, A. (2017). "The Neuroscience of Adolescence." Cambridge University Press.</p>
            
            <h3>Apa yang Terjadi di Otak Remaja?</h3>
            
            <h4>1. Prefrontal Cortex Belum Matang</h4>
            <p>Bagian otak untuk pengambilan keputusan, kontrol impuls, dan perencanaan baru matang penuh di usia 25 tahun. Makanya remaja sering bertindak impulsif!</p>
            
            <h4>2. Amigdala Sangat Aktif</h4>
            <p>Amigdala (pusat emosi) remaja lebih reaktif dibanding anak-anak atau dewasa. Emosi terasa lebih intens - marah lebih marah, sedih lebih sedih.</p>
            
            <h4>3. Reward System Hypersensitive</h4>
            <p>Sistem reward otak remaja sangat responsif, membuat mereka lebih mencari sensasi dan pengalaman baru, tapi juga lebih rentan terhadap kecanduan.</p>
            
            <h3>Hormon dan Stres</h3>
            <p>Selama pubertas, terjadi lonjakan hormon yang memengaruhi mood dan respons stres:</p>
            
            <ul>
                <li><strong>Kortisol:</strong> Hormon stres yang levelnya berfluktuasi lebih dramatis pada remaja</li>
                <li><strong>Estrogen/Testosteron:</strong> Memengaruhi mood, energi, dan regulasi emosi</li>
                <li><strong>Dopamin:</strong> Perubahan sensitivitas membuat remaja lebih impulsif dalam mencari reward</li>
            </ul>
            
            <h3>Sumber Stres Remaja (Penelitian)</h3>
            <p>Survey American Psychological Association (2018) menemukan sumber stres utama remaja:</p>
            <ol>
                <li><strong>Sekolah dan masa depan</strong> - 83% remaja</li>
                <li><strong>Masalah keluarga</strong> - 59%</li>
                <li><strong>Hubungan sosial</strong> - 53%</li>
                <li><strong>Masalah uang</strong> - 42%</li>
                <li><strong>Berita dan situasi dunia</strong> - 45%</li>
            </ol>
            
            <h3>Dampak Stres Kronis</h3>
            <p>Penelitian Dr. Bruce McEwen dari Rockefeller University menunjukkan stres kronis dapat:</p>
            <ul>
                <li>Menyusutkan hippocampus (area memori) - susah konsentrasi dan belajar</li>
                <li>Memperbesar amigdala - makin mudah cemas</li>
                <li>Merusak koneksi di prefrontal cortex - susah ambil keputusan</li>
            </ul>
            
            <h3>Cara Mengelola Stres (Evidence-Based)</h3>
            
            <h4>1. Exercise</h4>
            <p>Olahraga 30 menit melepaskan endorfin dan menurunkan kortisol. Harvard Medical School menyebutnya "nature's anti-anxiety remedy".</p>
            
            <h4>2. Social Support</h4>
            <p>Penelitian UCLA menunjukkan koneksi sosial melepaskan oksitosin yang menetralisir efek stres.</p>
            
            <h4>3. Mindfulness</h4>
            <p>Meta-analisis di Journal of Child Psychology menunjukkan mindfulness efektif menurunkan stres pada remaja.</p>
            
            <h4>4. Sleep</h4>
            <p>Kurang tidur meningkatkan kortisol hingga 37%. Tidur cukup adalah "reset button" untuk stres.</p>
            
            <h4>5. Cognitive Reframing</h4>
            <p>Teknik CBT (Cognitive Behavioral Therapy) untuk mengubah cara pikir tentang situasi stressful.</p>
            
            <h3>Kapan Stres Jadi Berbahaya?</h3>
            <p>Segera cari bantuan jika:</p>
            <ul>
                <li>Gejala fisik persisten (sakit kepala, sakit perut)</li>
                <li>Gangguan tidur lebih dari 2 minggu</li>
                <li>Menghindari sekolah atau aktivitas sosial</li>
                <li>Perubahan nafsu makan drastis</li>
                <li>Pikiran untuk menyakiti diri sendiri</li>
            </ul>
            
            <p class="source-note"><strong>📚 Referensi:</strong><br>
            - Galván, A. (2017). "The Neuroscience of Adolescence." Cambridge University Press.<br>
            - McEwen, B.S. (2007). "Physiology and Neurobiology of Stress and Adaptation." Physiological Reviews.<br>
            - APA (2018). "Stress in America: Generation Z."<br>
            - Harvard Health Publishing (2020). "Exercise is an all-natural treatment to fight depression."</p>
        `
    },
    {
        id: 14,
        title: "Positive Psychology: Ilmu tentang Kebahagiaan",
        excerpt: "Dr. Martin Seligman membuktikan kebahagiaan bisa dipelajari dan dilatih. Ketahui formula PERMA untuk hidup lebih bahagia!",
        category: "self-development",
        author: "Dr. Martin Seligman (Bapak Positive Psychology, UPenn)",
        date: "2025-11-25",
        readTime: "8 menit",
        emoji: "😊",
        content: `
            <h2>Apa Itu Positive Psychology?</h2>
            <p>Dr. Martin Seligman, profesor di University of Pennsylvania dan mantan presiden American Psychological Association, mendirikan bidang "Positive Psychology" pada 1998. Berbeda dengan psikologi tradisional yang fokus pada "memperbaiki yang rusak", positive psychology mempelajari "apa yang membuat hidup worth living".</p>
            
            <p><strong>Sumber:</strong> Seligman, M. (2011). "Flourish: A Visionary New Understanding of Happiness and Well-being." Free Press.</p>
            
            <h3>Model PERMA: 5 Pilar Kesejahteraan</h3>
            
            <h4>P - Positive Emotions (Emosi Positif)</h4>
            <p>Merasakan kegembiraan, gratitude, harapan, dan cinta.</p>
            <p><strong>Cara melatih:</strong></p>
            <ul>
                <li><strong>Three Good Things:</strong> Setiap malam, tulis 3 hal baik yang terjadi hari ini</li>
                <li><strong>Gratitude letter:</strong> Tulis surat terima kasih untuk orang yang berarti</li>
                <li><strong>Savoring:</strong> Nikmati momen positif dengan penuh kesadaran</li>
            </ul>
            
            <h4>E - Engagement (Keterlibatan)</h4>
            <p>Kondisi "flow" di mana kamu tenggelam dalam aktivitas yang menantang tapi sesuai kemampuan.</p>
            <p><strong>Cara melatih:</strong></p>
            <ul>
                <li>Temukan hobi yang membuatmu lupa waktu</li>
                <li>Cari aktivitas dengan level challenge yang pas</li>
                <li>Minimalisir distraksi saat beraktivitas</li>
            </ul>
            
            <h4>R - Relationships (Hubungan)</h4>
            <p>Koneksi positif dengan orang lain adalah prediktor terkuat kebahagiaan.</p>
            <p><strong>Cara melatih:</strong></p>
            <ul>
                <li>Quality time dengan orang yang kamu sayang</li>
                <li>Active Constructive Responding: respons antusias saat orang lain berbagi kabar baik</li>
                <li>Random acts of kindness</li>
            </ul>
            
            <h4>M - Meaning (Makna)</h4>
            <p>Merasa hidupmu punya tujuan yang lebih besar dari diri sendiri.</p>
            <p><strong>Cara melatih:</strong></p>
            <ul>
                <li>Identifikasi nilai-nilai yang penting buatmu</li>
                <li>Kontribusi untuk orang lain atau komunitas</li>
                <li>Refleksi: "Apa yang ingin aku tinggalkan di dunia ini?"</li>
            </ul>
            
            <h4>A - Accomplishment (Pencapaian)</h4>
            <p>Mencapai tujuan dan merasa kompeten.</p>
            <p><strong>Cara melatih:</strong></p>
            <ul>
                <li>Set goals yang SMART (Specific, Measurable, Achievable, Relevant, Time-bound)</li>
                <li>Rayakan progress, bukan hanya hasil akhir</li>
                <li>Reflect on past accomplishments saat merasa down</li>
            </ul>
            
            <h3>Character Strengths</h3>
            <p>Seligman dan Dr. Christopher Peterson mengidentifikasi 24 character strengths universal. Penelitian menunjukkan menggunakan top strengths setiap hari meningkatkan kebahagiaan.</p>
            
            <p><strong>Temukan kekuatanmu:</strong> Kamu bisa ikut tes gratis di <a href="https://www.viacharacter.org" target="_blank">VIA Character Survey</a> (tersedia dalam Bahasa Indonesia).</p>
            
            <h3>Learned Optimism</h3>
            <p>Seligman juga menemukan bahwa optimisme bisa dipelajari. Kuncinya adalah cara kita menjelaskan kejadian buruk (explanatory style):</p>
            
            <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="background: var(--primary-color); color: white;">
                    <th style="padding: 12px; border: 1px solid #ddd;">Pesimis</th>
                    <th style="padding: 12px; border: 1px solid #ddd;">Optimis</th>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;">"Aku memang bodoh" (Permanent)</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">"Aku kurang belajar kali ini" (Temporary)</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;">"Aku gagal di semua hal" (Pervasive)</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">"Aku gagal di ujian ini" (Specific)</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd;">"Ini semua salahku" (Personal)</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">"Ada faktor lain yang berpengaruh" (External)</td>
                </tr>
            </table>
            
            <h3>Penelitian yang Mendukung</h3>
            <ul>
                <li><strong>Meta-analisis (Sin & Lyubomirsky, 2009):</strong> Intervensi positive psychology efektif meningkatkan well-being dan mengurangi gejala depresi</li>
                <li><strong>Harvard Grant Study (75+ tahun):</strong> Hubungan positif adalah faktor terpenting untuk hidup panjang dan bahagia</li>
                <li><strong>Three Good Things study:</strong> Menulis 3 hal baik setiap hari selama 1 minggu meningkatkan kebahagiaan hingga 6 bulan</li>
            </ul>
            
            <p class="source-note"><strong>📚 Referensi:</strong><br>
            - Seligman, M. (2011). "Flourish." Free Press.<br>
            - Peterson, C. & Seligman, M. (2004). "Character Strengths and Virtues." Oxford University Press.<br>
            - Sin, N.L. & Lyubomirsky, S. (2009). "Enhancing well-being and alleviating depressive symptoms with positive psychology interventions." Journal of Clinical Psychology.<br>
            - Vaillant, G.E. (2012). "Triumphs of Experience: The Men of the Harvard Grant Study." Harvard University Press.</p>
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
