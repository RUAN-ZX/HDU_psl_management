var CryptoJS = require('./aesUtil.js'); //引用AES源码js


var key = CryptoJS.enc.Utf8.parse("theryanalexander"); //十六位十六进制数作为秘钥
var iv = CryptoJS.enc.Utf8.parse('camesawconquered'); //十六位十六进制数作为秘钥偏移量
//解密方法
function Decrypt(word) {
  var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  var decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}
//加密方法
const Operator = 'ryan';
const Signature = 'oWAoDyEsVk41x0U5LcueOPVfm7iEJzOD';
const crypto = Operator+":"+Signature;
var encryptedHexStr = CryptoJS.enc.Hex.parse(crypto);
console.log("111"+CryptoJS.enc.Base64.stringify(encryptedHexStr));


function Encrypt(word) {
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString().toUpperCase();
}
