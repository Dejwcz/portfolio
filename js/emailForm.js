document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("my-form");
  var status = document.getElementById("my-form-status");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    status.innerHTML = "⏳ Sending...";
    status.style.color = "blue";

    var data = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = "✅ Thanks for your message!";
          status.style.color = "green";
          form.reset();
        } else {
          response.json().then((data) => {
            status.innerHTML = "❌ Failed to send message!";
            status.style.color = "red";
          });
        }
      })
      .catch(() => {
        status.innerHTML = "❌ Network error. Try again.";
        status.style.color = "red";
      });
  });
});
