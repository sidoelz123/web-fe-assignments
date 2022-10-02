# Day 1 | Scope & Function


didalam Javascript terdapat 2 Fase pada Execution Context atau pada saat program dijalankan :

1. Create / creation phase pada Global Context

    pada creation phase sebelum code dijalankan dia akan;
 - mendefinisikan window ==> yang dihasilkan adalah Global Object,
 - mendefinisikan this ==> yang dihasilkan adalah window, 
 - kemudian akan mencari keyword var dan function.jika ada ,maka;
    - membuat nama var, let,dan const ==> yang dihasilkan adalah Undefined,
    - membuat nama function ==> yang dihasilkan adalah fn() dan konsep tersebut diberi nama 'hoisting'


2. Execution / Execution phase 

    pada fase ini, dia menjalankan code yang ditulis baris demi baris dari atas ke bawah, dan menjalankan fungsi apapun yang dijalankan

    // contoh

```js
 console.log(sayHello()); // baris pertama => untuk membuktikan hoisting 
 // hasilnya adalah " Halo, nama saya undefine, saya undefine tahun." 

 var nama = 'Ihza Maulana';
 var umur = 20;

 console.log(sayHello());  // baris ini hasilnya adalah " Halo, nama saya Ihza Maulana, saya 20 tahun. "
 function sayHello() {
     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
 } 


```

### Keterangan
1. sebelum baris pertama dieksekusi, itu creation phase terlebih dahulu dan melakukan hoisting yaitu mencari var yang diisi undefined lalu function yang diisi fn() 
2.  kemudian mengeksekusi baris pertama dan kemudian menjalankan function sayHello dan hasilnya '"Halo, nama saya undefined, saya undefined tahun." karena var nama dan var umur masih menyimpan undefined
3. kemudian var nama dan umur terisi sesuai keinginan / sudah didefinisikan sesuai nilai-nya
4. kemudian mengeksekusi baris selanjutnya dan menjalankan function sayHello dan hasilnya adalah "Halo, nama saya Ihza Maulana, saya 20 tahun."
5. kemudian keluar dari baris function



  untuk lebih jelasnya bisa kunjungi javascript Visualizer dipencarian google atau klik link http://pythontutor.com/javascript.html#mode=edit

```js
// CONTOH
var nama = 'Ihza Maulana';
var username='ihzamaulana';

function cetakURL() {
    var instagramURL = 'http://instagram.com/';
    username = "ijaa"
    return instagramURL + username;
}

console.log(username); // hasil : 'ihzamaulana'
console.log(cetakURL()); // hasil : 'http://instagram.com/ijaa'

// CONTOH
function a(){
    console.log('ini a');
    function b() {
        console.log('ini b');
        function c() {
            console.log('ini c');
        }
        c();
        
    }
    b();

}
a();
```

## **Scope atau lingkup variabel**

yaitu untuk menentukan bagaimana sebuah varialbel dapat diakses dalam suatu program. didalam pemrograman ada 2 scope,yaitu

1. Block scope

biasa digunakan pada bahasa pemrograman Java dan C
misalkan

```C
int i = 2;
//block scope
if(i%2==0){
   bool genap = true;
}

if (genap){
   printf("genap!");
}
```

maka hasilnya **eror: 'genap' is undeclared**, karena variable yang dibuat block scope itu hanya bisa digunakan di dalam blok itu saja, tidak bisa digunakan di luar blok

2. Function scope

```js
var i = 2;

if (i % 2 == 0) {
  var genap = true;
}
if (genap) {
  console.log("genap!");
}
```

maka menampilkan " **genap!** "

misal

```js
// global scope / window scope
var a = 1;
// function scope
function tes() {
  var b = 2;
  console.log(b); // tampil nilai b yaitu 2
  //console.log(a); -> yang ini berjalan dan menghasilkan nilai a yaitu 1
}

tes();
//console.log(b); -> yang ini eror
//console.log(a); -> yang ini berjalan dan menghasilkan nilai a yaitu 1
```

maka hasilnya adalah **2**

ilustrasinya itu seperti **kaca film pada mobil**

