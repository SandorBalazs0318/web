let heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"} 
]

const szereplok = `
    <h1> Szereplők </h1>
    <div id="sor">
    ${heroes.map(hero => `<div class="koz"><p>${hero.firstName} ${hero.lastName} - ${hero.job}</p></div>`).join('')}
    </div>
`

let ketujtag = `Plusz két szereplő hozzáadása: <button onclick="bovites();">plusz két fő</button> <br><br>`
let tablazat = `Táblázat a szereplőkből: <button onclick="tablazatkeszites();">Táblázat készítése</button> <br>`
document.body.innerHTML = szereplok + ketujtag + tablazat;



function bovites() {
    let ujhos = {firstName: "Luke", lastName: "Skywalker", job: "Jedi(gyermekgyilkos)"};
    heroes.push(ujhos);

    let masikhos = {firstName: "Chewbacca", lastName: "Wookiee", job: "wookiee"};
    heroes.push(masikhos);

    const szereplokbovitett = `
    <h1> Szereplők </h1>

    <div id="sor">
    ${heroes.map(hero => `<div class="koz"><p>${hero.firstName} ${hero.lastName} - ${hero.job}</p></div>`).join('')}
    </div>
    `
    document.body.innerHTML = szereplokbovitett + tablazat;
}

function tablazatkeszites() {
    const tablazatkeszito = `
    <h1> Szereplők </h1>
    <div id="hatterresz">
        <table>
            <th>Vezetéknév</th><th>Keresztnév</th><th>Job</th>
                <tr>
                ${heroes.map(hero => `<tr><td>${hero.firstName}</td>
                <td>${hero.lastName}</td>
                <td> ${hero.job}</td></tr>`).join('')}
                </tr>
        </table>
    </div>
    `
    document.body.innerHTML = tablazatkeszito;
}




console.log(heroes);




