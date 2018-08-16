'use strict';

const qr = require('qr-image');
const fs = require('fs');

/* process.argv[0] i.e node
   process.argv[1] i.e path to executing file/filename.extention
*/

let dataToEncode = process.argv[2] || null;
let outImage = process.argv[3] || null;

if (dataToEncode && outImage) {
  qr.image(dataToEncode, {
    type: 'png',
    size: 20
  }).pipe(fs.createWriteStream(outImage));
  console.log('QR Image Generated!');
} else {
  console.log('Please check the command line arguments!');
}