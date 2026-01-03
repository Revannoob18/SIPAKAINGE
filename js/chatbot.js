// ============================================
// SIPAKAINGE PROFESSIONAL CHATBOT v5.0
// Ultimate AI-Like Mental Health Assistant
// SMAN 1 Bone - BK Mental Health Services
// ============================================

const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');

// ============================================
// THERAPEUTIC TECHNIQUES LIBRARY
// ============================================
const therapeuticTechniques = {
    cbt: {
        name: 'Cognitive Behavioral Therapy (CBT)',
        description: 'Teknik untuk mengubah pola pikir negatif menjadi positif',
        exercises: [
            {
                name: 'Thought Record',
                emoji: '📝',
                instruction: `**Latihan Thought Record:**

1️⃣ **Situasi:** Tuliskan apa yang terjadi
2️⃣ **Pikiran Otomatis:** Apa yang langsung terlintas di pikiranmu?
3️⃣ **Emosi:** Apa yang kamu rasakan? (0-100%)
4️⃣ **Bukti Mendukung:** Fakta yang mendukung pikiran ini
5️⃣ **Bukti Menentang:** Fakta yang menentang pikiran ini
6️⃣ **Pikiran Alternatif:** Pikiran yang lebih seimbang
7️⃣ **Emosi Baru:** Bagaimana perasaanmu sekarang? (0-100%)

💡 Tips: Lakukan ini setiap kali ada pikiran negatif yang kuat.`
            },
            {
                name: 'Cognitive Restructuring',
                emoji: '🔄',
                instruction: `**Latihan Cognitive Restructuring:**

Identifikasi distorsi kognitif dalam pikiranmu:

❌ **All-or-Nothing:** "Kalau tidak sempurna, berarti gagal total"
➡️ Realita: Ada gradasi antara sukses dan gagal

❌ **Overgeneralization:** "Ini SELALU terjadi padaku"
➡️ Realita: Satu kejadian tidak menentukan semuanya

❌ **Mind Reading:** "Mereka pasti berpikir buruk tentangku"
➡️ Realita: Kita tidak bisa membaca pikiran orang

❌ **Catastrophizing:** "Ini akan menjadi bencana!"
➡️ Realita: Biasanya situasi tidak seburuk yang dibayangkan

❌ **Should Statements:** "Aku HARUS bisa melakukan ini"
➡️ Realita: Tidak ada yang sempurna, boleh untuk belajar

💪 Latihan: Setiap pikiran negatif, tanya "Distorsi apa ini?"`
            },
            {
                name: 'Behavioral Activation',
                emoji: '🎯',
                instruction: `**Latihan Behavioral Activation:**

Ketika merasa down, lakukan aktivitas positif:

📋 **Langkah-langkah:**
1. Buat daftar 10 aktivitas yang biasanya membuatmu senang
2. Beri rating seberapa mudah dilakukan (1-10)
3. Pilih yang paling mudah untuk dimulai
4. Jadwalkan di kalender
5. Lakukan walau tidak feel like it
6. Catat perasaan sebelum & sesudah

📌 **Contoh Aktivitas:**
• Jalan kaki 10 menit
• Mendengarkan musik favorit
• Menghubungi teman
• Menonton video lucu
• Merapikan meja belajar

🌟 Kunci: Mulai dari yang kecil, konsisten!`
            }
        ]
    },
    dbt: {
        name: 'Dialectical Behavior Therapy (DBT)',
        description: 'Teknik untuk mengelola emosi intens',
        exercises: [
            {
                name: 'TIPP Skills',
                emoji: '🌡️',
                instruction: `**TIPP Skills untuk Emosi Intens:**

Ketika emosi terasa overwhelming, gunakan TIPP:

🌡️ **T - Temperature (Suhu)**
Celupkan muka ke air dingin 30 detik, atau pegang es batu.
Ini akan menurunkan detak jantung secara cepat.

🏃 **I - Intense Exercise (Olahraga Intens)**
Lakukan aktivitas fisik intens selama 20 menit.
Jumping jacks, lari di tempat, atau naik turun tangga.

🌬️ **P - Paced Breathing (Napas Teratur)**
Tarik napas 4 detik
Tahan 4 detik
Hembuskan 6 detik
Ulangi 5-10 kali

💪 **P - Progressive Relaxation (Relaksasi Otot)**
Tegangkan setiap kelompok otot 5 detik
Lepaskan dan rasakan rileks
Mulai dari kaki ke kepala

⚡ Gunakan saat: Panik, marah besar, atau overwhelmed`
            },
            {
                name: 'STOP Skill',
                emoji: '🛑',
                instruction: `**STOP Skill untuk Impulsif:**

Ketika ingin bereaksi impulsif, STOP dulu:

🛑 **S - Stop**
Berhenti. Jangan bereaksi. Freeze.

🧠 **T - Take a Step Back**
Mundur sejenak dari situasi.
Tarik napas dalam.

👀 **O - Observe**
Perhatikan:
• Apa yang sedang terjadi?
• Apa yang aku rasakan?
• Apa yang aku pikirkan?
• Apa yang orang lain lakukan?

🎯 **P - Proceed Mindfully**
Lanjutkan dengan kesadaran penuh.
Pilih respons, bukan reaksi.

💡 Gunakan saat: Mau marah, mau mengirim pesan emosional, atau keputusan impulsif.`
            },
            {
                name: 'Opposite Action',
                emoji: '↔️',
                instruction: `**Opposite Action untuk Emosi Tidak Membantu:**

Ketika emosi mendorong perilaku yang tidak sehat:

😢 **Sedih** → Ingin isolasi
↔️ **Opposite:** Hubungi teman, keluar rumah

😠 **Marah** → Ingin menyerang
↔️ **Opposite:** Mundur, bicara pelan, bersikap baik

😨 **Takut** (tidak berdasar) → Ingin menghindar
↔️ **Opposite:** Hadapi ketakutan secara bertahap

😔 **Malu** → Ingin bersembunyi
↔️ **Opposite:** Bagikan pengalaman dengan orang terpercaya

🤢 **Jijik pada diri sendiri** → Ingin menyakiti diri
↔️ **Opposite:** Rawat diri dengan lembut

⚠️ Catatan: Gunakan hanya jika emosi TIDAK sesuai fakta atau TIDAK membantu.`
            }
        ]
    },
    mindfulness: {
        name: 'Mindfulness & Relaxation',
        description: 'Teknik kesadaran penuh dan relaksasi',
        exercises: [
            {
                name: '5-4-3-2-1 Grounding',
                emoji: '🌍',
                instruction: `**5-4-3-2-1 Grounding Technique:**

Teknik untuk kembali ke saat ini ketika cemas:

👀 **5 hal yang kamu LIHAT**
Sebutkan 5 benda di sekitarmu. Perhatikan detailnya.

✋ **4 hal yang kamu SENTUH**
Rasakan 4 tekstur berbeda. Meja, baju, kulit...

👂 **3 hal yang kamu DENGAR**
Dengarkan 3 suara. AC, burung, langkah kaki...

👃 **2 hal yang kamu CIUM**
Identifikasi 2 aroma. Makanan, parfum, udara...

👅 **1 hal yang kamu RASA**
Rasakan 1 rasa di mulutmu. Minuman, makanan...

🧘 Napas dalam di antara setiap langkah.
Ulangi jika masih merasa cemas.`
            },
            {
                name: 'Body Scan',
                emoji: '🧘',
                instruction: `**Body Scan Meditation:**

Durasi: 10-15 menit

1️⃣ **Posisi:** Berbaring atau duduk nyaman
2️⃣ **Mata:** Tutup perlahan
3️⃣ **Napas:** 3x napas dalam

**Mulai dari bawah ke atas:**

🦶 **Kaki:** Rasakan jari kaki, telapak, pergelangan
🦵 **Betis & Paha:** Perhatikan sensasinya
🦴 **Pinggul & Perut:** Rasakan naik turunnya
🫁 **Dada:** Perhatikan detak jantung
💪 **Lengan & Tangan:** Dari bahu ke ujung jari
🦴 **Punggung & Bahu:** Lepaskan ketegangan
😌 **Wajah:** Rahang, mata, dahi - rilekskan

**Penutup:**
• Rasakan tubuh sebagai satu kesatuan
• Perlahan gerakkan jari
• Buka mata saat siap

💡 Lakukan sebelum tidur atau saat stres.`
            },
            {
                name: 'Box Breathing',
                emoji: '📦',
                instruction: `**Box Breathing (Napas Kotak):**

Teknik napas yang digunakan Navy SEALs untuk ketenangan:

    ┌───────────────┐
    │   TAHAN 4s    │
    │       ⬆️       │
    │ TARIK ➡️ ⬅️ BUANG │
    │  4s   ⬇️   4s   │
    │   TAHAN 4s    │
    └───────────────┘

1️⃣ **Tarik napas:** 4 detik (lewat hidung)
2️⃣ **Tahan:** 4 detik (paru penuh)
3️⃣ **Buang napas:** 4 detik (lewat mulut)
4️⃣ **Tahan:** 4 detik (paru kosong)

🔄 Ulangi 4-8 siklus

✅ Manfaat:
• Menurunkan stres dalam hitungan menit
• Meningkatkan fokus
• Menenangkan sistem saraf

📍 Kapan digunakan:
• Sebelum ujian
• Saat cemas
• Sebelum tidur
• Saat marah`
            }
        ]
    },
    selfCompassion: {
        name: 'Self-Compassion',
        description: 'Teknik untuk berbaik hati pada diri sendiri',
        exercises: [
            {
                name: 'Self-Compassion Break',
                emoji: '💝',
                instruction: `**Self-Compassion Break:**

Gunakan saat mengalami kesulitan:

1️⃣ **Acknowledge (Akui)**
"Ini adalah momen yang sulit."
"Ini menyakitkan."
(Akui penderitaanmu tanpa melebih-lebihkan)

2️⃣ **Common Humanity (Kemanusiaan)**
"Penderitaan adalah bagian dari kehidupan."
"Banyak orang juga merasakan hal ini."
"Aku tidak sendirian."

3️⃣ **Self-Kindness (Kebaikan Diri)**
Letakkan tangan di dada.
Katakan:
"Semoga aku kuat melewati ini."
"Semoga aku berbaik hati pada diriku."
"Semoga aku menerima diriku apa adanya."

💝 Treat yourself like you would treat a good friend.`
            },
            {
                name: 'Loving-Kindness',
                emoji: '🙏',
                instruction: `**Loving-Kindness Meditation:**

Mengirim kebaikan untuk diri dan orang lain:

**Untuk Diri Sendiri:**
"Semoga aku bahagia."
"Semoga aku sehat."
"Semoga aku aman."
"Semoga aku hidup dengan damai."

**Untuk Orang yang Dicintai:**
"Semoga [nama] bahagia..."
(ulangi semua frase)

**Untuk Orang Netral:**
"Semoga [orang yang tidak dikenal] bahagia..."

**Untuk Orang Sulit:**
"Semoga [orang yang menyulitkan] bahagia..."

**Untuk Semua Makhluk:**
"Semoga semua makhluk bahagia..."

🕯️ Lakukan 5-10 menit setiap hari.
Rasakan kehangatan di dada saat mengucapkan.`
            }
        ]
    }
};

// ============================================
// COPING TOOLKIT
// ============================================
const copingToolkit = {
    emergency: {
        name: '🆘 Darurat',
        techniques: [
            { name: 'Ice Cube', description: 'Pegang es batu erat-erat sampai sensasi intens mengalihkan pikiran' },
            { name: 'Cold Water Face', description: 'Celupkan wajah ke air dingin 30 detik untuk menenangkan' },
            { name: 'Intense Exercise', description: 'Lari di tempat atau jumping jacks sampai lelah' },
            { name: 'Call Someone', description: 'Telepon teman atau keluarga sekarang juga' }
        ]
    },
    anxiety: {
        name: '😰 Kecemasan',
        techniques: [
            { name: '5-4-3-2-1 Grounding', description: '5 lihat, 4 sentuh, 3 dengar, 2 cium, 1 rasa' },
            { name: 'Box Breathing', description: '4 detik tarik, 4 tahan, 4 buang, 4 tahan' },
            { name: 'Progressive Muscle Relaxation', description: 'Tegangkan-lepaskan otot dari kaki ke kepala' },
            { name: 'Worry Time', description: 'Jadwalkan 15 menit khusus untuk khawatir, di luar itu redirect' }
        ]
    },
    sadness: {
        name: '😢 Kesedihan',
        techniques: [
            { name: 'Allow Yourself to Feel', description: 'Izinkan diri menangis jika perlu, itu sehat' },
            { name: 'Comfort Object', description: 'Peluk bantal, selimut, atau benda yang menenangkan' },
            { name: 'Opposite Action', description: 'Walau ingin isolasi, hubungi satu orang yang dipercaya' },
            { name: 'Pleasant Activity', description: 'Lakukan satu hal kecil yang biasanya menyenangkan' }
        ]
    },
    anger: {
        name: '😠 Kemarahan',
        techniques: [
            { name: 'STOP', description: 'Stop - Take a step back - Observe - Proceed mindfully' },
            { name: 'Physical Release', description: 'Pukul bantal, push-up, atau squeeze stress ball' },
            { name: 'Cool Down', description: 'Cuci muka dengan air dingin atau keluar sebentar' },
            { name: 'Write It Out', description: 'Tulis semua kemarahan di kertas, lalu robek' }
        ]
    },
    stress: {
        name: '😫 Stres',
        techniques: [
            { name: 'Brain Dump', description: 'Tulis semua yang ada di pikiran tanpa filter' },
            { name: 'Prioritize', description: 'Pilih 3 hal terpenting untuk hari ini saja' },
            { name: 'Mini Break', description: 'Istirahat 5 menit setiap 25 menit kerja (Pomodoro)' },
            { name: 'Nature Connection', description: 'Keluar sebentar, lihat langit atau tanaman' }
        ]
    }
};

// ============================================
// SMART AFFIRMATIONS SYSTEM
// ============================================
const affirmationsLibrary = {
    anxiety: [
        "Kecemasan ini akan berlalu. Aku sudah melewati ini sebelumnya.",
        "Aku aman saat ini. Tubuhku sedang mencoba melindungiku.",
        "Aku bisa menghadapi hal sulit. Aku lebih kuat dari yang kukira.",
        "Perasaan ini sementara. Aku akan baik-baik saja.",
        "Aku memilih untuk melepaskan apa yang tidak bisa kukontrol."
    ],
    depression: [
        "Perasaan ini bukan kenyataan. Pikiranku tidak selalu benar.",
        "Aku berharga meski tidak produktif hari ini.",
        "Setiap hari adalah kesempatan baru. Tidak harus sempurna.",
        "Meminta bantuan adalah tanda keberanian, bukan kelemahan.",
        "Aku layak mendapat cinta dan kebaikan, termasuk dari diriku sendiri."
    ],
    stress: [
        "Aku bisa menghadapi ini satu langkah pada satu waktu.",
        "Istirahat bukan kemalasan, tapi kebutuhan.",
        "Aku tidak harus menyelesaikan semuanya hari ini.",
        "Aku memilih untuk fokus pada yang bisa kukontrol.",
        "Tekanan ini sementara. Aku akan melewatinya."
    ],
    confidence: [
        "Aku cukup, apa adanya, saat ini.",
        "Pendapat orang lain tidak menentukan nilaiku.",
        "Aku belajar dan berkembang setiap hari.",
        "Kesalahan adalah bagian dari pertumbuhan.",
        "Aku memiliki kekuatan unik yang tidak dimiliki orang lain."
    ],
    motivation: [
        "Langkah kecil tetap langkah maju.",
        "Aku memulai dari mana aku berada, dengan apa yang aku punya.",
        "Konsistensi lebih penting dari kesempurnaan.",
        "Aku fokus pada progress, bukan perfection.",
        "Setiap usaha membawa aku lebih dekat ke tujuan."
    ],
    general: [
        "Hari ini aku memilih untuk berbaik hati pada diriku.",
        "Aku layak mendapat kebahagiaan dan kedamaian.",
        "Perasaanku valid, tapi tidak harus mengendalikanku.",
        "Aku bertanggung jawab atas kebahagiaanku sendiri.",
        "Setiap hari membawa kesempatan baru untuk bertumbuh."
    ]
};

function getPersonalizedAffirmation(mood, issues = []) {
    let category = 'general';
    
    if (issues.includes('cemas') || mood === 'anxious') category = 'anxiety';
    else if (issues.includes('depresi') || issues.includes('sedih') || mood === 'sad') category = 'depression';
    else if (issues.includes('stres') || mood === 'stressed') category = 'stress';
    else if (issues.includes('confidence') || issues.includes('minder')) category = 'confidence';
    else if (issues.includes('motivasi') || mood === 'unmotivated') category = 'motivation';
    
    const affirmations = affirmationsLibrary[category];
    return affirmations[Math.floor(Math.random() * affirmations.length)];
}

// ============================================
// MOOD JOURNAL SYSTEM
// ============================================
const moodJournal = {
    entries: [],
    
    init() {
        const saved = localStorage.getItem('sipakainge_mood_journal');
        if (saved) {
            this.entries = JSON.parse(saved);
        }
    },
    
    save() {
        localStorage.setItem('sipakainge_mood_journal', JSON.stringify(this.entries));
    },
    
    addEntry(mood, intensity, note = '', triggers = []) {
        const entry = {
            id: 'entry_' + Date.now(),
            timestamp: new Date().toISOString(),
            mood,
            intensity, // 1-10
            note,
            triggers,
            affirmation: getPersonalizedAffirmation(mood)
        };
        
        this.entries.push(entry);
        this.save();
        return entry;
    },
    
    getRecentEntries(days = 7) {
        const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
        return this.entries.filter(e => new Date(e.timestamp) > cutoff);
    },
    
    getMoodTrend() {
        const recent = this.getRecentEntries(7);
        if (recent.length < 2) return 'insufficient_data';
        
        const avgIntensity = recent.reduce((sum, e) => sum + e.intensity, 0) / recent.length;
        const moodScores = { happy: 5, good: 4, okay: 3, sad: 2, bad: 1, anxious: 2, angry: 2 };
        const avgMood = recent.reduce((sum, e) => sum + (moodScores[e.mood] || 3), 0) / recent.length;
        
        if (avgMood >= 4) return 'positive';
        if (avgMood >= 3) return 'stable';
        if (avgMood >= 2) return 'concerning';
        return 'needs_attention';
    },
    
    getInsights() {
        const recent = this.getRecentEntries(30);
        if (recent.length < 5) return null;
        
        // Find common triggers
        const triggerCounts = {};
        recent.forEach(e => {
            e.triggers.forEach(t => {
                triggerCounts[t] = (triggerCounts[t] || 0) + 1;
            });
        });
        
        const topTriggers = Object.entries(triggerCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([trigger]) => trigger);
        
        // Find best and worst days
        const dayMoods = {};
        recent.forEach(e => {
            const day = new Date(e.timestamp).toLocaleDateString('id-ID', { weekday: 'long' });
            if (!dayMoods[day]) dayMoods[day] = [];
            dayMoods[day].push(e.intensity);
        });
        
        let bestDay = null, worstDay = null, bestAvg = 0, worstAvg = 10;
        for (const [day, intensities] of Object.entries(dayMoods)) {
            const avg = intensities.reduce((a, b) => a + b, 0) / intensities.length;
            if (avg > bestAvg) { bestAvg = avg; bestDay = day; }
            if (avg < worstAvg) { worstAvg = avg; worstDay = day; }
        }
        
        return { topTriggers, bestDay, worstDay, totalEntries: recent.length };
    },
    
    generateReport() {
        const insights = this.getInsights();
        const trend = this.getMoodTrend();
        
        if (!insights) {
            return "📊 Belum cukup data untuk membuat laporan. Terus catat mood-mu ya!";
        }
        
        const trendEmoji = {
            positive: '📈 Positif',
            stable: '➡️ Stabil',
            concerning: '📉 Perlu Perhatian',
            needs_attention: '⚠️ Butuh Dukungan'
        };
        
        return `📊 **Laporan Mood 30 Hari Terakhir**

**Trend:** ${trendEmoji[trend] || trend}
**Total Catatan:** ${insights.totalEntries} entries

**Triggers Utama:**
${insights.topTriggers.map(t => `• ${t}`).join('\n') || '• Belum teridentifikasi'}

**Pola Mingguan:**
• Hari terbaik: ${insights.bestDay || 'N/A'}
• Hari paling challenging: ${insights.worstDay || 'N/A'}

💡 **Rekomendasi:**
${trend === 'positive' ? 'Pertahankan kebiasaan positifmu!' : 
  trend === 'stable' ? 'Coba tambahkan aktivitas self-care.' :
  'Pertimbangkan untuk bicara dengan guru BK.'}`;
    }
};

moodJournal.init();

