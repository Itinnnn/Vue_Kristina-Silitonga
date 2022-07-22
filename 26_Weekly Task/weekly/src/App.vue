<template>
  <div id="app">
   <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Kristina Silitonga</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Kelas B Vue Js</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

    <tabNav :tabs="['Git', 'Introduction UI UX', 'Figma', 'HTML', 'CSS', 'Bootstrap', 'Javascript Refreshment', 'Clean Code']" :selected="selected" @selected="setSelected">
    <TabPage :isSelected="selected === 'Git'">
    <p>GitHub merupakan manajemen project, sistem versioning code, sekaligus platform jaringan sosial bagi para developer seluruh dunia</p> 
    <br/>
    <img src="..\src\assets\Git.jpeg"/>
    </TabPage>
    <TabPage :isSelected="selected === 'Introduction UI UX'">
    <p>User Interface (UI) adalah bagian dari UX yang berupa tampilan visual design sebuah sistem</p> 
    <p>User Experience (UX) merupakan proses mendesain suatu produk melalui pendekatan pengguna</p>
    <br/>
    <img src="..\src\assets\UI UX.jpeg"/>
    </TabPage>
    <TabPage :isSelected="selected === 'Figma'">
    <p>Figma adalah salah satu design tool yang biasanya digunakan untuk membuat tampilan aplikasi mobile, desktop, website dan lain-lain.</p> 
    <br/>
    <img src="..\src\assets\UI UX.jpeg"/>
    </TabPage>
     <TabPage :isSelected="selected === 'HTML'">
     <p>HTML (Hypertext Markup Language) adalah bahasa format yang digunakan untuk membuat halaman web. Dalam dunia pemrograman berbasis web (web programming), HTML merupakan pondasi dasar dari halaman web.</p> 
    <br/>
    <img src="..\src\assets\UI UX.jpeg"/>
    </TabPage>
     <TabPage :isSelected="selected === 'CSS'">
     <p>CSS adalah bahasa Cascading Style Sheet dan biasanya digunakan untuk mengatur tampilan elemen yang tertulis dalam bahasa markup, seperti HTML. CSS berfungsi untuk memisahkan konten dari tampilan visualnya di situs</p> 
    <br/>
    <img src="..\src\assets\CSS.png"/>
    </TabPage>
     <TabPage :isSelected="selected === 'Bootstrap'">
     <p>Bootstrap adalah kerangka kerja front-end gratis untuk pengembangan web yang lebih cepat dan mudah. Bootstrap menyertakan template desain berbasis HTML dan CSS seperti tipografi, formulir, tombol, tabel, navigasi, modal, dan carousel gambar, serta plugin JavaScript opsional.</p> 
    <br/>
    <img src="..\src\assets\Bootstrap.png"/>
    </TabPage>
     <TabPage :isSelected="selected === 'Javascript Refreshment'">
        <p>Javascript adalah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif. JavaScript dapat meningkatkan fungsionalitas pada halaman web. Bahkan javaScript ini juga bisa membuat aplikasi, tools, atau bahkan game pada web.</p> 
    <br/>
    <img src="..\src\assets\Javascript.png"/>
    </TabPage>
     <TabPage :isSelected="selected === 'Clean Code'">
     <p>lean code adalah kode dengan format yang benar dan disusun dengan baik sehingga programmer lain dapat dengan mudah membaca atau memodifikasi kode tersebut.</p> 
    <br/>
    <img src="..\src\assets\cleancode.png"/>
    </TabPage>
    </tabNav>
  </div>
</template>

<script>
import tabNav from './components/tabNav.vue'
import TabPage from "./components/TabPage.vue";

export default {
  name: "App",
  components: { tabNav, TabPage },
  data() {
    return {
      selected: "Home",
    };
  },
  methods: {
    setSelected(tab) {
      this.selected =tab;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #713367;
  margin-top: 60px;
}
</style>
