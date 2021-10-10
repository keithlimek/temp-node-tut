const path = require('path')

console.log(path.sep)

const filePath = path.join('/part 2', 'text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'part 2', 'test.txt')
console.log(absolute)