```js
var a = 1;

function tes() {
  // name conflict
  var a = 2;
  console.log(a); // akan menampilkan 2
  // console.log(window.a); // akan menampilkan 1
}
tes();
// console.log(a) -> akan menampilkan 1
```

```js
"use strict";

function tes() {
  a = 2;
  console.log(a); // menghasilkan nilai 2
}
tes();
// console.log(a) ; -> yang ini eror karena terdapat use strict
```


## **Function**

function adalah sebuah blok kode yang digunakan untuk membungkus suatu proses dengan tujuan agar penulisan kode atau proses yang sama tidak ditulis secara berulang kali

## Alasan Menggunakan Function

- Reusability (DRY: Do not Repeat Yourself) yaitu sekali menulis program dapat dipanggil berkali kali
- Dekomposisi / Abstraksi yaitu untuk menyembunyikan kompleksitas yang sudah dibuat
- Modularitas, ketika menyembunyikan kompleksitasnya dengan cara membuat program kita menjadi sub-program atau modul modul sehingga memudahkan kita untuk mencari dimana letak kesalahan dari program yang sudah dibuat

## Kategori function

**1. Built-in function** / function yang sudah disediakan / dibuatkan oleh javascript, jadi kita tingga memanggilnya saja, contohnya alert(), confirm(), prompt(), dan masih banyak lagi

- String : charAt(), slice(), split(), toString(), toLowerCase(), toUpperCase(),..

https://www.w3schools.com/jsref/jsref_obj_string.asp

- Math : sin(), Cos(), tan(), random(), round(), floor(), ceil(), log(),.....

https://www.w3schools.com/jsref/jsref_obj_math.asp

**2. User-Defined function** / function yang kita buat sendiri,

- dengan menggunakan **keyword function** setelah itu nama fuction(optional),

- didalam fuction sendiri dapat kita masukan **Parameter/argument** disimpan **didalam ()** dan isinya boleh ada atau tidak, jika ada maka boleh lebih dari 1 dan dipisahkan oleh koma (,)

- **function body**, didalamnya _'dibungkus'_ dengan {_kumpulan statement_}

- dapat mengembalikan nilai (return value) maupun tidak

## membuat user-defined function

1. **Dengan deklarasi** / _function declaration_

function identifier(ParameterList*opt*) { FunctionBody }

=> **Membuat Fuction**

```js
function jumlahDuaBilangan(a, b) {
  var total;
  total = a + b;

  return total;
}
```

**keterangan :**

- **keyword** : function
- **Nama function** : jumlahDuaBilangan
- **Parameter** : a,b
- **function body** : var total;
  total = a + b;
- **return value** : return total

=> **memanggil function**

```js
alert(jumlahDuaBilangan(1, 2));
alert(jumlahDuaBilangan(25, 30));
alert(jumlahDuaBilangan(253, 304));
alert(jumlahDuaBilangan(29, 90));
```

keterangan :
**Nama function** : jumlahDuaBilangan
**Parameter** : 1 dan 2

### Kelebihan dan Kekurangan

- Lebih Fleksibel (dapat ditulis dimanapun) karena konsepnya Hoisting /

- Mudah dipahami pemula

2. **Dengan ekspresi** / _function expression_

```
var nama = function identifier*opt* (ParameterList*opt*){ FunctionBody }
```

misal

```js
var tampilPesan = function (nama) {
  alert("halo" + nama);
};
```

### Kelebihan dan Kekurangan

- Harus didefinisikan terlebih dahulu sebelum dipanggil

- Lebih powerfull karena bisa dibuat sebagai closure, argumen untuk function lain dan juga bisa dibuat menjadi IIFE(Immediately Invoked Function Expression)

# Cara Kerja function

**Input => Function => Output**

_keterangan_

- Input = masukan bahan / material ke dalam function

- Function = lakukan sesuatu terhadap bahan / material tadi

- Output = menghasilkan sesuatu

**_"function yang baik itu hanya mengerjakan 1 hal saja secara spesifik"_**

ilustrasinya itu seperti ini

intinya function itu seperti alat.
misalkan kita ingin membuat Jus Buah maka,inputnya itu ada buah,air dan gula dan outputnya itu Jus Buah, maka untuk merubah buah,air dan gula menjadi jus buah, maka tahapnya itu membutuhkan alat yang bernama blender



