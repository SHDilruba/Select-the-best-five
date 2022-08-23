//================== players select option =========================//
const namesArray = [];

function display(selectedPlayerList){     
     const tableBody = document.getElementById('player-selection');
       tableBody.innerHTML = "";

      for(let i = 0; i < selectedPlayerList.length; i++){
       const name = namesArray[i].playerName;

       const tr = document.createElement('tr');
      tr.innerHTML = `
      <tr>
        <th>${i + 1 }</th>
        <td>${name}</td>
      </tr>      
     `
      if(i >= 5){
        alert('You have already selected 5 players');       
       }
     else{
      tableBody.appendChild(tr);
      }     
    }
 }

function selectButton(element){
   const playerName = element.parentNode.parentNode.children[0].innerText;

   const playersObj = {
   playerName: playerName
  }
   namesArray.push(playersObj);
   display(namesArray);
 }

function disable(x){
    x.disabled = true;
    x.style.backgroundColor = 'grey';
 }