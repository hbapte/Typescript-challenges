interface PersonInfo {
    secondName: string;
    age: number;
}

interface GenderGroup {
    [key: string]: PersonInfo;
}

interface GroupedPeople {
    females: GenderGroup;
    males: GenderGroup;
}

function formatArrayToObject(inputArray: string[]): GroupedPeople {
    const groupedPeople: GroupedPeople = {
        females: {},
        males: {}
    };

    inputArray.forEach((personString) => {
        const [nameAgeString, gender] = personString.split(',').map(str => str.trim());
        const [fullName, ageStr] = nameAgeString.split(',');
        const [firstName, secondName] = fullName.split(' ');
        const age = parseInt(ageStr);

        const personInfo: PersonInfo = { secondName, age };

        if (gender.toLowerCase() === 'female') {
            groupedPeople.females[firstName] = personInfo;
        } else if (gender.toLowerCase() === 'male') {
            groupedPeople.males[firstName] = personInfo;
        }
    });

    return groupedPeople;
}

// Test the formatArrayToObject function
const formattedArray: string[] = [
    "Patrick wyne, 30, male",
    "lil wyne, 32, male",
    "Eric mimi, 21, female",
    "Dodos deck, 21, male",
    "Alian Dwine, 22, male",
    "Patrick wyne, 33, male",
    "Patrick wyne, 10, male",
    "Patrick wyne, 40, male"
];

const groupedPeople = formatArrayToObject(formattedArray);
console.log(groupedPeople);
