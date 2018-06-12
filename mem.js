'use strict';
console.log('all revved up');
let passageArray = [];
let printedArray =[]; 

function addItem() {
  event.preventDefault();
  const passage = document.getElementById('search').value;
  // const passage = "Four score and seven years ago our fathers brought forth on this continent a nation";
  passageArray = passage.split(' ');
 
  let firstWord = document.createElement('p');
  firstWord.id = 'word';
  firstWord.innerHTML = passageArray[0];
  printedArray.push(passageArray[0]); 
  document.getElementById('bucketList').append(firstWord);

  let nextButton = document.createElement('button');
  nextButton.className ='button center submit';
  nextButton.innerHTML='Next Word';
  document.getElementById('buttonhanger').append(nextButton); 
  nextButton.addEventListener('click', doMore);
  
  let inputForm=  document.getElementById('bucketListForm');
  inputForm.parentNode.removeChild(inputForm);
}

function doMore () {
  if (printedArray.length < passageArray.length) {
    let nextWord =  passageArray[printedArray.length];
    printedArray.push(nextWord);
    let updatedString = printedArray.join(' ');
    document.getElementById('word').innerHTML = updatedString;
  }
  else if (printedArray.length === passageArray.length) {
    printedArray = [];
    let nextWord =  passageArray[printedArray.length];
    printedArray.push(nextWord);
    let updatedString = printedArray.join(' ');
    document.getElementById('word').innerHTML = updatedString;
  }
}
