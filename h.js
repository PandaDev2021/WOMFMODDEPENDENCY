const fs = require('fs');
const { exec } = require("child_process");
const data = fs.readFileSync("C:/minecraftAutoUpdate/m.json", {encoding:'utf-8',flag:'r'})
const iterableD = JSON.parse(data);
console.log(iterableD)
let dls = [];
iterableD.forEach((modFile) => {
    console.log(modFile.name,modFile.download_url)
    if(modfile.name.includes('.jar')){
        if (fs.existsSync(modFile.name)) {
            return;
        } else {
            dls.push(modFile);
        }
    }
})
dls = dls.map(x => `CD %USERPROFILE%\AppData\Roaming\.minecraft && curl -# -o ${x.name} ${x.download_url}`)
dls.forEach(cmd => {
    exec(cmd, (err, stdout, stderr) => {
        if (err) console.error(err);
    })
})