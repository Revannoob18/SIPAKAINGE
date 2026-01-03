// ============================================
// DASHBOARD FUNCTIONALITY
// ============================================

// Simple Chart Drawing Functions (Pure JS, no libraries)
function drawLineChart(canvas, data, labels) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const padding = { top: 30, right: 30, bottom: 50, left: 50 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Get theme colors
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#E0E0E0' : '#333333';
    const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
    const lineColor = '#667eea';
    const gradientStart = 'rgba(102, 126, 234, 0.4)';
    const gradientEnd = 'rgba(102, 126, 234, 0.02)';

    // Find max value
    const maxValue = Math.max(...data, 25);
    const minValue = 0;
    const valueRange = maxValue - minValue || 1;

    // Draw gradient background
    const bgGradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
    bgGradient.addColorStop(0, isDark ? 'rgba(102, 126, 234, 0.05)' : 'rgba(102, 126, 234, 0.03)');
    bgGradient.addColorStop(1, 'transparent');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(padding.left, padding.top, chartWidth, chartHeight);

    // Draw grid lines with fade effect
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding.top + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();
        ctx.setLineDash([]);
    }

    // Draw Y-axis labels with background
    ctx.fillStyle = textColor;
    ctx.font = '11px Poppins';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
        const value = maxValue - (valueRange / 5) * i;
        const y = padding.top + (chartHeight / 5) * i;
        ctx.fillText(value.toFixed(0), padding.left - 10, y + 4);
    }

    // Draw area fill under line
    if (data.length > 0 && data.some(d => d > 0)) {
        const areaGradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
        areaGradient.addColorStop(0, gradientStart);
        areaGradient.addColorStop(1, gradientEnd);
        
        ctx.fillStyle = areaGradient;
        ctx.beginPath();
        ctx.moveTo(padding.left, padding.top + chartHeight);
        
        data.forEach((value, index) => {
            const x = padding.left + (chartWidth / (data.length - 1 || 1)) * index;
            const y = padding.top + chartHeight - ((value - minValue) / valueRange) * chartHeight;
            ctx.lineTo(x, y);
        });
        
        ctx.lineTo(padding.left + chartWidth, padding.top + chartHeight);
        ctx.closePath();
        ctx.fill();

        // Draw smooth curved line
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        // Add glow effect
        ctx.shadowColor = lineColor;
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        ctx.beginPath();
        data.forEach((value, index) => {
            const x = padding.left + (chartWidth / (data.length - 1 || 1)) * index;
            const y = padding.top + chartHeight - ((value - minValue) / valueRange) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw points with hover-like effect
        data.forEach((value, index) => {
            const x = padding.left + (chartWidth / (data.length - 1 || 1)) * index;
            const y = padding.top + chartHeight - ((value - minValue) / valueRange) * chartHeight;
            
            // Outer glow
            if (value > 0) {
                ctx.beginPath();
                ctx.arc(x, y, 10, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(102, 126, 234, 0.2)';
                ctx.fill();
                
                // Inner circle
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, Math.PI * 2);
                ctx.fillStyle = isDark ? '#1E1E1E' : '#FFFFFF';
                ctx.fill();
                ctx.strokeStyle = lineColor;
                ctx.lineWidth = 2.5;
                ctx.stroke();
            }
        });

        // Draw value labels on points
        ctx.fillStyle = textColor;
        ctx.font = 'bold 10px Poppins';
        ctx.textAlign = 'center';
        data.forEach((value, index) => {
            if (value > 0) {
                const x = padding.left + (chartWidth / (data.length - 1 || 1)) * index;
                const y = padding.top + chartHeight - ((value - minValue) / valueRange) * chartHeight;
                ctx.fillText(value.toFixed(0), x, y - 16);
            }
        });
    } else {
        // Empty state message
        ctx.fillStyle = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)';
        ctx.font = '14px Poppins';
        ctx.textAlign = 'center';
        ctx.fillText('Belum ada data untuk periode ini', width / 2, height / 2);
    }

    // Draw X-axis labels
    ctx.fillStyle = textColor;
    ctx.font = '10px Poppins';
    ctx.textAlign = 'center';
    const step = Math.ceil(labels.length / 7); // Show max 7 labels
    labels.forEach((label, index) => {
        if (index % step === 0 || index === labels.length - 1) {
            const x = padding.left + (chartWidth / (labels.length - 1 || 1)) * index;
            ctx.fillText(label, x, height - padding.bottom + 20);
        }
    });

    // Draw chart title indicator
    const avgScore = data.filter(d => d > 0).length > 0 
        ? (data.filter(d => d > 0).reduce((a, b) => a + b, 0) / data.filter(d => d > 0).length).toFixed(1)
        : '0';
    ctx.fillStyle = lineColor;
    ctx.font = 'bold 12px Poppins';
    ctx.textAlign = 'left';
    ctx.fillText(`Rata-rata: ${avgScore}`, padding.left, padding.top - 10);
}

