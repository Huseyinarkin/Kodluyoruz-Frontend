// sabit degiskenler
const userElement = document.querySelector("#myName")
const clockElement = document.querySelector("#myClock")
const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]

// userName islemleri
let userName=prompt("Kullanıcı adını giriniz: ")
userElement.innerHTML= userName.length>0?userName:"Lütfen kullanıcı adı giriniz."

// saat islemleri
function showTime() {
    const today = new Date();
    let d = today.getDay();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    clockElement.innerHTML =  h + ":" + m + ":" + s + " "+days[d-1];
    setTimeout(showTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }