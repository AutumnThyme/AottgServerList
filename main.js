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
            childElement.classList.add("tile");
            // element structure looks like
            keys = ["difficulty", "map"]

            var header = document.createElement("h4");
            header.textContent = `Name: ${element["name"]} [${element["playerCount"]}/${element["maxPlayers"]}]`;
            childElement.appendChild(header);
           
            keys.forEach(key => {
                var details = document.createElement("p");
                details.textContent = `${key}: ${element[key]}`;
                childElement.appendChild(details)
            });
            addTile(tilesContainer, childElement);
        });
    })
    .catch(err => {
        console.error('An error ocurred', err);
    });
}

window.onload = () => {
    UpdateRegion("Europe");
}




