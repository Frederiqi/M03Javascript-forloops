for (someNumber = 1; someNumber < 11; someNumber++) {
    console.log(someNumber + ' x ' + '9 = ' + someNumber * 9);
}

for (someNumber = 1; someNumber < 11; someNumber++) {
    for (tableNumber = 1; tableNumber < 11; tableNumber++) {
        console.log(someNumber + ' x ' + tableNumber + ' = ' + someNumber * tableNumber);
    }
}
