// Get elements
const counter = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const textInput = document.getElementById('text-input');
const addButton = document.getElementById('add-button');
const textList = document.getElementById('text-list');

// Initialize counter
let count = 0;

// Event listener for the increment button
incrementButton.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

// Event listener for the add button
addButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = text;
        textList.appendChild(listItem);
        textInput.value = '';
    }
});
