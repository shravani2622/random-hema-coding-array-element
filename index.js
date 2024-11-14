//console.log("npm start")

let data = [
    "class 01 is HTML",
    "class 02 is Javascript",
    "class 03 is Node.js",
    "class 04 is Redux",
    "class 05 is React"
]

function getRandomData(){
    let randomIndex =Math.floor( Math.random() * data.length)
    //console.log(data[0])
    console.log(randomIndex)
    //console.log(data[randomIndex])
    return    data[randomIndex]

}
//getRandomData()
module.exports = getRandomData