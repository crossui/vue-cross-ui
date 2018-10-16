const readDir = require('fs').readdirSync;
const files = readDir('./components/locale-provider/');
const entry = {};
files.forEach(file => {
    const name = file.split('.')[0];
    entry[name] = './components/locale-provider/' + file;
});
module.exports = entry;
