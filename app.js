// 1. Funkcije za navigaciju (otvaranje menija i modula)
window.toggleSubmenu = function (id) {
    const submenu = document.getElementById(id);
    const isVisible = submenu.style.display === "flex";

    // Zatvori sve ostale podmenije
    document.querySelectorAll('.submenu').forEach(sub => sub.style.display = 'none');

    // Ako nije bio vidljiv, otvori ga
    if (!isVisible) {
        submenu.style.display = "flex";
    }
}

window.showModule = function (moduleId) {
    // Sakrij sve module
    document.querySelectorAll('.module').forEach(m => m.style.display = 'none');

    // Prikaži traženi modul
    const activeModule = document.getElementById(moduleId);
    if (activeModule) {
        activeModule.style.display = 'block';
    }
}

// 2. Funkcija za spašavanje podataka iz modula "Putni Nalog"
window.spasiPutniNalog = function () {
    // Uzimanje vrijednosti iz polja
    const vozilo = document.getElementById('pn-vozilo').value;
    const relacija = document.getElementById('pn-relacija').value;
    const svrha = document.getElementById('pn-svrha').value;
    const km = document.getElementById('pn-km').value;
    const vrijeme = document.getElementById('pn-vrijeme').value;
    const odobrio = document.getElementById('pn-odobrio').value;
    const datum = new Date().toLocaleDateString('bs-BA');

    // Provjera da li su polja popunjena
    if (vozilo === "" || relacija === "") {
        alert("Molimo popunite osnovne podatke (Vozilo i Relacija).");
        return;
    }

    // Za sada samo ispisujemo u konzolu (dok ne povežemo bazu do kraja)
    console.log("Evidentiran nalog:", {
        Vozilo: vozilo,
        Relacija: relacija,
        Svrha: svrha,
        Kilometraža: km,
        Vrijeme: vrijeme,
        Odobrio: odobrio,
        Datum: datum
    });

    // Poruka korisniku
    alert("Nalog za vozilo " + vozilo + " je uspješno evidentiran!");

    // Opcionalno: Čišćenje polja nakon unosa
    document.getElementById('pn-vozilo').value = "";
    document.getElementById('pn-relacija').value = "";
    document.getElementById('pn-svrha').value = "";
    document.getElementById('pn-km').value = "";
    document.getElementById('pn-vrijeme').value = "";
    document.getElementById('pn-odobrio').value = "";
}

console.log("Sistem spreman.");