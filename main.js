let count = 0;

let showCount = document.getElementById('counter-title');
let countSaved = document.getElementById('counter-saved');

function increase() {
    count += 1;
    showCount.textContent = count;
}

function save() {
    countSaved.textContent += count + ' - ';
    showCount.textContent = 0;
    count = 0;
}
