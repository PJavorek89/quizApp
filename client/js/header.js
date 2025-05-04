//vytvoreni header

document.querySelector("header").innerHTML = `<nav class="navbar">
        <div class="logo">quizApp</div>
        <ul class="nav-links">
          <li><a href="index.html">Domů</a></li>
          <li><a href="score.html">Score</a></li>
          <li><a href="#">O aplikaci</a></li>
        </ul>
        <button id="loginBtn">Přihlásit se</button>
      </nav>`;

//header
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");

loginBtn.addEventListener("click", () => {
  loginModal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  loginModal.classList.add("hidden");
});

// Schování modalu při kliknutí mimo obsah
loginModal.addEventListener("click", (event) => {
  /*
    if (event.target === loginModal) {
    loginModal.classList.add("hidden");
  }
    */
  //tato podminka je jistejsi
  if (!modalContent.contains(event.target)) {
    loginModal.classList.add("hidden");
  }
});
