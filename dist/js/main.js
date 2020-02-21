var expression = document.getElementById("expression");

var result = document.getElementById("result");

function buttonClick(object){
    // console.log("Helo")
    if (object.value == "cls"){
        expression.value = "";
        result.value = 0;
    } else if (object.value == "ans"){
        try {
            result.value = eval(expression.value);
        } catch (error) {
            result.value = "Syntax Error"
        }
    } else{
        expression.value += object.value;
    }
    
}