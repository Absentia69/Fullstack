//You made me do this lynda XDn't
//You dare use my spell against me, lynda? XD
let obj1 = {
    Name:"Lamine",
    Surname:"Merah",
    Age:20,
    Section:"Multimedia",
    Cool: true
};
let obj2 = {
    Name:"Lynda",
    Surname:"Sayoud",
    Age:20,
    Section:"Game dev",
    Cool: true
};
let obj3 = {
    Name:"Lynda",
    Surname:"Sayoud",
    Section:"Za3ma team lead",
    Cool: false //this is faxx
};
let obj4 = {
    Name:"Lamine",
    Surname:"Merah",
    Age:20,
    Section:"Multimedia",
    Cool: true
};
function isEqual(obj1,obj2) {
    let k1= Object.keys(obj1);
    let k2= Object.keys(obj2);
    if (k1.length != k2.length) {
        return false;
    }
    for (let key of k1) {
        if (obj1[key] != obj2[key] ) {
            return false;
        }
    }
    return true;
}
console.log(isEqual(obj1,obj2));
console.log(isEqual(obj2,obj3) + ". Yek cv Lynda XD,");
console.log(isEqual(obj1,obj3));
console.log(isEqual(obj1,obj4));
//lyndaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//lyndaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//lyndaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//lyndaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//lyndaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//lyndaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//lyndaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//lyndaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//kyn chi nas, ts9si 3lihm may3jbhmch l 7al, bla manjbd l asami, mais ybda b lynda
