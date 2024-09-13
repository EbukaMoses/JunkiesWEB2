const API_KEY = "AIzaSyBzAfSgh2s_4zUImFYw6l4-UTTQ06NNJTQ";
const responses = document.getElementsByClassName("responses");
const userInput = document.getElementById("message");
const sendButton = document.getElementById("submit");
const editButton = document.getElementById("editbtn");

const value = userInput.value;

// editButton.addEventListener("click", (e) => {
//   alert(e.parentElement.tagName);
// });
sendButton.addEventListener("click", () => {
  const userInput = document.getElementById("message").value;
  //   alert(responses);
  getResponse(userInput);
});

const getResponse = async (value) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: value }],
            },
          ],
        }), // Closing parenthesis is correctly placed here
      }
    );
    const result = await response.json();
    const text = result.candidates[0].content.parts[0].text;
    if (document.querySelector(".responses") != null) {
      document.querySelector(".responses").innerHTML += `<div class="user message">
            <div class="identity">
                <i class="user-icon">u</i>
            </div>
            <div class="flex">
                <div class="content">
                    <p>${value}</p>
                </div>
                <span id="editbtn"><i class="fa-regular fa-pen-to-square"></i></span>
            </div>
        </div>
        <div class="assistant message">
            <div class="identity">
                <i class="gpt user-icon">G</i>
            </div>
            <div class="content">
                <p>${text}</p>
            </div>`;
    } else {
      alert("e no work");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
