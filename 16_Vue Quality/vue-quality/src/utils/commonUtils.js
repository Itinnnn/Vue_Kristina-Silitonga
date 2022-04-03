export const Penjumlahan = (bilanganSatu, bilanganDua) => {
    return bilanganSatu + bilanganDua;
};

export const Pengurangan = (bilanganSatu, bilanganDua) => {
    return bilanganSatu - bilanganDua;
};

export const Pembagian = (bilanganSatu, bilanganDua) => {
    return bilanganSatu / bilanganDua;
};

export const Perkalian = (bilanganSatu, bilanganDua) => {
    return bilanganSatu * bilanganDua;
};

export let average = (angka1, angka2, angka3, angka4, angka5) => {
   const listAngka = [angka1, angka2, angka3, angka4, angka5];
   let total = 0;
   listAngka.map((item)=> {
    return total += item;
   });
   average = total / 5;
   return average;
};

export const sisaBagi = (bilanganSatu, bilanganDua) => {
    return bilanganSatu % bilanganDua;
};

export const luasPersegi = (bilanganSatu, bilanganDua) => {
    return bilanganSatu * bilanganDua;
};

export const luasLingkaran = (bilanganSatu, bilanganDua) => {
    return bilanganSatu * bilanganDua * 3.14;
};

export const luasKubus = (jumlahSisi, bilanganSatu, bilanganDua) => {
    return 6 * bilanganSatu * bilanganDua;
};

export const volumeKubus = (variabelSatu, variabelDua, variabelTiga) => {
    return variabelSatu * variabelDua * variabelTiga;
}