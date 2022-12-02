# React Context

Menurut dokumentasinya, berikut penjelasannya:

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

jadi Context itu seperti variable global yang bisa kamu akses dimana saja tanpa kamu harus memparsing props ke setiap komponen.

## Membuat Context
Context dapat dibuat dengan menggunakan React.createContext().

```jsx
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

## Menggunakan Context 

### Kapan Menggunakan Context 
    Context dirancang untuk berbagi data yang dapat dianggap “global” untuk diagram komponen React, seperti pengguna terotentikasi saat ini, tema, atau bahasa yang disukai. 

Context dapat digunakan dengan menggunakan Context.Provider dan Context.Consumer. Context.Provider digunakan untuk menyediakan data yang dapat diakses oleh komponen-komponen yang berada di dalamnya. Context.Consumer digunakan untuk mengakses data yang disediakan oleh Context.Provider.


# React Testing

React Testing Library adalah seperangkat helpers yang memungkinkan Anda mengetes komponen pada React tanpa bergantung pada detail implementasinya. Testing dapat dilakukan dengan menggunakan JEST

## Cara Install React Testing Library

>npm install --save-dev jest @testing-library/react @testing-library/jest-dom

### Setup Testing 

buat file jest.config.js
```jsx   
 module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
 };
```

### Step dari sebuah Testing
1. Arrange – setup Objek testing dan prepare siapkan prasyarat untuk testing
2. Act – melakukan tes yang sebenarnya.
3. Assert – hasil yang diharapkan

### Testing dibagi menjadi 2:

### 1. Manual Testing = pengujian yang dilakukan secara manual
  
#### Kelebihan manual testing
1. Mendapatakan Visual Feedback.
2. Unsur manusia. Bisa mendapatkan feedback dari orang secara langsung sehingga mengetahui apa yang user suka dan tidak suka
3. Lebih murah dalam proyek jangka pendek. 

#### Kekurangan manual testing
1. Kurang teliti daripada automation testing. 
2. Not reusable.
3. Kelelahan terhadap tester.

### 2. Automated Testing = Pengujian yang dilakukan secara otomatis dengan menggunakan script.

#### Kelebihan manual testing
1. Dapat menemukan bug lebih banyak dari manual tester.
2. Kecepatan dan efisiensi. Script lebih cepat dari tester, sehingga dapat cepat selesai dalam menemukan bug.
3. Test Reusable. 

#### Kekurangan Automated Testing
1. Lebih Mahal. Karena menggunakan tools maka pengerjaan menggunakan automation testing akan mahal, namun tetap menghemat waktu serta usabilitas.
2. Tidak adanya feedback mengenai UI.

### Alasan mengapa Menggunakan Testing:

1. Aplikasi bebas dari error dan bug
2. Aplikasi berjalan sesuai dengan ekspektasi
3. Meningkatkan kualitas dari sebuah software dan kepuasan pengguna

### Automated Testing terdiri dari :

1. Unit Test
2. End to End Test
3. Integration Test








