// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'))
// pilih yang hanya javascript lanjutan
let jsLanjut = videos.filter(video => video.textContent.includes('Javascript lanjutan'))
// ambil durasi masing1 video
.map(item => item.dataset.duration)
// ubah durasi menjadi float
.map(waktu => {
    const parts = waktu.split(':').map(part => parseFloat(part))
    return parts[0] * 60 + parts[1]
})
// ubah float jadi detik
// jumlahkan semua detik
.reduce((total, detik) => total + detik);
// ubah format jadi jam menit detik
const hours = Math.floor(jsLanjut / 3600)
jsLanjut = jsLanjut - hours * 3600
const minutes = Math.floor(jsLanjut/60)
const second = jsLanjut - minutes * 60
// simpan di dommu
const duration = document.querySelector('.total-durasi')
duration.textContent = `${hours} jam ${minutes} menit ${second} detik`
const jumlahVid = videos.filter(video => video.textContent.includes('Javascript lanjutan')).length
const pjmlhvid = document.querySelector('.jumlah-video')
pjmlhvid.textContent = `${jumlahVid} Video div`
console.log(jsLanjut)