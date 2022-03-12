var a= 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a , b, nama, terdaftar];

console.log(lengkap_arr[2]);

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya" + 
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}
perkenalan();

if (terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka ");
}

a = b;
console.log("a adalah =" + a);
console.log("b adalah =" + b);

//2
//a. Karena let terdaftar pada baris ke 4 itu false sedangkan if pada baris ke 21 itu true sehingga tidak dapat tampil, oleh karena itu let terdaftar dan if nya harus sikron yaitu true
//b. Karena b memiliki variabel let dimana let itu mendeklarasikan variabel blok.
//c. ya, dapat diubah. karena nama dipindahkan menjadi object target dan posisi nama diubah menjadi array. dimana array adalah variabel khusus, yang dapat menampung lebih dari satu nilai.

//3
const foo = ['Budi','Sita','Ayu']
const [r,s,t] = ['Budi','Sita','Ayu']
console.log(r); // "Budi"
console.log(s); //"Sita"
console.log(t); //"Ayu"

//4
let bdays = ['10-17', '05-19', '20-19'];
console.log((bdays="['10/17', '05/19', '20/19']"));

//5
let value = [1,2,3,4,5,6];
let p = value.map(x => x + 2);
console.log(p)

//6
let arr =[1.5,2.56,5.1,12.33];
let q = arr.map(y => Math.round(y));
console.log(q)