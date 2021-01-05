
    // All constants
    const numberOfGrids = 4

        // Grid components
        const countNumber = 5
        const minNumber =1
        const maxNumber =49
        
        const countStar = 1
        const minStar =1
        const maxStar =10
    
    // Functions
    const getNumber = (min, max) => {
        limitMin = Math.ceil(min)
        limitMax = Math.floor(max)
        return Math.floor(Math.random() * (limitMax - limitMin +1)+ limitMin)
    }

    const addValueToArray = (arrayToCheck, min , max) =>{
        let isFound = false
        while (!isFound){
            let numberToCheck = getNumber(min,max)
            if(arrayToCheck.indexOf(numberToCheck)== -1){
            isFound = true
            arrayToCheck.push(numberToCheck)
            }
        }
    }

    const displayValues = (arraySource)=>{
        let valueToDisplay = ""
        for(let i =0 ; i<arraySource.length ;i++ ){
            valueToDisplay+=arraySource[i]
            if(i<arraySource.length-1){
                valueToDisplay+=","
            }
        }
        return valueToDisplay
    }

    const createAGrid = (grid, gridSize, min, max) => {
        for(let i = 0 ;i<gridSize;i++){
            addValueToArray(grid, min, max)
        }
        grid.sort(function(a, b){return a - b})
    }
    
    // Create Grids
const listOfLotoGrids = (numberOfGrids) =>{
    let allLotoGrids = ""

    for (let i = 0; i< numberOfGrids; i++){
        // get number
        const numberOfTheGrid = []
        createAGrid(numberOfTheGrid, countNumber, minNumber, maxNumber)
        
        // get stat 
        const starOfTheGrid = []
        createAGrid(starOfTheGrid,countStar, minStar, maxStar)
        
        // display values
        allLotoGrids+= displayValues(numberOfTheGrid)
        allLotoGrids+= " et "
        allLotoGrids+= displayValues(starOfTheGrid)
        allLotoGrids+="\n"
    }

    return allLotoGrids
}
console.log(listOfLotoGrids(numberOfGrids))

module.exports= {getNumber, addValueToArray, createAGrid}