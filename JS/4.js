function ContLen4(obj){
    let size = 10;
    var chBox = document.getElementById("inBlock");
    document.getElementById("checkSymbols2").innerHTML = "Осталось&nbsp;символов:&nbsp;" + (size - document.getElementById("symbols3").value.length);
    var str = document.getElementById("symbols3").value;
    if(size - document.getElementById("symbols3").value.length < 0 && !chBox.checked){
        document.getElementById("checkSymbols2").innerHTML =
        "<span style=\"color: red;\">Превышено&nbsp;символов:&nbsp;" + ((size - document.getElementById("symbols3").value.length)*-1)+"</span>"
    }
    else if(size - document.getElementById("symbols3").value.length < 0){
        document.getElementById("checkSymbols2").innerHTML ="Осталось&nbsp;символов:&nbsp;0"
        document.getElementById("symbols3").value = document.getElementById("symbols3").value.slice(0,-1);
    }
}