//Initialise variables
let question_number = 0;
let score = 0;
let questions = [];
let quiz_a = [
{"question": "Which day in November is remembrance day?", "correct": "11th", "incorrect": ["10th", "9th", "12th"], "information": "Remembrance day is held each year at 11am on the 11th of November to honour the service and sacrifice of those who have died in the line of duty.", "image": "Quiz A Question 1.jpg"},
{"question": "Where is Plymouth's navy base located?", "correct": "Devonport", "incorrect": ["East Stonehouse", "Plymouth", "Cornwall"], "information": "Plymouths naval base is located in Devonport Royal dockyard.", "image": "Quiz A Question 2.jpg"},
{"question": "Devonport is the largest naval base in?", "correct": "Western Europe", "incorrect": ["The World", "Europe", "Eastern Europe"], "information": "Devonport is currently the Largest naval base in Western Europe.", "image": "Quiz A Question 3.jpg"},
{"question": "What is the Royal Navy's largest ship?", "correct": "HMS Queen Elizabeth", "incorrect": ["HMS Ocean", "HMS Britannia", "HMS Dreadnought"], "information": "The HMS Queen Elizabeth is the Royal Navy's Largest ship weighing in at 65,000 tonnes.", "image": "Quiz A Question 4.jpg"},
{"question": "Where is the Plymouth Navy Memorial Located?", "correct": "The Hoe", "incorrect": ["The Barbican", "Devonport", "East Stonehouse"], "information": "The Plymouth Naval Memorial is located centrally on the Hoe Promenade.", "image": "Quiz A Question 5.jpg"},
{"question": "Who was behind the establishment of the naval yard in Devonport?", "correct": "King William III", "incorrect": ["King Henry VIII", "King Charles III", "King George VI"], "information": "The man behind the establishment of the naval yard at Devonport was King William III also known as William of Orange.", "image": "Quiz A Question 6.jpg"},
{"question": "What was the last Devonport-built ship called?", "correct": "HMS Scylla", "incorrect": ["HMS Aberdeen", "HMS Royal Oak", "HMS Plymouth"], "information": "The last Devonport-built ship was the HMS Scylla which was made in 1971.", "image": "Quiz A Question 7.jpg"},
{"question": "What does HMS Stand for in the navy?", "correct": "His/Her Majesty's Ship", "incorrect": ["His/Her Majesty's Shirt", "His/Her Majesty's Sea", "His/Her Majesty's Sail"], "information": "HMS stands for His Majesty's Ship, which is used when a King is ruling, and Her Majesty's Ship, when a Queen is Ruling.", "image": "Quiz A Question 8.jpg"},
{"question": "The navy have a nickname for the Devonport Dockyard in Plymouth what is it's name?", "correct": "Guz", "incorrect": ["Gus", "Jug", "Juz"], "information": "Sailors in the Navy would call the Devonport Navy base in Plymouth 'Guz' which is simply to abbreviate the term 'The yard'.", "image": "Quiz A Question 9.jpg"},
{"question": "The first naval hospital was built in Plymouth in what year?", "correct": "1762", "incorrect": ["1768", "1766", "1764"], "information": "The first naval hospital was built in the year 1762.", "image": "Quiz A Question 10.jpg"}
];

