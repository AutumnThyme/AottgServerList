let tilesContainer = document.getElementById("tiles-container-id");

let addTile =  (parent, child) => {
    var childElement = document.createElement("div");
    childElement.appendChild(document.createTextNode(child));
    var lineBreak = document.createElement("br");
    parent.appendChild(child);
    parent.appendChild(lineBreak);
}

let removeAllChildren = (parent) => {
    var first = parent.firstElementChild;
    while (first) {
        first.remove();
        first = e.firstElementChild;
    }
}

let UpdateRegion = region => {
    removeAllChildren(tilesContainer)
    fetch(`https://aottgbotapi.herokuapp.com/api/aottg/serverlist/${region}`)
    .then(response => response.json())
    .then(data => {
        // Do what you want with your data
        response.forEach(element => {
            // element structure looks like
            keys = element.keys();
            tileText = ""
            keys.forEach(key => {
                tileText += `${key}: ${element[key]}\n`
            });
            addTile(tilesContainer);
        });
    })
    .catch(err => {
        console.error('An error ocurred', err);
    });
}



