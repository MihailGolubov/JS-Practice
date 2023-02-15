/*
3 + 2
*/
/*const Person = {
    Mihai: "human",
    Age: 26,
    Height: 170,
}
console.log(Person.Age)*/
/*console.log(Person);*/
/*console.log(Person.Age);*/
//console.dir(console);
//console.table(console);
/*
Denumirea Variabilelor
PascaleCase - Fiecare cuvint cu litera majuscula, spre ex "MihailGolubov, ButonExpediere etc" se folosesc in denumirea tipurilor si claseror.
MAJOR - Toate literele cu majuscula, cu lunie jos intre cuvinte, se folosesc in constante care sunt cunoscute inaintea executarii aplicatiei.Spre ex "USER_PASSWORD, USER_ID"
camelCase - se incepe cu minuscula si restul cuvintelor se incep cu majuscula. Spre ex"culoareAutoVinzare, ageUserToday etc."



*/
/*let myName = 'Mihai'
console.log(myName)
*/
/*const room = ["Mobile", "Mouse", "Notebook"];
console.dir(room)
console.log(room.length)*/
/*const contacts = {
    Ion: "Brazilia",
    Ana: "Romania",
    Criss: "Franta"
}
console.log(contacts)
contacts.Daniela = "Moldova"
console.log(contacts)
delete contacts.Ana
console.log(contacts)
contacts["Viorel"] = "Ungaria"
console.log(contacts)
contacts["Moldova"] = "Chisinau"
console.log(contacts)*/
/*Putem utiliza const la declararea obiectelor, intrucat adresa nu se schimba, ci doar caracteristicile*/
/*const Mihai = {
    virsta: "26",
    gen: "Masculin",
    caracteristiciFizice: {
        inaltime: "170cm",
        greutate: "72kg"
    },
}
console.log(Mihai.virsta)
console.log(Mihai.caracteristiciFizice.inaltime)
delete Mihai.caracteristiciFizice.inaltime
console.log(Mihai.caracteristiciFizice)*/
/*const virsta = 26
const gen = "Masculin"
const Mihai = {
    greutate: "72kg",
    inaltime: "170cm",
    virsta,
    gen
}
console.log(Mihai)
*/
/*
Din JSON -> JavaScript Object folosim JSON.parse()
Din JavaScript Object -> JSON folosim JSON.stringify()
*/
/*const post = {
    title: "My Post",
    likeQty: 5
}
console.log(post)
const postStringify = JSON.stringify(post)
console.log(postStringify)
const postParse = JSON.parse(postStringify)
console.log(postParse)*/
/*const person = {
    name: "bob",
    age: 25
}
const person2 = {
    ...person
}
person2.name = "alice"
console.log(person)
console.log(person2)
*/
//Function
function sum(a, b) {

}
console.table(sum)