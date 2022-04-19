22_Relation Database

Resume pada section ini yaitu:
1. Database
Database adalah sebuah tempat penyimpanan yang besar dimana terdapat
kumpulan data yang tidak hanya berisi data operasional tetapi juga deskripsi data.
database juga merupakan kumpulan data yang saling terhubung secara logis dan deskripsi dari data tersebut, dirancang untuk menemukan informasi yang dibutuhkan oleh sebuah
organisasi.

2. type of database relationship
2a. Relasi one to one 
dimana sebuah data pada sebuah tabel hanya memiliki relasi ke sebuah data pada tabel yang lain. Misalnya, sebuah data tabel tb_User memiliki relasi 1 nomor telepon di tabel tb_Contact.

2b. Relasi one to many 
dimana sebuah data pada sebuah tabel memiliki relasi ke beberapa data pada tabel yang lain. Misalnya, sebuah data tabel tb_Category memiliki relasi banyak data barang di tb_Inventory. Atau dengan kata lain, 1 kategori memiliki banyak data inventory.

Relasi many to one (One to many Inverse) 
dimana merupakan kebalikan dari relasi one to many. Misalnya kita ingin mengetahui data barang di tb_Inventory memiliki kategori apa, maka relasi ini yang akan digunakan.

2c. Relasi many to many 
dimana banyak data pada sebuah tabel memiliki relasi ke banyak data juga pada tabel yang lainnya. Relasi tersebut terbentuk melalui sebuah tabel bantu. Misalnya, banyak data pada tabel tb_Siswa memiliki relasi peminjaman ke banyak data pada tabel tb_Buku. Relasi tersebut terbentuk dengan tabel bantu bernama tb_Transaksi.

3. MySQL 
MySQL adalah sebuah DBMS (Database Management System) menggunakan perintah SQL (Structured Query Language) yang banyak digunakan saat ini dalam pembuatan aplikasi berbasis website. MySQL dibagi menjadi dua lisensi, pertama adalah Free Software dimana perangkat lunak dapat diakses oleh siapa saja. Dan kedua adalah Shareware dimana perangkat lunak berpemilik memiliki batasan dalam penggunaannya. 