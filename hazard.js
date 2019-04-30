/* eslint-disable strict */
function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return function(location){
        warningCounter = warningCounter + 1;
        console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`);
        console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"`);
};
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const iceWarning = hazardWarningCreator('Ice on the Road');
const treeWarning = hazardWarningCreator('Fallen Tree on the Road');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Main St and 2nd Ave');

iceWarning('Ocean and Front St');
iceWarning('I-95');
 
treeWarning('Everywhere');
treeWarning('Lee Ave and Harper St');