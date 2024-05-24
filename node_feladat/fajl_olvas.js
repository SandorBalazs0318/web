const fs = require('fs');

fs.writeFile('jjk.txt', 'Lost in paradise \nNight and day are fading out \nWhen times getting rough \nAccess to your love \nLost in paradise \nNight and day are fading out \nKeep on dancing now \nHey hey', () => {
    console.log('file was written');
  });

fs.readFile('jjk.txt', (err, data) => {
    if (err) {
      console.log(err);
    }  
    console.log(data.toString());
  });
  
