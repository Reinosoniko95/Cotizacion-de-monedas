export async function consultarCotizaciones(fecha) {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${fecha}/v1/currencies/eur.json`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.eur.ars);
}
