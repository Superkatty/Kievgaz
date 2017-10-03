var objectMas = [
    {
        data: 12
    },
    {
        data: 10
    },
    {
        data: 5
    },
    {
        data: 100
    },
    {
        data: 7
    },
    {
        data: 30
    }
];
console.log("Початковий масив:");
for (var i = 0; i < objectMas.length; i++) {
    console.log(objectMas[i].data);
}


//Sort #1
var objectMasSort = objectMas.slice()
console.log("Відсортований масив:");
var temp;
for (var i = 0; i < objectMasSort.length; i++) {
    for (var j = i; j < objectMasSort.length; j++) {
        if (objectMasSort[i].data > objectMasSort[j].data) {
            temp = objectMasSort[i];
            objectMasSort[i] = objectMasSort[j];
            objectMasSort[j] = temp;
        }
    }
}

//Sort #2
objectMasSort.sort(function (obj1, obj2) { return obj1.data > obj2.data });
for (var i = 0; i < objectMasSort.length; i++) {
    console.log(objectMasSort[i].data);
}

//Range
var objectInRange = [];
var min = 11;
var max = 60;
console.log("Масив в діапазоні(" + min + "-" + max + "):");
for (var i in objectMasSort) {
    if (objectMasSort[i].data >= min && objectMasSort[i].data <= max) {
        objectInRange.push(objectMasSort[i].data);
    }
}
for (var i = 0; i < objectInRange.length; i++) {
    console.log(objectInRange[i]);
}

