const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");

// A projekt könyvtárának neve
const projectDir = path.join(__dirname, "text-editor");

// Könyvtár létrehozása és npm inicializálás
fs.mkdir(projectDir, { recursive: true }, (err) => {
  if (err) throw err;
  console.log("Könyvtár létrehozva: text-editor");

  // npm init automatikus végrehajtás
  exec("npm init -y", { cwd: projectDir }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Hiba az npm init végrehajtása során: ${error}`);
      return;
    }
    console.log(`npm init kimenet:\n${stdout}`);
    installDependencies();
  });
});

// Függőségek telepítése
function installDependencies() {
  console.log("Függőségek telepítése: express, body-parser, fs");
  exec(
    "npm install express body-parser fs",
    { cwd: projectDir },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Hiba a függőségek telepítése során: ${error}`);
        return;
      }
      console.log(`Függőségek telepítve:\n${stdout}`);
      createServerFile();
    }
  );
}

// Szerverfájl létrehozása
function createServerFile() {
  const serverCode = `
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware a JSON adatok kezelésére
app.use(bodyParser.json());

// Statikus fájlok kiszolgálása (HTML, CSS, JS)
app.use(express.static('public'));

// Végpont a fájl beolvasására
app.get('/read', (req, res) => {
    fs.readFile(path.join(__dirname, 'szoveg.txt'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Fájl beolvasási hiba');
        }
        res.send({ content: data });
    });
});

// Végpont a fájl mentésére
app.post('/save', (req, res) => {
    const newContent = req.body.content;
    fs.writeFile(path.join(__dirname, 'szoveg.txt'), newContent, (err) => {
        if (err) {
            return res.status(500).send('Fájl mentési hiba');
        }
        res.send({ message: 'Sikeres mentés!' });
    });
});

// Szerver indítása
app.listen(PORT, () => {
    console.log(\`Szerver fut a következő porton: http://localhost:\${PORT}\`);
});
    `;
  fs.writeFile(path.join(projectDir, "server.js"), serverCode, (err) => {
    if (err) throw err;
    console.log("Szerverfájl létrehozva.");
    createFrontendFiles();
  });
}

// Frontend fájlok létrehozása
function createFrontendFiles() {
  const publicDir = path.join(projectDir, "public");
  const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Szövegszerkesztő</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

     <div class="container">
        <h1>Szövegszerkesztő</h1>
        <textarea id="textArea"></textarea>
        <br>
        <button id="saveButton">Mentés</button>
        <div class="message" id="message"></div>
    </div>

    <script src="script.js"></script>

</body>
</html>
    `;

  const cssCode = `
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: #f5f5dc; /* Bézs háttérszín */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 800px;
    text-align: center;
}

textarea {
    width: 100%;
    height: 300px;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.message {
    margin-top: 20px;
    font-size: 16px;
}

    `;

  const jsCode = `
fetch('/read')
    .then(response => response.json())
    .then(data => {
        document.getElementById('textArea').value = data.content;
    });

document.getElementById('saveButton').addEventListener('click', () => {
    const content = document.getElementById('textArea').value;

    fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: content })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => {
        document.getElementById('message').innerText = 'Mentési hiba!';
    });
});
    `;

  fs.mkdir(publicDir, { recursive: true }, (err) => {
    if (err) throw err;

    // HTML fájl létrehozása
    fs.writeFile(path.join(publicDir, "index.html"), htmlCode, (err) => {
      if (err) throw err;
      console.log("index.html létrehozva.");
    });

    // CSS fájl létrehozása
    fs.writeFile(path.join(publicDir, "styles.css"), cssCode, (err) => {
      if (err) throw err;
      console.log("styles.css létrehozva.");
    });

    // JavaScript fájl létrehozása
    fs.writeFile(path.join(publicDir, "script.js"), jsCode, (err) => {
      if (err) throw err;
      console.log("script.js létrehozva.");
      createTextFile();
    });
  });
}

// szoveg.txt fájl létrehozása
function createTextFile() {
  const textContent = "Ez egy minta szöveg.\n";

  fs.writeFile(path.join(projectDir, "szoveg.txt"), textContent, (err) => {
    if (err) throw err;
    console.log("szoveg.txt létrehozva.");
    runServer();
  });
}

// Szerver futtatása
function runServer() {
  console.log("Szerver futtatása...");
  exec("node server.js", { cwd: projectDir }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Hiba a szerver futtatása során: ${error}`);
      return;
    }
    console.log(`Szerver kimenet:\n${stdout}`);
  });
}
