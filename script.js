const ratings = document.querySelectorAll('.nums');
const submit = document.querySelector('#submit');
const score = document.querySelector('#score');
const selection = document.querySelector('#scoreSelect');
const thanks = document.querySelector('#thankYouMsg');
const errorMsg = document.querySelector('#errorMsg');

let selectedScore = null;


for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', () => {
        selectedScore = i + 1;
        score.textContent = selectedScore;
    });
};

submit.addEventListener('click', () => {
    if (selectedScore) {
        selection.classList.add('hidden');
        thanks.classList.remove('hidden');
    } else {
        errorMsg.classList.remove('hidden')
    }

});