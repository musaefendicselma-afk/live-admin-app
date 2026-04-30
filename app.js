// Funkcija za otvaranje/zatvaranje pod-menija (Vozila, Odluke itd.)
window.toggleSubmenu = function (id) {
    const submenu = document.getElementById(id);
    const isVisible = submenu.style.display === "flex";

    // Zatvori sve ostale podmenije ako ih ima
    document.querySelectorAll('.submenu').forEach(sub => sub.style.display = 'none');

    // Ako nije bio vidljiv, otvori ga
    if (!isVisible) {
        submenu.style.display = "flex";
    }
}

// Funkcija za prikazivanje modula u glavnom prozoru
window.showModule = function (moduleId) {
    // Sakrij sve module
    document.querySelectorAll('.module').forEach(m => m.style.display = 'none');

    // Prikaži traženi modul
    const activeModule = document.getElementById(moduleId);
    if (activeModule) {
        activeModule.style.display = 'block';
    }
}

// Ovdje ćeš kasnije dodati Firebase konfiguraciju za spašavanje podataka
console.log("Sistem spreman.");