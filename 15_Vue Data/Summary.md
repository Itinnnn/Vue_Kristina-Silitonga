15_Vue Data

Resume

Resume pada section ini yaitu:
1. Terkadang kita perlu mengambil data dari server saat rute diaktifkan. Misalnya, sebelum merender profil pengguna,kita perlu mengambil data pengguna dari server. 
Kita dapat mencapai ini dengan dua cara berbeda:
a. Mengambil Setelah Navigasi:
lakukan navigasi terlebih dahulu, dan ambil data di kait siklus hidup komponen yang masuk. Menampilkan status pemuatan saat data sedang diambil.

b.Mengambil Sebelum Navigasi: Mengambil data sebelum navigasi di penjaga masuk rute, dan melakukan navigasi setelah data diambil.

Secara teknis, keduanya adalah pilihan yang valid - pada akhirnya tergantung pada pengalaman pengguna yang kita tuju.

2. Salah satu manfaat Fetch API adalah Anda tidak perlu memuat sumber daya eksternal untuk menggunakannya.
3. Ada kalanya kita mungkin tidak mendapatkan data yang kita butuhkan dari API. 
Ada beberapa alasan mengapa panggilan axios mungkin gagal, yaitu:
a. API down.
b. Permintaan dibuat dengan tidak benar.
c. API tidak memberi kami informasi dalam format yang di antisipasi.