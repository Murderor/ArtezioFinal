function raznost(){
    var today = new Date();
    var today2 = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var event = new Date(document.getElementById("year").value, document.getElementById("month").value - 1, document.getElementById("days").value)
    console.log(event)
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("toDay").innerHTML = "<i>Сегодня:</i> "+ today;
    var diff = Math.floor((today2.getTime() - event.getTime())/(1000*60*60*24));
    var result =""
    years = Math.trunc(diff/365)
    month = Math.trunc((diff-(years*365))/31)
    days = diff - ((years*365)+(month*31))
    if(years != 0){
        result += years + " Лет; ";
    }
    if(month != 0){
        result += month + " Месяцев; ";
    }
    if(days != 0){
        result += days + " дней; ";
    }
    document.getElementById("result").innerHTML = "Разность дат: " + result;
}


function initialize(){
    moth = document.getElementById("month")
    if(moth.value == 1 || moth.value == 3 || moth.value == 5 || moth.value == 7 || moth.value == 8 || moth.value == 10 || moth.value == 12){
        var string ="";
        for(let i = 1; i< 32; i++){
            string += "<option value="+i+">"+i+"</option>"
        }
        document.getElementById("days").innerHTML = string
    }
    else if(moth.value == 2){
        var string ="";
        for(let i = 1; i< 29; i++){
            string += "<option value="+i+">"+i+"</option>"
        }
        document.getElementById("days").innerHTML = string
    }
    else{
        var string ="";
        for(let i = 1; i< 31; i++){
            string += "<option value="+i+">"+i+"</option>"
        }
        document.getElementById("days").innerHTML = string
    }
}
function yearsint(){
    var string ="";
        for(let i = 1970; i< 2024; i++){
            string += "<option value="+i+">"+i+"</option>"
        }
        document.getElementById("year").innerHTML = string
}