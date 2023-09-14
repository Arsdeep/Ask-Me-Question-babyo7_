let tg = {
    token: "6531509928:AAE8AMDZYLdtPy1aVhUCazd9ynuA8oksVg4", // Your bot's token that got from @BotFather
    chat_id: "5356614395", // The user's(that you want to send a message) telegram chat id
};

// Define elements
let question = document.getElementById("ask");
let send = document.getElementById("send");
let succ = document.getElementById("success");
let again = document.getElementById("again");
let big = document.getElementById("big");
let head = document.getElementById("head");
let not = document.getElementById("not");
let link = document.getElementById("link");
let dices = document.getElementById("dice");
let insta = document.getElementById("insta");
let dp = document.getElementById("dp");

let msgs = [
    "What is your favorite book and why?",
    "If you could travel anywhere in the world, where would you go?",
    "What's the most challenging experience you've ever had?",
    "What's your dream job?",
    "If you could have dinner with any historical figure, who would it be?",
    "What's the best piece of advice you've ever received?",
    "What's your favorite movie and why?",
    "If you could change one thing about the world, what would it be?",
    "What's the most interesting place you've ever visited?",
    "What's your favorite hobby?",
    "If you could have any superpower, what would it be?",
    "What's your proudest achievement?",
    "What's a skill or talent you'd like to learn?",
    "What's the most beautiful place you've ever seen?",
    "What's your favorite type of music?",
    "If you could time travel, when and where would you go?",
    "What's your favorite food?",
    "What's the most memorable book you've ever read?",
    "If you could meet any living person, who would it be?",
    "What's your favorite season and why?",
    "What's the most important lesson you've learned in life?",
    "If you could be any fictional character, who would you choose?",
    "What's a skill you're proud of?",
    "What's your favorite animal?",
    "What's a place you've always wanted to visit but haven't?",
    "What's a childhood memory that always makes you smile?",
    "What's your favorite way to relax and unwind?",
    "If you could live in any time period, when would it be?",
    "What's a cause or issue you're passionate about?",
    "What's a hidden talent you have?",
    "If you could trade lives with someone for a day, who would it be?",
    "What's a skill you wish you had?",
    "What's your favorite childhood game?",
    "If you could have any job for a day, what would it be?",
    "What's a quote that inspires you?",
    "What's your favorite TV show and why?",
    "If you could solve one global problem, what would it be?",
    "What's a dream you've yet to fulfill?",
    "If you could relive one day of your life, what day would it be?",
    "What's your favorite type of art?",
    "If you could have any animal as a pet, what would it be?",
    "What's the most challenging thing you've ever done?",
    "If you could have any car, what would it be?",
    "What's your favorite board game?",
    "What's a personal goal you're working toward?",
    "If you could learn any language instantly, which would it be?",
    "What's the most unusual food you've ever tried?",
    "If you could have a conversation with your past self, what would you say?",
    "What's your favorite outdoor activity?",
    "If you could visit any historical event, which would it be?",
    "What's your favorite childhood book?",
    "If you could change one decision you've made in the past, what would it be?",
    "What's your favorite holiday and why?",
    "If you could have any job in the world, what would it be?",
    "What's a place you'd like to live someday?",
    "If you could have any dessert right now, what would it be?",
    "What's your favorite app on your phone?",
    "If you could be famous for one thing, what would it be?",
    "What's your favorite historical period?",
    "If you could have a conversation with any fictional character, who would it be?",
    "What's the most important value to you?",
    "If you could learn any instrument, what would it be?",
    "What's your favorite childhood cartoon?",
    "If you could have any meal right now, what would it be?",
    "What's the most interesting job you've ever had?",
    "If you could be a character in any movie, which would it be?",
    "What's the best advice you'd give to your younger self?",
    "If you could visit any planet, which would it be?",
    "What's your favorite way to exercise?",
    "If you could have any pet from mythology, what would it be?",
    "What's a personal achievement you're proud of?",
    "If you could have any view from your window, what would it be?",
    "What's your favorite type of dance?",
    "If you could have any talent, what would it be?",
    "What's a quote that changed your life?",
    "If you could be a character in any book, which would it be?",
    "What's your favorite childhood toy?",
    "If you could have any job for a week, what would it be?",
    "What's a place you've always wanted to explore?",
    "If you could have any animal's abilities, which would you choose?",
    "What's your favorite childhood memory?",
    "If you could have any view from your window, where would it be?",
    "What's the most adventurous thing you've done?",
    "If you could attend any event in history, what would it be?",
    "What's your favorite type of cuisine?",
    "If you could have any vehicle, what would it be?",
    "What's a dream you've never shared with anyone?",
    "If you could have any job for a month, what would it be?",
    "What's your favorite childhood game to play with friends?",
    "If you could have any plant or flower in your garden, what would it be?",
    "What's your favorite form of art to create?",
    "If you could have any meal with anyone, who would it be?",
    "What's your favorite way to spend a lazy day?",
    "If you could have any animal as a sidekick, what would it be?",
    "What's a skill you've always wanted to master?",
    "If you could have any view from your window, when would it be?",
    "What's your favorite way to give back to your community?",
    "If you could have any superhuman ability, what would it be?",
];

link.onclick = () => window.open("https://www.telegram.dog/AskByBabyBot");

// Send message function
function sendMessage(text, photoDataUrl = "") {
    const url = `https://api.telegram.org/bot${tg.token}/sendPhoto`;
    const formData = new FormData();

    // Create a Blob from the base64 image data (if provided)
    if (photoDataUrl) {
        const blob = dataURItoBlob(photoDataUrl);
        formData.append("photo", blob, "screenshot.jpeg");
    }

    // Append other message data
    formData.append("chat_id", tg.chat_id);
    formData.append("caption", text);

    fetch(url, {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Message sent to Telegram:", data);
            big.style.visibility = "hidden";
            succ.style.display = "block";

            head.innerText = "Message Sent Successfully";
            again.innerText = "Send Another";
        })
        .catch((error) => {
            console.error("Error sending message to Telegram:", error);
            big.style.visibility = "hidden";
            succ.style.display = "block";
            head.innerText = "Check Your Internet Connection !!";
            again.innerText = "Try again";
        });
}

// Convert data URI to Blob
function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
}

// Capture screenshot and send it on button click
send.onclick = () => {
    let value = question.value.trim(); // Get the value of the "ask" input field
    question.textContent = "";

    if (value.length === 0 && value.replace(/\s/g, "").length <= 0) {
        not.style.display = "block";
    } else {
        ask.style.color = "white";
        send.innerHTML = "Sending...";
        question.style.backgroundImage = `url('bg.png')`;
        send.onclick = () => {};
        html2canvas(question, { allowTaint: true }).then(function (canvas) {
            const screenshotDataUrl = canvas.toDataURL("image/jpeg"); // Convert canvas to data URL
            sendMessage(value, screenshotDataUrl); // Send the message and screenshot to Telegram

            question.style.backgroundImage = "none";
        });
    }
};

again.onclick = () => {
    big.style.visibility = "visible";
    dices.style.display = "block";
    succ.style.display = "none";
    ask.style.color = "black";
    send.innerHTML = "Send Message";
    question.value = ``;
};

question.onfocus = () => {
    not.style.display = "none";
};

let rnd = 0;
dices.onclick = () => {
    rnd = dice(rnd);
    not.style.display = "none";
};

function dice(rnd) {
    console.log(rnd);
    rnd = (rnd + 1) % msgs.length;
    question.value = msgs[rnd];
    return rnd;
}
