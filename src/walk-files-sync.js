const fs = require('fs');

const IGNORE_DIR = ['node_modules'];
const IGNORE_FILE = ['.DS_Store', 'package-lock.json'];

const walkFilesSync = (dir, filelist) => {
  const files = fs.readdirSync(dir);

  filelist = filelist || [];
  for (const file of files) {
    if (fs.statSync(`${dir}/${file}`).isDirectory()) {
      if (IGNORE_DIR.indexOf(file) === -1) {
        filelist = walkFilesSync(`${dir}/${file}`, filelist);
      }
    } else if (IGNORE_FILE.indexOf(file) === -1) {
      filelist.push(`${dir}/${file}`);
    }
  }
  return filelist;
};

module.exports = walkFilesSync;