function drawDoughnutChart(canvas, data) {
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = (canvas.height - 60) / 2;
    const radius = Math.min(centerX, centerY) - 20;
    const innerRadius = radius * 0.65;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const colors = [
        { main: '#667eea', light: 'rgba(102, 126, 234, 0.2)' },
        { main: '#f093fb', light: 'rgba(240, 147, 251, 0.2)' },
        { main: '#4facfe', light: 'rgba(79, 172, 254, 0.2)' },
        { main: '#fa709a', light: 'rgba(250, 112, 154, 0.2)' },
        { main: '#fee140', light: 'rgba(254, 225, 64, 0.2)' },
        { main: '#30cfd0', light: 'rgba(48, 207, 208, 0.2)' }
    ];
    const total = data.reduce((sum, item) => sum + item.value, 0);

    if (total === 0) {
        // Draw empty state with animated dashed circle
        ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';
        ctx.lineWidth = 20;
        ctx.setLineDash([10, 10]);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius - 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        
        ctx.fillStyle = isDark ? '#E0E0E0' : '#666666';
        ctx.font = '14px Poppins';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Belum Ada Data Tes', centerX, centerY - 10);
        ctx.font = '12px Poppins';
        ctx.fillStyle = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)';
        ctx.fillText('Ikuti tes untuk melihat distribusi', centerX, centerY + 15);
        return;
    }

    let currentAngle = -Math.PI / 2;
    const gap = 0.02; // Gap between slices

    // Draw shadow for depth effect
    ctx.shadowColor = 'rgba(0,0,0,0.15)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 5;

    data.forEach((item, index) => {
        const sliceAngle = (item.value / total) * Math.PI * 2 - gap;
        
        // Draw slice with rounded ends effect
        ctx.fillStyle = colors[index % colors.length].main;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, currentAngle + gap/2, currentAngle + sliceAngle + gap/2);
        ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle + gap/2, currentAngle + gap/2, true);
        ctx.closePath();
        ctx.fill();

        currentAngle += sliceAngle + gap;
    });

    ctx.shadowBlur = 0;

    // Draw inner circle with gradient
    const innerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, innerRadius);
    innerGradient.addColorStop(0, isDark ? '#2A2A2A' : '#FFFFFF');
    innerGradient.addColorStop(1, isDark ? '#1E1E1E' : '#F8F9FA');
    ctx.fillStyle = innerGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius - 2, 0, Math.PI * 2);
    ctx.fill();

    // Draw center text
    ctx.fillStyle = isDark ? '#E0E0E0' : '#333333';
    ctx.font = 'bold 28px Poppins';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(total, centerX, centerY - 8);
    
    ctx.font = '11px Poppins';
    ctx.fillStyle = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)';
    ctx.fillText('Total Tes', centerX, centerY + 14);

    // Draw legend with improved styling
    const legendStartY = canvas.height - 50;
    const itemWidth = canvas.width / Math.min(data.length, 3);
    
    data.forEach((item, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const legendX = (col * itemWidth) + itemWidth / 2 - 40;
        const legendY = legendStartY + (row * 22);
        
        // Color indicator with rounded corners
        ctx.fillStyle = colors[index % colors.length].main;
        ctx.beginPath();
        ctx.roundRect(legendX, legendY - 5, 14, 14, 3);
        ctx.fill();
        
        // Percentage and label
        const percentage = ((item.value / total) * 100).toFixed(0);
        ctx.fillStyle = isDark ? '#E0E0E0' : '#333333';
        ctx.font = 'bold 11px Poppins';
        ctx.textAlign = 'left';
        ctx.fillText(`${item.label}`, legendX + 20, legendY + 5);
        
        ctx.font = '10px Poppins';
        ctx.fillStyle = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)';
        ctx.fillText(`${item.value} (${percentage}%)`, legendX + 20, legendY + 18);
    });
}

