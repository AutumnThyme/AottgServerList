let tilesContainer = document.getElementById("tiles-container-id");

let addTile =  (parent, child) => {
    
    var lineBreak = document.createElement("br");
    parent.appendChild(child);
    parent.appendChild(lineBreak);
}

let removeAllChildren = (parent) => {
    var first = parent.firstElementChild;
    while (first) {
        first.remove();
        first = parent.firstElementChild;
    }
}

let UpdateRegion = region => {
    removeAllChildren(tilesContainer)
    fetch(`https://aottgbotapi.herokuapp.com/api/aottg/serverlist/${region}`)
    .then(response => response.json())
    .then(data => {
        // Do what you want with your data
        
        data.forEach(element => {
            var childElement = document.createElement("div");
            // element structure looks like
            keys = ["name", "difficulty", "map", "playerCount", "maxPlayers"]
            keys.forEach(key => {
                childElement.appendChild(document.createTextNode(`${key}: ${element[key]}`));
            });
            addTile(tilesContainer, childElement);
        });
    })
    .catch(err => {
        console.error('An error ocurred', err);
    });
}




