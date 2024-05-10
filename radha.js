function appendToDisplay (a){
    document.getElementById('display').value+=a;
    
}
function clearDisplay(){
    document.getElementById('display').value='';
}

function calculateResult(){
    const expression= document.getElementById('display').value;
    const result = eval (expression)
    document.getElementById('display').value=result;
}
