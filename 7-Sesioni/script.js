// json - javascript object notation. dy funksione: JSON.parse() dhe JSON.stringify(). Values qe nuk ruhen: a function, a date, undefined 


// JSON

// const students = {
//     name: 'lorik',
//     lastName: 'abrashi'
// }

// // convert to json
// console.log(students)
// // output javascript object
// console.log(JSON.stringify(students)) 
// // output string



// Fetch API - mundeson http requests

// fetch('https://dummy.restapiexample.com/api/v1/employees')
// .then((value) => {
//     return value.json()
// })
// .then((value) => {
//     console.log(value)
// })

// // OUTPUT
// {status: 'success', data: Array(24), message: 'Successfully! All records has been fetched.'}
// data: Array(24)
// 0: {id: 1, employee_name: 'Tiger Nixon', employee_salary: 320800, employee_age: 61, profile_image: ''}
// 1: {id: 2, employee_name: 'Garrett Winters', employee_salary: 170750, employee_age: 63, profile_image: ''}
// 2: {id: 3, employee_name: 'Ashton Cox', employee_salary: 86000, employee_age: 66, profile_image: ''}
// 3: {id: 4, employee_name: 'Cedric Kelly', employee_salary: 433060, employee_age: 22, profile_image: ''}
// 4: {id: 5, employee_name: 'Airi Satou', employee_salary: 162700, employee_age: 33, profile_image: ''}
// 5: {id: 6, employee_name: 'Brielle Williamson', employee_salary: 372000, employee_age: 61, profile_image: ''}
// 6: {id: 7, employee_name: 'Herrod Chandler', employee_salary: 137500, employee_age: 59, profile_image: ''}
// 7: {id: 8, employee_name: 'Rhona Davidson', employee_salary: 327900, employee_age: 55, profile_image: ''}
// 8: {id: 9, employee_name: 'Colleen Hurst', employee_salary: 205500, employee_age: 39, profile_image: ''}
// 9: {id: 10, employee_name: 'Sonya Frost', employee_salary: 103600, employee_age: 23, profile_image: ''}
// 10: {id: 11, employee_name: 'Jena Gaines', employee_salary: 90560, employee_age: 30, profile_image: ''}
// 11: {id: 12, employee_name: 'Quinn Flynn', employee_salary: 342000, employee_age: 22, profile_image: ''}
// 12: {id: 13, employee_name: 'Charde Marshall', employee_salary: 470600, employee_age: 36, profile_image: ''}
// 13: {id: 14, employee_name: 'Haley Kennedy', employee_salary: 313500, employee_age: 43, profile_image: ''}
// 14: {id: 15, employee_name: 'Tatyana Fitzpatrick', employee_salary: 385750, employee_age: 19, profile_image: ''}
// 15: {id: 16, employee_name: 'Michael Silva', employee_salary: 198500, employee_age: 66, profile_image: ''}
// 16: {id: 17, employee_name: 'Paul Byrd', employee_salary: 725000, employee_age: 64, profile_image: ''}
// 17: {id: 18, employee_name: 'Gloria Little', employee_salary: 237500, employee_age: 59, profile_image: ''}
// 18: {id: 19, employee_name: 'Bradley Greer', employee_salary: 132000, employee_age: 41, profile_image: ''}
// 19: {id: 20, employee_name: 'Dai Rios', employee_salary: 217500, employee_age: 35, profile_image: ''}
// 20: {id: 21, employee_name: 'Jenette Caldwell', employee_salary: 345000, employee_age: 30, profile_image: ''}
// 21: {id: 22, employee_name: 'Yuri Berry', employee_salary: 675000, employee_age: 40, profile_image: ''}
// 22: {id: 23, employee_name: 'Caesar Vance', employee_salary: 106450, employee_age: 21, profile_image: ''}
// 23: {id: 24, employee_name: 'Doris Wilder', employee_salary: 85600, employee_age: 23, profile_image: ''}
// length: 24
// [[Prototype]]: Array(0)
// message: "Successfully! All records has been fetched."
// status: "success"



// Cross - Cross origin resources sharing (Cors) 

// const url = fetch('https://catfact.ninja/fact')
// // .then((value) => {
// //     return value.json()
// // })
// // .then((value) => {
// //     console.log(value)
// // })
// const title = document.getElementsByClassName('title')

// function getFact(){
//     fetch (url).then(x => x.json)
// }


// const getAge = async() => {
//     const age = document.getElementById('title')
//     const name = document.getElementById('name').value;
//     const url = "https://api.agify.io/?name=" + name;
//     const data = await(await fetch (url)).json();
//     age.innerHTML = data.age;
// }



// fetch('https://dummy.restapiexample.com/api/v1/employees')
// .then((value) => {
//     return value.json()
// })
// .then((value) => {
//     console.log(value)
// })


document.getElementById("secondbtn").addEventListener("click", function(){
    document.querySelector(".signup1").style.display = "block";
    document.querySelector(".signin").style.display = "none";
})


document.getElementById("signupbtn").addEventListener("click", function(){
    document.querySelector(".registered").style.display = "block";
    document.querySelector(".signup").style.display = "none";
})

document.getElementById("signinbtn").addEventListener("click", function(){
    document.querySelector(".signup1").style.display = "none";
    document.querySelector(".signin").style.display = "block";
})

// const signup1 = document.getElementById("first");
// const inpNames = document.getElementById("names");
// const signupbtn = document.getElementById("signupbtn");
// const notes = document.getElementById("notes")

// let storageS = localStorage.getItem("inpNames")
// ? JSON.parse(location.getItem("inpNames")): [];

// signup11.addEventListener("submit", (e) => {
//     e.preventDefault();
//     storageS.push(inpNames.value);
//     localStorage.setItem("inpNames", JSON.stringify(storageS));
//     listBuilder(inpNames.value);
//     inpNames.value = "";
//   });
