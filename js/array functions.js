
let countries = [
    {
        name: "India",
        code: "np",
        phone: ""
    },
    {
        name: "Nepal",
        code: "np",
        phone: ""
    },
    {
        name: "China",
        code: "np",
        phone: ""
    },
]

/* 
    for()
*/

const findCountry = () => {
    return false;
}

// let result = countries.find(findCountry)
let result = countries.find((country) => { return country.name == "Nepal" })

console.log({ result })


let numbers = [1, 2, 3, 4, 5, 6]

let temp = [];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 0) {
        temp.push(numbers[index])
    }
}

console.log(temp);

let first_even_number = numbers.find((number) => { return number % 2 == 0 })
// let even_numbers = numbers.filter((number) => { return number % 2 == 0 })
let even_numbers = numbers.filter((number) =>  number % 2 == 0 )
console.log({ even_numbers });


