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



