const Filer = require('filer.js');

var filer = new Filer();

filer.init({
  persistent: false,
  size: 1024 * 1024
}, function (fs) {
    console.log(fs);
  // filer.size == Filer.DEFAULT_FS_SIZE
  // filer.isOpen == true
  // filer.fs == fs
}, onError);

function onError(e) {
  console.log(e.name);
}