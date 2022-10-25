# Day 1 | Fetch & Async Await

## **Fetch**

Fetch memungkinkan javascript dapat berjalan di halamanan untuk membuat permintaan HTTP ke server dalam mengambil sepecific resource, dan ketika server menyediakan resource tersebut maka javascript dapat menggunakan data tersebut untuk ditampilkan pada halaman, untuk menampilkan ini biasannya menggunakan DOM. Data yang disediakan biasanya berupa json yang mana merupakan format terbaik untuk mentransfer sebuah data.

**Fetch** merupakan sebuah object promise yang telah disediakan oleh javascript.

## **Menangkap data dengan Async await**

Selain menggunakan then catch, kita dapat menangkap sebuah data menggunakan async await

```js
let nonton = (kondisi) => {
  return new Promise((resolve, reject) => {
    if (kondisi == "jalan") {
      resolve("Nonton Terpenuhi");
    } else {
      reject("Batal nonton");
    }
  });
};

async function asyncNonton() {
  try {
    let result = await nonton("jalan");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

asyncNonton(); // output : nonton terpenuhi
```

## **API**

API atau Application Programming Interface dapat diartikan sebagai perantara antara sebuah website dengan server agar sebuah website atau aplikasi dapat saling bertukar data dengan mudah dan aman.

## **Menangkap data dari API**

terdapat 2 cara dalam menangkap data dari API, yaitu dengan menggunakan then catch dan juga async await.  
Sebagai contoh saat ingin mengambil data dari API https://digimon-api.vercel.app/api/digimon.

- Menggunakan then catch
  ```js
  fetch("https://digimon-api.vercel.app/api/digimon")
    .then((result) => {
      console.log(result);
      return result.json(); // unboxing
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  ```
- Menggunakan async await

  ```js
  let getDataDigimon = async () => {
    try {
      let response = await fetch("https://digimon-api.vercel.app/api/digimon");
      let digimons = await response.json();
      console.log(digimons);
    } catch (error) {
      console.log(error);
    }
  };

  getDataDigimon();
  ```

Dari kedua cara diatas kita akan mendapatkan sebuah data json yang disediakan oleh server melalui API. dari data yang dihasilkan dapat berupa object ataupun array of object

# Day 2 | Github Lanjutan



# Day 3 | Responsive Web Design & Bootstrap

## **Responsive Web Design**

### **Pengertian RWD**

Responsive Web Design adalah bertujuan membuat design website kita dapat diakses dalam device manapun.

### **Viewport**

Viewport merupakan area yang dilihat oleh pengguna kita pada balaman website.  
Untuk membuat website menjadi responsive kita perlu menambahkan meta viewport pada bagian head

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### **max-width**

max width digunakan untuk menghindari terjadi overflow saat tampilan website diperkecil, cara menggunakannya adalah dengan menambahkan attribute max-width = 100% pada image

### **Media Query**

media query merupakan salah satu cara membuat sebuah website menjadi responsive.  
umumnya terdapat 2 jenis media query, yaitu min-width dan max-width.

```css
@media screen and (min-width: 500px) {
  /* tag element and css */
}

@media screen and (max-width: 500px) {
  /* tag element and css */
}
```

### **Breakpoint**

Breakpoint merupakan perubahan yang terjadi pada tampilan saat berganti ukuran width.  
Terdapat 3 jenis breakpoint yaitu breakpoint untuk laptop, tablet, dan juga mobile.

### **Flex**

Terdapat banyak cara untuk mengatur membuat sebuah website responsive, salah satunya adalah FlexBox.  
Metode Flexbox menggunakan sebuah property display bernama Flex.

```css
.container {
  display: flex;
}
```

## **Bootstrap**

### **Pengertian**

Bootstrap merupakan framework CSS yang digunakan untuk membuat tampilan website menjadi responsive.