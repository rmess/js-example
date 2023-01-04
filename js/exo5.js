//Ecrire une fonction qui permet d'afficher chaques case d'un tableau
let myArray = [1,2,3,4,5,6,7,8,9,0];
let tata 
let toto = []

function displayArray(x){
    if(x !== null) {
        for(let i=0; i < x.length; i++){
            if(x[i] !==null) {
                console.log(x[i])
            }
            else {
                console.log("la donnée est nulle")
            }
        }
    }
}

displayArray(myArray)