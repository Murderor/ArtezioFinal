function ContLen2(obj){
    let ta = document.getElementById("Task2TA")
    var stringText = ta.value.replace(/\n/," ").replace(/\W/gi, " ").replace(/\s{2,}/gi, " ").replace(/ $/, "").replace(/^ /,"");
    var text_array = stringText.split(" ");
    document.getElementById("Task2words").innerHTML = "Количество&nbsp;слов:&nbsp;" + text_array.length;
    document.getElementById("Task2Symbols").innerHTML = "Количество&nbsp;символов:&nbsp;" + ta.value.length;
    document.getElementById("Task2Rows").innerHTML = "Количество&nbsp; строк:&nbsp;" + ta.value.split('\n').length;
}