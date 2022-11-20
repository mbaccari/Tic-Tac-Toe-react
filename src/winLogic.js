const checkWinner = (boxes, index, x, y, newVal) => {
    let checkX = [];
    let checkY = [];
    let checkD1 = [];
    let checkD2 = [];
    const arrays = [{X: checkX}, {Y: checkY}, {D1: checkD1}, {D2: checkD2}]

    for(let i = 0; i < boxes.length; i++) {
        console.log(`(${boxes[i].x}, ${boxes[i].y}) - ${i}`);
        if(boxes[i].x === x && boxes[i].y === y) {
            if(i === 2 || i === 4 || i === 6) {
                arrays[3].D2.push(newVal)
            }
            arrays[0].X.push(newVal);

            if(i === 0 || i === 4 || i === 8) {
                arrays[2].D1.push(newVal);
            }
            arrays[1].Y.push(newVal);
        } else if(boxes[i].x === x) {
            arrays[0].X.push(boxes[i].value)

        } else if(boxes[i].y === y) {
            arrays[1].Y.push(boxes[i].value)

        } else if(i===4) {
            arrays[3].D2.push(boxes[i].value)
            arrays[2].D1.push(boxes[i].value)
        } else if(i === 2 || i === 4 || i === 6) {
            arrays[3].D2.push(boxes[i].value)

        } else if(i === 0 || i === 4 || i === 8) {
            arrays[2].D1.push(boxes[i].value)
        }
        
    }
    let winner;
    arrays.map((p) => {
        const checkW = (object) => {
            if(object.every(e => e === object[0]) && object.length === 3) {
                winner = object[0]
            };
        }   

        if(p.X) checkW(p.X);
        if(p.Y) checkW(p.Y);
        if(p.D1) checkW(p.D1);
        if(p.D2) checkW(p.D2)
    })
    console.log(winner)
    return winner
}

module.exports = checkWinner;