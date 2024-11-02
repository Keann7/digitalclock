const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    // Array nama-nama hari dan bulan
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // Ambil tanggal sekarang
    const currentDate = new Date();

    // Ambil elemen HTML
    const dayname = document.querySelector(".dayname");
    const month = document.querySelector(".month");
    const daynum = document.querySelector(".daynum");
    const year = document.querySelector(".year");

    // Jam
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    // Sistem hari, bulan, tahun
    dayname.textContent = days[currentDate.getDay()];
    month.textContent = months[currentDate.getMonth()];
    daynum.textContent = currentDate.getDate();
    year.textContent = currentDate.getFullYear();

    // Sistem jam
    if (h >= 12) {
        ampm = "PM";
    }

    if (h > 12) {
        h = h - 12;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;

    // Ubah background berdasarkan AM/PM
    const body = document.querySelector("body");
    if (ampm === "AM") {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1514897575457-c4db467cf78e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    } else {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    }

    // Update setiap 1 detik
    setTimeout(updateClock, 1000);
}

updateClock();