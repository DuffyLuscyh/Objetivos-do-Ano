const dataAtual = new Date();
let dataObjetivo = prompt("Data final (formato DIA-MÊS-ANO, exemplo: 30-05-2025");
dataObjetivo = new Date(dataObjetivo+"T23:59:59");
let diasQueFaltam = Math.floor((dataObjetivo - dataAtual) / 86400000);
document.querySelector("#dias_restantes").textContent = diasQueFaltam+" dias";