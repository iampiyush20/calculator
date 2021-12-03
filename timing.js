var screen = document.getElementById('screen');
var buttons = Array.from(document.querySelectorAll('button'));

buttons.map(button => {
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'AC':
                screen.innerText="";
                break;
            case 'cut':
                screen.innerText=screen.innerText.slice(0,-1);
                      break;

            case '=':   
                screen.innerText=eval(screen.innerText); 
                break;         
            default:
                screen.innerText += e.target.innerText
        }
    })
})