## Parameter dan Argument

**Parameter** adalah variabel yang ditulis di dalam kurung pada saat function dibuat, digunakan untuk menampung nilai yang akan dikirimkan saat function dipanggil

**Argument** adalah nilai yang dikirimkan ke parameter saat function dipanggil

Jadi kesimpulannya

_Parameter_ itu ketika fungsinya dibuat sedangkan _Argument_ itu ketika fungsinya dipanggil

Misal

```js
function tambah(a, b) {
  return a + b;
}
var hasil = tambah(5, 10);
console.log(hasil);
```

Keterangan

**a,b** -> parameter

**5,10** -> argument

Bagaimana Jika parameter dan argument-nya tidak sesuai maka untuk javascript itu

1. Jika Parameter lebih sedikit dari argument, maka Argument kelebihannya akan diabaikan
   Misal,

```js
function tambah(a, b) {
  return a + b;
}

var hasil = tambah(5, 6, 7);
console.log(hasil);
```

Keterangan

**Nilai 7 akan diabaikan**

2. Jika parameter lebih banyak dari argument, maka parameter kelebihannya akan bernilai default atau undefined
   Misal,

```js
function tambah(a, b, c) {
  return a + b;
}

var hasil = tambah(5, 6);
console.log(hasil);
```

Keterangan

**nilai parameter c adalah undefined**

Dan khusus di javascript ada sebuah variabel khusus yang bernama **_Arguments_**, yaitu suatu array yang berisi nilai yang dikirimkan saat function dipanggil disebut juga sebagai **variabel semu/ sudo variabel**

Pembuktian

```js
function tambah() {
  return arguments;
}
var coba = tambah(5, 10, 20, "hi", false);
console.log(coba);
```

Implementasi

```js
function tambah() {
  var hasil = 0;
  for (i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
}

var coba = tambah(5, 6, 7, 8);
console.log(coba);
```


### **Funtion Helper**

Kita bisa menggunakan function yang sudah dibuat pada function lain

```js
function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celcius) {
  return multiplyByNineFifths(celcius) + 32;
}

console.log(15); // Return 59
```

### **Arrow Funtion**

Arrow funtion merupakan cara penulisan function yang lebih mudah dan singkat, ini merupakan fitur terbaru yang ada pada ES6

```js
const greeting = () => {
  return "Hello World";
};

console.log(greeting()); //output Hello World
```

Cara penulisan parameter dengan arrow function

```js
const fullName = (firstName, lastName) => {
  return "Hello " + firstName + " " + lastName;
};

console.log(fullName(jonny, Sulaiman)); //output jonny Sulaiman
```

# Day 2 | Data Type Built in Prototype & Method

Javascript merupakan sebuah bahasa yang dinamis.

```js
let foo = 42;
foo = "bar";
foo = true;
```

## **Tipe Data**

Javascript memiliki beberapa tipe data.

  - Primitive
  - Boolean
  - Null
  - Undefined
  - Number
  - String
  - Symbol
  - Object

Kita juga dapat mengecek tipe data dari sebuah variabel, yaitu dengan menggunakan typeof

```js
let hewan = "kancil";
typeof hewan;
```

## **String**

Objek String ditandai dengan single quotes ataupun double quotes.
Kita juga dapat mengetahui panjang dari sebuah string yaitu dengan fitur lenght

```js
let greeting = "Hello";
console.log(greeting.length); // output 5
```

## **String Method**

- **toUpperCase**
  Mengubah string menjadi uppercase
  ```js
  let hewan = "kancil";
  console.log(hewan.toUpperCase()); // KANCIL
  ```
- **toLowerCase**
  Mengubah string menjadi lowercase
  ```js
  let hewan = "KANCIL";
  console.log(hewan.toLowerCase()); // kancil
  ```
- **charAt**
  Mengambil bagian String dengan menggunakan index
  ```js
  let hewan = "kancil";
  console.log(hewan.charAt(1)); // output a
  ```
- **includes**
  Digunakan untuk melakukan pencarian pada string
  ```js
  let hewan = "kancil";
  console.log(hewan.includes("n")); // output true
  ```
