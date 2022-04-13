19_Vue with Nuxt

summary pada section ini yaitu:
1. NuxtJS adalah framework open source, untuk membuat aplikasi VueJS yang bisa dirender dari server atau menjadi web statis.

2. perbedaan NuxtJs dengan VueJs yaitu: Nuxt memiliki beberapa item yang VueJs tidak punya seperti,
a. layout :Folder yang berisi file .vue yang menjadi layout halaman (parent templates)
b. pages : Folder utama yang berisi file .vue, dimana file-file .vue didalam folder ini akan di render menjadi View dan Router oleh Nuxt
c. static : Berisi semua file statis yang akan kita gunakan di aplikasi seperti robot.txt, image, favicon dll. Semua file di folder ini dapat langsung di akses dari root URL, misal /favicon.ico atau /robot.txt.

3. Perbedaan SSR dengan SSG
a. SSR singkatan dari Server Side Rendering adalah teknik me render React Js di sisi server, dan mengirimkan hasil render tersebut dalam bentuk html dan css ke browser/client.
b. SSG singkatan dari Static Site Generation adalah teknik me render React di saat build time React app. Teknik ini hampir sama dengan SSR dan sama-sama baik untuk SEO. 
c. jika SSR akan me render React code saat respon dari browser,
d. SSG me render React code saat build time