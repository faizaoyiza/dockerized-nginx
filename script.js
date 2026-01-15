document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn");
  const text = document.getElementById("text");

  button.addEventListener("click", () => {
    text.textContent = "🚀 Website served by NGINX 1.27.0 inside Docker!";
    text.style.color = "green";
  });
});
