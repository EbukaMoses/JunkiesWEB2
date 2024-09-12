const API_KEY = "AIzaSyBzAfSgh2s_4zUImFYw6l4-UTTQ06NNJTQ";
const chatBox = document.getElementById("chat_box");
const userInput = document.getElementById("message");
const sendButton = document.getElementById("submit");

// sendButton.addEventListener("click", () => {
//   const message = userInput.value.trim();
//   if (message) {
//     // addMessage("user", message);
//     userInput.value = "";
//     sendMessageToAPI(message);
//   }
// });



const getResponse = async (value) => {
    const response = await fetch(https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
        body: JSON.stringify({
            "contents": [{
                "parts": [{ "text": value }]
            }]
        })
    
    })
    const result = await response.json();
    const text = result.candidates[0].content.parts[0].text;
    return text
}
