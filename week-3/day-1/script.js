let arrBuah = [
    "Jeruk",
    "semangka",
    "pepaya"
]
arrBuah[0] = "mangga"; // mengganti isi array 0

arrBuah.push("duku") // menambahkan data terakhir
arrBuah.unshift("anggur") // menambahkan data diawal
arrBuah.pop() //menghapus data akhir
arrBuah.shift() // menghapus data di awal
// arrBuah.splice(start, deleteCount, item1, item2, itemN) // untuk menghapus data dari tengah juga dapat menambahkan data dari tengah
// arrBuah.slice(index(default->0), index(default(1))) // mengcopy data dari manapun (Depan, Tengah, Belakang)

console.log(arrBuah);


for (let buah of arrBuah){
    console.log(buah);
}

arrBuah.forEach((item)=>{
    console.log(item)
})


arrBuah.map