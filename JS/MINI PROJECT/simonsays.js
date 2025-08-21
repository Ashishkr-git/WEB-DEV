

(() => {
  // --- Query required elements ---
  const pads = Array.from(document.querySelectorAll(".pad"));
  const statusEl = document.getElementById("status");
  const levelEl = document.getElementById("level");
  const bestEl = document.getElementById("best");
  const startBtn = document.getElementById("start");
  const strictBtn = document.getElementById("strict");
  const muteBtn = document.getElementById("mute");

  if (
    pads.length !== 4 ||
    !statusEl ||
    !levelEl ||
    !bestEl ||
    !startBtn ||
    !strictBtn ||
    !muteBtn
  ) {
    console.warn("Simon Says: Required DOM elements not found.");
  }

  // --- Game State ---
  let sequence = [];
  let playerIndex = 0;
  let level = 0;
  let best = 0;
  let acceptingInput = false;
  let strict = false;
  let muted = false;

  // --- Sounds via Web Audio (fallback-safe) ---
  let ctx = null;
  const freqs = [329.63, 261.63, 220.0, 164.81]; // G#4, C4, A3, E3
  const ensureAudio = () => {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) ctx = new AC();
    }
  };

  function beep(i, time = 0.35, volume = 0.15) {
    if (muted) return;
    ensureAudio();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freqs[i];
    gain.gain.value = volume;
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    setTimeout(() => {
      try {
        osc.stop();
      } catch {}
      osc.disconnect();
      gain.disconnect();
    }, time * 1000);
  }

  function errorSound() {
    if (muted) return;
    ensureAudio();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.value = 110;
    gain.gain.value = 0.2;
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    setTimeout(() => {
      try {
        osc.stop();
      } catch {}
      osc.disconnect();
      gain.disconnect();
    }, 300);
  }

  // --- Utils ---
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function setStatus(text, cls = "") {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.className = "status " + cls;
  }

  function setLevel(n) {
    level = n;
    if (levelEl) levelEl.textContent = String(level);
    best = Math.max(best, level);
    if (bestEl) bestEl.textContent = String(best);
  }

  function lightPad(i, duration = 500) {
    const pad = pads[i];
    if (!pad) return Promise.resolve();
    pad.classList.add("lit");
    beep(i, duration / 1000);
    return new Promise((resolve) => {
      setTimeout(() => {
        pad.classList.remove("lit");
        resolve();
      }, duration);
    });
  }

  const randomPad = () => Math.floor(Math.random() * 4);

  // --- Core Loop ---
  async function playSequence() {
    acceptingInput = false;
    setStatus("Watch…");
    const base = Math.max(520 - level * 12, 260);
    for (let i = 0; i < sequence.length; i++) {
      await lightPad(sequence[i], base);
      await sleep(Math.max(base * 0.45, 120));
    }
    setStatus("Your turn");
    acceptingInput = true;
    playerIndex = 0;
  }

  async function nextRound() {
    sequence.push(randomPad());
    setLevel(level + 1);
    await sleep(500);
    await playSequence();
  }

  async function handlePlayerInput(i) {
    if (!acceptingInput) return;

    // Immediate feedback
    const pad = pads[i];
    if (pad) {
      pad.classList.add("lit");
      beep(i, 0.18);
      setTimeout(() => pad.classList.remove("lit"), 140);
    }

    const expected = sequence[playerIndex];
    if (i !== expected) {
      acceptingInput = false;
      errorSound();
      setStatus("Wrong! " + (strict ? "Restarting…" : "Try again"), "muted");
      await sleep(600);
      if (strict) {
        startGame(true);
      } else {
        playerIndex = 0;
        await playSequence();
      }
      return;
    }

    playerIndex++;
    if (playerIndex === sequence.length) {
      acceptingInput = false;
      setStatus("Good! Next round…");
      await sleep(600);
      await nextRound();
    }
  }

  // --- Controls ---
  async function startGame(hard = false) {
    setStatus("Starting…");
    await sleep(300);
    sequence = [];
    setLevel(0);
    if (hard) best = Math.max(best, 0);
    await nextRound();
  }

  // Wire events
  if (startBtn) startBtn.addEventListener("click", () => startGame(true));
  if (strictBtn)
    strictBtn.addEventListener("click", () => {
      strict = !strict;
      strictBtn.textContent = "Strict: " + (strict ? "On" : "Off");
    });
  if (muteBtn)
    muteBtn.addEventListener("click", () => {
      muted = !muted;
      muteBtn.textContent = "Sound: " + (muted ? "Off" : "On");
    });

  pads.forEach((pad) => {
    pad.addEventListener("pointerdown", () =>
      handlePlayerInput(+pad.dataset.id)
    );
  });

  // Optional: keyboard support (1-4 and arrows)
  window.addEventListener("keydown", (e) => {
    const map = {
      1: 0,
      2: 1,
      3: 2,
      4: 3,
      ArrowLeft: 0,
      ArrowUp: 1,
      ArrowDown: 2,
      ArrowRight: 3,
    };
    if (e.key in map) handlePlayerInput(map[e.key]);
  });

  // Initial status
  setStatus("Press Start");
  if (levelEl) levelEl.textContent = "0";
  if (bestEl) bestEl.textContent = "0";
})();
