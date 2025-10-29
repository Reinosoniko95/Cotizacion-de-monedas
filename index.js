import promptSync from "prompt-sync";
const prompt = promptSync();

const anio = prompt("Año (YYYY): ");
const mes = prompt("Mes (MM): ");
const dia = prompt("Día (DD): ");
const fecha = `${anio}-${mes}-${dia}`;

const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${fecha}/v1/currencies/eur.json`;
const res = await fetch(url);
const data = await res.json();
console.log("La cotización de la moneda argentina es:", data.eur.ars);
