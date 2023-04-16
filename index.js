const messageNames = ["Guadalupe", "Ollie", "Aki"];
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function writeCards(names, event) {
  let messageNames = []
  for (let i = 0; i < names.length; i++) {
    console.log(messageNames)
    messageNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
  }
  return messageNames;
}

writeCards(["Guadalupe,", "Ollie,", "Aki,"], "suprise")

function countDown(number) {
  while (number >= 0) {
    console.log (number)
    number --
  }
}