21_GraphQL Basic

Resume pada section ini yaitu:
1. GraphQL adalah sebuah query untuk API dan runtime untuk memenuhi query tersebut dengan data yang ada, dengan deskripsi data yang lengkap dan mudah dimengerti. Ini adalah bahasa yang dapat diajarkan kepada klien perangkat lunak aplikasi. Aplikasi kemudian dapat berkomunikasi dengan layanan backend, juga berbicara GraphQL, untuk meminta data.

2. GraphQL Schema adalah sebuah fungsi dari GraphQL yang berfungsi untuk
mendefinisikan struktur data dari kumpulan API endpoint. Pada GraphQL, schema mempunyai beberapa atribut yang akan mendefinisikan operasi yang akan dilakukan pada data dari API endpoint. Query akan mendefinisikan cara user dapat melakukan query data pada API endpoint yang diminta. Mutation dilakukan untuk melakukan manipulasi data API seperti write, update, dan delete.

3. Hasura.io (gratis dan open source) adalah GraphQL yang digabungkan dengan PosgreSQL. Sehingga, untuk membuat API tidak perlu lagi banyak setup dan banyak kode. Cukup menggunakan Hasura.io, kita sudah bisa delivery API menggukana GraphQL. Yang diperlukan pertama kali adalah membuat basisdata yang bagus. 
Hasura.io sudah support empat komponen dasar:
a. Queries. Dengan membuat scheme, kita bisa langsung melakukan query ke database, beserta dengan relasi-relasinya. Ini akan menghemat kita karena menampilkan query-query dasar. Namun, jika butuh query complex, kita juga bisa memanfaatkan function di PosgreSQL, dan function tersebut bisa dipanggil oleh graphql.
b. Insert Mutations, 
c. Update Mutations, dan 
d. Delete Mutations.