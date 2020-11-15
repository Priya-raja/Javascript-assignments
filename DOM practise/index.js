var header = document.getElementById('header')
// console.log(typeof header.style)
// console.log(Object.keys(header.style))
header.style.color ='blue'
document.body.style.backgroundColor = 'burlywood'

// use array to write ul in html
var animals = [
    "tiger",
    "Lion",
    "Deer",
    "Wolf"
]

var animalList = document.getElementById("animals")
for (let i= 0; i<animals.length; i++){
var newName = document.createElement("li")
newName.textContent = animals[i]
animalList.append(newName)
}
