window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out-screen');
        }, 2500);
    }
});

const GAME_CONFIG = {
    totalQuestions: 15,
    defaultTime: 20,
    milestones: [5, 10, 15]
};

const questionPool = [
    {
        question: "Güneş sistemindeki en büyük gezegen hangisidir?",
        choices: ["Mars", "Jüpiter", "Satürn", "Venüs"],
        correctAnswer: "Jüpiter",
        image: "https://images.unsplash.com/photo-1614730341194-75c60740a073?w=500&q=80"
    },
    {
        question: "Ünlü 'Yıldızlı Gece' tablosu kime aittir?",
        choices: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dali"],
        correctAnswer: "Vincent van Gogh",
        image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=500&q=80"
    },
    {
        question: "Suyun kimyasal formülü nedir?",
        choices: ["CO2", "H2O", "O2", "NaCl"],
        correctAnswer: "H2O",
        image: "https://images.unsplash.com/photo-1560868884-2af2d77d70c4?w=500&q=80"
    },
    {
        question: "Mona Lisa tablosu hangi müzede sergilenmektedir?",
        choices: ["Louvre", "British Museum", "Metropolitan", "Prado"],
        correctAnswer: "Louvre",
        image: "https://images.unsplash.com/photo-1597926660144-884c563d7675?w=500&q=80"
    },
    {
        question: "DNA yapısını keşfeden bilim insanları kimlerdir?",
        choices: ["Newton & Galileo", "Watson & Crick", "Tesla & Edison", "Curie & Pasteur"],
        correctAnswer: "Watson & Crick",
        image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&q=80"
    },
    {
        question: "Periyodik tabloda 'Au' simgesi hangi elementi temsil eder?",
        choices: ["Gümüş", "Bakır", "Altın", "Alüminyum"],
        correctAnswer: "Altın",
        image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=500&q=80"
    },
    {
        question: "Işık hızına en yakın hız hangisidir?",
        choices: ["Ses hızı", "300.000 km/sn", "1000 km/sa", "Mach 10"],
        correctAnswer: "300.000 km/sn",
        image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=500&q=80"
    },
    {
        question: "'Düşünen Adam' heykelini kim yapmıştır?",
        choices: ["Rodin", "Michelangelo", "Donatello", "Bernini"],
        correctAnswer: "Rodin",
        image: "https://images.unsplash.com/photo-1560074523-267924ebc0a0?w=500&q=80"
    },
    {
        question: "İnternetin atası sayılan ağın adı nedir?",
        choices: ["Skynet", "ARPANET", "Ethernet", "CyberNet"],
        correctAnswer: "ARPANET",
        image: "https://images.unsplash.com/photo-1558494949-ef526b98a999?w=500&q=80"
    },
    {
        question: "Evrim Teorisi'ni ortaya atan bilim insanı kimdir?",
        choices: ["Albert Einstein", "Charles Darwin", "Stephen Hawking", "Nikola Tesla"],
        correctAnswer: "Charles Darwin",
        image: "https://images.unsplash.com/photo-1544919978-87a91d2419a7?w=500&q=80"
    },
    {
        question: "Hangi gezegenin halkaları en belirgindir?",
        choices: ["Jüpiter", "Uranüs", "Satürn", "Neptün"],
        correctAnswer: "Satürn",
        image: "https://images.unsplash.com/photo-1614730341194-75c60740a073?w=500&q=80"
    },
    {
        question: "'Guernica' tablosu hangi savaşı anlatır?",
        choices: ["I. Dünya Savaşı", "İspanya İç Savaşı", "II. Dünya Savaşı", "Fransız Devrimi"],
        correctAnswer: "İspanya İç Savaşı",
        image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=500&q=80"
    },
    {
        question: "Yapay zekanın babası olarak kim kabul edilir?",
        choices: ["Alan Turing", "Elon Musk", "Bill Gates", "Steve Jobs"],
        correctAnswer: "Alan Turing",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80"
    },
    {
        question: "Klasik müzikte 'Dört Mevsim' kime aittir?",
        choices: ["Bach", "Mozart", "Vivaldi", "Beethoven"],
        correctAnswer: "Vivaldi",
        image: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?w=500&q=80"
    },
    {
        question: "Kuantum fiziğinde 'belirsizlik ilkesi' kime aittir?",
        choices: ["Schrödinger", "Heisenberg", "Planck", "Bohr"],
        correctAnswer: "Heisenberg",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&q=80"
    },
    {
        question: "Oscar ödülü kazanan ilk 'Yapay Zeka' filmi hangisidir?",
        choices: ["Ex Machina", "Her", "Matrix", "Blade Runner"],
        correctAnswer: "Her",
        image: "https://images.unsplash.com/photo-1535378437327-10128a50998a?w=500&q=80"
    },
    {
        question: "Hangi element oda sıcaklığında sıvı haldedir?",
        choices: ["Demir", "Cıva", "Kurşun", "Çinko"],
        correctAnswer: "Cıva",
        image: "https://images.unsplash.com/photo-1622328493805-4e89e09d18b2?w=500&q=80"
    },
    {
        question: "Salvador Dali hangi sanat akımının temsilcisidir?",
        choices: ["Kübizm", "Sürrealizm", "Empresyonizm", "Barok"],
        correctAnswer: "Sürrealizm",
        image: "https://images.unsplash.com/photo-1569420067341-2e6e3f53835e?w=500&q=80"
    },
    {
        question: "İnsan vücudundaki en güçlü kas hangisidir?",
        choices: ["Pazı", "Dil", "Çene Kası", "Kalp"],
        correctAnswer: "Çene Kası",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&q=80"
    },
    {
        question: "Nobel ödülünü iki farklı dalda kazanan tek kişi kimdir?",
        choices: ["Albert Einstein", "Marie Curie", "Isaac Newton", "Linus Pauling"],
        correctAnswer: "Marie Curie",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&q=80"
    }
];

let gameQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let correctAnswersCount = 0;
let timerInterval;
let timeLeft;
let audioContext;

const startBtn = document.getElementById('start-btn');
const quizArea = document.getElementById('quiz-area');
const signImage = document.getElementById('sign-image');
const questionText = document.getElementById('question-text');
const choicesList = document.getElementById('choices-list');
const scoreSpan = document.getElementById('score');
const feedbackDiv = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const progressFill = document.getElementById('progress-fill');
const progressBar = document.getElementById('progress-bar');
const progressMap = document.getElementById('progress-map');
const progressDots = document.getElementById('progress-dots');
const timerContainer = document.getElementById('timer-container');
const milestoneOverlay = document.getElementById('milestone-overlay');
const milestoneImg = document.getElementById('milestone-image');
const milestoneText = document.getElementById('milestone-text');
const footer = document.querySelector('.footer');
const startLogos = document.getElementById('start-logos');

const resultArea = document.getElementById('result-area');
const finalScoreText = document.getElementById('final-score-text');
const playerNameInput = document.getElementById('player-name');
const saveScoreBtn = document.getElementById('save-score-btn');
const highscoreInputSection = document.getElementById('highscore-input-section');
const leaderboardSection = document.getElementById('leaderboard-section');
const leaderboardList = document.getElementById('leaderboard-list');
const downloadDataBtn = document.getElementById('download-data-btn');

// Ödül Sistemi Değişkenleri
const rewardContainer = document.getElementById('reward-container');
const rewardTitle = document.getElementById('reward-title');
const correctCountText = document.getElementById('correct-count-text');
const rewardIcon = document.getElementById('reward-icon');

function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
}

