// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  likeCallback();
});

const modal = document.querySelector("#modal");
console.log(modal);
modal.classList.add("hidden");

const heart = document.querySelectorAll("span.like-glyph");
console.log(heart);

heart.forEach((hearts) => {
  hearts.addEventListener("click", likeCallback);

  function likeCallback(hearts) {
    console.log(hearts.target);
    mimicServerCall()
      .then(() => {
        if (hearts.target.textContent === EMPTY_HEART) {
          hearts.target.classList.add("activated-heart");
          hearts.target.textContent = FULL_HEART;
        } else {
          hearts.target.classList.remove("activated-heart");
          hearts.target.textContent = EMPTY_HEART;
        }
      })
      .catch(() => {
        setTimeout(() => {
          modal, 3000;
        });
      });
  }
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
