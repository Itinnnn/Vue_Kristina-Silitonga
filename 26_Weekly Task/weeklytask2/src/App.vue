<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg bg-light">
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
<br/>

 <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template>
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Rangkuman Tugas</h4>
          <nav class="mb-3">
            <b-nav vertical>
                <router-link to="/github" active-class="active" tag="button">
                <div class="link-container">
                  Git
                </div>
              </router-link>
              <router-link to="/introduction" active-class="active" tag="button">
                <div class="link-container">
                  Introduction UI/UX
                </div>
              </router-link>
                <router-link to="/figmatask" active-class="active" tag="button">
                <div class="link-container">
                  Figma
                </div>
              </router-link>
              <router-link to="/" active-class="active" tag="button">
                <div class="link-container">
                  HTML
                </div>
              </router-link>
              <router-link to="/" active-class="active" tag="button">
                <div class="link-container">
                  CSS
                </div>
              </router-link>
              <router-link to="/" active-class="active" tag="button">
                <div class="link-container">
                  Bootstrap
                </div>
              </router-link>
              <router-link to="/" active-class="active" tag="button">
                <div class="link-container">
                  Javascript Refreshment
                </div>
              </router-link>
              <router-link to="/" active-class="active" tag="button">
                <div class="link-container">
                  Clean Code
                </div>
              </router-link>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
</div>


</template>

<script>
export default {

}
</script>

<style>

</style>