// ============================================
// GAMIFICATION SYSTEM
// ============================================
const gamificationSystem = {
    data: {
        points: 0,
        level: 1,
        streak: 0,
        lastActivity: null,
        badges: [],
        dailyCheckIn: null,
        weeklyGoals: [],
        completedChallenges: []
    },
    
    pointsConfig: {
        dailyCheckIn: 10,
        moodEntry: 5,
        completeTechnique: 15,
        takeTest: 20,
        bookConseling: 25,
        helpOthers: 30,
        streakBonus: 5 // per day
    },
    
    badges: [
        { id: 'first_step', name: '🌱 Langkah Pertama', description: 'Mulai perjalanan kesehatan mental', requirement: 'first_chat' },
        { id: 'week_warrior', name: '🔥 Week Warrior', description: '7 hari streak check-in', requirement: 'streak_7' },
        { id: 'mood_master', name: '📊 Mood Master', description: 'Catat mood 30 kali', requirement: 'mood_30' },
        { id: 'technique_guru', name: '🧘 Technique Guru', description: 'Coba 10 teknik berbeda', requirement: 'techniques_10' },
        { id: 'self_care_star', name: '⭐ Self-Care Star', description: 'Selesaikan 5 self-care challenges', requirement: 'challenges_5' },
        { id: 'brave_heart', name: '💜 Brave Heart', description: 'Booking konseling pertama', requirement: 'first_conseling' },
        { id: 'consistent', name: '📅 Konsisten', description: '30 hari streak', requirement: 'streak_30' },
        { id: 'explorer', name: '🔍 Explorer', description: 'Jelajahi semua fitur', requirement: 'all_features' },
        { id: 'supporter', name: '🤝 Supporter', description: 'Bagikan resource ke teman', requirement: 'share_resource' },
        { id: 'champion', name: '🏆 Mental Health Champion', description: 'Capai level 10', requirement: 'level_10' }
    ],
    
    init() {
        const saved = localStorage.getItem('sipakainge_gamification');
        if (saved) {
            Object.assign(this.data, JSON.parse(saved));
        }
        this.checkStreak();
    },
    
    save() {
        localStorage.setItem('sipakainge_gamification', JSON.stringify(this.data));
    },
    
    addPoints(amount, reason) {
        this.data.points += amount;
        this.checkLevelUp();
        this.save();
        return { points: amount, total: this.data.points, reason };
    },
    
    checkLevelUp() {
        const levelThresholds = [0, 50, 150, 300, 500, 750, 1050, 1400, 1800, 2250, 2750];
        const newLevel = levelThresholds.findIndex(t => this.data.points < t);
        
        if (newLevel > this.data.level) {
            this.data.level = newLevel === -1 ? levelThresholds.length : newLevel;
            return true;
        }
        return false;
    },
    
    checkStreak() {
        const today = new Date().toDateString();
        const lastActivity = this.data.lastActivity ? new Date(this.data.lastActivity).toDateString() : null;
        
        if (lastActivity === today) return; // Already checked in today
        
        const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();
        
        if (lastActivity === yesterday) {
            this.data.streak++;
            this.addPoints(this.pointsConfig.streakBonus * this.data.streak, 'Streak bonus');
        } else if (lastActivity !== today) {
            this.data.streak = 0;
        }
        
        this.data.lastActivity = new Date().toISOString();
        this.checkBadges();
        this.save();
    },
    
    dailyCheckIn() {
        const today = new Date().toDateString();
        if (this.data.dailyCheckIn === today) {
            return { success: false, message: 'Sudah check-in hari ini!' };
        }
        
        this.data.dailyCheckIn = today;
        this.data.streak++;
        const points = this.addPoints(this.pointsConfig.dailyCheckIn + (this.data.streak * this.pointsConfig.streakBonus), 'Daily check-in');
        this.checkBadges();
        this.save();
        
        return { 
            success: true, 
            message: `✅ Check-in berhasil! +${points.points} points`,
            streak: this.data.streak,
            totalPoints: this.data.points
        };
    },
    
    checkBadges() {
        const earnedBadges = [];
        
        // Check each badge requirement
        if (this.data.streak >= 7 && !this.data.badges.includes('week_warrior')) {
            this.data.badges.push('week_warrior');
            earnedBadges.push(this.badges.find(b => b.id === 'week_warrior'));
        }
        
        if (this.data.streak >= 30 && !this.data.badges.includes('consistent')) {
            this.data.badges.push('consistent');
            earnedBadges.push(this.badges.find(b => b.id === 'consistent'));
        }
        
        if (this.data.level >= 10 && !this.data.badges.includes('champion')) {
            this.data.badges.push('champion');
            earnedBadges.push(this.badges.find(b => b.id === 'champion'));
        }
        
        this.save();
        return earnedBadges;
    },
    
    unlockBadge(badgeId) {
        if (!this.data.badges.includes(badgeId)) {
            this.data.badges.push(badgeId);
            this.save();
            return this.badges.find(b => b.id === badgeId);
        }
        return null;
    },
    
    getProgress() {
        const levelThresholds = [0, 50, 150, 300, 500, 750, 1050, 1400, 1800, 2250, 2750];
        const currentThreshold = levelThresholds[this.data.level - 1] || 0;
        const nextThreshold = levelThresholds[this.data.level] || levelThresholds[levelThresholds.length - 1];
        const progress = ((this.data.points - currentThreshold) / (nextThreshold - currentThreshold)) * 100;
        
        return {
            level: this.data.level,
            points: this.data.points,
            streak: this.data.streak,
            progress: Math.min(progress, 100),
            nextLevel: nextThreshold,
            badges: this.data.badges.length,
            totalBadges: this.badges.length
        };
    },
    
    getStatusCard() {
        const progress = this.getProgress();
        return `🎮 **Status Kamu**

🏅 Level: ${progress.level}
⭐ Points: ${progress.points}
🔥 Streak: ${progress.streak} hari
🎖️ Badges: ${progress.badges}/${progress.totalBadges}

📊 Progress ke Level ${progress.level + 1}: ${progress.progress.toFixed(0)}%
${'█'.repeat(Math.floor(progress.progress / 10))}${'░'.repeat(10 - Math.floor(progress.progress / 10))} 

💡 Tips: Check-in setiap hari untuk streak bonus!`;
    }
};

gamificationSystem.init();

// ============================================
// RESOURCE RECOMMENDATIONS
// ============================================
const resourceLibrary = {
    articles: [
        { id: 1, title: 'Mengenal Anxiety dan Cara Mengatasinya', topic: 'cemas', url: '#artikel-anxiety', emoji: '📖' },
        { id: 2, title: 'Tanda-tanda Depresi pada Remaja', topic: 'depresi', url: '#artikel-depresi', emoji: '📖' },
        { id: 3, title: 'Teknik Manajemen Stres untuk Pelajar', topic: 'stres', url: '#artikel-stres', emoji: '📖' },
        { id: 4, title: 'Membangun Kepercayaan Diri', topic: 'confidence', url: '#artikel-confidence', emoji: '📖' },
        { id: 5, title: 'Mengatasi Bullying di Sekolah', topic: 'bullying', url: '#artikel-bullying', emoji: '📖' },
        { id: 6, title: 'Komunikasi Sehat dalam Keluarga', topic: 'keluarga', url: '#artikel-keluarga', emoji: '📖' },
        { id: 7, title: 'Tips Tidur Berkualitas', topic: 'tidur', url: '#artikel-tidur', emoji: '📖' },
        { id: 8, title: 'Menemukan Motivasi Belajar', topic: 'motivasi', url: '#artikel-motivasi', emoji: '📖' }
    ],
    videos: [
        { id: 1, title: 'Guided Meditation 5 Menit', topic: 'relaksasi', url: '#video-meditation', emoji: '🎬' },
        { id: 2, title: 'Teknik Pernapasan untuk Panik', topic: 'cemas', url: '#video-breathing', emoji: '🎬' },
        { id: 3, title: 'Self-Compassion Exercise', topic: 'depresi', url: '#video-selfcompassion', emoji: '🎬' },
        { id: 4, title: 'Progressive Muscle Relaxation', topic: 'stres', url: '#video-pmr', emoji: '🎬' }
    ],
    tools: [
        { id: 1, title: 'Tes Kecemasan GAD-7', topic: 'cemas', url: 'pages/tes-mental/tes-mental.html', emoji: '🧪' },
        { id: 2, title: 'Tes Depresi PHQ-9', topic: 'depresi', url: 'pages/tes-mental/tes-mental.html', emoji: '🧪' },
        { id: 3, title: 'Mood Tracker', topic: 'general', url: '#mood-tracker', emoji: '📊' },
        { id: 4, title: 'Ruang Relaksasi', topic: 'relaksasi', url: 'pages/relaksasi/relaksasi.html', emoji: '🧘' }
    ],
    
    getRecommendations(topics, limit = 5) {
        const allResources = [...this.articles, ...this.videos, ...this.tools];
        
        // Score resources based on topic match
        const scored = allResources.map(r => ({
            ...r,
            score: topics.includes(r.topic) ? 2 : (r.topic === 'general' ? 1 : 0)
        }));
        
        // Sort by score and return top items
        return scored
            .filter(r => r.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);
    },
    
    formatRecommendations(topics) {
        const recs = this.getRecommendations(topics);
        if (recs.length === 0) return '';
        
        return `\n\n📚 **Resources yang Mungkin Membantu:**\n${recs.map(r => `${r.emoji} ${r.title}`).join('\n')}`;
    }
};

// ============================================
// PROGRESS TRACKING SYSTEM
// ============================================
const progressTracker = {
    milestones: [],
    goals: [],
    
    init() {
        const saved = localStorage.getItem('sipakainge_progress');
        if (saved) {
            const data = JSON.parse(saved);
            this.milestones = data.milestones || [];
            this.goals = data.goals || [];
        }
    },
    
    save() {
        localStorage.setItem('sipakainge_progress', JSON.stringify({
            milestones: this.milestones,
            goals: this.goals
        }));
    },
    
    addMilestone(title, category) {
        this.milestones.push({
            id: 'milestone_' + Date.now(),
            title,
            category,
            achievedAt: new Date().toISOString()
        });
        this.save();
    },
    
    setGoal(title, targetDate, category) {
        const goal = {
            id: 'goal_' + Date.now(),
            title,
            targetDate,
            category,
            createdAt: new Date().toISOString(),
            completed: false,
            progress: 0
        };
        this.goals.push(goal);
        this.save();
        return goal;
    },
    
    updateGoalProgress(goalId, progress) {
        const goal = this.goals.find(g => g.id === goalId);
        if (goal) {
            goal.progress = progress;
            if (progress >= 100) {
                goal.completed = true;
                goal.completedAt = new Date().toISOString();
            }
            this.save();
        }
    },
    
    getProgressSummary() {
        const recentMilestones = this.milestones.slice(-5);
        const activeGoals = this.goals.filter(g => !g.completed);
        const completedGoals = this.goals.filter(g => g.completed).length;
        
        return {
            recentMilestones,
            activeGoals,
            completedGoals,
            totalMilestones: this.milestones.length
        };
    }
};

progressTracker.init();

// ============================================
// INTELLIGENT USER PROFILE SYSTEM
// ============================================
const userProfileSystem = {
    profile: {
        id: null,
        nickname: null,
        grade: null, // kelas 10, 11, 12
        visitCount: 0,
        firstVisit: null,
        lastVisit: null,
        totalMessages: 0,
        preferredLanguage: 'formal', // formal, casual, mixed
        communicationStyle: 'balanced', // brief, balanced, detailed
        emotionalTendency: 'neutral', // positive, neutral, negative, fluctuating
        topicsDiscussed: [],
        issuesHistory: [],
        progressNotes: [],
        feedbackHistory: [],
        achievements: [],
        riskLevel: 'normal' // normal, elevated, high, critical
    },
    
    init() {
        const saved = localStorage.getItem('sipakainge_user_profile');
        if (saved) {
            Object.assign(this.profile, JSON.parse(saved));
            this.profile.visitCount++;
            this.profile.lastVisit = new Date().toISOString();
        } else {
            this.profile.id = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            this.profile.firstVisit = new Date().toISOString();
            this.profile.lastVisit = new Date().toISOString();
            this.profile.visitCount = 1;
        }
        this.save();
    },
    
    save() {
        localStorage.setItem('sipakainge_user_profile', JSON.stringify(this.profile));
    },
    
    updateCommunicationStyle(messageLength) {
        const avgLength = this.profile.totalMessages > 0 
            ? (this.profile.totalMessages * (this.profile.communicationStyle === 'brief' ? 20 : this.profile.communicationStyle === 'detailed' ? 100 : 50) + messageLength) / (this.profile.totalMessages + 1)
            : messageLength;
        
        if (avgLength < 30) this.profile.communicationStyle = 'brief';
        else if (avgLength > 80) this.profile.communicationStyle = 'detailed';
        else this.profile.communicationStyle = 'balanced';
        
        this.save();
    },
    
    addTopic(topic) {
        if (!this.profile.topicsDiscussed.includes(topic)) {
            this.profile.topicsDiscussed.push(topic);
        }
        this.save();
    },
    
    addIssue(issue, severity) {
        this.profile.issuesHistory.push({
            issue,
            severity,
            timestamp: new Date().toISOString(),
            resolved: false
        });
        
        // Update risk level
        this.updateRiskLevel();
        this.save();
    },
    
    updateRiskLevel() {
        const recentIssues = this.profile.issuesHistory.filter(i => {
            const daysSince = (new Date() - new Date(i.timestamp)) / (1000 * 60 * 60 * 24);
            return daysSince < 7;
        });
        
        const severeCount = recentIssues.filter(i => i.severity === 'severe').length;
        const moderateCount = recentIssues.filter(i => i.severity === 'moderate').length;
        
        if (severeCount >= 2 || this.profile.issuesHistory.some(i => i.issue === 'selfHarm')) {
            this.profile.riskLevel = 'critical';
        } else if (severeCount >= 1 || moderateCount >= 3) {
            this.profile.riskLevel = 'high';
        } else if (moderateCount >= 1) {
            this.profile.riskLevel = 'elevated';
        } else {
            this.profile.riskLevel = 'normal';
        }
    },
    
    addProgressNote(note) {
        this.profile.progressNotes.push({
            note,
            timestamp: new Date().toISOString()
        });
        this.save();
    },
    
    addFeedback(rating, comment) {
        this.profile.feedbackHistory.push({
            rating,
            comment,
            timestamp: new Date().toISOString()
        });
        this.save();
    },
    
    unlockAchievement(id, title) {
        if (!this.profile.achievements.find(a => a.id === id)) {
            this.profile.achievements.push({
                id,
                title,
                unlockedAt: new Date().toISOString()
            });
            this.save();
            return true;
        }
        return false;
    },
    
    getInsights() {
        return {
            isReturningUser: this.profile.visitCount > 1,
            isFrequentUser: this.profile.totalMessages > 20,
            hasUnresolvedIssues: this.profile.issuesHistory.filter(i => !i.resolved).length > 0,
            dominantMood: this.profile.emotionalTendency,
            riskLevel: this.profile.riskLevel,
            recentTopics: this.profile.topicsDiscussed.slice(-5)
        };
    }
};

// Initialize user profile
userProfileSystem.init();

// ============================================
// CONVERSATION CONTEXT & STATE MANAGEMENT
// ============================================
const conversationContext = {
    currentTopic: null,
    previousTopics: [],
    messageCount: 0,
    userMood: 'neutral',
    lastIntent: null,
    entities: {
        userName: null,
        mentionedIssues: [],
        preferredTime: null,
        severity: 'normal'
    },
    sessionStart: new Date(),
    awaitingFollowUp: false,
    followUpType: null,
    conversationHistory: [],
    dialogState: {
        isMultiTurn: false,
        currentFlow: null,
        flowStep: 0,
        flowData: {},
        pendingQuestion: null,
        expectedResponseType: null
    },
    emotionTrack: [],
    userProfile: {
        expressiveness: 'normal',
        preferredResponseStyle: 'supportive'
    }
};

// ============================================
// MULTI-TURN DIALOG FLOWS
// ============================================
const dialogFlows = {
    bookingKonseling: {
        name: 'Booking Konseling',
        steps: [
            { id: 'type', question: 'Jenis konseling apa yang kamu butuhkan?', options: ['Konseling Individu', 'Konseling Kelompok', 'Konseling Karir', 'Tidak Yakin'] },
            { id: 'urgency', question: 'Seberapa urgent kebutuhanmu?', options: ['Segera (hari ini)', 'Minggu ini', 'Kapan saja'] },
            { id: 'preference', question: 'Preferensi waktu?', options: ['Jam istirahat', 'Setelah pulang sekolah', 'Akhir pekan', 'Fleksibel'] },
            { id: 'contact', question: 'Bagaimana kami bisa menghubungimu untuk konfirmasi?', options: ['WhatsApp', 'Langsung di sekolah', 'Tidak perlu konfirmasi'] },
            { id: 'confirm', question: 'Siap untuk booking?', isConfirmation: true }
        ],
        onComplete: (data) => `✅ Booking konseling ${data.type} telah dicatat!\n\n📋 Detail:\n• Jenis: ${data.type}\n• Urgency: ${data.urgency}\n• Waktu: ${data.preference}\n• Kontak: ${data.contact}\n\nGuru BK akan segera menghubungimu. Terima kasih!`
    },
    tesMental: {
        name: 'Panduan Tes Mental',
        steps: [
            { id: 'concern', question: 'Apa yang sedang kamu rasakan akhir-akhir ini?', options: ['Cemas/Khawatir', 'Sedih/Murung', 'Stres', 'Kurang Motivasi', 'Tidak Yakin'] },
            { id: 'duration', question: 'Sudah berapa lama kamu merasakan ini?', options: ['Baru beberapa hari', '1-2 minggu', 'Lebih dari sebulan', 'Sudah lama'] },
            { id: 'impact', question: 'Seberapa besar pengaruhnya ke aktivitas sehari-hari?', options: ['Sedikit', 'Cukup mengganggu', 'Sangat mengganggu'] },
            { id: 'recommendation', question: '', isRecommendation: true }
        ],
        onComplete: (data) => {
            let recommendation = '';
            if (data.concern === 'Cemas/Khawatir') {
                recommendation = '🧪 Tes GAD-7 (Kecemasan)';
            } else if (data.concern === 'Sedih/Murung') {
                recommendation = '🧪 Tes PHQ-9 (Depresi)';
            } else if (data.concern === 'Stres') {
                recommendation = '🧪 Tes Tingkat Stres';
            } else {
                recommendation = '🧪 Tes Kesehatan Mental Umum';
            }
            return `📊 Berdasarkan jawabanmu:\n\n**Rekomendasi:** ${recommendation}\n\nTes ini akan membantu memahami kondisimu lebih baik. Hasilnya bersifat rahasia dan bisa menjadi langkah awal untuk mendapat bantuan yang tepat.\n\n🔗 Klik menu "Tes Mental" untuk memulai.`;
        }
    },
    assessmentAwal: {
        name: 'Assessment Awal',
        steps: [
            { id: 'greeting', question: 'Halo! Sebelum kita mulai, boleh saya tahu namamu? (atau ketik "skip" jika tidak mau)', freeText: true },
            { id: 'feeling', question: 'Bagaimana perasaanmu hari ini?', options: ['😊 Baik', '😐 Biasa saja', '😔 Kurang baik', '😢 Buruk'] },
            { id: 'reason', question: 'Ada hal khusus yang ingin kamu ceritakan atau tanyakan?', freeText: true },
            { id: 'complete', question: '', isComplete: true }
        ],
        onComplete: (data) => {
            const name = data.greeting && data.greeting.toLowerCase() !== 'skip' ? data.greeting : 'teman';
            if (userProfileSystem.profile.nickname === null && data.greeting && data.greeting.toLowerCase() !== 'skip') {
                userProfileSystem.profile.nickname = data.greeting;
                userProfileSystem.save();
            }
            return `Terima kasih ${name}! Saya siap membantu. ${data.reason ? `\n\nKamu menyebutkan: "${data.reason}"\n\nMari kita bahas lebih lanjut.` : 'Silakan ceritakan apa yang ingin kamu bicarakan.'}`;
        }
    }
};

