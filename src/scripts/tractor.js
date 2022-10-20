import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant }  from "./field.js"

export const plantSeeds = (plantingPlan) => {
 for ( const sowingSeed of plantingPlan) {
    for (const seeds of sowingSeed) {
        if (seeds === "Asparagus" ) {
            const seed = createAsparagus()
            addPlant(seed)
        } else if (seeds === "Corn" ) {
           const seed = createCorn()
           addPlant(seed)
        } else if (seeds === "Potato" ) {
           const seed = createPotato()
            addPlant(seed)
        } else if (seeds === "Soybean" ) {
           const seed = createSoybean()
            addPlant(seed)
        } else if ( seeds === "Sunflower" ) {
            const seed =createSunflower()
            addPlant(seed)
        } else  {
            const seed = createWheat()
            addPlant(seed)
        
        }
    }

 }
}