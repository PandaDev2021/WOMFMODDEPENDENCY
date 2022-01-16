const fs = require('fs');
const homedir = require('os').homedir();
const { exec } = require("child_process");
const data = fs.readFileSync("C:/minecraftAutoUpdate/m.json", {encoding:'utf-8',flag:'r'})
const iterableD = JSON.parse(data);
let dls = [];
console.log(homedir)
iterableD.forEach((modFile) => {
    console.log("Found: ",modFile.name)
    if(modFile.name.includes('.jar')){
        if (fs.existsSync(`${homedir}/AppData/Roaming/.minecraft/mods/${modFile.name}`)) {
            return;
        } else {
            dls.push(modFile);
        }
    }
})
dls = dls.map(x => `CD ${homedir}/AppData/Roaming/.minecraft/mods/ && curl -# -o ${x.name} ${x.download_url}`)
dls.forEach(cmd => {
    exec(cmd, (err, stdout, stderr) => {
        if (err) console.error(err);
    })
})
