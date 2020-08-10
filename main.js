let screen = document.getElementById('screen');
buttons = document.querySelectorAll("button");
let screenValue = '';

for (item of buttons) {
  item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(screen.value);
        
     if(buttonText=="del"){
       screenValue="";
       screen.value=screenValue;
     }
    else if (buttonText == 'check') {
        switch (screenValue) {
          case 'bal':
            screen.value = "1%";
            break;
          case 'magi':
            screen.value = "25%";
            break;
          case 'sala':
            screen.value = "1%";
            break;
          case 'magir bachchha':
            screen.value = "99%";
            break;
          case 'bokachoda':
            screen.value = "5%";
          case 'balphata':
            screen.value = "20%";
          case 'haramjada':
            screen.value = "5%";
          case 'harami':
            screen.valur = "3%";
          default:
            screen.value = `choose the correct one!`;
            break;
        }
      
     }
    else{
      screenValue+=buttonText;
      screen.value= screenValue;
    }
  })
  
}
