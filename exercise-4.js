// Exercise 4 from Week 2 Phase 0 - Array with built-in function

// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

var student = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/07/1989", "Membaca"];

function dataHandling(murid) {
    let temp1 = murid[1];
    let tempOut1 = temp1 + ' Elsharawy';

    let temp2 = murid[2];
    let tempOut2 = 'Provinsi ' + temp2;

    murid.splice(1, 1, tempOut1);
    murid.splice(2, 1, tempOut2);
    murid.splice(4, 1);
    murid.splice(5, 0, 'Pria', 'SMA Internasional Metro');

    // Get latin month from the date value in array

    let date = murid[3];
    console.log(getMonth(date));

    //
    return murid;
}

function getMonth(tanggal) {
    let month = Number(tanggal.slice(3, 5));
    let output = '';

    switch (month) {
      case 1: output = 'Januari';
        break;
        case 2: output = 'Februari';
          break;
          case 3: output = 'Maret';
            break;
            case 4: output = 'April';
              break;
              case 5: output = 'Mei';
                break;
                case 6: output = 'Juni';
                  break;
                  case 7: output = 'Juli';
                    break;
                    case 8: output = 'Agustus';
                      break;
                      case 9: output = 'September';
                        break;
                        case 10: output = 'Oktober';
                          break;
                          case 11: output = 'November';
                            break;
                            case 12: output = 'Desember';
                              break;
    }

    return output;
}

console.log(dataHandling(student));
