console.log("MM/DD/YYYY");
var objectMas = [
    {
        date: "10/17/2013"
    },
    {
        date: "10/15/2013"
    },
    {
        date: "08/07/2002"
    },
    {
        date: "07/05/2007"
    },
    {
        date: "01/02/2003"
    },
    {
        date: "12/01/2003"
    }
];

console.log("Початковий масив:");

for (var i = 0; i < objectMas.length; i++) {
    console.log(objectMas[i].date);
}

//Сортування
var objectMasSort = objectMas.slice("");
objectMasSort.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
});
objectMasSort.reverse();
console.log("Відсортований масив:");
for (var i = 0; i < objectMasSort.length; i++) {
    console.log(objectMasSort[i].date);
}

//Діапазон
var objectMasRange = [];
var startDate = new Date("12/01/2002");
var endDate = new Date("12/01/2008");
for (var i in objectMasSort) {
    if (new Date(objectMasSort[i].date) > startDate && new Date(objectMasSort[i].date) < endDate) {
        objectMasRange.push(objectMasSort[i]);
    }
}
console.log("Масив з діапазону:");
for (var i = 0; i < objectMasRange.length; i++) {
    console.log(objectMasRange[i].date);
}

