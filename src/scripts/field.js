let plantsGrowingInField = []


export const addPlant = (seeds) => {
    if (Array.isArray(seeds)) {
        for ( const seed of seeds) {
            plantsGrowingInField.push(seed)
        }
        
    } else {
        plantsGrowingInField.push(seeds)
    }
    
}

export const usePlants = () => {
    return plantsGrowingInField.map(plant => ({...plant}))
}

