/* Portfolio chat widget. Works on any site: add one line before </body>
   <script src="chat-widget.js" data-endpoint="https://YOUR-FUNCTION-URL.lambda-url.REGION.on.aws/" defer></script>
   Colors: override --cw-accent / --cw-accent-fg / --cw-bg / --cw-fg on :root to match your site. */
(() => {
  const endpoint = document.currentScript.dataset.endpoint;
  const style = document.createElement("style");
  style.textContent = `
  .cw{--a:var(--cw-accent,#2563eb);--bg:var(--cw-bg,#fff);--fg:var(--cw-fg,#111);font:15px/1.4 system-ui,sans-serif;color:var(--fg)}
  .cw-btn{position:fixed;right:20px;bottom:20px;z-index:9999;width:56px;height:56px;border-radius:50%;border:0;background:var(--a);color:var(--cw-accent-fg,#fff);font-size:24px;cursor:pointer;box-shadow:0 4px 14px #0004}
  .cw-box{position:fixed;right:20px;bottom:90px;z-index:9999;width:min(360px,calc(100vw - 40px));height:min(480px,calc(100vh - 120px));display:none;flex-direction:column;background:var(--bg);border:1px solid #8884;border-radius:14px;box-shadow:0 8px 30px #0004;overflow:hidden}
  .cw-box.open{display:flex}
  .cw-head{padding:12px 14px;font-weight:600;background:var(--a);color:var(--cw-accent-fg,#fff)}
  .cw-log{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px}
  .cw-m{max-width:85%;padding:8px 12px;border-radius:12px;white-space:pre-wrap;overflow-wrap:anywhere}
  .cw-m.u{align-self:flex-end;background:var(--a);color:var(--cw-accent-fg,#fff)}
  .cw-m.b{align-self:flex-start;background:#8882}
  .cw-form{display:flex;gap:8px;padding:10px;border-top:1px solid #8884}
  .cw-in{flex:1;min-width:0;padding:10px;border:1px solid #8886;border-radius:8px;background:var(--bg);color:var(--fg);font:inherit}
  .cw-send{padding:0 14px;border:0;border-radius:8px;background:var(--a);color:var(--cw-accent-fg,#fff);font:inherit;cursor:pointer}
  .cw-send:disabled{opacity:.5;cursor:default}`;
  document.head.append(style);

  const root = document.createElement("div");
  root.className = "cw";
  root.innerHTML = `
    <button class="cw-btn" aria-label="Open chat" aria-expanded="false">💬</button>
    <section class="cw-box" aria-label="Chat">
      <div class="cw-head">Ask me anything</div>
      <div class="cw-log" aria-live="polite"></div>
      <form class="cw-form">
        <input class="cw-in" maxlength="300" placeholder="Type your question…" aria-label="Your question" required>
        <button class="cw-send">Send</button>
      </form>
    </section>`;
  document.body.append(root);

  const $ = (s) => root.querySelector(s);
  const btn = $(".cw-btn"), box = $(".cw-box"), log = $(".cw-log"), form = $(".cw-form"), input = $(".cw-in"), send = $(".cw-send");

  const add = (who, text) => {
    const m = document.createElement("div");
    m.className = "cw-m " + who;
    m.textContent = text; // textContent, never innerHTML: the answer can't inject markup
    log.append(m);
    log.scrollTop = log.scrollHeight;
    return m;
  };

  btn.onclick = () => {
    const open = box.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    if (open) {
      if (!log.children.length) add("b", "Hi! Ask me about my experience, skills or projects.");
      input.focus();
    }
  };

  form.onsubmit = async (e) => {
    e.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    input.value = "";
    send.disabled = true;
    add("u", question);
    const pending = add("b", "…");
    try {
      const r = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question }) });
      const data = await r.json();
      pending.textContent = data.answer || data.error || "Something went wrong.";
    } catch {
      pending.textContent = "Couldn't reach the server. Please try again.";
    }
    send.disabled = false;
    input.focus();
  };
})();
