<?php

// Ricevi i dati dal client
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$vehicleType = $data->vehicleType;

// Simuliamo la logica del parcheggio
// Qui potresti aggiungere la logica per verificare se c'è spazio nel parcheggio e altre operazioni

// Simulazione di un'operazione riuscita
$response = "OK - Veicolo parcheggiato con successo";

echo $response;
