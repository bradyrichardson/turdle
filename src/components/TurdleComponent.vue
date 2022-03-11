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
        <div v-for="key in this.keyboard[0]" :key="key['letterKey']">
          <button :class="key.class" @click.prevent="markTile(key.letterKey)">
            {{ key.letterKey }}
          </button>
        </div>
      </div>
      <div class="keyboard-row">
        <div v-for="key in this.keyboard[1]" :key="key['letterKey']">
          <button :class="key.class" @click.prevent="markTile(key.letterKey)">
            {{ key.letterKey }}
          </button>
        </div>
      </div>
      <div class="keyboard-row">
        <button class="keyboard-key big-button" @click.prevent="enterAnswer">
          Enter
        </button>
        <div v-for="key in this.keyboard[2]" :key="key['letterKey']">
          <button :class="key.class" @click.prevent="markTile(key.letterKey)">
            {{ key.letterKey }}
          </button>
        </div>
        <button class="keyboard-key big-button" @click.prevent="removeLetter">
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
      keyboard: [
        [
          { letterKey: "Q", class: "keyboard-key" },
          { letterKey: "W", class: "keyboard-key" },
          { letterKey: "E", class: "keyboard-key" },
          { letterKey: "R", class: "keyboard-key" },
          { letterKey: "T", class: "keyboard-key" },
          { letterKey: "Y", class: "keyboard-key" },
          { letterKey: "U", class: "keyboard-key" },
          { letterKey: "I", class: "keyboard-key" },
          { letterKey: "O", class: "keyboard-key" },
          { letterKey: "P", class: "keyboard-key" },
        ],
        [
          { letterKey: "A", class: "keyboard-key" },
          { letterKey: "S", class: "keyboard-key" },
          { letterKey: "D", class: "keyboard-key" },
          { letterKey: "F", class: "keyboard-key" },
          { letterKey: "G", class: "keyboard-key" },
          { letterKey: "H", class: "keyboard-key" },
          { letterKey: "J", class: "keyboard-key" },
          { letterKey: "K", class: "keyboard-key" },
          { letterKey: "L", class: "keyboard-key" },
        ],
        [
          { letterKey: "Z", class: "keyboard-key" },
          { letterKey: "X", class: "keyboard-key" },
          { letterKey: "C", class: "keyboard-key" },
          { letterKey: "V", class: "keyboard-key" },
          { letterKey: "B", class: "keyboard-key" },
          { letterKey: "N", class: "keyboard-key" },
          { letterKey: "M", class: "keyboard-key" },
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
    markKey(key, newClass) {
      for (var i = 0; i < this.keyboard.length; i++) {
        for (var j = 0; j < this.keyboard[i].length; j++) {
          if (this.keyboard[i][j]["letterKey"] === key) {
            this.keyboard[i][j]["class"] += " " + newClass;
          }
        }
      }
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
      var answerEntry = []; //need this for marking incorrect keys
      for (var i = 0; i < answerKey.length; i++) {
        answerEntry.push(this.grid[this.currentRow][i]["letter"]);
        if (this.grid[this.currentRow][i]["letter"] === answerKey[i]) {
          this.grid[this.currentRow][i]["class"] = "grid-tile marked correct";
          var setClass = "correct";
          this.markKey(answerKey[i], setClass);
          answerKey[i] = " ";
          answerEntry[i] = " ";
        }
      }
      for (i = 0; i < answerKey.length; i++) {
        if (answerKey.includes(this.grid[this.currentRow][i]["letter"])) {
          this.grid[this.currentRow][i]["class"] = "grid-tile marked partial";
          setClass = "partial";
          var answerKeyArg = this.grid[this.currentRow][i]["letter"];
          this.markKey(answerKeyArg, setClass);
          answerKey[
            answerKey.indexOf(this.grid[this.currentRow][i]["letter"])
          ] = " ";
          answerEntry[
            answerEntry.indexOf(this.grid[this.currentRow][i]["letter"])
          ] = " ";
        }
      }
      for (i = 0; i < answerKey.length; i++) {
        if (this.grid[this.currentRow][i]["class"] === "grid-tile marked") {
          this.grid[this.currentRow][i]["class"] = "grid-tile marked incorrect";
        }
      }
      setClass = "incorrect";
      for (i = 0; i < answerEntry.length; i++) {
        if (answerEntry[i] !== " ") {
          this.markKey(answerEntry[i], setClass);
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
  border: solid 3px #000;
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  width: 70px;
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
