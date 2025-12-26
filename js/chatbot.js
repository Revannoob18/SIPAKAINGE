// ============================================
// CHATBOT FUNCTIONALITY
// ============================================

const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');

// Chatbot responses database
const chatbotResponses = {
    greetings: [
        "Halo! Senang bisa membantu Anda. Ada yang bisa saya bantu hari ini?",
        "Hai! Bagaimana kabar Anda hari ini?",
        "Selamat datang di MindCare! Ada yang bisa saya bantu?",
        "Halo siswa SMAN 1 Bone! Apa yang bisa saya bantu hari ini?",
        "Hai teman! Semoga harimu menyenangkan. Ada yang ingin kamu tanyakan?",
        "Selamat pagi! Siap memulai hari dengan semangat?",
        "Halo! Ada masalah apa yang bisa saya bantu selesaikan hari ini?"
    ],
    mentalHealth: [
        "Kesehatan mental sangat penting untuk siswa SMAN 1 Bone. Kami menyediakan berbagai layanan bimbingan konseling yang sesuai dengan kebutuhan remaja. Apakah Anda tertarik untuk berkonsultasi?",
        "Saya memahami kekhawatiran Anda. Tim guru BK kami siap membantu dengan pendekatan yang ramah siswa. Mau saya jelaskan layanan kami?",
        "Terima kasih telah berbagi. Kami punya layanan tes mental health yang bisa membantu Anda memahami kondisi Anda lebih baik sebagai siswa.",
        "Kesehatan mental itu penting untuk performa sekolah. Guru BK kami bisa membantu kamu mengelola emosi dan stres belajar.",
        "Jangan ragu untuk cerita tentang perasaanmu. Kami di sini untuk mendengarkan dan membantu siswa SMAN 1 Bone.",
        "Mental health adalah fondasi kehidupan. Mari jaga bersama-sama.",
        "Setiap emosi yang kamu rasakan itu valid. Guru BK siap membantu mengelolanya."
    ],
    konseling: [
        "Kami menawarkan konseling individu, sosial, remaja, dan bimbingan karier khusus untuk siswa SMAN 1 Bone. Semua sesi dilakukan oleh guru BK berpengalaman. Ingin tahu lebih lanjut?",
        "Bimbingan konseling bisa sangat membantu siswa. Kami punya sesi online dan offline yang disesuaikan dengan jadwal sekolah. Mana yang Anda preferensikan?",
        "Untuk booking bimbingan konseling, Anda bisa klik tombol 'Detail & Booking' di halaman layanan atau hubungi kami via WhatsApp.",
        "Konseling di SMAN 1 Bone sangat rahasia dan aman. Guru BK kami akan membantu kamu dengan empati dan pengertian.",
        "Ada berbagai jenis konseling: individu untuk masalah pribadi, sosial untuk masalah pertemanan, dan karier untuk masa depanmu.",
        "Konseling bukan hanya untuk masalah besar, tapi juga untuk pengembangan diri.",
        "Guru BK kami tersertifikasi dan berpengalaman menangani berbagai masalah siswa."
    ],
    tes: [
        "Kami menyediakan tes mental health untuk siswa, tes minat & bakat, dan layanan bimbingan karier. Semua disesuaikan dengan kebutuhan siswa SMAN 1 Bone. Mau coba?",
        "Tes mental health tersedia di website kami. Klik menu 'Tes Mental' untuk memulai penilaian yang sesuai untuk remaja.",
        "Hasil tes akan memberikan gambaran kondisi mental Anda dan rekomendasi bimbingan yang tepat untuk siswa.",
        "Tes kepribadian dan minat bakat bisa membantu kamu memilih jurusan yang tepat untuk masa depan.",
        "Tes mental health kami aman dan rahasia. Hasilnya akan membantu guru BK memberikan bimbingan yang tepat.",
        "Tes ini bisa membantu kamu memahami diri sendiri lebih baik.",
        "Hasil tes akan dijaga kerahasiaannya dan hanya digunakan untuk membantu kamu."
    ],
    harga: [
        "Layanan bimbingan konseling di SMAN 1 Bone disesuaikan dengan kebutuhan siswa. Untuk informasi detail, bisa hubungi admin kami via WhatsApp.",
        "Kami menawarkan layanan yang terjangkau dan disesuaikan dengan kondisi siswa. Tes mental health tersedia gratis!",
        "Untuk informasi lengkap tentang layanan, silakan hubungi tim BK SMAN 1 Bone atau admin kami via WhatsApp.",
        "Sebagian besar layanan BK di sekolah gratis untuk siswa. Untuk layanan khusus, akan diberitahu biayanya.",
        "Prioritas kami membantu siswa, bukan mencari keuntungan. Biaya disesuaikan dengan kemampuan siswa.",
        "Kami punya program bantuan untuk siswa yang membutuhkan.",
        "Biaya layanan akan dijelaskan transparan sebelum dimulai."
    ],
    jadwal: [
        "Layanan BK SMAN 1 Bone tersedia sesuai jadwal sekolah. Untuk siswa, bisa konsultasi di jam istirahat atau setelah pulang sekolah.",
        "Untuk membuat jadwal bimbingan konseling, silakan klik menu 'Layanan' lalu pilih layanan yang dibutuhkan.",
        "Jadwal bisa diatur sesuai kenyamanan siswa. Tim BK kami akan konfirmasi via WhatsApp atau melalui sekolah.",
        "Kami fleksibel dengan jadwal siswa. Bisa di jam istirahat, setelah sekolah, atau bahkan weekend.",
        "Booking jadwal sangat mudah. Pilih waktu yang nyaman untukmu, dan kami akan konfirmasi segera.",
        "Jadwal bisa diubah jika ada keperluan mendadak.",
        "Kami prioritaskan kenyamanan siswa dalam menentukan jadwal."
    ],
    cemas: [
        "Saya paham kecemasan bisa sangat mengganggu aktivitas sekolah. Cobalah teknik pernapasan: tarik napas 4 detik, tahan 4 detik, hembuskan 6 detik.",
        "Kecemasan adalah hal yang normal terutama saat menghadapi ujian atau tekanan sekolah. Jika mengganggu belajar, bimbingan konseling bisa membantu. Mau coba tes kecemasan?",
        "Untuk mengatasi kecemasan di sekolah, coba grounding technique: sebutkan 5 hal yang Anda lihat di sekitar, 4 hal yang Anda rasakan, 3 hal yang Anda dengar.",
        "Kecemasan ujian itu wajar. Coba latihan relaksasi di menu 'Relaksasi' sebelum ujian.",
        "Jika kecemasan membuatmu sulit fokus belajar, guru BK bisa membantu dengan teknik coping yang efektif.",
        "Cemas itu bisa dikendalikan dengan teknik yang tepat.",
        "Banyak siswa mengalami kecemasan. Kamu tidak sendirian."
    ],
    depresi: [
        "Jika Anda merasa down atau kehilangan minat pada aktivitas sekolah, itu bisa jadi tanda yang perlu diperhatikan. Penting untuk berbicara dengan guru BK.",
        "Perasaan sedih yang berkepanjangan bisa mempengaruhi prestasi sekolah. Kami punya layanan BK Sahabat Murid yang siap mendengarkan. Ingin konsultasi?",
        "Cobalah tes depresi kami untuk mendapat gambaran awal. Setelah itu, guru BK kami bisa memberikan bimbingan yang tepat untuk siswa.",
        "Merasa murung terus-menerus? Itu bisa mempengaruhi konsentrasi belajar. Mari bicara dengan guru BK.",
        "Depresi bisa disembuhkan dengan dukungan yang tepat. Guru BK kami berpengalaman membantu siswa seperti kamu.",
        "Perasaan sedih itu normal, tapi jika berkepanjangan perlu perhatian.",
        "Kami punya berbagai pendekatan untuk membantu mengatasi depresi."
    ],
    stres: [
        "Stres adalah respons normal saat menghadapi ujian atau tugas sekolah. Cobalah relaksasi, meditasi, atau olahraga ringan untuk menguranginya.",
        "Kami punya 'Ruang Relaksasi' di website dengan guided meditation yang cocok untuk siswa. Mau coba?",
        "Jika stres sekolah sudah berlangsung lama dan mengganggu belajar, bimbingan konseling bisa membantu menemukan solusi yang tepat.",
        "Stres tugas menumpuk? Coba teknik time management dan jangan lupa istirahat.",
        "Olahraga ringan seperti jalan kaki bisa sangat membantu mengurangi stres sekolah.",
        "Stres bisa dikelola dengan teknik yang tepat.",
        "Jangan biarkan stres menguasai hidupmu. Ada banyak cara mengatasinya."
    ],
    bullying: [
        "Bullying adalah masalah serius di sekolah. Jika kamu mengalami atau melihat bullying, segera laporkan ke guru BK atau wali kelas.",
        "Kami sangat serius menangani kasus bullying. Guru BK SMAN 1 Bone siap membantu korban dan memberikan pendidikan pencegahan.",
        "Bullying bisa berdampak buruk pada kesehatan mental. Jangan diam, ceritakan pada orang tua atau guru BK.",
        "Ada layanan khusus untuk korban bullying. Kami akan membantu kamu merasa aman dan didukung.",
        "SMAN 1 Bone berkomitmen anti-bullying. Laporkan setiap kejadian, dan kami akan menindaklanjutinya.",
        "Bullying tidak boleh ditoleransi. Kami siap membantu korban dan pelaku.",
        "Pendidikan anti-bullying adalah prioritas kami."
    ],
    motivasi: [
        "Motivasi belajar penting untuk sukses di sekolah. Coba tetapkan tujuan kecil yang realistis setiap hari.",
        "Jika motivasi belajar menurun, coba istirahat sejenak atau bicara dengan guru BK tentang kesulitanmu.",
        "Motivasi bisa datang dari dalam. Temukan passion-mu dan hubungkan dengan pelajaran sekolah.",
        "Reward system bisa membantu meningkatkan motivasi. Beri hadiah kecil untuk pencapaian akademik.",
        "Guru BK bisa membantu kamu menemukan motivasi intrinsik untuk belajar lebih baik.",
        "Motivasi bisa dibangun dengan small wins setiap hari.",
        "Temukan alasan mengapa kamu ingin belajar, itu akan membantu motivasi."
    ],
    persahabatan: [
        "Masalah pertemanan bisa sangat mempengaruhi suasana hati di sekolah. Guru BK siap membantu menyelesaikan konflik.",
        "Persahabatan yang sehat penting untuk kesehatan mental. Jika ada masalah, jangan ragu konsultasi dengan BK.",
        "Konflik dengan teman? Coba komunikasi terbuka atau minta bantuan mediator dari guru BK.",
        "Persahabatan bisa membuat sekolah lebih menyenangkan. Jika kesulitan bergaul, BK bisa membantu.",
        "Kami punya tips membangun persahabatan yang positif. Ingin tahu lebih lanjut?",
        "Persahabatan yang baik didasarkan pada saling menghargai.",
        "Konflik pertemanan bisa diselesaikan dengan komunikasi yang baik."
    ],
    keluarga: [
        "Masalah keluarga bisa mempengaruhi performa sekolah. Guru BK SMAN 1 Bone siap mendengarkan dan membantu.",
        "Jika ada masalah di rumah yang mengganggu konsentrasi belajar, bicarakan dengan guru BK secara rahasia.",
        "Keseimbangan antara kehidupan keluarga dan sekolah penting. BK bisa membantu kamu mengelolanya.",
        "Masalah keluarga adalah hal sensitif. Kami akan membantu dengan empati dan tanpa judgment.",
        "Guru BK berpengalaman menangani dampak masalah keluarga terhadap siswa.",
        "Keluarga adalah support system terpenting. Jika ada masalah, kami siap membantu.",
        "Masalah keluarga bisa mempengaruhi mental health siswa."
    ],
    masaDepan: [
        "Kecemasan tentang masa depan wajar untuk siswa SMA. BK Karier bisa membantu merencanakan langkah selanjutnya.",
        "Jangan khawatir berlebihan tentang masa depan. Fokus pada sekarang sambil mempersiapkan diri.",
        "Tes minat bakat bisa membantu kamu memilih jurusan yang sesuai dengan passion-mu.",
        "Guru BK karier siap membantu eksplorasi pilihan kuliah dan karir yang tepat.",
        "Masa depan cerah untuk siswa SMAN 1 Bone yang rajin dan fokus.",
        "Masa depan dibangun dari pilihan-pilihan kecil hari ini.",
        "BK Karier bisa membantu kamu merencanakan future yang sesuai minat."
    ],
    prestasi: [
        "Tekanan prestasi bisa membuat stres. Ingat, nilai bukan segalanya - kesehatan mental lebih penting.",
        "Jika tekanan orang tua tentang nilai terlalu besar, bicarakan dengan guru BK untuk mediasi.",
        "Prestasi akademik penting, tapi jangan sampai mengorbankan kesehatan mentalmu.",
        "Balance antara belajar dan istirahat penting untuk prestasi jangka panjang.",
        "Guru BK bisa membantu strategi belajar yang efektif tanpa stres berlebihan.",
        "Prestasi adalah hasil dari effort konsisten, bukan tekanan.",
        "Nilai penting, tapi kesehatan mental lebih prioritas."
    ],
    tidur: [
        "Tidur yang cukup sangat penting untuk konsentrasi belajar. Siswa butuh 8-9 jam tidur per malam.",
        "Jika susah tidur karena pikiran tentang sekolah, coba teknik relaksasi sebelum tidur.",
        "Masalah tidur bisa mempengaruhi prestasi sekolah. Guru BK bisa membantu tips tidur yang baik.",
        "Kurang tidur membuat mudah stres dan kurang fokus. Mari kita atasi bersama.",
        "Ada guided meditation untuk tidur di menu 'Relaksasi'. Coba sebelum tidur malam.",
        "Tidur adalah fondasi kesehatan mental dan fisik.",
        "Masalah tidur bisa diatasi dengan kebiasaan yang baik."
    ],
    sosialMedia: [
        "Penggunaan medsos yang berlebihan bisa mempengaruhi kesehatan mental siswa. Coba batasi waktu layar.",
        "Perbandingan di medsos bisa membuat tidak percaya diri. Ingat, yang dilihat di medsos tidak selalu nyata.",
        "Jika cyberbullying di medsos, segera laporkan ke guru BK dan orang tua.",
        "Medsos bisa bermanfaat untuk belajar, tapi jangan sampai mengganggu waktu tidur dan belajar.",
        "Guru BK bisa membantu tips penggunaan medsos yang sehat dan positif.",
        "Medsos membuat FOMO (fear of missing out). Coba fokus pada kehidupan nyata di sekolah.",
        "Posting di medsos bisa berdampak pada mental health. Pikirkan baik-baik sebelum share."
    ],
    selfHarm: [
        "Jika kamu punya pikiran untuk melukai diri sendiri, segera bicara dengan guru BK atau orang tua terdekat.",
        "Melukai diri bukan solusi. Ada banyak cara lain untuk mengatasi masalahmu.",
        "Kami peduli dengan keselamatanmu. Guru BK SMAN 1 Bone siap membantu tanpa judgment.",
        "Ada hotline crisis yang bisa dihubungi 24/7 jika kamu butuh bantuan segera.",
        "Melukai diri sering terjadi karena emosi yang terpendam. Mari kita cari cara sehat mengungkapkannya."
    ],
    addiction: [
        "Kecanduan game atau internet bisa mengganggu belajar dan kesehatan mental. Mari kita atasi bersama.",
        "Jika kecanduan membuatmu skip sekolah atau tugas, itu pertanda perlu bantuan.",
        "Guru BK bisa membantu strategi untuk mengurangi kecanduan dan kembali fokus belajar.",
        "Coba tetapkan batasan waktu untuk game/online. Mulai dengan 1 jam per hari.",
        "Kecanduan bisa diatasi dengan hobi offline yang menyenangkan."
    ],
    bodyImage: [
        "Citra tubuh yang negatif sering dipengaruhi oleh standar media sosial yang tidak realistis.",
        "Setiap tubuh unik dan indah. Jangan bandingkan diri dengan orang lain.",
        "Guru BK bisa membantu membangun self-esteem dan body positivity.",
        "Fokus pada kesehatan, bukan penampilan. Olahraga untuk sehat, bukan untuk kurus.",
        "Body shaming bisa sangat menyakitkan. Kamu tidak sendirian, banyak yang mengalami hal serupa."
    ],
    discrimination: [
        "Diskriminasi dan rasisme tidak punya tempat di SMAN 1 Bone. Laporkan setiap kejadian ke guru BK.",
        "Kami berkomitmen menciptakan lingkungan sekolah yang inklusif dan aman untuk semua siswa.",
        "Jika kamu mengalami diskriminasi, bicara dengan guru BK. Kami akan menindaklanjutinya.",
        "Setiap siswa berhak merasa aman dan dihargai di sekolah, terlepas dari latar belakang.",
        "Pendidikan anti-diskriminasi penting. Guru BK siap membantu pencegahan dan penanganan."
    ],
    trauma: [
        "Trauma masa lalu bisa mempengaruhi kehidupan sekolah saat ini. Konseling trauma-focused bisa membantu.",
        "Kami punya pendekatan khusus untuk membantu siswa yang mengalami trauma.",
        "Trauma bukan kesalahanmu. Guru BK berpengalaman membantu proses penyembuhan.",
        "Waktu butuh untuk sembuh dari trauma. Bersabarlah dengan dirimu sendiri.",
        "Bicara tentang trauma dengan profesional bisa membantu mengurangi dampaknya pada kehidupan sehari-hari."
    ],
    relationship: [
        "Masalah percintaan di usia remaja normal, tapi jangan sampai mengganggu fokus sekolah.",
        "Breakup bisa menyakitkan. Guru BK bisa membantu proses grieving dan move on.",
        "Hubungan sehat didasarkan pada saling menghargai dan mendukung, bukan posesif.",
        "Jika pacar/kamu mengalami toxic relationship, bicara dengan guru BK untuk nasihat.",
        "Fokus pada diri sendiri dan pertemanan sehat di sekolah lebih penting daripada relationship."
    ],
    money: [
        "Masalah keuangan keluarga bisa membuat stres. Guru BK bisa membantu mencari solusi.",
        "Beasiswa dan bantuan finansial tersedia untuk siswa yang membutuhkan.",
        "Jangan malu jika keluarga kesulitan financially. Banyak siswa mengalami hal serupa.",
        "Fokus pada belajar dulu, masalah uang bisa dicarikan jalan keluarnya.",
        "Kami punya program dukungan untuk siswa dari keluarga kurang mampu."
    ],
    studyHabits: [
        "Kebiasaan belajar yang baik penting untuk sukses di sekolah. Mari kita bangun bersama.",
        "Teknik pomodoro (25 menit belajar, 5 menit istirahat) bisa membantu konsentrasi.",
        "Buat jadwal belajar tetap dan patuhi. Konsistensi lebih penting daripada jam belajar panjang.",
        "Temukan metode belajar yang sesuai dengan gaya belajarmu (visual, auditory, kinestetik).",
        "Guru BK bisa membantu tips study skills yang efektif untuk setiap mata pelajaran."
    ],
    concentration: [
        "Susah konsentrasi belajar? Coba kurangi distraksi dan buat lingkungan belajar yang kondusif.",
        "Meditasi mindfulness bisa membantu meningkatkan fokus dan konsentrasi.",
        "Kurang tidur bisa membuat susah konsentrasi. Pastikan tidur cukup 8-9 jam.",
        "Jika konsentrasi terus terganggu, mungkin ada masalah kesehatan mental yang perlu diperiksa.",
        "Guru BK bisa membantu teknik konsentrasi dan mengidentifikasi penyebab gangguan fokus."
    ],
    confidence: [
        "Kepercayaan diri bisa dibangun dengan small wins dan positive self-talk.",
        "Setiap orang punya kekuatan unik. Temukan dan kembangkan potensimu.",
        "Public speaking anxiety normal. Mulai dari berbicara di depan teman kecil.",
        "Guru BK punya program confidence building yang cocok untuk siswa.",
        "Ingat: kamu sudah berhasil masuk SMAN 1 Bone, itu bukti kemampuanmu!"
    ],
    anger: [
        "Kemarahan adalah emosi normal, tapi penting belajar mengelolanya dengan sehat.",
        "Coba teknik deep breathing saat marah: tarik napas panjang, hembuskan perlahan.",
        "Jika sering marah tak terkendali, itu bisa jadi tanda stres yang perlu diatasi.",
        "Anger management bisa dipelajari. Guru BK siap membantu tekniknya.",
        "Luapkan kemarahan melalui olahraga atau hobi kreatif, bukan pada orang lain."
    ],
    loneliness: [
        "Kesepian di sekolah bisa terjadi meski dikelilingi orang. Cari teman yang benar-benar peduli.",
        "Bergabung dengan klub atau ekstrakurikuler bisa membantu mengatasi kesepian.",
        "Jika kesepian berkepanjangan, bicara dengan guru BK. Mereka bisa membantu.",
        "Banyak siswa merasa kesepian. Kamu tidak sendirian, dan itu bisa diubah.",
        "Bangun koneksi yang bermakna, bukan sekadar banyak teman."
    ],
    peerPressure: [
        "Tekanan teman sebaya bisa kuat, tapi ingat: pilihan terbaik untukmu adalah yang sesuai nilai dan prinsipmu.",
        "Katakan 'tidak' dengan tegas tapi sopan jika teman memaksamu melakukan hal yang tidak nyaman.",
        "Jika tekanan teman membuatmu tidak nyaman, ceritakan pada guru BK.",
        "Pilih teman yang mendukung pertumbuhanmu, bukan yang menarikmu ke bawah.",
        "Kepercayaan diri yang kuat bisa membantu melawan peer pressure."
    ],
    timeManagement: [
        "Manajemen waktu yang baik: prioritaskan tugas, buat to-do list, hindari procrastination.",
        "Gunakan planner atau app untuk mengatur jadwal harian dan mingguan.",
        "Break down tugas besar menjadi bagian kecil yang manageable.",
        "Guru BK bisa membantu workshop time management khusus untuk siswa.",
        "Mulai hari dengan planning dan akhiri dengan review. Itu membantu membangun kebiasaan baik."
    ],
    examPrep: [
        "Persiapan ujian: buat jadwal study, fokus pada pemahaman konsep bukan hafalan.",
        "Jangan belajar marathon. Istirahat setiap 45-50 menit untuk menjaga konsentrasi.",
        "Practice tests bisa membantu mengurangi anxiety dan membiasakan dengan format ujian.",
        "Sehat fisik dan mental penting saat ujian. Tidur cukup dan makan bergizi.",
        "Guru BK punya tips khusus menghadapi ujian dan mengatasi exam anxiety."
    ],
    sosialMedia: [
        "Penggunaan medsos yang berlebihan bisa mempengaruhi kesehatan mental siswa. Coba batasi waktu layar.",
        "Perbandingan di medsos bisa membuat tidak percaya diri. Ingat, yang dilihat di medsos tidak selalu nyata.",
        "Jika cyberbullying di medsos, segera laporkan ke guru BK dan orang tua.",
        "Medsos bisa bermanfaat untuk belajar, tapi jangan sampai mengganggu waktu tidur dan belajar.",
        "Guru BK bisa membantu tips penggunaan medsos yang sehat dan positif.",
        "Medsos membuat FOMO (fear of missing out). Coba fokus pada kehidupan nyata di sekolah.",
        "Posting di medsos bisa berdampak pada mental health. Pikirkan baik-baik sebelum share."
    ],
    thanks: [
        "Sama-sama! Semoga layanan bimbingan konseling di SMAN 1 Bone bisa membantu kamu.",
        "Senang bisa membantu siswa SMAN 1 Bone seperti kamu. Jangan ragu untuk kembali jika butuh bantuan.",
        "Terima kasih sudah menggunakan layanan kesehatan mental siswa. Guru BK kami siap membantu kapan saja.",
        "Kami di sini untuk membantu siswa SMAN 1 Bone. Terima kasih sudah percaya pada kami.",
        "Semoga informasi ini bermanfaat. Jangan sungkan untuk bertanya lagi kapan saja.",
        "Kami selalu siap membantu siswa SMAN 1 Bone. Terima kasih atas kepercayaannya.",
        "Semoga harimu lebih baik setelah mendapat bantuan ini."
    ],
    default: [
        "Maaf, saya kurang memahami pertanyaan kamu. Bisa dijelaskan lebih detail tentang masalah yang kamu hadapi?",
        "Hmm, saya tidak yakin dengan jawaban yang tepat. Mau saya hubungkan dengan guru BK di SMAN 1 Bone?",
        "Untuk pertanyaan spesifik tentang kesehatan mental siswa, kamu bisa hubungi guru BK atau kunjungi layanan bimbingan konseling di sekolah.",
        "Saya akan coba membantu sebaik mungkin. Bisa jelaskan lebih detail?",
        "Untuk masalah yang kompleks, sebaiknya konsultasi langsung dengan guru BK ya.",
        "Coba jelaskan lebih spesifik agar saya bisa memberikan bantuan yang tepat.",
        "Saya di sini untuk membantu. Apa yang sedang kamu alami?"
    ]
};

