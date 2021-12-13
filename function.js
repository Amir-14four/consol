// 'use strict'

// function randomNambur(multiplyBy) {

//     return Math.floor(Math.random() * multiplyBy);

// }
// function popuLateUnorderList(elementId,input) {
//     const list = document.getElementById(elementId);
//     const li = document.createElement('li');
//     li.innerHTML = input;
//     list.appendChild(li);
// }
// popuLateUnorderList("liste","hallo");







//schreib die function sodass ein array belibiger lange
//ubergeben werden kann. fuer jedes element des array soll ein neues <li>
//element erzeugt und liste hinzugefugt werden


// function generateList() {
//     const newList = document.createElement('ul');
  
//     for (let i = 0;  i<'lord of the ring'.length; i++) {
//       const book = 'lord of the ring'[i];
//       newList.innerHTML += `<li>${book}</li>`; 
//     }
  
//     return newList;
//   }
  
//   document.body.append(generateList());

  function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}