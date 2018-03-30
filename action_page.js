let passageArray = [];
let printedArray =[]; 

  function addItem() {

  const passage = document.getElementById("search").value;
  // const passage = "Four score and seven years ago our fathers brought forth on this continent a nation";
   passageArray = passage.split(" ");
 
   for (i=0; i <passageArray.length; i++) {
      if (printedArray !== passageArray) {
      let nextWord = document.createElement('p');
      nextWord.innerHTML = printedArray + passageArray[i];
      printedArray.push(passageArray[i]);
      document.getElementById("bucketList").append(nextWord);
       }
  }
  }            
