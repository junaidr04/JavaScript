// form select করা হচ্ছে
const form = document.querySelector('form');
// form submit হলে এই function চলবে
form.addEventListener('submit', function (e) {
    // form submit দিলে page reload হওয়া বন্ধ করে
    e.preventDefault();
    // height input থেকে value নিয়ে number এ convert করা হচ্ছে
    const height = parseInt(document.querySelector('#height').value);
    // weight input থেকে value নিয়ে number এ convert করা হচ্ছে
    const weight = parseInt(document.querySelector('#weight').value);
    // result দেখানোর জায়গা select করা হচ্ছে
    const result = document.querySelector('#result');
    // height ভুল হলে এই message দেখাবে
    if (height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height`;
    }
    // weight ভুল হলে এই message দেখাবে
    else if (weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight`;
    }
    // সব ঠিক থাকলে BMI calculate করবে
    else {
        // BMI formula
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // result screen এ BMI দেখাবে
        result.innerHTML = `<span>${bmi}</span>`;
    }
});