// Keywords untuk mendeteksi intent
const keywordMap = {
    greetings: ['hai', 'halo', 'hi', 'hello', 'selamat', 'pagi', 'siang', 'sore', 'malam', 'apa kabar', 'bagaimana', 'kenapa', 'gimana', 'assalamualaikum', 'permisi', 'excuse me'],
    mentalHealth: ['mental', 'psikologi', 'jiwa', 'emosi', 'perasaan', 'mood', 'kesehatan mental', 'sehat jiwa', 'emosional', 'psikis', 'mental health', 'kesehatan jiwa', 'psikologis'],
    konseling: ['konseling', 'konsultasi', 'terapi', 'sesi', 'bertemu', 'guru bk', 'bimbingan konseling', 'bk', 'counseling', 'psikolog sekolah', 'konsul', 'bicara dengan guru'],
    tes: ['tes', 'test', 'assessment', 'evaluasi', 'mbti', 'kepribadian', 'phq', 'gad', 'tes mental', 'minat bakat', 'tes kepribadian', 'diagnosa', 'cek mental', 'tes psikologi', 'tes kesehatan mental'],
    harga: ['harga', 'biaya', 'tarif', 'bayar', 'murah', 'mahal', 'gratis', 'biaya layanan', 'berapa', 'ongkos', 'bayaran', 'duit', 'uang', 'biaya konseling', 'harga tes'],
    jadwal: ['jadwal', 'booking', 'jam', 'buka', 'tutup', 'appointment', 'kapan', 'waktu', 'schedule', 'reservasi', 'janji temu', 'waktu konsultasi', 'jam berapa'],
    cemas: ['cemas', 'takut', 'khawatir', 'gelisah', 'panik', 'anxious', 'anxiety', 'ujian', 'tes', 'nervous', 'grogi', 'fear', 'phobia', 'khawatir', 'takut ujian'],
    depresi: ['depresi', 'sedih', 'murung', 'down', 'putus asa', 'hopeless', 'depression', 'nilai', 'bosan', 'malas', 'depresif', 'blue', 'murung', 'sedih terus'],
    stres: ['stres', 'stress', 'tekanan', 'beban', 'capek', 'lelah', 'burnout', 'tugas', 'sekolah', 'deadline', 'overwhelmed', 'stres sekolah', 'tekanan belajar'],
    bullying: ['bullying', 'dibully', 'digejek', 'dikasari', 'intimidasi', 'korban bullying', 'pelecehan', 'dizolasi', 'dihina', 'dilecehkan', 'dibully teman', 'pelecehan sekolah'],
    motivasi: ['motivasi', 'semangat', 'malas belajar', 'tidak semangat', 'bosan sekolah', 'inspirasi', 'dorongan', 'motivasi belajar', 'semangat belajar', 'kurang semangat', 'tidak mau belajar'],
    persahabatan: ['teman', 'persahabatan', 'berteman', 'konflik teman', 'masalah pertemanan', 'pertemanan', 'gaul', 'teman sebaya', 'social', 'masalah teman', 'bertengkar teman'],
    keluarga: ['keluarga', 'orang tua', 'ayah', 'ibu', 'saudara', 'rumah', 'masalah rumah', 'keluarga broken', 'ayah ibu', 'ortu', 'keluarga rusak', 'masalah orang tua', 'ayah ibu bertengkar'],
    masaDepan: ['masa depan', 'karir', 'kuliah', 'jurusan', 'pekerjaan', 'mimpi', 'ambisi', 'cita-cita', 'future', 'karir', 'universitas', 'kuliah', 'pekerjaan impian'],
    prestasi: ['prestasi', 'nilai', 'rapor', 'ujian', 'belajar', 'skor', 'ranking', 'peringkat', 'IPK', 'nilai rapor', 'prestasi akademik', 'nilai jelek', 'nilai bagus'],
    tidur: ['tidur', 'insomnia', 'susah tidur', 'bangun malam', 'ngantuk', 'kurang tidur', 'sleep', 'begadang', 'susah tidur', 'bangun malam', 'tidur malam', 'insomnia'],
    sosialMedia: ['sosmed', 'instagram', 'tiktok', 'facebook', 'twitter', 'medsos', 'online', 'cyber', 'internet', 'social media', 'fomo', 'facebook', 'twitter', 'snapchat'],
    selfHarm: ['melukai diri', 'self harm', 'luka', 'bunuh diri', 'suicide', 'potong', 'garuk', 'hurt myself', 'self injury', 'bunuh', 'mati', 'pengorbanan', 'lukai diri'],
    addiction: ['kecanduan', 'addiction', 'game', 'internet', 'online', 'gaming', 'kecanduan game', 'addict', 'terobsesi', 'main game terus', 'online terus', 'kecanduan hp'],
    bodyImage: ['citra tubuh', 'body image', 'penampilan', 'kurus', 'gemuk', 'cantik', 'jelek', 'tubuh', 'badan', 'berat badan', 'tampilan', 'mukaku', 'badanku'],
    discrimination: ['diskriminasi', 'rasisme', 'racial', 'bullying ras', 'diskrim', 'ras', 'suku', 'agama', 'diskriminasi', 'rasial', 'etnis', 'dibeda-bedakan'],
    trauma: ['trauma', 'traumatis', 'masa lalu', 'pengalaman buruk', 'trauma masa lalu', 'traumatic', 'ptsd', 'kejadian buruk', 'pengalaman traumatis', 'shock'],
    relationship: ['pacar', 'pacaran', 'cinta', 'putus', 'breakup', 'toxic', 'relationship', 'jodoh', 'couple', 'hubungan', 'kasih sayang', 'jatuh cinta'],
    money: ['uang', 'duit', 'uang sekolah', 'biaya sekolah', 'uang saku', 'uang jajan', 'uang kuliah', 'uang kuliah', 'uang kuliah', 'uang kuliah', 'uang kuliah', 'uang kuliah'],
    studyHabits: ['belajar', 'study habits', 'cara belajar', 'teknik belajar', 'metode belajar', 'belajar efektif', 'study skills', 'tips belajar', 'strategi belajar', 'belajar bagus'],
    concentration: ['konsentrasi', 'fokus', 'susah fokus', 'tidak fokus', 'konsentrasi belajar', 'concentration', 'distracted', 'tidak konsen', 'sulit fokus', 'konsen'],
    confidence: ['percaya diri', 'confidence', 'kepercayaan diri', 'self esteem', 'takut bicara', 'public speaking', 'malu', 'kurang percaya diri', 'ragu diri', 'percaya'],
    anger: ['marah', 'kemarahan', 'emosi', 'temper', 'marah-marah', 'ngerasa marah', 'anger management', 'kemarahan', 'temperamental', 'emosional', 'ngerasa'],
    loneliness: ['kesepian', 'sendiri', 'lonely', 'isolasi', 'tidak punya teman', 'kesepian', 'loneliness', 'sepi', 'sunyi', 'terisolasi', 'kesendirian'],
    peerPressure: ['tekanan teman', 'peer pressure', 'dipaksa teman', 'ikut-ikut teman', 'tekanan sebaya', 'pressure dari teman', 'dibujuk teman', 'paksaan teman', 'ikut teman'],
    timeManagement: ['waktu', 'manajemen waktu', 'time management', 'susah bagi waktu', 'procrastination', 'menunda', 'jadwal waktu', 'pengaturan waktu', 'bagi waktu', 'waktu luang'],
    examPrep: ['persiapan ujian', 'ujian', 'persiapan tes', 'belajar ujian', 'exam preparation', 'ujian nasional', 'persiapan ujian', 'latihan ujian', 'latihan soal', 'ujian sekolah'],
    thanks: ['terima kasih', 'thanks', 'makasih', 'thx', 'thank you', 'terimakasih', 'appreciate', 'terima kasih banyak', 'makasih ya', 'thanks ya', 'terima kasih banyak ya']
};

