import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)
// const cornSeed = createCorn()
// console.log(cornSeed)
// const potatoSeed = createPotato()
// console.log(potatoSeed)
// const soybeanSeed = createSoybean()
// console.log(soybeanSeed)
// const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)
// const wheatSeed = createWheat()
// console.log(wheatSeed)


// console.log("Welcome to the main module")


// const plants1 = addPlant(asparagusSeed)
// console.log(plants1)

// const plants2 = usePlants()
// console.log(plants2)

const yearlyPlan = createPlan()
console.log(yearlyPlan)

plantSeeds(yearlyPlan)
let plants = usePlants()
console.log(plants)

const harvestingPlants = harvestPlants(plants)
// console.log(harvestingPlants)

const plantCatalog = Catalog(harvestingPlants)
console.log(plantCatalog)


document.querySelector(".container").innerHTML += plantCatalog
