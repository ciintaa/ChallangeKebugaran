let nama = ""
let skor = 0
let nomor = 0
let waktu = 10
let timer


// ================== DATA SOAL ==================

let soalQuiz = [
{
soal:"Kebugaran jasmani adalah kemampuan tubuh untuk?",
pilihan:["Melakukan aktivitas tanpa kelelahan berlebihan","Bermain sepanjang hari","Tidur sepanjang waktu","Makan sebanyak-banyaknya"],
jawaban:"Melakukan aktivitas tanpa kelelahan berlebihan"
},
{
soal:"Berikut ini yang termasuk komponen kebugaran jasmani adalah?",
pilihan:["Kekuatan","Kekayaan","Kepintaran","Keberuntungan"],
jawaban:"Kekuatan"
},
{
soal:"Kemampuan otot untuk mengangkat beban disebut?",
pilihan:["Kelenturan","Kecepatan","Kekuatan","Kelincahan"],
jawaban:"Kekuatan"
},
{
soal:"Olahraga yang dapat meningkatkan daya tahan tubuh adalah?",
pilihan:["Lari","Tidur","Menonton TV","Bermain HP"],
jawaban:"Lari"
},
{
soal:"Kemampuan tubuh untuk bergerak dengan ruang gerak sendi yang luas disebut?",
pilihan:["Kelenturan","Kecepatan","Kekuatan","Daya tahan"],
jawaban:"Kelenturan"
},
{
soal:"Agar tubuh tetap bugar, kita harus berolahraga secara?",
pilihan:["Jarang","Teratur","Sekali saja","Tidak pernah"],
jawaban:"Teratur"
},
{
soal:"Contoh olahraga untuk melatih kekuatan otot adalah?",
pilihan:["Push up","Tidur","Membaca buku","Duduk diam"],
jawaban:"Push up"
},
{
soal:"Istirahat yang cukup berfungsi untuk?",
pilihan:["Membuat tubuh lelah","Mengembalikan energi tubuh","Menambah penyakit","Membuat tubuh lemah"],
jawaban:"Mengembalikan energi tubuh"
},
{
soal:"Kemampuan menjaga posisi tubuh agar tidak jatuh disebut?",
pilihan:["Kecepatan","Keseimbangan","Kelincahan","Kelenturan"],
jawaban:"Keseimbangan"
},
{
soal:"Berikut ini yang bukan cara menjaga kebugaran jasmani adalah?",
pilihan:["Olahraga teratur","Makan makanan bergizi","Begadang setiap malam","Istirahat cukup"],
jawaban:"Begadang setiap malam"
},
]


// ================== HALAMAN AWAL ==================

function lanjut(){
document.getElementById("halamanAwal").classList.add("hidden")
document.getElementById("inputNama").classList.remove("hidden")
}

function simpanNama(){

nama = document.getElementById("namaPlayer").value

document.getElementById("inputNama").classList.add("hidden")
document.getElementById("menu").classList.remove("hidden")

document.getElementById("salam").innerText = "Halo " + nama
}


// ================== PAPAN INFO ==================

function bukaPapan(menu){

let judul=""
let isi=""

if(menu=="cara"){
judul="Cara Bermain"
isi="Jawaban benar +10 poin, salah -10 poin. Jika waktu habis maka -10 poin."
}

if(menu=="tujuan"){
judul="Tujuan Pembelajaran"
isi="Peserta didik dapat memahami pengertian kebugaran jasmani, mengetahui komponennya, dan cara menjaga kebugaran tubuh."
}

if(menu=="materi"){
judul="Materi"
isi="Materi Pendidikan Jasmani kelas 11 semester 2 tentang Kebugaran Jasmani."
}
if(menu=="profile"){
judul="Profile Developer"
isi="Game Challenge Kebugaran dibuat oleh siswa SMKN 11 Semarang sebagai media pembelajaran interaktif untuk materi Kebugaran Jasmani."
}
document.getElementById("judulPapan").innerText = judul
document.getElementById("isiPapan").innerText = isi

document.getElementById("papanInfo").classList.remove("hidden")
}

function tutupPapan(){
document.getElementById("papanInfo").classList.add("hidden")
}


// ================== MULAI GAME ==================

function mulaiGame(){

skor = 0
nomor = 0

document.getElementById("score").innerText = skor

document.getElementById("menu").classList.add("hidden")
document.getElementById("quiz").classList.remove("hidden")

tampilSoal()
}


// ================== MENAMPILKAN SOAL ==================

function tampilSoal(){

let data = soalQuiz[nomor]

document.getElementById("soal").innerText = data.soal

let pilihanHTML=""

data.pilihan.forEach(p=>{
pilihanHTML += `<button class="opsi" onclick="jawab(this,'${p}')">${p}</button><br>`
})

document.getElementById("pilihan").innerHTML = pilihanHTML

mulaiTimer()
}


// ================== MENJAWAB ==================

function jawab(tombol,pilihan){

clearInterval(timer)

let benar = soalQuiz[nomor].jawaban

let semuaTombol = document.querySelectorAll(".opsi")

semuaTombol.forEach(btn=>{

btn.disabled = true

if(btn.innerText == benar){
btn.style.backgroundColor = "green"
}

})

if(pilihan == benar){

skor +=10

}else{

skor -=10
tombol.style.backgroundColor = "red"

}

document.getElementById("score").innerText = skor

setTimeout(function(){

nomor++
lanjutSoal()

},1500)

}


// ================== TIMER ==================

function mulaiTimer(){

waktu = 10

document.getElementById("timer").innerText = waktu

timer = setInterval(function(){

waktu--

document.getElementById("timer").innerText = waktu

if(waktu == 0){

clearInterval(timer)

let benar = soalQuiz[nomor].jawaban

let semuaTombol = document.querySelectorAll(".opsi")

semuaTombol.forEach(btn=>{

btn.disabled = true

if(btn.innerText == benar){
btn.style.backgroundColor = "green"
}

})

skor -=10
document.getElementById("score").innerText = skor

setTimeout(function(){

nomor++
lanjutSoal()

},1500)

}

},1000)

}


// ================== LANJUT SOAL ==================

function lanjutSoal(){

if(nomor < soalQuiz.length){

tampilSoal()

}else{

tampilHasil()

}

}


// ================== HASIL ==================

function tampilHasil(){

document.getElementById("quiz").classList.add("hidden")
document.getElementById("hasil").classList.remove("hidden")

document.getElementById("hasilText").innerText =
nama + " | Skor Akhir : " + skor

}


// ================== KEMBALI KE MENU ==================

function kembaliMenu(){

skor = 0
nomor = 0

document.getElementById("score").innerText = 0

document.getElementById("hasil").classList.add("hidden")
document.getElementById("menu").classList.remove("hidden")


}
