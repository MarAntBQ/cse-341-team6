const fs = require('fs');
const path = require('path');

const dataPath = path.join(
    path.dirname(require.main.filename), 
    'data', 
    'data.json'
);

const getDataFromFile = callBack => {
    fs.readFile(dataPath, (err, fileContent) => {
        if(err){
            callBack([]);
        } else {
            callBack(JSON.parse(fileContent));
        }
    })
}

module.exports = class jsonReader {
    
    static fetchAll(callBack) {
        getDataFromFile(callBack);
    }
}
