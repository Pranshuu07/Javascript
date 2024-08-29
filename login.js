function marks(){

    
     english = parseInt(document.getElementById("english").value);
     maths = parseInt(document.getElementById("maths").value);
     economics = parseInt(document.getElementById("economics").value);
     computer = parseInt(document.getElementById("computer").value);
     datas = parseInt(document.getElementById("datas").value);


     total = english + maths + economics + computer + datas;
     div = total/150*100

   document.write("Total Marks Scored = " +total +"<br>" +"<br>");
   document.write("Percentage Obtained = " +div +"%" +"<br>" +"<br>");

if(div>70){
    document.write("You Scored A Grade");
}
else if (div<70 && div>60){
    document.write("You Scored B Grade");
}
else if (div<60 && div>40){
    document.write("You Scored C Grade");
}
else {
    document.write("You are fail");
}

}