// ============================================
// INTELLIGENT TYPING SYSTEM
// ============================================
const typingSystem = {
    baseSpeed: 30, // ms per character
    variationRange: 0.3, // 30% variation
    thinkingPhrases: ['Hmm...', 'Sebentar ya...', 'Saya pikir...', 'Baik...'],
    
    calculateDelay(responseLength, complexity = 'normal') {
        const complexityMultiplier = {
            simple: 0.6,
            normal: 1,
            complex: 1.4,
            emotional: 1.6
        };
        
        const baseDelay = Math.min(responseLength * this.baseSpeed, 3000);
        const variation = baseDelay * this.variationRange * (Math.random() - 0.5);
        const multiplier = complexityMultiplier[complexity] || 1;
        
        return Math.max(600, (baseDelay + variation) * multiplier);
    },
    
    getTypingStages(responseLength) {
        if (responseLength < 100) return ['typing'];
        if (responseLength < 300) return ['typing', 'pause', 'typing'];
        return ['thinking', 'typing', 'pause', 'typing'];
    },
    
    async simulateTyping(callback, responseLength, complexity) {
        const stages = this.getTypingStages(responseLength);
        const totalDelay = this.calculateDelay(responseLength, complexity);
        const stageDelay = totalDelay / stages.length;
        
        for (const stage of stages) {
            if (stage === 'thinking') {
                await this.showThinking(callback);
            } else if (stage === 'pause') {
                await this.pause(stageDelay * 0.3);
            } else {
                await this.pause(stageDelay);
            }
        }
    },
    
    showThinking(callback) {
        return new Promise(resolve => {
            const phrase = this.thinkingPhrases[Math.floor(Math.random() * this.thinkingPhrases.length)];
            callback('thinking', phrase);
            setTimeout(resolve, 800);
        });
    },
    
    pause(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};

// ============================================
// EMOTION TRACKING SYSTEM
// ============================================
const emotionTracker = {
    emotions: [],
    
    track(emotion, intensity = 1) {
        this.emotions.push({
            emotion,
            intensity,
            timestamp: new Date().toISOString()
        });
        
        // Keep only last 50 entries
        if (this.emotions.length > 50) {
            this.emotions.shift();
        }
        
        this.save();
    },
    
    save() {
        localStorage.setItem('sipakainge_emotion_track', JSON.stringify(this.emotions));
    },
    
    load() {
        const saved = localStorage.getItem('sipakainge_emotion_track');
        if (saved) {
            this.emotions = JSON.parse(saved);
        }
    },
    
    getRecentTrend(hours = 24) {
        const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000);
        const recent = this.emotions.filter(e => new Date(e.timestamp) > cutoff);
        
        if (recent.length === 0) return 'neutral';
        
        const positiveCount = recent.filter(e => ['positive', 'hopeful', 'calm'].includes(e.emotion)).length;
        const negativeCount = recent.filter(e => ['negative', 'anxious', 'sad', 'angry'].includes(e.emotion)).length;
        
        if (positiveCount > negativeCount * 1.5) return 'improving';
        if (negativeCount > positiveCount * 1.5) return 'declining';
        return 'stable';
    },
    
    getInsight() {
        const trend = this.getRecentTrend();
        const insights = {
            improving: 'Sepertinya mood-mu sedang membaik! Pertahankan ya 💪',
            declining: 'Aku perhatikan kamu sedang dalam fase sulit. Ingat, aku di sini untukmu.',
            stable: 'Kondisimu terlihat stabil. Ada yang ingin kamu ceritakan?'
        };
        return insights[trend];
    }
};

emotionTracker.load();

// ============================================
// PROACTIVE SUGGESTION SYSTEM
// ============================================
const proactiveSuggestions = {
    triggers: {
        timeOfDay: () => {
            const hour = new Date().getHours();
            if (hour >= 22 || hour < 5) {
                return { suggestion: 'Sudah malam, jangan lupa istirahat ya! Tidur cukup penting untuk kesehatan mental.', priority: 'medium' };
            }
            if (hour >= 6 && hour < 8) {
                return { suggestion: 'Selamat pagi! Semoga hari ini menyenangkan. Jangan lupa sarapan ya!', priority: 'low' };
            }
            return null;
        },
        
        emotionTrend: () => {
            const trend = emotionTracker.getRecentTrend();
            if (trend === 'declining') {
                return { suggestion: 'Aku perhatikan beberapa waktu terakhir kamu sedang banyak pikiran. Mau cerita?', priority: 'high' };
            }
            return null;
        },
        
        inactivity: () => {
            const lastVisit = userProfileSystem.profile.lastVisit;
            if (lastVisit) {
                const daysSince = (new Date() - new Date(lastVisit)) / (1000 * 60 * 60 * 24);
                if (daysSince > 7) {
                    return { suggestion: 'Sudah lama kita tidak ngobrol. Bagaimana kabarmu?', priority: 'medium' };
                }
            }
            return null;
        },
        
        unresolvedIssues: () => {
            const unresolved = userProfileSystem.profile.issuesHistory.filter(i => !i.resolved);
            if (unresolved.length > 0) {
                const lastIssue = unresolved[unresolved.length - 1];
                return { suggestion: `Terakhir kita bicara tentang ${lastIssue.issue}. Bagaimana perkembangannya?`, priority: 'medium' };
            }
            return null;
        }
    },
    
    getSuggestion() {
        const suggestions = [];
        
        for (const [name, trigger] of Object.entries(this.triggers)) {
            const result = trigger();
            if (result) {
                suggestions.push({ ...result, source: name });
            }
        }
        
        // Return highest priority suggestion
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        suggestions.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
        
        return suggestions[0] || null;
    }
};

// ============================================
// QUESTION TYPE DETECTION
// ============================================
const questionPatterns = {
    whatIs: /^(apa|apakah|apa itu|apa sih|apaan)\s/i,
    howTo: /^(bagaimana|gimana|caranya|cara|gmn)\s/i,
    canI: /^(bisa|boleh|bisakah|bolehkah|dapat|dapatkah)\s/i,
    where: /^(dimana|di mana|dmn|lokasi|tempat)\s/i,
    when: /^(kapan|jam berapa|waktu|jadwal)\s/i,
    why: /^(kenapa|mengapa|knp|alasan)\s/i,
    who: /^(siapa|sama siapa)\s/i,
    howMuch: /^(berapa|brp|harga|biaya|tarif)\s/i,
    yesNo: /^(apakah|apa|kah)\s.*\?$/i,
    request: /^(tolong|minta|mau|ingin|pengen|pingin)\s/i,
    complaint: /^(saya|aku|gue|gw).*(tidak|nggak|gak|susah|sulit)/i
};

