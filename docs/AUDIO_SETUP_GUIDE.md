# 🎵 **Panduan Menambahkan File Audio ke Website Relaksasi**

## ✅ **Yang Sudah Diperbarui:**

### **1. Kode JavaScript (`relaksasi.js`)**
- ✅ Menggunakan HTML5 Audio API
- ✅ Mendukung file MP3
- ✅ Auto-loop audio
- ✅ Volume control yang smooth
- ✅ Error handling yang baik

### **2. Struktur Folder**
```
📁 audio/
├── 📄 README.md          # Panduan lengkap
├── 📄 wave.mp3          # Placeholder suara ombak
├── 📄 rain.mp3          # Placeholder suara hujan
├── 📄 ambient.mp3       # Placeholder musik ambient
└── 📄 fire.mp3          # Placeholder suara api
```

## 🎯 **Langkah-Langkah Menambahkan Audio:**

### **Langkah 1: Dapatkan File Audio**
```bash
# Opsi 1: Download dari YouTube Audio Library
# Kunjungi: https://www.youtube.com/audiolibrary
# Cari: "ocean waves", "rain sounds", "ambient music", "fireplace"

# Opsi 2: Situs Royalty-Free
- Epidemic Sound: https://www.epidemicsound.com
- Freesound: https://freesound.org
- Zapsplat: https://www.zapsplat.com
```

### **Langkah 2: Persiapkan File Audio**
```bash
# Pastikan spesifikasi:
# - Format: MP3
# - Bitrate: 128-192 kbps
# - Durasi: 2-10 menit
# - Volume: Normalized
```

### **Langkah 3: Ganti File Placeholder**
```bash
# Salin file audio ke folder:
# c:\Users\[USERNAME]\Documents\Website Layanan Psikologi Dan Mental Health Untuk Siswa SMAN 1 Bone\audio\

# Ganti file:
wave.mp3    ← file suara ombak Anda
rain.mp3    ← file suara hujan Anda
ambient.mp3 ← file musik ambient Anda
fire.mp3    ← file suara api Anda
```

### **Langkah 4: Test Audio**
```bash
# Jalankan server lokal
cd "c:\Users\[USERNAME]\Documents\Website Layanan Psikologi Dan Mental Health Untuk Siswa SMAN 1 Bone"
python -m http.server 8000

# Buka browser: http://localhost:8000/relaksasi.html
# Test semua 4 tombol audio
```

## 🎵 **Rekomendasi File Audio:**

### **Suara Ombak (`wave.mp3`)**
- **Panjang**: 3-5 menit
- **Suara**: Ombak pantai yang tenang
- **Volume**: Medium, tidak terlalu keras
- **Contoh**: "Ocean Waves" dari YouTube Audio Library

### **Suara Hujan (`rain.mp3`)**
- **Panjang**: 3-5 menit
- **Suara**: Hujan ringan di atap/pepohonan
- **Volume**: Medium, menenangkan
- **Contoh**: "Rain Sounds" dari YouTube Audio Library

### **Musik Ambient (`ambient.mp3`)**
- **Panjang**: 5-10 menit
- **Jenis**: Instrumental, new age, meditation music
- **Tempo**: Slow, 60-80 BPM
- **Instrumen**: Piano, strings, pads
- **Contoh**: "Ambient Music" dari Epidemic Sound

### **Suara Api (`fire.mp3`)**
- **Panjang**: 3-5 menit
- **Suara**: Perapian yang crackling
- **Volume**: Medium-low, cozy
- **Contoh**: "Fireplace Sounds" dari Freesound

## 🔧 **Troubleshooting:**

### **Audio Tidak Bermain**
```javascript
// Check di browser console:
console.log('Audio file path:', audioFiles.wave);
// Pastikan path benar: "audio/wave.mp3"
```

### **Error Loading Audio**
```javascript
// Check network tab di DevTools
// Pastikan file MP3 ada dan bisa diakses
```

### **Volume Terlalu Kecil/Besar**
```javascript
// Adjust di relaksasi.js line ~220:
audio.volume = 0.3; // Ubah dari 0.1 sampai 1.0
```

## 📋 **Checklist Implementasi:**

- [ ] Download 4 file audio MP3
- [ ] Convert ke format MP3 jika perlu
- [ ] Normalize volume audio
- [ ] Ganti file placeholder di folder `audio/`
- [ ] Test di browser lokal
- [ ] Test di berbagai browser
- [ ] Test di mobile device

## 🎉 **Hasil Akhir:**

Setelah menambahkan file audio yang sebenarnya:
- ✅ Suara ombak yang realistis
- ✅ Suara hujan yang menenangkan
- ✅ Musik ambient yang soothing
- ✅ Suara api yang cozy
- ✅ Kontrol volume yang smooth
- ✅ Auto-loop yang seamless

---
*File audio akan memberikan pengalaman relaksasi yang jauh lebih baik daripada suara sintetis sebelumnya!*