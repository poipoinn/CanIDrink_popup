const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {    //true일 경우 age는 숫자가 아님 
    console.log("please write a real positive number.");
} else if (age < 20) {
    console.log("You are too young to drink somaek :( ");
} else if (age >= 20 && age < 55) {
    console.log("You can drink somaek!!! Enjoy it :D");
} else if ( age === 77) {  // X===Y X가 Y라면
    console.log("You are very lucky!! 777");
} else {
    console.log("You'd better not to drink somaek. Let's drink tea for your healthy life.")
}