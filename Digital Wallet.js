const currentInput = document.querySelector("#currentInput");
const futureInput = document.querySelector("#futureInput");
const walletProgressBar = document.querySelector("#totalBar");
const goalWallet = document.querySelector("#goalWallet");


//********* WALLET HEADER
let currentBank = 0;
let futureBank = 0;

//currentInput Progress Bar
currentInput.addEventListener("change", (e) => {
  
  currentBank = Number(currentInput.value);
  console.log("Current Amount: " + currentBank);
  walletProgressBar.value = currentBank;
  //currentInput.value = "$" + currentBank; 
});

//futureInput Progress Bar
futureInput.addEventListener("change", (e) => {
  
  futureBank = Number(futureInput.value);
  console.log("Future Amount: " + futureBank);
  walletProgressBar.max = futureBank;
  
  let goalDiff = futureBank - currentBank;
  console.log(goalDiff);

  if(goalDiff < 0){
    goalWallet.innerHTML = "You reached your goal!"
  }
  else{
    goalWallet.innerHTML = `You are $${goalDiff} away from your goal!`
  }
  //futureInput.value = "$" + futureInput.value; 
});

//**********


//********* ADDING CARDS
const orderDiv = document.querySelector(".order");
const plusButton = document.querySelector("#plusButton");

plusButton.addEventListener("click", (e) => {

  orderDiv.innerHTML += ` <div id="editCard" class="cardx">

      <p>Category: </p>
        <input
          id="categoryInput"
          class="input is-primary is-normal"
          type="text"
          placeholder="What is this budget for?"
        />

      <p>Budget: </p>
        <input
          id="budgetInput"
          class="input is-primary is-normal"
          type="number"
          placeholder="How much is your budget?"
        />

    
      <button id="submitButton">Submit</button>
      </div>
      
          <div id="presentCard" class="cardx hidden">
      <p id="category" class="title is-3">Groceries </p>
      <p id="budget" class="title is-4">Your Budget: $500 </p>
      <p class="title is-4">Amount left: $150  </p>

       <input
          id="investedAmount"
          class="input is-primary is-normal"
          type="number"
          placeholder="Enter Amount Invested"
        />

      <button id="editButton">Edit</button>
      </div>
      
      `;

});

const categoryInput = document.querySelector("#categoryInput");
const budgetInput = document.querySelector("#budgetInput");
const category = document.getElementById("#category");
const budget = document.getElementById("#budget");
const submitButton = document.querySelector("#submitButton")
const editButton = document.querySelector("#editButton")
const amountInvested = document.querySelector("#amountInvested")


  categoryInput.addEventListener("change", (e) =>{
    //changing the input values for category
    category.innerHTML = categoryInput.value;
  });

  budgetInput.addEventListener("change", (e) =>{
    //changing the input values for budget
    budget.innerHTML = budgetInput.value;
  });


  submitButton.addEventListener("click", (e) =>{
    
    
    document.querySelector("#presentCard").classList.remove("hidden");
    document.querySelector("#editCard").classList.add("hidden");
    
  });

  editButton.addEventListener("click", (e) =>{
    //storing the edited input values for category and budget

    document.querySelector("#editCard").classList.remove("hidden");
    document.querySelector("#presentCard").classList.add("hidden");
    
  });
  


//*********
