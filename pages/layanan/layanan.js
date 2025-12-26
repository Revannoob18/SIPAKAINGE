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
            title: 'Konseling Individu',
            fullDescription: 'Konseling individu adalah sesi pribadi antara Anda dan psikolog profesional kami. Dalam sesi ini, Anda dapat membahas berbagai masalah personal seperti kecemasan, depresi, stres kerja, masalah hubungan, trauma, atau tantangan hidup lainnya. Psikolog kami menggunakan pendekatan yang empatik dan berbasis bukti untuk membantu Anda menemukan solusi dan mencapai kesejahteraan mental.',
            benefits: [
                'Ruang aman dan rahasia untuk berbagi masalah',
                'Pendekatan personal sesuai kebutuhan Anda',
                'Strategi coping yang efektif',
                'Dukungan profesional berkelanjutan',
                'Peningkatan self-awareness dan insight',
                'Pengembangan keterampilan emosional'
            ]
        },
        'konseling-sosial': {
            title: 'Konseling Sosial',
            fullDescription: 'Konseling sosial membantu individu mengatasi masalah interaksi sosial, kecemasan sosial, kesulitan membangun hubungan, dan membangun keterampilan komunikasi yang efektif. Terapis kami membantu Anda merasa lebih nyaman dalam situasi sosial dan meningkatkan kepercayaan diri dalam berinteraksi dengan orang lain.',
            benefits: [
                'Mengatasi kecemasan sosial dan fobia sosial',
                'Meningkatkan keterampilan komunikasi',
                'Membangun kepercayaan diri dalam interaksi sosial',
                'Belajar membaca isyarat sosial',
                'Mengembangkan empati dan kesadaran sosial',
                'Strategi coping untuk situasi sosial yang menantang'
            ]
        },
        'bimbingan-belajar': {
            title: 'Layanan Bimbingan Belajar',
            fullDescription: 'Layanan bimbingan belajar intensif untuk siswa SMAN 1 Bone yang membutuhkan dukungan tambahan dalam berbagai mata pelajaran. Tutor berpengalaman membantu pemahaman konsep, penyelesaian tugas, dan persiapan ujian dengan pendekatan personal dan efektif.',
            benefits: [
                'Pemahaman konsep yang lebih mendalam',
                'Peningkatan nilai akademik',
                'Teknik belajar yang efektif',
                'Persiapan ujian yang optimal',
                'Dukungan motivasi dan disiplin',
                'Fleksibilitas jadwal belajar'
            ]
        },
        'bimbingan-karier': {
            title: 'Layanan Bimbingan Karier',
            fullDescription: 'Bimbingan karier profesional untuk siswa SMAN 1 Bone dalam memilih jurusan kuliah yang sesuai minat dan bakat, persiapan dunia kerja, serta pengembangan karir masa depan. Kami membantu Anda menemukan passion, mengembangkan keterampilan, dan merencanakan langkah-langkah karir yang tepat.',
            benefits: [
                'Penilaian minat, bakat, dan potensi diri',
                'Bimbingan pemilihan jurusan kuliah',
                'Persiapan CV dan wawancara kerja',
                'Pengembangan keterampilan soft skills',
                'Eksplorasi berbagai pilihan karir',
                'Perencanaan karir jangka panjang'
            ]
        },
        'bk-sahabat-murid': {
            title: 'Layanan BK Sahabat Murid',
            fullDescription: 'Layanan BK (Bimbingan Konseling) sebagai tempat curhat yang aman dan nyaman untuk siswa SMAN 1 Bone. Di sini Anda bisa berbagi keluh kesah, masalah pribadi, keresahan hati, tekanan akademik, atau masalah sosial tanpa takut dihakimi. Konselor kami siap mendengarkan dengan empati dan memberikan dukungan emosional yang dibutuhkan.',
            benefits: [
                'Ruang curhat yang aman dan rahasia',
                'Dengarkan tanpa penghakiman',
                'Dukungan emosional yang empati',
                'Bantuan mengatasi stres dan kecemasan',
                'Panduan mengelola emosi',
                'Konseling fleksibel sesuai kebutuhan'
            ]
        },
        'konseling-remaja': {
            title: 'Konseling Remaja',
            fullDescription: 'Konseling khusus untuk remaja (13-19 tahun) yang menghadapi tantangan masa pertumbuhan seperti identitas diri, tekanan teman sebaya, masalah akademik, atau konflik dengan orangtua. Psikolog kami terlatih dalam pendekatan teen-friendly.',
            benefits: [
                'Ruang aman untuk self-expression',
                'Pendekatan yang relatable untuk remaja',
                'Pengembangan identitas diri yang sehat',
                'Manajemen emosi dan stres',
                'Peningkatan rasa percaya diri',
                'Hubungan yang lebih baik dengan orangtua'
            ]
        },
        'mental-coaching': {
            title: 'Mental Health Coaching',
            fullDescription: 'Mental health coaching adalah program coaching untuk individu yang ingin meningkatkan kesejahteraan mental, mengembangkan resiliensi, meningkatkan produktivitas, dan mencapai goals hidup mereka. Berbeda dengan terapi, coaching lebih fokus pada goal-setting dan action plan.',
            benefits: [
                'Goal-oriented dan action-based',
                'Pengembangan potensi diri',
                'Peningkatan resiliensi mental',
                'Work-life balance yang lebih baik',
                'Strategi produktivitas',
                'Accountability dan support'
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
                
                <h3>Manfaat</h3>
                <ul>
                    ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
                
                <div class="modal-actions">
                    <button class="btn-primary btn-large" onclick="showBookingForm('${serviceId}')">
                        Jadwalkan Sekarang
                    </button>
                    <button class="btn-secondary btn-large" onclick="window.open('https://wa.me/6281234567890?text=Halo, saya ingin bertanya tentang ${service.title}', '_blank')">
                        Tanya via WhatsApp
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
        window.open('https://wa.me/6281234567890?text=Halo, saya ingin booking layanan', '_blank');
    }, 1500);
}

// Export for use in HTML onclick
window.openServiceDetail = openServiceDetail;
window.showBookingForm = showBookingForm;

console.log('✅ Layanan page initialized!');
