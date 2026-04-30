import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 1. OVDJE ZALIJEPI SVOJE PODATKE IZ FIREBASE KONZOLE
const firebaseConfig = {
    apiKey: "OVDJE_ZALIJEPI_SVOJ_API_KEY",
    authDomain: "live-admin-app.firebaseapp.com",
    projectId: "live-admin-app",
    storageBucket: "live-admin-app.appspot.com",
    messagingSenderId: "OVDJE_ZALIJEPI_SVOJ_MESSAGING_SENDER_ID",
    appId: "OVDJE_ZALIJEPI_SVOJ_APP_ID"
};

// Inicijalizacija Firebase-a
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Referenca na dokument u bazi podataka
const statusRef = doc(db, "shared", "status");

// 2. SLUŠANJE PROMJENA U STVARNOM VREMENU (onSnapshot)
onSnapshot(statusRef, (doc) => {
    if (doc.exists()) {
        const data = doc.data();

        // Ažuriramo glavni statusni tekst
        document.getElementById("status-box").innerText = data.text || "Nema statusa";

        // Ažuriramo vrijeme zadnje izmjene
        const timeBox = document.getElementById("time-box");
        if (timeBox) {
            timeBox.innerText = `Zadnja izmjena: ${data.vrijeme || "--:--"}`;
        }
    } else {
        document.getElementById("status-box").innerText = "Dokument još nije kreiran u bazi.";
    }
});

// 3. SLANJE PODATAKA KLIKOM NA DUGME
document.getElementById("testBtn").addEventListener("click", async () => {
    // Uzimamo ime iz input polja (ako je prazno, biće "Admin")
    const imeAdmina = document.getElementById("adminName").value.trim() || "Admin";

    // Generišemo trenutno vrijeme (Sati:Minute:Sekunde)
    const sada = new Date();
    const formatiranoVrijeme = sada.toLocaleTimeString("bs-BA", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    try {
        // Šaljemo nove podatke u bazu
        await setDoc(statusRef, {
            text: `Status postavio: ${imeAdmina}`,
            vrijeme: formatiranoVrijeme,
            posljednjiKorisnik: imeAdmina
        });
        console.log("Podaci su uspješno poslani u Firebase!");
    } catch (error) {
        console.error("Greška pri slanju podataka:", error);
        alert("Greška! Provjeri da li si ispravno zalijepila Firebase ključeve.");
    }
});