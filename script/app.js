

// const submitBtn = document.querySelector('#submit')

// async function getMessage() {
//   console.log('clicked')

//   const options = {
//     method: 'POST',
//     headers: {
//       // 'Authorization': `Bearer ${API_KEY}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       "contents":[{"parts":[{"text":"Explain how AI works"}]}],
//       max_tokens: 300
//     })
//   }
//   try {
//     const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCqW3ozQUnPesXeui6tjti4tPniKzOPCL8', options)
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error(error)
//   }
// } 

// submitBtn.addEventListener('click', getMessage)


const API_KEY = '//put an api key'
const chatBox = document.getElementById("chat_box");
const userInput = document.getElementById("message");
const sendButton = document.getElementById("submit");

sendButton.addEventListener("click", () => {
    const message = userInput.value.trim();
    if (message) {
        // addMessage("user", message);
        userInput.value = "";
        sendMessageToAPI(message);
    }
});

// function addMessage(sender, message) {
//     const messageElement = document.getElementsByClassName('chat_box');
//     messageElement.classList.add("message", sender === "user" ? "user-message" : "bot-message");
//     messageElement.textContent = message;
//     chatBox.appendChild(messageElement);
//     chatBox.scrollTop = chatBox.scrollHeight;
// }

async function sendMessageToAPI(message) {
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", // Using GPT-3.5-turbo model
                messages: [{ role: "user", content: message }]
            })
        });

        const data = await response.json();
        const reply = data.choices[0].message.content;
        console.log(reply)
        // addMessage("bot", reply);
    } catch (error) {
        console.error("Error making the request:", error.message);
        // addMessage("bot", "An error occurred. Please try again.");
    }
}

