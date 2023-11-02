/**
 * REVISIONS classe Date pour la conversion et le calcul de dates
 */

let birthday = new Date("1995-12-17");
let birthday2 = new Date("1997-12-17");
console.log((birthday2 - birthday) / (1000 * 60 * 60 * 24))

/**
 * Opérateur ternaire
 */

let user1 = {
    name: "Paul",
    age: 19
}

let user2 = {
    name: "Manon",
    age: 17
}

console.log(isAdult(user1))

function isAdult(u) {
    // let sentence

    // if (u.age > 18) {
    //     sentence = "L'utilisateur est majeur"
    // } else {
    //     sentence = "L'utilisateur n'est pas majeur"
    // }

    return u.age > 18 ? "L'utilisateur est majeur" : "L'utilisateur n'est pas majeur"
}