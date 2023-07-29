window.addEventListener("load", () => {
  const form = document.querySelector("#user-form");
  const input = document.querySelector("#name");
  const list_el = document.querySelector("#users");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = input.value;
    const user_el = document.createElement("div");
    user_el.classList.add("user");

    const user_content_el = document.createElement("div");
    user_content_el.classList.add("content");

    user_el.appendChild(user_content_el);
  });
});
