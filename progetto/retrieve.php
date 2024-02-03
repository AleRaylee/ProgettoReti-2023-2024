<?php

// Ricevi i dati dal client
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$code = $data->code;

// Simuliamo la logica del ritiro
// Qui potresti aggiungere la logica per verificare il codice di ritiro e liberare il posto

// Simulazione di un'operazione riuscita
$response = "OK - Veicolo ritirato con successo";

echo $response;
