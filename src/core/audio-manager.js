export class AudioManager {
  constructor({ basePath = './assets/audio/', volume = 0.7 } = {}) {
    this.basePath = basePath;
    this.volume = volume;
    this.enabled = true;
    this.unlocked = false;
    this.cache = new Map();
  }

  unlock() {
    this.unlocked = true;
  }

  setEnabled(value) {
    this.enabled = Boolean(value);
  }

  setVolume(value) {
    this.volume = Math.max(0, Math.min(1, Number(value) || 0));
  }

  play(name, { volume = 1, loop = false } = {}) {
    if (!this.enabled || !this.unlocked || !name) return null;
    let audio = this.cache.get(name);
    if (!audio) {
      audio = new Audio(`${this.basePath}${name}.ogg`);
      this.cache.set(name, audio);
    }
    audio.volume = this.volume * volume;
    audio.loop = loop;
    audio.currentTime = 0;
    audio.play().catch(() => {});
    return audio;
  }
}
