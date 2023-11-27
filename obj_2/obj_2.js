
function igaz_e(obj) {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false; 
        }
    }
    return true;
}


console.log(igaz_e({})); //--> true
console.log(igaz_e({name: "John"})); //--> false
