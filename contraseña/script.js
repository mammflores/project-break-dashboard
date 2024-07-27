const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+";

document.getElementById('generate').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value);
    if (isNaN(length) || length < 12 || length > 50) {
        alert('Por favor, ingrese un número entre 12 y 50');
        return;
    }

    const password = generatePassword(length);
    document.getElementById('password').textContent = password;
});

function generatePassword(length) {
    let allCharacters = upperCase + lowerCase + numbers + symbols;
    let password = '';
    password += getRandomCharacter(upperCase);
    password += getRandomCharacter(lowerCase);
    password += getRandomCharacter(numbers);
    password += getRandomCharacter(symbols);
    for (let i = password.length; i < length; i++) {
        password += getRandomCharacter(allCharacters);
    }
    password = shufflePassword(password);
    return password;
}

function getRandomCharacter(characters) {
    const index = Math.floor(Math.random() * characters.length);
    return characters.charAt(index);
}

function shufflePassword(password) {
    return password.split('').sort(() => 0.5 - Math.random()).join('');
}
