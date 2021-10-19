const addOne = (arr) => {
    let res = [];
    arr.forEach(function (element, index) {
        res.push(element + 1)
    });
    return res
};

const addExclamation = (arr) => {
    let res = [];
    arr.forEach(function (element, index) {
        res.push(element + "!")
    });
    return res
};

const addOneByMap = (arr) => {
    const res = arr.map(function (element, index) {
        return element + 1;
    });
    return res
};

const addQuestion = (arr) => {
    const res = arr.map(function (element, index) {
        return element + "?";
    });
    return res
};

const forLoopTwoToThe = (arr) => {
    let res = arr.map((element) => {
        return element = Math.pow(2, element);
    });
    return res;
};

const typeNum = (arr) => {
    let res = arr.filter((element) => {
        return typeof element == "number";
    });
    return res;
};

const containsAnd = (arr) => {
    const x = arr.filter((element, index) => {
        return element.includes("and");
    });
    return x;
};

const oddValues = (arr) => {
    let res = arr.filter((element, index) => {
        return (element % 2);
    });
    return res;
};

const addValues = (arr) => {
    let res = arr.reduce((acc, element, index) => {
        acc += element;
        return acc;
    });
    return res;
};

const countNumberOfElements = (arr) => {
    let res = arr.reduce((acc, element, index) => {
        acc = ++index;
        return acc;
    });
    return res;
};

//objects

const checkValues = (obj, value) => {
    return Object.values(obj).includes(value);
};

const courseInfo = {
    name: "Code 301",
    duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
    topics: [
        "SMACSS",
        "APIs",
        "NodeJS",
        "SQL",
        "jQuery",
        "functional programming",
    ],
    finalExam: true,
};
const getCourseKeys = (obj) => {
    for (const key in obj) {
        console.log(obj);
    }
};

const updateNumbers = (obj) => {
    let arr = [];
    for (const info in obj) {
        arr.push(`${info}: ${obj[info]}`);
        console.log(info)
    }
    return arr;
};

const PassedOrFailed = function (studentGrades) {
    let = Object.values(studentGrades);
    for (let i = 0; i < avr.length; i++) {
        if (avr[i].grade / avr[i].total < 0.50)
            return "The student have failed";
    }
    return "The student have passed";
};
const studentOne = {
    math: { grade: 70, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 }
};
const studentTwo = {
    math: { grade: 59, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 }
};

const totalCharacters = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].length;
    }
    return total;
};

const houseSize = (arr) => {
    let sizes = [];
    for (let i = 0; i < arr.length; i++) {
        let object = {};
        object.house = arr[i];
        object.members = arr[i];
        sizes.push(object);
    }
    return sizes;
};

const uniqueDogs = {
    max: { breed: "Labrador Retriever", color: "blond" },
    rex: { breed: "German Shepherd", color: "black and brown" },
    lucy: { breed: "Bulldog", color: "white" },
    lucifer: { breed: "Chihuahua", color: "brown" },
};
const createDog = function (name, dogBreed, furColor) {
    let arr = Object.getOwnPropertyNames(uniqueDogs);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == name) {
            return "Added the dog successfully";
        }
    }
    uniqueDogs[name] = { bread: dogBreed, color: furColor };
    return "The dog isn't unique enough";
};