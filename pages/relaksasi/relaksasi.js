// ============================================
// RELAKSASI FUNCTIONALITY
// ============================================

// Breathing Exercise Variables
let breathingInterval = null;
let breathingPhase = 0;
let breathCount = 0;
let breathStartTime = null;
let breathTimeInterval = null;

// Timer Variables
let timerInterval = null;
let timerSeconds = 300; // 5 minutes default
let timerTotalSeconds = 300;
let timerRunning = false;

// Audio Players with better state management
const audioPlayers = {};
const audioStates = {}; // Track play/pause state per audio type

// Audio file paths
const audioFiles = {
    'wave': '../../assets/audio/wave.mp3',
    'rain': '../../assets/audio/rain.mp3',
    'ambient': '../../assets/audio/ambient.mp3',
    'fire': '../../assets/audio/fire.mp3'
};

// Initialize audio context on first user interaction
let audioContextInitialized = false;

function initializeAudioContext() {
    if (!audioContextInitialized) {
        try {
            // Create and resume audio context
            const testContext = new (window.AudioContext || window.webkitAudioContext)();
            if (testContext.state === 'suspended') {
                testContext.resume();
            }
            audioContextInitialized = true;
        } catch (e) {
            console.log('Audio context initialization failed:', e);
        }
    }
}

// Initialize audio states
function initializeAudioStates() {
    Object.keys(audioFiles).forEach(type => {
        audioStates[type] = 'stopped';
    });
}

// Cleanup function for page unload
function cleanupAudio() {
    stopAllSounds();
}

// Check if audio file exists
function checkAudioFile(type) {
    return new Promise((resolve) => {
        const audio = new Audio();
        audio.preload = 'metadata';

        audio.addEventListener('loadedmetadata', () => {
            resolve({
                exists: true,
                duration: audio.duration,
                type: type
            });
        });

        audio.addEventListener('error', () => {
            resolve({
                exists: false,
                duration: 0,
                type: type
            });
        });

        audio.src = audioFiles[type];
    });
}

// Preload audio files on page load
async function preloadAudioFiles() {
    console.log('Preloading audio files...');

    for (const type of Object.keys(audioFiles)) {
        try {
            const result = await checkAudioFile(type);
            if (result.exists) {
                console.log(`✅ Audio ${type} loaded: ${result.duration.toFixed(1)}s`);
            } else {
                console.warn(`❌ Audio ${type} not found or invalid`);
            }
        } catch (e) {
            console.error(`Error checking audio ${type}:`, e);
        }
    }
}

// Start Breathing Exercise
function startBreathingExercise() {
    if (breathingInterval) return;

    breathCount = 0;
    breathingPhase = 0;
    breathStartTime = Date.now();

    document.getElementById('startBreathing').style.display = 'none';
    document.getElementById('stopBreathing').style.display = 'flex';

    breathingCycle();
    breathingInterval = setInterval(breathingCycle, 4000);

    // Update time display
    breathTimeInterval = setInterval(updateBreathTime, 1000);
}

// Stop Breathing Exercise
function stopBreathingExercise() {
    if (breathingInterval) {
        clearInterval(breathingInterval);
        breathingInterval = null;
    }
    
    if (breathTimeInterval) {
        clearInterval(breathTimeInterval);
        breathTimeInterval = null;
    }

    document.getElementById('startBreathing').style.display = 'flex';
    document.getElementById('stopBreathing').style.display = 'none';
    document.getElementById('breathingCircle').className = 'breathing-circle';
    document.getElementById('breathingText').textContent = 'Bersiap...';
}

// Breathing Cycle
function breathingCycle() {
    const circle = document.getElementById('breathingCircle');
    const text = document.getElementById('breathingText');

    breathingPhase = (breathingPhase + 1) % 3;

    if (breathingPhase === 0) {
        // Inhale
        circle.className = 'breathing-circle inhale';
        text.textContent = 'Tarik Napas';
    } else if (breathingPhase === 1) {
        // Hold
        circle.className = 'breathing-circle hold';
        text.textContent = 'Tahan';
        breathCount++;
        document.getElementById('breathCount').textContent = breathCount;
    } else {
        // Exhale
        circle.className = 'breathing-circle exhale';
        text.textContent = 'Hembuskan';
    }
}

