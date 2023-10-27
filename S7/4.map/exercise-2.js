const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

let anacletoFunction = (objs) => {
    let objNames = objs.map(obj => obj.name);
    for (let i = 0; i < objNames.length; i++) {
        if (objNames[i].charAt(0) === "A") {
            objNames[i] = "Anacleto";
        }
    }
    return objNames;
}

console.log(anacletoFunction(users));
console.log(users);