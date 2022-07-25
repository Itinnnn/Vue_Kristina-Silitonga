<template>
  <div class="home">
    <NavBar />

    <div class="container">
      <tabNav
        :tabs="[
          'Git',
          'Introduction UI UX',
          'Figma',
          'HTML',
          'CSS',
          'Bootstrap',
          'Javascript Refreshment',
          'Clean Code',
        ]"
        :selected="selected"
        @selected="setSelected"
      ></tabNav>
      <TabPage :isSelected="selected === 'Git'">
           <h1>Version Control and Branch Management (Git)</h1>
        <br>
        <p class="pt-1 pl-5 pr-5">
            <ol> <h4> <strong> Materi Ini Mempelajari</strong></h4> 
                <li class="mx-2">Version Control</li>
                <li class="mx-2"> Branch Management</li>
            </ol>
        </p>
        <p>
            <ul class="mx-2"><h6><strong>Version Control</strong></h6>
                
                   <p> Version Control Version control system (VCS), juga dikenal sebagai source control yang merupakan alat perangkat lunak yang membantu tim perangkat lunak (software engineer) mengelola perubahan source code dari waktu ke waktu.
                </p>

            </ul>
        </p>
        <br/>
            <p>
            <ul class="mx-2"><h6><strong>Branch Management</strong></h6>
                
                   <p> Branch Management Git adalah version control system yang digunakan para developer untuk mengembangkan software secara bersama-bersama. Fungsi utama git yaitu mengatur versi dari source code program anda dengan mengasih tanda baris dan code mana yang ditambah atau diganti.
                </p>

            </ul>
        </p>
 <ol class="mx-2">
        <p class="pt-1 pl-5 pr-5">Link Github: <a href="https://github.com/Itinnnn/Vue_Kristina-Silitonga/tree/main/2_Version%20Control%20and%20Branch%20Management%20(Git)" target="_blank">klik disini</a></p>
        
        <div>
          <p>Bukti Screenshoot</p>
        <img src="..\src\assets\Git.jpeg" width="600px" />
        </div>
        </ol>

       
      </TabPage>
      <TabPage :isSelected="selected === 'Introduction UI UX'">
          <h1>Introduction UI/UX</h1>
        <br>
        <p class="pt-1 pl-5 pr-5">
            <ol> <h4> <strong> Materi Ini Mempelajari</strong></h4> 
                <li class="mx-2">User Interface</li>
                <li class="mx-2"> User Experience</li>
                <li class="mx-2"> Prototype </li>
            </ol>
        </p>
        <p>
            <ul class="mx-2"><h6><strong>User Interface</strong></h6>
                
                   <p> User Interface (UI) adalah bagian dari UX yang berupa tampilan visual design sebuah sistem. Tampilan tersebut memungkinkan pengguna terhubung dan berinteraksi dengan suatu produk. Selain berfungsi sebagai penghubung, UI juga berfungsi untuk memperindah tampilan sehingga dapat meningkatkan kepuasan pengguna. Namun, tak hanya harus indah, UI juga harus mudah digunakan.
                </p>

            </ul>
        </p>
        <br/>
            <p>
            <ul class="mx-2"><h6><strong>User Experience (UX)</strong></h6>
                
                   <p> User Experience (UX) merupakan proses mendesain suatu produk melalui pendekatan pengguna. Dengan pendekatan ini, Anda jadi bisa menciptakan produk yang sesuai dengan kebutuhan dan keinginan pengguna. Produk dengan desain UX yang baik akan menciptakan pengalaman yang menyenangkan bagi pengguna saat menggunakan produk kita. Pengguna jadi mudah dan nyaman saat menggunakan produk.
                </p>

            </ul>
        </p>
        <p>
            <ul class="mx-2"><h6><strong>Prototype</strong></h6>
                
                   <p> Prototype adalah versi simulasi dari produk akhir yang digunakan dalam pengujian sebelum akhirnya dilakukannya peluncuran. Adapun manfaat prototype adalah selain mereview hasil dari suatu web atau apps yaitu saat melakukan pengujian bisa saja akan ada masukan mengenai alur sebuah program ataupun hal yang berkaitan dengan kemudahan pengguna saat memakai aplikasi tersebut.
                </p>

            </ul>
        </p>
 <ol class="mx-2">
        <p class="pt-1 pl-5 pr-5">Link Github: <a href="https://github.com/Itinnnn/Vue_Kristina-Silitonga/tree/main/3_Introduction%20UI%20dan%20UX" target="_blank">klik disini</a></p>
        
        <div>
          <p>Bukti Screenshoot</p>
           <img src="..\src\assets\UI UX.jpeg" width="600px" />
        </div>
        </ol>

     
      </TabPage>
      <TabPage :isSelected="selected === 'Figma'">
        <h1>Figma</h1>
        <br>
        <p class="pt-1 pl-5 pr-5">
            <ol> <h4> <strong> Materi Ini Mempelajari</strong></h4> 
                <li class="mx-2">Figma</li>
                <li class="mx-2"> Keuntungan Menggunakan Fogma</li>
                <li class="mx-2"> Kelemahan Figma </li>
            </ol>
        </p>
        <p>
            <ul class="mx-2"><h6><strong>Figma</strong></h6>
                
                   <p> Figma adalah salah satu design tool yang biasanya digunakan untuk membuat tampilan aplikasi mobile, desktop, website dan lain-lain. Figma bisa digunakan di sistem operasi windows, linux ataupun mac dengan terhubung ke internet. Umumnya Figma banyak digunakan oleh seseorang yang bekerja dibidang UI/UX, web design dan bidang lainnya yang sejenis.
                </p>

            </ul>
        </p>
        <br/>
            <p>
            <ul class="mx-2"><h6><strong>Keuntungan Figma</strong></h6>
                
                   <li>
                    Gratis (untuk hingga dua pengguna dan tiga proyek per akun)
                   </li>
                   <li>
                    Berjalan di Mac dan PC (sketsa hanya di Mac)
                   </li>
                   <li>
                    Dapat mengimport file sketch
                   </li>
                   <li>
                    Pembuatan prototipe berkualitas tinggi yang terintegritas
                   </li>

            </ul>
        </p>
        <p>
            <ul class="mx-2"><h6><strong>Kelemahan Figma</strong></h6>
                
                   <p> Kelemahan Figma yaitu penggunaannya harus online, namun dapat menyimpan file secara lokal.
                </p>

            </ul>
        </p>
 <ol class="mx-2">
        <p class="pt-1 pl-5 pr-5">Link Github: <a href="https://github.com/Itinnnn/Vue_Kristina-Silitonga/tree/main/4_Figma" target="_blank">klik disini</a></p>
        
        <div>
          <p>Bukti Screenshoot</p>
           <img src="..\src\assets\Figma.png" width="600px" />
        </div>
        </ol>
      </TabPage>

      <TabPage :isSelected="selected === 'HTML'">
        <h1>HTML</h1>
        <br>
        <p class="pt-1 pl-5 pr-5">
            <ol> <h4> <strong> Materi Ini Mempelajari</strong></h4> 
                <li class="mx-2">HTML</li>
                <li class="mx-2">Fungsi HTML</li>
            </ol>
        </p>
        <p>
            <ul class="mx-2"><h6><strong>HTML</strong></h6>
                
                   <p> HTML (Hypertext Markup Language) adalah bahasa format yang digunakan untuk membuat halaman web. Dalam dunia pemrograman berbasis web (web programming), HTML merupakan pondasi dasar dari halaman web. File HTML disimpan dengan ekstensi .html (dot html). Dapat dijalankan atau diakses menggunakan web browser (Google Chrome, Mozilla Firefox, Opera, Safari, dll). HTML memiliki beberapa element yang tersusun dari tag-tag yang memiliki fungsi nya masing-masing. seperti tag heading, paragraf, pembuatan form, tombol, list, membuat hyperlink atau link yang menghubungkan antar halaman website.
                </p>

            </ul>
        </p>
        <br/>
            <p>
            <ul class="mx-2"><h6><strong>Fungsi HTML</strong></h6>
                <li>
                Membuat halaman website  
                </li>
                <li>
                  Menandai text dan dan bagian pada halaman website.
                </li>
                <li>
                 Menjadi pondasi website 
                </li>
                

            </ul>
        </p>  
 <ol class="mx-2">
        <p class="pt-1 pl-5 pr-5">Link Github: <a href="https://github.com/Itinnnn/Vue_Kristina-Silitonga/tree/main/5_HTML" target="_blank">klik disini</a></p>
        <div>
          <p>Bukti Screenshoot</p>
           <img src="..\src\assets\Html.png" width="600px" />
        </div>
        </ol>
        
      </TabPage>
      <TabPage :isSelected="selected === 'CSS'">
        <h1>CSS</h1>
        <br>
        <p class="pt-1 pl-5 pr-5">
            <ol> <h4> <strong> Materi Ini Mempelajari</strong></h4> 
                <li class="mx-2">CSS</li>
                <li class="mx-2"> Kelebihan CSS</li>
                <li class="mx-2"> Cara Kerja CSS</li>
            </ol>
        </p>
        <p>
            <ul class="mx-2"><h6><strong>CSS</strong></h6>
                
                   <p> CSS adalah bahasa Cascading Style Sheet dan biasanya digunakan untuk mengatur tampilan elemen yang tertulis dalam bahasa markup, seperti HTML.CSS berfungsi untuk memisahkan konten dari tampilan visualnya di situs.CSS menjelaskan bagaimana elemen HTML ditampilkan di layar, kertas, atau di media lain.SS menghemat banyak pekerjaan. Itu dapat mengontrol tata letak beberapa halaman web sekaligus.
                </p>

            </ul>
        </p>
        <br/>
            <p>
            <ul class="mx-2"><h6><strong>Kelebihan CSS</strong></h6>
                
                   <p> CSS digunakan untuk menentukan gaya halaman web Anda, termasuk desain, tata letak, dan variasi tampilan untuk berbagai perangkat dan ukuran layar. dengan CSS, kita tidak perlu mendeskripsikan tampilan dari masing-masing elemen secara berulang-ulang. tidak membuang-buang waktu, kode yang digunakan pun lebih singkat, dan error dapat diminimalisir. Karena opsi kustomisasi yang ada hampir tak terbatas, CSS memungkinkan Anda untuk menerapkan berbagai macam style pada satu halaman HTML.
                </p>

            </ul>
        </p>
        <p>
            <ul class="mx-2"><h6><strong>Cara Kerja CSS</strong></h6>
                
                   <p> CSS menggunakan sintaks bahasa Inggris sederhana yang dilengkapi dengan seperangkat aturan untuk mengelolanya. Seperti disebutkan sebelumnya, HTML tidak dibuat untuk menerapkan elemen gaya, itu dibuat hanya untuk markup halaman. HTML hanya digunakan untuk mendeskripsikan konten.
                </p>

            </ul>
        </p>
 <ol class="mx-2">
        <p class="pt-1 pl-5 pr-5">Link Github: <a href="https://github.com/Itinnnn/Vue_Kristina-Silitonga/tree/main/6_CSS" target="_blank">klik disini</a></p>
        
        <div>
          <p>Bukti Screenshoot</p>
          <img src="..\src\assets\CSS.png" width="600px" />
        </div>
        </ol>
      </TabPage>

      <TabPage :isSelected="selected === 'Bootstrap'">
        <h1>Bootstrap</h1>
        <br>
        <p class="pt-1 pl-5 pr-5">
            <ol> <h4> <strong> Materi Ini Mempelajari</strong></h4> 
                <li class="mx-2">Bootstrap</li>
                <li class="mx-2"> Keuntungan Bootstrap</li>
                <li class="mx-2"> 3 File Utama Bootstrap</li>
            </ol>
        </p>
        <p>
            <ul class="mx-2"><h6><strong>Bootstrap</strong></h6>
                
                   <p> Bootstrap adalah kerangka kerja front-end gratis untuk pengembangan web yang lebih cepat dan mudah. Bootstrap menyertakan template desain berbasis HTML dan CSS seperti tipografi, formulir, tombol, tabel, navigasi, modal, dan carousel gambar, serta plugin JavaScript opsional. Bootstrap juga memudahkan untuk membuat desain yang responsif.
                </p>

            </ul>
        </p>
        <br/>
            <p>
            <ul class="mx-2"><h6><strong>Keuntungan Bootstrap</strong></h6>
                <li>
                  Mudah digunakan
                </li>
                <li>
                  Fitur responsif
                </li>
                <li>
                  Pendekatan mobile
                </li>
                <li>
                  Kompatibilitas browser
                </li>
            </ul>
        </p>
        <p>
            <ul class="mx-2"><h6><strong>3 File Utama Bootstrap</strong></h6>
            <li>
              Bootstrap.css
            </li>
            <li>
              Bootstrap.js
            </li>
            <li>
              Glyphicons
            </li>
            </ul>
        </p>
 <ol class="mx-2">
        <p class="pt-1 pl-5 pr-5">Link Github: <a href="https://github.com/Itinnnn/Vue_Kristina-Silitonga/tree/main/7_Bootstrap" target="_blank">klik disini</a></p>
        
        <div>
          <p>Bukti Screenshoot</p>
         <img src="..\src\assets\Bootstrap.png" width="600px" />
        </div>
        </ol>
      </TabPage>

      <TabPage :isSelected="selected === 'Javascript Refreshment'">
         <h1>Javascript Refreshment</h1>
        <br>
        <p class="pt-1 pl-5 pr-5">
            <ol> <h4> <strong> Materi Ini Mempelajari</strong></h4> 
                <li class="mx-2">Javascript</li>
                <li class="mx-2"> Kelebihan Javascript</li>
                <li class="mx-2"> Kelemahan Javascript</li>
            </ol>
        </p>
        <p>
            <ul class="mx-2"><h6><strong>Javascript</strong></h6>
                
                   <p> Javascript adalah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif.JavaScript dapat meningkatkan fungsionalitas pada halaman web. Bahkan javaScript ini juga bisa membuat aplikasi, tools, atau bahkan game pada web.
                </p>

            </ul>
        </p>
        <br/>
            <p>
            <ul class="mx-2"><h6><strong>Kelebihan JavaScriipt</strong></h6>
                <li>
                 Tidak membutuhkan compiler karena web browser mampu menginterpretasikannya dengan HTML
                </li>
                <li>
                  Lebih mudah dipelajari daripada bahasa pemrograman lainnya
                </li>
                <li>
                 Proses pencarian dan penanganan eror atau kesalahannya lebih mudah
                </li>
                <li>
                 Bisa berfungsi sebagai elemen halaman web atau event tertentu, misalnya klik atau mouseover
                </li>
            </ul>
        </p>
        <p>
            <ul class="mx-2"><h6><strong>Kelemahan JavaScript</strong></h6>
            <li>
             erisiko tinggi terhadap eksploitasi
            </li>
            <li>
             Bisa disalahgunakan untuk mengaktifkan kode berbahaya di komputer pengguna
            </li>
            <li>
            Tidak semua browser dan perangkat selalu mendukung bahasa pemrograman ini
            </li>
            </ul>
        </p>
 <ol class="mx-2">
        <p class="pt-1 pl-5 pr-5">Link Github: <a href="https://github.com/Itinnnn/Vue_Kristina-Silitonga/tree/main/8_Javascrip%20Refreshment" target="_blank">klik disini</a></p>
        
        <div>
          <p>Bukti Screenshoot</p>
          <img src="..\src\assets\Javascript.png" width="600px" />
        </div>
        </ol>
      </TabPage>

      <TabPage :isSelected="selected === 'Clean Code'">
         <h1>Clean Code</h1>
        <br>
        <p class="pt-1 pl-5 pr-5">
            <ol> <h4> <strong> Materi Ini Mempelajari</strong></h4> 
                <li class="mx-2">Clean Code</li>
                <li class="mx-2"> Karakteristik Code</li>
                <li class="mx-2"> Golang</li>
            </ol>
        </p>
        <p>
            <ul class="mx-2"><h6><strong>Clean Code</strong></h6>
                
                   <p> Clean code Clean code adalah kode dengan format yang benar dan disusun dengan baik sehingga programmer lain dapat dengan mudah membaca atau memodifikasi kode tersebut.
                </p>

            </ul>
        </p>
        <br/>
            <p>
            <ul class="mx-2"><h6><strong>Karakteristik clean code</strong></h6>
                <li>
                Penamaan mudah dipaham
                </li>
                <li>
                 Mudah dieja dan dicari
                </li>
                <li>
                 Singkat namun mendeskripsikan konteks
                </li>
                <li>
                 Hindari penambahan konteks yg tidak perlu
                </li>
                <li>
                  Formating
                </li>
            </ul>
        </p>
        <p>
            <ul class="mx-2"><h6><strong>Golang Bahasa pemrograman</strong></h6>
            <p>
              Go atau disingkat dengan Golang adalah programming language yang diciptakan oleh Google bersama dengan Ken Thompson, Robert Griesemer, dan Rob Pike pada tahun 2009. Tujuan dari pengembangannya adalah untuk membangun bahasa yang mempunyai keunggulan dari sisi kecepatan, keandalan, skalabilitas, dan kesederhanaan.
            </p>
            </ul>
        </p>
 <ol class="mx-2">
        <p class="pt-1 pl-5 pr-5">Link Github: <a href="ihttps://github.com/Itinnnn/Vue_Kristina-Silitonga/tree/main/9_Clean%20Code" target="_blank">klik disini</a></p>
        
        <div>
          <p>Bukti Screenshoot</p>
        <img src="..\src\assets\cleancode.png" width="600px" />
        </div>
        </ol>
      </TabPage>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import tabNav from "@/components/tabNav.vue";
import TabPage from "@/components/TabPage.vue";

export default {
  name: "HomeView",
  components: { NavBar, tabNav, TabPage },
  data() {
    return {
      selected: "Home",
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  },
};
</script>

<style scoped>
.mx-2 {
  text-align: left;
}

.pt-1 pl-5 pr-5 {
  text-align: left;
}
</style>
