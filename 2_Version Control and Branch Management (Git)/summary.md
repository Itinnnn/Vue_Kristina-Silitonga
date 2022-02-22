2_Version Control and Branch Management (Git)
Resume
Dalam materi ini mempelajari:
1. Version Control
2. Branch Management

Version Control
Version control system (VCS), juga dikenal sebagai source control yang merupakan alat perangkat lunak yang membantu tim perangkat lunak (software engineer) mengelola perubahan source code dari waktu ke waktu.

Jenis-jenis version control system (VCS):
1. Local version control systems
    local version control systems merupakan jenis VCS paling sederhana dan memiliki database yang menyimpan semua perubahan pada file. LCS juga merupakan salah satu alat VCS yang paling umum. Sistem ini mampu membuat set patch, atau perbedaan antara file, dalam format khusus pada sebuah disk.

2. Centralized version control systems
    CVCS dapat memberikan informasi tentang apa yang dilakukan para engineer dan developer pada sebuah proyek. Hal ini memungkinkan database administrator untuk mengontrol pekerjaan yang harus dilakukan seluruh pihak dalam proyek tanpa terjadinya benturan dan miskomunikasi.

3. Distributed version control systems
    Sistem ini mendukung cara kerja di mana tiap pengguna memiliki repositori dan copy dari pekerjaan mereka sendiri. Ketika pengguna melakukan perubahan, DVCS tidak akan memberi orang lain akses ke pada perubahan yang telah dibuat tersebut.

Branch Management 
Git adalah version control system yang digunakan para developer untuk mengembangkan software secara bersama-bersama. Fungsi utama git yaitu mengatur versi dari source code program anda dengan mengasih tanda baris dan code mana yang ditambah atau diganti.

Untuk mengetahui bagaimana menggunakan git, berikut perintah-perintah dasar git:

1. Git init : untuk membuat repository pada file lokal yang nantinya ada folder .git
2. Git status : untuk mengetahui status dari repository lokal
3. Git add : menambahkan file baru pada repository yang dipilih
4. Git commit : untuk menyimpan perubahan yang dilakukan, tetapi tidak ada perubahan pada remote repository.
5. Git push : untuk mengirimkan perubahan file setelah di commit ke remote repository.
6. Git branch : melihat seluruh branch yang ada pada repository
7. Git checkout : menukar branch yang aktif dengan branchyang dipilih
8. GIt merge : untuk menggabungkan branch yang aktif dan branch yang dipilih
9. Git clone : membuat Salinan repository lokal
