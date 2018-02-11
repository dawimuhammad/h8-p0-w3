// Exercise 4 Week 3 Case DataHandling2 Array 3

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

var arrInput;
var tanggalLahir;
var bulan;
var tanggalSort;
var tanggalan;
var namaMax;

function dataHandling2(arrInput) {
    arrInput.splice(1,1, 'Roman Alamsyah Elsharawy');
    arrInput.splice(2, 1, 'Provinsi Bandar Lampung');
    arrInput.splice(4,1);
    arrInput.splice(4, 2, 'Pria', 'SMA Internasional Metro');
    console.log(input);

    tanggalLahir = arrInput[3].split('/');
    console.log(gantiBulan(tanggalLahir));
    var tanggalSort = tanggalLahir;
    console.log(sortTanggal(tanggalSort));
    console.log(tanggalLahir.join(' - '));

    namaMax = arrInput[1];
    console.log(namaMax.slice(0,15));

}

function gantiBulan(bulan) {
  switch(bulan[1]) {

    case '01': {return 'Januari';}
    case '02': {return 'Februari';}
    case '03': {return 'Maret';}
    case '04': {return 'April';}
    case '05': {return 'Mei';}
    case '06': {return 'Juni';}
    case '07': {return 'Juli';}
    case '08': {return 'Agustus';}
    case '09': {return 'September';}
    case '10': {return 'Oktober';}
    case '11': {return 'November';}
    case '12': {return 'Desember';}
  }
  console.log(bulan[1]);
}

function sortTanggal(tanggalan) {
    var result = tanggalan.sort(function(value1, value2) { return Number(value1)<Number(value2)});
    return result;
}

dataHandling2(input);
