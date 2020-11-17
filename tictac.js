"use strict";
let counter = 0;
let random = 0;
for (let i = 0; i < 9; i++) {
  document.getElementsByClassName('btn')[i].style = " height: 15vh; width: 15vh; border: 2px black solid;background-color: gold;  color: #3355bb; font-size: 10vh; margin:1vh";}
function myBtn1() {document.getElementById("btn1").innerHTML = whatsToPlay(whosTurn(counter));
  document.getElementById("btn1").style = "height: 15vh; width: 15vh;border: 2px black solid;font-size: 10vh; background:#3355bb; color:gold; margin:1vh"; counter += 1; document.getElementById("btn1").onclick = '';
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  randomPlay(); 
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  counter += 1;}
function myBtn2() {
  document.getElementById("btn2").innerHTML = whatsToPlay(whosTurn(counter));
  document.getElementById("btn2").style = "height: 15vh; width: 15vh;border: 2px black solid;font-size: 10vh; margin:1vh;background:#3355bb; color:gold";counter += 1; document.getElementById("btn2").onclick = '';
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  randomPlay(); 
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
counter += 1;}
function myBtn3() {
  document.getElementById("btn3").innerHTML = whatsToPlay(whosTurn(counter));
  document.getElementById("btn3").style = "height: 15vh; width: 15vh;border: 2px black solid;font-size: 10vh;margin:1vh; background:#3355bb; color:gold";counter += 1; document.getElementById("btn3").onclick = '';
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  randomPlay(); 
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  counter += 1;}
function myBtn4() {
  document.getElementById("btn4").innerHTML = whatsToPlay(whosTurn(counter));
  document.getElementById("btn4").style = "height: 15vh; width: 15vh;border: 2px black solid;font-size: 10vh;margin:1vh; background:#3355bb; color:gold"; counter += 1; document.getElementById("btn4").onclick = '';
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  randomPlay(); 
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
counter += 1;}
function myBtn5() {
  document.getElementById("btn5").innerHTML = whatsToPlay(whosTurn(counter));
  document.getElementById("btn5").style = "height: 15vh; width: 15vh;border: 2px black solid;font-size: 10vh; margin:1vh; background:#3355bb; color:gold"; counter += 1; document.getElementById("btn5").onclick = '';
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  randomPlay(); 
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
counter += 1;}
function myBtn6() {
  document.getElementById("btn6").innerHTML = whatsToPlay(whosTurn(counter));
  document.getElementById("btn6").style = "height: 15vh; width: 15vh;border: 2px black solid;font-size: 10vh; margin:1vh; background:#3355bb; color:gold"; counter += 1; document.getElementById("btn6").onclick = '';
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  randomPlay(); 
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  counter += 1;}
function myBtn7() {
  document.getElementById("btn7").innerHTML = whatsToPlay(whosTurn(counter));
  document.getElementById("btn7").style = "height: 15vh; width: 15vh;border: 2px black solid;font-size: 10vh; margin:1vh; background:#3355bb; color:gold";counter += 1; document.getElementById("btn7").onclick = '';
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  randomPlay(); 
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  counter += 1;}
function myBtn8() {
  document.getElementById("btn8").innerHTML = whatsToPlay(whosTurn(counter));
  document.getElementById("btn8").style = "height: 15vh; width: 15vh;border: 2px black solid;font-size: 10vh; margin:1vh; background:#3355bb; color:gold"; counter += 1; document.getElementById("btn8").onclick = '';
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  randomPlay(); 
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  counter += 1;}
function myBtn9() {
  document.getElementById("btn9").innerHTML = whatsToPlay(whosTurn(counter));
  document.getElementById("btn9").style = "height: 15vh; width: 15vh;border: 2px black solid;font-size: 10vh; margin:1vh; background:#3355bb; color:gold"; counter += 1; document.getElementById("btn9").onclick = '';
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  randomPlay(); 
  if (isWinner(megaArrayBuilder(arrayBuilder()))){return} 
  counter += 1;}
function isWinner(MegaArray) { let winner = false;
  for (let i = 0; i < 3; i++) {
    if ((MegaArray[i][0] == MegaArray[i][1]) && (MegaArray[i][0] == MegaArray[i][2]) && (MegaArray[i][0] != "")) {winner = true;
      if (MegaArray[i][0]=="X"){document.getElementById('board').textContent += 'Congratulation';}
      if (MegaArray[i][0]=="0"){document.getElementById('board').textContent += 'YOU LOST!!!';}
      for (let i = 0; i < 9; i++) {document.getElementById(`btn${i + 1}`).onclick = '';}
      return winner;}
    if ((MegaArray[0][i] == MegaArray[1][i]) && (MegaArray[0][i] == MegaArray[2][i]) && (MegaArray[0][i] != "")) {winner = true;
      if (MegaArray[0][i]=="X"){document.getElementById('board').textContent += 'Congratulation!';}
      if (MegaArray[0][i]=="0"){document.getElementById('board').textContent += 'YOU LOST!!!';}
      for (let i = 0; i < 9; i++) {document.getElementById(`btn${i + 1}`).onclick = '';}
      return winner;}}
  if ((MegaArray[0][0] == MegaArray[1][1]) && (MegaArray[0][0] == MegaArray[2][2]) && (MegaArray[1][1] != "")) {
    winner = true;
    if (MegaArray[1][1]=="X"){document.getElementById('board').textContent += 'Congratulation!';}
    if (MegaArray[1][1]=="0"){document.getElementById('board').textContent += 'YOU LOST!!!';}
    for (let i = 0; i < 9; i++) {document.getElementById(`btn${i + 1}`).onclick = '';}
    return winner;}
  if ((MegaArray[0][2] == MegaArray[1][1]) && (MegaArray[1][1] == MegaArray[2][0]) && (MegaArray[1][1] != "")) {winner = true;
    if (MegaArray[1][1]=="X"){document.getElementById('board').textContent += 'Congratulation!';}
    if (MegaArray[1][1]=="0"){document.getElementById('board').textContent += 'YOU LOST!!!';}
    for (let i = 0; i < 9; i++) {document.getElementById(`btn${i + 1}`).onclick = '';}
    return winner;}
  return winner;}
function arrayBuilder() {let array = [];
  for (let i = 0; i < 9; i++) {array[i] = document.getElementById(`btn${i + 1}`).textContent;}
  return array;}
function megaArrayBuilder(longArray) {
  let megaArr = [['', '', ''], ['', '', ''], ['', '', '']];
  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {megaArr[i][j] = longArray[count]; count += 1;}}
  return megaArr;}
function whosTurn(counter) {
  if (counter % 2 == 0) {return true;}
  else {return false;}}
function whatsToPlay(bool) {
  let sign = '';
  if (bool == true) {sign = 'X';}
  else {sign = '0';}
  return sign;}
function randomPlay() {
  let random = 0;
  do {random = Math.floor(Math.random() * 9) + 1;} 
  while (document.getElementById(`btn${random}`).textContent != '');
  document.getElementById(`btn${random}`).innerHTML = whatsToPlay(whosTurn(counter));
  document.getElementById(`btn${random}`).onclick = '';}