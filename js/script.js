const btn1 =document.getElementById("btn1");
btn1.onclick =function() {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
}

const btn =document.getElementById("btn");
btn.onclick =function() {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
}

$(document).ready(function(){
    $('.carousel').carousel({
        indicators: true
    });
    setInterval(function(){
        $('.carousel').carousel('next')
    }, 2000)
  });
