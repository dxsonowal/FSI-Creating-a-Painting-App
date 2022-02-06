let selectedColor = 'white'

const painting = document.querySelector('.painting')

let clearButton = document.createElement('button')
clearButton.textContent = 'Clear'
document.body.appendChild(clearButton)

clearButton.addEventListener('click', function(){
 const allPixel = document.querySelectorAll('.pixel')

 for (i=0; i < allPixel.length ; i++){
     if (allPixel [i].style.backgroundColor !== 'white'){
        allPixel[i].style.backgroundColor ='white'
     } 
 }
    painting.style.backgroundColor = 'black'
 document.body.style.backgroundColor ='white'
})

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor 
})
//Double click pixel
painting.addEventListener('dblclick', function(e){
    selectedColor = 'white'
    e.target.style.backgroundColor = 'white' 
})
// Create Blue color pallet object
let colorBlue = document.getElementById('blue')
//Add click event to Blue pallet
colorBlue.addEventListener('click', function(){
    selectedColor = 'blue'
})

let colorRed = document.getElementById('red')
colorRed.addEventListener('click', function (){
    selectedColor = 'red'
})

let colorYellow = document.getElementById ('yellow')
colorYellow.addEventListener('click', function(){
    selectedColor = 'yellow'
})
let colorGreen = document.getElementById('green')
colorGreen.addEventListener('click', function(){
    selectedColor = 'green'
})
let colorPurple = document.getElementById('purple')
colorPurple.addEventListener('click', function(){
    selectedColor = 'purple'
})