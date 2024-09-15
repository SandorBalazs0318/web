async function fetchUserData() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Kérlek, add meg a felhasználó nevét!');
        return;
    }
    const url = `https://www.codewars.com/api/v1/users/${username}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Felhasználó nem található!');
            } else {
                throw new Error('Hiba történt a lekérdezés során!');
            }
        }
        const data = await response.json();

        const languages = data.ranks.languages;
        let resultHtml = `<h2>${username} pontszámai:</h2><ul>`;

        let totalPoints = 0;
        for (const [language, info] of Object.entries(languages)) {
            resultHtml += `<li>${language}: ${info.score} pont</li>`;
            totalPoints += info.score;
        }

        resultHtml += `</ul><h2>Összesített pontszám: ${totalPoints}</h2>`;
        document.getElementById('result').innerHTML = resultHtml;

    } catch (error) {
        document.getElementById('result').innerHTML = `<p class="error">Hiba: ${error.message}</p>`;
    }
}

function showUserData() {
    document.getElementById('user-data').style.display = 'block';
    document.getElementById('leaderboard').style.display = 'none';
}

function showLeaderboard() {
    document.getElementById('user-data').style.display = 'none';
    document.getElementById('leaderboard').style.display = 'block';
}

async function fetchLeaderboard() {
    const usersInput = document.getElementById('leaderboard-users').value;
    const usernames = usersInput.split(',').map(user => user.trim()).filter(user => user);
    if (usernames.length === 0) {
        alert('Kérlek, add meg legalább egy felhasználót!');
        return;
    }

    const userScores = [];
    for (const username of usernames) {
        const url = `https://www.codewars.com/api/v1/users/${username}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                if (response.status === 404) {
                    console.error(`Felhasználó nem található: ${username}`);
                    continue; // Skip this user
                } else {
                    throw new Error('Hiba történt a lekérdezés során!');
                }
            }
            const data = await response.json();
            const languages = data.ranks.languages;

            let totalPoints = 0;
            for (const info of Object.values(languages)) {
                totalPoints += info.score;
            }
            userScores.push({ username, points: totalPoints });

        } catch (error) {
            console.error(`Hiba a ${username} lekérdezése során: ${error.message}`);
        }
    }

    userScores.sort((a, b) => b.points - a.points);

    let leaderboardHtml = '<h2>Legjobbak:</h2><ul>';
    for (const user of userScores) {
        leaderboardHtml += `<li>${user.username}: ${user.points} pont</li>`;
    }
    leaderboardHtml += '</ul>';

    document.getElementById('leaderboard-results').innerHTML = leaderboardHtml;
}