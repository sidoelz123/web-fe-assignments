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

- `git branch -b [nama branch]` Merupakan command untuk mengganti nama branch tertentu

- `git remote ...` Merupakan command untuk mengkoneksikan atau menghubungkan repository local ke repository server lain (in this case menggunakan server git hub)

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

## Membuat HTML sederhana   

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

## **HTML Element**

HTML Element memiliki opening tag dan juga clossing tag.  
Contoh opening tag : `<p>`  
Contoh closing tag : `</p>`

Tetapi ada juga element html yang memiliki single tag.  
Contoh : `<br>` , `<hr>`, `img`

 ## Tahap Deployment

Deploy merupakan sebuah proses untuk menyebarkan aplikasi yang kita kerjakan agar bisa digunakan oleh orang lain.  
Untuk mendeploy HTML kita dapat menggunakan tools bernama Netlify.

# Day 3 | CSS

CSS merupakan bahasa yang digunakan untuk mendesain sebuah halaman website.  
Dengan menggunakan CSS, kita dapat mengubah warna, mengubah font, mengatur tata letak, dll.


## **Struktur CSS**

```css
selector {
  property: value;
}
```

## **Cara menyisipkan CSS**

Terdapat 3 cara untuk menyisipkan CSS ke dalam HTML

- **Inline**  
  Cara menyisipkan CSS ini adalah dengan menggunakan attribut style di dalam HTML element.

  ## **Cara menyisipkan CSS**

Terdapat 3 cara untuk menyisipkan CSS ke dalam HTML

- **Inline**  
  Cara menyisipkan CSS ini adalah dengan menggunakan attribut style di dalam HTML element.

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
    <h1 style="color: #999">Hello World</h1>
  </body>
</html>
```

- **Internal**  
   Cara menyisipkan CSS ini adalah dengan menggunakan element `<style>` yang diletakan di dalam element `<head>`

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        h1 {
          color: #999;
        }
      </style>
    </head>
    <body>
      <h1>Hello World</h1>
    </body>
  </html>
  ```

- **External**  
   Cara menyisipkan CSS ini adalah dengan cara membuat file CSS terpisah, lalu menyambungkannya dengan file html menggunakan element `<link>`. element tersebut diletakan di dalam element `<head>`

  Style.css

  ```css
  h1 {
    color: #999;
  }
  ```

  Index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <h1>Hello World</h1>
    </body>
  </html>
  ```


# Day 4 | Algoritma & Pseudocode
## **Pengertian Algoritma**

Algoritma merupakan deskripsi berupa step-step yang dibutuhkan untuk menyelesaikan suatu masalah

## **Kualitas Wajib dari Algortima**

- Input dan Output harus didefinisikan terlebih dahulu dengan tepat.
- Setiap step harus benar-benar clear dan tidak ambigu.
- Algortima seharusnya tidak mengandung suatu code pada bahasa pemrograman tertentu. Algoritma harus dibuat agar dapat digunakan dalam bahasa pemrograman manapun.

## **Perbedaan Algoritma dengan Data Struktur**

Data Struktur digunakan untuk mengelola/manajemen sebuah data, sedangkan Algoritma akan menyelesaikan suatu permasalahan menggunakan data tersebut.

## **Contoh Algorigma Sederhana**

Algoritma menambahkan kedua angka

Step 1 : Deklarasikan variabel num1, num2, dan sum.  
Steo 2 : Menuliskan value dari variabel num1 dan num2.  
Step 3 : Tambahkan num1 dan num2 dan hasilnya disimpan ke dalam variabel sum.  
Step 4 : Display sum.

## **Contoh Penerapan Algoritma**

Dengan algoritma tersebut kita bisa menerapkannya dalam bahasa pemrograman manapun, sebagai contoh Javascript.

```js
var num1 = 2;
var num2 = 3;
var sum = 0;

sum = num1 + num2;
console.log(sum);
```

## **Big o Notation**

Big o Notation adalah sebuah cara metode untuk melakukan analisa terhadap sebuah algoritma pemrograman terhadap waktu eksekusi. Tentang seberapa efisien dan kompleksitas barisan kode dalam dimensi waktu.

## **Pseudocode**

Pseudocode adalah menuliskan algoritma dengan umumnya bahasa inggris sebelum di implementasikan ke bahasa pemrograman tertentu.  
Tidak ada aturan yang baku untuk menuliskan pseudocode.  
Contoh menghitung luas persegi panjang.

```
Store "width" with value
Store "height" with value
Store "area" without value

