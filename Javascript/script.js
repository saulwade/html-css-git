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

// loops
// DRY - don't repeat yourself

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter = counter + 1;
}
console.log("while loop finished running");

for (let i = 0; i < 20; i += 2) {
  console.log(i);
}

// Ejercicio loops

for (let i = 1; i < 16; i += 1) {
  if (i % 2 == 0) {
    console.log(`${i} Frontend`);
  } else if (i % 5 == 0) {
    console.log(`${i} ASAP Frontend`);
  } else {
    console.log(`${i} ASAP`);
  }
}

// Ejercicio 2 loops

let text = "ASAP Frontend";

for (let char of text) {
  console.log(char);
}

// Funciones

function greetUser(usuario) {
  console.log(`Hello ${usuario}`);
}

greetUser("Saul");

greetUser("Ivonne");

// if () {}
// else if () {}
// else {}
// for () {}
// function nameFunction() {}
// usa estos ` ` y ${}
// ` `

function currencyConverter(usd) {
  return `${usd} usd to aud is ${usd * 1.5}`;
}

console.log(currencyConverter(1000));

// arrays

let lista = ["apples", "banana", "fresas", "piña", "mandarinas"];

console.log(lista[0]);

console.log(lista[lista.length - 1]);

// agregar algo a la lista

lista.push(14);
console.log(lista);

// objects

let user3 = {
  email: "saulwade@gmail.com",
  password: "771270sw",
  userName: "saulwade",
  discord: "examplediscord",
  subscription: "VIP+",
};

console.log(user3.email);

let user4 = [
  {
    email: "saulwade@gmail.com",
    password: "771270sw",
    userName: "saulwade",
    discord: "examplediscord",
    subscription: "VIP+",
  },
  {
    email: "saulwade@gmail.com",
    password: "771270sw",
    userName: "saulwade",
    discord: "examplediscord2",
    subscription: "VIP+",
  },
];

console.log(user4[1].discord);

// Challenge objects

function signUP(
  email,
  password,
  name,
  discord,
  subscription,
  lessosCompleted
) {}

// 7:17:07
