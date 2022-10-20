// define and export a function harvestPlants
// it accepts an array of plants as a input
// an array of seed objects gets returned
// iterate over the array of growing plants with a for loop
// each plant gives a value of the output property
// plantObject gets added to the array the function returns
// CORN IS AN EXCPETION half to be sold to cattle farmer
// other half will be added to the array the function returns
// 
// 
// 
// 

export const harvestPlants = (plantsArray) => {
    let output = ""
    let seedObjects = [];
    for (const plant of plantsArray) {
        if (plant.type === "Corn"){
            output = plant.output/2
        } else {
            output = plant.output
        }
        for ( let i = 0; i < output; i++) {
            seedObjects.push(plant)
        }
    }
    return seedObjects
}