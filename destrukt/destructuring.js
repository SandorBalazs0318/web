
//1.feladat
let car = ['Ford', 'Mustang', 2022, 'blue'];

// Destruktúrálás
let [marka, tipus, ev, szin] = car;

// Változók kiíratása
console.log('Márka:', marka);
console.log('Típus:', tipus);
console.log('Év:', ev);
console.log('Szín:', szin);

//1.kérdés
/*Az sorrend nagyon fontos a destruktúrálásnál, 
mivel a destruktúrálás a változónevek sorrendjét 
használja az értékek kiválasztásához a tömbből. 
Ha a sorrendet megváltoztatod, az kiíratás nem lesz helyes.*/



//2.feladat
let book = {
  cim: 'JavaScript: The Good Parts',
  szerzo: 'Douglas Crockford',
  kiadasEv: 2008,
  nyelv: 'English'
};
  
// Destruktúrálás
let { cim: konyvCim, szerzo: konyvSzerzo, kiadasEv, nyelv } = book;
  
// Változók kiíratása
console.log('Könyv címe:', konyvCim);
console.log('Könyv szerzője:', konyvSzerzo);
console.log('kiadási év:', kiadasEv);
console.log('Nyelv:', nyelv);

//2.kérdés
/*A sorrend itt nem fontos, mert a változók nevei egyértelműen 
azonosítják a megfelelő értékeket az objektumban.*/



//3.feladat
function printStudentInfo(tanulo) {
  // Objektum destruktúrálás
  const { nev, eletkor, jegy, tantargy } = tanulo;
  
  // Diák adatainak kiírása
  console.log('Tanuló neve:', nev);
  console.log('Tanuló életkora:', eletkor);
  console.log('Tanuló érdemjegye:', jegy);
  console.log('Tanuló tantárgyai:', tantargy.join(', '));
}

//függvény hívása
let tanulo = {
  nev: 'John Doe',
  eletkor: 20,
  jegy: 'B',
  tantargy: ['Math', 'English', 'History']
};
  
printStudentInfo(tanulo);
  
  
