function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var output = [];
  var harga = [];
  var jumlahRute = 0;
    for (var i = 0; i < arrPenumpang.length; i++) {
            for (var j = 0; j < rute.length; j++) {
            if(arrPenumpang[i][1] === rute [j]){
                jumlahRute = 0;
            }
            else if(arrPenumpang[i][2] === rute [j]){
                jumlahRute = jumlahRute + 1;
                harga.push(jumlahRute*2000);
            }
            else {
                jumlahRute = jumlahRute + 1;
            }
        }
    }
    for(var i = 0; i < arrPenumpang.length; i++){
        infoPenumpang = {
        penumpang: arrPenumpang[i][0],
        naikDari: arrPenumpang[i][1],
        tujuan: arrPenumpang[i][2], 
        bayar: harga[i] }
        output.push(infoPenumpang);
    }
  return output;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]