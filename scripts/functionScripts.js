let data = []

function addData() {
    let inputData = Number(document.getElementById('dataInput').value);

    if (isNaN(inputData)) {
        alert("ERROR: Please enter a number");
    }
    else {
        data.push(inputData)
        printData();
        meanCalc();
    }
}

function removeData() {
    let inputData = Number(document.getElementById('dataInput').value);
    if (isNaN(inputData)) {
        alert("ERROR: Please enter a number");
    }
    for (let i = 0; i < data.length; i++) {
        if (inputData === data[i]) {
            data.splice(i, 1);
            printData();    // Updating html
            meanCalc();
            return;
        }
    }
    alert("ERROR: Number does not exist");
}

function printData() {  // creating output show in card/dice presentation
    let output = '<p>'
    for (let i = 0; i < data.length; i++) { // Trad for loop: c++ preference lol
        output += data[i] + ", ";
    }
    document.getElementById('printDataArray').innerHTML = output + '</p>';
}
// Turned into a function so both other functions can access without repeating :)

function meanCalc() {
    if (data.length === 0) {
        let noData = '<p>';
        noData += " ";
        document.getElementById('printMeanCalc').innerHTML = noData + '</p>';
    }
    let numTotal = 0;
    for (let i = 0; i < data.length; i++) {
        numTotal += data[i];
    }
    let output = '<p>';
    output += numTotal / data.length;
    document.getElementById('printMeanCalc').innerHTML = output + '</p>';
}

function clearData() {
    data.length = 0;
    printData();
    meanCalc();
}