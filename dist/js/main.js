var expression = document.getElementById("expression");
var result = document.getElementById("result");

window.onkeydown = function(e){
    // this.alert(e.keyCode)
        if(e.keyCode == 13){
            document.getElementById("ans").click();
        } else if(e.keyCode == 27){
            this.document.getElementById("cls").click();
        }
    }

function focusExp(){
    expression.focus();
}
function buttonClick(object){
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