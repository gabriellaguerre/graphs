// Write a function called breadthFirstSearch that takes two nodes as arguments and will traverse the given graph
// breadth-first, returning true if there is a path from the first node to the second, and false if there is not.

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: []
}

const breadthFirstSearch = (start, end) => {
    const queue = [start]

    let visited = new Set()
    visited.add(start)

    while(queue.length) {
        let current = queue.shift()

        if(current === end) return true

        let neighbors = adjList[current]

        for(let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i]
            if(!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }

    }
    return false

}



console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