// ============================================
// INTENT PATTERNS WITH REGEX
// ============================================
const intentPatterns = {
    greetings: {
        patterns: [
            /^(hai|halo|hi|hello|hey|hei)$/i,
            /^(selamat\s+(pagi|siang|sore|malam))$/i,
            /^(assalamualaikum|assalamu'alaikum)$/i,
            /^(apa kabar|gmn kabarnya)$/i,
            /^(permisi|excuse me)$/i,
            /^p$/i
        ],
        weight: 10
    },
    thanks: {
        patterns: [
            /^(terima\s*kasih|terimakasih|makasih|thanks|thx|thank you)$/i,
            /(makasih|thanks|terima kasih).*(ya|banget|banyak)?$/i,
            /^(oke|ok|sip|mantap|baik).*(makasih|thanks)?$/i
        ],
        weight: 10
    },
    farewell: {
        patterns: [
            /^(bye|dadah|sampai jumpa|selamat tinggal)$/i,
            /(sampai|see).*(nanti|lagi|jumpa)/i
        ],
        weight: 10
    },
    askingTes: {
        patterns: [
            /(mau|ingin|pengen|cara).*(tes|test)/i,
            /(tes|test).*(mental|kesehatan|psikologi)/i,
            /(cek|periksa).*(mental|kondisi|kesehatan)/i,
            /^(mulai tes|ikut tes|tes sekarang)/i
        ],
        weight: 8
    },
    askingKonseling: {
        patterns: [
            /(mau|ingin|butuh|perlu).*(konseling|konsultasi|curhat|bicara)/i,
            /(booking|daftar|jadwal).*(konseling|konsultasi|bk)/i,
            /(ketemu|bertemu|bicara).*(guru bk|konselor|psikolog)/i,
            /^(konseling|konsultasi|curhat)/i
        ],
        weight: 8
    },
    askingJadwal: {
        patterns: [
            /(kapan|jam berapa|waktu|hari apa).*(buka|tersedia|bisa|konseling)/i,
            /(jadwal|schedule).*(konseling|bk|layanan)/i,
            /(booking|reservasi|janji)/i
        ],
        weight: 8
    },
    askingHarga: {
        patterns: [
            /(berapa|brp).*(harga|biaya|tarif|bayar|ongkos)/i,
            /(harga|biaya|tarif).*(konseling|tes|layanan)/i,
            /(gratis|free|berbayar)/i,
            /^(mahal|murah)/i
        ],
        weight: 8
    },
    expressingCemas: {
        patterns: [
            /(saya|aku|gue|gw).*(cemas|takut|khawatir|gelisah|panik|anxiety)/i,
            /(merasa|ngerasa|rasanya).*(cemas|takut|khawatir|gelisah)/i,
            /(deg-degan|grogi|nervous)/i,
            /(takut|cemas).*(ujian|tes|presentasi|nilai)/i,
            /overthinking/i
        ],
        weight: 9
    },
    expressingDepresi: {
        patterns: [
            /(saya|aku|gue|gw).*(depresi|sedih|murung|down|hopeless)/i,
            /(merasa|ngerasa).*(sedih|hampa|kosong|tidak berguna)/i,
            /(tidak|nggak|gak).*(semangat|minat|motivasi)/i,
            /(putus asa|menyerah|lelah hidup)/i,
            /(sedih|murung).*(terus|berkepanjangan|lama)/i
        ],
        weight: 9
    },
    expressingStres: {
        patterns: [
            /(saya|aku|gue|gw).*(stres|stress|tertekan|burnout)/i,
            /(merasa|ngerasa).*(stres|tertekan|kewalahan|overwhelmed)/i,
            /(tugas|pr|deadline|ujian).*(menumpuk|banyak|numpuk)/i,
            /(capek|lelah|exhausted).*(banget|sekali)?/i
        ],
        weight: 9
    },
    expressingSelfHarm: {
        patterns: [
            /(ingin|mau|pengen).*(mati|bunuh diri|suicide|mengakhiri)/i,
            /(melukai|menyakiti).*(diri sendiri|diri)/i,
            /(self harm|self-harm|selfharm)/i,
            /(tidak|nggak).*(tahan|kuat).*(lagi|hidup)/i,
            /(lebih baik).*(mati|tidak ada)/i
        ],
        weight: 15,
        isCrisis: true
    },
    askingBullying: {
        patterns: [
            /(di|kena).*(bully|bullying|intimidasi)/i,
            /(teman|orang).*(ganggu|ejek|hina|siksa)/i,
            /(dikucilkan|dijauhi|diabaikan)/i,
            /(cyberbullying|bully online)/i
        ],
        weight: 9
    },
    askingRelationship: {
        patterns: [
            /(masalah|curhat).*(pacar|pacaran|cinta|gebetan)/i,
            /(putus|diputusin|breakup)/i,
            /(patah hati|galau|sakit hati)/i,
            /(toxic|posesif|selingkuh)/i
        ],
        weight: 7
    },
    askingKeluarga: {
        patterns: [
            /(masalah|konflik).*(keluarga|rumah|orang tua|ortu)/i,
            /(orang tua|ayah|ibu|mama|papa).*(bertengkar|cerai|pisah)/i,
            /(broken home)/i,
            /(tidak|nggak).*(harmonis|akur|rukun)/i
        ],
        weight: 8
    },
    askingMotivasi: {
        patterns: [
            /(tidak|nggak|kurang).*(semangat|motivasi)/i,
            /(malas|males).*(belajar|sekolah)/i,
            /(butuh|perlu).*(motivasi|semangat|inspirasi)/i,
            /(bosan|jenuh).*(sekolah|belajar)/i
        ],
        weight: 7
    },
    askingTidur: {
        patterns: [
            /(susah|sulit|tidak bisa).*(tidur)/i,
            /(insomnia|kurang tidur|begadang)/i,
            /(mimpi buruk|nightmare)/i,
            /(ngantuk|lelah).*(terus|banget)/i
        ],
        weight: 7
    },
    askingKonsentrasi: {
        patterns: [
            /(susah|sulit|tidak bisa).*(fokus|konsentrasi)/i,
            /(mudah|gampang).*(terdistraksi|teralihkan)/i,
            /(tidak|nggak).*(konsen|fokus)/i,
            /adhd/i
        ],
        weight: 7
    },
    askingPercayaDiri: {
        patterns: [
            /(tidak|kurang|nggak).*(percaya diri|pede|confident)/i,
            /(minder|malu|grogi)/i,
            /(takut).*(bicara|tampil|presentasi)/i,
            /(rendah diri|insecure)/i
        ],
        weight: 7
    },
    askingMasaDepan: {
        patterns: [
            /(bingung|galau).*(jurusan|kuliah|karir|masa depan)/i,
            /(mau jadi apa|pilih jurusan|setelah lulus)/i,
            /(cita-cita|mimpi|ambisi)/i,
            /(tes minat|tes bakat)/i
        ],
        weight: 7
    }
};

// ============================================
// DYNAMIC RESPONSE TEMPLATES
// ============================================
const responseTemplates = {
    acknowledgment: {
        negative: [
            "Saya memahami perasaanmu, {issue} memang bisa sangat berat.",
            "Terima kasih sudah mau berbagi. Saya bisa merasakan {issue} yang kamu alami.",
            "Aku dengar kamu sedang mengalami {issue}. Perasaanmu valid."
        ],
        neutral: [
            "Baik, saya mengerti kamu ingin tahu tentang {topic}.",
            "Oke, mari saya bantu dengan informasi tentang {topic}."
        ],
        positive: [
            "Senang mendengarnya! Mari kita bahas tentang {topic}.",
            "Bagus! Saya siap membantu dengan {topic}."
        ]
    },
    action: {
        tes: "Kamu bisa langsung mengakses tes mental health di menu 'Tes Mental' atau klik tombol di bawah.",
        konseling: "Untuk booking konseling, klik 'Layanan' → pilih jenis konseling → klik 'Detail & Booking'.",
        jadwal: "Layanan BK tersedia Senin-Jumat jam 08:00-15:00. Booking bisa via website atau WhatsApp.",
        harga: "Sebagian besar layanan BK di sekolah GRATIS untuk siswa. Tes mental health juga gratis!",
        relaksasi: "Coba kunjungi menu 'Relaksasi' untuk guided meditation dan teknik pernapasan."
    },
    tips: {
        cemas: [
            "💡 Teknik 4-7-8: Tarik napas 4 detik → Tahan 7 detik → Hembuskan 8 detik",
            "💡 Grounding 5-4-3-2-1: Sebutkan 5 hal yang kamu lihat, 4 yang kamu dengar, 3 yang kamu sentuh, 2 yang kamu cium, 1 yang kamu rasa"
        ],
        stres: [
            "💡 Istirahat 5-10 menit setiap 45 menit belajar",
            "💡 Olahraga ringan 15-30 menit bisa menurunkan hormon stres",
            "💡 Tulis daftar tugas dan prioritaskan yang paling penting"
        ],
        tidur: [
            "💡 Hindari layar HP 1 jam sebelum tidur",
            "💡 Buat jadwal tidur yang konsisten, bahkan di weekend",
            "💡 Ruangan gelap dan sejuk membantu tidur lebih nyenyak"
        ],
        motivasi: [
            "💡 Tetapkan 1 tujuan kecil untuk hari ini",
            "💡 Rayakan setiap pencapaian kecil",
            "💡 Ingat alasan kenapa kamu memulai"
        ]
    },
    followUp: {
        concern: "Apakah ada hal lain yang ingin kamu ceritakan?",
        action: "Mau saya bantu untuk langkah selanjutnya?",
        clarify: "Bisa ceritakan lebih detail tentang situasinya?",
        check: "Bagaimana perasaanmu sekarang setelah kita bicara?"
    },
    crisis: {
        immediate: "🆘 Keselamatanmu adalah prioritas utama. Tolong segera hubungi:",
        resources: [
            "• Guru BK SMAN 1 Bone - Segera datang ke ruang BK",
            "• Into The Light Indonesia: 119 ext 8",
            "• Yayasan Pulih: (021) 788-42580",
            "• LSM Jangan Bunuh Diri: (021) 9696-9293"
        ],
        support: "Kamu tidak sendirian dalam ini. Banyak orang yang peduli dan ingin membantu."
    }
};

// ============================================
// SENTIMENT ANALYSIS SYSTEM
// ============================================
const sentimentLexicon = {
    positive: {
        words: ['senang', 'bahagia', 'bagus', 'baik', 'terima kasih', 'makasih', 'suka', 'hebat', 'mantap', 'keren', 'oke', 'siap', 'mau', 'ingin', 'tertarik', 'yes', 'ya', 'boleh', 'setuju', 'semangat', 'excited', 'happy', 'good', 'great', 'nice', 'thanks', 'thank', 'appreciate', 'love', 'awesome'],
        weight: 1
    },
    negative: {
        words: ['sedih', 'marah', 'kecewa', 'takut', 'cemas', 'khawatir', 'stres', 'stress', 'depresi', 'lelah', 'capek', 'bosan', 'malas', 'susah', 'sulit', 'gagal', 'buruk', 'jelek', 'benci', 'tidak bisa', 'tidak mau', 'males', 'hopeless', 'putus asa', 'menyerah', 'desperate', 'sad', 'angry', 'scared', 'anxious', 'depressed', 'tired', 'exhausted', 'hate', 'bad', 'terrible', 'awful'],
        weight: -1
    },
    urgent: {
        words: ['bunuh diri', 'suicide', 'mati', 'menyakiti diri', 'self harm', 'potong', 'luka', 'tidak tahan', 'desperate', 'darurat', 'emergency', 'tolong', 'help', 'segera', 'sekarang', 'crisis', 'krisis'],
        weight: -3
    }
};

// ============================================
// ADVANCED KEYWORD SYSTEM WITH WEIGHTS
// ============================================
const advancedKeywordMap = {
    greetings: {
        keywords: [
            { word: 'hai', weight: 3, exact: false },
            { word: 'halo', weight: 3, exact: false },
            { word: 'hi', weight: 3, exact: true },
            { word: 'hello', weight: 3, exact: false },
            { word: 'selamat pagi', weight: 4, exact: false },
            { word: 'selamat siang', weight: 4, exact: false },
            { word: 'selamat sore', weight: 4, exact: false },
            { word: 'selamat malam', weight: 4, exact: false },
            { word: 'apa kabar', weight: 4, exact: false },
            { word: 'assalamualaikum', weight: 4, exact: false },
            { word: 'permisi', weight: 3, exact: false },
            { word: 'hei', weight: 3, exact: false },
            { word: 'hey', weight: 3, exact: false },
            { word: 'p', weight: 2, exact: true },
            { word: 'woi', weight: 2, exact: false },
            { word: 'woiii', weight: 2, exact: false }
        ],
        priority: 1,
        contextBoost: 0,
        followUp: null
    },
    mentalHealth: {
        keywords: [
            { word: 'kesehatan mental', weight: 5, exact: false },
            { word: 'mental health', weight: 5, exact: false },
            { word: 'kesehatan jiwa', weight: 5, exact: false },
            { word: 'psikologi', weight: 4, exact: false },
            { word: 'psikologis', weight: 4, exact: false },
            { word: 'emosi', weight: 3, exact: false },
            { word: 'perasaan', weight: 3, exact: false },
            { word: 'mental', weight: 3, exact: false },
            { word: 'jiwa', weight: 3, exact: false },
            { word: 'psikis', weight: 4, exact: false },
            { word: 'mood', weight: 2, exact: false },
            { word: 'emosional', weight: 3, exact: false }
        ],
        priority: 2,
        contextBoost: 2,
        followUp: ['tes', 'konseling']
    },
    konseling: {
        keywords: [
            { word: 'konseling', weight: 5, exact: false },
            { word: 'konsultasi', weight: 5, exact: false },
            { word: 'bimbingan konseling', weight: 6, exact: false },
            { word: 'guru bk', weight: 5, exact: false },
            { word: 'bk', weight: 3, exact: true },
            { word: 'terapi', weight: 4, exact: false },
            { word: 'sesi', weight: 2, exact: false },
            { word: 'counseling', weight: 5, exact: false },
            { word: 'konsul', weight: 4, exact: false },
            { word: 'curhat', weight: 4, exact: false },
            { word: 'cerita', weight: 2, exact: false },
            { word: 'bicara dengan', weight: 3, exact: false },
            { word: 'ketemu guru', weight: 4, exact: false },
            { word: 'mau konsultasi', weight: 6, exact: false },
            { word: 'butuh konseling', weight: 6, exact: false }
        ],
        priority: 3,
        contextBoost: 2,
        followUp: ['jadwal', 'harga']
    },
    tes: {
        keywords: [
            { word: 'tes mental', weight: 6, exact: false },
            { word: 'tes kesehatan mental', weight: 7, exact: false },
            { word: 'tes kepribadian', weight: 5, exact: false },
            { word: 'tes psikologi', weight: 5, exact: false },
            { word: 'tes', weight: 3, exact: false },
            { word: 'test', weight: 3, exact: false },
            { word: 'assessment', weight: 4, exact: false },
            { word: 'evaluasi', weight: 3, exact: false },
            { word: 'mbti', weight: 4, exact: false },
            { word: 'phq', weight: 4, exact: false },
            { word: 'gad', weight: 4, exact: false },
            { word: 'minat bakat', weight: 5, exact: false },
            { word: 'diagnosa', weight: 4, exact: false },
            { word: 'cek mental', weight: 5, exact: false },
            { word: 'cek kondisi', weight: 4, exact: false }
        ],
        priority: 3,
        contextBoost: 2,
        followUp: ['konseling']
    },
    harga: {
        keywords: [
            { word: 'harga', weight: 5, exact: false },
            { word: 'biaya', weight: 5, exact: false },
            { word: 'tarif', weight: 5, exact: false },
            { word: 'bayar', weight: 4, exact: false },
            { word: 'berapa', weight: 3, exact: false },
            { word: 'gratis', weight: 5, exact: false },
            { word: 'free', weight: 4, exact: false },
            { word: 'murah', weight: 4, exact: false },
            { word: 'mahal', weight: 4, exact: false },
            { word: 'ongkos', weight: 4, exact: false },
            { word: 'biaya konseling', weight: 6, exact: false },
            { word: 'harga tes', weight: 6, exact: false },
            { word: 'berbayar', weight: 5, exact: false }
        ],
        priority: 3,
        contextBoost: 3,
        followUp: ['jadwal']
    },
    jadwal: {
        keywords: [
            { word: 'jadwal', weight: 5, exact: false },
            { word: 'booking', weight: 5, exact: false },
            { word: 'appointment', weight: 5, exact: false },
            { word: 'jam buka', weight: 5, exact: false },
            { word: 'jam tutup', weight: 5, exact: false },
            { word: 'kapan bisa', weight: 4, exact: false },
            { word: 'kapan', weight: 2, exact: false },
            { word: 'waktu', weight: 2, exact: false },
            { word: 'schedule', weight: 4, exact: false },
            { word: 'reservasi', weight: 4, exact: false },
            { word: 'janji temu', weight: 5, exact: false },
            { word: 'jam berapa', weight: 4, exact: false },
            { word: 'hari apa', weight: 4, exact: false },
            { word: 'bisa ketemu', weight: 4, exact: false }
        ],
        priority: 3,
        contextBoost: 3,
        followUp: null
    },
    cemas: {
        keywords: [
            { word: 'cemas', weight: 5, exact: false },
            { word: 'kecemasan', weight: 5, exact: false },
            { word: 'anxiety', weight: 5, exact: false },
            { word: 'anxious', weight: 5, exact: false },
            { word: 'takut', weight: 4, exact: false },
            { word: 'khawatir', weight: 4, exact: false },
            { word: 'gelisah', weight: 5, exact: false },
            { word: 'panik', weight: 5, exact: false },
            { word: 'panic', weight: 5, exact: false },
            { word: 'nervous', weight: 4, exact: false },
            { word: 'grogi', weight: 4, exact: false },
            { word: 'deg-degan', weight: 4, exact: false },
            { word: 'takut ujian', weight: 6, exact: false },
            { word: 'cemas ujian', weight: 6, exact: false },
            { word: 'overthinking', weight: 5, exact: false },
            { word: 'pikiran berlebihan', weight: 5, exact: false }
        ],
        priority: 4,
        contextBoost: 2,
        followUp: ['tes', 'konseling'],
        sentiment: 'negative'
    },
    depresi: {
        keywords: [
            { word: 'depresi', weight: 6, exact: false },
            { word: 'depression', weight: 6, exact: false },
            { word: 'depresif', weight: 5, exact: false },
            { word: 'sedih', weight: 4, exact: false },
            { word: 'sedih terus', weight: 6, exact: false },
            { word: 'murung', weight: 5, exact: false },
            { word: 'down', weight: 4, exact: false },
            { word: 'putus asa', weight: 6, exact: false },
            { word: 'hopeless', weight: 6, exact: false },
            { word: 'tidak ada harapan', weight: 7, exact: false },
            { word: 'kehilangan minat', weight: 6, exact: false },
            { word: 'tidak semangat', weight: 5, exact: false },
            { word: 'hampa', weight: 5, exact: false },
            { word: 'kosong', weight: 4, exact: false },
            { word: 'tidak berguna', weight: 6, exact: false }
        ],
        priority: 5,
        contextBoost: 2,
        followUp: ['tes', 'konseling', 'selfHarm'],
        sentiment: 'negative'
    },
    stres: {
        keywords: [
            { word: 'stres', weight: 5, exact: false },
            { word: 'stress', weight: 5, exact: false },
            { word: 'tekanan', weight: 4, exact: false },
            { word: 'beban', weight: 4, exact: false },
            { word: 'capek', weight: 3, exact: false },
            { word: 'lelah', weight: 3, exact: false },
            { word: 'burnout', weight: 6, exact: false },
            { word: 'overwhelmed', weight: 6, exact: false },
            { word: 'kewalahan', weight: 5, exact: false },
            { word: 'tugas menumpuk', weight: 5, exact: false },
            { word: 'deadline', weight: 4, exact: false },
            { word: 'pusing', weight: 3, exact: false },
            { word: 'mumet', weight: 4, exact: false },
            { word: 'stres sekolah', weight: 6, exact: false },
            { word: 'tekanan belajar', weight: 5, exact: false }
        ],
        priority: 4,
        contextBoost: 2,
        followUp: ['konseling'],
        sentiment: 'negative'
    },
    bullying: {
        keywords: [
            { word: 'bullying', weight: 6, exact: false },
            { word: 'bully', weight: 5, exact: false },
            { word: 'dibully', weight: 6, exact: false },
            { word: 'diganggu', weight: 5, exact: false },
            { word: 'digangguin', weight: 5, exact: false },
            { word: 'digejek', weight: 5, exact: false },
            { word: 'diejek', weight: 5, exact: false },
            { word: 'dikasari', weight: 5, exact: false },
            { word: 'intimidasi', weight: 6, exact: false },
            { word: 'pelecehan', weight: 6, exact: false },
            { word: 'dihina', weight: 5, exact: false },
            { word: 'dikata-katain', weight: 5, exact: false },
            { word: 'dikucilkan', weight: 5, exact: false },
            { word: 'dijauhi', weight: 4, exact: false },
            { word: 'cyberbullying', weight: 6, exact: false }
        ],
        priority: 5,
        contextBoost: 2,
        followUp: ['konseling'],
        sentiment: 'negative'
    },
    selfHarm: {
        keywords: [
            { word: 'bunuh diri', weight: 10, exact: false },
            { word: 'suicide', weight: 10, exact: false },
            { word: 'mati', weight: 5, exact: false },
            { word: 'ingin mati', weight: 10, exact: false },
            { word: 'melukai diri', weight: 9, exact: false },
            { word: 'self harm', weight: 9, exact: false },
            { word: 'menyakiti diri', weight: 9, exact: false },
            { word: 'potong tangan', weight: 9, exact: false },
            { word: 'silet', weight: 8, exact: false },
            { word: 'tidak mau hidup', weight: 10, exact: false },
            { word: 'lebih baik mati', weight: 10, exact: false },
            { word: 'akhiri hidup', weight: 10, exact: false },
            { word: 'tidak tahan lagi', weight: 7, exact: false }
        ],
        priority: 10, // Highest priority - crisis
        contextBoost: 0,
        followUp: null,
        sentiment: 'urgent',
        isCrisis: true
    },
    motivasi: {
        keywords: [
            { word: 'motivasi', weight: 5, exact: false },
            { word: 'semangat', weight: 4, exact: false },
            { word: 'malas belajar', weight: 5, exact: false },
            { word: 'tidak semangat', weight: 5, exact: false },
            { word: 'bosan sekolah', weight: 5, exact: false },
            { word: 'males', weight: 4, exact: false },
            { word: 'tidak mood', weight: 4, exact: false },
            { word: 'kurang motivasi', weight: 6, exact: false },
            { word: 'hilang semangat', weight: 5, exact: false },
            { word: 'inspirasi', weight: 4, exact: false }
        ],
        priority: 3,
        contextBoost: 1,
        followUp: ['konseling'],
        sentiment: 'negative'
    },
    persahabatan: {
        keywords: [
            { word: 'teman', weight: 3, exact: false },
            { word: 'sahabat', weight: 4, exact: false },
            { word: 'persahabatan', weight: 5, exact: false },
            { word: 'pertemanan', weight: 5, exact: false },
            { word: 'konflik teman', weight: 6, exact: false },
            { word: 'masalah teman', weight: 6, exact: false },
            { word: 'bertengkar', weight: 5, exact: false },
            { word: 'berantem', weight: 5, exact: false },
            { word: 'musuhan', weight: 5, exact: false },
            { word: 'tidak punya teman', weight: 6, exact: false },
            { word: 'dijauhi teman', weight: 6, exact: false },
            { word: 'susah bergaul', weight: 5, exact: false }
        ],
        priority: 3,
        contextBoost: 1,
        followUp: ['konseling'],
        sentiment: 'negative'
    },
    keluarga: {
        keywords: [
            { word: 'keluarga', weight: 4, exact: false },
            { word: 'orang tua', weight: 4, exact: false },
            { word: 'ortu', weight: 4, exact: false },
            { word: 'ayah', weight: 3, exact: false },
            { word: 'ibu', weight: 3, exact: false },
            { word: 'mama', weight: 3, exact: false },
            { word: 'papa', weight: 3, exact: false },
            { word: 'masalah keluarga', weight: 6, exact: false },
            { word: 'masalah rumah', weight: 6, exact: false },
            { word: 'broken home', weight: 6, exact: false },
            { word: 'perceraian', weight: 6, exact: false },
            { word: 'cerai', weight: 5, exact: false },
            { word: 'bertengkar di rumah', weight: 6, exact: false },
            { word: 'keluarga berantakan', weight: 6, exact: false }
        ],
        priority: 4,
        contextBoost: 1,
        followUp: ['konseling'],
        sentiment: 'negative'
    },
    masaDepan: {
        keywords: [
            { word: 'masa depan', weight: 5, exact: false },
            { word: 'karir', weight: 4, exact: false },
            { word: 'karier', weight: 4, exact: false },
            { word: 'kuliah', weight: 4, exact: false },
            { word: 'jurusan', weight: 4, exact: false },
            { word: 'universitas', weight: 4, exact: false },
            { word: 'pekerjaan', weight: 4, exact: false },
            { word: 'cita-cita', weight: 4, exact: false },
            { word: 'mimpi', weight: 3, exact: false },
            { word: 'bingung jurusan', weight: 6, exact: false },
            { word: 'mau jadi apa', weight: 5, exact: false },
            { word: 'setelah lulus', weight: 5, exact: false },
            { word: 'pilih jurusan', weight: 5, exact: false }
        ],
        priority: 3,
        contextBoost: 1,
        followUp: ['tes', 'konseling']
    },
    prestasi: {
        keywords: [
            { word: 'prestasi', weight: 4, exact: false },
            { word: 'nilai', weight: 3, exact: false },
            { word: 'rapor', weight: 4, exact: false },
            { word: 'ranking', weight: 4, exact: false },
            { word: 'peringkat', weight: 4, exact: false },
            { word: 'nilai jelek', weight: 6, exact: false },
            { word: 'nilai turun', weight: 6, exact: false },
            { word: 'gagal ujian', weight: 6, exact: false },
            { word: 'tidak lulus', weight: 5, exact: false },
            { word: 'remedial', weight: 5, exact: false },
            { word: 'tekanan nilai', weight: 6, exact: false }
        ],
        priority: 3,
        contextBoost: 1,
        followUp: ['konseling', 'stres'],
        sentiment: 'negative'
    },
    tidur: {
        keywords: [
            { word: 'tidur', weight: 4, exact: false },
            { word: 'insomnia', weight: 6, exact: false },
            { word: 'susah tidur', weight: 6, exact: false },
            { word: 'tidak bisa tidur', weight: 6, exact: false },
            { word: 'bangun malam', weight: 5, exact: false },
            { word: 'ngantuk', weight: 4, exact: false },
            { word: 'kurang tidur', weight: 5, exact: false },
            { word: 'begadang', weight: 4, exact: false },
            { word: 'mimpi buruk', weight: 5, exact: false },
            { word: 'nightmare', weight: 5, exact: false },
            { word: 'gangguan tidur', weight: 6, exact: false }
        ],
        priority: 3,
        contextBoost: 1,
        followUp: ['konseling']
    },
    sosialMedia: {
        keywords: [
            { word: 'sosmed', weight: 5, exact: false },
            { word: 'medsos', weight: 5, exact: false },
            { word: 'social media', weight: 5, exact: false },
            { word: 'instagram', weight: 4, exact: false },
            { word: 'tiktok', weight: 4, exact: false },
            { word: 'facebook', weight: 4, exact: false },
            { word: 'twitter', weight: 4, exact: false },
            { word: 'fomo', weight: 5, exact: false },
            { word: 'cyberbullying', weight: 6, exact: false },
            { word: 'hujatan online', weight: 6, exact: false },
            { word: 'kecanduan hp', weight: 5, exact: false },
            { word: 'kecanduan sosmed', weight: 6, exact: false }
        ],
        priority: 3,
        contextBoost: 1,
        followUp: ['konseling', 'addiction']
    },
    addiction: {
        keywords: [
            { word: 'kecanduan', weight: 5, exact: false },
            { word: 'addiction', weight: 5, exact: false },
            { word: 'addict', weight: 5, exact: false },
            { word: 'kecanduan game', weight: 6, exact: false },
            { word: 'main game terus', weight: 5, exact: false },
            { word: 'tidak bisa berhenti', weight: 5, exact: false },
            { word: 'terobsesi', weight: 5, exact: false },
            { word: 'gaming', weight: 3, exact: false },
            { word: 'online terus', weight: 4, exact: false }
        ],
        priority: 4,
        contextBoost: 1,
        followUp: ['konseling'],
        sentiment: 'negative'
    },
    bodyImage: {
        keywords: [
            { word: 'citra tubuh', weight: 5, exact: false },
            { word: 'body image', weight: 5, exact: false },
            { word: 'penampilan', weight: 3, exact: false },
            { word: 'merasa jelek', weight: 6, exact: false },
            { word: 'merasa gendut', weight: 5, exact: false },
            { word: 'terlalu kurus', weight: 5, exact: false },
            { word: 'tidak percaya diri dengan tubuh', weight: 6, exact: false },
            { word: 'malu dengan badan', weight: 6, exact: false },
            { word: 'body shaming', weight: 6, exact: false },
            { word: 'diet berlebihan', weight: 5, exact: false },
            { word: 'eating disorder', weight: 7, exact: false }
        ],
        priority: 4,
        contextBoost: 1,
        followUp: ['konseling'],
        sentiment: 'negative'
    },
    discrimination: {
        keywords: [
            { word: 'diskriminasi', weight: 6, exact: false },
            { word: 'rasisme', weight: 6, exact: false },
            { word: 'dibeda-bedakan', weight: 5, exact: false },
            { word: 'tidak adil', weight: 4, exact: false },
            { word: 'pilih kasih', weight: 5, exact: false },
            { word: 'karena suku', weight: 5, exact: false },
            { word: 'karena agama', weight: 5, exact: false },
            { word: 'minoritas', weight: 4, exact: false }
        ],
        priority: 4,
        contextBoost: 1,
        followUp: ['konseling'],
        sentiment: 'negative'
    },
    trauma: {
        keywords: [
            { word: 'trauma', weight: 6, exact: false },
            { word: 'traumatis', weight: 6, exact: false },
            { word: 'traumatic', weight: 6, exact: false },
            { word: 'ptsd', weight: 7, exact: false },
            { word: 'kejadian buruk', weight: 5, exact: false },
            { word: 'pengalaman buruk', weight: 5, exact: false },
            { word: 'masa lalu', weight: 3, exact: false },
            { word: 'flashback', weight: 5, exact: false },
            { word: 'teringat terus', weight: 5, exact: false },
            { word: 'mimpi buruk tentang', weight: 6, exact: false }
        ],
        priority: 5,
        contextBoost: 2,
        followUp: ['konseling'],
        sentiment: 'negative'
    },
    relationship: {
        keywords: [
            { word: 'pacar', weight: 4, exact: false },
            { word: 'pacaran', weight: 4, exact: false },
            { word: 'cinta', weight: 3, exact: false },
            { word: 'putus', weight: 4, exact: false },
            { word: 'putus cinta', weight: 5, exact: false },
            { word: 'breakup', weight: 5, exact: false },
            { word: 'patah hati', weight: 5, exact: false },
            { word: 'ditinggal pacar', weight: 6, exact: false },
            { word: 'toxic relationship', weight: 6, exact: false },
            { word: 'hubungan toxic', weight: 6, exact: false },
            { word: 'diputusin', weight: 5, exact: false },
            { word: 'galau', weight: 4, exact: false },
            { word: 'selingkuh', weight: 5, exact: false }
        ],
        priority: 3,
        contextBoost: 1,
        followUp: ['konseling'],
        sentiment: 'negative'
    },
    money: {
        keywords: [
            { word: 'uang', weight: 3, exact: false },
            { word: 'keuangan', weight: 4, exact: false },
            { word: 'finansial', weight: 4, exact: false },
            { word: 'tidak punya uang', weight: 5, exact: false },
            { word: 'masalah keuangan', weight: 6, exact: false },
            { word: 'keluarga miskin', weight: 5, exact: false },
            { word: 'tidak mampu', weight: 4, exact: false },
            { word: 'beasiswa', weight: 4, exact: false },
            { word: 'bantuan', weight: 3, exact: false }
        ],
        priority: 3,
        contextBoost: 1,
        followUp: ['konseling']
    },
    studyHabits: {
        keywords: [
            { word: 'cara belajar', weight: 5, exact: false },
            { word: 'teknik belajar', weight: 5, exact: false },
            { word: 'metode belajar', weight: 5, exact: false },
            { word: 'belajar efektif', weight: 5, exact: false },
            { word: 'tips belajar', weight: 5, exact: false },
            { word: 'susah belajar', weight: 5, exact: false },
            { word: 'tidak bisa belajar', weight: 5, exact: false },
            { word: 'study skills', weight: 5, exact: false },
            { word: 'kebiasaan belajar', weight: 5, exact: false }
        ],
        priority: 3,
        contextBoost: 1,
        followUp: ['konseling']
    },
    concentration: {
        keywords: [
            { word: 'konsentrasi', weight: 5, exact: false },
            { word: 'fokus', weight: 4, exact: false },
            { word: 'susah fokus', weight: 6, exact: false },
            { word: 'tidak fokus', weight: 5, exact: false },
            { word: 'tidak konsentrasi', weight: 5, exact: false },
            { word: 'mudah terdistraksi', weight: 5, exact: false },
            { word: 'distracted', weight: 4, exact: false },
            { word: 'adhd', weight: 5, exact: false },
            { word: 'sulit konsen', weight: 5, exact: false }
        ],
        priority: 3,
        contextBoost: 1,
        followUp: ['konseling', 'tes']
    },
    confidence: {
        keywords: [
            { word: 'percaya diri', weight: 5, exact: false },
            { word: 'kepercayaan diri', weight: 5, exact: false },
            { word: 'confidence', weight: 5, exact: false },
            { word: 'self esteem', weight: 5, exact: false },
            { word: 'tidak pede', weight: 5, exact: false },
            { word: 'minder', weight: 5, exact: false },
            { word: 'malu', weight: 3, exact: false },
            { word: 'takut bicara', weight: 5, exact: false },
            { word: 'public speaking', weight: 4, exact: false },
            { word: 'grogi tampil', weight: 5, exact: false },
            { word: 'tidak berani', weight: 4, exact: false }
        ],
        priority: 3,
        contextBoost: 1,
        followUp: ['konseling'],
        sentiment: 'negative'
    },
    anger: {
        keywords: [
            { word: 'marah', weight: 4, exact: false },
            { word: 'kemarahan', weight: 5, exact: false },
            { word: 'emosi', weight: 3, exact: false },
            { word: 'kesal', weight: 4, exact: false },
            { word: 'jengkel', weight: 4, exact: false },
            { word: 'temperamental', weight: 5, exact: false },
            { word: 'mudah marah', weight: 6, exact: false },
            { word: 'sering marah', weight: 6, exact: false },
            { word: 'tidak bisa kontrol emosi', weight: 6, exact: false },
            { word: 'anger management', weight: 5, exact: false },
            { word: 'meledak-ledak', weight: 5, exact: false }
        ],
        priority: 4,
        contextBoost: 1,
        followUp: ['konseling'],
        sentiment: 'negative'
    },
    loneliness: {
        keywords: [
            { word: 'kesepian', weight: 5, exact: false },
            { word: 'sendiri', weight: 3, exact: false },
            { word: 'lonely', weight: 5, exact: false },
            { word: 'sendirian', weight: 4, exact: false },
            { word: 'tidak punya teman', weight: 6, exact: false },
            { word: 'merasa sendiri', weight: 5, exact: false },
            { word: 'terisolasi', weight: 5, exact: false },
            { word: 'dikucilkan', weight: 5, exact: false },
            { word: 'tidak ada yang peduli', weight: 6, exact: false }
        ],
        priority: 4,
        contextBoost: 1,
        followUp: ['konseling'],
        sentiment: 'negative'
    },
    peerPressure: {
        keywords: [
            { word: 'tekanan teman', weight: 6, exact: false },
            { word: 'peer pressure', weight: 6, exact: false },
            { word: 'dipaksa teman', weight: 6, exact: false },
            { word: 'diajak teman', weight: 4, exact: false },
            { word: 'ikut-ikutan', weight: 4, exact: false },
            { word: 'tidak enak menolak', weight: 5, exact: false },
            { word: 'dibujuk teman', weight: 5, exact: false }
        ],
        priority: 3,
        contextBoost: 1,
        followUp: ['konseling']
    },
    timeManagement: {
        keywords: [
            { word: 'manajemen waktu', weight: 6, exact: false },
            { word: 'time management', weight: 6, exact: false },
            { word: 'susah bagi waktu', weight: 5, exact: false },
            { word: 'procrastination', weight: 5, exact: false },
            { word: 'menunda', weight: 4, exact: false },
            { word: 'suka menunda', weight: 5, exact: false },
            { word: 'tidak disiplin', weight: 4, exact: false },
            { word: 'tidak teratur', weight: 4, exact: false }
        ],
        priority: 3,
        contextBoost: 1,
        followUp: ['konseling']
    },
    examPrep: {
        keywords: [
            { word: 'persiapan ujian', weight: 6, exact: false },
            { word: 'ujian', weight: 3, exact: false },
            { word: 'exam', weight: 4, exact: false },
            { word: 'ulangan', weight: 4, exact: false },
            { word: 'uas', weight: 4, exact: false },
            { word: 'uts', weight: 4, exact: false },
            { word: 'ujian nasional', weight: 5, exact: false },
            { word: 'snbt', weight: 5, exact: false },
            { word: 'snbp', weight: 5, exact: false },
            { word: 'utbk', weight: 5, exact: false },
            { word: 'belajar ujian', weight: 5, exact: false }
        ],
        priority: 3,
        contextBoost: 1,
        followUp: ['stres', 'cemas']
    },
    thanks: {
        keywords: [
            { word: 'terima kasih', weight: 6, exact: false },
            { word: 'terimakasih', weight: 6, exact: false },
            { word: 'makasih', weight: 5, exact: false },
            { word: 'thanks', weight: 5, exact: false },
            { word: 'thank you', weight: 5, exact: false },
            { word: 'thx', weight: 4, exact: false },
            { word: 'appreciate', weight: 4, exact: false },
            { word: 'membantu sekali', weight: 5, exact: false },
            { word: 'sangat membantu', weight: 5, exact: false }
        ],
        priority: 1,
        contextBoost: 0,
        followUp: null
    }
};

// ============================================
// TYPO TOLERANCE - LEVENSHTEIN DISTANCE
// ============================================
function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }
    return dp[m][n];
}

