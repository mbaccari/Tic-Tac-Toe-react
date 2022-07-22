const checkWinner = (boxes, index, x, y, newVal) => {
    let checkX = [];
    let checkY = [];
    let checkD1 = [];
    let checkD2 = [];
    const arrays = [checkX, checkY, checkD1, checkD2]

    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].x === x && boxes[i].y === y) {
            arrays.forEach((e) => e.push(newVal))
        } else if(boxes[i].x === x) {
            checkX.push(boxes[i].value)
        } else if(boxes[i].y === y) {
            checkY.push(boxes[i].value)
        }
        if(boxes[i].value !== ' ') {
            if(i === 2 || i === 4 || i === 6) {
                checkD2.push(boxes[i].value)
            }
            if(i === 0 || i === 4 || i === 9) {
                checkD1.push(boxes[i].value)
                console.log(checkD1)
            }
        }
    }
    let winner;
    arrays.forEach((p) => {
        if(p.every(e => e === p[0]) && p.length === 3) {
            console.log(p[0] + ': boogaloo')
            winner = p[0]
        };
    })

    return winner
}

module.exports = checkWinner;