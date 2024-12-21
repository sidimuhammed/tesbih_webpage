const namesOfAllah = [
    'الرَّحْمَنُ', 'الرَّحِيمُ', 'الْمَلِكُ', 'الْقُدُّوسُ', 'السَّلَامُ', 'الْمُؤْمِنُ', 'الْمُهَيْمِنُ',
    'الْعَزِيزُ', 'الْجَبَّارُ', 'الْمُتَكَبِّرُ', 'الْخَالِقُ', 'الْبَارِئُ', 'الْمُصَوِّرُ', 'الْغَفَّارُ', 'الْقَهَّارُ',
    'الْوَهَّابُ', 'الرَّزَّاقُ', 'الْفَتَّاحُ', 'اَلْعَلِيْمُ', 'الْقَابِضُ', 'الْبَاسِطُ', 'الْخَافِضُ', 'الرَّافِعُ',
    'المُعِزُّ', 'المُذِلُّ', 'السَّمِيعُ', 'الْبَصِيرُ', 'الْحَكَمُ', 'الْعَدْلُ', 'اللَّطِيفُ', 'الْخَبِيرُ',
    'الْحَلِيمُ', 'الْعَظِيمُ', 'الْغَفُورُ', 'الشَّكُورُ', 'الْعَلِيُّ', 'الْكَبِيرُ', 'الْحَفِيظُ', 'المُقيِتُ',
    'الحسِيبُ', 'الجَلِيلُ', 'الكَرِيمُ', 'الرَّقِيبُ', 'المُجِيبُ', 'الْوَاسِعُ', 'الْحَكِيمُ', 'الْوَدُودُ',
    'الْمَجِيدُ', 'الْبَاعِثُ', 'الشَّهِيدُ', 'الْحَقُّ', 'الْوَكِيلُ', 'الْقَوِيُّ', 'المتِينُ', 'الْوَلِيُّ',
    'الْحَمِيدُ', 'المُحْصِي', 'المُبْدِئُ', 'المُعِيدُ', 'المُحْيِي', 'المُمِيتُ', 'الْحَيُّ', 'الْقَيُّومُ',
    'الْوَاجِدُ', 'الْمَاجِدُ', 'الْواحِدُ', 'اَلاَحَدُ', 'الصَّمَدُ', 'الْقَادِرُ', 'المُقْتَدِرُ', 'المُقَدِّمُ',
    'المُؤَخِّرُ', 'الأوَّلُ', 'الآخِرُ', 'الظَّاهِرُ', 'البَاطِنُ', 'الوَالِي', 'المُتَعَالِي', 'البَرُّ',
    'التَّوَابُ', 'المُنْتَقِمُ', 'العَفُوُ', 'الرَّؤُوفُ', 'مَالِكُ الْمُلْكُ', 'ذُوالْجَلاَلِ وَالإكْرَامُ',
    'المُقْسِطُ', 'الجَامِعُ', 'الغَنيُّ', 'المُغْنِي', 'المَانِعُ', 'الضَّار', 'النَّافِعُ', 'النُّورُ',
    'الْهَادِي', 'البَدِيعُ', 'البَاقِي', 'الوَارِثُ', 'الرَّشِيدُ', 'الصَّبُورُ'
];


const TasbihCounter = {
    counters: [0, 0, 0, 0, 0],
    maxCounts: [100, 100, 100, 100, 100], // Default maximum counts

    updateMaxCounts: function() {
        for (let i = 0; i < this.maxCounts.length; i++) {
            const select = document.getElementById('maxCount' + (i + 1));
            this.maxCounts[i] = parseInt(select.value);
            if (this.counters[i] > this.maxCounts[i]) {
                this.counters[i] = this.maxCounts[i];
                document.getElementById('counter' + (i + 1)).textContent = 'Counter: ' + this.counters[i];
            }
            document.getElementById('progressBar' + (i + 1)).style.width = '0%';
        }
    },

    updateCounter: function(index) {
        if (this.counters[index - 1] < this.maxCounts[index - 1]) {
            this.counters[index - 1]++;
            document.getElementById('counter' + index).textContent = 'Counter: ' + this.counters[index - 1];
            const progress = (this.counters[index - 1] / this.maxCounts[index - 1]) * 100;
            document.getElementById('progressBar' + index).style.width = progress + '%';
        } else {
            this.counters[index - 1] = 0;
            document.getElementById('counter' + index).textContent = 'Counter: ' + this.counters[index - 1];
            document.getElementById('progressBar' + index).style.width = '0%';
        }
    },

    resetCounter: function (index) {
        this.counters[index - 1] = 0;
        document.getElementById('counter' + index).textContent = 'Counter: ' + this.counters[index - 1];
        document.getElementById('progressBar' + index).style.width = '0%';
    },

    countTasbih: function (index) {
        this.updateCounter(index);
    },

    displayNamesInHeader: function () {
        const namesContainer = document.querySelector('.namesContainer.dark-mode');
        namesContainer.innerHTML = namesOfAllah.map(name => `<div class="allah-name">${name}</div>`).join('');
    }
};

document.querySelectorAll('.dropdown-menu').forEach(function(select) {
    select.addEventListener('change', TasbihCounter.updateMaxCounts.bind(TasbihCounter));
});

document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        TasbihCounter.displayNamesInHeader();
    }
});

for (let i = 1; i <= 5; i++) {
    document.getElementById('tasbihButton' + i).addEventListener('click', function () {
        TasbihCounter.countTasbih(i);
    });
}

function resetCounter(counterIndex) {
    TasbihCounter.resetCounter(counterIndex);
}

function redirectToQuran() {
    window.open('https://www.pdfquran.com/', '_blank');
}




