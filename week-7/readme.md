# Writing Week 6

## React Lanjutan

### PropTypes

- Proptypes merupakan library untuk menvalidasi props. Ini sangat membantu dalam meminimalkan bugs saat mengembangkan App besar. Jika props tidak benar type nya maka akan muncul warning.
- Untuk menggunakan Prop Types, kita bisa menggunakan fungsi PropTypes. Fungsi PropTypes membutuhkan dua parameter, yaitu nama Props dan tipe data dari Props. Berikut adalah contoh penggunaan fungsi PropTypes:
  
```jsx
import React from "react";
import PropTypes from "prop-types";

const App = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App; 
```

## React Router

React Router adalah library yang digunakan untuk membuat routing pada aplikasi React.

#### Install React Router

Untuk menginstall React Router, jalankan perintah berikut pada terminal:

  ```
      npm install react-router-dom
  ```

#### Komponent React Router

Berikut beberapa komponen react-router

1. `BrowserRouter` - Komponen ini digunakan untuk membuat routing pada aplikasi
   React.
2. `Routes` - Komponen ini digunakan untuk membuat routing pada aplikasi React.
3. `Route` - Komponen ini digunakan untuk membuat routing pada aplikasi React.
4. `Link` - Komponen ini digunakan untuk membuat link pada aplikasi React.
5. `Outlet` - Komponen ini digunakan untuk membuat routing pada aplikasi React.
6. `useNavigate` - Komponen ini digunakan untuk membuat routing pada aplikasi
   React.
7. `useParams` - Komponen ini digunakan untuk membuat routing pada aplikasi
   React.
8. `useLocation` - Komponen ini digunakan untuk membuat routing pada aplikasi
   React.
9. `useMatch` - Komponen ini digunakan untuk membuat routing pada aplikasi
   React.
10. `useRoutes` - Komponen ini digunakan untuk membuat routing pada aplikasi
    React.
11. `useHistory` - Komponen ini digunakan untuk membuat routing pada aplikasi
    React.

dan masih banyak lagi, Untuk lebih jelasnya bisa buka di dokumentasinya React Router
[Klik disini](https://reactrouter.com/docs/en/v6/getting-started/overview).
    
#### cara penggunaan

  1. import semua component yang akan dibutuhkan 
  ```
  import {
      BrowserRouter,
      Routes,
      Route
       }
  from "react-router-dom";

  ```

  2. bungkus element children kita menggunakan BrowserRouter

  ```
  return(
      <BrowserRouter>
          ....
      </BrowserRouter>
  )

  ```

  3. bungkus semua element yang akan di route menggunakan Routes

  ```
  return(
      <BrowserRouter>
         <Routes>
          ...
         </Routes>
      </BrowserRouter>
  )

  ```

  4. menggunakan route untuk semua halaman dan masukan didalam Routes, path sebagai alamat atau path halaman dan element berisi component halaman tersebut.

  ```
  return(
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />}>
           <Route path="/dashboard" element={<Dasboard />}>
         </Routes>
      </BrowserRouter>
  )

  ```

5. Sedangkan untuk berpindah halaman, didalam react-router kita dapat menggunakan Link sebagai pengganti tag a html.

```
  import {Link} from 'react-router-dom';

  function Navbar(){
      return(
          <nav>
              <Link to="/">Home</Link>
              <Link to="/dasboard">Dashboard</Link>
          </nav>
      )
  }

```


## State Management

State management library adalah library yang digunakan untuk mengelola state pada suatu aplikasi JavaScript.

Beberapa diantaranya:

- Redux
- MobX
- Flux
- Recoil

Setiap library memiliki aturan main atau pola masing-masing dalam mengelola state. Sehingga perlu untuk mempelajari aturan main dari library tersebut sebelum menggunakannya. 

## Redux

Redux adalah state manajement berupa container untuk aplikasi JavaScript.

berikut cara menginstall redux pada react
  ```
      npm i redux react-redux
  ```

Istilah pada redux

#### store

- store digunakan sebagai tempat dimana global state disimpan


#### provider

- provider adalah component tempat store dipanggil.

#### reducer

- reducer adalah bagian redux yang merubah state menjadi respon yang terjadi ketika Action di dispatch(). 

- untuk membuat reducer kita dapat menggunakan createReducer()

#### initial state

- initial state adalah value awal dari state kita, initial state biasanya berbentuk objek

#### dispacth

- dispatch adalah sebuah fungsi didalam redux
- untuk menggunakan dispatch kita dapat menggunakan useDispatch()

#### useSelector()

- useSelector berfungsi untuk memanggil state didalam redux dan menggunakannya di component kita.

### Redux-thunk

- Redux Thunk adalah middleware yang memungkinkan Anda memanggil pembuat aksi yang mengembalikan fungsi sebagai ganti objek aksi. Fungsi itu menerima metode pengiriman penyimpanan, yang kemudian digunakan untuk mengirim aksi sinkron di dalam isi fungsi setelah operasi asinkron selesai.

- menginstall redux thunk
  ```
      npm i redux-thunk
  ```
- contoh async await didalam redux-thunk
  ```
  export const fetchTodoById = todoId => async dispatch => {
  const response = await client.get(`/fakeApi/todo/${todoId}`)
  dispatch(todosLoaded(response.todos))
  }

  ```
