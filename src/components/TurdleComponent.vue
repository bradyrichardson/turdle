<template>
  <div class="turdle">
    <StatsComponent
      :finished="finished"
      :winner="winner"
      :winStreak="winStreak"
      :bestStreak="bestStreak"
      :namesMissed="namesMissed"
      :attempts="attempts"
      :answer="answer"
    >
    </StatsComponent>
    <div class="turtle-image">
      <img src="../assets/turtle.jpg" />
      <p>What is this turtle's name?</p>
    </div>
    <div class="error" v-if="error">
      {{ this.errorMsg }}
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
import namesArray from "../names.vue";
import seedrandom from "seedrandom";
import StatsComponent from "@/components/StatsComponent.vue";

export default {
  name: "TurdleComponent",
  components: {
    StatsComponent,
  },
  data() {
    return {
      answer: "",
      letter: "",
      currentRow: 0,
      currentTile: 0,
      finished: false,
      //fakeDate: 51,
      winner: false,
      error: false,
      errorMsg: "",
      winStreak: "",
      bestStreak: "",
      namesMissed: [],
      attempts: [],
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
  created() {
    this.reset();
    this.getWinStatus();
    this.getFinishState();
    this.getName();
    this.getGrid();
    this.getRow();
    this.getKeyboard();
    this.getWinStreak();
    this.getBestStreak();
    this.getAttempts();
    this.getNamesMissed();
  },
  computed: {
    currentDate() {
      let date = new Date().getDate(); //use fakeDate here for debugging
      return date;
    },
    lock() {
      if (
        this.currentTile === 4 ||
        this.currentTile === 9 ||
        this.currentTile === 14 ||
        this.currentTile === 19 ||
        this.currentTile === 24 ||
        this.currentTile === 29
      ) {
        return true;
      } else {
        return false;
      }
    },
    userAnswer() {
      let name = "";
      for (let keyObj of this.grid[this.currentRow]) {
        name += keyObj.letter;
      }
      return name;
    },
  },
  methods: {
    markTile(value) {
      if (
        this.lock === true &&
        this.grid[this.currentRow][this.currentTile].letter !== ""
      ) {
        return;
      }
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
      //check for invalid answers
      if (
        this.currentTile < 4 ||
        this.grid[this.currentRow][4]["letter"] === ""
      ) {
        this.displayError("Name must be five letters long.");
        return;
      }
      if (
        !namesArray.some(
          (name) => name.toLowerCase() === this.userAnswer.toLowerCase()
        )
      ) {
        this.displayError("Not a valid name.");
        return;
      }
      if (this.error) {
        this.error = false;
      }
      var answerKey = this.answer.split("");
      var answerEntry = [];
      //check and mark the correct tiles/keys
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
      //check and mark the partially correct tiles/keys
      for (i = 0; i < answerKey.length; i++) {
        if (
          answerKey.includes(this.grid[this.currentRow][i]["letter"]) &&
          this.grid[this.currentRow][i]["class"] !== "grid-tile marked correct"
        ) {
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
      //mark remaining keys as incorrect
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
      //user's answer matches the answer
      if (this.userAnswer.toLowerCase() === this.answer.toLowerCase()) {
        this.winner = true;
        if (!localStorage.getItem("winStatus")) {
          localStorage.setItem("winStatus", String(this.winner));
        }
      }
      //game is over
      if (this.currentRow === 5 || this.winner === true) {
        this.saveResults();
        this.setGrid();
        this.setRow();
        this.setKeyboard();
        return;
      }
      //if the game is not over, continue and update the row/tile position
      this.currentRow++;
      this.currentTile = 0;
      //set these things so that a refresh doesn't reset the current game
      this.setGrid();
      this.setRow();
      this.setKeyboard();
    },
    displayError(message) {
      this.error = true;
      this.errorMsg = message;
    },
    getName() {
      var today = new Date();
      var hashDay =
        today.getDate() * 31 + today.getMonth() * 31 + today.getYear() * 31;
      var rng = seedrandom(hashDay);
      var hashIndex = Math.floor((rng() * 100000) % namesArray.length);
      this.answer = namesArray[hashIndex].toUpperCase();
    },
    setGrid() {
      localStorage.setItem("currentGrid", JSON.stringify(this.grid));
    },
    getGrid() {
      let currentGrid = localStorage.getItem("currentGrid");
      if (!currentGrid) {
        return;
      }
      this.grid = JSON.parse(currentGrid);
    },
    setRow() {
      localStorage.setItem("currentRow", String(this.currentRow));
    },
    getRow() {
      let currentRow = localStorage.getItem("currentRow");
      if (!currentRow) {
        return;
      }
      this.currentRow = Number(currentRow);
    },
    setKeyboard() {
      localStorage.setItem("currentKeyboard", JSON.stringify(this.keyboard));
    },
    getKeyboard() {
      let currentKeyboard = localStorage.getItem("currentKeyboard");
      if (!currentKeyboard) {
        return;
      }
      this.keyboard = JSON.parse(currentKeyboard);
    },
    setFinishState() {
      this.finished = true;
      localStorage.setItem("finishState", String(this.finished));
    },
    getFinishState() {
      let finishState = localStorage.getItem("finishState");
      if (!finishState) {
        return;
      }
      this.finished = Boolean(finishState);
    },
    getWinStatus() {
      let winStatus = localStorage.getItem("winStatus");
      if (!winStatus) {
        return;
      }
      this.winner = Boolean(winStatus);
    },
    setWinStreak() {
      let winStreakExists = localStorage.getItem("winStreak");
      let winStreak;
      if (winStreakExists) {
        winStreak = String(Number(winStreakExists) + 1);
      } else {
        winStreak = "1";
      }
      localStorage.setItem("winStreak", winStreak);
      this.winStreak = winStreak;
    },
    getWinStreak() {
      let winStreak = localStorage.getItem("winStreak");
      if (!winStreak) {
        return;
      }
      this.winStreak = winStreak;
    },
    setBestStreak() {
      let bestStreakExists = localStorage.getItem("bestStreak");
      let bestStreak;
      if (bestStreakExists) {
        if (
          Number(localStorage.getItem("winStreak")) > Number(bestStreakExists)
        ) {
          bestStreak = localStorage.getItem("winStreak");
        } else {
          bestStreak = bestStreakExists;
        }
      } else {
        bestStreak = localStorage.getItem("winStreak");
      }
      localStorage.setItem("bestStreak", bestStreak);
      this.bestStreak = bestStreak;
    },
    getBestStreak() {
      let bestStreak = localStorage.getItem("bestStreak");
      if (!bestStreak) {
        return;
      }
      this.bestStreak = bestStreak;
    },
    //set the winning streak and best streak if the player lost
    setStreaksAtLoss() {
      localStorage.setItem("winStreak", "0");
      if (localStorage.getItem("timesPlayed") === "1") {
        localStorage.setItem("bestStreak", "0");
      }
    },
    setAttempts() {
      let attemptsArray = localStorage.getItem("attemptsWon");
      if (attemptsArray) {
        attemptsArray = JSON.parse(attemptsArray);
        if (this.currentRow < 6) {
          attemptsArray[this.currentRow].num += 1;
        }
        localStorage.setItem("attemptsWon", JSON.stringify(attemptsArray));
        this.attempts = attemptsArray;
      } else {
        attemptsArray = [
          { id: "1 Attempt ", num: 0 },
          { id: "2 Attempts", num: 0 },
          { id: "3 Attempts", num: 0 },
          { id: "4 Attempts", num: 0 },
          { id: "5 Attempts", num: 0 },
          { id: "6 Attempts", num: 0 },
        ];
        attemptsArray[this.currentRow].num += 1;
        localStorage.setItem("attemptsWon", JSON.stringify(attemptsArray));
        this.attempts = attemptsArray;
      }
    },
    getAttempts() {
      let attemptsArray = localStorage.getItem("attemptsWon");
      if (!attemptsArray) {
        return;
      }
      this.attempts = JSON.parse(attemptsArray);
    },
    setNamesMissed() {
      if (localStorage.getItem("winStreak") === "0") {
        let namesExist = localStorage.getItem("names");
        if (namesExist) {
          namesExist = namesExist.split(",");
          namesExist.push(this.answer);
          namesExist = String(namesExist);
          localStorage.setItem("names", namesExist);
        } else {
          let namesArray = [];
          namesArray.push(this.answer);
          namesArray = String(namesArray);
          localStorage.setItem("names", namesArray);
        }
      }
    },
    getNamesMissed() {
      let namesMissed = localStorage.getItem("names");
      if (!namesMissed) {
        return;
      }
      this.namesMissed = namesMissed.split(",");
    },
    setTimesPlayed() {
      let timesPlayedExists = localStorage.getItem("timesPlayed");
      let timesPlayed;
      if (timesPlayedExists) {
        timesPlayed = String(Number(timesPlayedExists) + 1);
      } else {
        timesPlayed = "1";
      }
      localStorage.setItem("timesPlayed", timesPlayed);
    },
    reset() {
      let prevDate = localStorage.getItem("date");
      if (!prevDate) {
        localStorage.setItem("date", this.currentDate);
        return;
      }
      if (Number(prevDate) !== this.currentDate) {
        localStorage.removeItem("currentGrid");
        localStorage.removeItem("currentRow");
        localStorage.removeItem("currentKeyboard");
        localStorage.removeItem("finishState");
        localStorage.removeItem("winStatus");
        localStorage.removeItem("answer");
        this.$root.$data.copyMessage = [];
      }
      localStorage.setItem("date", String(this.currentDate));
    },
    saveResults() {
      this.createCopyMessage();
      this.setTimesPlayed();
      if (this.winner === true) {
        this.setWinStreak();
        this.setBestStreak();
        this.setAttempts();
      } else {
        this.setStreaksAtLoss();
      }
      this.setNamesMissed();
      this.getWinStreak();
      this.getBestStreak();
      this.getAttempts();
      this.getNamesMissed();
      this.setFinishState();
    },
    //create the message which the user can copy and share
    createCopyMessage() {
      let copyMessage = [];
      for (let row of this.grid) {
        for (let tile of row) {
          if (tile.class === "grid-tile") {
            break;
          } else if (tile.class === "grid-tile marked correct") {
            copyMessage.push(String.fromCodePoint(0x1f422));
          } else if (tile.class === "grid-tile marked partial") {
            copyMessage.push(String.fromCodePoint(0x1f7e8));
          } else {
            copyMessage.push(String.fromCodePoint(0x2b1b));
          }
        }
      }
      this.$root.$data.copyMessage = copyMessage;
      localStorage.setItem("copyMessage", String(copyMessage));
    },
  },
};
</script>

<style scoped>
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
.error {
  color: red;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #ffffe0;
  border-radius: 20px;
}
.answer-grid {
  margin-bottom: 40px;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
    margin-bottom: 40px;
  }
  .grid-tile {
    height: 50px;
    width: 50px;
  }
  .keyboard-row .keyboard-key {
    height: 40px;
    width: 30px;
  }
  .keyboard-row .big-button {
    height: 40px;
    width: 45px;
  }
}
</style>
