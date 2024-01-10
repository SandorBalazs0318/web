function LegKisebb(szam, tipus) {
    if (tipus === 'value') {
        return Math.min(...szam);
    } else if (tipus === 'index') {
        return szam.indexOf(Math.min(...szam));
    } else {
        console.error("Hiba.");
        return undefined;
    }
}

const szamok = [5, 2, 8, 1, 4];
console.log(LegKisebb(szamok, 'value'));  
console.log(LegKisebb(szamok, 'index'));  
