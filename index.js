
const container =  document.getElementById('container');
const clear = document.getElementById('clear');
let alerts = document.getElementById('alert');
const cells = 100;
const totalCells = cells * cells;
let paintEnabled = true;

for(i = 1; i <= totalCells; i++){

   const div=  document.createElement('div');
   div.classList.add('box');
   container.append(div);
   }
let changeGrid = ()=>{

    let size = document.getElementById('changeSize').value;
   
    if(size > 100){
        size = 100;
    }
    if(size < 16){
        size = 16;
    }
      document.documentElement.style.setProperty("--boxHeight", size);
}

const box = document.querySelectorAll('.box');

    box.forEach((box) =>{
        box.addEventListener('mouseover', ()=>{
            if (paintEnabled){
            box.style.backgroundColor = 'black';
            alerts.textContent = 'Press Space Bar to Disable brush'; 
            }
        })
    })
document.addEventListener('keydown', (e)=>{
    if(e.code === "Space"){
        e.preventDefault();
        paintEnabled =!paintEnabled;
        alerts.textContent = 'Brush Disabled'; 
    }      
});
clear.addEventListener('click', ()=>{
    const boxes = document.querySelectorAll('.box');
        boxes.forEach(b => b.style.backgroundColor = "rgb(246, 252, 252)");
})