function add(value){
    document.getElementById('screen').value += value;
}

function remove(){
    document.getElementById('screen').value = '';
}

function calculator(){
    let valueScreen = document.getElementById('screen').value;
    let result = eval(valueScreen);
    document.getElementById('screen').value = result;
}

function removeNum(){
    let valueScreen = document.getElementById('screen').value;
    var valueEnd = valueScreen.slice(0, -1);
    document.getElementById('screen').value = valueEnd;
}


