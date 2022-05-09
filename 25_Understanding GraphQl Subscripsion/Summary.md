25_Understanding GraphQl Subscripsion

Resume pada section ini yaitu:
1. Subscripsion memungkinkan kita mengambil data. Subscripsion adalah operasi jangka panjang yang dapat mengubah hasilnya seiring waktu. subscripsion dapat mempertahankan koneksi aktif ke server GraphQL  (paling sering melalui WebSocket), memungkinkan server untuk mendorong pembaruan ke hasil subscripsion.

2. subscripsion berguna untuk memberi tahu klien kita secara real time tentang perubahan pada data back-end, seperti pembuatan objek baru atau pembaruan bidang penting.

3. Alasan menggunakan subscripsion untuk hal-hal berikut:

a. Perubahan kecil dan bertahap pada objek besar. 
b. Pembaruan waktu nyata dengan latensi rendah. Misalnya, klien aplikasi obrolan ingin menerima pesan baru segera setelah tersedia.