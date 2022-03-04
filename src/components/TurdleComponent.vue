<template>
  <div class="turdle">
    <div class="turtle-image">
      <img src="/" />
      <p>What is this animal's name?</p>
    </div>
    <div class="answer-grid">
      <div class="tile-row">
        <div class="grid-tile correct">{{ letter }}</div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
      </div>
      <div class="tile-row">
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
      </div>
      <div class="tile-row">
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
      </div>
      <div class="tile-row">
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
      </div>
      <div class="tile-row">
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
        <div class="grid-tile"></div>
      </div>
    </div>
    <form class="keyboard">
      <div class="keyboard-row">
        <button @click.prevent="markTile('Q')">Q</button>
        <button @click.prevent="markTile('W')">W</button>
        <button @click.prevent="markTile('E')">E</button>
        <button @click.prevent="markTile('R')">R</button>
        <button @click.prevent="markTile('T')">T</button>
        <button @click.prevent="markTile('Y')">Y</button>
        <button>U</button>
        <button>I</button>
        <button>O</button>
        <button>P</button>
      </div>
      <div class="keyboard-row">
        <button>A</button>
        <button>S</button>
        <button>D</button>
        <button>F</button>
        <button>G</button>
        <button>H</button>
        <button>J</button>
        <button>K</button>
        <button>L</button>
      </div>
      <div class="keyboard-row">
        <button id="big-button1">Enter</button>
        <button>Z</button>
        <button>X</button>
        <button>C</button>
        <button>V</button>
        <button>B</button>
        <button>N</button>
        <button>M</button>
        <button id="big-button2" @click.prevent="removeLetter">Delete</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      letter: "",
      current: 1,
      grid: [
        { class: "grid-tile", letter: "", number: 1 },
        { class: "grid-tile", letter: "", number: 2 },
        { class: "grid-tile", letter: "", number: 3 },
        { class: "grid-tile", letter: "", number: 4 },
        { class: "grid-tile", letter: "", number: 5 },
        { class: "grid-tile", letter: "", number: 6 },
        { class: "grid-tile", letter: "", number: 7 },
        { class: "grid-tile", letter: "", number: 8 },
        { class: "grid-tile", letter: "", number: 9 },
        { class: "grid-tile", letter: "", number: 10 },
        { class: "grid-tile", letter: "", number: 11 },
        { class: "grid-tile", letter: "", number: 12 },
        { class: "grid-tile", letter: "", number: 13 },
        { class: "grid-tile", letter: "", number: 14 },
        { class: "grid-tile", letter: "", number: 15 },
        { class: "grid-tile", letter: "", number: 16 },
        { class: "grid-tile", letter: "", number: 17 },
        { class: "grid-tile", letter: "", number: 18 },
        { class: "grid-tile", letter: "", number: 19 },
        { class: "grid-tile", letter: "", number: 20 },
        { class: "grid-tile", letter: "", number: 21 },
        { class: "grid-tile", letter: "", number: 22 },
        { class: "grid-tile", letter: "", number: 23 },
        { class: "grid-tile", letter: "", number: 24 },
        { class: "grid-tile", letter: "", number: 25 },
      ],
      answer: "JAMES",
      guess: "",
      guesses: [],
    };
  },
  methods: {
    markTile(value) {
      this.letter = value;
      this.current++;
      console.log(this.current);
      this.grid[this.current]["class"] = "grid-tile correct";
      console.log(this.grid[this.current]["class"]);
      return this.current;
    },
    removeLetter() {
      if (this.current === 1) {
        console.log("Empty");
        return;
      }
      this.current--;
      console.log(this.current);
    },
  },
};
</script>

<style>
.turdle {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.answer-grid {
  margin-bottom: 100px;
}
.tile-row {
  display: flex;
}
.grid-tile {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  background-color: grey;
  border: solid 2px black;
  margin: 0 5px 5px 0;
  color: white;
}
.keyboard {
  background-color: green;
}
.keyboard-row {
  width: 100%;
}
.keyboard-row button {
  margin: 2px;
  height: 50px;
  width: 40px;
  border-radius: 5px;
  background-color: white;
  color: grey;
  font: bold 30px; /*FIXME font not working*/
}
.big-button {
  width: 100px;
}
#big-button1,
#big-button2 {
  width: 50px;
}
.correct {
  background-color: green;
}

@media only screen and (max-width: 400px) {
  .answer-grid {
    margin-bottom: 50px;
  }
  .grid-tile {
    height: 50px;
    width: 50px;
  }
  .keyboard-row button {
    height: 40px;
    width: 30px;
  }
}
</style>