let quiz_b = [
{"question": "In What year did Plymouth, Devonport and East Stonehouse merge to form the County Borough of Plymouth?", "correct": "1914", "incorrect": ["1915", "1912", "1918"], "information": "Plymouth, Devonport and East Stonehouse merged to form the County Borough of Plymouth in 1914.", "image": "Quiz B Question 1.jpg"},
{"question": "What Year was Smeaton's Tower originally built in?", "correct": "1759", "incorrect": ["1758", "1757", "1760"], "information": "Smeaton's Tower was originally built in 1759, but was taken down in the early 1880s when it was discovered that the sea was undermining the rock it was standing on.", "image": "Quiz B Question 2.jpg"},
{"question": "What is the name of the oldest street in Plymouth?", "correct": "New Street", "incorrect": ["Old Street", "New Park Road", "Wake Street"], "information": "The Oldest street in Plymouth is New Street which is located on the Barbican and used to be known as Rag Street.", "image": "Quiz B Question 3.jpg"},
{"question": "In what year did Nancy Astor become the first female member of parliament?", "correct": "1919", "incorrect": ["1920", "1918", "1917"], "information": "Nancy Astor became the first woman Member of Parliament in 1919, representing the constituency of Sutton in Plymouth.", "image": "Quiz B Question 4.jpg"},
{"question": "What Captain left Plymouth in 1768 to go on his first voyage?", "correct": "Captain Cook", "incorrect": ["Captain Hook", "Captain Book", "Captain Crunch"], "information": "Captain Cook left Plymouth on the Endeavour in 1768 on his first voyage.", "image": "Quiz B Question 5.jpg"},
{"question": "Plymouth was granted city status in what year?", "correct": "1928", "incorrect": ["1927", "1926", "1929"], "information": "Plymouth was granted city status in the year 1928, further solidifying its importance in the region.", "image": "Quiz B Question 6.jpg"},
{"question": "What is the nickname used for people from Plymouth?", "correct": "Janner", "incorrect": ["Jenner", "Jan", "Jen"], "information": "The nickname used is Janner, the definition of Janner is described as a person from Devon, deriving from Cousin Jan (the Devon form of John), but more particularly in naval circles anyone from the Plymouth area.", "image": "Quiz B Question 7.jpg"},
{"question": "Who was responsible for supplying Plymouth with a fresh water supply in 1591?", "correct": "Sir Francis Drake", "incorrect": ["Sir Francis Chichester", "Scott of the Antarctic", "William Bligh"], "information": "Plymouth became the first town in the UK to receive a fresh water supply from outside its boundaries thanks to Sir Francis Drake constructing a 14-mile leat from the River Meavy on Dartmoor in 1591.", "image": "Quiz B Question 8.jpg"},
{"question": "What year was Plymouths Black Friars Distillery established?", "correct": "1793", "incorrect": ["1790", "1792", "1795"], "information": "The Black Frias Distillery is the oldest working gin distillery in England and has been crafting its spirits since 1793.", "image": "Quiz B Question 9.jpg"},
{"question": "Plymouth's National Marine Aquarium is the largest public aquarium in?", "correct": "The United Kingdom", "incorrect": ["Europe", "South West England", "Western Europe"], "information": "Plymouth's National Marine Aquarium is the largest public aquarium in The UK.", "image": "Quiz B Question 10.jpg"}
];

quizzes = [quiz_a, quiz_b]

let right_sound = new Audio('right.wav');
let wrong_sound = new Audio('wrong.wav');
let success_sound = new Audio('success.wav');
let medium_sound = new Audio('medium.wav');
let fail_sound = new Audio('fail.wav');
let next_sound = new Audio('next.wav');
let select_sound = new Audio('select.wav');
let ambience_sound = new Audio('ambience.wav');

let ambience_started = false;
function play_ambience() {
    ambience_sound.loop = true;
    ambience_sound.play();
}

function enter_quiz_select() {
    swap_visible_ingame_section(document.getElementById("quiz_select"));
    select_sound.play();

    if (ambience_started == false) {
        play_ambience();
    }
}

function return_to_title_screen() { //Used to return to the title screen
    swap_visible_ingame_section(document.getElementById("welcome"));
    next_sound.play();
}

function start(quiz_id) { //Used when clicking the button to start the game. Resets the score and question number then triggers the first question
    questions = quizzes[quiz_id];
    question_number = 0;
    score = 0;
    trigger_next_question();
    next_sound.play();
}