// Update Breath Time
function updateBreathTime() {
    if (!breathStartTime) return;

    const elapsed = Math.floor((Date.now() - breathStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;

    document.getElementById('breathTime').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Set Timer
function setTimer(minutes) {
    if (timerRunning) return;

    timerSeconds = minutes * 60;
    timerTotalSeconds = minutes * 60;
    updateTimerDisplay();

    // Update active preset
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Start Timer
function startTimer() {
    if (timerRunning) return;

    timerRunning = true;
    document.getElementById('startTimer').style.display = 'none';
    document.getElementById('pauseTimer').style.display = 'flex';

    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();

        if (timerSeconds <= 0) {
            pauseTimer();
            playTimerComplete();
            MindCare.showNotification('Sesi meditasi selesai! 🎉', 'success');
        }
    }, 1000);
}

// Pause Timer
function pauseTimer() {
    if (!timerRunning) return;

    timerRunning = false;
    clearInterval(timerInterval);
    document.getElementById('startTimer').style.display = 'flex';
    document.getElementById('pauseTimer').style.display = 'none';
}

// Reset Timer
function resetTimer() {
    pauseTimer();
    timerSeconds = timerTotalSeconds;
    updateTimerDisplay();
}

// Update Timer Display
function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    
    document.getElementById('timerDisplay').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Update progress circle
    const progress = timerSeconds / timerTotalSeconds;
    const circumference = 2 * Math.PI * 90;
    const offset = circumference * (1 - progress);
    
    const progressCircle = document.getElementById('timerProgress');
    if (progressCircle) {
        progressCircle.style.strokeDashoffset = offset;
    }
}

// Play Timer Complete Sound
function playTimerComplete() {
    // Create a simple beep sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 528; // Healing frequency
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
    } catch (e) {
        console.log('Audio playback not supported');
    }
}

// Play Sound with improved state management
function playSound(type) {
    // Initialize audio context on first interaction
    initializeAudioContext();

    const btn = event.target.closest('.play-btn');

    // If this audio is currently playing, pause it
    if (audioStates[type] === 'playing' && audioPlayers[type]) {
        pauseSound(type);
        return;
    }

    // Stop all other sounds first
    stopAllSounds();

    // Create new audio element
    try {
        // Clean up any existing audio for this type
        if (audioPlayers[type]) {
            audioPlayers[type].pause();
            audioPlayers[type].currentTime = 0;
            audioPlayers[type].removeEventListener('ended', handleAudioEnd);
            audioPlayers[type].removeEventListener('error', handleAudioError);
        }

        const audio = new Audio();
        audio.src = audioFiles[type];
        audio.loop = true; // Loop the audio
        audio.volume = 0.3; // Set initial volume
        audio.preload = 'auto';

        // Add event listeners
        audio.addEventListener('canplaythrough', () => {
            console.log(`Audio ${type} loaded successfully`);
        });

        audio.addEventListener('ended', () => handleAudioEnd(type));

        audio.addEventListener('error', (e) => handleAudioError(type, e));

        audio.addEventListener('play', () => {
            audioStates[type] = 'playing';
            updateButtonState(type, true);
        });

        audio.addEventListener('pause', () => {
            audioStates[type] = 'paused';
            updateButtonState(type, false);
        });

        // Store the audio player
        audioPlayers[type] = audio;
        audioStates[type] = 'loading';

        // Try to play
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log(`Audio ${type} started playing`);
                    audioStates[type] = 'playing';
                    updateButtonState(type, true);

                    // Sync volume slider with current audio volume
                    const currentVolume = Math.round(audioPlayers[type].volume * 100);
                    updateVolumeSlider(type, currentVolume);

                    if (typeof MindCare !== 'undefined' && MindCare.showNotification) {
                        MindCare.showNotification(`Memutar: ${getSoundName(type)}`, 'success');
                    }
                })
                .catch(e => {
                    console.error('Audio play failed:', e);
                    audioStates[type] = 'error';
                    updateButtonState(type, false);

                    if (typeof MindCare !== 'undefined' && MindCare.showNotification) {
                        MindCare.showNotification('Gagal memutar audio. Klik lagi untuk mencoba.', 'error');
                    }
                });
        }

    } catch (e) {
        console.error('Audio creation error:', e);
        audioStates[type] = 'error';
        updateButtonState(type, false);

        if (typeof MindCare !== 'undefined' && MindCare.showNotification) {
            MindCare.showNotification('Browser tidak mendukung pemutaran audio.', 'error');
        }
    }
}

// Helper functions for audio management
function pauseSound(type) {
    if (audioPlayers[type]) {
        try {
            audioPlayers[type].pause();
            audioStates[type] = 'paused';
            updateButtonState(type, false);

            if (typeof MindCare !== 'undefined' && MindCare.showNotification) {
                MindCare.showNotification(`Dijeda: ${getSoundName(type)}`, 'info');
            }
        } catch (e) {
            console.error('Error pausing audio:', e);
        }
    }
}

function stopAllSounds() {
    Object.keys(audioPlayers).forEach(type => {
        if (audioPlayers[type]) {
            try {
                audioPlayers[type].pause();
                audioPlayers[type].currentTime = 0;
                audioPlayers[type].removeEventListener('ended', handleAudioEnd);
                audioPlayers[type].removeEventListener('error', handleAudioError);
                delete audioPlayers[type];
            } catch (e) {
                console.error('Error stopping audio:', e);
            }
        }
        audioStates[type] = 'stopped';
        updateButtonState(type, false);
    });
}

function updateButtonState(type, isPlaying) {
    const btn = document.querySelector(`[onclick="playSound('${type}')"]`);
    if (btn) {
        if (isPlaying) {
            btn.classList.add('playing');
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16"/>
                    <rect x="14" y="4" width="4" height="16"/>
                </svg>
            `;
        } else {
            btn.classList.remove('playing');
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
            `;
        }
    }
}

