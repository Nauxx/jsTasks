let password = prompt("Please enter password");

if (
  Array.from(password).some(item => {
    typeof parseInt(item) == "number";
  })
) {
  alert("good password");
} else alert("password must contain min 1 number");

/* if (password.length >= 5 && password.length <= 20) {
  alert("good password");
} else {
  alert("you password is too short/long");
} */
