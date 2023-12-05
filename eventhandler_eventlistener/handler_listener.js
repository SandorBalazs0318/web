function handleFormSubmit(event) {
    event.preventDefault();
    const inputValue = document.getElementById('szoveg').value;
    console.log('Beírt szöveg: ', inputValue);
}
        
document.getElementById('elkuld').addEventListener('click', handleFormSubmit);