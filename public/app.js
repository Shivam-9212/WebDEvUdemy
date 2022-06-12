let bar = document.querySelectorAll(".bar");
for(var i = 0; i < 7; i++){
  bar[i].addEventListener("mouseover", function( event ) {
    this.style.backgroundColor = "black";
  });
  }
  const file = require('./data.json');
  const data = JSON.parse(file);
  data.spends.amount;