function isSimilarWord(word1, word2, threshold = 2) {
    if (word1.length < 4 || word2.length < 4) {
        return word1 === word2;
    }
    return levenshteinDistance(word1.toLowerCase(), word2.toLowerCase()) <= threshold;
}

// ============================================
// TEXT PREPROCESSING
// ============================================
function preprocessText(text) {
    // Remove extra whitespace and convert to lowercase
    let processed = text.toLowerCase().trim().replace(/\s+/g, ' ');
    
    // Common Indonesian slang/typo corrections
    const corrections = {
        'gak': 'tidak',
        'ga': 'tidak',
        'ngga': 'tidak',
        'nggak': 'tidak',
        'gk': 'tidak',
        'g': 'tidak',
        'udah': 'sudah',
        'udh': 'sudah',
        'blm': 'belum',
        'yg': 'yang',
        'dgn': 'dengan',
        'utk': 'untuk',
        'krn': 'karena',
        'karna': 'karena',
        'bgt': 'banget',
        'bngt': 'banget',
        'bisa gak': 'bisa tidak',
        'gmn': 'gimana',
        'gmana': 'gimana',
        'org': 'orang',
        'lg': 'lagi',
        'skrg': 'sekarang',
        'hrs': 'harus',
        'jd': 'jadi',
        'kyk': 'kayak',
        'ky': 'kayak',
        'bkn': 'bukan',
        'tp': 'tapi',
        'tpi': 'tapi',
        'sm': 'sama',
        'bs': 'bisa',
        'dpt': 'dapat',
        'spt': 'seperti',
        'nnti': 'nanti',
        'sy': 'saya',
        'aq': 'aku',
        'ak': 'aku',
        'km': 'kamu',
        'kmu': 'kamu',
        'mrk': 'mereka',
        'sdh': 'sudah',
        'tdk': 'tidak',
        'blh': 'boleh',
        'mgkn': 'mungkin',
        'ckp': 'cukup',
        'sgt': 'sangat',
        'trs': 'terus',
        'brp': 'berapa',
        'dmn': 'dimana',
        'kpn': 'kapan',
        'knp': 'kenapa',
        'sbnrnya': 'sebenarnya',
        'sebenernya': 'sebenarnya',
        'gimana sih': 'bagaimana',
        'gmn sih': 'bagaimana',
        'plis': 'please',
        'pliss': 'please',
        'thx': 'terima kasih',
        'mksh': 'makasih',
        'mks': 'makasih'
    };
    
    // Apply corrections
    for (const [slang, formal] of Object.entries(corrections)) {
        const regex = new RegExp(`\\b${slang}\\b`, 'gi');
        processed = processed.replace(regex, formal);
    }
    
    return processed;
}

// ============================================
// SENTIMENT ANALYSIS FUNCTION
// ============================================
function analyzeSentiment(message) {
    const words = preprocessText(message).split(' ');
    let score = 0;
    let urgentDetected = false;
    
    // Check urgent words first (highest priority)
    for (const word of sentimentLexicon.urgent.words) {
        if (message.toLowerCase().includes(word)) {
            urgentDetected = true;
            score += sentimentLexicon.urgent.weight;
        }
    }
    
    if (urgentDetected) {
        return { mood: 'urgent', score: score, isUrgent: true };
    }
    
    // Count positive and negative words
    for (const word of words) {
        if (sentimentLexicon.positive.words.includes(word)) {
            score += sentimentLexicon.positive.weight;
        }
        if (sentimentLexicon.negative.words.includes(word)) {
            score += sentimentLexicon.negative.weight;
        }
    }
    
    // Also check phrases
    for (const phrase of sentimentLexicon.positive.words) {
        if (phrase.includes(' ') && message.toLowerCase().includes(phrase)) {
            score += 2;
        }
    }
    for (const phrase of sentimentLexicon.negative.words) {
        if (phrase.includes(' ') && message.toLowerCase().includes(phrase)) {
            score -= 2;
        }
    }
    
    let mood = 'neutral';
    if (score >= 2) mood = 'positive';
    else if (score <= -2) mood = 'negative';
    
    return { mood, score, isUrgent: false };
}

// ============================================
// ENHANCED INTENT DETECTION WITH PATTERN MATCHING
// ============================================
function detectIntentAdvanced(message) {
    const processedMessage = preprocessText(message);
    const words = processedMessage.split(' ');
    const lowerMessage = message.toLowerCase().trim();
    
    // Track all scores
    const intentScores = {};
    let matchedPatterns = [];
    
    // STEP 1: Check regex patterns first (highest accuracy)
    for (const [intent, config] of Object.entries(intentPatterns)) {
        for (const pattern of config.patterns) {
            if (pattern.test(lowerMessage)) {
                if (!intentScores[intent]) {
                    intentScores[intent] = { score: 0, matchedKeywords: [], matchedPatterns: [] };
                }
                intentScores[intent].score += config.weight;
                intentScores[intent].matchedPatterns.push(pattern.toString());
                
                // Check for crisis
                if (config.isCrisis) {
                    return {
                        intent: 'selfHarm',
                        score: 100,
                        confidence: 1.0,
                        matchedKeywords: [],
                        matchedPatterns: intentScores[intent].matchedPatterns,
                        isCrisis: true,
                        questionType: detectQuestionType(lowerMessage)
                    };
                }
            }
        }
    }
    
    // STEP 2: Check keyword-based scoring (fallback)
    for (const [intent, config] of Object.entries(advancedKeywordMap)) {
        if (!intentScores[intent]) {
            intentScores[intent] = { score: 0, matchedKeywords: [], matchedPatterns: [] };
        }
        
        for (const keyword of config.keywords) {
            let matched = false;
            
            if (keyword.exact) {
                matched = words.includes(keyword.word);
            } else {
                matched = processedMessage.includes(keyword.word);
                
                // Fuzzy matching for typos
                if (!matched && keyword.word.length >= 4) {
                    for (const word of words) {
                        if (isSimilarWord(word, keyword.word)) {
                            matched = true;
                            break;
                        }
                    }
                }
            }
            
            if (matched) {
                intentScores[intent].score += keyword.weight;
                intentScores[intent].matchedKeywords.push(keyword.word);
            }
        }
        
        // Context boost
        if (conversationContext.currentTopic && config.followUp?.includes(conversationContext.currentTopic)) {
            intentScores[intent].score += config.contextBoost || 0;
        }
    }
    
    // STEP 3: Map pattern intents to response intents
    const intentMapping = {
        'askingTes': 'tes',
        'askingKonseling': 'konseling',
        'askingJadwal': 'jadwal',
        'askingHarga': 'harga',
        'expressingCemas': 'cemas',
        'expressingDepresi': 'depresi',
        'expressingStres': 'stres',
        'expressingSelfHarm': 'selfHarm',
        'askingBullying': 'bullying',
        'askingRelationship': 'relationship',
        'askingKeluarga': 'keluarga',
        'askingMotivasi': 'motivasi',
        'askingTidur': 'tidur',
        'askingKonsentrasi': 'concentration',
        'askingPercayaDiri': 'confidence',
        'askingMasaDepan': 'masaDepan',
        'farewell': 'thanks'
    };
    
    // Apply mapping
    for (const [patternIntent, responseIntent] of Object.entries(intentMapping)) {
        if (intentScores[patternIntent] && intentScores[patternIntent].score > 0) {
            if (!intentScores[responseIntent]) {
                intentScores[responseIntent] = { score: 0, matchedKeywords: [], matchedPatterns: [] };
            }
            intentScores[responseIntent].score += intentScores[patternIntent].score;
            intentScores[responseIntent].matchedPatterns.push(...(intentScores[patternIntent].matchedPatterns || []));
        }
    }
    
    // STEP 4: Find best intent
    let bestIntent = 'default';
    let bestScore = 0;
    
    for (const [intent, data] of Object.entries(intentScores)) {
        // Skip pattern-only intents
        if (intentMapping[intent]) continue;
        
        if (data.score > bestScore) {
            bestScore = data.score;
            bestIntent = intent;
        }
    }
    
    // Calculate confidence
    const totalScore = Object.values(intentScores)
        .filter((_, i) => !intentMapping[Object.keys(intentScores)[i]])
        .reduce((sum, data) => sum + Math.max(0, data.score), 0);
    
    const confidence = totalScore > 0 ? Math.min(bestScore / totalScore, 1) : 0;
    
    // Require minimum threshold
    if (bestScore < 3) {
        bestIntent = 'default';
    }
    
    return {
        intent: bestIntent,
        score: bestScore,
        confidence,
        matchedKeywords: intentScores[bestIntent]?.matchedKeywords || [],
        matchedPatterns: intentScores[bestIntent]?.matchedPatterns || [],
        isCrisis: false,
        questionType: detectQuestionType(lowerMessage),
        allScores: intentScores
    };
}

// ============================================
// DETECT QUESTION TYPE
// ============================================
function detectQuestionType(message) {
    for (const [type, pattern] of Object.entries(questionPatterns)) {
        if (pattern.test(message)) {
            return type;
        }
    }
    
    if (message.includes('?')) return 'general_question';
    return 'statement';
}

// ============================================
// EXTRACT ENTITIES FROM MESSAGE
// ============================================
function extractEntities(message) {
    const entities = {
        timeReferences: [],
        issues: [],
        severity: 'normal',
        duration: null,
        subjects: []
    };
    
    const lowerMsg = message.toLowerCase();
    
    // Time references
    const timePatterns = {
        today: /(hari ini|sekarang|saat ini)/i,
        week: /(minggu ini|beberapa hari|akhir-akhir ini)/i,
        month: /(sebulan|bulan ini|beberapa minggu)/i,
        long: /(lama|berbulan-bulan|bertahun-tahun|sudah lama)/i
    };
    
    for (const [time, pattern] of Object.entries(timePatterns)) {
        if (pattern.test(lowerMsg)) {
            entities.timeReferences.push(time);
            if (time === 'long') entities.duration = 'chronic';
            else if (time === 'month') entities.duration = 'moderate';
            else entities.duration = 'recent';
        }
    }
    
    // Issue extraction
    const issueKeywords = {
        cemas: ['cemas', 'khawatir', 'takut', 'gelisah', 'panik'],
        stres: ['stres', 'stress', 'tertekan', 'overwhelmed', 'kewalahan'],
        depresi: ['depresi', 'sedih', 'murung', 'hopeless', 'putus asa'],
        tidur: ['tidur', 'insomnia', 'begadang', 'ngantuk'],
        keluarga: ['orang tua', 'keluarga', 'rumah', 'ayah', 'ibu'],
        bullying: ['bully', 'diganggu', 'diejek', 'dikucilkan'],
        relationship: ['pacar', 'pacaran', 'putus', 'cinta'],
        sekolah: ['sekolah', 'nilai', 'ujian', 'tugas', 'guru']
    };
    
    for (const [issue, keywords] of Object.entries(issueKeywords)) {
        if (keywords.some(k => lowerMsg.includes(k))) {
            entities.issues.push(issue);
        }
    }
    
    // Severity detection
    const severityPatterns = {
        severe: /(sangat|banget|parah|tidak tahan|desperate|mau mati)/i,
        moderate: /(cukup|lumayan|agak|kadang-kadang)/i,
        mild: /(sedikit|dikit|jarang)/i
    };
    
    if (severityPatterns.severe.test(lowerMsg)) entities.severity = 'severe';
    else if (severityPatterns.moderate.test(lowerMsg)) entities.severity = 'moderate';
    else if (severityPatterns.mild.test(lowerMsg)) entities.severity = 'mild';
    
    return entities;
}

// ============================================
// CONTEXT-AWARE RESPONSE BUILDER
// ============================================
function buildContextualResponse(intent, sentiment, entities, questionType, matchedKeywords) {
    let response = '';
    let parts = [];
    
    // PART 1: Acknowledgment based on sentiment
    if (sentiment.mood === 'negative' || sentiment.mood === 'urgent') {
        const issueText = entities.issues.length > 0 ? entities.issues[0] : 'hal ini';
        const ackTemplates = responseTemplates.acknowledgment.negative;
        let ack = ackTemplates[Math.floor(Math.random() * ackTemplates.length)];
        ack = ack.replace('{issue}', issueText);
        parts.push(ack);
    } else if (questionType !== 'statement' && intent !== 'greetings') {
        // For questions, acknowledge what they're asking
        const topicNames = {
            tes: 'tes kesehatan mental',
            konseling: 'layanan konseling',
            jadwal: 'jadwal layanan',
            harga: 'biaya layanan',
            cemas: 'kecemasan',
            depresi: 'perasaan yang kamu alami',
            stres: 'stres',
            bullying: 'bullying',
            relationship: 'hubungan',
            keluarga: 'masalah keluarga',
            motivasi: 'motivasi',
            tidur: 'masalah tidur',
            concentration: 'konsentrasi',
            confidence: 'kepercayaan diri',
            masaDepan: 'masa depan'
        };
        
        if (topicNames[intent]) {
            const neutralAck = responseTemplates.acknowledgment.neutral;
            let ack = neutralAck[Math.floor(Math.random() * neutralAck.length)];
            ack = ack.replace('{topic}', topicNames[intent]);
            parts.push(ack);
        }
    }
    
    // PART 2: Main response based on intent and question type
    const mainResponse = getMainResponse(intent, questionType, entities);
    parts.push(mainResponse);
    
    // PART 3: Tips if applicable
    if (['cemas', 'stres', 'tidur', 'motivasi'].includes(intent) && entities.severity !== 'severe') {
        const tips = responseTemplates.tips[intent];
        if (tips) {
            const randomTip = tips[Math.floor(Math.random() * tips.length)];
            parts.push(randomTip);
        }
    }
    
    // PART 4: Action item
    if (['tes', 'konseling', 'jadwal', 'harga'].includes(intent)) {
        parts.push(responseTemplates.action[intent]);
    } else if (entities.severity === 'severe' || sentiment.mood === 'urgent') {
        parts.push("Saya sangat menyarankan kamu untuk berbicara langsung dengan guru BK. Mereka terlatih untuk membantu.");
    } else if (['cemas', 'depresi', 'stres'].includes(intent)) {
        parts.push(responseTemplates.action.relaksasi);
    }
    
    // Combine parts
    response = parts.filter(p => p).join('\n\n');
    
    return response;
}

// ============================================
// GET MAIN RESPONSE BASED ON QUESTION TYPE
// ============================================
function getMainResponse(intent, questionType, entities) {
    // Direct answers based on question type
    const directAnswers = {
        tes: {
            whatIs: "Tes mental health adalah alat untuk mengevaluasi kondisi kesehatan mentalmu. Di SMAN 1 Bone, kami menyediakan tes kecemasan, depresi, dan minat bakat yang sudah tervalidasi.",
            howTo: "Cara melakukan tes sangat mudah: 1) Buka menu 'Tes Mental' 2) Pilih jenis tes 3) Jawab pertanyaan dengan jujur 4) Lihat hasil dan rekomendasinya.",
            canI: "Tentu bisa! Tes mental health kami terbuka untuk semua siswa SMAN 1 Bone. Hasilnya dijaga kerahasiaannya.",
            howMuch: "Tes mental health di website kami GRATIS untuk semua siswa SMAN 1 Bone.",
            default: "Kami menyediakan beberapa jenis tes: Tes Kecemasan (GAD-7), Tes Depresi (PHQ-9), dan Tes Minat Bakat. Semua tes bisa diakses gratis di menu 'Tes Mental'."
        },
        konseling: {
            whatIs: "Konseling itu layanan curhat dan bimbingan dari guru BK buat bantu siswa atasi masalah pribadi, sosial, belajar, atau karir.",
            howTo: "Buat atur jadwal curhat: 1) Buka menu 'Layanan' 2) Pilih jenis layanan 3) Klik 'Mau Coba' 4) Pilih jadwal yang cocok 5) Konfirmasi.",
            canI: "Tentu! Layanan curhat tersedia buat semua siswa. Kamu bisa pilih curhat pribadi, kelompok, atau bimbingan karir sesuai kebutuhanmu.",
            howMuch: "Layanan BK di sekolah GRATIS buat siswa SMANSA. Nggak ada biaya!",
            default: "Layanan BK kita: Curhat Pribadi, Masalah Pergaulan, Masalah Remaja, dan Bingung Mau Kemana. Semua sesi rahasia dan ditangani guru BK yang udah terlatih."
        },
        jadwal: {
            whatIs: "Jadwal layanan BK tersedia setiap hari sekolah (Senin-Jumat). Konseling bisa dilakukan di jam istirahat atau setelah pulang sekolah.",
            howTo: "Untuk membuat jadwal: Booking online via website atau langsung ke ruang BK. Kami akan konfirmasi jadwalmu via WhatsApp.",
            when: "Layanan BK buka Senin-Jumat, jam 08:00-15:00. Untuk konseling di luar jam tersebut, bisa request khusus via WhatsApp.",
            canI: "Bisa! Jadwal fleksibel dan disesuaikan dengan waktu luangmu. Pilih waktu yang nyaman dan kami akan mengkonfirmasi.",
            default: "Jadwal konseling: Senin-Jumat, 08:00-15:00. Booking bisa dilakukan online atau langsung ke ruang BK."
        },
        harga: {
            howMuch: "Kabar baik! Semua layanan BK di SMAN 1 Bone GRATIS untuk siswa, termasuk tes mental health dan sesi konseling.",
            whatIs: "Tidak ada biaya yang dikenakan untuk layanan BK sekolah. Semua gratis sebagai bagian dari program sekolah.",
            default: "Layanan BK sekolah GRATIS untuk semua siswa. Tes mental health, konseling, dan bimbingan karir tidak dipungut biaya."
        },
        cemas: {
            complaint: "Kecemasan yang kamu rasakan itu nyata dan valid. Banyak siswa mengalami hal serupa, terutama saat menghadapi tekanan sekolah. Yang penting adalah mengenali dan mengelolanya.",
            howTo: "Untuk mengatasi kecemasan, coba: 1) Teknik pernapasan dalam 2) Grounding technique 3) Bicara dengan orang terpercaya 4) Jika berlanjut, konsultasi dengan guru BK.",
            default: "Kecemasan adalah respons alami terhadap stres. Namun jika mengganggu aktivitas seharianmu, penting untuk mendapat bantuan. Guru BK kami terlatih membantu mengelola kecemasan."
        },
        depresi: {
            complaint: "Perasaan sedih berkepanjangan yang kamu alami perlu mendapat perhatian serius. Kamu tidak harus menghadapi ini sendirian.",
            howTo: "Langkah yang bisa dilakukan: 1) Bicara dengan orang yang dipercaya 2) Jaga rutinitas tidur dan makan 3) Lakukan aktivitas yang dulu kamu nikmati 4) Konsultasi dengan guru BK.",
            default: "Jika kamu merasa sedih, kehilangan minat, atau merasa hampa dalam waktu lama, itu mungkin tanda yang perlu diwaspadai. Guru BK kami siap mendengarkan dan membantu tanpa menghakimi."
        },
        stres: {
            complaint: "Stres yang kamu rasakan sangat bisa dipahami. Tekanan sekolah memang bisa sangat berat, tapi ada cara untuk mengatasinya.",
            howTo: "Tips mengelola stres: 1) Buat prioritas tugas 2) Istirahat teratur 3) Olahraga ringan 4) Teknik relaksasi 5) Jangan ragu minta bantuan.",
            default: "Stres adalah respons normal terhadap tekanan. Namun stres berlebihan bisa berdampak pada kesehatan mental dan fisik. Ada berbagai teknik yang bisa membantu mengelolanya."
        },
        bullying: {
            complaint: "Bullying tidak boleh ditoleransi. Kamu berani untuk bercerita, dan itu langkah yang sangat penting. Kamu tidak salah dalam situasi ini.",
            howTo: "Jika mengalami bullying: 1) Ceritakan pada orang dewasa yang dipercaya 2) Laporkan ke guru BK atau wali kelas 3) Simpan bukti jika ada 4) Jangan membalas dengan kekerasan.",
            default: "SMAN 1 Bone memiliki kebijakan anti-bullying yang tegas. Setiap laporan akan ditindaklanjuti dengan serius. Keselamatanmu adalah prioritas kami."
        },
        relationship: {
            complaint: "Masalah percintaan memang bisa sangat menyakitkan di usia remaja. Perasaanmu valid, tapi ingat bahwa ini bukan akhir dari segalanya.",
            howTo: "Untuk mengatasi masalah hubungan: 1) Beri waktu untuk dirimu sendiri 2) Curhat pada teman atau guru BK 3) Fokus pada aktivitas positif 4) Ingat bahwa masa depanmu masih panjang.",
            default: "Hubungan di masa remaja adalah proses belajar. Jika sedang mengalami masalah, tidak apa-apa untuk merasa sedih. Yang penting adalah bagaimana kita bangkit dan belajar dari pengalaman."
        },
        keluarga: {
            complaint: "Masalah keluarga pasti sangat berat untuk dihadapi. Kamu tidak memilih situasi ini, dan bukan salahmu.",
            howTo: "Langkah yang bisa dilakukan: 1) Cari orang dewasa yang bisa dipercaya untuk bicara 2) Fokus pada hal yang bisa kamu kontrol 3) Konseling dengan guru BK bisa membantu coping.",
            default: "Masalah keluarga bisa sangat mempengaruhi kondisi emosional dan prestasi sekolah. Guru BK kami berpengalaman membantu siswa menghadapi situasi serupa dengan pendekatan yang penuh empati."
        },
        default: {
            default: "Saya di sini untuk membantu siswa SMAN 1 Bone. Kamu bisa bertanya tentang layanan konseling, tes mental health, tips kesehatan mental, atau menceritakan masalah yang sedang dihadapi."
        }
    };
    
    // Get response based on intent and question type
    const intentResponses = directAnswers[intent] || directAnswers.default;
    let response = intentResponses[questionType] || intentResponses.default || intentResponses.complaint;
    
    // Adjust for severity
    if (entities.severity === 'severe' && intent !== 'default') {
        response += "\n\n⚠️ Berdasarkan yang kamu ceritakan, saya sangat menyarankan untuk segera berbicara dengan guru BK secara langsung.";
    }
    
    return response;
}

