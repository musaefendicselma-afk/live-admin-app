window.toggleSubmenu = function (id) {
    const sub = document.getElementById(id);
    sub.style.display = (sub.style.display === "flex") ? "none" : "flex";
}

window.showModule = function (id) {
    document.querySelectorAll('.module').forEach(m => m.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

window.spasiPutniNalog = function () {
    const vozilo = document.getElementById('pn-vozilo').value;
    const relacija = document.getElementById('pn-relacija').value;
    const svrha = document.getElementById('pn-svrha').value;
    const vrijeme = document.getElementById('pn-vrijeme').value;
    const odobrio = document.getElementById('pn-odobrio').value;
    const km = document.getElementById('pn-km').value;
    const datum = new Date().toLocaleDateString('bs-BA');

    if (!vozilo || !relacija) {
        alert("Popunite barem vozilo i relaciju!");
        return;
    }

    // Dodavanje u tabelu (vizuelno)
    const tabela = document.getElementById('lista-putnih-naloga');
    const noviRed = `<tr>
        <td>${vozilo}</td>
        <td>${relacija}</td>
        <td>${svrha}</td>
        <td>${vrijeme}</td>
        <td>${odobrio}</td>
        <td>${km}</td>
        <td>${datum}</td>
    </tr>`;

    tabela.innerHTML += noviRed;
    alert("Nalog uspješno evidentiran!");
}