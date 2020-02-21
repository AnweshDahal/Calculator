var exp = "";

function cls(){
    exp = "";
    show_i();
    document.getElementById("ans").innerHTML = "";
}

function one(){
    var num = 1;
    exp += num;
    show_i();
}          

function two(){
    var num = 2;
    exp += num;
    show_i();
}

function three(){
    var num = 3;
    exp += num;
    show_i();
}

function four(){
    var num = 4;
    exp += num;
    show_i();
}

function five(){
    var num = 5;
    exp += num;
    show_i();
}

function six(){
    var num = 6;
    exp += num;
    show_i();
}

function seven(){
    var num = 7;
    exp += num;
    show_i();
}

function eight(){
    var num = 8;
    exp += num;
    show_i();
}

function nine(){
    var num = 9;
    exp += num;
    show_i();
}

function zero(){
    var num = 0;
    exp += num;
    show_i();
}

function add(){
    var num = "+";
    exp += num;
    show_i();
}

function sub(){
    var num = "-";
    exp += num;
    show_i();
}

function prod(){
    var num = "*";
    exp += num;
    show_i();
}

function div(){
    var num = "/";
    exp += num;
    show_i();
}

function show_i(){
    document.getElementById("inp").innerHTML = exp;
}

function ans(){
    document.getElementById("ans").innerHTML = eval(exp);
}
