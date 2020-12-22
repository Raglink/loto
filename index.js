const listOfLotoGrids = (numberOfGrids) =>{
    let allLotoGrids = ""
    const countNumber = 5
    const minNumber =1
    const maxNumber =49

    const countStar = 1
    const maxStar =1
    const minStar =10

    const getNumber = (min, max) => {
        limitMin = Math.ceil(min)
        limitMax = Math.floor(max)
        return Math.floor(Math.random() * (limitMax - limitMin +1)+ limitMin)
    }

    for (let i = 0; i< numberOfGrids; i++){
        // get number
        for(let j = 0 ;j<countNumber;j++){
            allLotoGrids += getNumber(minNumber,maxNumber)
            if(j <countNumber - 1){
                allLotoGrids += " , "
            }
        }
        // get stat 
        for (let j =0; j<countStar; j++){
            allLotoGrids +=` et ${getNumber(minStar,maxStar)} \n`

        }

    }

    return allLotoGrids
}
console.log(listOfLotoGrids(4))