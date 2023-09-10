
let tg = {
    token: "6531509928:AAE8AMDZYLdtPy1aVhUCazd9ynuA8oksVg4", // Your bot's token that got from @BotFather
    chat_id: "5356614395" // The user's(that you want to send a message) telegram chat id
}

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

link.onclick = () =>  window.open("https://www.telegram.dog/AskByBabyBot");

// Send message function
function sendMessage(text, photoDataUrl = "") {
    const url = `https://api.telegram.org/bot${tg.token}/sendPhoto`;
    const formData = new FormData();

    // Create a Blob from the base64 image data (if provided)
    if (photoDataUrl) {
        const blob = dataURItoBlob(photoDataUrl);
        formData.append('photo', blob, 'screenshot.jpeg');
    }

    // Append other message data
    formData.append('chat_id', tg.chat_id);
    formData.append('caption', text);

    fetch(url, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent to Telegram:', data);
        big.style.visibility = "hidden";
        succ.style.display = "block";
        
        head.innerText="Message Sent Successfully";
        again.innerText="Send Another";
    })
    .catch(error => {
        console.error('Error sending message to Telegram:', error);
        big.style.visibility = "hidden";
        succ.style.display = "block";
        head.innerText="Check Your Internet Connection !!";
        again.innerText="Try again";
        
    });
}

// Convert data URI to Blob
function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
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

    if (value.length === 0 && value.replace(/\s/g, "").length <= 0 ) {
        not.style.display = "block";
    } 
    else {
        ask.style.color="white";
       send.value="Sending..."
        question.style.backgroundImage = `url('bg.png')`;
        
        html2canvas(question, { allowTaint: true }).then(function(canvas) {
    const screenshotDataUrl = canvas.toDataURL("image/jpeg"); // Convert canvas to data URL
            sendMessage(value, screenshotDataUrl); // Send the message and screenshot to Telegram
    question.style.backgroundImage = 'none';
  
        
    

    
});

            
    }
}

again.onclick = () => {
    big.style.visibility = "visible";
    dices.style.display="block";
    succ.style.display = "none";
    ask.style.color="black";
    send.value="Send Message"
    question.value=``;
   
}

question.onfocus = () => {
    
    not.style.display = "none";
};




let rnd = 0;
dices.onclick = ()=>{ rnd++; dice(); not.style.display="none"}

function dice(){
console.log(rnd);
    switch(rnd)
    {
        case 1:
            question.value="how tall r u"
            break;
            case 2:   
                question.value="i really like you "   
            break;
            case 3:
                question.value="youre cute" 
            break;
            case 4:
                question.value="do you meditate?"
            break;
            case 5:
                question.value="whats your sign"
            break;
            case 6:
                question.value="your worst personality characteristic?"
            break;
            case 7:
                question.value="Have you ever been fired from a job?"
            break;
            case 8:
                question.value="one friend ur thankful for..."
            break;
            case 9:
                question.value="what are ur plans this weekend?"
            break;
            case 10:
                question.value="personality or looks? "
            break;
            default:
                question.value="";
                rnd=0;
    }
}