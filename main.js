const dataAtual = new Date();
let dataObjetivo = prompt("Data final (formato ANO-MÊS-DIA, exemplo: 12-03-2025");
dataObjetivo = new Date(dataObjetivo+"T23:59:59");
let diasQueFaltam = Math.floor((dataObjetivo - dataAtual) / 86400000);
document.querySelector("#dias_restantes").textContent = diasQueFaltam+" dias";
