function ContLen3(obj){
    let size = 10;
    document.getElementById("checkSymbols").innerHTML = "Осталось&nbsp;символов:&nbsp;" + (size - document.getElementById("symbols2").value.length);
    if(size - document.getElementById("symbols2").value.length < 0){
        document.getElementById("checkSymbols").innerHTML =
        "<span style=\"color: red;\">Превышено&nbsp;символов:&nbsp;" + ((size - document.getElementById("symbols2").value.length)*-1)+"</span>"
    }
}