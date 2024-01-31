/*console.log('Konbanwa');
console.log('Hello'); 
window.alert('This is an alert');*/

// document.getElementById("title").textContent = "Konbanwa";
// document.getElementById("para").textContent = "Hello world!";

// let fullName = "John Doe";
// let age = 26;
// let isEnrolled = true;

//backtick = `

// document.getElementById("name").textContent = fullName;
// document.getElementById("age").textContent = age;
// document.getElementById("isEnrolled").textContent = `You are enrolled for the course: ${isEnrolled}`;

let username;

document.getElementById("mySubmit").onclick = function(){
        username = document.getElementById("myText").value;
        console.log(username);
}
