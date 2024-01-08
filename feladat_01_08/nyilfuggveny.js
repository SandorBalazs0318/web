const mefordit = () => {
    
    const inputText = document.getElementById('inputText').value;

    const reversedText = inputText.split('').reverse().join('');

    document.getElementById('output').innerHTML = 'Megfordított szöveg: ' + reversedText;
}