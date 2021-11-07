const bicimselDiller = document.getElementById("1");
const isaretlerVeSistemler = document.getElementById("2");
const web = document.getElementById("3");
const veriIletisimi = document.getElementById("4");
const isletimSistemleri = document.getElementById("5");
const iot = document.getElementById("6");
const button = document.getElementById("button");
const secilenDers = document.getElementById("ders");
const degistirilenData = document.getElementById("data");
const inputlariTemizle = () => {
    secilenDers.value = "";
    degistirilenData.value = "";
}
const verileriDoldur = () => {
    bicimselDiller.textContent = localStorage.getItem("1");
    isaretlerVeSistemler.textContent = localStorage.getItem("2");
    web.textContent = localStorage.getItem("3");
    veriIletisimi.textContent = localStorage.getItem("4");
    isletimSistemleri.textContent = localStorage.getItem("5");
    iot.textContent = localStorage.getItem("6");
}
verileriDoldur();
const buttonListener = () => {
    localStorage.setItem(secilenDers.value, degistirilenData.value);
    verileriDoldur();
    inputlariTemizle();
}
button.addEventListener("click", buttonListener);
