document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("my-form");
  const status = document.getElementById("my-form-status");
  const submitButton = document.getElementById("my-form-button");

  if (!form || !status || !submitButton) return;

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

    const setBusy = (busy) => {
      submitButton.disabled = busy;
      if (busy) {
        submitButton.setAttribute("aria-disabled", "true");
        form.setAttribute("aria-busy", "true");
      } else {
        submitButton.removeAttribute("aria-disabled");
        form.removeAttribute("aria-busy");
      }
    };

    const setStatus = (text, color) => {
      status.textContent = text;
      status.style.color = color;
    };

    const lang = getLang();
    setBusy(true);
    setStatus(messages[lang].sending, "blue");

    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      const responseLang = getLang();
      if (response.ok) {
        setStatus(messages[responseLang].success, "green");
        form.reset();
      } else {
        setStatus(messages[responseLang].fail, "red");
      }
    } catch {
      const responseLang = getLang();
      setStatus(messages[responseLang].network, "red");
    } finally {
      setBusy(false);
    }
  });
});
