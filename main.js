const DOMSelectors ={
    btn : document.querySelectorAll(".button"),
    card : document.querySelectorAll(".Card"),
    alters : document.querySelector(".alter")
}
let set = ["", "", "", "", "", "", "", "", ""]
const Win = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]]
let TurnX = true
let TurnO = false
DOMSelectors.btn.forEach(alter => {
    alter.addEventListener("click", ()=>{
        if(TurnX === true, alter.innerHTML === 'O'){
            alert('Not A valid Move')
            return;           }
        if(TurnX === true){
           alter.innerHTML = 'X'
           TurnX = false
           TurnO = true
           Match()
            
              
            }
            else{
                if(TurnO === true, alter.innerHTML === 'X'){
                    alert('Not A valid Move')
                    return;}
                alter.innerHTML = 'O'
                TurnX = true
                TurnO = false
                Match()
            }
        })
});
function Match(){
    console.log('hi')
}