// ============================================
// IMPROVED RESPONSE SELECTION
// ============================================
function selectBestResponse(intent, sentiment, context) {
    const responses = chatbotResponses[intent] || chatbotResponses.default;
    
    if (!responses || responses.length === 0) {
        return chatbotResponses.default[0];
    }
    
    // For crisis, always return first
    if (intent === 'selfHarm') {
        return responses[0];
    }
    
    // Score responses
    const scoredResponses = responses.map((response, index) => {
        let score = 0;
        const lowerResponse = response.toLowerCase();
        
        // Match keywords
        for (const keyword of context.matchedKeywords || []) {
            if (lowerResponse.includes(keyword)) score += 3;
        }
        
        // Sentiment matching
        if (sentiment.mood === 'negative' || sentiment.mood === 'urgent') {
            if (/paham|mengerti|memahami|peduli|tidak sendirian/i.test(lowerResponse)) score += 4;
        }
        
        // Action-oriented responses
        if (/coba|klik|hubungi|bisa|langkah/i.test(lowerResponse)) score += 2;
        
        // Helpful responses
        if (/membantu|siap|tersedia/i.test(lowerResponse)) score += 1;
        
        // Avoid repetition
        const recent = JSON.parse(localStorage.getItem('recentBotResponses') || '[]');
        if (recent.includes(response)) score -= 10;
        
        // Small randomness
        score += Math.random() * 0.5;
        
        return { response, score, index };
    });
    
    scoredResponses.sort((a, b) => b.score - a.score);
    return scoredResponses[0].response;
}

// ============================================
// UPDATE CONVERSATION CONTEXT (ENHANCED)
// ============================================
function updateContext(intent, sentiment, message) {
    // Update message count
    conversationContext.messageCount++;
    
    // Add to conversation history
    conversationContext.conversationHistory.push({
        message,
        intent,
        sentiment: sentiment.mood,
        timestamp: new Date().toISOString()
    });
    
    // Keep only last 20 messages in history
    if (conversationContext.conversationHistory.length > 20) {
        conversationContext.conversationHistory.shift();
    }
    
    // Update current topic
    if (intent !== 'default' && intent !== 'greetings' && intent !== 'thanks') {
        if (conversationContext.currentTopic !== intent) {
            if (conversationContext.currentTopic) {
                conversationContext.previousTopics.push(conversationContext.currentTopic);
            }
            // Keep only last 5 topics
            if (conversationContext.previousTopics.length > 5) {
                conversationContext.previousTopics.shift();
            }
        }
        conversationContext.currentTopic = intent;
    }
    
    // Update mood
    conversationContext.userMood = sentiment.mood;
    conversationContext.lastIntent = intent;
    
    // Extract and store entities
    const entities = extractEntities(message);
    
    // Merge issues
    for (const issue of entities.issues) {
        if (!conversationContext.entities.mentionedIssues.includes(issue)) {
            conversationContext.entities.mentionedIssues.push(issue);
        }
    }
    
    // Update severity if higher
    const severityOrder = { mild: 1, normal: 2, moderate: 3, severe: 4 };
    if (severityOrder[entities.severity] > severityOrder[conversationContext.entities.severity]) {
        conversationContext.entities.severity = entities.severity;
    }
    
    // Save context to localStorage
    localStorage.setItem('chatbotContext', JSON.stringify(conversationContext));
}

// ============================================
// LOAD SAVED CONTEXT
// ============================================
function loadSavedContext() {
    const saved = localStorage.getItem('chatbotContext');
    if (saved) {
        const parsed = JSON.parse(saved);
        // Only restore if session is recent (within 30 minutes)
        const sessionAge = new Date() - new Date(parsed.sessionStart);
        if (sessionAge < 30 * 60 * 1000) {
            Object.assign(conversationContext, parsed);
        } else {
            // Reset context for new session
            localStorage.removeItem('chatbotContext');
        }
    }
}

// Initialize context on load
loadSavedContext();

