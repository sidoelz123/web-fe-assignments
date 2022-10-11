# info

branch main => cabang utama
branch dev => menampung cabang-cabang yang lain
- branch A-login
- branch B-register



git switch dev => pindah branch ke dev

buat branch masing2 orang
git branch A-login
git branch B-register

==========================================

# Kolaborasi
## Team Leader
### Buat organization
1. Team lead membuat organization

2. Invite anggota tim dan jadikan owner

### Buat Repo di organization
1. Team lead buat repo untuk project yg akan di buat
2. Repo dibuat public, dan ceklis README
3. Buat branch bernama dev

### Mengecek pull request
1. setiap ada pull request, team lead akan mengeceknya
2. Jika pull request belum sesuai, bisa dikasih komen atau beri kabar anggota yg melakukan pull request tersebut
3. Jika sudah sesuai, lakukan merge 

### Hacktoberfest
1. Repo diberi label hacktoberfest
2. Setiap pull request yg di acc, diberi label hacktoberfest-accepted

​
# Kolaborasi
## Tahapan yg dilakukan semua anggota
1. masing-masing anggota lakukan clone pada repo yg sudah dibuat (1x aja)
2. Bagi tugas pada masing-masing anggota kelompok
3. sebelum ngoding, lakukan git pulluntuk update kode terbaru
4. Anggota membuat branch dari dev 
5. lakukan pengerjaan di dlm branch yg sudah dibuat
6. jika fitur sudah selesai/butuh code dari dev, lakukan commit seperti biasa
7. Sebelum push, lakukan git merge devuntuk menhindari conflict di github
8. Jika ada conflict, bereskan semuanya
9. jika sudah aman, commit lalu push branch ke github
10. lakukan pull request untuk merge ke branch dev
11. tunggu pull request di acc oleh team lead