- **split**
  Membagi sebuah String, ketika dipisah akan menjadi data array
  ```js
  let kalimat = "Dengan menggunakan split(), kita dapat memisahkan string";
  console.log(kalimat.split(" "));
  ```

## **Number**

Number merupakan salah satu tipe data primitif

- **isNaN**
  Untuk mengecek apakah tipe data bukan merupakan number
  ```js
  isNaN("Hello"); //true
  isNaN(123); // false
  ```
- **toString**
  Mengubah sebuah tipe data dari number ke string
  ```js
  let angka = 20;
  console.log(angka.toString()); // '20'
  ```
- **toFixed**
  Menentukan jumlah angka di belakang koma
  ```js
  let dec = 3.1431221;
  console.log(dec.toFixed(2)); // '3.14'
  ```

## **Math**

Math merupakan built in object atau merupakan objek yang sudah disediakan oleh javascript

- Math.E //Bilangan Euler
- Math.LN2 //Log 2
- Math.LN10 //Log 10
- Math.LOG2E //Log E di basis 2
- Math.LOGE10 //Log E di basis 10
- Math.PI //pi
- Math.SQRT1_2 //Akar kuadrat dari 0.5
- Math.SQRT2 //Akar kuadrat dari 2

# Day 3 | DOM (Mengakses Halaman HTML)

## **Apa itu DOM?**

DOM (Document Object Model) merupakan programming interface pada Document Web. DOM digunakan untuk memanipulasi halaman HTML, membuat sebuah web menjadi dinamis.  
DOM bukan merupakan bagian dari javascript, melainkan merupakan sebuah web API untuk membangun sebuah website.  
DOM adalah jembatan agar bahasa pemrograman dapat berinteraksi dengan dokumen HTML, dengan DOM maka javascript dapat memanipulasi HTML.

## **Mengakses DOM**

=> file index.html
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
    <h1 id="title">Halo</h1>

    <ul class="list">
      <li class="item">satu</li>
      <li class="item">dua</li>
      <li class="item">tiga</li>
    </ul>
    <script src="script.js"></script>
  </body>
</html>
```

Terdapat berbagai cara untuk mengakses sebuah Element HTML.

- ### **getElementById**

  Cara pengaksesan ini adalah berdasarkan id pada sebuah element HTML. 

  ```js
  let title = document.getElementById("title");
  console.log(title);
  ```

  ![getElementById!](getElementById.png)

- ### **getElementsByClassName**

  Cara pengaksesan ini adalah dengan berdasarkan class pada sebuah element HTML. 

  ```js
  let list = document.getElementsByClassName("list");
  console.log(list);
  ```

  Hasil yang didapatkan adalah berupa HTMLCollection, untuk mengaksesnya adalah dengan menggunakan index

  ```js
  let list = document.getElementsByClassName("list");
  console.log(list[0]);
  ```

  ![getElementsByClassName!](getElementsByClassName.png)

- ### **getElemensByTagName**

  Cara pengaksesan ini adalah dengan berdasarkan tag name pada HTML.

  ```js
  let itemByTag = document.getElementsByTagName("li");
  console.log(itemByTag[1]);
  ```

  Hasil yang didapatkan adalah berupa HTMLCollection, maka untuk mengaksesnya adalah dengan menggunakan index.

- ### **querySelector**

  Cara pengaksesan ini dapat berdasarkan id, class, maupun tag name.

  ```js
  let listQuery = document.querySelector(".list");
  console.log(listQuery);
  ```

  Contoh diatas adalah cara mengakses sebuah class dengan nama list.  
  **Note** :

  - untuk mengakses id menggunakan #
  - untuk mengakses class menggunakan . "titik"
  - untuk mengakses tag name dapat mengetikan langsung tag name yang ada

- ### **querySelectorAll**

  Cara pengaksesan ini dapat berdasarkan id, class, maupun tag name.

  ```js
  let itemQueryAll = document.querySelectorAll(".item");
  console.log(itemQueryAll);
  ```

  ![querySelectorAll!](querySelectorAll.png)

  Yang dihasilkan berupa Node

- ### **parentElement**

  Untuk mengecek parent dari element yang diakses

  ```js
  let itemQuery = document.querySelector(".item");
  console.log(itemQuery.parentElement);
  ```

- ### **previousElementSibling**

  Untuk mengakses element sebelumnya

  ```js
  let itemQuery = document.querySelector(".item");
  console.log(itemQuery.previousElementSibling);
  ```

- ### **nextElementSibling**

  Untuk mengakses element setelahnya

  ```js
  let itemQuery = document.querySelector(".item");
  console.log(itemQuery.nextElementSibling);
  ```

# Day 4 | DOM (Memanipulasi Element HTML)

Dengan menggunakan DOM kita dapat memanipulasi element HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #tess {
        background-color: brown;
        width: 100px;
        height: 50px;
      }
      p {
        background-color: antiquewhite;
      }
    </style>
  </head>
  <body>
    <div id="tess"></div>
    <div id="app"></div>

    <div id="end">
      <a href="www.google.com" class="link">Google</a>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

## **Menyisipkan Teks**

Untuk Menyisipkan/Menuiskan sebuah teks ke dalam element html menggunakan DOM adalah dengan **innerHTML**

```js
let app = document.getElementById("app");
console.log(app);

