let output=document.querySelector("#output");

    function appendNumber(number){
        output.value+=number;
    }
    function appendOperator(operator) {
        const lastChar = output.value.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
            output.value = output.value.slice(0, -1) + operator;
        } else {
            output.value += operator;
        }
    }
    
    function clearOutput() {
        output.value = '';
    }
    
    function deleteLast(){
        output.value= output.value.slice(0,-1);
    }
    
    function calculate(){
        try{
            output.value= eval(output.value);
        }
        catch{
            output.value='error';
        }
    }

    function keyPress(event){

        const key= event.key;
        //if the key is a number
        if(!isNaN(key)){
            appendNumber(key);
        }
        //if it is an operator
        else if(['+','-','*','/'].includes(key)){
            appendOperator(key);
        }
        //calculate if key is enter
        else if(key==='Enter'){
            calculate();
        }
        //delete if key is backspace
        else if(key ==='Backspace'){
            deleteLast();
        }
        //clear if key is escape
        else if(key==='Escape'){
            clearOutput();
        }
    }

    document.addEventListener('keydown',keyPress)