const osszeadas = (a, b, callback) => {
    callback(a + b);
};

const kivonas = (a, b, callback) => {
    callback(a - b);
};

const szorzas = (a, b, callback) => {
    callback(a * b);
};

const osztas = (a, b, callback) => {
    if (b !== 0) {
        callback(a / b);
    } else {
        callback("Hiba: nullával való osztás!");
    }
};

const szamol = (muveletek, szam1, szam2, callback) => {
    switch (muveletek) {
        case osszeadas:
            osszeadas(szam1, szam2, callback);
            break;
        case kivonas:
            kivonas(szam1, szam2, callback);
            break;
        case szorzas:
            szorzas(szam1, szam2, callback);
            break;
        case osztas:
            osztas(szam1, szam2, callback);
            break;
        default:
            callback("Hiba: Ismeretlen művelet!");
    }
};

// Ellenőrzés:
szamol(osszeadas, 5, 3, (eredmeny) => {
    console.log('Az összeadás eredménye: 8, a számolt érték: ' + eredmeny);
});

szamol(kivonas, 8, 2, (eredmeny) => {
    console.log('A kivonás eredménye: 6, a számolt érték: ' + eredmeny);
});

szamol(szorzas, 4, 6, (eredmeny) => {
    console.log('A szorzás eredménye: 24, a számolt érték: ' + eredmeny);
});

szamol(osztas, 9, 3, (eredmeny) => {
    console.log('Az osztás eredménye: 3, a számolt érték: ' + eredmeny);
});
