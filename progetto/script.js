function parkVehicle() {
    var name = document.getElementById('nameInput').value;
    var vehicleType = document.getElementById('vehicleType').value;

    // Simuliamo l'invio dei dati al server tramite AJAX
    // Supponiamo che ci sia una risorsa sul server chiamata park.php
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "park.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('message').innerHTML = xhr.responseText;
        }
    };

    var data = JSON.stringify({
        name: name,
        vehicleType: vehicleType
    });

    xhr.send(data);
}

function retrieveVehicle() {
    var name = document.getElementById('nameInput').value;
    var code = prompt("Inserisci il codice di ritiro:");

    // Simuliamo l'invio dei dati al server tramite AJAX
    // Supponiamo che ci sia una risorsa sul server chiamata retrieve.php
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "retrieve.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('message').innerHTML = xhr.responseText;
        }
    };

    var data = JSON.stringify({
        name: name,
        code: code
    });

    xhr.send(data);
}
