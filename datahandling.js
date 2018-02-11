// Exercise 3 Week 3 Case Data Handling Array 2

var murid = [
  ['0001','Roman Alamsyah','Bandar Lampung 21/05/1989', 'Membaca'],
  ['0002','Dika Sembiring','Medan 10/10/1992', 'Bermain Gitar'],
  ['0003','Winona','Ambon 25/12/1965', 'Memasak'],
  ['0004','Bintang Senjaya','Martapura 6/4/1970', 'Berkebun']];
var arrLength = murid.length;
var i = 0;


for (i; i<arrLength; i++) {
  var j = 0;
  for (j; j<murid[i].length; j++) {
      if (j === 0) {
        console.log('Nomor ID      : '+murid[i][j]);
      } else if (j === 1) {
        console.log('Nama Lengkap  : '+murid[i][j]);
      }
      else if (j === 2) {
        console.log('TTL           : '+murid[i][j]);
      }
      else if (j === 3) {
        console.log('Hobi          : '+murid[i][j]);
      }
  }
  console.log('');
}
