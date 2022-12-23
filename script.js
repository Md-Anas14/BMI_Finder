

 //bmi=w/h*h;
 function submit() {
    var weight=document.getElementById("weight").value;
    var height=document.getElementById("height").value;
     var bmi = weight / height ** height;
     var op = document.getElementById("output").style.display.block;
     //bmi=Math.round(bmi);
   bmi=bmi.toFixed(2);
  
   
    if (weight=="")
    {
        alert("please enter your weight");
        if (height=="")
        {
                 alert("please enter your height");
         }
    }
   
    else {
       
            document.getElementById("output").value = (bmi <= 19) ? ("BMI is" + " " + bmi + " ," + "you are lean") : ((bmi > 19 && bmi < 25) ? ("BMI is" + " ," + bmi + " " + "you are normal") : ("BMI is" + " " + bmi + ", " + "you are obesity"));
        
    
    
    }
   

 
    
}
