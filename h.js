const fs = require('fs');
const data = fs.readFileSync("C:/minecraftAutoUpdate/m.json", {encoding:'utf-8',flag:'r'})
const iterableD = JSON.parse(data);
iterableD.forEach(modFile => {
    console.log(modFile.name,modFile.download_url)
})