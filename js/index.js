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
 //======================== budget option =================//
 
 document.getElementById('btn-calculate').addEventListener('click', function(){

  const perPlayerAmountField = document.getElementById('player-amount-field');
  const perPlayerAmountString =  perPlayerAmountField.value; 
  const  perPlayerAmount = parseFloat(perPlayerAmountString);
  
  const playerExpensesAmountElement = document.getElementById('player-expenses-total'); 
  const playerExpensesTotal = perPlayerAmount * 5;  
  playerExpensesAmountElement.innerText =  playerExpensesTotal;

//=================== total expenses ============================//

 document.getElementById('btn-calculate-total').addEventListener('click', function(){

  const managerAmountField = document.getElementById('manager-amount');
  const managerAmountString = managerAmountField.value; 
  const  managerAmount = parseFloat(managerAmountString);

 
  
  const coachAmountField = document.getElementById('coach-amount');
  const coachAmountString = coachAmountField.value;
  const coachAmount = parseFloat(coachAmountString);

  const expensesTotalElement = document.getElementById('expenses-total');

  const expensesTotal =  playerExpensesTotal + managerAmount + coachAmount;
     expensesTotalElement.innerText = expensesTotal;
  })

 })