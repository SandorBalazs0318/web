let fizetes = {
    Anna : 2100,
    Cecil : 1890,
    Emil : 2050,
    Gerald : 2920
}

function osszeg() {
    let osszesfizetes = fizetes.Anna + fizetes.Cecil + fizetes.Emil + fizetes.Gerald;
    console.log(osszesfizetes);
    document.getElementById("kiiratas").innerHTML = osszesfizetes + " " + " Ft";
};
