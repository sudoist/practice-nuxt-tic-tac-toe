<template>
  <div id="app" class="m-4">
    <div class="status mb-2 text-2xl">
      <h3>{{ win ? win : status }}</h3>
    </div>
    <div class="bg-white">
      <template v-for="row in 3">
        <div :key="row" class="row">
          <button
            v-for="button in 3"
            :id="row.toString() + button.toString()"
            :key="button"
            v-bind="box.current[button]"
            class="square bg-green-200 hover:bg-green-400 rounded m-3"
            style="height: 60px; width: 60px"
            @click="play(row, button)"
          >
            <span class="text-green-200">.</span>
          </button>
        </div>
      </template>
      <button class="button--grey my-2" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      win: '',
      status: 'CURRENT PLAYER: X',
      player: 'X',
      playerTurns: [],
      box: {
        current: [],
      },
      boxes: ['11', '12', '13', '21', '22', '23', '31', '32', '33'],
      turns: [],
      gameOver: false,
      winConditions: [
        ['11', '12', '13'],
        ['21', '22', '23'],
        ['31', '32', '33'],
        ['11', '21', '31'],
        ['12', '22', '32'],
        ['13', '23', '33'],
        ['11', '22', '33'],
        ['13', '22', '31'],
      ],
    }
  },
  methods: {
    play(row, button) {
      const selected = {}
      selected[row.toString() + button.toString()] = this.player
      this.turns.push(selected)

      this.markButton(row, button)
      this.assignTurn()
    },
    markButton(row, button) {
      document.getElementById(
        row.toString() + button.toString()
      ).textContent = this.player
      document
        .getElementById(row.toString() + button.toString())
        .setAttribute('disabled', 'disabled')
      document
        .getElementById(row.toString() + button.toString())
        .classList.add('bg-green-400')
    },
    assignTurn() {
      if (!this.didPlayerWin()) {
        if (this.player === 'X') {
          this.player = 'O'
          this.status = 'CURRENT PLAYER: O'
        } else {
          this.player = 'X'
          this.status = 'CURRENT PLAYER: X'
        }
      }
    },
    didPlayerWin() {
      let playerTurns = []

      if (this.turns.length > 4) {
        playerTurns = this.getPlayedTurns(this.turns, this.player)

        // Check if player wins
        this.matchWinConditions(this.winConditions, playerTurns, this.player)

        // Can't get watch to work for gameOver
        if (this.gameOver) {
          this.disableGame(this.boxes)
          return true
        }
      }
      return false
    },
    disableGame(boxes) {
      for (let index = 0; index < boxes.length; index++) {
        document
          .getElementById(boxes[index])
          .setAttribute('disabled', 'disabled')
      }
    },
    matchWinConditions(winConditions, playerTurns, player) {
      for (let index = 0; index < winConditions.length; index++) {
        if (
          this.isMatchingWinCondition(winConditions[index], playerTurns.sort())
        ) {
          this.win = player + ' WIN!'
          this.gameOver = true
        }
      }
    },
    getPlayedTurns(turns, player) {
      const playedTurns = []
      Object.keys(turns).forEach(function (item) {
        Object.keys(turns[item]).forEach(function (value, key) {
          if (turns[item][value] === player) {
            playedTurns.push(value)
          }
        })
      })
      return playedTurns
    },
    isMatchingWinCondition(arr, arr2) {
      return arr.every((i) => arr2.includes(i))
    },
    reset() {
      this.status = 'CURRENT PLAYER: X'
      this.player = 'X'
      this.turns = []
      this.gameOver = false
      this.win = null

      for (let index = 0; index < this.boxes.length; index++) {
        document.getElementById(this.boxes[index]).textContent = ''
        document
          .getElementById(this.boxes[index])
          .insertAdjacentHTML(
            'beforeend',
            '<span class="text-green-200">.</span>'
          )
        document.getElementById(this.boxes[index]).removeAttribute('disabled')
        document
          .getElementById(this.boxes[index])
          .classList.remove('bg-green-400')
      }
    },
  },
}
</script>

<style>
.status,
.square {
  font-family: 'Press Start 2P', cursive;
}

.square:hover > span {
  color: #68d391;
}
</style>
