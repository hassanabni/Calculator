const addBtns = document.querySelectorAll(".both");
let calculationBox = document.getElementById("calculations-box");
let clearBtn = document.getElementById("clear");
let deleteBtn = document.getElementById("delete");
let equalBtn = document.getElementById("equals");


function deleted(){
    if (calculationBox.value.length > 0) {
        // Remove the last character
        calculationBox.value = calculationBox.value.slice(0, -1);
      }
    }


clearBtn.addEventListener("click",()=>{
    calculationBox.value = "" ;
})


addBtns.forEach((box)=>{
      box.addEventListener("click",()=>{
        let result = box.value ;
        if(calculationBox.value == 0){
         calculationBox.value = result ;  
        }else{
            calculationBox.value += result
        }
        console.log(result);
      })
})

function showCalc(){
    equalBtn.addEventListener('click',()=>{
        try {
            // Evaluate the expression and display the result
            let new_value = eval(calculationBox.value);
            if(new_value % 1 !== 0){
                new_value = parseFloat(new_value.toFixed(3))
            }
            calculationBox.value = new_value
          } catch (error) {
            // Handle invalid expressions
            calculationBox.value = "Error";
          }
    })
}
showCalc();