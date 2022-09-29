# DAY 1

## Unix Command Line

### Apa itu shell?

 shell adalah program (penterjemah perintah) yang menjembatani user dengan sistem operasi dalam hal ini kernel (inti sistem operasi), umumnya shell menyediakan prompt sebagai user interface, tempat dimana user mengetikkan perintah-perintah yang diinginkan user, selain itu shell memungkinkan user menyusun sekumpulan perintah pada sebuah atau beberapa file untuk dieksekusi sebagai program. 

 Terdapat 2 jenis antarmuka shell, yaitu Command Line Interface (CLI) dan Graphical User Interface (GUI).

 ### Macam-macam GUI

 1. KDE
 2. GNOME
 3. Xfce
 4. dll

 ### Macam-macam CLI

 1. Zsh
 2. Bash
 3. sh
 4. fish
 5. csh
 6. dll

### File System Structure
 File system structure mengatur bagaimana data disimpan di dalam sebuah system. 

### Perintah dasar pada Unix Command Line

- **pwd**  
  pwd merupakan sebuah perintah yang digunakan untuk melihat direktori kita berada sekarang

  ```
  pwd
  ```

- **ls**  
  ls merupakan sebuah perintah yang digunakan untuk melihat isi file yang ada pada sebuah direktori.

  ```
  ls
  ```

- **cd**  
  cd merupakan sebuah perintah yang digunakan untuk berpindah direktori, cara penggunaannya adalah.

  ```
  cd nama_direktori
  ```

Selain command untuk navigasi, ada juga command yang digunakan untuk memanipulasi file dan juga direktori

- **touch**  
  touch merupakan perintah yang digunakan untuk membuat file baru.

  ```
  touch nama_file
  ```

- **mkdir**  
  mkdir merupakan perintah yang digunakan untuk membuat sebuah direktori baru.

  ```
  mkdir nama_direktori
  ```

- **head**  
  head merupakan perintah yang digunakan untuk melihat beberapa line awal dari sebuah file text.

  ```
  head nama_file.md
  ```

  ![Head]()

- **tail**  
  tail merupakan perintah yang digunakan untuk melihat beberapa line akhir dari sebuah file text.

  ```
  tail nama_file.md
  ```

  ![Tail]()

- **cat**  
  cat merupakan perintah yang digunakan untuk melihat isi semua file text.
  ```
  cat nama_file.md
  ```
- **cp**  
  cp merupakan perintah yang digunakan untuk mengcopy file.

  ```
  cp nama_file.md nama_direktori/nama_file_salinan
  ```

  ![cp]()  
  pada kasus diatas merupakan cara mengcopy file readme.txt ke dalam direktori "salinan"

- **mv**  
  mv merupakan perintah yang digunakan untuk memindahkan file, selain itu perintah mv dapat digunakan untuk rename sebuah file

  ```
  mv nama_file.md nama_direktori/pindahan-readme.md
  ```

  ![mv]()  
  

- **rm**  
  rm merupakan perintah yang digunakan untuk menghapus file

  ```
  rm nama_file
  ```

  selain itu rm juga dapat digunakan untuk menghapus direktori

  - untuk mengapus direktori yang kosong

    ```
    rm -d nama_direktori
    ```

  - untuk mengapus direktori yang didalamnya terdapat file

    ```
    rm -rf nama_direktori
    ```

## GIT DAN GITHUB

### Perbedaan Git dan GitHub

- _Git_ adalah version-control system untuk mengelola perubahan yang terjadi di suatu folder ataupun file, `git` banyak digunakan oleh programmer untuk menyimpan history perubahan pada source code yang dikembangkan

- _Github_ adalah website yang menyediakan layanan untuk mengembangkan perangkat lunak bersama, atau proyek pengembangan perangkat lunak yang tidak hanya berfokus pada pengembangan linux, tetapi bisa juga perangkat lunak yang lain seperti Desktop Application, Games, Website, dan lain-lain.

