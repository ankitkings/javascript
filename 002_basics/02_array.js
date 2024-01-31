const marvel_heros =  ["thor", "spiderman", "ironman"]
const dc_heros = ["batman", "superman", "flashman"]

// console.log(marvel_heros);
// console.log(dc_heros);

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const heroes = marvel_heros.concat(dc_heros)
// console.log(heroes);

//spread operator
// const all_heroes = [...marvel_heros, ...dc_heros]
// console.log(all_heroes);


// const other_array = [1,3,2,3,[4,4,2,3,4,3,2],4,[5,8,7,[6,5,4,7],8,5]]
// const another_array = other_array.flat(Infinity)

// console.log(another_array)

console.log(Array.isArray("Ankit"))

console.log(Array.from("Ankit parmar"))

console.log(Array.from({name:"Ankit parmar"})) // interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2,score3));