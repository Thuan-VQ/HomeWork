// Câu 1
import name, {calculateRectArea, calculateCircleArea} from "./calculator.js";


calculateRectArea(10,5);
calculateCircleArea(30);
name()

// Câu 2
let people = [{
    "id": 1,
    "first_name": "Cynthy",
    "last_name": "Blunsden",
    "email": "cblunsden0@tuttocitta.it",
    "gender": "Female"
}, {
    "id": 2,
    "first_name": "Anna-diana",
    "last_name": "Whitlock",
    "email": "awhitlock1@go.com",
    "gender": "Female"
}, {
    "id": 3,
    "first_name": "Aurora",
    "last_name": "Lawrance",
    "email": "alawrance2@google.com.hk",
    "gender": "Female"
}, {
    "id": 4,
    "first_name": "Netti",
    "last_name": "McDonnell",
    "email": "nmcdonnell3@tmall.com",
    "gender": "Female"
}, {
    "id": 5,
    "first_name": "Elfie",
    "last_name": "McGinnis",
    "email": "emcginnis4@un.org",
    "gender": "Female"
}, {
    "id": 6,
    "first_name": "Eugine",
    "last_name": "Wyndham",
    "email": "ewyndham5@tinyurl.com",
    "gender": "Genderfluid"
}, {
    "id": 7,
    "first_name": "Franky",
    "last_name": "Reiner",
    "email": "freiner6@gov.uk",
    "gender": "Polygender"
}, {
    "id": 8,
    "first_name": "Amity",
    "last_name": "Luparto",
    "email": "aluparto7@eventbrite.com",
    "gender": "Female"
}, {
    "id": 9,
    "first_name": "Vivien",
    "last_name": "Tolle",
    "email": "vtolle8@mapquest.com",
    "gender": "Female"
}, {
    "id": 10,
    "first_name": "Arnoldo",
    "last_name": "Deval",
    "email": "adeval9@google.fr",
    "gender": "Male"
}]

// firstname

let firstName = (people) => people.first_name
let fname= people.map(firstName);
console.log(fname);

// full name

let fullName = (people) => people.first_name +" "+ people.last_name + "; gender: "+ people.gender
let full = people.map(fullName);
console.log(full);

// id>5

let over5 = (people) => people.id >5
let idBiggerThan5= people.filter(over5);
console.log(idBiggerThan5);

//  id < 5 + gender = male
let smallerThan5 = (people) => people.id < 5 && people.gender == "Male"
let Male = people.filter(smallerThan5);
console.log(Male)

// id = 10
let ten = (people) => people.id == 10;
let id10= people.find(ten)
console.log(id10);