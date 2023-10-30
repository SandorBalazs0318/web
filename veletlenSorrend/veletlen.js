function legyenVeletlenSorrend(){

    let hetnapok = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];

    let index1 = (Math.random() * 6);
    let index2 = (Math.random() * 5);
    let index3 = (Math.random() * 4);
    let index4 = (Math.random() * 3);
    let index5 = (Math.random() * 2);
    let index6 = (Math.random() * 1);

        let ujTomb = [
        hetnapok.splice(index1, 1)[0],
        hetnapok.splice(index2, 1)[0],
        hetnapok.splice(index3, 1)[0],
        hetnapok.splice(index4, 1)[0],
        hetnapok.splice(index5, 1)[0],
        hetnapok.splice(index6, 1)[0],

    ];
    document.getElementById("ki").innerHTML = ujTomb;
    
    ujTomb.push(hetnapok.pop());
        
    console.log(ujTomb);
}