// Initialize Dashboard
function initDashboard() {
    loadStats();
    loadTestResults();
    loadRecommendations();
    initCharts();
}

// Load Statistics
function loadStats() {
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    const moodData = JSON.parse(localStorage.getItem('moodData') || '[]');

    // Total tests
    document.getElementById('totalTests').textContent = testResults.length;

    // Completion rate (based on last 30 days activity)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentTests = testResults.filter(r => new Date(r.date) > thirtyDaysAgo);
    const completionRate = Math.min(100, (recentTests.length / 30) * 100);
    document.getElementById('completionRate').textContent = completionRate.toFixed(0) + '%';

    // Current mood
    const today = new Date().toISOString().split('T')[0];
    const todayMood = moodData.find(m => m.date === today);
    document.getElementById('currentMood').textContent = todayMood ? todayMood.emoji : '😊';

    // Day streak
    let streak = 0;
    const sortedMoods = moodData.sort((a, b) => new Date(b.date) - new Date(a.date));
    for (let i = 0; i < sortedMoods.length; i++) {
        const moodDate = new Date(sortedMoods[i].date);
        const expectedDate = new Date();
        expectedDate.setDate(expectedDate.getDate() - i);
        
        if (moodDate.toISOString().split('T')[0] === expectedDate.toISOString().split('T')[0]) {
            streak++;
        } else {
            break;
        }
    }
    document.getElementById('dayStreak').textContent = streak;
}

