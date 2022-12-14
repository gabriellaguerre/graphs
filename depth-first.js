// Write a function called printDepthFirst that will traverse the given graph depth-first,
// printing each node when visited exactly once, on a newline.

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

const printDepthFirst = (start) => {
    let stack = [start]

    let visited = new Set()
    visited.add(start)

    while (stack.length) {
        let current = stack.pop()
        console.log(current)

        let neighbors = adjList[current]

        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i]
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                stack.push(neighbor)
            }
        }
    }

}

console.log("First Test:")
printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
// One possible solution:  3, 4, 6, 5, 1, 2
console.log("Second Test:")
printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
// One possible solution:  6, 4, 5, 2, 1, 3
console.log("Third Test:")
printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
// One possible solution:  4, 6, 5, 2, 1, 3
