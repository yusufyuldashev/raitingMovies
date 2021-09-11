let data = [
    {
        title: "Shazam !",
        raiting: 3,
        description: "lorem ipsum dolor sit amet."
    },
    {
        title: "Capitan Marvel !",
        raiting: 1,
        description: "lorem ipsum dolor sit amet."
    },
    {
        title: "Escape Room",
        raiting: 5,
        description: "lorem ipsum dolor sit amet."
    },
    {
        title: "Dumboo",
        raiting: 1,
        description: "lorem ipsum dolor sit amet."
    }
]

data.forEach((movie) =>{
    let newLI = document.createElement("li")
    let line = document.createElement("span")
    let underline = document.createElement("span")
    newLI.className = "item"
    line.className  = "line"
    underline.className ="underline"
    newLI.innerHTML = `
    <h3 class = main-title >${movie.title}</h3>
    <p class  = main-text>${movie.description}</p>
    <span>Raiting:  ${movie.raiting}</span>
    `
    underline.style.width = (Math.ceil(movie.raiting * 100)/25) + "%"
    line.appendChild(underline)
    newLI.appendChild(line)
    box.appendChild(newLI)
    
    
    

    let raiting = 0
    function  me() {
        line.click(function(){
           raiting += 1
        });
        console.log()
        
    }
    
})






















// var orders = [
//   {amount:24},
//   {amount:35},
//   {amount:48},
//   {amount:559},
// ]


// var total=orders.reduce((x,orders)=>x+orders.amount,0)
// console.log(total)




// var total = 0

// for(i= 0;i<orders.length; i++){
//     total +=orders[i].amount
// }
// console.log(total)







// var animals = [
//    {name:'caro',species:'dog'},
//    {name:'hamilton', species:'fish'}
// ]


// var animal = []
// for(i=0;i<animals.length; i++){
//     animal.push(animals[i])

// }
// console.log(animal)
// animals.forEach( (x) =>{
//     console.log(x)
// })
// var animal = animals.map( (x) => x.name )
// console.log(animal)


// var dogs = animals.filter(function(animal){
//     return animal.name === 'hamilton'
// })

// console.log(dogs)


// var dogs = animals.filter( (animal) =>{
//     return animal
// })
// console.log(dogs)


//  var isDog = function(animal){
//    return animal.name === 'caro'
// }
// var dogs = animals.filter(isDog)
// var otheranimal = animals.reject(isDog)
// console.log(otheranimal)






// var dogs = []

// for(i=0;i<animals.length;i++){
//     if(animals[i].name === 'caro'){
//      dogs.push(animals[i])
    
//     }    
// }
// console.log(dogs)