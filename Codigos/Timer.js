function colorTheme()
{
    var time = document.getElementById("horas");
    var a = document.getElementsByTagName("a");
    var header = document.getElementsByTagName("header")[0];
    
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    
    if(hour > 6 && hour <= 12) {
        header.style.backgroundColor = "#558564"
        document.body.style.backgroundColor = "#D4EAC8"

        for (let index = 0; index < a.length; index++) {
            document.getElementsByTagName("a")[index].style.color = "#F3A712"   
        }

    }else if (hour >= 18 || hour >= 0 && hour <= 6) {
        header.style.backgroundColor = "#0E1116"
        document.body.style.backgroundColor = "#374A67"
        
        for (let index = 0; index < a.length; index++) {
            document.getElementsByTagName("a")[index].style.color = "#CB9CF2"   
        }
    }
}