app.innerHTML = "<h1>Halo</h1>";
```

Dengan menggunakan innerHTML kita dapat menyisipkan Teks Halo pada element div dengan id app

## **Membuat element HTML**

Untuk membuat sebuah element HTML dengan menggunakan DOM kita dapat menggunakan createElement

```js
let p = document.createElement("p");
p.innerHTML = "ini adalah paragraf";

// memunculkan element
app.append(p);
```

Pada code diatas kita membuat sebuah element p, kemudian kita ingin menyisipkan sebuah teks ke tag p tersebut.  
append digunakan untuk memunculkan element html tersebut

## **Mengecek dan Mendapatkan attribut**

Dengan menggunakan DOM kita bisa mendapatkan attribut dari sebuah element. untuk mendapatkannya kita bisa menggunakan getAtrribute

```js
let link = document.getElementsByClassName("link")[0];
console.log(link.attributes);
console.log(link.getAttribute("href"));
```

## **Menambahkan Attribut**

DOM juga memiliki fungsi untuk menambahkan attribut pada element HTML. Untuk menambahkan attribut kita bisa menggunakan setAttribut

```js
let link = document.getElementsByClassName("link")[0];
link.setAttribute("id", "google");
```

## **Melakukan Styling**

DOM memiliki fungsi untuk melakukan styling pada element HTML.

```js
let link = document.getElementsByClassName("link")[0];
link.style.color = "black";
link.style.border = "1px solid black";
link.style.padding = "5px 20px";
link.style.backgroundColor = "aqua";
```

## **Mendapatkan/Mengecek Styling pada elemment HTML**

DOM juga dapat mengecek ataupun mengetehui styling apa saja yang ada pada sebuah element HTML

```js
let tess = document.getElementById("tess");
let tessStyle = getComputedStyle(tess);
console.log(tessStyle.height);
console.log(tessStyle.backgroundColor);
```

# Day 5 | DOM (Event)

## **Peran DOM Event**

User experience bersifat dua arah, selain menampilkan element HTML, website juga harus bisa menangkap interaksi user.  
Event sendiri merupakan kejadian/kegiatan/interaksi yang terjadi pada sebuah website.

Terdapat beberapa event pada DOM

- click
- submit
- focuss
- blur
- hover
- change
- scroll

## **Memberikan Event**

Terdapat 3 Cara dalam menggunakan Event

- HTML Attribute.
    ```js
    <h1 onclick="alert('selamat datang')">Hallo</h1>
    ```
- Event propperty.

    ``` js
    <p id="paragraf">click me</p>

    paragraf.onclick = function () {
      alert("ini dari paragraf")
    }
    ```

    Atau bisa juga dengan tampilkan alert

    ```js
    paragraf.onclick = tampilkanAlert

    function tampilkanAlert () {
      alert("ini alert")
    }
    ```

- addEventListener()

    ```js
    <button id="btn">klik saya</button>

    let button = document.getElementById("btn")
    button.addEventListener("click", function (event) {
      console.log(event.target)
      alert("ini dari button")
    })
    ```

