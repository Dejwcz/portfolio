document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("my-form");
  const status = document.getElementById("my-form-status");

  const messages = {
    cs: {
      sending: "⏳ Odesílám...",
      success: "✅ Díky za zprávu!",
      fail: "❌ Odeslání se nezdařilo.",
      network: "❌ Síťová chyba. Zkuste to znovu.",
    },
    en: {
      sending: "⏳ Sending...",
      success: "✅ Thanks for your message!",
      fail: "❌ Failed to send message!",
      network: "❌ Network error. Try again.",
    },
  };

  const getLang = () =>
    document.documentElement.getAttribute("data-lang") === "en" ? "en" : "cs";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const lang = getLang();
    status.textContent = messages[lang].sending;
    status.style.color = "blue";

    const data = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        const responseLang = getLang();
        if (response.ok) {
          status.textContent = messages[responseLang].success;
          status.style.color = "green";
          form.reset();
        } else {
          status.textContent = messages[responseLang].fail;
          status.style.color = "red";
        }
      })
      .catch(() => {
        const responseLang = getLang();
        status.textContent = messages[responseLang].network;
        status.style.color = "red";
      });
  });
});
