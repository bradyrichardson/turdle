<template>
  <div class="turdle">
    <div class="turtle-image">
      <img src="../assets/turtle.jpg" />
      <p>What is this turtle's name?</p>
    </div>
    <div class="answer-grid">
      <div class="tile-row">
        <div v-for="tile in this.grid[0]" :key="tile['number']">
          <div :class="tile.class" class="unmarked">
            <strong>
              <div :class="tile.class">{{ tile.letter }}</div>
            </strong>
          </div>
        </div>
      </div>
      <div class="tile-row">
        <div v-for="tile in this.grid[1]" :key="tile['number']">
          <div :class="tile.class" class="unmarked">
            <strong>
              <div :class="tile.class">{{ tile.letter }}</div>
            </strong>
          </div>
        </div>
      </div>
      <div class="tile-row">
        <div v-for="tile in this.grid[2]" :key="tile['number']">
          <div :class="tile.class" class="unmarked">
            <strong>
              <div :class="tile.class">{{ tile.letter }}</div>
            </strong>
          </div>
        </div>
      </div>
      <div class="tile-row">
        <div v-for="tile in this.grid[3]" :key="tile['number']">
          <div :class="tile.class" class="unmarked">
            <strong>
              <div :class="tile.class">{{ tile.letter }}</div>
            </strong>
          </div>
        </div>
      </div>
      <div class="tile-row">
        <div v-for="tile in this.grid[4]" :key="tile['number']">
          <div :class="tile.class" class="unmarked">
            <strong>
              <div :class="tile.class">{{ tile.letter }}</div>
            </strong>
          </div>
        </div>
      </div>
      <div class="tile-row">
        <div v-for="tile in this.grid[5]" :key="tile['number']">
          <div :class="tile.class" class="unmarked">
            <strong>
              <div :class="tile.class">{{ tile.letter }}</div>
            </strong>
          </div>
        </div>
      </div>
    </div>
    <form class="keyboard">
      <div class="keyboard-row">
        <button class="keyboard-key" @click.prevent="markTile('Q')">Q</button>
        <button class="keyboard-key" @click.prevent="markTile('W')">W</button>
        <button class="keyboard-key" @click.prevent="markTile('E')">E</button>
        <button class="keyboard-key" @click.prevent="markTile('R')">R</button>
        <button class="keyboard-key" @click.prevent="markTile('T')">T</button>
        <button class="keyboard-key" @click.prevent="markTile('Y')">Y</button>
        <button class="keyboard-key" @click.prevent="markTile('U')">U</button>
        <button class="keyboard-key" @click.prevent="markTile('I')">I</button>
        <button class="keyboard-key" @click.prevent="markTile('O')">O</button>
        <button class="keyboard-key" @click.prevent="markTile('P')">P</button>
      </div>
      <div class="keyboard-row">
        <button class="keyboard-key" @click.prevent="markTile('A')">A</button>
        <button class="keyboard-key" @click.prevent="markTile('S')">S</button>
        <button class="keyboard-key" @click.prevent="markTile('D')">D</button>
        <button class="keyboard-key" @click.prevent="markTile('F')">F</button>
        <button class="keyboard-key" @click.prevent="markTile('G')">G</button>
        <button class="keyboard-key" @click.prevent="markTile('H')">H</button>
        <button class="keyboard-key" @click.prevent="markTile('J')">J</button>
        <button class="keyboard-key" @click.prevent="markTile('K')">K</button>
        <button class="keyboard-key" @click.prevent="markTile('L')">L</button>
      </div>
      <div class="keyboard-row">
        <button
          class="keyboard-key"
          id="big-button1"
          @click.prevent="enterAnswer"
        >
          Enter
        </button>
        <button class="keyboard-key" @click.prevent="markTile('Z')">Z</button>
        <button class="keyboard-key" @click.prevent="markTile('X')">X</button>
        <button class="keyboard-key" @click.prevent="markTile('C')">C</button>
        <button class="keyboard-key" @click.prevent="markTile('V')">V</button>
        <button class="keyboard-key" @click.prevent="markTile('B')">B</button>
        <button class="keyboard-key" @click.prevent="markTile('N')">N</button>
        <button class="keyboard-key" @click.prevent="markTile('M')">M</button>
        <button
          class="keyboard-key"
          id="big-button2"
          @click.prevent="removeLetter"
        >
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: "JAMES",
      letter: "",
      currentRow: 0,
      currentTile: 0,
      grid: [
        [
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
        ],
        [
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
        ],
        [
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
        ],
        [
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
        ],
        [
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
        ],
        [
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
          { class: "grid-tile", letter: "" },
        ],
      ],
    };
  },
  methods: {
    markTile(value) {
      //FIXME last tile should be deleted before it is changeable
      console.log(this.currentTile);
      if (this.grid[this.currentRow][this.currentTile]["letter"] !== "") {
        if (this.currentTile < 4) {
          this.currentTile++;
        }
      }
      this.grid[this.currentRow][this.currentTile]["letter"] = value;
      this.grid[this.currentRow][this.currentTile]["class"] =
        "grid-tile marked";
      if (this.currentTile < 4) {
        this.currentTile++;
      }
    },
    removeLetter() {
      console.log(this.currentTile);
      if (this.currentTile > 4) {
        this.currentTile = 4;
      }
      if (this.currentTile === 0) {
        this.grid[this.currentRow][this.currentTile]["letter"] = "";
        this.grid[this.currentRow][this.currentTile]["class"] = "grid-tile";
        return;
      }
      if (this.grid[this.currentRow][this.currentTile]["letter"] === "") {
        this.grid[this.currentRow][this.currentTile]["class"] = "grid-tile";
        if (this.currentTile > 0) {
          this.currentTile--;
        }
      }
      this.grid[this.currentRow][this.currentTile]["letter"] = "";
      this.grid[this.currentRow][this.currentTile]["class"] = "grid-tile";
      if (this.currentTile > 0) {
        this.currentTile--;
      }
      console.log(this.currentTile);
    },
    enterAnswer() {
      if (
        this.currentTile < 4 ||
        this.grid[this.currentRow][4]["letter"] === ""
      ) {
        console.log("Not a valid answer");
        return;
      }
      var answerKey = this.answer.split("");
      console.log(answerKey);
      for (var i = 0; i < answerKey.length; i++) {
        if (this.grid[this.currentRow][i]["letter"] === answerKey[i]) {
          this.grid[this.currentRow][i]["class"] = "grid-tile marked correct";
          answerKey[i] = " ";
        }
      }
      for (i = 0; i < answerKey.length; i++) {
        if (answerKey.includes(this.grid[this.currentRow][i]["letter"])) {
          this.grid[this.currentRow][i]["class"] = "grid-tile marked partial";
          answerKey[
            answerKey.indexOf(this.grid[this.currentRow][i]["letter"])
          ] = " ";
        }
      }
      for (i = 0; i < answerKey.length; i++) {
        if (this.grid[this.currentRow][i]["class"] === "grid-tile marked") {
          this.grid[this.currentRow][i]["class"] = "grid-tile marked incorrect";
        }
      }
      this.currentRow++;
      this.currentTile = 0;
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

img {
  border-radius: 100px;
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
  background-color: #fff;
  border: solid 2px black;
  margin: 0 5px 5px 0;
  color: #000;
  font-size: 30px;
}
.keyboard-row {
  width: 100%;
}
.keyboard-key {
  margin: 2px;
  height: 50px;
  width: 40px;
  border-radius: 5px;
  background-color: white;
  color: grey;
}
.big-button {
  width: 100px;
}
#big-button1,
#big-button2 {
  width: 50px;
}
.marked {
  border-radius: 10px;
}
.incorrect {
  background-color: grey;
  color: #fff;
}
.partial {
  background-color: #e1ad01;
  color: #fff;
}
.correct {
  background-color: green;
  color: #fff;
}
.unmarked {
  background-color: #fff;
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
