<template>
  <transition v-if="finished" name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <div class="name">
          <h1>Today's &#128034;</h1>
          <div v-if="winner">
            <strong>
              <p class="winner">{{ this.answer }}</p>
            </strong>
          </div>
          <div v-else>
            <strong>
              <p class="loser">{{ this.answer }}</p>
            </strong>
          </div>
        </div>
        <div class="stats">
          <div class="stats-item record">
            <h2>
              <strong><u>Record</u></strong>
            </h2>
            <div>Win Streak: {{ winStreak }}</div>
            <div>Best Streak: {{ bestStreak }}</div>
          </div>
          <div class="stats-item attempts-wrapper">
            <h2>
              <strong><u>Win Distribution</u></strong>
            </h2>
            <div class="attempts" v-for="attempt of attempts" :key="attempt.id">
              {{ attempt.id }}: {{ attempt.num }}
            </div>
          </div>
          <div class="stats-item names-missed" v-if="namesMissed">
            <h2>
              <strong>
                <u>Unidentified</u> &#128034;s ({{ namesMissed.length }})
              </strong>
            </h2>
            <div v-for="name in namesMissed" :key="name">
              {{ name }}
              :(
            </div>
          </div>
        </div>
        <div class="share-button">
          <button
            type="button"
            v-clipboard:copy="copyMessage"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            @click.prevent="shareStats"
          >
            SHARE
          </button>
          <div v-if="displayMessage" class="display-message">
            {{ displayMessage }}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "StatsComponent",
  props: {
    finished: Boolean,
    winner: Boolean,
    winStreak: String,
    bestStreak: String,
    namesMissed: Array,
    attempts: Array,
  },
  data() {
    return {
      copyMessage: "",
      displayMessage: "",
      answer: "",
    };
  },
  created() {
    this.getCopyMessage();
    this.getAnswer();
  },
  methods: {
    shareStats() {
      let score = "X";
      if (this.winner) {
        score = String(this.$root.$data.copyMessage.length / 5);
      }
      let copyString = `Check out my Turdl score: ${score}/6\n\n`;
      let count = 0;
      for (let emoji of this.$root.$data.copyMessage) {
        copyString += emoji;
        count++;
        if (count % 5 === 0) {
          copyString += "\n";
        }
      }
      copyString += "\nPlay Turdl at https://turdl.io/ !";
      this.copyMessage = copyString;
    },
    getCopyMessage() {
      let copyMessage = localStorage.getItem("copyMessage");
      if (!copyMessage) {
        return;
      }
      this.$root.$data.copyMessage = localStorage
        .getItem("copyMessage")
        .split(",");
    },
    onCopy() {
      this.displayMessage = "Copied score to clipboard!";
    },
    onError() {
      this.displayMessage = "Couldn't copy, something went wrong.";
    },
    getAnswer() {
      this.answer = String(localStorage.getItem("answer")).toUpperCase();
    },
  },
};
</script>

<style scoped>
/* Modals */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.5s ease;
  display: flex;
  transition: background 0.2s ease-in-out, height 1s ease-in-out;
  transition: height 0.2s ease-in-out, width 0.2s ease-in-out;
  justify-content: center;
  transition-timing-function: cubic-bezier(0.64, 0.57, 0.67, 1.53);
}
.modal-container {
  width: 30%;
  height: max-content;
  margin-top: 20px;
  padding: 20px 30px;
  background-color: rgba(255, 255, 224, 0.8);
  border-radius: 100px;
  border: solid #9b673c 10px;
  border-style: outset;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.5s ease;
}
/*
* The following styles are auto-applied to elements with
* transition="modal" when their visibility is toggled
* by Vue.js.
*
* You can easily play with the modal transition by editing
* these styles.
*/
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.stats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2 {
  margin: 0;
}
.name {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name p {
  font-size: 30px;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  margin: 0 0 5px 0;
}
.stats-item {
  width: 70%;
  margin: 10px;
  background-color: #c5c7c4;
  padding: 10px;
  border-radius: 20px;
}
.attempts {
  display: flex;
  justify-content: space-around;
}
button {
  padding: 10px 20px;
  font-family: "Avenir", "Helvetica", "sans-serif";
  border-radius: 20px;
}
.display-message {
  margin-top: 5px;
}
.winner {
  background-color: #90ee90;
}
.loser {
  background-color: #ff6766;
}
@media only screen and (max-width: 400px) {
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 15px;
  }
  .name p {
    font-size: 20px;
  }
  .modal-container {
    width: 60%;
  }
}
</style>
