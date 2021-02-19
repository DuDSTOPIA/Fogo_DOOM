const firePixelsArray = []
const fireWidth = 2
const fireHeight = 3

function start() {
    createFireDataStructure()
    console.log()
}

function createFireDataStructure() {
    const numberOfPixels = fireWidth * fireHeight

    for(let i = 0; i < numberOfPixels; i++) {
        firePixelsArray[i] = 0
    }
}

function calculateFirePropagation() {

}

function renderFire() {

}

start()