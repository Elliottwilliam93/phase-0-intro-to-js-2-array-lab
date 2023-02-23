const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    let cats2 = [...cats, name];
    return cats2;
}
function prependCat(name){
    let cats2 = [name, ...cats];
    return cats2;
}
function removeLastCat(){
    let copyOfCats = cats.slice(0, 2)
    return copyOfCats
}
function removeFirstCat(){
    let copyOfCats = cats.slice(1)
    return copyOfCats
}