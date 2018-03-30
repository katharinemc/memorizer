function addItem() {
  const adventure = document.getElementById("search").value;
  const li = document.createElement('li');
  li.innerHTML = adventure;
  document.getElementById("bucketList").append(li);
}

$(addItem);




let cumulativeArray = [];
 let passageArray = [];

  function addItem() {

  const passage = document.getElementById("search").value;
  // const passage = "Four score and seven years ago our fathers brought forth on this continent a nation";
   passageArray = passage.split(" ");
 
    

   for(i = 0; i < passageArray.length; i++) {
   
    const passageParagraph = document.createElement('p');
    passageParagraph.id = "position" + i;
    passageParagraph.innerHTML = passageArray[i];
    document.getElementById("bucketList").append(passageParagraph);
    return cumulativeArray = cumulativeArray + " " + passageArray[i];
    
     }
}

function doMore () {
   for(i = 0; i < cumulativeArray.length; i++)  {
    cumulativeArray = cumulativeArray + " " + passageArray[i];
    const additionalText = document.createElement('p');
    additionalText.id = "position" + (i+1);
    additionalText.innerHTML = cumulativeArray;
    document.getElementById("position" + i).append(additionalText);
   
   }



  alert("I'm a button!");
    const nextParagraph =  document.createElement('p');
    nextParagraph.innerHtml = cumulativeArray;
   document.getElementById("position0").append(nextParagraph);
}         