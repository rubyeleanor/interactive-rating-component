const ratings = document.querySelectorAll('.nums');
const submit = document.querySelector('#submit');
const score = document.querySelector('#score');



for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', () => {
        score.textContent = i + 1;

    })
}