### Mengapa Git dan Github Tools Yang Wajib Digunakan ?
Jadi selain untuk mengontrol versi, git juga digunakan untuk kolaborasi.
Selain itu, berikut ini ada beberapa menfaat yang akan kamu rasakan setelah bisa menggunakan Git dan github.

- Bisa menyimpan seluruh versi source code;
- Bisa berkolaborasi dalam proyek;
- Bisa ikut berkontribusi ke proyek open-source;
- Lebih aman digunakan untuk kolaborasi, karena kita bisa tahu apa yang diubah dan siapa yang mengubahnya.
- Bisa memahami cara deploy aplikasi modern;
- dan sebagainya…

selanjutnya untuk menggunakan git/github kita harus melakukan dengan beberapa step :
- Mendownload dan install [git](https://git-scm.com/downloads).

- Melakukan configurasi dengan command 

	 `git config global user.name "sidoelz123"` 

	 `git config global user.email "sidoelz.123@gmail.com"`

- Nantinya kita dapat mengecek hasil config kita dengan command `git config --list`
	![config]() 

- Setelah kita sudah menginstall  git, selanjutnya masukan perintah `git init` untuk menginisialisasi sebuah repository di file lokal

- `git add .` command yang digunakan untuk menambahkan  file baru pada file lokal tersebut

- `git commit -m "first commit"`Digunakan untuk menyimpan perubahan yang ada namun masih pada local repository, pada remote repository belum update

- `git remote ...` Merupakan command untuk mengkoneksikan atau menghubungkan repository local ke repository server lain (in this case menggunakan server git hub)

- `git branch -b [nama branch]` Merupakan command untuk mengganti nama branch tertentu

- `git push -u origin master/main` Merupakan langkah terakhir untuk kita dapat push atau mengirimkan perubahan pada repository lokal kita ke remote repository

kemudian selain perintah diatas ada ada juga masih banyak perintah-perintah dari git hub yaitu antara lain :
- `git status` merupakan command untuk mengecek dan melihat apakah terjadi perubahan pada git kita

- `git checkout` command yang digunakan untuk kita pada saat berpindah ke branch lain

- `git merge` command yang diogunakan untuk menggabungkan (*merged*) branch cabang ke branch master / main 


###############################################################################################################
# DAY 2

## Pengertin HTML

HTML adalah singkatan dari _Hypertext Markup Language_. Secara singkat HTML adalah kerangka dari sebuat website yang mana biasanya digunakan untuk  menampilkan konten pada browser. 

Ada 2 tools utama yang harus dipersiapkan untuk membuat HTML

   - Browser
   - Code Editor(Vs Code)
   

**Contoh Kode HTML**
```html
 <html>
  <head>
  <title>
      My First Web.
  </title>
  <body>
      <h1> Hello My World!!! </h1>
  </body>
  </html>
```

 outputnya

 ![output]()

### Semantic HTML dan Tag yang ada di dalam HTML
 
 ![semantic html](https://ahrefs.com/blog/wp-content/uploads/2020/06/semantic-search-1.png)

 **Contoh kode**

 ```html
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <section id="profile">
      <h1>Hi, i'm Ihza Maulana</h1>
      <img src="https://source.unsplash.com/300x300" />
      <ol type="a">
        <li><a href="http://instagram.com">instagram</a></li>
        <li><a href="http://facebook.com">facebook</a></li>
        <li><a href="http://twitter.com">twitter</a></li>
      </ol>
    </section>
    <section id="contact-me">
      <h2>contact me</h2>
      <form action="" method="post">
        <div>
          <label for="">name</label>
          <input type="text" name="" id="">
        </div>
        <div>
          <label for="">email</label>
          <input type="email" name="" id="">
        </div>
        <button type="">send</button>
      </form>
    </section>
  </body>
</html>
 ```

 outputnya

 ![output]()

 ## Tahap Deployment

Deploy merupakan sebuah proses untuk menyebarkan aplikasi yang kita kerjakan agar bisa digunakan oleh orang lain.  
Untuk mendeploy HTML kita dapat menggunakan tools bernama Netlify.

