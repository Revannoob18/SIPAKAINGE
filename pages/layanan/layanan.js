// ============================================
// LAYANAN PAGE FUNCTIONALITY
// ============================================

const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const serviceCards = document.querySelectorAll('.service-card-detailed');

// Search functionality
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterServices(searchTerm, getCurrentFilter());
    });
}

// Filter functionality
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        filterServices(searchTerm, filter);
    });
});

function getCurrentFilter() {
    const activeBtn = document.querySelector('.filter-btn.active');
    return activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
}

function filterServices(searchTerm, filter) {
    let visibleCount = 0;
    
    serviceCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const category = card.getAttribute('data-category').toLowerCase();
        
        const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
        const matchesFilter = filter === 'all' || category.includes(filter);
        
        if (matchesSearch && matchesFilter) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease forwards';
            card.style.animationDelay = `${visibleCount * 0.1}s`;
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show "no results" message
    const container = document.getElementById('servicesGrid');
    let noResultsMsg = document.getElementById('noResultsMsg');
    
    if (visibleCount === 0) {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.id = 'noResultsMsg';
            noResultsMsg.style.cssText = `
                grid-column: 1 / -1;
                text-align: center;
                padding: 60px 20px;
                color: var(--text-muted);
            `;
            noResultsMsg.innerHTML = `
                <svg width="80" height="80" viewBox="0 0 80 80" style="opacity: 0.3; margin-bottom: 20px;">
                    <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" stroke-width="2"/>
                    <path d="M30 45 L50 45" stroke="currentColor" stroke-width="3"/>
                    <circle cx="30" cy="30" r="5" fill="currentColor"/>
                    <circle cx="50" cy="30" r="5" fill="currentColor"/>
                </svg>
                <h3 style="margin-bottom: 10px;">Layanan tidak ditemukan</h3>
                <p>Coba kata kunci lain atau pilih kategori yang berbeda</p>
            `;
            container.appendChild(noResultsMsg);
        }
        noResultsMsg.style.display = 'block';
    } else if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
    }
}

