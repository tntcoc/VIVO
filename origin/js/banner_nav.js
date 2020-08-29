window.onload = function() {
    let url = "../json/data02.json";
    let request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function() {
        if (request.status == 200) {
            let json = JSON.parse(request.responseText);
            for(var i = 0; i < json.length; i++) {
                console.log(json[i].name);
                console.log(json);
            }
        }
    }
}