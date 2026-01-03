// ============================================
// TES MENTAL HEALTH FUNCTIONALITY
// ============================================

// Test Questions Database
const testsDatabase = {
    phq9: {
        title: 'Tes Depresi (PHQ-9)',
        questions: [
            {
                text: 'Ngerasa males atau nggak tertarik sama hal-hal yang biasanya kamu suka',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            },
            {
                text: 'Ngerasa sedih, down, atau nggak ada harapan',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            },
            {
                text: 'Susah tidur, kebangun terus, atau malah kebanyakan tidur',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            },
            {
                text: 'Ngerasa capek banget atau nggak ada tenaga',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            },
            {
                text: 'Nggak nafsu makan atau malah makan terus-terusan',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            },
            {
                text: 'Ngerasa jelek tentang diri sendiri atau ngerasa gagal',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            },
            {
                text: 'Susah fokus, misalnya pas belajar, baca buku, atau nonton',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            },
            {
                text: 'Gerak atau ngomong jadi lambat banget, atau malah gelisah terus',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            },
            {
                text: 'Punya pikiran kalau lebih baik nggak ada atau mau nyakitin diri sendiri',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            }
        ],
        scoring: {
            ranges: [
                { min: 0, max: 4, category: 'Minimal', color: '#4CAF50', description: 'Kamu baik-baik aja nih! Nggak ada tanda-tanda depresi yang perlu dikhawatirin. Tetap jaga mood dan semangatmu ya!', recommendations: ['Tetap jalani hidup sehat', 'Lanjutin hobi dan hal yang kamu suka', 'Jaga pertemanan yang positif', 'Olahraga rutin biar tetap fresh'] },
                { min: 5, max: 9, category: 'Ringan', color: '#FFC107', description: 'Kamu mungkin lagi ngerasa agak down. Tenang, ini masih bisa diatasi dengan mengubah kebiasaan sehari-hari kok.', recommendations: ['Coba lebih sering gerak atau olahraga', 'Atur jam tidur yang teratur', 'Luangin waktu buat hal yang kamu suka', 'Kalau terus-terusan, coba cerita ke guru BK atau konselor'] },
                { min: 10, max: 14, category: 'Sedang', color: '#FF9800', description: 'Kamu kayaknya lagi butuh bantuan nih. Nggak apa-apa, banyak orang yang pernah ngalamin ini. Yuk, coba cerita ke orang yang kamu percaya.', recommendations: ['Cerita ke orang tua, guru BK, atau konselor', 'Coba konsultasi ke psikolog', 'Jangan menyendiri, tetap ngobrol sama teman', 'Tulis perasaanmu di jurnal'] },
                { min: 15, max: 19, category: 'Cukup Berat', color: '#FF5722', description: 'Kamu butuh bantuan dari ahli nih. Jangan ragu buat minta tolong ya, karena kamu nggak sendirian!', recommendations: ['Segera hubungi psikolog atau konselor sekolah', 'Cerita ke orang tua atau orang dewasa yang kamu percaya', 'Jangan hadapi sendiri', 'Ikuti saran dari profesional'] },
                { min: 20, max: 27, category: 'Berat', color: '#F44336', description: 'Ini serius dan kamu butuh bantuan profesional sekarang. Ingat, minta tolong itu bukan kelemahan. Banyak yang peduli sama kamu!', recommendations: ['Hubungi psikolog/psikiater SEKARANG', 'Cerita ke orang tua atau guru BK', 'Kamu mungkin butuh terapi dan pendampingan', 'Jangan sendirian, selalu ada yang peduli sama kamu'] }
            ]
        }
    },
    gad7: {
        title: 'Tes Kecemasan (GAD-7)',
        questions: [
            {
                text: 'Ngerasa nervous, cemas, atau gelisah',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            },
            {
                text: 'Nggak bisa berhenti khawatir atau overthinking',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            },
            {
                text: 'Terlalu banyak mikirin banyak hal sekaligus',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            },
            {
                text: 'Susah buat santai atau rileks',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            },
            {
                text: 'Gelisah banget sampai susah diem atau duduk tenang',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            },
            {
                text: 'Gampang kesel atau gampang marah',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            },
            {
                text: 'Ngerasa takut kayak bakal ada hal buruk yang terjadi',
                options: [
                    { text: 'Nggak pernah', value: 0 },
                    { text: 'Beberapa hari aja', value: 1 },
                    { text: 'Lebih dari seminggu', value: 2 },
                    { text: 'Hampir tiap hari', value: 3 }
                ]
            }
        ],
        scoring: {
            ranges: [
                { min: 0, max: 4, category: 'Minimal', color: '#4CAF50', description: 'Kamu cukup tenang dan bisa handle stres dengan baik. Pertahankan ya!', recommendations: ['Tetap lakukan hal yang bikin rileks', 'Jaga pola hidup sehat', 'Coba meditasi atau mindfulness', 'Jaga keseimbangan waktu belajar dan istirahat'] },
                { min: 5, max: 9, category: 'Ringan', color: '#FFC107', description: 'Kamu kadang ngerasa cemas, tapi masih bisa diatasi dengan cara sederhana kok.', recommendations: ['Coba teknik napas dalam saat panik', 'Meditasi sebentar tiap hari', 'Kurangi kopi atau minuman berkafein', 'Olahraga ringan biar rileks'] },
                { min: 10, max: 14, category: 'Sedang', color: '#FF9800', description: 'Kecemasan kamu lumayan tinggi nih. Coba cerita ke orang yang kamu percaya atau konselor sekolah.', recommendations: ['Cerita ke guru BK atau konselor', 'Pelajari cara mengelola pikiran negatif', 'Hindari hal-hal yang bikin cemas', 'Gabung komunitas atau ekstrakurikuler yang supportive'] },
                { min: 15, max: 21, category: 'Berat', color: '#F44336', description: 'Kecemasan kamu cukup berat. Nggak apa-apa minta bantuan, itu hal yang wajar dan penting!', recommendations: ['Segera cerita ke psikolog atau konselor', 'Mungkin butuh pendampingan lebih lanjut', 'Jangan simpan sendiri', 'Minta dukungan dari keluarga dan teman dekat'] }
            ]
        }
    },
    'self-esteem': {
        title: 'Tes Percaya Diri (Self-Esteem)',
        questions: [
            {
                text: 'Aku ngerasa kalau aku ini orang yang berharga',
                options: [
                    { text: 'Banget nggak setuju', value: 0 },
                    { text: 'Nggak setuju', value: 1 },
                    { text: 'Setuju', value: 2 },
                    { text: 'Setuju banget', value: 3 }
                ]
            },
            {
                text: 'Aku ngerasa punya banyak kelebihan yang oke',
                options: [
                    { text: 'Banget nggak setuju', value: 0 },
                    { text: 'Nggak setuju', value: 1 },
                    { text: 'Setuju', value: 2 },
                    { text: 'Setuju banget', value: 3 }
                ]
            },
            {
                text: 'Aku sering ngerasa kayak orang yang gagal',
                options: [
                    { text: 'Setuju banget', value: 0 },
                    { text: 'Setuju', value: 1 },
                    { text: 'Nggak setuju', value: 2 },
                    { text: 'Banget nggak setuju', value: 3 }
                ]
            },
            {
                text: 'Aku bisa ngelakuin sesuatu sama bagusnya kayak orang lain',
                options: [
                    { text: 'Banget nggak setuju', value: 0 },
                    { text: 'Nggak setuju', value: 1 },
                    { text: 'Setuju', value: 2 },
                    { text: 'Setuju banget', value: 3 }
                ]
            },
            {
                text: 'Aku ngerasa nggak punya banyak hal yang bisa dibanggain',
                options: [
                    { text: 'Setuju banget', value: 0 },
                    { text: 'Setuju', value: 1 },
                    { text: 'Nggak setuju', value: 2 },
                    { text: 'Banget nggak setuju', value: 3 }
                ]
            },
            {
                text: 'Aku punya pandangan yang positif tentang diri sendiri',
                options: [
                    { text: 'Banget nggak setuju', value: 0 },
                    { text: 'Nggak setuju', value: 1 },
                    { text: 'Setuju', value: 2 },
                    { text: 'Setuju banget', value: 3 }
                ]
            },
            {
                text: 'Secara keseluruhan, aku puas sama diri sendiri',
                options: [
                    { text: 'Banget nggak setuju', value: 0 },
                    { text: 'Nggak setuju', value: 1 },
                    { text: 'Setuju', value: 2 },
                    { text: 'Setuju banget', value: 3 }
                ]
            },
            {
                text: 'Aku berharap bisa lebih menghargai diri sendiri',
                options: [
                    { text: 'Setuju banget', value: 0 },
                    { text: 'Setuju', value: 1 },
                    { text: 'Nggak setuju', value: 2 },
                    { text: 'Banget nggak setuju', value: 3 }
                ]
            },
            {
                text: 'Aku ngerasa nggak berguna',
                options: [
                    { text: 'Setuju banget', value: 0 },
                    { text: 'Setuju', value: 1 },
                    { text: 'Nggak setuju', value: 2 },
                    { text: 'Banget nggak setuju', value: 3 }
                ]
            },
            {
                text: 'Kadang aku mikir kalau aku ini nggak ada bagusnya sama sekali',
                options: [
                    { text: 'Setuju banget', value: 0 },
                    { text: 'Setuju', value: 1 },
                    { text: 'Nggak setuju', value: 2 },
                    { text: 'Banget nggak setuju', value: 3 }
                ]
            }
        ],
        scoring: {
            ranges: [
                { min: 0, max: 10, category: 'Rendah', color: '#F44336', description: 'Kayaknya kamu kurang percaya diri nih. Tapi tenang, ini bisa dibangun pelan-pelan kok!', recommendations: ['Fokus ke kelebihan kamu, bukan kekurangan', 'Jangan terlalu keras sama diri sendiri', 'Coba cerita ke guru BK atau konselor', 'Cari teman atau komunitas yang supportive'] },
                { min: 11, max: 20, category: 'Sedang', color: '#FF9800', description: 'Percaya diri kamu lumayan, tapi masih bisa ditingkatkan lagi nih!', recommendations: ['Coba positive self-talk tiap hari', 'Buat target kecil dan rayakan pas tercapai', 'Terima kelebihan dan kekurangan kamu', 'Coba pelajari skill baru yang kamu suka'] },
                { min: 21, max: 30, category: 'Tinggi', color: '#4CAF50', description: 'Keren! Kamu punya kepercayaan diri yang bagus. Pertahankan ya!', recommendations: ['Tetap berpikir positif', 'Bantu teman yang butuh dukungan', 'Terus tantang diri dengan hal baru', 'Jadi contoh yang baik buat teman-teman'] }
            ]
        }
    },
    checkin: {
        title: 'Cek Mood Harian',
        questions: [
            {
                text: 'Gimana perasaan kamu hari ini?',
                options: [
                    { text: 'Parah banget', value: 0 },
                    { text: 'Kurang oke', value: 1 },
                    { text: 'Biasa aja', value: 2 },
                    { text: 'Lumayan oke', value: 3 },
                    { text: 'Bagus banget!', value: 4 }
                ]
            },
            {
                text: 'Gimana tidur kamu tadi malam?',
                options: [
                    { text: 'Jelek banget', value: 0 },
                    { text: 'Kurang nyenyak', value: 1 },
                    { text: 'Lumayan', value: 2 },
                    { text: 'Nyenyak', value: 3 },
                    { text: 'Pulas banget!', value: 4 }
                ]
            },
            {
                text: 'Seberapa semangat kamu hari ini?',
                options: [
                    { text: 'Lemes banget', value: 0 },
                    { text: 'Agak lemes', value: 1 },
                    { text: 'Biasa aja', value: 2 },
                    { text: 'Semangat', value: 3 },
                    { text: 'Full energy!', value: 4 }
                ]
            },
            {
                text: 'Seberapa stres kamu hari ini?',
                options: [
                    { text: 'Stres berat', value: 0 },
                    { text: 'Lumayan stres', value: 1 },
                    { text: 'Agak stres', value: 2 },
                    { text: 'Santai', value: 3 },
                    { text: 'Rileks banget!', value: 4 }
                ]
            },
            {
                text: 'Seberapa produktif kamu hari ini?',
                options: [
                    { text: 'Nggak produktif', value: 0 },
                    { text: 'Kurang produktif', value: 1 },
                    { text: 'Lumayan', value: 2 },
                    { text: 'Produktif', value: 3 },
                    { text: 'Super produktif!', value: 4 }
                ]
            }
        ],
        scoring: {
            ranges: [
                { min: 0, max: 5, category: 'Buruk', color: '#F44336', description: 'Hari ini kayaknya berat ya buat kamu. Nggak apa-apa, besok pasti lebih baik!', recommendations: ['Istirahat yang cukup ya', 'Lakuin hal yang bikin kamu seneng', 'Ngobrol sama teman atau keluarga', 'Ingat, besok adalah hari baru'] },
                { min: 6, max: 12, category: 'Cukup', color: '#FF9800', description: 'Hari kamu biasa aja. Masih bisa dibikin lebih oke lagi!', recommendations: ['Manjain diri sedikit', 'Gerak-gerak atau jalan-jalan sebentar', 'Makan yang sehat', 'Tidur cukup malam ini'] },
                { min: 13, max: 16, category: 'Baik', color: '#FFC107', description: 'Hari yang oke! Pertahankan mood-nya ya!', recommendations: ['Syukuri hal-hal kecil', 'Share kebahagiaan ke teman', 'Jaga konsistensi', 'Catat momen positif hari ini'] },
                { min: 17, max: 20, category: 'Sangat Baik', color: '#4CAF50', description: 'Wah, hari yang keren! Kamu lagi di kondisi terbaik nih!', recommendations: ['Nikmatin momen ini', 'Rayain pencapaian kamu', 'Bantu teman yang butuh', 'Pertahankan pola positif ini'] }
            ]
        }
    },
    dass21: {
        title: 'Tes Depresi, Kecemasan & Stres (DASS-30)',
        questions: [
            // Depression subscale (10 questions)
            { text: 'Aku ngerasa susah buat mulai ngerjain sesuatu', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku ngerasa nggak ada yang bisa diharapin', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku ngerasa hidup ini nggak ada yang menarik', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku ngerasa sedih dan down', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku nggak bisa ngerasain perasaan positif', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku ngerasa hidup ini nggak ada artinya', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku nggak ada semangat buat ngapa-ngapain', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku nggak bisa excited sama hal apapun', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku ngerasa nggak berharga', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku nggak bisa enjoy hal-hal yang biasanya aku suka', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            
            // Anxiety subscale (10 questions)
            { text: 'Tangan atau badan aku sering gemetar', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku khawatir sama situasi yang bikin aku panik', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku ngerasa bakal ada sesuatu yang menakutkan terjadi', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Mulut aku sering kering', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku ngerasa sesak napas padahal nggak habis olahraga', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Jantung aku deg-degan padahal lagi santai', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku takut tanpa sebab yang jelas', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku ngerasa mau pingsan', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku sadar detak jantung aku kenceng padahal lagi diem aja', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku cemas tanpa alasan yang jelas', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            
            // Stress subscale (10 questions)
            { text: 'Aku susah buat santai atau rileks', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku gampang tersinggung', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku gampang marah atau kesel', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku gelisah dan nggak bisa tenang', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku susah sabar kalau ada yang ganggu', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku tegang terus dan nggak bisa tenang', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku nggak tahan sama hal yang ngalangin aku', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku ngerasa hampir panik', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku susah tenang setelah ada yang bikin kesel', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]},
            { text: 'Aku menghabiskan banyak energi buat khawatir', options: [
                { text: 'Nggak pernah', value: 0 }, { text: 'Kadang-kadang', value: 1 }, 
                { text: 'Sering', value: 2 }, { text: 'Hampir terus-terusan', value: 3 }
            ]}
        ],
        scoring: {
            ranges: [
                { min: 0, max: 9, category: 'Normal', color: '#4CAF50', description: 'Tingkat depresi, kecemasan, dan stres kamu dalam batas normal. Mental kamu sehat nih!', recommendations: ['Tetap jalani hidup sehat', 'Lanjutin hal-hal yang bikin kamu seneng', 'Jaga pertemanan yang positif', 'Olahraga rutin'] },
                { min: 10, max: 20, category: 'Ringan', color: '#8BC34A', description: 'Kamu ngalamin tingkat ringan dari depresi, kecemasan, atau stres. Masih bisa diatasi kok.', recommendations: ['Coba teknik relaksasi', 'Atur jam tidur yang teratur', 'Kurangi beban kalau bisa', 'Luangin waktu buat self-care'] },
                { min: 21, max: 33, category: 'Sedang', color: '#FFC107', description: 'Kamu ngalamin tingkat sedang. Coba cari bantuan atau dukungan dari orang terdekat.', recommendations: ['Cerita ke guru BK atau konselor', 'Coba terapi atau konseling', 'Praktekkan mindfulness', 'Kurangi hal-hal yang bikin stres'] },
                { min: 34, max: 42, category: 'Berat', color: '#FF9800', description: 'Tingkat kamu cukup tinggi. Bantuan profesional sangat disarankan.', recommendations: ['Segera cerita ke psikolog/konselor', 'Coba terapi lebih intensif', 'Jangan menyendiri', 'Minta dukungan keluarga'] },
                { min: 43, max: 63, category: 'Sangat Berat', color: '#F44336', description: 'Tingkat kamu sangat tinggi. Segera cari bantuan profesional ya!', recommendations: ['Hubungi profesional SEKARANG', 'Mungkin butuh kombinasi terapi dan pendampingan', 'Jangan hadapi sendiri', 'Aktifkan dukungan dari orang-orang terdekat'] }
            ]
        }
    },

    burnout: {
        title: 'Tes Kelelahan (Burnout)',
        questions: [
            {
                text: 'Aku ngerasa capek banget secara emosi karena tugas/kegiatan sekolah',
                options: [
                    { text: 'Nggak Pernah', value: 0 },
                    { text: 'Beberapa kali setahun', value: 1 },
                    { text: 'Sebulan sekali', value: 2 },
                    { text: 'Beberapa kali sebulan', value: 3 },
                    { text: 'Tiap minggu', value: 4 },
                    { text: 'Beberapa kali seminggu', value: 5 },
                    { text: 'Tiap hari', value: 6 }
                ]
            },
            {
                text: 'Aku ngerasa habis semua tenaga di akhir hari sekolah',
                options: [
                    { text: 'Nggak Pernah', value: 0 },
                    { text: 'Beberapa kali setahun', value: 1 },
                    { text: 'Sebulan sekali', value: 2 },
                    { text: 'Beberapa kali sebulan', value: 3 },
                    { text: 'Tiap minggu', value: 4 },
                    { text: 'Beberapa kali seminggu', value: 5 },
                    { text: 'Tiap hari', value: 6 }
                ]
            },
            {
                text: 'Aku udah capek duluan pas bangun pagi dan harus sekolah lagi',
                options: [
                    { text: 'Nggak Pernah', value: 0 },
                    { text: 'Beberapa kali setahun', value: 1 },
                    { text: 'Sebulan sekali', value: 2 },
                    { text: 'Beberapa kali sebulan', value: 3 },
                    { text: 'Tiap minggu', value: 4 },
                    { text: 'Beberapa kali seminggu', value: 5 },
                    { text: 'Tiap hari', value: 6 }
                ]
            },
            {
                text: 'Ngerjain tugas kelompok atau kerja sama dengan orang seharian bikin aku stres',
                options: [
                    { text: 'Nggak Pernah', value: 0 },
                    { text: 'Beberapa kali setahun', value: 1 },
                    { text: 'Sebulan sekali', value: 2 },
                    { text: 'Beberapa kali sebulan', value: 3 },
                    { text: 'Tiap minggu', value: 4 },
                    { text: 'Beberapa kali seminggu', value: 5 },
                    { text: 'Tiap hari', value: 6 }
                ]
            },
            {
                text: 'Aku ngerasa frustasi sama tugas-tugas dan kegiatan sekolah',
                options: [
                    { text: 'Nggak Pernah', value: 0 },
                    { text: 'Beberapa kali setahun', value: 1 },
                    { text: 'Sebulan sekali', value: 2 },
                    { text: 'Beberapa kali sebulan', value: 3 },
                    { text: 'Tiap minggu', value: 4 },
                    { text: 'Beberapa kali seminggu', value: 5 },
                    { text: 'Tiap hari', value: 6 }
                ]
            }
        ],
        scoring: {
            ranges: [
                { min: 0, max: 10, category: 'Tidak Ada Burnout', color: '#4CAF50', description: 'Kamu nggak ngalamin burnout. Keseimbangan hidup kamu oke nih!', recommendations: ['Pertahankan pola hidup sehat', 'Jaga keseimbangan belajar dan istirahat', 'Lanjutin self-care rutin', 'Tetap aware sama tanda-tanda kelelahan'] },
                { min: 11, max: 20, category: 'Burnout Ringan', color: '#FFC107', description: 'Kamu mulai nunjukin tanda-tanda kelelahan ringan nih.', recommendations: ['Coba evaluasi beban tugas kamu', 'Tambah waktu istirahat', 'Bikin batasan yang jelas antara belajar dan santai', 'Lakuin aktivitas yang bikin rileks'] },
                { min: 21, max: 30, category: 'Burnout Sedang', color: '#FF9800', description: 'Kamu ngalamin kelelahan tingkat sedang. Perlu perhatian serius nih.', recommendations: ['Ambil libur sebentar kalau bisa', 'Obrolin sama ortu atau guru tentang beban tugas', 'Cerita ke konselor sekolah', 'Evaluasi ulang prioritas kamu'] },
                { min: 31, max: 42, category: 'Burnout Berat', color: '#F44336', description: 'Kamu ngalamin kelelahan yang serius. Harus ambil tindakan sekarang!', recommendations: ['Istirahat dulu SEKARANG', 'Cerita ke konselor atau psikolog', 'Evaluasi ulang aktivitas kamu', 'Utamakan kesehatan mental kamu'] }
            ]
        }
    },

    mbti: {
        title: 'Tes Kepribadian MBTI',
        questions: [
            // E vs I (Extraversion vs Introversion) - 10 questions
            { text: 'Aku lebih suka ngabisin waktu sama banyak orang daripada sendirian', dimension: 'EI', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku ngerasa berenergi setelah kumpul sama banyak orang', dimension: 'EI', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku cenderung mikir sambil ngobrol sama orang lain', dimension: 'EI', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku gampang berteman sama orang baru', dimension: 'EI', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku lebih suka kerja kelompok daripada sendiri', dimension: 'EI', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku butuh waktu sendiri buat recharge energi', dimension: 'EI', options: [
                { text: 'Banget nggak setuju', value: 2 }, { text: 'Nggak setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Setuju banget', value: -2 }
            ]},
            { text: 'Aku lebih milih obrolan santai daripada ngobrol deep sama sedikit orang', dimension: 'EI', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku sering jadi pusat perhatian pas kumpul-kumpul', dimension: 'EI', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku lebih suka dengerin daripada ngomong dalam diskusi kelompok', dimension: 'EI', options: [
                { text: 'Banget nggak setuju', value: 2 }, { text: 'Nggak setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Setuju banget', value: -2 }
            ]},
            { text: 'Aku nyaman mulai ngobrol sama orang yang baru kenal', dimension: 'EI', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            
            // S vs N (Sensing vs Intuition) - 10 questions
            { text: 'Aku lebih fokus ke fakta dan detail daripada kemungkinan masa depan', dimension: 'SN', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku lebih percaya pengalaman nyata daripada intuisi', dimension: 'SN', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku lebih suka instruksi yang jelas dan detail', dimension: 'SN', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku orangnya praktis dan realistis', dimension: 'SN', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku lebih suka ngerjain sesuatu dengan cara yang udah terbukti', dimension: 'SN', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku sering mikirin kemungkinan dan teori-teori', dimension: 'SN', options: [
                { text: 'Banget nggak setuju', value: 2 }, { text: 'Nggak setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Setuju banget', value: -2 }
            ]},
            { text: 'Aku lebih tertarik sama pola dan koneksi daripada detail spesifik', dimension: 'SN', options: [
                { text: 'Banget nggak setuju', value: 2 }, { text: 'Nggak setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Setuju banget', value: -2 }
            ]},
            { text: 'Aku percaya sama feeling aku', dimension: 'SN', options: [
                { text: 'Banget nggak setuju', value: 2 }, { text: 'Nggak setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Setuju banget', value: -2 }
            ]},
            { text: 'Aku fokus sama yang sekarang daripada yang mungkin terjadi nanti', dimension: 'SN', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku lebih suka coba hal baru daripada cara yang udah biasa', dimension: 'SN', options: [
                { text: 'Banget nggak setuju', value: 2 }, { text: 'Nggak setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Setuju banget', value: -2 }
            ]},
            
            // T vs F (Thinking vs Feeling) - 10 questions
            { text: 'Aku ambil keputusan berdasarkan logika daripada perasaan', dimension: 'TF', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Keadilan lebih penting daripada kasihan', dimension: 'TF', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku lebih menghargai kejujuran daripada basa-basi', dimension: 'TF', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku bisa kasih kritik tanpa terlalu mikirin perasaan orang', dimension: 'TF', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Objektif lebih penting daripada harmoni dalam diskusi', dimension: 'TF', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku gampang berempati sama perasaan orang lain', dimension: 'TF', options: [
                { text: 'Banget nggak setuju', value: 2 }, { text: 'Nggak setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Setuju banget', value: -2 }
            ]},
            { text: 'Aku mikirin dampak emosional sebelum ambil keputusan', dimension: 'TF', options: [
                { text: 'Banget nggak setuju', value: 2 }, { text: 'Nggak setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Setuju banget', value: -2 }
            ]},
            { text: 'Jaga hubungan baik lebih penting dari nyampein kebenaran', dimension: 'TF', options: [
                { text: 'Banget nggak setuju', value: 2 }, { text: 'Nggak setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Setuju banget', value: -2 }
            ]},
            { text: 'Aku analisis plus-minus secara objektif sebelum mutusin', dimension: 'TF', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Nilai-nilai pribadi lebih penting dari logika dalam keputusan penting', dimension: 'TF', options: [
                { text: 'Banget nggak setuju', value: 2 }, { text: 'Nggak setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Setuju banget', value: -2 }
            ]},
            
            // J vs P (Judging vs Perceiving) - 10 questions
            { text: 'Aku lebih suka bikin rencana detail sebelum bertindak', dimension: 'JP', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku nyaman sama jadwal dan deadline', dimension: 'JP', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku lebih suka selesaiin tugas lebih awal', dimension: 'JP', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku suka jaga lingkungan tetap rapi dan teratur', dimension: 'JP', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku nggak nyaman sama perubahan mendadak', dimension: 'JP', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku lebih suka jaga pilihan tetap terbuka', dimension: 'JP', options: [
                { text: 'Banget nggak setuju', value: 2 }, { text: 'Nggak setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Setuju banget', value: -2 }
            ]},
            { text: 'Aku nyaman kerja di bawah tekanan deadline', dimension: 'JP', options: [
                { text: 'Banget nggak setuju', value: 2 }, { text: 'Nggak setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Setuju banget', value: -2 }
            ]},
            { text: 'Aku bikin to-do list dan ngikutin dengan ketat', dimension: 'JP', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]},
            { text: 'Aku lebih suka fleksibel daripada terstruktur', dimension: 'JP', options: [
                { text: 'Banget nggak setuju', value: 2 }, { text: 'Nggak setuju', value: 1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: -1 }, { text: 'Setuju banget', value: -2 }
            ]},
            { text: 'Aku butuh keputusan final secepat mungkin', dimension: 'JP', options: [
                { text: 'Banget nggak setuju', value: -2 }, { text: 'Nggak setuju', value: -1 }, 
                { text: 'Netral', value: 0 }, { text: 'Setuju', value: 1 }, { text: 'Setuju banget', value: 2 }
            ]}
        ],
        scoring: {
            method: 'mbti',
            descriptions: {
                'INTJ': { title: 'The Architect (Si Arsitek)', description: 'Kamu tipe pemikir strategis yang selalu punya rencana. Mandiri, inovatif, dan punya visi ke depan.', strengths: ['Pemikiran strategis', 'Mandiri', 'Inovatif', 'Tekad kuat'], weaknesses: ['Kadang terlalu kritis', 'Kurang ekspresif', 'Perfeksionis'] },
                'INTP': { title: 'The Logician (Si Pemikir)', description: 'Kamu tipe pemikir inovatif yang suka banget belajar hal baru. Analitis, objektif, dan kreatif.', strengths: ['Analitis', 'Kreatif', 'Open-minded', 'Jujur'], weaknesses: ['Kadang nggak peka', 'Kurang praktis', 'Gampang bosan'] },
                'ENTJ': { title: 'The Commander (Si Pemimpin)', description: 'Kamu tipe leader yang berani dan imajinatif. Selalu menemukan jalan atau bikin jalan baru.', strengths: ['Natural leader', 'Percaya diri', 'Strategis', 'Efisien'], weaknesses: ['Nggak sabaran', 'Dominan', 'Kurang empati'] },
                'ENTP': { title: 'The Debater (Si Pendebat)', description: 'Kamu tipe pemikir cerdas yang suka banget tantangan intelektual dan debat seru.', strengths: ['Cepat belajar', 'Kreatif', 'Karismatik', 'Energik'], weaknesses: ['Suka debat', 'Nggak sabaran', 'Susah fokus'] },
                'INFJ': { title: 'The Advocate (Si Advokat)', description: 'Kamu idealis yang tenang tapi inspiratif dan pantang menyerah.', strengths: ['Empatik', 'Kreatif', 'Idealis', 'Perceptive'], weaknesses: ['Sensitif', 'Perfeksionis', 'Gampang burnout'] },
                'INFP': { title: 'The Mediator (Si Mediator)', description: 'Kamu tipe yang altruistik, selalu siap bantu untuk hal-hal baik.', strengths: ['Idealis', 'Kreatif', 'Empatik', 'Passionate'], weaknesses: ['Terlalu idealis', 'Defensif', 'Susah ambil keputusan praktis'] },
                'ENFJ': { title: 'The Protagonist (Si Protagonis)', description: 'Kamu pemimpin karismatik dan inspiratif yang bisa bikin orang lain kagum.', strengths: ['Karismatik', 'Altruistik', 'Natural leader', 'Bisa diandalkan'], weaknesses: ['Terlalu idealis', 'Terlalu sensitif', 'Sering overcommit'] },
                'ENFP': { title: 'The Campaigner (Si Campaigner)', description: 'Kamu antusias, kreatif, dan sosial dengan imajinasi yang positif.', strengths: ['Antusias', 'Kreatif', 'Komunikatif', 'Observant'], weaknesses: ['Kurang fokus', 'Overthinking', 'Gampang stres'] },
                'ISTJ': { title: 'The Logistician (Si Logistik)', description: 'Kamu tipe praktis dan faktual. Keandalanmu nggak bisa dikalahkan!', strengths: ['Jujur', 'Tanggung jawab', 'Praktis', 'Loyal'], weaknesses: ['Keras kepala', 'Kurang sensitif', 'Susah berubah'] },
                'ISFJ': { title: 'The Defender (Si Pelindung)', description: 'Kamu pelindung yang dedicated dan hangat. Selalu siap bela orang yang kamu sayang.', strengths: ['Supportive', 'Bisa diandalkan', 'Observant', 'Kerja keras'], weaknesses: ['Terlalu rendah hati', 'Susah berubah', 'Sering overload'] },
                'ESTJ': { title: 'The Executive (Si Eksekutif)', description: 'Kamu administrator yang hebat, nggak tertandingi dalam mengelola hal atau orang.', strengths: ['Dedicated', 'To the point', 'Loyal', 'Terorganisir'], weaknesses: ['Nggak fleksibel', 'Nggak nyaman sama hal nggak biasa', 'Judgemental'] },
                'ESFJ': { title: 'The Consul (Si Konsul)', description: 'Kamu tipe yang sangat peduli, sosial, dan populer. Selalu siap bantu.', strengths: ['Loyal', 'Praktis', 'Hangat', 'Penuh tanggung jawab'], weaknesses: ['Khawatir status', 'Nggak fleksibel', 'Terlalu selfless'] },
                'ISTP': { title: 'The Virtuoso (Si Virtuoso)', description: 'Kamu eksperimenter yang berani dan praktis. Master dari berbagai tools.', strengths: ['Optimis', 'Kreatif', 'Praktis', 'Spontan'], weaknesses: ['Keras kepala', 'Kurang sensitif', 'Private', 'Gampang bosan'] },
                'ISFP': { title: 'The Adventurer (Si Petualang)', description: 'Kamu artis yang fleksibel dan menawan. Selalu siap explore dan coba hal baru.', strengths: ['Charming', 'Artistik', 'Curious', 'Imajinatif'], weaknesses: ['Sensitif', 'Nggak suka planning', 'Kurang kompetitif'] },
                'ESTP': { title: 'The Entrepreneur (Si Entrepreneur)', description: 'Kamu cerdas, enerjik, dan sangat perceptive. Suka hidup penuh tantangan.', strengths: ['Berani', 'Rasional', 'Praktis', 'Sosiabel'], weaknesses: ['Kurang sensitif', 'Nggak sabaran', 'Risk-taker', 'Susah terstruktur'] },
                'ESFP': { title: 'The Entertainer (Si Penghibur)', description: 'Kamu spontan, enerjik, dan antusias. Hidup nggak pernah membosankan di sekitar kamu!', strengths: ['Berani', 'Praktis', 'Original', 'Observant'], weaknesses: ['Sensitif', 'Menghindari konflik', 'Gampang bosan', 'Kurang fokus jangka panjang'] }
            }
        }
    },

    lovelanguage: {
        title: 'Tes Bahasa Cinta (Love Language)',
        questions: [
            // Quality Time (6 questions)
            { text: 'Aku ngerasa paling disayang kalau orang yang aku suka kasih perhatian penuh pas ngobrol', type: 'quality_time', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Ngabisin waktu berkualitas bareng itu penting banget buat aku', type: 'quality_time', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Aktivitas bareng tanpa diganggu HP bikin aku happy', type: 'quality_time', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Ngobrol deep lebih berarti daripada dikasih hadiah mahal', type: 'quality_time', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Aku ngerasa dicuekin kalau orang yang aku suka sibuk sama HP-nya', type: 'quality_time', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Rencana hangout yang dipikirin dengan baik itu spesial banget', type: 'quality_time', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            
            // Receiving Gifts (6 questions)
            { text: 'Aku sangat menghargai hadiah yang dikasih dengan penuh pemikiran', type: 'receiving_gifts', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Hadiah itu simbol sayang yang nyata buat aku', type: 'receiving_gifts', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Hadiah surprise bikin aku ngerasa spesial', type: 'receiving_gifts', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Aku nyimpen hadiah sebagai kenangan berharga', type: 'receiving_gifts', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Harga hadiah nggak sepenting niat di baliknya', type: 'receiving_gifts', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Aku sedih kalau nggak diinget di hari spesial', type: 'receiving_gifts', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            
            // Words of Affirmation (6 questions)
            { text: 'Kata-kata pujian dan dukungan itu berarti banget buat aku', type: 'words_of_affirmation', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Aku butuh denger kata-kata sayang dan pujian secara rutin', type: 'words_of_affirmation', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Kata-kata support pas lagi susah itu penting banget', type: 'words_of_affirmation', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Kritik yang nggak perlu sangat nyakitin aku', type: 'words_of_affirmation', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Chat manis atau catatan kecil bikin hari aku', type: 'words_of_affirmation', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Pengakuan atas usaha aku itu bermakna banget', type: 'words_of_affirmation', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            
            // Acts of Service (6 questions)
            { text: 'Aku ngerasa disayang kalau ada yang bantuin kerjaan aku', type: 'acts_of_service', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Tindakan kayak bantuin masak atau beresin kamar itu berarti banget', type: 'acts_of_service', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Aku appreciate kalau orang yang aku suka lakuin hal yang aku minta', type: 'acts_of_service', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Kalau dia males bantuin, aku ngerasa nggak disayang', type: 'acts_of_service', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Aku nunjukin sayang dengan lakuin sesuatu buat orang yang aku sayang', type: 'acts_of_service', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Tindakan lebih berarti daripada kata-kata', type: 'acts_of_service', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            
            // Physical Touch (6 questions)
            { text: 'Sentuhan fisik kayak pelukan bikin aku ngerasa aman', type: 'physical_touch', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Kontak fisik kayak pegangan tangan itu penting dalam hubungan', type: 'physical_touch', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Pijatan atau sentuhan lembut bikin aku rileks', type: 'physical_touch', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Jarak fisik bikin aku ngerasa jauh secara emosional', type: 'physical_touch', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Aku nunjukin sayang lewat sentuhan fisik', type: 'physical_touch', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]},
            { text: 'Pelukan adalah cara terbaik nenengin aku pas sedih', type: 'physical_touch', options: [
                { text: 'Banget nggak setuju', value: 1 }, { text: 'Nggak setuju', value: 2 }, 
                { text: 'Netral', value: 3 }, { text: 'Setuju', value: 4 }, { text: 'Setuju banget', value: 5 }
            ]}
        ],
        scoring: {
            method: 'lovelanguage',
            types: {
                'quality_time': { name: 'Quality Time (Waktu Berkualitas)', description: 'Kamu ngerasa paling disayang kalau dikasih perhatian penuh tanpa gangguan. Bukan cuma di ruangan yang sama, tapi beneran fokus bareng.', tips: ['Matiin HP pas lagi bareng', 'Rencanain waktu hangout rutin', 'Lakuin aktivitas yang kalian berdua suka', 'Dengerin dengan penuh perhatian'] },
                'receiving_gifts': { name: 'Receiving Gifts (Menerima Hadiah)', description: 'Hadiah itu simbol sayang yang nyata buat kamu. Bukan soal mahal atau murahnya, tapi soal pemikiran dan usaha di baliknya.', tips: ['Perhatiin hal yang dia suka', 'Kasih hadiah tanpa alasan khusus', 'Hadiah buatan sendiri itu bermakna banget', 'Inget tanggal-tanggal penting'] },
                'words_of_affirmation': { name: 'Words of Affirmation (Kata-kata Afirmasi)', description: 'Kata-kata positif dan pujian itu berarti banget buat kamu. Kritik yang nggak perlu bisa sangat menyakitkan.', tips: ['Ucapin kata sayang secara rutin', 'Kasih pujian yang spesifik', 'Kirim chat manis di siang hari', 'Hindari kritik yang menyakitkan'] },
                'acts_of_service': { name: 'Acts of Service (Tindakan Melayani)', description: 'Tindakan lebih berarti dari kata-kata. Bantuin kamu ngurangin beban itu bentuk sayang tertinggi.', tips: ['Bantuin kerjaan rumah', 'Lakuin hal yang diminta tanpa ditunda', 'Anticipate kebutuhan', 'Tunjukin care lewat tindakan'] },
                'physical_touch': { name: 'Physical Touch (Sentuhan Fisik)', description: 'Sentuhan fisik adalah cara utama buat nunjukin dan nerima sayang. Bukan cuma hal romantis, tapi juga sentuhan sederhana.', tips: ['Peluk lebih sering', 'Pegang tangan pas jalan', 'Duduk berdekatan', 'Sentuhan lembut nunjukin perhatian'] }
            }
        }
    }
};

// Current Test State
let currentTest = null;
let currentQuestionIndex = 0;
let answers = [];

// Start Test
function startTest(testType) {
    currentTest = testsDatabase[testType];
    if (!currentTest) {
        MindCare.showNotification('Tes tidak tersedia', 'error');
        return;
    }

    currentQuestionIndex = 0;
    answers = new Array(currentTest.questions.length).fill(null);

    // Update test title
    document.getElementById('testTitle').textContent = currentTest.title;

    // Render first question
    renderQuestion();

    // Show test container
    document.getElementById('testContainer').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Render Question
function renderQuestion() {
    const question = currentTest.questions[currentQuestionIndex];
    const testBody = document.getElementById('testBody');

    // Build options HTML
    let optionsHTML = '';
    question.options.forEach((option, index) => {
        const isSelected = answers[currentQuestionIndex] === option.value;
        optionsHTML += `
            <div class="answer-option ${isSelected ? 'selected' : ''}" onclick="selectAnswer(${option.value})">
                <div class="option-radio"></div>
                <div class="option-text">${option.text}</div>
            </div>
        `;
    });

    testBody.innerHTML = `
        <div class="question-container active">
            <div class="question-text">
                ${currentQuestionIndex + 1}. ${question.text}
            </div>
            <div class="answer-options">
                ${optionsHTML}
            </div>
        </div>
    `;

    // Update progress
    updateProgress();

    // Update navigation buttons
    updateNavigationButtons();
}

// Select Answer
function selectAnswer(value) {
    answers[currentQuestionIndex] = value;
    renderQuestion();
}

// Update Progress
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentTest.questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressText').textContent = 
        `Pertanyaan ${currentQuestionIndex + 1} dari ${currentTest.questions.length}`;
}

// Update Navigation Buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Previous button
    prevBtn.disabled = currentQuestionIndex === 0;

    // Next button
    const hasAnswer = answers[currentQuestionIndex] !== null;
    nextBtn.disabled = !hasAnswer;

    // Change next button text on last question
    if (currentQuestionIndex === currentTest.questions.length - 1) {
        nextBtn.innerHTML = `
            Lihat Hasil
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"/>
            </svg>
        `;
    } else {
        nextBtn.innerHTML = `
            Selanjutnya
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"/>
            </svg>
        `;
    }
}

// Next Question
function nextQuestion() {
    if (currentQuestionIndex < currentTest.questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        // Show results
        calculateAndShowResults();
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

// Calculate and Show Results
function calculateAndShowResults() {
    // Check if MBTI test
    if (currentTest.scoring.method === 'mbti') {
        calculateMBTIResults();
        return;
    }
    
    // Check if Love Language test
    if (currentTest.scoring.method === 'lovelanguage') {
        calculateLoveLanguageResults();
        return;
    }
    
    // Standard scoring method
    const totalScore = answers.reduce((sum, value) => sum + value, 0);

    // Find appropriate range
    const range = currentTest.scoring.ranges.find(r => 
        totalScore >= r.min && totalScore <= r.max
    );

    // Show result
    showResult(totalScore, range);
}

// Calculate MBTI Results
function calculateMBTIResults() {
    const dimensions = {
        EI: 0, // Extraversion vs Introversion
        SN: 0, // Sensing vs Intuition
        TF: 0, // Thinking vs Feeling
        JP: 0  // Judging vs Perceiving
    };
    
    // Sum scores for each dimension
    currentTest.questions.forEach((q, index) => {
        if (answers[index] !== null) {
            dimensions[q.dimension] += answers[index];
        }
    });
    
    // Determine personality type
    let personalityType = '';
    personalityType += dimensions.EI > 0 ? 'E' : 'I';
    personalityType += dimensions.SN > 0 ? 'S' : 'N';
    personalityType += dimensions.TF > 0 ? 'T' : 'F';
    personalityType += dimensions.JP > 0 ? 'J' : 'P';
    
    // Get personality description
    const personality = currentTest.scoring.descriptions[personalityType];
    
    // Show MBTI result
    showMBTIResult(personalityType, personality, dimensions);
}

// Show MBTI Result
function showMBTIResult(type, personality, dimensions) {
    document.getElementById('testContainer').classList.remove('active');
    
    const iconSVG = `
        <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="#667eea" opacity="0.2"/>
            <circle cx="60" cy="60" r="40" fill="#764ba2" opacity="0.3"/>
            <text x="60" y="70" font-size="32" font-weight="bold" fill="white" text-anchor="middle">${type}</text>
        </svg>
    `;
    
    let recommendationsHTML = `
        <h3>Kekuatan Kamu:</h3>
        <ul>${personality.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
        <h3>Area yang Bisa Dikembangin:</h3>
        <ul>${personality.weaknesses.map(w => `<li>${w}</li>`).join('')}</ul>
        <h3>Skor Dimensi:</h3>
        <ul>
            <li>E vs I: ${dimensions.EI > 0 ? 'Extraversion (' + dimensions.EI + ')' : 'Introversion (' + Math.abs(dimensions.EI) + ')'}</li>
            <li>S vs N: ${dimensions.SN > 0 ? 'Sensing (' + dimensions.SN + ')' : 'Intuition (' + Math.abs(dimensions.SN) + ')'}</li>
            <li>T vs F: ${dimensions.TF > 0 ? 'Thinking (' + dimensions.TF + ')' : 'Feeling (' + Math.abs(dimensions.TF) + ')'}</li>
            <li>J vs P: ${dimensions.JP > 0 ? 'Judging (' + dimensions.JP + ')' : 'Perceiving (' + Math.abs(dimensions.JP) + ')'}</li>
        </ul>
    `;
    
    document.getElementById('resultIcon').innerHTML = iconSVG;
    document.getElementById('resultTitle').textContent = `${type} - ${personality.title}`;
    document.getElementById('resultScore').textContent = type;
    document.getElementById('resultScore').style.fontSize = '48px';
    
    const categoryElem = document.getElementById('resultCategory');
    categoryElem.textContent = personality.title;
    categoryElem.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    
    document.getElementById('resultDescription').textContent = personality.description;
    document.getElementById('resultRecommendations').innerHTML = recommendationsHTML;
    
    document.getElementById('resultContainer').classList.add('active');
}

// Calculate Love Language Results
function calculateLoveLanguageResults() {
    const scores = {
        quality_time: 0,
        receiving_gifts: 0,
        words_of_affirmation: 0,
        acts_of_service: 0,
        physical_touch: 0
    };
    
    // Sum scores for each love language
    currentTest.questions.forEach((q, index) => {
        if (answers[index] !== null) {
            scores[q.type] += answers[index];
        }
    });
    
    // Find primary love language (highest score)
    let primaryLanguage = '';
    let maxScore = 0;
    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            primaryLanguage = type;
        }
    }
    
    // Get language description
    const language = currentTest.scoring.types[primaryLanguage];
    
    // Show Love Language result
    showLoveLanguageResult(primaryLanguage, language, scores);
}

// Show Love Language Result
function showLoveLanguageResult(primaryType, language, scores) {
    document.getElementById('testContainer').classList.remove('active');
    
    const iconSVG = `
        <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="#E91E63" opacity="0.2"/>
            <circle cx="60" cy="60" r="40" fill="#E91E63" opacity="0.4"/>
            <path d="M60 75 L35 50 Q35 35 50 35 Q60 45 60 45 Q60 45 70 35 Q85 35 85 50 Z" fill="white"/>
        </svg>
    `;
    
    // Sort scores for display
    const sortedScores = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .map(([type, score]) => ({
            name: currentTest.scoring.types[type].name,
            score: score,
            percentage: Math.round((score / 15) * 100)
        }));
    
    let recommendationsHTML = `
        <h3>Bahasa Cinta Kamu:</h3>
        <ul>${language.tips.map(t => `<li>${t}</li>`).join('')}</ul>
        <h3>Skor Semua Bahasa Cinta:</h3>
        <ul>${sortedScores.map(s => 
            `<li>${s.name}: ${s.score}/15 (${s.percentage}%)</li>`
        ).join('')}</ul>
    `;
    
    document.getElementById('resultIcon').innerHTML = iconSVG;
    document.getElementById('resultTitle').textContent = 'Bahasa Cinta Kamu';
    document.getElementById('resultScore').textContent = '❤️';
    document.getElementById('resultScore').style.fontSize = '64px';
    
    const categoryElem = document.getElementById('resultCategory');
    categoryElem.textContent = language.name;
    categoryElem.style.background = 'linear-gradient(135deg, #E91E63, #9C27B0)';
    
    document.getElementById('resultDescription').textContent = language.description;
    document.getElementById('resultRecommendations').innerHTML = recommendationsHTML;
    
    document.getElementById('resultContainer').classList.add('active');
}

// Show Result (Standard)
function showResult(score, range) {
    // Hide test container
    document.getElementById('testContainer').classList.remove('active');

    // Build recommendations HTML
    let recommendationsHTML = '<h3>Rekomendasi Buat Kamu:</h3><ul>';
    range.recommendations.forEach(rec => {
        recommendationsHTML += `<li>${rec}</li>`;
    });
    recommendationsHTML += '</ul>';

    // Determine icon based on category
    let iconSVG = '';
    if (range.color === '#4CAF50') {
        iconSVG = `
            <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="${range.color}" opacity="0.2"/>
                <circle cx="60" cy="60" r="40" fill="${range.color}" opacity="0.4"/>
                <path d="M45 60 L55 70 L75 50" stroke="white" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    } else if (range.color === '#FFC107' || range.color === '#FF9800') {
        iconSVG = `
            <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="${range.color}" opacity="0.2"/>
                <circle cx="60" cy="60" r="40" fill="${range.color}" opacity="0.4"/>
                <circle cx="50" cy="50" r="4" fill="white"/>
                <circle cx="70" cy="50" r="4" fill="white"/>
                <path d="M45 70 L75 70" stroke="white" stroke-width="4" stroke-linecap="round"/>
            </svg>
        `;
    } else {
        iconSVG = `
            <svg width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="${range.color}" opacity="0.2"/>
                <circle cx="60" cy="60" r="40" fill="${range.color}" opacity="0.4"/>
                <circle cx="50" cy="50" r="4" fill="white"/>
                <circle cx="70" cy="50" r="4" fill="white"/>
                <path d="M45 75 Q60 65 75 75" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
            </svg>
        `;
    }

    // Update result modal
    document.getElementById('resultIcon').innerHTML = iconSVG;
    document.getElementById('resultTitle').textContent = currentTest.title;
    document.getElementById('resultScore').textContent = score;
    
    const categoryElem = document.getElementById('resultCategory');
    categoryElem.textContent = range.category;
    categoryElem.style.background = `linear-gradient(135deg, ${range.color}, ${adjustColor(range.color, -20)})`;
    
    document.getElementById('resultDescription').textContent = range.description;
    document.getElementById('resultRecommendations').innerHTML = recommendationsHTML;

    // Show result container
    document.getElementById('resultContainer').classList.add('active');
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
    const num = parseInt(color.replace('#', ''), 16);
    const r = Math.max(0, Math.min(255, (num >> 16) + amount));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
    const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

// Close Test
function closeTest() {
    showCustomConfirm();
}

// Show custom confirmation modal
function showCustomConfirm() {
    const modal = document.getElementById('customConfirmModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

// Close custom confirmation modal
function closeCustomConfirm() {
    const modal = document.getElementById('customConfirmModal');
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

// Confirm exit test
function confirmExitTest() {
    document.getElementById('testContainer').classList.remove('active');
    document.body.style.overflow = '';
    currentTest = null;
    currentQuestionIndex = 0;
    answers = [];
    closeCustomConfirm();
}

// Close Result
function closeResult() {
    document.getElementById('resultContainer').classList.remove('active');
    document.body.style.overflow = '';
}

// Save Result to Dashboard
function saveResult() {
    const totalScore = answers.reduce((sum, value) => sum + value, 0);
    const range = currentTest.scoring.ranges.find(r => 
        totalScore >= r.min && totalScore <= r.max
    );

    const result = {
        testName: currentTest.title,
        score: totalScore,
        category: range.category,
        color: range.color,
        date: new Date().toISOString(),
        answers: answers
    };

    // Get existing results
    let testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    testResults.unshift(result);

    // Keep only last 50 results
    if (testResults.length > 50) {
        testResults = testResults.slice(0, 50);
    }

    localStorage.setItem('testResults', JSON.stringify(testResults));

    MindCare.showNotification('Hasil berhasil disimpan! Lihat di Dashboard.', 'success');

    // Redirect to dashboard after 2 seconds
    setTimeout(() => {
        window.location.href = '../dashboard/dashboard.html';
    }, 2000);
}

// Retake Test
function retakeTest() {
    closeResult();
    setTimeout(() => {
        startTest(Object.keys(testsDatabase).find(key => 
            testsDatabase[key].title === currentTest.title
        ));
    }, 300);
}

// Close test/result when clicking overlay
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('test-overlay')) {
        closeTest();
    }
    if (e.target.classList.contains('result-overlay')) {
        closeResult();
    }
    if (e.target.classList.contains('modal-overlay')) {
        closeCustomConfirm();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCustomConfirm();
    }
});
