const fs = require('fs-extra');


// read directory
const folderPath = 'c:\\tmp'

let directoryContent = fs.readdirSync(folderPath);
directoryContent.forEach(d => {
    console.log(d);
});

// watch directory - is this some sort of infinite loop ? Is it blocking ?
fs.watch(folderPath,
    (eventType, filename) => console.log(`event type: ${eventType} - filename: ${filename}`)
);