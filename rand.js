function rand() {

    var url = "https://api.random.org/json-rpc/2/invoke";
    var n = 0;
    var min = 0;
    var max = 0;
    console.log(typeof n);

    n = Number(document.getElementById("n").value);
    min = Number(document.getElementById("min").value);
    max = Number(document.getElementById("max").value);

    console.log(typeof n);
    console.log(n + min + max);
    
    var params = {
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
            "apiKey": "00d79163-e0e4-405d-ba4e-859df106d6eb",
            "n": n,
            "min": min,
            "max": max,
            "replacement": false
        },
        "id": 0
    }

    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(params)
    }

    console.log(options);

    fetch(url, options)
        .then(function (response) {
            var a = response.json()
            console.log("T1");
            console.log(a);
            return a;
        })
        .then(function (data) {
            console.log("T2");
            var list = document.getElementById("list");

            for (var i = list.children.length; i > 0; i--)
                list.children[0].remove();

            for (var i = 0; i < data.result.random.data.length; i++) {
                var element = document.createElement('li');
                element.innerText = data.result.random.data[i];
                console.log(list.appendChild(element));
            }
        })
        .catch(function (error) {
            console.log("error", error);
        });



}