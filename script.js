/* Cviceni Ockovani - objekty */

const name = prompt('Zadej svoje jmeno a prijmeni');
const age = Number(prompt('Zadej svuj vek'));
/* document.body.innerHTML += name + ', ' + 'vek: ' + age; */

const person = {
  name: name,
  age: age,
};

document.body.innerHTML +=
  'Jmeno a Prijmeni: ' + person.name + ', ' + 'Vek: ' + person.age;

/* Cviceni Knihovna */

/* const kniha1 = {
  nazev: 'Kniha1',
  autor: 'Katka',
  pocetStran: '100',
  rozmery: {
    sirka: 12,
    vyska: 20,
    jednotka: 'cm',
  },
  stav: 'Nova',
  dostupnost: 'Na sklade',
};

const kniha2 = {
  nazev: 'Kniha2',
  autor: 'Katka',
  pocetStran: '200',
  rozmery: {
    sirka: 15,
    vyska: 25,
    jednotka: 'cm',
  },
  stav: 'Pouzita',
  dostupnost: 'Prodana',
};

document.body.innerHTML += 'Nazev knihy: ' + kniha2.nazev;
document.body.innerHTML += '<br>';
document.body.innerHTML +=
  'Vyska: ' + kniha2.rozmery.vyska + ' ' + kniha2.rozmery.jednotka;
document.body.innerHTML += '<br>';
document.body.innerHTML +=
  'Sirka: ' + kniha2.rozmery.sirka + ' ' + kniha2.rozmery.jednotka; */

/* Cviceni Realitka */

/* const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};

const mesto = 'Praha';
const mestskaCast = 'Vinohrady';
apartment.status = 'taken';

document.body.innerHTML += 'Dispozice bytu: ' + apartment.disposition;
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Cisty najem: ' + apartment.price.rent + ',- Kc.';
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Mesto: ' + mesto;
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Mestska cast: ' + mestskaCast;
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Stav: ' + apartment.status; */

/* Zanoreny objekt v objektu */

/* const user1 = {
  fullName: 'Lubomír Větvička',
  login: 'lubos',
  address: {
    streetName: 'Pod Kaštany',
    number: 31,
    city: 'Horní Dlouhonosy',
    postalCode: '123 11',
  },
  cartItems: 0,
};

document.body.innerHTML += user1.address.city;

document.title = 'Neco jineho.'; */

/* Prepsani adresy

const address = {
  streetName: 'Pod Kaštany',
  number: 31,
  city: 'Horní Dlouhonosy',
  postalCode: '123 11',
};

address.number = 13;

document.body.innerHTML += '<p>' + address.city + '</p>';
document.body.innerHTML += '<p>' + address.streetName + '</p>';
document.body.innerHTML += '<p>' + address.number + '</p>'; */

/* const address2 = {
  streetName: 'Nad Kaštany',
  number: 40,
  city: 'Dolni Dlouhonosy',
  postalCode: '170 00',
}; */

/* document.body.innerHTML += '<p>' + address2.city + '</p>';
document.body.innerHTML += '<p>' + address2.streetName + '</p>';
document.body.innerHTML += '<p>' + address2.number + '</p>'; */

/* Vyplata jako stranka */

/* const hodinovaSazba = prompt('Zadej svou hodinovou sazbu v Czk');
const pocetHodin = Number(prompt('Zadej pocet pracovnich hodin za den'));
const pocetDni = Number(prompt('Zadej pocet odpracovanych dni v mesici'));
const hrubaMzda = hodinovaSazba * pocetHodin * pocetDni;
document.body.innerHTML += 'Vase hruba mzda: ' + hrubaMzda + ',- Czk'; */

/* Cviceni Ockovani

const jmeno = prompt('Zadej svoje jmeno a prijmeni');
const vek = Number(prompt('Zadej svuj vek'));
document.body.innerHTML += jmeno + ', ' + 'vek: ' + vek; */

/* Cviceni Ultramaraton

const start = 15;
const delka = 11;
const konec = (start + delka) % 24;
document.body.innerHTML += konec; */

/* const start = 15;
const delka = prompt('Zadej délku závodu:');
const konec = (start + delka) % 24;
document.body.innerHTML += konec;
 */
/*  Cviceni meny 

const wageInEur = 20;
const wageInCzk = 491;
document.body.innerHTML += Math.round(wageInEur * 24.55);
document.body.innerHTML += '<h1>Mzda v korunach:' + wageInCzk + 'Kc</h1>'; */

/* Cviceni nahodna cisla 

document.body.innerHTML += Math.random();
document.body.innerHTML += '<br>';*/

/* const plat = 40000;
const naklady = plat * 0.6;
const danSazba = 0.15;
const dan = (plat - naklady) * danSazba;
document.body.innerHTML += Math.floor(dan); */

/* document.body.innerHTML += 'Ahoj svete!' + ' ' + 'Ahoj!'; */

/* Délka filmu */
/* document.body.innerHTML += 'Délka filmu:';
document.body.innerHTML += ; */

/* Cviceni Vyplata 
document.body.innerHTML += 'Výplata';
document.body.innerHTML += ': ';
document.body.innerHTML += 7 * 320 * 21;
document.body.innerHTML += ' Kc.';
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Daň';
document.body.innerHTML += ': ';
document.body.innerHTML += Math.floor((47040 - 47040 * 0.6) * 0.15);
document.body.innerHTML += ' Kc.';
*/

/* document.body.innerHTML += Math.floor(Math.random() * 6) + 1;
document.body.innerHTML += '<br>'; */

/* document.body.innerHTML += Math.round(12.333);
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.floor(12.333);
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.ceil(12.333);
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.random();
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.floor(Math.random() * 6) + 1;
document.body.innerHTML += '<br>'; */

/* 
document.body.innerHTML += 'Ahoj svete!';
document.body.innerHTML += '<br>';
document.body.innerHTML += 42;
document.body.innerHTML += '<br>';
document.body.innerHTML += 42;
document.body.innerHTML += '<br>';
document.body.innerHTML += 2 + 5;
document.body.innerHTML += '<br>';
document.body.innerHTML += 2 - 5;
document.body.innerHTML += '<br>';
document.body.innerHTML += 2 * 5;
document.body.innerHTML += '<br>';
document.body.innerHTML += 12 / 5;
document.body.innerHTML += '<br>';
document.body.innerHTML += 2 + 3 * 4;
document.body.innerHTML += '<br>';
document.body.innerHTML += 27 % 4;
 */
