function SzamokOsszege(szam) {
    let osszeg = 0;

    for (let i = 0; i < szam.length; i++) {
        if (typeof szam[i] !== 'number' || isNaN(szam[i]) || szam[i] % 2 === 0) {
            continue;
        }
        osszeg += Math.pow(szam[i], 3); 
    }
    return osszeg;
}

const szamok = [1, 2, 3, 'four', 5, true, 6];
console.log(SzamokOsszege(szamok)); 
