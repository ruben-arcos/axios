const axios = require("axios");

//.then promises
// https://randomuser.me/api/

// const {default: axios} = require("axios")

const getContact = () => {
  try {
    const res = axios
      .get(`https://randomuser.me/api/`) //this url gets one user
      .then((res) => {
        console.log(res.data.results);
      });
  } catch (err) {
    console.log("ERROR", err);
  }
};

// console.log(getContact());

// async/await promises
//star wars api https://swapi.dev/api/people/ <-- add an id to get an specific person

//first async the function
const getStarWarsPerson = async (id) => {
  try {
    //await finish before everything happes
    const res =  await axios.get(`https://swapi.dev/api/people/${id}`)
    console.log(res.data)
  } catch (err) {
    console.log("ERROR", e);
  }
};

console.log(getStarWarsPerson(15))
