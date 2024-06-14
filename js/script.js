const btn1 =document.getElementById("btn1");
btn1.onclick =function() {
    
        let text;
        let person = prompt("Please enter your name: \nWnen would you like your demo", "John Doe");
        if (person == null || person == "") {
          alert("User cancelled the prompt.");
        } else {
          alert("Hello " + person + " Thank you!\n Demo Confirmed");
        }
}

const btn =document.getElementById("btn");
btn.onclick =function() {
    alert('CALL US ON 0559196426');
}

$(document).ready(function(){
    $('.carousel').carousel({
        indicators: true
    });
    setInterval(function(){
        $('.carousel').carousel('next')
    }, 2000)
  });