// Function to detect intent from user message
function detectIntent(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const [intent, keywords] of Object.entries(keywordMap)) {
        if (keywords.some(keyword => lowerMessage.includes(keyword))) {
            return intent;
        }
    }
    
    return 'default';
}

// Function to get random response based on intent
function getResponse(intent) {
    const responses = chatbotResponses[intent] || chatbotResponses.default;
    return responses[Math.floor(Math.random() * responses.length)];
}

// Function to create message element
function createMessage(text, isBot = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isBot ? 'bot-message' : 'user-message';
    
    if (isBot) {
        messageDiv.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-avatar">👤</div>
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;
    }
    
    return messageDiv;
}

// Function to show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'bot-message typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
            <p><span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></p>
        </div>
    `;
    
    // Add CSS for typing animation
    const style = document.createElement('style');
    style.textContent = `
        .typing-indicator .dot {
            animation: typingDot 1.4s infinite;
        }
        .typing-indicator .dot:nth-child(2) {
            animation-delay: 0.2s;
        }
        .typing-indicator .dot:nth-child(3) {
            animation-delay: 0.4s;
        }
        @keyframes typingDot {
            0%, 60%, 100% { opacity: 0.3; }
            30% { opacity: 1; }
        }
    `;
    
    if (!document.getElementById('typing-style')) {
        style.id = 'typing-style';
        document.head.appendChild(style);
    }
    
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    return typingDiv;
}

// Function to send message
function sendMessage() {
    const message = chatbotInput.value.trim();
    
    if (message === '') return;
    
    // Add user message
    const userMessage = createMessage(message, false);
    chatbotMessages.appendChild(userMessage);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    // Clear input
    chatbotInput.value = '';
    
    // Show typing indicator
    const typingIndicator = showTypingIndicator();
    
    // Simulate thinking time
    setTimeout(() => {
        typingIndicator.remove();
        
        // Detect intent and get response
        const intent = detectIntent(message);
        const response = getResponse(intent);
        
        // Add bot response
        const botMessage = createMessage(response, true);
        chatbotMessages.appendChild(botMessage);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        // Save conversation to localStorage
        saveConversation(message, response);
        
        // Add quick reply buttons for certain intents
        if (intent === 'mentalHealth' || intent === 'konseling') {
            addQuickReplies(['Tes Mental Health', 'Booking Konseling', 'Info Harga']);
        } else if (intent === 'tes') {
            addQuickReplies(['Mulai Tes Sekarang', 'Jenis Tes Apa Saja?', 'Gratis atau Berbayar?']);
        }
        
    }, 1000 + Math.random() * 1000); // Random delay 1-2 seconds
}

// Function to add quick reply buttons
function addQuickReplies(replies) {
    const quickReplyDiv = document.createElement('div');
    quickReplyDiv.className = 'quick-replies';
    quickReplyDiv.style.cssText = `
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        padding: 8px 0;
        animation: slideIn 0.3s ease;
    `;
    
    replies.forEach(reply => {
        const button = document.createElement('button');
        button.textContent = reply;
        button.style.cssText = `
            padding: 8px 16px;
            border: 2px solid var(--primary-color);
            background: transparent;
            color: var(--primary-color);
            border-radius: 20px;
            font-size: 13px;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        
        button.addEventListener('mouseover', () => {
            button.style.background = 'var(--primary-color)';
            button.style.color = 'white';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.background = 'transparent';
            button.style.color = 'var(--primary-color)';
        });
        
        button.addEventListener('click', () => {
            chatbotInput.value = reply;
            sendMessage();
            quickReplyDiv.remove();
        });
        
        quickReplyDiv.appendChild(button);
    });
    
    chatbotMessages.appendChild(quickReplyDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Function to save conversation
function saveConversation(userMsg, botMsg) {
    const conversations = JSON.parse(localStorage.getItem('chatHistory') || '[]');
    conversations.push({
        timestamp: new Date().toISOString(),
        user: userMsg,
        bot: botMsg
    });
    
    // Keep only last 50 messages
    if (conversations.length > 50) {
        conversations.shift();
    }
    
    localStorage.setItem('chatHistory', JSON.stringify(conversations));
}

// Function to load conversation history
function loadConversationHistory() {
    const conversations = JSON.parse(localStorage.getItem('chatHistory') || '[]');
    
    // Show last 5 messages
    conversations.slice(-5).forEach(conv => {
        if (conv.user) {
            chatbotMessages.appendChild(createMessage(conv.user, false));
        }
        if (conv.bot) {
            chatbotMessages.appendChild(createMessage(conv.bot, true));
        }
    });
    
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Event listeners
if (chatbotToggle) {
    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.classList.toggle('active');
        
        // Load history on first open
        if (chatbotContainer.classList.contains('active') && chatbotMessages.children.length === 1) {
            // Only has welcome message
            loadConversationHistory();
        }
        
        chatbotInput.focus();
    });
}

if (chatbotClose) {
    chatbotClose.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
    });
}

if (chatbotSend) {
    chatbotSend.addEventListener('click', sendMessage);
}

if (chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Add initial greeting with delay
setTimeout(() => {
    if (chatbotMessages && chatbotMessages.children.length === 1) {
        const greeting = createMessage("Saya bisa membantu Anda dengan:<br>• Informasi layanan konseling<br>• Tes mental health<br>• Booking jadwal<br>• Tips kesehatan mental<br><br>Silakan tanyakan apa saja! 😊", true);
        chatbotMessages.appendChild(greeting);
    }
}, 2000);

// Auto-save conversation on page unload
window.addEventListener('beforeunload', () => {
    // Conversation is already saved on each message
});

console.log('🤖 Chatbot initialized successfully!');
