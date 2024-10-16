document.getElementById('convertBtn').addEventListener('click', function() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');
    
    if (input) {
        const binary = stringToBinary(input);
        output.textContent = binary;
    } else {
        output.textContent = 'Please enter a valid string or number.';
    }
});

function stringToBinary(str) {
    return str.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
}