function playSound(type) {
    if (!audioContext) return;
    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.connect(gain);
    gain.connect(audioContext.destination);

    if (type === 'correct') {
        osc.type = 'square';
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.frequency.setValueAtTime(988, now);
        osc.frequency.setValueAtTime(1319, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(50, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.2);
    } else if (type === 'milestone') {
        osc.type = 'square';
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.linearRampToValueAtTime(0.1, now + 0.5);
        gain.gain.linearRampToValueAtTime(0, now + 1.0);
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.linearRampToValueAtTime(880, now + 0.2);
        osc.frequency.linearRampToValueAtTime(1760, now + 0.6);
        osc.start(now);
        osc.stop(now + 1.0);
    } else if (type === 'timeout') {
        osc.type = 'square';
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
        osc.frequency.setValueAtTime(493, now);       
        osc.frequency.setValueAtTime(349, now + 0.1); 
        osc.frequency.setValueAtTime(349, now + 0.2); 
        osc.frequency.setValueAtTime(329, now + 0.3); 
        osc.frequency.setValueAtTime(293, now + 0.4); 
        osc.frequency.setValueAtTime(261, now + 0.5); 
        osc.start(now);
        osc.stop(now + 0.8);
    }
}

startBtn.addEventListener('click', () => {
    initAudioContext();
    const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
    gameQuestions = shuffled.slice(0, GAME_CONFIG.totalQuestions);

    startBtn.classList.add('hide');
    startLogos.classList.add('hide');
    quizArea.classList.remove('hide');
    progressBar.classList.remove('hide');
    progressMap.classList.remove('hide');
    timerContainer.classList.remove('hide');
    
    if (resultArea) resultArea.classList.add('hide');

    if (footer) footer.style.transform = "translateY(100%)";

    score = 0;
    correctAnswersCount = 0;
    currentQuestionIndex = 0;
    scoreSpan.textContent = score;

    initProgressMap();
    loadQuestion();
});

function initProgressMap() {
    progressDots.innerHTML = '';
    gameQuestions.forEach(() => {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        progressDots.appendChild(dot);
    });
}

function updateProgressMap(status) {
    const dots = document.querySelectorAll('.progress-dot');
    if (status === 'correct') {
        dots[currentQuestionIndex].classList.add('completed');
    } else if (status === 'wrong') {
        dots[currentQuestionIndex].classList.add('failed');
    } else if (status === 'next') {
        dots.forEach(d => d.classList.remove('current'));
        if (currentQuestionIndex < dots.length) {
            dots[currentQuestionIndex].classList.add('current');
        }
    }
}

function loadQuestion() {
    resetState();
    if (currentQuestionIndex >= gameQuestions.length) {
        endGame();
        return;
    }

    const currentQ = gameQuestions[currentQuestionIndex];
    questionText.textContent = currentQ.question;
    signImage.src = currentQ.image || 'https://via.placeholder.com/500x300?text=Resim+Yok';

    currentQ.choices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', selectAnswer);
        choicesList.appendChild(li);
    });

    progressFill.style.width = `${((currentQuestionIndex) / gameQuestions.length) * 100}%`;
    updateProgressMap('next');
    startTimer(currentQ.timeLimit || GAME_CONFIG.defaultTime);
}

function resetState() {
    stopTimer();
    choicesList.innerHTML = '';
    feedbackDiv.textContent = '';
    feedbackDiv.className = 'feedback';
    
    if (nextBtn) nextBtn.classList.add('hide');
    
    timerContainer.classList.remove('warning');
}

function selectAnswer(e) {
    if (document.querySelector('#choices-list .correct') ||
        document.querySelector('#choices-list .incorrect')) return;

    stopTimer();
    const selectedBtn = e.target;
    const currentQ = gameQuestions[currentQuestionIndex];
    const isCorrect = selectedBtn.textContent === currentQ.correctAnswer;

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score += 100;
        correctAnswersCount++;
        scoreSpan.textContent = score;
        playSound('correct');
        updateProgressMap('correct');
        handleTransition(true);
    } else {
        selectedBtn.classList.add('incorrect');
        playSound('wrong');
        updateProgressMap('wrong');
        Array.from(choicesList.children).forEach(btn => {
            if (btn.textContent === currentQ.correctAnswer) {
                btn.classList.add('correct');
            }
        });
        handleTransition(false);
    }
}

function handleTransition(isSuccess) {
    const questionNumber = currentQuestionIndex + 1;
    const isMilestone = GAME_CONFIG.milestones.includes(questionNumber);

    if (isMilestone && isSuccess) {
        setTimeout(() => {
            triggerMilestone(questionNumber);
        }, 500);
    } else {
        setTimeout(nextQuestion, 1500);
    }
}