CALCULATE "width" times "height"
SET "area" value with calculation result
DISPLAY "area"
```

# Day 5 | Javascript

## **Peran Javascript**

Javascript merupakah bahasa pemrograman yang sangat powerful yang digunakan untuk logic pada sebuah website. Dengan menggunakan javascript kita dapat membuat website menjadi interaktif dan juga dinamis.

## **Menjalankan Javascript**

Javascript dijalankan melalui browser pada device setiap user. Pada umumnya browser seperti chrome dan juga mozila sudah support untuk semua fitur Javascript.

## **Tipe Data**

Tipe data merupakan klasifikasi yang kita berikan untuk berbagai macam data yang digunakan dalam programming.  
Terdapat 6 tipe data fundamental pada Javascript.

- number  
  Tipe data number adalalh tipe data yang mengandung semua angka termasuk angka desimal
  ```js
  let number1 = 12;
  let number2 = 25.3;
  let number3 = 1000;
  ```
- string
  Tipe data string adalah grup karakter yang ada pada keyboard laptop/PC kita yaitu letter (huruf), number (angka), spaces (spasi), symbol,, dll.  
  Diawali dan diakhiri dengan single quotes `'...'` ataupun double quotes `"..."`.
  ```js
  let text = "Halo, saya sedang belajar javascript";
  ```
- boolean
  Tipe data boolean adalah tipe data yang hanya mempunyai 2 nilai, yaitu TRUE or FALSE.
  ```js
  let benar = true;
  let salah = false;
  ```
- null
  Tipe data null adalah tipe data yang diartikan bahwa sebuah variabel/data tidak memiliki nilai.
  ```js
  let data = null;
  ```
- undefined
  Tipe data undifined adalah tipe data yang mempresentasikan variabel/data yang tidak memiliki nilai.
  Tipe data undifined biasanya didapat dari hasil kesalahan program(error), kelalaian programmer, dan tidak direncanakan.  
  Selain itu, undifined juga didapat dari hasil berikut.

  - Nilai dari pemanggilan variabel yang belum didefinisikan.
  - Nilai dari element array yang tidak ada.
  - Nilai dari pemanggilan property objek yang tidak ada.
  - Nilai dari pemanggilan fungsi yang tidak mengembalikan nilai (return).
  - Nilai dari parameter fungsi yang tidak memiliki argumen.

  ```js
  let nama = "Salim";

  console.log(umur);
  ```

- object
  Tipe data object adalah koleksi data yang saling berhubungan. Tipe data object dapat menyimpan data dengan tipe apapun. Tipe data object memiliki key dan juga value.
  ```js
  var person = {
    firstname: "Salim",
    lastname: "Sulaiman",
    age: 20,
  };
  ```

## **Operator**

- ### **Assignment Operator (=)**

  Assignment operator digunakan untuk menyimpan sebuah nilai pada variabel

  ```js
  let myName = "Salim Sulaiman";
  ```

  Mathematical Assignment Operator :

  ```js
  let w = 4;
  w += 1;

  console.log(w); //output : 5
  ```

  ```js
  let a = 10;
  a++;
  console.log(a); //output : 11
  ```

- ### **Arithmetic Operator**

  Arithmetic Operator merupakan operator yang melibatkan operasi matematika.

  - Tambah (+)
    ```js
    console.log(5 + 2);
    ```
  - Kurang (-)
    ```js
    console.log(5 - 2);
    ```
  - Perkalian (\*)
    ```js
    console.log(5 * 2);
    ```
  - Pembagian (/)
    ```js
    console.log(4 / 2);
    ```
  - Modulus (%)
    ```js
    console.log(5 % 2);
    ```

- ### **Comparison Operator**

  Comparison adalah operator yang membandingkan suatu nilai dengan nilai lainnya. operator ini menghasilkan nilai antara true or false.

  ```
  8 < 10; // true
  8 > 10; // false
  8 <= 8; // true
  8 >= 8; // true

  "apel" === "nanas"; // false
  "apel" !== "nanas"; // true
  ```

- ### **Logical Operator**
  Simbol dari Logical Operator adalah sebagai berikut.
  - AND Operator : &&
  - OR Operator : ||
  - NOT Operator : !

## **Conditional**

Conditional merupakan statement percabangan yang menggunakan suatu kondisi. Mengecek apakan kondisi tersebut TRUE, jika TRUE maka code di dalam kondisi tersebut akan dijalankan.

### **IF Statement**

```js
let lapar = true;
if (lapar) {
  console.log("Mari makan");
}
```

### **IF ... ELSE Statement**

```js
let mengantuk = false;
if (mengantuk) {
  console.log("Silahkan Tidur");
} else {
  console.log("Mari beraktifitas");
}
```

### **IF ... ELSE IF Statement**

```js
let trafficLight == "red";

if (trafficLight == "green"){
  console.log("Go");
}
else if (trafficLight == "red"){
  console.log("Stop");
}
else if (trafficLight == "yellow"){
  console.log("Slow Down");
}
```

### **Switch Case Conditional**

Switch Case digunakan ketika kondisi bercabang terlalu banyak.

```js
const hari = "Rabu";

switch (hari) {
  case "Senin": {
    console.log("Ini hari Senin");
    break;
  }
  case "Selasa": {
    console.log("Ini hari Selasa");
    break;
  }
  case "Rabu": {
    console.log("Ini hari Rabu");
    break;
  }
  case "Kamis": {
    console.log("Ini hari Kamis");
    break;
  }
  case "Jumat": {
    console.log("Ini hari Jumat");
    break;
  }
  case "Sabtu": {
    console.log("Ini hari Sabtu");
    break;
  }
  case "Minggu": {
    console.log("Ini hari Minggu");
    break;
  }
}
```

### **Ternary Operator**

Ternary Operator merupakan short-syntax dari statement if ... else.

```js
let makan = true;
makan ? console.log("Sudah kenyang") : console.log("Lapar");
```

## **Looping**

Looping adalah statement yang mengulang sebuah instruksi hingga kondisi terpenuhi atau jika kondisi tercapai.

### **For Loop**

Gunakan for loop jika kita tahu seberapa banyak nilai pasti untuk pengulangannya.

```js
for (let angka = 1; angka <= 10; angka++) {
  console.log(angka);
}
```

### **While Loop**

Gunakan while loop jika kita tidak mengetahui jumlah pasti pengulangan.

```js
let angka = 1;
while (angka <= 10) {
  console.log(angka);
  angka++;
}
```

### **Do While**

Gunakan Do While jika ingin setidaknya menjalankan pengulangan 1 kali sebelum dilakukan pengecekan kondisi

```js
var angka = 1;
do {
  console.log(angka);
  angka++;
} while (angka <= 10);
```