function swap_visible_ingame_section(new_element) {
    let old_element = document.getElementsByClassName("active_section")[0];
    old_element.style.opacity = 0;
    old_element.style.transform = 'scale(0)';

    window.setTimeout(function(){
        old_element.classList.remove("active_section");
        new_element.classList.add("active_section");
        old_element.style.display = 'none';
        new_element.style.display = 'block';
    },100);

    window.setTimeout(function(){
        new_element.style.display = 'block';
        new_element.style.opacity = 1;
        new_element.style.transform = 'scale(1)';
    },150)
}

function trigger_next_question() { //Selects the next question and edits all the element text to reflect the new question contents, then displays it on-screen
    let new_question = questions[question_number];
    question_number = question_number + 1;

    document.getElementById("question_header").innerText = "Q" + (question_number) + ": " + new_question["question"]; //Updates the question header

    document.getElementById("question_image").src = new_question["image"]; //Updates the image for the question page

    document.getElementById("answers_container").innerHTML=""; //Deletes all the old answer buttons off the page

    let answer_buttons = generate_answer_buttons(new_question); //Generates the answer buttons for the new question
    let colour_classes = ["pink_button","blue_button","orange_button","purple_button"]; //A list of all the colours that can be applied
 
    while (answer_buttons.length > 0) {
        let randomly_selected_button = answer_buttons.splice(Math.floor(Math.random()*answer_buttons.length), 1)[0]; //Selects a button at random
        randomly_selected_button.classList.add("button", colour_classes.pop()); //Adds the button class and next colour
        document.getElementById("answers_container").appendChild(randomly_selected_button); //Adds it to the page

        //This loop repeats until all possible answers have been added. This is done to put the answer in random locations each time
    }

    swap_visible_ingame_section(document.getElementById("question")); //Make question visible
}

function generate_answer_buttons(question) { //Used to generate the answer buttons for the current question. The correct answer is generated first followed by the incorrect ones

    let answer_buttons = []; //This list will be used to store all generated buttons

    //Create correct answer button
    let correct_answer_button = document.createElement("div");
    correct_answer_button.innerText = question["correct"];
    correct_answer_button.onclick = function(){submit_answer(true)};
    answer_buttons.push(correct_answer_button);

    //Create all incorrect buttons
    question.incorrect.forEach(function(item, index) {
        let wrong_answer_button = document.createElement("div");;
        wrong_answer_button.innerText = item;
        wrong_answer_button.onclick = function(){submit_answer(false)};
        answer_buttons.push(wrong_answer_button);    
    });

    return answer_buttons;
}

function submit_answer(is_correct) { //Used when the user clicks on an answer
    document.getElementById("information_image").src = questions[question_number - 1]["image"]; //Updates the image for the information page
    document.getElementById("information_text").innerText = questions[question_number - 1]["information"]; //Updates the information displayed after the question is answered

    if (is_correct == true) {
        score += 1;        
        right_sound.play();
        document.getElementById("information_header").innerText = "You got it!";
    } else {
        wrong_sound.play();
        document.getElementById("information_header").innerText = "Not quite!";
    }

    swap_visible_ingame_section(document.getElementById("information"));
}

function finish_reading() { //Used when the user has finished reading the information and clicks to start the next question
    if (question_number < questions.length) {
        trigger_next_question();
    } else {
        show_results();
    }
    select_sound.play();
}

function show_results() {
    document.getElementById("results_header").innerText = "You scored " + score + " points";

    //Default message
    let message = "Give it another try - you can definitely do better than that!";

    //If score is high enough, replace default message with a new message
    if (score == 10) {
        message = "Amazing! Perfect!"
    } else if (score >= 9) {
        message = "Wow! Almost perfect!"
    } else if (score >= 7) {
        message = "Excellent job!"
    } else if (score >= 5) {
        message = "Not bad at all!"
    } else if (score >= 3) {
        message = "Did you learn something new? Play again and see if you can get a better score!"
    }

    if (score >= 7) { 
        success_sound.play();
    } else if (score >= 4) {
        medium_sound.play();
    } else {
        fail_sound.play();
    }

    document.getElementById("results_message").innerText = message;

    swap_visible_ingame_section(document.getElementById("results"));
}