var nama = ['h','e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'];
var namaReverse = [''];

function balikNama(name) {
  var namaLength = name.length;
  var i = 0;
  for (namaLength; namaLength>0; namaLength--) {
    namaReverse = namaReverse + nama[namaLength-1];
  }

  return namaReverse;
}

console.log(balikNama(nama));
