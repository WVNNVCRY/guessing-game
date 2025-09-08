class GuessingGame {
  constructor() {
    this.left = null;
    this.right = null;
    this.lastGuess = null;
  }

  setRange(min, max) {
    this.left = min;
    this.right = max;
  }

  guess() {
    this.lastGuess = Math.ceil((this.right + this.left) / 2);
    return this.lastGuess;
  }

  lower() {
    this.right = this.lastGuess;
  }

  greater() {
    this.left = this.lastGuess;
  }
}

module.exports = GuessingGame;
