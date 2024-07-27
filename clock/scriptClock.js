function pad(number) {
    return number < 10 ? '0' + number : number;
}

function updateClock() {
    const now = new Date();
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    const day = pad(now.getDate());
    const month = pad(now.getMonth() + 1);
    const year = now.getFullYear();

    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').innerText = `${day}/${month}/${year}`;

    let message = "";
    const totalMinutes = now.getHours() * 60 + now.getMinutes();
    if (totalMinutes >= 1 && totalMinutes < 7 * 60) {
        message = "Es hora de descansar. Apaga y sigue mañana";
    } else if (totalMinutes >= 7 * 60 + 1 && totalMinutes < 12 * 60) {
        message = "Buenos días, desayuna fuerte y a darle al código";
    } else if (totalMinutes >= 12 * 60 + 1 && totalMinutes < 14 * 60) {
        message = "Echa un rato más pero no olvides comer";
    } else if (totalMinutes >= 14 * 60 + 1 && totalMinutes < 16 * 60) {
        message = "Espero que hayas comido";
    } else if (totalMinutes >= 16 * 60 + 1 && totalMinutes < 18 * 60) {
        message = "Buenas tardes, el último empujón";
    } else if (totalMinutes >= 18 * 60 + 1 && totalMinutes < 22 * 60) {
        message = "Esto ya son horas extras, ... piensa en parar pronto";
    } else {
        message = "Buenas noches, es hora de pensar en parar y descansar";
    }

    document.getElementById('message').innerText = message;
}

setInterval(updateClock, 1000);
updateClock(); 