// ============================================
// CHATBOT RESPONSES DATABASE (Enhanced)
// ============================================
const chatbotResponses = {
    greetings: [
        "Hai! Ada yang bisa aku bantu hari ini?",
        "Hai! Gimana kabarmu hari ini?",
        "Selamat datang di SIPAKAINGE! Ada yang bisa aku bantu?",
        "Halo siswa SMANSA! Apa yang bisa aku bantu hari ini?",
        "Hai teman! Semoga harimu menyenangkan. Ada yang mau kamu tanyain?",
        "Selamat pagi! Siap memulai hari dengan semangat?",
        "Halo! Ada masalah apa yang bisa aku bantu hari ini?"
    ],
    mentalHealth: [
        "Kesehatan mental itu penting banget buat siswa SMANSA. Kami punya layanan BK yang siap bantu. Mau coba?",
        "Aku paham kekhawatiranmu. Tim guru BK kami siap bantu dengan cara yang nyaman buat kamu. Mau aku jelasin?",
        "Makasih udah mau cerita. Kami punya tes mental yang bisa bantu kamu paham kondisimu lebih baik.",
        "Kesehatan mental itu penting buat prestasi sekolah. Guru BK bisa bantu kamu kelola emosi dan stres belajar.",
        "Jangan ragu buat cerita tentang perasaanmu. Kami di sini buat dengerin dan bantu siswa SMANSA.",
        "Mental health adalah fondasi kehidupan. Yuk jaga bareng-bareng.",
        "Setiap emosi yang kamu rasain itu valid. Guru BK siap bantu ngelolanya."
    ],
    konseling: [
        "Kami punya layanan curhat pribadi, bantuan masalah pergaulan, bimbingan remaja, dan karier khusus buat siswa SMANSA. Mau tau lebih lanjut?",
        "BK bisa bantu kamu banget lho. Ada sesi langsung atau via chat yang bisa disesuaiin sama jadwal sekolahmu. Mau yang mana?",
        "Buat atur jadwal, kamu bisa klik 'Mau Coba' di halaman layanan atau chat langsung ke guru BK via WhatsApp.",
        "Curhat di BK SMANSA dijamin rahasia. Guru BK bakal bantu kamu dengan empati tanpa menghakimi.",
        "Ada berbagai jenis layanan: curhat pribadi buat masalah personal, bantuan pergaulan buat masalah pertemanan, dan bimbingan karier buat masa depanmu.",
        "Dateng ke BK bukan cuma buat masalah besar, tapi juga buat pengembangan diri.",
        "Guru BK kami udah terlatih dan berpengalaman nangani berbagai masalah siswa."
    ],
    tes: [
        "Ada tes mental, tes minat & bakat, dan bimbingan karier yang disesuaiin buat siswa SMANSA. Mau coba?",
        "Tes mental tersedia gratis di website. Klik menu 'Tes Mental' buat mulai.",
        "Hasil tes bakal kasih gambaran kondisi mentalmu dan rekomendasi yang cocok buat kamu.",
        "Tes kepribadian dan minat bakat bisa bantu kamu pilih jurusan yang tepat buat masa depan.",
        "Tes mental kita aman dan rahasia. Hasilnya cuma kamu yang tau.",
        "Tes ini bisa bantu kamu lebih paham diri sendiri.",
        "Hasil tes dijaga kerahasiaannya dan cuma dipake buat bantuin kamu."
    ],
    harga: [
        "Layanan BK di SMANSA disesuaiin sama kebutuhan siswa. Buat info lengkap, bisa chat admin via WhatsApp.",
        "Layanan BK kita terjangkau dan disesuaiin sama kondisi siswa. Tes mental health GRATIS!",
        "Buat info lengkap tentang layanan, chat aja tim BK SMANSA via WhatsApp.",
        "Sebagian besar layanan BK di sekolah gratis buat siswa. Tenang aja!",
        "Prioritas kami bantu siswa, bukan cari untung. Biaya disesuaiin sama kemampuan siswa.",
        "Kami punya program bantuan buat siswa yang butuh.",
        "Biaya layanan bakal dijelasin transparan sebelum dimulai."
    ],
    jadwal: [
        "Layanan BK SMANSA tersedia sesuai jadwal sekolah. Buat siswa, bisa dateng di jam istirahat atau setelah pulang sekolah.",
        "Buat atur jadwal, klik menu 'Layanan' terus pilih layanan yang kamu butuhin.",
        "Jadwal bisa diatur sesuai kenyamananmu. Tim BK bakal konfirmasi via WhatsApp.",
        "Kita fleksibel sama jadwal siswa. Bisa di jam istirahat, setelah sekolah, atau bahkan weekend.",
        "Atur jadwal gampang banget. Pilih waktu yang nyaman buat kamu, nanti kita konfirmasi.",
        "Jadwal bisa diubah kalau ada keperluan mendadak.",
        "Kenyamanan kamu prioritas kita dalam nentuin jadwal."
    ],
    cemas: [
        "Aku paham kecemasan bisa ganggu banget aktivitas sekolah. Coba teknik pernapasan: tarik napas 4 detik, tahan 4 detik, hembuskan 6 detik.",
        "Cemas itu normal apalagi pas mau ujian. Kalau udah ganggu belajar, BK bisa bantu. Mau coba tes kecemasan?",
        "Buat atasi cemas di sekolah, coba grounding technique: sebutin 5 hal yang kamu lihat, 4 yang kamu rasain, 3 yang kamu denger.",
        "Cemas pas ujian itu wajar. Coba latihan relaksasi di menu 'Relaksasi' sebelum ujian.",
        "Kalau cemas bikin susah fokus belajar, guru BK bisa bantu dengan teknik yang efektif.",
        "Cemas itu bisa dikendaliin dengan teknik yang tepat.",
        "Banyak siswa ngalamin cemas. Kamu nggak sendirian."
    ],
    depresi: [
        "Kalau kamu ngerasa down atau kehilangan minat sama aktivitas sekolah, itu bisa jadi tanda yang perlu diperhatiin. Penting buat cerita ke guru BK.",
        "Perasaan sedih yang berkepanjangan bisa pengaruhi prestasi sekolah. Kami punya layanan curhat yang siap dengerin. Mau cerita?",
        "Coba tes depresi kita buat dapet gambaran awal. Setelah itu, guru BK bisa kasih bimbingan yang tepat.",
        "Ngerasa murung terus-menerus? Itu bisa pengaruhi konsentrasi belajar. Yuk ngobrol sama guru BK.",
        "Depresi bisa disembuhin dengan dukungan yang tepat. Guru BK kita berpengalaman bantu siswa kayak kamu.",
        "Perasaan sedih itu normal, tapi kalau berkepanjangan perlu perhatian.",
        "Kami punya berbagai cara buat bantu atasi depresi."
    ],
    stres: [
        "Stres itu normal pas mau ujian atau tugas numpuk. Coba relaksasi, meditasi, atau olahraga ringan buat nguranginnya.",
        "Ada 'Ruang Relaksasi' di website dengan guided meditation yang cocok buat siswa. Mau coba?",
        "Kalau stres sekolah udah lama dan ganggu belajar, BK bisa bantu nemuin solusi yang tepat.",
        "Stres tugas numpuk? Coba teknik time management dan jangan lupa istirahat.",
        "Olahraga ringan kayak jalan kaki bisa banget bantu ngurangin stres sekolah.",
        "Stres bisa dikelola dengan teknik yang tepat.",
        "Jangan biarin stres menguasai hidupmu. Ada banyak cara ngatasinnya."
    ],
    bullying: [
        "Bullying itu masalah serius di sekolah. Kalau kamu ngalamin atau liat bullying, langsung laporin ke guru BK atau wali kelas.",
        "Kami sangat serius nangani kasus bullying. Guru BK SMANSA siap bantu korban.",
        "Bullying bisa berdampak buruk buat kesehatan mental. Jangan diam, ceritain ke orang tua atau guru BK.",
        "Ada layanan khusus buat korban bullying. Kami bakal bantu kamu ngerasa aman dan didukung.",
        "SMANSA anti-bullying! Laporin setiap kejadian, dan kami bakal tindaklanjutin.",
        "Bullying nggak boleh ditoleransi. Kami siap bantu.",
        "Pendidikan anti-bullying adalah prioritas kami."
    ],
    motivasi: [
        "Motivasi belajar penting buat sukses di sekolah. Coba tetapin tujuan kecil yang realistis tiap hari.",
        "Kalau motivasi belajar menurun, coba istirahat dulu atau ngobrol sama guru BK tentang kesulitanmu.",
        "Motivasi bisa dateng dari dalam. Temuin passion-mu dan hubungin sama pelajaran sekolah.",
        "Reward system bisa bantu ningkatin motivasi. Kasih hadiah kecil buat pencapaian akademik.",
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

// ============================================
// ENHANCED SMART RESPONSE GENERATION
// ============================================
function generateSmartResponse(message) {
    // Step 1: Preprocess
    const processedMessage = preprocessText(message);
    
    // Step 2: Analyze sentiment
    const sentiment = analyzeSentiment(message);
    
    // Step 3: Extract entities
    const entities = extractEntities(message);
    
    // Step 4: Detect intent with advanced pattern matching
    const intentResult = detectIntentAdvanced(message);
    
    // Step 5: Update context
    updateContext(intentResult.intent, sentiment, message);
    
    // Step 6: Build contextual response
    let response;
    
    if (intentResult.isCrisis) {
        // Crisis response
        response = buildCrisisResponse();
    } else if (intentResult.confidence >= 0.5 || intentResult.score >= 5) {
        // High confidence - use contextual builder
        response = buildContextualResponse(
            intentResult.intent, 
            sentiment, 
            entities, 
            intentResult.questionType,
            intentResult.matchedKeywords
        );
    } else if (intentResult.intent !== 'default') {
        // Medium confidence - use enhanced selection
        response = selectBestResponse(intentResult.intent, sentiment, intentResult);
    } else {
        // Low confidence - use smart default
        response = buildSmartDefaultResponse(message, entities);
    }
    
    // Step 7: Generate appropriate follow-up
    const followUp = generateSmartFollowUp(intentResult.intent, sentiment, entities);
    
    // Step 8: Track response
    trackResponse(response);
    
    // Step 9: Get contextual quick replies
    const quickReplies = getSmartQuickReplies(intentResult.intent, sentiment, entities);
    
    return {
        response,
        followUp,
        intent: intentResult.intent,
        confidence: intentResult.confidence,
        sentiment,
        entities,
        questionType: intentResult.questionType,
        quickReplies,
        isCrisis: intentResult.isCrisis
    };
}

// ============================================
// BUILD CRISIS RESPONSE
// ============================================
function buildCrisisResponse() {
    return `🆘 **Keselamatanmu adalah prioritas utama.**

Aku sangat menghargai keberanianmu untuk berbagi. Perasaan yang kamu alami sangat berat, tapi tolong ketahui bahwa bantuan tersedia dan hidupmu sangat berharga.

**Langkah segera yang perlu dilakukan:**
1. Jika dalam bahaya sekarang, hubungi 119 atau pergi ke UGD terdekat
2. Hubungi guru BK SMAN 1 Bone sesegera mungkin
3. Ceritakan pada orang tua atau orang dewasa yang dipercaya

**Hotline 24 Jam:**
• Into The Light Indonesia: 119 ext 8
• Yayasan Pulih: (021) 788-42580
• LSM Jangan Bunuh Diri: (021) 9696-9293

Kamu tidak sendirian. Banyak orang yang peduli dan ingin membantu.`;
}

// ============================================
// BUILD SMART DEFAULT RESPONSE
// ============================================
function buildSmartDefaultResponse(message, entities) {
    const lowerMsg = message.toLowerCase();
    
    // Try to understand what user might be asking about
    if (entities.issues.length > 0) {
        const issue = entities.issues[0];
        const issueResponses = {
            cemas: "Sepertinya kamu sedang membahas tentang kecemasan. Bisa ceritakan lebih spesifik apa yang membuatmu cemas?",
            stres: "Sepertinya kamu sedang mengalami stres. Mau cerita lebih detail tentang apa yang membuatmu merasa tertekan?",
            depresi: "Saya ingin memahami perasaanmu lebih baik. Bisa jelaskan lebih lanjut apa yang sedang kamu alami?",
            tidur: "Sepertinya kamu mengalami masalah tidur. Sudah berapa lama ini berlangsung?",
            keluarga: "Masalah keluarga memang bisa sangat berat. Mau ceritakan lebih detail agar saya bisa membantu lebih baik?",
            bullying: "Jika kamu mengalami bullying, penting untuk melaporkannya. Mau ceritakan apa yang terjadi?",
            relationship: "Masalah hubungan memang bisa menyakitkan. Apa yang sedang terjadi?",
            sekolah: "Masalah di sekolah bisa datang dalam berbagai bentuk. Apakah ini tentang nilai, teman, atau hal lain?"
        };
        
        return issueResponses[issue] || `Saya mendeteksi kamu sedang membahas tentang ${issue}. Bisa jelaskan lebih detail?`;
    }
    
    // Check message length
    if (message.length < 5) {
        return "Halo! Sepertinya pesanmu singkat sekali. Bisa jelaskan lebih detail apa yang ingin kamu tanyakan atau ceritakan?";
    }
    
    // Check if it's a question
    if (message.includes('?')) {
        return "Saya ingin menjawab pertanyaanmu dengan tepat. Bisa jelaskan lebih spesifik? Misalnya, apakah ini tentang layanan konseling, tes mental health, atau masalah yang sedang kamu hadapi?";
    }
    
    // Default with suggestions
    return `Terima kasih sudah menghubungi. Saya ingin memastikan bisa membantumu dengan tepat.

Apakah kamu ingin:
• **Bertanya** tentang layanan konseling atau tes mental health?
• **Menceritakan** masalah yang sedang dihadapi?
• **Mencari** tips kesehatan mental?

Silakan jelaskan lebih detail, dan saya akan berusaha membantu sebaik mungkin.`;
}

// ============================================
// GENERATE SMART FOLLOW-UP
// ============================================
function generateSmartFollowUp(intent, sentiment, entities) {
    // Don't add follow-up for simple interactions
    if (['greetings', 'thanks'].includes(intent)) {
        return null;
    }
    
    // Crisis - no follow-up needed
    if (intent === 'selfHarm') {
        return null;
    }
    
    // For severe cases
    if (entities.severity === 'severe') {
        return "Apakah kamu merasa aman saat ini? Jika tidak, tolong segera hubungi guru BK atau orang dewasa terdekat.";
    }
    
    // Context-specific follow-ups
    const smartFollowUps = {
        cemas: [
            "Apakah kecemasan ini muncul di situasi tertentu saja atau terus-menerus?",
            "Sudah berapa lama kamu merasakan kecemasan seperti ini?"
        ],
        depresi: [
            "Apakah ada seseorang yang kamu percaya untuk diajak bicara tentang ini?",
            "Apakah perasaan ini mempengaruhi aktivitas sehari-harimu?"
        ],
        stres: [
            "Dari semua yang membuatmu stres, mana yang paling berat?",
            "Apakah kamu sudah punya strategi untuk mengelola stresmu?"
        ],
        bullying: [
            "Apakah kamu sudah melaporkan ini ke guru atau orang tua?",
            "Apakah bullying ini terjadi di sekolah, online, atau keduanya?"
        ],
        konseling: [
            "Apakah ada waktu tertentu yang lebih nyaman untuk konseling?",
            "Ini pertama kalinya kamu akan konseling, atau sudah pernah sebelumnya?"
        ],
        tes: [
            "Setelah melihat hasil tes, apakah kamu ingin konsultasi dengan guru BK?",
            "Apakah ada area spesifik yang ingin kamu evaluasi?"
        ]
    };
    
    // Negative sentiment follow-up
    if (sentiment.mood === 'negative') {
        const supportiveFollowUps = [
            "Bagaimana perasaanmu sekarang setelah bercerita?",
            "Apakah ada hal lain yang ingin kamu sampaikan?",
            "Mau saya bantu carikan langkah selanjutnya?"
        ];
        
        if (smartFollowUps[intent]) {
            return smartFollowUps[intent][Math.floor(Math.random() * smartFollowUps[intent].length)];
        }
        return supportiveFollowUps[Math.floor(Math.random() * supportiveFollowUps.length)];
    }
    
    // Informational follow-up
    if (['tes', 'konseling', 'jadwal', 'harga'].includes(intent)) {
        const infoFollowUps = {
            tes: "Mau langsung mulai tesnya sekarang?",
            konseling: "Mau saya bantu proses bookingnya?",
            jadwal: "Apakah ada waktu yang kamu preferensikan?",
            harga: "Ada pertanyaan lain tentang layanan kami?"
        };
        return infoFollowUps[intent];
    }
    
    return null;
}

// ============================================
// GET SMART QUICK REPLIES
// ============================================
function getSmartQuickReplies(intent, sentiment, entities) {
    // Crisis - no quick replies
    if (intent === 'selfHarm') {
        return ['Hubungi Guru BK', 'Lihat Hotline Darurat'];
    }
    
    // Intent-specific quick replies
    const quickReplyMap = {
        greetings: ['🧪 Tes Mental Health', '💬 Layanan Konseling', '😌 Ruang Relaksasi'],
        tes: ['▶️ Mulai Tes Sekarang', '📋 Lihat Jenis Tes', '❓ Cara Kerja Tes'],
        konseling: ['📅 Booking Sekarang', '⏰ Lihat Jadwal', '💰 Info Biaya'],
        jadwal: ['📅 Pilih Jadwal', '📱 Hubungi via WA', '🔙 Menu Utama'],
        harga: ['🆓 Layanan Gratis', '📅 Booking Sekarang', '📱 Tanya Admin'],
        cemas: ['🧘 Latihan Relaksasi', '🧪 Tes Kecemasan', '💬 Bicara dengan BK'],
        depresi: ['🧪 Tes Depresi', '💬 Konseling Sekarang', '📞 Hotline Bantuan'],
        stres: ['😌 Ruang Relaksasi', '📝 Tips Anti Stres', '💬 Konseling'],
        bullying: ['🚨 Laporkan Sekarang', '💬 Bicara dengan BK', '📖 Info Anti-Bullying'],
        motivasi: ['💡 Tips Motivasi', '🎯 Bimbingan Karir', '💬 Konseling'],
        masaDepan: ['🧪 Tes Minat Bakat', '🎯 Bimbingan Karir', '💬 Konseling Karir'],
        default: ['🧪 Tes Mental', '💬 Konseling', '❓ Bantuan']
    };
    
    let replies = quickReplyMap[intent] || quickReplyMap.default;
    
    // Modify based on sentiment
    if (sentiment.mood === 'negative' && !['cemas', 'depresi', 'stres', 'bullying'].includes(intent)) {
        replies = ['💬 Cerita Lebih Lanjut', '🆘 Butuh Bantuan Segera', ...replies.slice(0, 1)];
    }
    
    return replies;
}

// ============================================
// TRACK RECENT RESPONSES
// ============================================
function trackResponse(response) {
    let recent = JSON.parse(localStorage.getItem('recentBotResponses') || '[]');
    recent.push(response);
    // Keep only last 10 responses
    if (recent.length > 10) {
        recent = recent.slice(-10);
    }
    localStorage.setItem('recentBotResponses', JSON.stringify(recent));
}

// ============================================
// LEGACY FUNCTIONS (for backward compatibility)
// ============================================
function detectIntent(message) {
    return detectIntentAdvanced(message).intent;
}

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

// ============================================
// FEEDBACK SYSTEM
// ============================================
const feedbackSystem = {
    pendingFeedback: null,
    
    requestFeedback(messageId) {
        this.pendingFeedback = messageId;
        
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback-request';
        feedbackDiv.id = `feedback-${messageId}`;
        feedbackDiv.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; padding: 8px 0; margin-top: 8px; border-top: 1px solid rgba(0,0,0,0.1);">
                <span style="font-size: 12px; color: #666;">Apakah jawaban ini membantu?</span>
                <button class="feedback-btn" data-rating="positive" style="padding: 4px 12px; border: none; background: #e8f5e9; color: #2e7d32; border-radius: 15px; cursor: pointer; font-size: 12px; transition: all 0.2s;">👍 Ya</button>
                <button class="feedback-btn" data-rating="negative" style="padding: 4px 12px; border: none; background: #ffebee; color: #c62828; border-radius: 15px; cursor: pointer; font-size: 12px; transition: all 0.2s;">👎 Tidak</button>
            </div>
        `;
        
        feedbackDiv.querySelectorAll('.feedback-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const rating = e.target.dataset.rating;
                this.submitFeedback(messageId, rating);
            });
        });
        
        return feedbackDiv;
    },
    
    submitFeedback(messageId, rating) {
        const feedbackDiv = document.getElementById(`feedback-${messageId}`);
        if (feedbackDiv) {
            feedbackDiv.innerHTML = `
                <div style="padding: 8px 0; margin-top: 8px; border-top: 1px solid rgba(0,0,0,0.1);">
                    <span style="font-size: 12px; color: #4a90a4;">✓ Terima kasih atas feedbacknya!</span>
                </div>
            `;
            
            setTimeout(() => {
                feedbackDiv.style.opacity = '0';
                setTimeout(() => feedbackDiv.remove(), 300);
            }, 2000);
        }
        
        // Store feedback
        userProfileSystem.addFeedback(rating, messageId);
        
        // Track for improvement
        const feedbackData = JSON.parse(localStorage.getItem('sipakainge_feedback') || '[]');
        feedbackData.push({
            messageId,
            rating,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('sipakainge_feedback', JSON.stringify(feedbackData));
        
        this.pendingFeedback = null;
    }
};

// ============================================
// MULTI-TURN DIALOG HANDLER
// ============================================
function handleMultiTurnDialog(message) {
    const state = conversationContext.dialogState;
    
    if (!state.isMultiTurn || !state.currentFlow) return null;
    
    const flow = dialogFlows[state.currentFlow];
    if (!flow) return null;
    
    const currentStep = flow.steps[state.flowStep];
    
    // Store user's answer
    state.flowData[currentStep.id] = message;
    
    // Move to next step
    state.flowStep++;
    
    // Check if flow is complete
    if (state.flowStep >= flow.steps.length) {
        const result = flow.onComplete(state.flowData);
        
        // Reset dialog state
        state.isMultiTurn = false;
        state.currentFlow = null;
        state.flowStep = 0;
        state.flowData = {};
        
        return {
            response: result,
            isComplete: true,
            quickReplies: ['🔙 Menu Utama', '💬 Tanya Lagi']
        };
    }
    
    // Get next step
    const nextStep = flow.steps[state.flowStep];
    
    if (nextStep.isRecommendation || nextStep.isComplete || nextStep.isConfirmation) {
        // Auto-complete for special steps
        const result = flow.onComplete(state.flowData);
        
        state.isMultiTurn = false;
        state.currentFlow = null;
        state.flowStep = 0;
        state.flowData = {};
        
        return {
            response: result,
            isComplete: true,
            quickReplies: ['🔙 Menu Utama', '💬 Tanya Lagi']
        };
    }
    
    return {
        response: nextStep.question,
        isComplete: false,
        quickReplies: nextStep.options || [],
        isFreeText: nextStep.freeText
    };
}

function startDialogFlow(flowName) {
    const flow = dialogFlows[flowName];
    if (!flow) return null;
    
    conversationContext.dialogState = {
        isMultiTurn: true,
        currentFlow: flowName,
        flowStep: 0,
        flowData: {},
        pendingQuestion: null,
        expectedResponseType: null
    };
    
    const firstStep = flow.steps[0];
    
    return {
        response: `📋 **${flow.name}**\n\n${firstStep.question}`,
        quickReplies: firstStep.options || [],
        isFreeText: firstStep.freeText
    };
}

// ============================================
// PROFESSIONAL SEND MESSAGE (v4.0)
// ============================================
function sendMessage() {
    const message = chatbotInput.value.trim();
    
    if (message === '') return;
    
    // Update user profile
    userProfileSystem.profile.totalMessages++;
    userProfileSystem.updateCommunicationStyle(message.length);
    userProfileSystem.save();
    
    // Add user message
    const userMessage = createMessage(message, false);
    chatbotMessages.appendChild(userMessage);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    // Clear input
    chatbotInput.value = '';
    
    // Check for dialog flow triggers
    const flowTriggers = {
        'booking': 'bookingKonseling',
        'booking konseling': 'bookingKonseling',
        'jadwalkan konseling': 'bookingKonseling',
        'mulai tes': 'tesMental',
        'panduan tes': 'tesMental',
        'assessment': 'assessmentAwal'
    };
    
    const lowerMessage = message.toLowerCase();
    let flowToStart = null;
    
    for (const [trigger, flowName] of Object.entries(flowTriggers)) {
        if (lowerMessage.includes(trigger)) {
            flowToStart = flowName;
            break;
        }
    }
    
    // Show typing indicator with intelligent timing
    const typingIndicator = showTypingIndicator();
    
    // Check if we're in a multi-turn dialog
    if (conversationContext.dialogState.isMultiTurn) {
        const dialogResult = handleMultiTurnDialog(message);
        
        const delay = typingSystem.calculateDelay(dialogResult.response.length, 'normal');
        
        setTimeout(() => {
            typingIndicator.remove();
            displayBotResponse(dialogResult);
        }, delay);
        
        return;
    }
    
    // Start new dialog flow if triggered
    if (flowToStart) {
        const flowResult = startDialogFlow(flowToStart);
        
        const delay = typingSystem.calculateDelay(flowResult.response.length, 'normal');
        
        setTimeout(() => {
            typingIndicator.remove();
            displayBotResponse(flowResult);
        }, delay);
        
        return;
    }
    
    // Generate smart response
    const result = generateSmartResponse(message);
    
    // Track emotion based on sentiment
    if (result.sentiment) {
        const emotionMap = {
            positive: 'positive',
            negative: 'sad',
            urgent: 'distressed',
            neutral: 'neutral'
        };
        emotionTracker.track(emotionMap[result.sentiment.mood] || 'neutral', result.sentiment.score || 1);
    }
    
    // Update user profile with detected issues
    if (result.entities && result.entities.issues.length > 0) {
        for (const issue of result.entities.issues) {
            userProfileSystem.addTopic(issue);
            if (result.entities.severity !== 'normal') {
                userProfileSystem.addIssue(issue, result.entities.severity);
            }
        }
    }
    
    // Calculate intelligent response delay
    const complexity = result.isCrisis ? 'emotional' : 
                       result.confidence < 0.5 ? 'complex' : 'normal';
    const totalDelay = typingSystem.calculateDelay(result.response.length, complexity);
    
    setTimeout(() => {
        typingIndicator.remove();
        
        const messageId = 'msg_' + Date.now();
        
        if (result.isCrisis) {
            displayCrisisResponse(result, messageId);
        } else {
            displayNormalResponse(result, messageId);
        }
        
        // Save conversation with enhanced data
        saveConversation(message, result.response, result.intent, result.confidence);
        
        // Check for achievements
        checkAchievements();
        
        // Debug log
        console.log('🤖 SIPAKAINGE v4.0:', {
            intent: result.intent,
            confidence: (result.confidence * 100).toFixed(1) + '%',
            sentiment: result.sentiment?.mood,
            userProfile: userProfileSystem.getInsights()
        });
        
    }, totalDelay);
}

// ============================================
// DISPLAY BOT RESPONSE
// ============================================
function displayBotResponse(result) {
    const botMessage = createMessage(formatResponseText(result.response), true);
    chatbotMessages.appendChild(botMessage);
    
    if (result.quickReplies && result.quickReplies.length > 0) {
        setTimeout(() => {
            addQuickReplies(result.quickReplies);
        }, 500);
    }
    
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function displayNormalResponse(result, messageId) {
    const botMessage = createMessage(formatResponseText(result.response), true);
    botMessage.id = messageId;
    chatbotMessages.appendChild(botMessage);
    
    // Add follow-up with delay if exists
    if (result.followUp && result.confidence >= 0.4) {
        setTimeout(() => {
            const followUpMessage = createMessage(result.followUp, true);
            chatbotMessages.appendChild(followUpMessage);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 1200);
    }
    
    // Add quick replies
    if (result.quickReplies && result.quickReplies.length > 0) {
        const quickReplyDelay = result.followUp ? 2000 : 800;
        setTimeout(() => {
            addQuickReplies(result.quickReplies);
        }, quickReplyDelay);
    }
    
    // Add feedback request for complex responses (not greetings/thanks)
    if (!['greetings', 'thanks', 'default'].includes(result.intent)) {
        setTimeout(() => {
            const feedbackRequest = feedbackSystem.requestFeedback(messageId);
            const messageContent = botMessage.querySelector('.message-content');
            if (messageContent) {
                messageContent.appendChild(feedbackRequest);
            }
        }, 3000);
    }
    
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function displayCrisisResponse(result, messageId) {
    // Crisis response with special formatting
    const crisisMessage = document.createElement('div');
    crisisMessage.className = 'bot-message crisis-message';
    crisisMessage.id = messageId;
    crisisMessage.innerHTML = `
        <div class="message-avatar">🆘</div>
        <div class="message-content crisis-content">
            <p>${formatResponseText(result.response)}</p>
        </div>
    `;
    chatbotMessages.appendChild(crisisMessage);
    
    // Add crisis quick actions
    setTimeout(() => {
        addQuickReplies(result.quickReplies);
    }, 500);
    
    // Add professional crisis resources
    setTimeout(() => {
        addCrisisResources();
    }, 1000);
    
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// ============================================
// ACHIEVEMENT SYSTEM
// ============================================
function checkAchievements() {
    const profile = userProfileSystem.profile;
    
    // First conversation achievement
    if (profile.totalMessages === 1) {
        if (userProfileSystem.unlockAchievement('first_chat', '🎉 Langkah Pertama')) {
            showAchievementNotification('Langkah Pertama', 'Kamu sudah memulai perjalanan kesehatan mentalmu!');
        }
    }
    
    // Regular user achievement
    if (profile.visitCount >= 5 && !profile.achievements.find(a => a.id === 'regular')) {
        if (userProfileSystem.unlockAchievement('regular', '⭐ Pengguna Setia')) {
            showAchievementNotification('Pengguna Setia', 'Terima kasih sudah rutin menggunakan SIPAKAINGE!');
        }
    }
    
    // Completed test achievement
    if (profile.topicsDiscussed.includes('tes') && profile.totalMessages >= 10) {
        if (userProfileSystem.unlockAchievement('explorer', '🔍 Penjelajah')) {
            showAchievementNotification('Penjelajah', 'Kamu aktif mengeksplorasi fitur kesehatan mental!');
        }
    }
}

function showAchievementNotification(title, description) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div style="background: linear-gradient(135deg, #ffd700, #ffb347); color: #333; padding: 12px 16px; border-radius: 12px; margin: 10px 0; animation: slideInRight 0.5s ease;">
            <div style="font-weight: bold; font-size: 14px;">🏆 Achievement Unlocked!</div>
            <div style="font-size: 16px; margin: 4px 0;">${title}</div>
            <div style="font-size: 12px; opacity: 0.8;">${description}</div>
        </div>
    `;
    
    chatbotMessages.appendChild(notification);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ============================================
// FORMAT RESPONSE TEXT
// ============================================
function formatResponseText(text) {
    // Convert markdown-like formatting to HTML
    return text
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Bullet points
        .replace(/^• /gm, '• ')
        // Line breaks
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
}

// ============================================
// CRISIS RESOURCES
// ============================================
function addCrisisResources() {
    const crisisDiv = document.createElement('div');
    crisisDiv.className = 'crisis-resources';
    crisisDiv.innerHTML = `
        <div style="background: linear-gradient(135deg, #ff6b6b, #ee5a5a); color: white; padding: 15px; border-radius: 12px; margin: 10px 0;">
            <strong style="font-size: 14px;">🆘 Bantuan Darurat:</strong>
            <ul style="margin: 10px 0 0 0; padding-left: 20px; font-size: 13px;">
                <li>Guru BK SMAN 1 Bone - Segera hubungi</li>
                <li>Into The Light Indonesia: 119 ext 8</li>
                <li>Yayasan Pulih: (021) 788-42580</li>
                <li>LSM Jangan Bunuh Diri: (021) 9696-9293</li>
            </ul>
            <p style="margin-top: 10px; font-size: 12px; opacity: 0.9;">Kamu tidak sendirian. Bantuan selalu tersedia 24/7.</p>
        </div>
    `;
    chatbotMessages.appendChild(crisisDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// ============================================
// ADD CRISIS MESSAGE STYLING
// ============================================
const crisisStyle = document.createElement('style');
crisisStyle.textContent = `
    .crisis-message .message-content {
        background: linear-gradient(135deg, #ff6b6b, #ee5a5a) !important;
        color: white !important;
        border: 2px solid #ff4444;
    }
    .crisis-message .message-content p {
        color: white !important;
    }
`;
document.head.appendChild(crisisStyle);

// ============================================
// ENHANCED QUICK REPLIES WITH EMOJI
// ============================================
function addQuickReplies(replies) {
    // Remove existing quick replies first
    const existingQuickReplies = chatbotMessages.querySelectorAll('.quick-replies');
    existingQuickReplies.forEach(el => el.remove());
    
    const quickReplyDiv = document.createElement('div');
    quickReplyDiv.className = 'quick-replies';
    quickReplyDiv.style.cssText = `
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        padding: 12px 0;
        animation: fadeInUp 0.3s ease;
    `;
    
    replies.forEach(reply => {
        const button = document.createElement('button');
        button.textContent = reply;
        button.style.cssText = `
            padding: 10px 18px;
            border: 2px solid var(--primary-color, #4a90a4);
            background: transparent;
            color: var(--primary-color, #4a90a4);
            border-radius: 25px;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            white-space: nowrap;
        `;
        
        button.addEventListener('mouseover', () => {
            button.style.background = 'var(--primary-color, #4a90a4)';
            button.style.color = 'white';
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 4px 12px rgba(74, 144, 164, 0.3)';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.background = 'transparent';
            button.style.color = 'var(--primary-color, #4a90a4)';
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = 'none';
        });
        
        button.addEventListener('click', () => {
            // Remove emoji for processing but keep display
            const cleanReply = reply.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').trim();
            chatbotInput.value = cleanReply;
            sendMessage();
            quickReplyDiv.remove();
        });
        
        quickReplyDiv.appendChild(button);
    });
    
    chatbotMessages.appendChild(quickReplyDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Add animation keyframes
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(animationStyle);

// Function to save conversation (ENHANCED)
function saveConversation(userMsg, botMsg, intent = 'unknown', confidence = 0) {
    const conversations = JSON.parse(localStorage.getItem('chatHistory') || '[]');
    conversations.push({
        timestamp: new Date().toISOString(),
        user: userMsg,
        bot: botMsg,
        intent: intent,
        confidence: confidence
    });
    
    // Keep only last 100 messages
    if (conversations.length > 100) {
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

// Add initial greeting with delay (ENHANCED)
setTimeout(() => {
    if (chatbotMessages && chatbotMessages.children.length === 1) {
        const welcomeMessage = getPersonalizedWelcome();
        const greeting = createMessage(welcomeMessage, true);
        chatbotMessages.appendChild(greeting);
        
        // Add initial quick replies
        setTimeout(() => {
            addQuickReplies(['Tes Mental Health', 'Layanan Konseling', 'Tips Kesehatan Mental']);
        }, 1000);
    }
}, 2000);

// Auto-save conversation on page unload
window.addEventListener('beforeunload', () => {
    // Conversation is already saved on each message
});

// ============================================
// ENHANCED GREETING BASED ON TIME
// ============================================
function getTimeBasedGreeting() {
    const hour = new Date().getHours();
    let greeting = '';
    let emoji = '';
    
    if (hour >= 5 && hour < 11) {
        greeting = 'Selamat pagi';
        emoji = '🌅';
    } else if (hour >= 11 && hour < 15) {
        greeting = 'Selamat siang';
        emoji = '☀️';
    } else if (hour >= 15 && hour < 18) {
        greeting = 'Selamat sore';
        emoji = '🌤️';
    } else {
        greeting = 'Selamat malam';
        emoji = '🌙';
    }
    
    return { greeting, emoji };
}

// ============================================
// CONVERSATION ANALYTICS (for improvement)
// ============================================
function getConversationAnalytics() {
    const history = JSON.parse(localStorage.getItem('chatHistory') || '[]');
    
    const analytics = {
        totalMessages: history.length,
        intents: {},
        averageConfidence: 0,
        recentTopics: []
    };
    
    let totalConfidence = 0;
    let confidenceCount = 0;
    
    history.forEach(msg => {
        if (msg.intent) {
            analytics.intents[msg.intent] = (analytics.intents[msg.intent] || 0) + 1;
        }
        if (msg.confidence) {
            totalConfidence += msg.confidence;
            confidenceCount++;
        }
    });
    
    analytics.averageConfidence = confidenceCount > 0 ? totalConfidence / confidenceCount : 0;
    
    // Get recent topics (last 5 unique intents)
    const recentIntents = history.slice(-20).map(m => m.intent).filter(Boolean);
    analytics.recentTopics = [...new Set(recentIntents)].slice(-5);
    
    return analytics;
}

// ============================================
// ENHANCED PERSONALIZED WELCOME MESSAGE
// ============================================
function getPersonalizedWelcome() {
    const { greeting, emoji } = getTimeBasedGreeting();
    const insights = userProfileSystem.getInsights();
    const analytics = getConversationAnalytics();
    const proactiveSuggestion = proactiveSuggestions.getSuggestion();
    
    let welcomeMessage = `${emoji} ${greeting}`;
    
    // Add personalized name if known
    if (userProfileSystem.profile.nickname) {
        welcomeMessage += `, **${userProfileSystem.profile.nickname}**`;
    }
    welcomeMessage += `!`;
    
    // Returning user personalization
    if (insights.isReturningUser) {
        welcomeMessage += ` Senang bertemu kamu lagi! 😊`;
        
        // Show proactive suggestion if available
        if (proactiveSuggestion && proactiveSuggestion.priority !== 'low') {
            welcomeMessage += `<br><br>💡 ${proactiveSuggestion.suggestion}`;
        }
        
        // Show emotion trend insight
        const emotionInsight = emotionTracker.getInsight();
        if (emotionInsight && insights.riskLevel !== 'normal') {
            welcomeMessage += `<br><br>${emotionInsight}`;
        }
        
        // Mention unresolved issues
        if (insights.hasUnresolvedIssues) {
            welcomeMessage += `<br><br>Ada beberapa hal yang pernah kita diskusikan sebelumnya. Mau melanjutkan?`;
        }
    } else {
        welcomeMessage += `<br><br>Saya SIPAKAINGE, asisten kesehatan mental SMAN 1 Bone. 🏫`;
        welcomeMessage += `<br><br>Saya bisa membantu kamu dengan:`;
        welcomeMessage += `<br>• 💬 Layanan konseling & curhat`;
        welcomeMessage += `<br>• 🧪 Tes kesehatan mental`;
        welcomeMessage += `<br>• 😌 Tips relaksasi & mindfulness`;
        welcomeMessage += `<br>• 📚 Informasi kesehatan mental`;
    }
    
    welcomeMessage += `<br><br>Ada yang bisa saya bantu? 🤝`;
    
    return welcomeMessage;
}

// ============================================
// ENHANCED STYLES FOR v5.0
// ============================================
const v5Styles = document.createElement('style');
v5Styles.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }
    
    .achievement-notification {
        animation: slideInRight 0.5s ease;
    }
    
    .bot-message .message-content {
        position: relative;
    }
    
    .feedback-btn:hover {
        transform: scale(1.05);
    }
    
    .dialog-flow-indicator {
        background: linear-gradient(135deg, #e3f2fd, #bbdefb);
        border-left: 4px solid #2196f3;
        padding: 8px 12px;
        margin: 8px 0;
        border-radius: 0 8px 8px 0;
        font-size: 12px;
        color: #1565c0;
    }
    
    .emotion-indicator {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 11px;
        margin-left: 8px;
    }
    
    .emotion-positive { background: #e8f5e9; color: #2e7d32; }
    .emotion-negative { background: #ffebee; color: #c62828; }
    .emotion-neutral { background: #f5f5f5; color: #616161; }
    
    .technique-card {
        background: linear-gradient(135deg, #f5f7fa, #e4e8eb);
        border-radius: 12px;
        padding: 15px;
        margin: 10px 0;
        border-left: 4px solid #4a90a4;
    }
    
    .affirmation-card {
        background: linear-gradient(135deg, #fff9e6, #fff3cd);
        border-radius: 12px;
        padding: 15px;
        margin: 10px 0;
        text-align: center;
        font-style: italic;
        border: 2px solid #ffc107;
    }
    
    .gamification-badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        background: linear-gradient(135deg, #ffd700, #ffb347);
        color: #333;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: bold;
        animation: pulse 2s infinite;
    }
    
    .mood-entry {
        background: white;
        border-radius: 10px;
        padding: 10px 15px;
        margin: 5px 0;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .progress-bar {
        height: 8px;
        background: #e0e0e0;
        border-radius: 4px;
        overflow: hidden;
    }
    
    .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #4a90a4, #2ecc71);
        border-radius: 4px;
        transition: width 0.5s ease;
    }
    
    .resource-card {
        background: white;
        border-radius: 10px;
        padding: 12px;
        margin: 8px 0;
        border: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .resource-card:hover {
        transform: translateX(5px);
        border-color: #4a90a4;
        box-shadow: 0 3px 10px rgba(74,144,164,0.2);
    }
    
    .coping-toolkit {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 10px;
        margin: 10px 0;
    }
    
    .coping-item {
        background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
        border-radius: 10px;
        padding: 10px;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .coping-item:hover {
        transform: scale(1.05);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
`;
document.head.appendChild(v5Styles);

// ============================================
// ENHANCED COMMAND SHORTCUTS v5.0
// ============================================
const commandShortcuts = {
    '/help': () => `📚 **Perintah Tersedia v5.0:**

**📋 Dasar:**
• /help - Tampilkan bantuan ini
• /reset - Reset percakapan
• /profile - Lihat profil kamu

**🧪 Layanan:**
• /tes - Mulai tes mental health
• /konseling - Booking konseling
• /relaksasi - Tips relaksasi
• /darurat - Kontak darurat

**🧘 Teknik Terapi:**
• /cbt - Latihan CBT
• /dbt - Latihan DBT
• /mindfulness - Latihan mindfulness
• /breathing - Teknik pernapasan

**📊 Tracking:**
• /mood - Catat mood hari ini
• /journal - Lihat jurnal mood
• /progress - Lihat progress

**🎮 Gamifikasi:**
• /status - Status & points
• /badges - Lihat badges
• /checkin - Daily check-in

**💡 Lainnya:**
• /afirmasi - Dapatkan afirmasi
• /coping - Coping toolkit
• /tips - Tips random`,
    
    '/reset': () => {
        localStorage.removeItem('chatHistory');
        localStorage.removeItem('chatbotContext');
        conversationContext.messageCount = 0;
        conversationContext.conversationHistory = [];
        return '🔄 Percakapan telah direset. Mulai dari awal!';
    },
    
    '/profile': () => {
        const p = userProfileSystem.profile;
        const g = gamificationSystem.getProgress();
        return `👤 **Profil Lengkap Kamu:**

**Identitas:**
• ID: ${p.id.substring(0, 15)}...
• Nickname: ${p.nickname || 'Belum diset'}
• Visit ke-${p.visitCount}

**Statistik:**
• Total pesan: ${p.totalMessages}
• Topik dibahas: ${p.topicsDiscussed.length}
• Risk Level: ${p.riskLevel}

**Gamifikasi:**
• Level: ${g.level}
• Points: ${g.points}
• Streak: ${g.streak} hari
• Badges: ${g.badges}/${g.totalBadges}

**Mood Trend:** ${emotionTracker.getRecentTrend()}`;
    },
    
    '/tes': () => {
        startDialogFlow('tesMental');
        return null;
    },
    
    '/konseling': () => {
        startDialogFlow('bookingKonseling');
        return null;
    },
    
    '/relaksasi': () => `😌 **Tips Relaksasi Cepat:**

1. **Teknik 4-7-8:**
   Tarik napas 4 detik → Tahan 7 detik → Hembuskan 8 detik

2. **Grounding 5-4-3-2-1:**
   • 5 hal yang kamu lihat
   • 4 hal yang kamu sentuh
   • 3 hal yang kamu dengar
   • 2 hal yang kamu cium
   • 1 hal yang kamu rasa

3. **Body Scan:**
   Fokus pada tiap bagian tubuh dari kepala ke kaki, lepaskan ketegangan.

Kunjungi menu **Relaksasi** untuk guided meditation! 🧘`,
    
    '/darurat': () => `🆘 **Kontak Darurat:**

**Sekolah:**
• Ruang BK SMAN 1 Bone - Datang langsung

**Hotline 24 Jam:**
• Into The Light: 119 ext 8
• Yayasan Pulih: (021) 788-42580
• LSM Jangan Bunuh Diri: (021) 9696-9293

**Darurat Medis:**
• Rumah Sakit Terdekat: 119

⚠️ Jika dalam bahaya segera, hubungi 119 atau minta tolong orang terdekat.`,

    '/cbt': () => {
        const exercises = therapeuticTechniques.cbt.exercises;
        const random = exercises[Math.floor(Math.random() * exercises.length)];
        return `🧠 **Cognitive Behavioral Therapy**\n\n${random.emoji} **${random.name}**\n\n${random.instruction}`;
    },
    
    '/dbt': () => {
        const exercises = therapeuticTechniques.dbt.exercises;
        const random = exercises[Math.floor(Math.random() * exercises.length)];
        return `💪 **Dialectical Behavior Therapy**\n\n${random.emoji} **${random.name}**\n\n${random.instruction}`;
    },
    
    '/mindfulness': () => {
        const exercises = therapeuticTechniques.mindfulness.exercises;
        const random = exercises[Math.floor(Math.random() * exercises.length)];
        return `🧘 **Mindfulness & Relaxation**\n\n${random.emoji} **${random.name}**\n\n${random.instruction}`;
    },
    
    '/breathing': () => therapeuticTechniques.mindfulness.exercises.find(e => e.name === 'Box Breathing').instruction,
    
    '/mood': () => {
        conversationContext.dialogState.isMultiTurn = true;
        conversationContext.dialogState.currentFlow = 'moodEntry';
        conversationContext.dialogState.flowStep = 0;
        return `📊 **Catat Mood Hari Ini**

Bagaimana perasaanmu saat ini?

😄 Sangat Baik
😊 Baik  
😐 Biasa
😔 Kurang Baik
😢 Buruk
😰 Cemas
😠 Marah

(Ketik atau pilih emoji di atas)`;
    },
    
    '/journal': () => moodJournal.generateReport(),
    
    '/progress': () => {
        const summary = progressTracker.getProgressSummary();
        return `📈 **Progress Kamu:**

**Milestones:** ${summary.totalMilestones} tercapai
${summary.recentMilestones.slice(-3).map(m => `✅ ${m.title}`).join('\n') || 'Belum ada milestone'}

**Goals Aktif:** ${summary.activeGoals.length}
${summary.activeGoals.slice(0, 3).map(g => `🎯 ${g.title} (${g.progress}%)`).join('\n') || 'Belum ada goal aktif'}

**Completed Goals:** ${summary.completedGoals}

💡 Tetap konsisten untuk progress yang lebih baik!`;
    },
    
    '/status': () => gamificationSystem.getStatusCard(),
    
    '/badges': () => {
        const earned = gamificationSystem.data.badges;
        const all = gamificationSystem.badges;
        
        let response = `🎖️ **Badges Collection**\n\n**Unlocked (${earned.length}/${all.length}):**\n`;
        
        all.forEach(badge => {
            if (earned.includes(badge.id)) {
                response += `✅ ${badge.name} - ${badge.description}\n`;
            } else {
                response += `🔒 ??? - ${badge.description}\n`;
            }
        });
        
        return response;
    },
    
    '/checkin': () => {
        const result = gamificationSystem.dailyCheckIn();
        if (result.success) {
            return `${result.message}

🔥 Streak: ${result.streak} hari
⭐ Total Points: ${result.totalPoints}

${result.streak >= 7 ? '🎉 Streak seminggu! Kamu luar biasa!' : 
  result.streak >= 3 ? '💪 Keep going! 3 hari lagi untuk badge Week Warrior!' : 
  '✨ Awal yang bagus! Terus check-in setiap hari!'}`;
        }
        return result.message;
    },
    
    '/afirmasi': () => {
        const issues = userProfileSystem.profile.topicsDiscussed.slice(-3);
        const affirmation = getPersonalizedAffirmation(conversationContext.userMood, issues);
        return `💝 **Afirmasi Untukmu:**\n\n"${affirmation}"\n\n✨ Ulangi afirmasi ini 3x dengan penuh keyakinan.`;
    },
    
    '/coping': () => {
        let response = `🛠️ **Coping Toolkit**\n\nPilih kategori sesuai yang kamu rasakan:\n\n`;
        
        for (const [key, category] of Object.entries(copingToolkit)) {
            response += `**${category.name}**\n`;
            category.techniques.slice(0, 2).forEach(t => {
                response += `• ${t.name}: ${t.description}\n`;
            });
            response += '\n';
        }
        
        return response + `💡 Ketik nama teknik untuk instruksi lengkap.`;
    },
    
    '/tips': () => {
        const allTips = [
            "🌟 Tidur 7-9 jam setiap malam untuk kesehatan mental optimal.",
            "💧 Minum air putih cukup. Dehidrasi bisa memperburuk mood.",
            "🚶 Jalan kaki 10 menit saja bisa meningkatkan mood.",
            "📵 Batasi screen time, terutama sebelum tidur.",
            "🌿 Luangkan waktu di alam, minimal 20 menit per minggu.",
            "📝 Tulis 3 hal yang kamu syukuri setiap malam.",
            "🤗 Pelukan 20 detik bisa melepaskan oxytocin (hormon bahagia).",
            "🎵 Dengarkan musik yang menenangkan saat stres.",
            "🧘 5 menit meditasi lebih baik daripada tidak sama sekali.",
            "💬 Bicara dengan seseorang yang dipercaya setidaknya seminggu sekali.",
            "🎯 Tetapkan 1-3 prioritas harian saja, jangan terlalu banyak.",
            "😊 Tersenyum (meski dipaksakan) bisa meningkatkan mood.",
            "🌅 Paparan sinar matahari pagi membantu regulasi mood.",
            "✅ Rayakan pencapaian kecil, sekecil apapun.",
            "🚫 Tidak apa-apa untuk mengatakan 'tidak' pada orang lain."
        ];
        
        const randomTip = allTips[Math.floor(Math.random() * allTips.length)];
        return `💡 **Tips Kesehatan Mental:**\n\n${randomTip}\n\n_(Ketik /tips lagi untuk tips baru)_`;
    }
};

// Check for command shortcuts in message
function checkCommandShortcut(message) {
    const command = message.toLowerCase().trim();
    if (commandShortcuts[command]) {
        return commandShortcuts[command]();
    }
    return null;
}

// ============================================
// ENHANCED EMPATHETIC RESPONSES
// ============================================
const empatheticPhrases = {
    acknowledgment: [
        "Aku dengar kamu. Itu pasti tidak mudah.",
        "Terima kasih sudah mau berbagi. Aku di sini untukmu.",
        "Perasaanmu sangat valid. Wajar untuk merasa seperti itu.",
        "Aku bisa membayangkan betapa beratnya ini untukmu.",
        "Kamu tidak sendirian dalam ini. Aku mengerti.",
        "Itu terdengar sangat challenging. Kamu kuat sudah bertahan."
    ],
    encouragement: [
        "Kamu sudah melakukan yang terbaik dengan apa yang kamu punya.",
        "Setiap langkah kecil adalah kemajuan. Kamu melangkah.",
        "Butuh keberanian untuk berbagi seperti ini. Aku bangga padamu.",
        "Kamu lebih kuat dari yang kamu kira. Buktinya, kamu di sini.",
        "Badai ini akan berlalu. Kamu akan melewatinya.",
        "Apa yang kamu rasakan sementara. Siapa kamu itu permanen."
    ],
    support: [
        "Aku di sini, kapanpun kamu butuh bicara.",
        "Kamu tidak harus menghadapi ini sendirian.",
        "Ada banyak orang yang peduli padamu, termasuk aku.",
        "Bantuan tersedia dan kamu layak mendapatkannya.",
        "Mencari bantuan bukan kelemahan, tapi keberanian.",
        "Apapun yang kamu butuhkan, mari kita cari jalan keluarnya bersama."
    ],
    transition: [
        "Mari kita lihat apa yang bisa membantu...",
        "Berdasarkan yang kamu ceritakan, aku punya beberapa ide...",
        "Ada beberapa hal yang mungkin bisa dicoba...",
        "Aku punya beberapa saran yang mungkin membantu...",
        "Langkah selanjutnya yang bisa kita ambil..."
    ]
};

function getEmpatheticPhrase(type) {
    const phrases = empatheticPhrases[type] || empatheticPhrases.support;
    return phrases[Math.floor(Math.random() * phrases.length)];
}

// ============================================
// SMART RESPONSE BUILDER v5.0
// ============================================
function buildEnhancedResponse(intent, sentiment, entities, questionType) {
    let response = '';
    const parts = [];
    
    // Part 1: Empathetic Acknowledgment for emotional content
    if (sentiment.mood === 'negative' || sentiment.mood === 'urgent') {
        parts.push(getEmpatheticPhrase('acknowledgment'));
    }
    
    // Part 2: Main content based on intent
    const mainResponse = getMainResponse(intent, questionType, entities);
    parts.push(mainResponse);
    
    // Part 3: Relevant technique if emotional
    if (['cemas', 'depresi', 'stres'].includes(intent) && entities.severity !== 'severe') {
        const technique = getRelevantTechnique(intent);
        if (technique) {
            parts.push(`\n💡 **Quick Technique:** ${technique}`);
        }
    }
    
    // Part 4: Personalized affirmation for negative sentiment
    if (sentiment.mood === 'negative' && Math.random() > 0.5) {
        const affirmation = getPersonalizedAffirmation(sentiment.mood, entities.issues);
        parts.push(`\n\n✨ _"${affirmation}"_`);
    }
    
    // Part 5: Resource recommendations
    if (entities.issues && entities.issues.length > 0) {
        const resources = resourceLibrary.formatRecommendations(entities.issues);
        if (resources) {
            parts.push(resources);
        }
    }
    
    // Part 6: Encouragement for negative sentiment
    if (sentiment.mood === 'negative' || sentiment.mood === 'urgent') {
        parts.push('\n\n' + getEmpatheticPhrase('support'));
    }
    
    // Award points for meaningful interaction
    if (intent !== 'greetings' && intent !== 'thanks') {
        gamificationSystem.addPoints(2, 'Meaningful conversation');
    }
    
    return parts.join('\n\n');
}

function getRelevantTechnique(intent) {
    const quickTechniques = {
        cemas: "Coba teknik 4-7-8: Tarik napas 4 detik, tahan 7 detik, hembuskan 8 detik. Ulangi 3x.",
        stres: "Brain dump: Tulis semua yang ada di pikiranmu tanpa filter selama 5 menit.",
        depresi: "Opposite action: Walau ingin sendirian, coba hubungi 1 orang yang dipercaya hari ini."
    };
    return quickTechniques[intent];
}

// ============================================
// INITIALIZE CHATBOT v5.0
// ============================================
console.log('');
console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║   🤖 SIPAKAINGE Professional Chatbot v5.0 ULTIMATE       ║');
console.log('║   SMAN 1 Bone Mental Health Services                      ║');
console.log('╠═══════════════════════════════════════════════════════════╣');
console.log('║   ✅ Therapeutic Techniques (CBT, DBT, Mindfulness)      ║');
console.log('║   ✅ Mood Journal & Tracking                              ║');
console.log('║   ✅ Gamification (Points, Badges, Streaks)              ║');
console.log('║   ✅ Smart Affirmations                                   ║');
console.log('║   ✅ Coping Toolkit                                       ║');
console.log('║   ✅ Resource Recommendations                             ║');
console.log('║   ✅ Progress Tracking                                    ║');
console.log('║   ✅ Empathetic Response Engine                           ║');
console.log('║   ✅ Enhanced Command Shortcuts (20+ commands)           ║');
console.log('╚═══════════════════════════════════════════════════════════╝');
console.log('');
console.log('📊 User Profile:', userProfileSystem.getInsights());
console.log('🎮 Gamification:', gamificationSystem.getProgress());
console.log('🎯 Mood Trend:', emotionTracker.getRecentTrend());
