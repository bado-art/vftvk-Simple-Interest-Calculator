.maindiv  {
     var rate = document.getElementById("principal").value;
     var  rate = document.getElementById("rate").value;
     var year = document.getElementById("years").value
     var intrest = principal * years * rate /100;
     var year = new Date() .getFullYEAR()+parseInt (years);

 }
 fuction updateRate(){
    var rateval = document getElementById("rate") .value;
        document.getElementById("rate_val") .innerText=rateval;
		}
 
