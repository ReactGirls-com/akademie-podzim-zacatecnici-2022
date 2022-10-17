// // Pozdravení uživatele
// let vstup = prompt("Zadej svoje jméno:");
// console.log(`Ahoj, tvoje jméno je ${vstup}.`);

// --------------------------------------------------

// // Načtení čísla od uživatele
// let hodina = Number(prompt("Zadej, kolik je hodin:"));
// if (hodina < 9) {
// 	console.log("Je ráno.");
// } else if (hodina < 12) {
// 	console.log("Je dopoledne.");
// } else if (hodina === 12) {
// 	console.log("Je poledne.");
// } else {
// 	console.log("Je odpoledne.");
// }

// --------------------------------------------------

// // Vypsání všech lichých čísel od 1 do 9
// for (let i = 1; i <= 9; i++) {
// 	if (i % 2 === 1) {
// 		console.log(i);
// 	}
// }

// --------------------------------------------------

// // Pozdravení uživatele pomocí funkce

// function pozdravUzivatele() {
// 	let jmeno = prompt("Zadej svoje jméno:");
// 	console.log(`Ahoj, tvoje jméno je ${jmeno}.`);
// }

// pozdravUzivatele();
// pozdravUzivatele();

// --------------------------------------------------

// // Aritmetický průměr dvou čísel
// function aritmetickyPrumer(cislo1, cislo2) {
// 	let vysledek = (cislo1 + cislo2) / 2;
// 	return vysledek;
// }

// let prumer1 = aritmetickyPrumer(2, 4);
// let prumer2 = aritmetickyPrumer(2, 3);
// console.log(prumer1);
// console.log(prumer2);
