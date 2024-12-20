document.getElementById('check-btn').addEventListener('click', function() {
    let textInput = document.getElementById('text-input').value;
    let resultElement = document.getElementById('result');

    if (textInput === '') {
        alert('Please input a value');
        return;
    }

    let textInputLower = textInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedTextInput = textInputLower.split('').reverse().join('');

    if (textInputLower === reversedTextInput) {
        resultElement.textContent = 'Yay! ' + textInput + ' is a palindrome.';
    } else {
        resultElement.textContent = 'Oops! ' + textInput + ' is not a palindrome.';
    }
});