console.log("hello world"[1]);

console.log("Saul"[0]);

console.log("Hola" + " " + "como" + " " + "estas");

console.log("ASAP Frontend"[12]);

console.log("Saul".length);

// Variables

let string = "ASAP Frontend";

console.log(string);
console.log(string[string.length - 1]);

let int = 13;
console.log(int + 3);

let float = 16.8;
console.log(float + 3.1);

console.log(13 < 34);

const texto = "Hola Saul";

let userEmail = "saulwade29@gmail.com";

let age = 17;

age = 21;

// Currency converter

// AUD to USD

// AUD = USD * 1.5

let usd = 1200;
let aud = usd * 1.5;

console.log("$" + usd + " " + "to" + " " + "aud is" + " " + aud);

// Conditionals

let hasMembership = false;
let signedIN = true;

let esVip = false;

if (hasMembership) {
  console.log("Tiene membresia");
} else if (signedIN) {
  console.log("tell user to upgrade their account");
} else {
  console.log("No tiene membresia");
}

if (esVip != true) {
  console.log("No es VIP");
}

// Conditionals ejemplo 2

// and &&
// or ||

let age2 = 18;
let hasID = true;

if (age2 >= 18 && hasID) {
  console.log("You can enter the club");
} else if (age2 < 18) {
  console.log(`No puedes entrar al club tienes ${age2}`);
}

// usa estos ` ` y ${}

let loggedIn = true;
let hasMem = true;

loggedIn && hasMem
  ? console.log("show the video")
  : console.log("dont show the video");
