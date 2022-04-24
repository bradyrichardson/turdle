<template>
  <transition v-if="finished" name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <div class="name">
          <h1>Today's &#128034;:</h1>
          <strong>
            <p>{{ this.$root.$data.answer }}</p>
          </strong>
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
          <button type="button" name="button">SHARE</button>
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
  },
  computed: {
    winStreak() {
      return localStorage.getItem("winStreak");
    },
    bestStreak() {
      return localStorage.getItem("bestStreak");
    },
    namesMissed() {
      if (!localStorage.getItem("names")) {
        return;
      }
      return localStorage.getItem("names").split(",");
    },
    attempts() {
      return JSON.parse(localStorage.getItem("attemptsWon"));
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
  background-color: #90ee90;
  padding: 10px 20px;
  border-radius: 20px;
  margin: 0 0 5px 0;
}
.stats-item {
  width: 60%;
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
@media only screen and (max-width: 400px) {
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 10px;
  }
  .name p {
    font-size: 20px;
  }
  .modal-container {
    width: 60%;
  }
}
</style>
