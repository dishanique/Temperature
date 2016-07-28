var temperature = 86

if (temperature < 0) {
    document.getElementNyId('welcome-message').innerHTML =
    'just stay inside it is TOO cold';
}
else if (temperature < 30) {
    document.getElementNyId('welcome-message').innerHTML =
    'brrrr you need a hat and gloves';
}
else if (temperature < 50) {
    document.getElementNyId('welcome-message').innerHTML =
    'Put on a Coat';
}
else if (temperature < 80) {
    document.getElementNyId('welcome-message').innerHTML =
    'Seems very pleasant';
}
else if (temperature < 100) {
    document.getElementNyId('welcome-message').innerHTML =
    'OMG Are you sweating yet';
}
if (temperature > 60 && temperature < 70) {
    document.getElementById('welcome-message').innerHTML =
        'The weather is lovely, wear whatever you like';
}
else if (temperature > 100 || temperature < 0) {
   document.getElementById('welcome-message').innerHTML =
        'Stay inside, the weather is awful';
}