function handleAudioEnd(type) {
    console.log(`Audio ${type} ended`);
    // Since we have loop=true, this shouldn't normally trigger
    // But if it does, restart the audio
    if (audioPlayers[type] && audioStates[type] === 'playing') {
        audioPlayers[type].currentTime = 0;
        audioPlayers[type].play().catch(e => {
            console.error('Error restarting looped audio:', e);
        });
    }
}

function handleAudioError(type, event) {
    console.error(`Audio error for ${type}:`, event);
    audioStates[type] = 'error';
    updateButtonState(type, false);

    if (typeof MindCare !== 'undefined' && MindCare.showNotification) {
        MindCare.showNotification(`Error memuat audio ${getSoundName(type)}. Pastikan file tersedia.`, 'error');
    }
}

// Set Volume (improved)
function setVolume(value, type) {
    if (audioPlayers[type]) {
        try {
            const volumeValue = Math.max(0, Math.min(1, value / 100));
            audioPlayers[type].volume = volumeValue;
            console.log(`Volume ${type} set to: ${volumeValue} (${value}%)`);

            // Update slider position if it exists
            updateVolumeSlider(type, value);
        } catch (e) {
            console.error('Error setting volume:', e);
        }
    } else {
        console.warn(`No audio player found for ${type} when setting volume`);
    }
}

// Update volume slider position
function updateVolumeSlider(type, value) {
    const slider = document.querySelector(`input[oninput*="setVolume(this.value, '${type}')"]`);
    if (slider) {
        slider.value = value;
    }
}

// Initialize volume sliders to default value
function initializeVolumeSliders() {
    const defaultVolume = 30; // 30% default volume
    Object.keys(audioFiles).forEach(type => {
        updateVolumeSlider(type, defaultVolume);
    });
}

// Get Sound Name
function getSoundName(type) {
    const names = {
        'wave': 'Suara Ombak',
        'rain': 'Suara Hujan',
        'ambient': 'Musik Ambient',
        'fire': 'Api Unggun'
    };
    return names[type] || type;
}

// Motivational Quotes
const quotes = [
    {
        text: "Kesehatan mental sama pentingnya dengan kesehatan fisik. Jaga keduanya dengan baik.",
        author: "Anonymous"
    },
    {
        text: "Tidak apa-apa untuk tidak apa-apa. Izinkan diri Anda untuk merasa dan sembuh.",
        author: "Anonymous"
    },
    {
        text: "Kamu tidak sendirian. Meminta bantuan adalah tanda kekuatan, bukan kelemahan.",
        author: "Anonymous"
    },
    {
        text: "Setiap hari adalah kesempatan baru untuk memulai. Berikan diri Anda waktu untuk tumbuh.",
        author: "Anonymous"
    },
    {
        text: "Merawat kesehatan mental adalah investasi terbaik untuk masa depan Anda.",
        author: "Anonymous"
    },
    {
        text: "Perjalanan seribu mil dimulai dengan satu langkah. Mulailah dari hari ini.",
        author: "Lao Tzu"
    },
    {
        text: "Jangan malu untuk beristirahat. Bahkan bumi memiliki musim untuk beristirahat.",
        author: "Anonymous"
    },
    {
        text: "Kesembuhan bukan linear. Ada naik turun, dan itu normal.",
        author: "Anonymous"
    },
    {
        text: "Berbicara tentang perasaan Anda adalah tanda keberanian dan kebijaksanaan.",
        author: "Anonymous"
    },
    {
        text: "Self-care bukan egois. Anda tidak bisa menuangkan dari cangkir yang kosong.",
        author: "Eleanor Brown"
    },
    {
        text: "Pikiran yang tenang membawa kekuatan batin dan kepercayaan diri.",
        author: "Dalai Lama"
    },
    {
        text: "Masa lalu adalah pelajaran, masa depan adalah misteri. Fokuslah pada saat ini.",
        author: "Anonymous"
    }
];

// Load Random Quote
function loadNewQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');

    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';

    setTimeout(() => {
        quoteText.textContent = randomQuote.text;
        quoteAuthor.textContent = `— ${randomQuote.author}`;
        quoteText.style.transition = 'opacity 0.5s ease';
        quoteAuthor.style.transition = 'opacity 0.5s ease';
        quoteText.style.opacity = '1';
        quoteAuthor.style.opacity = '1';
    }, 300);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Initialize audio states
    initializeAudioStates();

    // Preload audio files to check availability
    preloadAudioFiles();

    // Initialize volume sliders to default value (30%)
    initializeVolumeSliders();

    loadNewQuote();
    updateTimerDisplay();

    // Add gradient definition for timer
    const svg = document.querySelector('.timer-svg');
    if (svg) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'timerGradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');

        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('style', 'stop-color:#667eea;stop-opacity:1');

        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('style', 'stop-color:#764ba2;stop-opacity:1');

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    }
});

// Clean up on page unload
window.addEventListener('beforeunload', function() {
    stopBreathingExercise();
    cleanupAudio();
});
