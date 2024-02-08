// let bill =10;
// let bill2 =20;
// let bill3 =30;

// if (bill>bill2 && bill>bill3) {
//     console.log(bill)
// } else if (bill2>bill && bill2>bill3) {
//     console.log(bill2)
// } else if (bill3>bill && bill3>bill2) {
//     console.log(bill3)
// } else (bill==bill2 && bill==3) 
//     console.log('semua bilangan sama')

//nomor 2//
// let angka = prompt ('masukkan angka selain 0');

// if (angka %2==0 && angka >0) {
//     console.log('genap positif')
// } else if (angka %2==0 && angka <0) {
//     console.log('genap negatif')
// } else if (angka %2==1 && angka >0) {
//     console.log('ganjil positif')
// } else if (angka %2==1 && angka <0) {
//     console.log('ganjil negatif')
// } else {
//     console.log('masukkan angka')
// }

// //nomor3//
// let saklar =1;

// if (saklar==1) {
//     console.log('ON')
// } else if (saklar==0) {
//     console.log('OFF')
// } else {
//     console.log('masukkan angka 1 atau 0')
// }


//nomor4//
// let br1 =50000;
// let br2 =30000;
// let br3 =30000;

// let total =br1+br2+br3
// let diskon =10/100*total

// if(total>100000) {
//     console.log(total-diskon)
// } else if (total<100000) {
//     console.log(total)
// }

// nomor5
// let jam = prompt ('masukkan jam kerja');

// if (jam <6) {
//     console.log('Rp100000')
// } else if (jam ==6) {
//     console.log('Rp200000')
// } else  {
//     console.log('Rp300000')
// }

// nomor6

// let kondisi = prompt ('masukkan kondisi air');

// if (kondisi <500) {
//     console.log('Aman')

// Penerimaan
// let Jalur = 'Prestasi';
// let NilaiUN= 85;
// let TesMandiri= 80;

// if (NilaiUN >=90 && NilaiUN <=100) {
//     console.log('Nilai sempurna dan lolos')
// } else if (NilaiUN >=80 && NilaiUN <=89) {
//     if (Jalur == 'Prestasi') {
//         console.log('jalur Prestasi')
//     } else if (Jalur =='Rapot')
//     console.log('Jalur Rapot')
// } else if (TesMandiri >=79 && TesMandiri<=100) {
//     console.log('Lolos Tes')
// } else {console.log('Tes Gagal')}

// pengulangan
// for (let z = 0; z <= 5; z++) 
//     console.log('Data ke-', z)

// while
// let x =1;
// while (x <=10) {
//     console.log('data x ke -', x)
//     x++
// }

// //do while 
// let y =1

// do {
//     console.log('data y ke -', y)
//     y++
// } while (y<=10)

//tugas for genap/genap (liat aja let sama operatornya ntar juga ngerti)
// for (let n=0; n<=10; n+=2) 
//     console.log('nilai -', n)

//while genap/genap
// let x=0;
// while (x <=10) {
//     console.log('data ke-',x)
//     x+=2
// }

//do while genap 
// let x=1
// // do {
// //     console.log('data ke-',x)
// //     x+=2
// // } while(x<=9)

// for Tahun kabisat
// for (let tahun = 1600; tahun <= 2024; tahun+=4) {
//     if (tahun % 4 >= 1) {
//         console.log('tahun',tahun,'Bukan Kabisat')
//     } else if (tahun % 100 >= 1) {
//         console.log('tahun',tahun,'Tahun Kabisat')
//     } else if ( tahun % 400 >=1) {
//         console.log('Bukan Kabisat')
//     } else {console.log('tahun Kabisat')}
// }

// while tahun kabisat
  // let thn =1600; 

        // while(thn<=2404){
        // thn+=4;


        // if (thn % 4 >= 1) {
        //             console.log("Tahun " + thn + " bukan tahun kabisat");
        //         }
        //         else if (thn % 100 >= 1) {
        //             console.log("Tahun " + thn + " tahun kabisat");
        //         }
        //         else if (thn % 400 >= 1) {
        //             console.log("Tahun " + thn + " bukan tahun kabisat");
        //         }
        //         else {
        //             console.log("Tahun " + thn + " tahun kabisat");
        //         }
        //     }

        // Do While tahun kabisat

        // let year = 1600;

        // do {
        //     if (year % 4 >= 1) {
        //         console.log("Tahun " + year + " bukan tahun kabisat");
        //     }
        //     else if (year % 100 >= 1) {
        //         console.log("Tahun " + year + " tahun kabisat");
        //     }
        //     else if (year % 400 >= 1) {
        //         console.log("Tahun " + year + " bukan tahun kabisat");
        //     }
        //     else {
        //         console.log("Tahun " + year + " tahun kabisat");
        //     }

        //     year += 4;
        // } while (year <= 2404);