// Service detail modal
function openServiceDetail(serviceId) {
    const serviceDetails = {
        'konseling-individu': {
            title: 'Curhat Pribadi',
            fullDescription: 'Sesi privat antara kamu dan guru BK. Di sini kamu bisa ceritain apa aja yang lagi kamu rasain - entah itu masalah sekolah, teman, keluarga, atau apapun. Guru BK kami terlatih buat dengerin tanpa menghakimi dan bantu kamu cari solusi.',
            benefits: [
                'Ruang aman dan rahasia buat cerita',
                'Pendekatan yang sesuai sama kebutuhanmu',
                'Tips dan cara menghadapi masalah',
                'Dukungan berkelanjutan dari guru BK',
                'Lebih paham diri sendiri',
                'Belajar mengelola emosi'
            ]
        },
        'konseling-sosial': {
            title: 'Masalah Pergaulan',
            fullDescription: 'Layanan ini buat kamu yang susah bergaul, grogi ketemu orang baru, atau lagi ada masalah sama teman. Guru BK bakal bantu kamu lebih nyaman dalam berinteraksi dan ngajarin cara komunikasi yang baik.',
            benefits: [
                'Mengatasi rasa grogi dan malu',
                'Belajar cara ngobrol yang enak',
                'Lebih pede ketemu orang',
                'Bisa baca situasi sosial',
                'Lebih peka sama perasaan orang lain',
                'Tips menghadapi situasi sosial yang susah'
            ]
        },
        'bimbingan-belajar': {
            title: 'Bimbingan Belajar',
            fullDescription: 'Layanan buat kamu yang kesulitan belajar atau nggak paham pelajaran tertentu. Kita bantu cari cara belajar yang paling cocok buat kamu, dan bantuin persiapan ujian.',
            benefits: [
                'Paham pelajaran lebih dalam',
                'Nilai jadi lebih bagus',
                'Dapat teknik belajar yang efektif',
                'Persiapan ujian lebih mantap',
                'Dukungan motivasi belajar',
                'Jadwal belajar yang fleksibel'
            ]
        },
        'bimbingan-karier': {
            title: 'Bingung Mau Kemana?',
            fullDescription: 'Bingung pilih jurusan kuliah atau mau kerja apa setelah lulus? Layanan ini bantu kamu explore minat dan bakat, terus kasih panduan buat merencanakan masa depan.',
            benefits: [
                'Tau minat, bakat, dan potensi diri',
                'Bantuan pilih jurusan kuliah',
                'Belajar bikin CV dan interview',
                'Mengembangkan soft skills',
                'Explore berbagai pilihan karir',
                'Perencanaan masa depan yang jelas'
            ]
        },
        'bk-sahabat-murid': {
            title: 'Butuh Temen Cerita?',
            fullDescription: 'Tempat curhat paling aman buat siswa SMANSA. Di sini kamu bisa ceritain apa aja - masalah sekolah, teman, keluarga, perasaan galau, atau apapun yang lagi bikin kamu nggak nyaman. Guru BK kami siap dengerin tanpa menghakimi!',
            benefits: [
                'Ruang curhat yang aman dan rahasia',
                'Didengerin tanpa dihakimi',
                'Dukungan emosional yang tulus',
                'Bantuan mengatasi stres',
                'Belajar mengelola emosi',
                'Fleksibel sesuai kebutuhanmu'
            ]
        },
        'konseling-remaja': {
            title: 'Masalah Remaja',
            fullDescription: 'Khusus buat kamu yang lagi menghadapi tantangan sebagai remaja - tekanan sekolah, drama pertemanan, masalah keluarga, atau lagi bingung sama diri sendiri. Guru BK kami paham banget sama dunia remaja!',
            benefits: [
                'Tempat aman buat express diri',
                'Pendekatan yang ngerti remaja',
                'Bantu nemuin jati diri',
                'Belajar mengelola emosi dan stres',
                'Lebih pede dan percaya diri',
                'Hubungan lebih baik sama orangtua'
            ]
        },
        'mental-coaching': {
            title: 'Pengembangan Diri',
            fullDescription: 'Program buat kamu yang pengen jadi versi terbaik dari diri sendiri. Kita latih mental dan mindset kamu biar lebih kuat, lebih produktif, dan bisa capai target-target yang kamu mau!',
            benefits: [
                'Fokus sama tujuan dan action',
                'Mengembangkan potensi diri',
                'Mental lebih kuat',
                'Hidup lebih seimbang',
                'Jadi lebih produktif',
                'Ada yang support dan pantau perkembangan'
            ]
        }
    };
    
    const service = serviceDetails[serviceId];
    
    if (!service) {
        // For services without modal, redirect or show booking
        showBookingForm(serviceId);
        return;
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'service-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2>${service.title}</h2>
            <div class="modal-body">
                <h3>Deskripsi Lengkap</h3>
                <p>${service.fullDescription}</p>
                
                <h3>Apa Aja Manfaatnya?</h3>
                <ul>
                    ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
                
                <div class="modal-actions">
                    <button class="btn-primary btn-large" onclick="showBookingForm('${serviceId}')">
                        Atur Jadwal
                    </button>
                    <button class="btn-secondary btn-large" onclick="window.open('https://wa.me/6285335559568?text=Halo Pak/Bu, saya siswa SMANSA mau tanya tentang ${service.title}', '_blank')">
                        Chat Guru BK
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .service-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            position: relative;
            background: var(--bg-primary);
            border-radius: var(--radius-xl);
            max-width: 700px;
            max-height: 90vh;
            width: 100%;
            overflow-y: auto;
            box-shadow: var(--shadow-xl);
            animation: slideUp 0.3s ease;
        }
        
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .modal-close {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            background: var(--bg-secondary);
            color: var(--text-primary);
            font-size: 24px;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 1;
        }
        
        .modal-close:hover {
            background: var(--danger-color);
            color: white;
            transform: rotate(90deg);
        }
        
        .modal-content h2 {
            padding: 32px 32px 24px;
            border-bottom: 2px solid var(--bg-tertiary);
            margin: 0;
            font-size: 28px;
            color: var(--text-primary);
        }
        
        .modal-body {
            padding: 32px;
        }
        
        .modal-body h3 {
            font-size: 20px;
            margin: 24px 0 12px;
            color: var(--primary-color);
        }
        
        .modal-body h3:first-child {
            margin-top: 0;
        }
        
        .modal-body p {
            line-height: 1.8;
            color: var(--text-secondary);
            margin-bottom: 16px;
        }
        
        .modal-body ul {
            list-style: none;
            padding: 0;
        }
        
        .modal-body ul li {
            padding: 8px 0 8px 28px;
            position: relative;
            color: var(--text-secondary);
        }
        
        .modal-body ul li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--success-color);
            font-weight: bold;
        }
        
        .service-info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin: 24px 0;
        }
        
        .info-box {
            background: var(--bg-secondary);
            padding: 20px;
            border-radius: var(--radius-md);
        }
        
        .info-box strong {
            display: block;
            margin-bottom: 8px;
            color: var(--text-primary);
        }
        
        .info-box p {
            margin: 0;
            color: var(--text-secondary);
            font-size: 14px;
        }
        
        .modal-actions {
            display: flex;
            gap: 12px;
            margin-top: 32px;
        }
        
        .modal-actions button {
            flex: 1;
        }
        
        @media (max-width: 768px) {
            .service-info-grid {
                grid-template-columns: 1fr;
            }
            
            .modal-actions {
                flex-direction: column;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close modal
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
        document.body.style.overflow = '';
    });
    
    modal.querySelector('.modal-overlay').addEventListener('click', () => {
        modal.remove();
        document.body.style.overflow = '';
    });
}

// Booking form (simplified version - you can expand this)
function showBookingForm(serviceId) {
    if (typeof MindCare !== 'undefined') {
        MindCare.showNotification('Fitur booking akan segera tersedia! Sementara hubungi kami via WhatsApp.', 'success');
    }
    setTimeout(() => {
        window.open('https://wa.me/6285335559568?text=Halo Pak/Bu, saya siswa SMANSA mau atur jadwal layanan BK', '_blank');
    }, 1500);
}

// Export for use in HTML onclick
window.openServiceDetail = openServiceDetail;
window.showBookingForm = showBookingForm;

console.log('✅ Layanan page initialized!');
