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
            screen.value = "10%";
            break;
          case 'magi':
            screen.value = "80%";
            break;
          case 'sala':
            screen.value = '20%';
            break;
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
