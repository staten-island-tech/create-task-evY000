const DOMSelectors ={
    buttons : document.querySelectorAll(".button"),
    boxs : document.querySelectorAll(".Box"),
    card : document.querySelectorAll(".Card"),
    alter : document.querySelectorAll("alter")
}
let set = ["", "", "", "", "", "", "", "", ""]
const Win = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]]
let TurnX = true
let TurnO = false


Play()

function Play(){
    const X = document.createElement("<h2>  X </h2>")
const O = document.createElement("<h2> O </h2>")
    DOMSelectors.buttons.forEach((alter) => {
        alter.addEventListener("click", () =>{
            console.log('test')
                if(TurnX = true){
                DOMSelectors.alter.insertAdjacentElement("beforebegin", X)
                TurnX = false
                TurnO = true
            }
            else {
                DOMSelectors.alter.insertAdjacentElement("beforebegin", O)
                TurnX = true
                TurnO = false
            }
        
            }
      )  })
    
}
/*  function X(){ 
    DOMSelectors.buttons.forEach((btn) => {
        btn.addEventListener("click", () =>{;
    
        if(
            box.innerText = 'O'){
                box.insertAdjacentHTML("beforeend", `<h2>"X"</h2>`)
             console.log("This Space is already taken")}
            else {
                box.innerText = "X"
                    turn="O";
        if(
             box.innerText = 'X'){
                box.insertAdjacentHTML("beforeend", `<h2>"O"</h2>`)
                console.log("This Space is already taken")}
                else {
                 box.innerText = "O"
                    turn="X";
 }}})})
 }; */
 

     /* DOMSelectors.button.forEach(button=> 
        button.addEventListener("click",()=> {
            console.log("hi")
        })
    );}  */
 /* DOMSelectors.button.addEventListener("click", function(){
    console.log("hi")
})
}  */
