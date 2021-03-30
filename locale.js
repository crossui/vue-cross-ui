const readDir = require('fs').readdirSync;
const files = readDir('./components/locale/');
const entry = {};
files.forEach(file => {
    const name = file.split('.')[0];
    entry[name] = './components/locale/' + file;
});
module.exports = entry;
