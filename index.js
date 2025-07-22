var score = 0;
var q1 = prompt("Q1: What is the capital of Japan?");
if (q1 === "Tokyo" || q1 === "tokyo") {
    alert("✅ Correct!");
    score++;
}
else if (q1 === "Koyoto" || q1 === "Osaka") {
    alert("❌ Close but not the capital.");
}
else {
    alert("❌ Incorrect, It's Tokyo.");
}

var q2 = prompt("Q2: How many continents are there in the world?");
if (q2 == "7") {
    alert("✅ Correct!");
    score++;
}
else if (q2 >= 5 && q2 <= 8) {
    alert("❌ Close but not Correct.");
}
else {
    alert("❌ Incorrect, The correct answer is 7.");
}

var q3 = prompt("Q3: How many players are in the football (soccer) team?");
if (q3 == 11) {
    alert("✅ Correct!");
    score++;
}
else if (q3 > 11) {
    alert("❌ Too many players.");
}
else {
    alert("❌ Incorrect, The correct answer is 11.");
}

var q4 = prompt("Q4: What is the national language of Pakistan?");
if (q4 === "Urdu" || q4 === "urdu") {
    alert("✅ Correct!");
    score++;
}
else if (q4 === "English") {
    alert("❌ English is Official, not national.");
}
else {
    alert("❌ Incorrect, It's Urdu.");
}

var q5 = prompt("Q5: Is Mount Everest in Pakistan?");
if (q5 === "no") {
    alert("✅ Correct!");
    score++;
}
else if (q5 === "yes") {
    alert("❌ Incorrect, Not in Pakistan.");
}
else {
    alert("❓ Please answer yes or no.");
}

var q6 = prompt("Q6: What number is even, more than 9, less than 13?");
if (q6 == 10 && q6 > 9 && q6 < 13) {
    alert("✅ Correct!");
    score++;
}
else if (q6 > 9 && q6 < 13) {
    alert("❌ Close but we wanted 10.");
}
else {
    alert("❌ Incorrect, The correct answer is 10.");
}

var q7 = prompt("Q7: If a clock takes 5 seconds to strike 5, how long will it take to strike 7?");
if (q7 == 6) {
    alert("✅ Correct!");
    score++;
}
else if (q7 > 5 && q7 < 8) {
    alert("❌ Close but not correct.");
}
else {
    alert("❌ Incorrect, The correct answer is 6 seconds.");
}

var q8 = prompt("Q8: A man walks in the rain without an umbrella and doesn't get wet, How?");
if (q8 === "He is bald" || q8 === "he is bald"  || q8 === "he's bald"  || q8 === "bald")  {
    alert("✅ Correct!");
    score++;
}
else if (!(q8 === "he had an umbrella")) {
    alert("❌Wrong. He was bald.");
}
else {
    alert("❌ Incorrect.");
}
var q9 = prompt("Q9: What has to be broken before you can use it?");
if (q9 === "Egg" || q9 === "egg" || q9 === "eggs" || q9 === "an egg") {
    alert("✅ Correct!");
    score++;
}

else {
    alert("❌ Incorrect, It's an egg.");
}

var q10 = prompt("Q10: What comes once in a minute, twice in a moment, but never in a thousand years?");
if (q10 === "M" || q10 === "m" || q10 === "The letter M" || q10 === "m letter") {
    alert("✅ Correct!");
    score++;
}

else {
    alert("❌ Incorrect, It's the letter M.");
}

alert("🎯 Quiz Complete! Your Score: " + score + "/10");
if (score === 10) {
    alert("🏆 Perfect score! You're a genius!");
}
else if (score >= 7) {
    alert("🎉 Good job!");
}
else if (score >= 4) {
    alert("🙂 Not bad. Keep learning!");
}
else {
    alert("😅 Try again and Improve!");
}