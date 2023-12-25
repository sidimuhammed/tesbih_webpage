// script.js

const namesOfAllah = [
    'الله', 'الرَّحْمَنُ', 'الرَّحِيمُ', 'الْمَلِكُ', 'الْقُدُّوسُ', 'السَّلَامُ', 'الْمُؤْمِنُ', 'الْمُهَيْمِنُ',
    'الْعَزِيزُ', 'الْجَبَّارُ', 'الْمُتَكَبِّرُ', 'الْخَالِقُ', 'الْبَارِئُ', 'الْمُصَّدِّقُ', 'الْمُحْيِي', 'الْمُمِيتُ',
    'الْحَيُّ', 'الْقَيُّومُ', 'الْوَاجِدُ', 'الْمَاجِدُ', 'الْوَاحِدُ', 'الصَّمَدُ', 'الْقَادِرُ', 'الْمُقْتَدِرُ',
    'الْمُقَدِّمُ', 'الْمُؤَخِّرُ', 'الْأَوَّلُ', 'الْآخِرُ', 'الظَّاهِرُ', 'الْبَاطِنُ', 'الْوَلِيُّ', 'الْمُتَعَالِي',
    'الْبَرُّ', 'الْتَّوَّابُ', 'الْمُنْتَقِمُ', 'الْعَفْوُ', 'الرَّؤُوفُ', 'مَالِكُ الْمُلْكِ', 'ذُو الْجَلَالِ وَالْإِكْرَامِ',
    'الْمُقْسِطُ', 'الْجَامِعُ', 'النَّاصِرُ', 'الْمَنَّانُ', 'الْحَيُّ الْقَيُّومُ', 'الْمُجِيبُ', 'الْوَاحِدُ الْأَحَدُ'
];



var TasbihCounter = {
    counters: [0, 0, 0, 0],
    maxCount: 100,

    updateCounter: function (index) {
        if (this.counters[index - 1] < this.maxCount) {
            this.counters[index - 1]++;
            document.getElementById('counter' + index).textContent = 'Counter: ' + this.counters[index - 1];

            var progressBar = document.getElementById('progressBar' + index);
            var progress = (this.counters[index - 1] / this.maxCount) * 100;
            progressBar.style.width = progress + '%';

            if (this.counters[index - 1] === this.maxCount) {
                this.showResetConfirmation(index);
            }
        }
    },

    showResetConfirmation: function (index) {
        var message = '';
        switch (index) {
            case 1:
                message = 'Congrats! You have made 100 Tesbih. Do you want to reset it?';
                break;
            case 2:
                message = 'Congrats! You have made 100 Istighfar. Do you want to reset it?';
                break;
            case 3:
                message = 'Congrats! You have made 100 Salawat. Do you want to reset it?';
                break;
            case 4:
                message = 'Congrats! You have made 100 La ilaha illallah. Do you want to reset it?';
                break;
            default:
                message = 'Congratulations! You reached 100. Do you want to reset it?';
        }

        var resetConfirmed = confirm(message);
        if (resetConfirmed) {
            this.resetCounter(index);
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

// Attach event listeners to the buttons
document.getElementById('tasbihButton1').addEventListener('click', function () {
    TasbihCounter.countTasbih(1);
});

document.getElementById('tasbihButton2').addEventListener('click', function () {
    TasbihCounter.countTasbih(2);
});

document.getElementById('tasbihButton3').addEventListener('click', function () {
    TasbihCounter.countTasbih(3);
});

document.getElementById('tasbihButton4').addEventListener('click', function () {
    TasbihCounter.countTasbih(4);
});

// Dark mode toggle function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        TasbihCounter.displayNamesInHeader();
    }
}


