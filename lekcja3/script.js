/*console.log("Hello world");

console.warn("to jest warning");

console.error("to jest error");

komentarz jednolinijkowy (ctrl + /)
komentarz wielolinijkowy 

var name = "Radek";
var age = 8;
var isAnAdult = true;

console.log(name);
console.log(age);
console.log(isAnAdult);

console.log(3 + "3");
console.log("3" + 3);
console.log(false + 2);
console.log(true + 1);
console.log(false + "1");

//0 : false
//1 : true

var array1 = ["dog", "cat", "cow", "butterfly"];
console.log(array1);

console.log(array1[0]);
console.log(array1[1]);
console.log(array1.length);

console.log(array1[array1.length - 1]);
console.log("Where is dog", array1.indexOf("dog"));
console.log("Where is bull", array1.indexOf("bull"));
console.log(age.indexOf("cat"));*/

/*var Cat = {
  name: "Mruczek",
  age: 3,
  color: "black",
};
console.log(Cat);
console.log(Cat.name);
console.log(Cat.weight);

console.log("Klucze z obiektu Cat", Object.keys(Cat));
console.log(Cat.hasOwnProperty("weight"));
Cat.name1 = "Bonifacy";
console.log(Cat.name);

var Pers = new Cat();
console.log(Pers);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isAnAdult);
console.log(typeof array1);
console.log(Array.isArray(array1)); //booldean
console.log(typeof Cat);
console.log("pusty string", typeof "");
console.log("pusta tablica", Array.isArray([]));

console.log(tyoeof name === "string");

var anything;
var empty = null;*/

/*console.log(typeof anything);
console.log(typeof empty);
console.log(empty === null);*/

/*var auto = "Mercedes";
var prawdaCzyFałsz = true;
var numer = 33;
var puste = null;
var niezdefiniowana = undefined;
var obiekt = { name: "John", surname: "Kowalski" };
var tablica = ["kot", "pies", "papuga"];

console.log(typeof auto);
console.log(typeof prawdaCzyFałsz);
console.log(typeof numer);
console.log(typeof puste);
console.log(typeof niezdefiniowana);
console.log("tablica", Array.isArray([]));*/

/*var anything;
var empty = null;

var notANumber = Math.sqrt(-1);
var notANumber2 = parseInt(name);

console.log(notANumber);
console.log(notANumber2);
console.log(parsent("23"));

var falsy1 = [];
var falsy2 = "";
var falsy3 = 0;
var falsy4 = undefined;

console.log("Is falsy1 a falsy value", falsy1 == false);
console.log("Is falsy2 a falsy value", falsy2 == false);
console.log("Is falsy3 a falsy value", falsy3 == false);
console.log("Is falsy4 a falsy value", falsy4 == false);*/

var liczba1 = 12;
var liczba2 = 23;
var liczba3 = 2.2;

/*var result1 = liczba1 * liczba2;

console.log(liczba1 + liczba2);
console.log(liczba2 % liczba1);
console.log(result1);

console.log("liczba jest parzysta", liczba1 % 2 === 0);
console.log("Liczba jest zmiennoprzecinkowa", liczba3 % 1 !== 0);

console.log(liczba1 < liczba2);
console.log(liczba2 > liczba1);
console.log(liczba1 >= liczba2);
console.log(liczba2 <= liczba1);*/

/*var losova = Math.random();
var losovaK6 = Math.round(Math.random() * 6);

var losovaZaokrąglona1 = Math.ceil(losova);
var losovaZaokrąglona2 = Math.floor(losova);
console.log(losovaK6);
console.log(losovaZaokrąglona1);
console.log(losovaZaokrąglona2);

console.log(Math.max(2, 30, 10, 100, 200));
console.log(Math.min(2, 30, 10, 100, 200));

var wartości = [2, 30, 10, 100, 200];
console.log(Math.max(...wartości));*/

var wartości = [2, 30, 10, 100, 200];

var prawda = true;
var nieprawda = false;

console.log(prawda && nieprawda);
console.log(prawda && prawda);
console.log(prawda || nieprawda);
console.log(prawda || prawda);

console.log("not");
console.log(prawda && !nieprawda);
console.log(prawda && !prawda);
console.log(prawda || !nieprawda);
console.log(prawda || !prawda);

const zwracaTekst = () => console.log("text");
nieprawda && zwracaTekst();
