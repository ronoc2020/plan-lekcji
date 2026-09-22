export class GameClock {
  constructor({ interval = 1000 } = {}) {
    this.interval = interval;
    this.timer = null;
    this.listeners = new Set();
  }

  start() {
    if (this.timer) return;
    this.timer = setInterval(() => this.listeners.forEach(listener => listener(Date.now())), this.interval);
  }

  stop() {
    clearInterval(this.timer);
    this.timer = null;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}