function triggerMilestone(level) {
    playSound('milestone');
    milestoneImg.src = "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&q=80";
    milestoneText.textContent = `${level}. SORU BARAJI GEÇİLDİ!`;
    milestoneOverlay.classList.remove('hide');

    setTimeout(() => {
        milestoneOverlay.classList.add('hide');
        nextQuestion();
    }, 4000);
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function startTimer(seconds) {
    timeLeft = seconds;
    timerContainer.textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerContainer.textContent = timeLeft;
        if (timeLeft <= 5) {
            timerContainer.classList.add('warning');
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            const currentQ = gameQuestions[currentQuestionIndex];
            
            playSound('timeout');
            updateProgressMap('wrong');
            
            Array.from(choicesList.children).forEach(btn => {
                if (btn.textContent === currentQ.correctAnswer) {
                    btn.classList.add('correct');
                }
            });
            setTimeout(nextQuestion, 2000);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function endGame() {

console.log("Oyun Bitti. Toplam Doğru Sayısı:", correctAnswersCount);

    stopTimer();
    quizArea.classList.add('hide');
    progressBar.classList.add('hide');
    progressMap.classList.add('hide');
    timerContainer.classList.add('hide');

    resultArea.classList.remove('hide');
    finalScoreText.textContent = score;

    let rewardName = "";
    let rewardClass = "";
    let icon = "";
    let hasReward = false;

    if (correctAnswersCount >= 13) {
        rewardName = "BİLİM DERGİSİ";
        rewardClass = "reward-gold";
        icon = "📚";
        hasReward = true;
    } else if (correctAnswersCount >= 11) {
        rewardName = "ANAHTARLIK";
        rewardClass = "reward-silver";
        icon = "🔑";
        hasReward = true;
    } else if (correctAnswersCount >= 7) {
        rewardName = "CAPS (ŞAPKA)";
        rewardClass = "reward-bronze";
        icon = "🧢";
        hasReward = true;
    }

    correctCountText.textContent = `Toplam ${correctAnswersCount} doğru cevap verdiniz.`;
    
    rewardTitle.classList.remove('reward-gold', 'reward-silver', 'reward-bronze');
    rewardContainer.style.borderColor = ""; 

    if (hasReward) {
        rewardContainer.classList.remove('hide');
        rewardTitle.textContent = rewardName;
        rewardTitle.classList.add(rewardClass);
        rewardIcon.textContent = icon;
        
        if(correctAnswersCount >= 9) rewardContainer.style.borderColor = "#FFD700";
        else if(correctAnswersCount >= 7) rewardContainer.style.borderColor = "#C0C0C0";
        else rewardContainer.style.borderColor = "#CD7F32";

    } else {
        rewardContainer.classList.add('hide'); 
    }

    highscoreInputSection.classList.remove('hide');
    leaderboardSection.classList.add('hide');
    playerNameInput.value = '';

    playSound('milestone');
    
    if (typeof confetti === 'function' && hasReward) {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#00ff41', '#ffffff', '#FFD700']
        });
    }
}

if(saveScoreBtn) {
    saveScoreBtn.addEventListener('click', () => {
        const name = playerNameInput.value.toUpperCase();
        if (name.length < 2) {
            alert("Lütfen en az 2 harfli bir isim gir.");
            return;
        }

        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        const newScore = { name: name, score: score, date: new Date().toLocaleDateString() };

        highScores.push(newScore);
        highScores.sort((a, b) => b.score - a.score);
        highScores.splice(5);

        localStorage.setItem('highScores', JSON.stringify(highScores));

        highscoreInputSection.classList.add('hide');
        leaderboardSection.classList.remove('hide');
        updateLeaderboardView(highScores);
    });
}

function updateLeaderboardView(scores) {
    leaderboardList.innerHTML = scores.map(s => 
        `<li><span>${s.name}</span> <span>${s.score}</span></li>`
    ).join('');
}

if(downloadDataBtn) {
    downloadDataBtn.addEventListener('click', () => {
        const data = localStorage.getItem('highScores');
        if(!data) {
            alert("Henüz kayıtlı veri yok.");
            return;
        }
        const blob = new Blob([data], {type: "application/json"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "liderlik_tablosu.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}

const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}