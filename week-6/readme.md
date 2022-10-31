# Day 1 | Intro Reactjs

Reactjs adalah sebuah library javascript untuk memudahkan mengembangkan User Interface dan dikembangkan dan dibuat oleh Facebook
Kenapa menggunakan Reactjs??

1. React JS is FAST 
   React JS membuat aplikasi front-end menjadi lebih cepat walaupun harus menghandle berbagai data
   
2. React JS is Modular
   Kita dapat menerapkan konsep modular javascript pada React JS. React JS membagi 1 tampilan pada website menjadi komponen-komponen kecil.

3. React JS is Scalable
   React JS dapat digunakan pada aplikasi berskala kecil hingga berskala besar dan kompleks.

4. React JS is Popular
   Komunitas React JS di seluruh dunia sangat besar. Kebanyakan perusahaan teknologi pun sudah menggunakan React JS. Jadi akan mudah mendapatkan pekerjaan jika kita dapat menguasai React JS.


## Instalasi React

```bash
npm init -y
npx create-react-app my-app
cd my-app
npm start

```

cara lain menggunakan vite 
```bash
yarn create vite my-React-app --template react
cd my-React-app
yarn install
yarn dev
```

# Day 2 | React Component

Component adalah bagian-bagian yang menyusun aplikasi React. Component membagi UI dalam satuan-satuan kecil. Artinya dalam 1 page ada beberapa component yang bisa kita buat.

### Mengapa React membutuhkan komponen?

Reactjs bekerja dengan Virtual DOM. Nah, di dalam Virtual DOM ini. kita harus membuat komponen untuk memberitahu React tentang apa saja yang harus ditampilkan (render) ke Real DOM (HTML).

Komponen di React sendiri bersifat reuseable, artinya bisa digunakan kembali.

**Lalu apa bedanya komponen dengan elemen?**

Elemen adalah bagian-bagian (elemen HTML) yang menyusun komponen. Biasanya kita buat dengan JSX.

Secara umum, ada tiga bagian yang biasanya ada di dalam komponen:
1. Bagian Data (State, Props, Variabel)
2. Bagian method atau fungsi
3. Bagian method render() yang menggunakan class.

## State dan Props pada Komponen Reactjs

State dan props adalah objek khusus yang menyimpan data untuk komponen, namun cara kerjanya berbeda State adalah objek yang digunakan untuk menyimpan data di dalam komponen, sedangkan props adalah objek yang digunakan untuk menyimpan data yang diterima dari luar komponen. dan Data yang disimpan di dalam state bisa kita ubah-ubah, sedangkan data yang disimpan di dalam props tidak bisa diubah karena sifatnya read-only.

![Meme](https://pics.me.me/when-when-props-change-state-changes-react-reaci-couldnt-care-37493029.png)

## Stateful dan Stateless Component
Stateful components adalah komponen yang menggunakan state, biasa disebut: Sateful, Container, dan Smart. Sedangkan Stateless adalah komponen yang tidak menggunakan state, biasa disebut Stateless, Presentation, Dumb.

# Day 3 | Event

# Day 4 | Life Cycle
Lifecycle merupakan aktivitas yang dilakukan oleh React ketika aplikasi berjalan


Terdapat 3 siklus life cycle

1. mount : Ketika sebuah komponen dibuat atau pertama kali di render ke DOM
2. update : Ketika sebuah komponen akan dirender ulang, biasanya saat terjadi sebuah perubahan
3. unmount : Ketika sebuah komponen dihapus.




# Day 5 | Form


