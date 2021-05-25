// let son = prompt ('Son kiriting:')
// let h1 = document.querySelector('h1')

// function game (son){

// if(son % 5 === 0 && son % 3 === 0){
//     return 'FizzBuzz'
// }
// else if (son % 3 ===0){
//     return 'Fizz'
// }

// else if( son % 5 === 0 ){
//     return 'Buzz'
// }

// else{
//     return son
// }
// }
// const answer = game(son)

// h1.innerHTML = answer

let eye = document.querySelector(".fa-eye");
let eye_slash = document.querySelector(".fa-eye-slash");
let input = document.querySelector(".inp");

eye_slash.addEventListener("click", function () {
  input.type = "text";
  eye_slash.style.display = "none";
  eye.style.display = "block";
});

eye.addEventListener("click", function () {
  input.type = "password";
  eye_slash.style.display = "block";
  eye.style.display = "none";
});