// Load Test Results
function loadTestResults() {
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    const container = document.getElementById('resultsContainer');
    const emptyState = document.getElementById('emptyState');

    if (testResults.length === 0) {
        container.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    container.style.display = 'grid';
    emptyState.style.display = 'none';

    container.innerHTML = testResults.slice(0, 12).map((result, index) => {
        const date = new Date(result.date);
        const formattedDate = date.toLocaleDateString('id-ID', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });

        return `
            <div class="result-item" style="animation-delay: ${index * 0.05}s">
                <div class="result-header">
                    <div>
                        <div class="result-title">${result.testName}</div>
                        <div class="result-date">${formattedDate}</div>
                    </div>
                    <div class="result-score-badge" style="background: ${result.color}">
                        ${result.score}
                    </div>
                </div>
                <div class="result-body">
                    <div class="result-category" style="background: ${result.color}">
                        ${result.category}
                    </div>
                    <div class="result-actions">
                        <button class="btn-small btn-outline" onclick="viewResultDetail(${index})">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                            Detail
                        </button>
                        <button class="btn-small btn-secondary" onclick="deleteResult(${index})">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"/>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Load Recommendations
function loadRecommendations() {
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    const container = document.getElementById('recommendationsContainer');

    if (testResults.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-muted); grid-column: 1/-1;">Ikuti tes untuk mendapatkan rekomendasi personal</p>';
        return;
    }

    // Analyze recent results
    const recentResults = testResults.slice(0, 5);
    const recommendations = [];

    // Check for concerning patterns
    const hasHighScores = recentResults.some(r => r.score > 15);
    const hasMediumScores = recentResults.some(r => r.score >= 10 && r.score <= 15);

    if (hasHighScores) {
        recommendations.push({
            icon: '🏥',
            title: 'Chat Guru BK',
            description: 'Hasil tesmu menunjukkan kamu butuh bantuan lebih. Yuk, cerita ke guru BK. Privasi kamu dijamin!',
            action: 'Chat Sekarang',
            link: 'https://wa.me/6281234567890'
        });
    }

    if (hasMediumScores) {
        recommendations.push({
            icon: '🧘',
            title: 'Istirahat Dulu',
            description: 'Kayaknya kamu lagi agak capek atau stres. Coba latihan pernapasan atau meditasi buat bikin pikiran lebih tenang.',
            action: 'Coba Relaksasi',
            link: 'relaksasi.html'
        });
    }

    recommendations.push({
        icon: '📚',
        title: 'Baca Artikel',
        description: 'Baca artikel tentang kesehatan mental dan tips menghadapi masalah.',
        action: 'Baca Sekarang',
        link: 'artikel.html'
    });

    recommendations.push({
        icon: '📝',
        title: 'Cek Kondisi Harian',
        description: 'Pantau kondisi mentalmu tiap hari biar bisa tau perkembangannya.',
        action: 'Cek Sekarang',
        link: 'tes-mental.html'
    });

    container.innerHTML = recommendations.map(rec => `
        <div class="recommendation-card">
            <div class="recommendation-icon" style="background: var(--bg-secondary)">
                ${rec.icon}
            </div>
            <h3>${rec.title}</h3>
            <p>${rec.description}</p>
            <button class="btn-primary btn-block" onclick="window.location.href='${rec.link}'">
                ${rec.action}
            </button>
        </div>
    `).join('');
}

// Initialize Charts
function initCharts() {
    // Mental Health Score Chart
    const mentalHealthCanvas = document.getElementById('mentalHealthChart');
    if (mentalHealthCanvas) {
        mentalHealthCanvas.width = mentalHealthCanvas.offsetWidth;
        mentalHealthCanvas.height = 300;
        updateChart();
    }

    // Test Distribution Chart
    const distributionCanvas = document.getElementById('testDistributionChart');
    if (distributionCanvas) {
        distributionCanvas.width = distributionCanvas.offsetWidth;
        distributionCanvas.height = 300;
        updateDistributionChart();
    }
}

// Update Mental Health Chart
function updateChart() {
    const period = parseInt(document.getElementById('chartPeriod').value);
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - period);
    
    const relevantResults = testResults.filter(r => new Date(r.date) > startDate);
    
    // Group by date and average scores
    const scoresByDate = {};
    relevantResults.forEach(r => {
        const date = new Date(r.date).toISOString().split('T')[0];
        if (!scoresByDate[date]) {
            scoresByDate[date] = [];
        }
        scoresByDate[date].push(r.score);
    });

    // Create data points
    const dates = [];
    const scores = [];
    
    for (let i = period - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        const dateLabel = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
        
        dates.push(dateLabel);
        
        if (scoresByDate[dateStr]) {
            const avg = scoresByDate[dateStr].reduce((a, b) => a + b, 0) / scoresByDate[dateStr].length;
            scores.push(avg);
        } else {
            scores.push(0);
        }
    }

    const canvas = document.getElementById('mentalHealthChart');
    drawLineChart(canvas, scores, dates);
}

// Update Distribution Chart
function updateDistributionChart() {
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    
    const distribution = {};
    testResults.forEach(r => {
        const testType = r.testName.split(' ')[0]; // Get first word
        distribution[testType] = (distribution[testType] || 0) + 1;
    });

    const data = Object.entries(distribution).map(([label, value]) => ({ label, value }));
    
    const canvas = document.getElementById('testDistributionChart');
    drawDoughnutChart(canvas, data);
}

// View Result Detail
function viewResultDetail(index) {
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    const result = testResults[index];
    
    MindCare.showNotification(`Detail untuk ${result.testName}: Skor ${result.score} (${result.category})`, 'info');
}

// Delete Result
function deleteResult(index) {
    if (confirm('Yakin ingin menghapus hasil tes ini?')) {
        const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
        testResults.splice(index, 1);
        localStorage.setItem('testResults', JSON.stringify(testResults));
        
        loadStats();
        loadTestResults();
        loadRecommendations();
        updateChart();
        updateDistributionChart();
        
        MindCare.showNotification('Hasil tes berhasil dihapus', 'success');
    }
}

// Clear All History
function clearHistory() {
    if (confirm('Yakin ingin menghapus semua riwayat tes? Tindakan ini tidak dapat dibatalkan.')) {
        localStorage.removeItem('testResults');
        
        loadStats();
        loadTestResults();
        loadRecommendations();
        updateChart();
        updateDistributionChart();
        
        MindCare.showNotification('Semua riwayat berhasil dihapus', 'success');
    }
}

// Export Data
function exportData() {
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    const moodData = JSON.parse(localStorage.getItem('moodData') || '[]');
    
    const data = {
        testResults,
        moodData,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `mindcare-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    MindCare.showNotification('Data berhasil diexport', 'success');
}

// Reinitialize charts on theme change
document.addEventListener('DOMContentLoaded', function() {
    initDashboard();
    
    // Watch for theme changes
    const themeObserver = new MutationObserver(function() {
        setTimeout(() => {
            updateChart();
            updateDistributionChart();
        }, 100);
    });
    
    themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            initCharts();
        }, 250);
    });
});
