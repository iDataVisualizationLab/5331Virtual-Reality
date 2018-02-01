var cars = [{name: "A", value: 11}, {name:"B", value: 6}, {name: "C", value: 3}];

cars[2] ={name: "CCC", value: 1234};

cars.sort( function(a, b){
    if (a.value>b.value)
        return 1;
    else
        return -1;
});

var text = "<ul>";
for (var i=0; i<cars.length;i++){
    text+="<li>"+cars[i].value+"</li>";
}
text += "</ul>";

document.getElementById("item").innerHTML = text;