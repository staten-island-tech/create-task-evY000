const DOMSelectors ={
    btn : document.querySelectorAll(".button"),
    card : document.querySelectorAll(".Card"),
    alters : document.querySelector(".alter"),
    b1 :  document.querySelector("b1"),
    b2 :  document.querySelector("b2"),
    b3 :  document.querySelector("b3"),
    b4:  document.querySelector("b4"),
    b5 :  document.querySelector("b5"),
    b6:  document.querySelector("b6"),
    b7 :  document.querySelector("b7"),
    b8:  document.querySelector("b8"),
    b9 :  document.querySelector("b9"),

}

let TurnX = true
let TurnO = false
DOMSelectors.btn.forEach(button => {
    button.addEventListener("click", ()=>{
        if(TurnX === true, button.innerHTML === 'O'){
            alert('Not A valid Move')
            return;           }
        if(TurnX === true){
           button.innerHTML = 'X'
           TurnX = false
           TurnO = true
           Match()  
            }
            else{
                if(TurnO === true, button.innerHTML === 'X'){
                    alert('Not A valid Move')
                    return;}
              button.innerHTML = 'O'
                TurnX = true
                TurnO = false
                Match()
            }
            function Match(){
            if(b1.innerHTML === 'X' && b2.innerHTML === 'X' && b3.innerHTML ==='X'){
               alert('X Has Won!')
                };

            if(b4.innerHTML === 'X' && b5.innerHTML === 'X'&& b6.innerHTML ==='X'){
                alert('X Has Won!')};

            if(b7.innerHTML === 'X' && b8.innerHTML === 'X' && b9.innerHTML ==='X'){
                    alert('X Has Won!')};

            if(b1.innerHTML === 'X'&& b4.innerHTML === 'X' && b7.innerHTML ==='X'){
                        alert('X Has Won!')};

            if(b2.innerHTML === 'X' && b5.innerHTML === 'X' && b8.innerHTML ==='X'){
                        alert('X Has Won!')};

            if(b3.innerHTML === 'X'&& b6.innerHTML === 'X'&& b9.innerHTML ==='X'){
                        alert('X Has Won!')};

            if(b1.innerHTML === 'X'&& b5.innerHTML === 'X'&& b9.innerHTML ==='X'){
                        alert('X Has Won!')};

            if(b3.innerHTML === 'X'&& b5.innerHTML === 'X'&& b7.innerHTML ==='X'){
                        alert('X Has Won!')};
            if(b1.innerHTML === 'O' && b2.innerHTML === 'O' && b3.innerHTML ==='O'){
                            alert('O Has Won!')
                             };
             
                         if(b4.innerHTML === 'O' && b5.innerHTML === 'O'&& b6.innerHTML ==='O'){
                             alert('O Has Won!')};
             
                         if(b7.innerHTML === 'O' && b8.innerHTML === 'O' && b9.innerHTML ==='O'){
                                 alert('O Has Won!')};
             
                         if(b1.innerHTML === 'O'&& b4.innerHTML === 'O' && b7.innerHTML ==='O'){
                                     alert('O Has Won!')};
             
                         if(b2.innerHTML === 'O' && b5.innerHTML === 'O' && b8.innerHTML ==='O'){
                                     alert('O Has Won!')};
             
                         if(b3.innerHTML === 'O'&& b6.innerHTML === 'O'&& b9.innerHTML ==='O'){
                                     alert('O Has Won!')};
             
                         if(b1.innerHTML === 'O'&& b5.innerHTML === 'O'&& b9.innerHTML ==='O'){
                                     alert('O Has Won!')};
             
                         if(b3.innerHTML === 'O'&& b5.innerHTML === 'O'&& b7.innerHTML ==='O'){
                                     alert('O Has Won!')};
             

                }
        })
});
