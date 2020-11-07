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
      box: {
        current: [],
      },
      turns: [],
      gameOver: false,
    }
  },
  methods: {
    play(row, button) {
      const selected = {}
      selected[row.toString() + button.toString()] = this.player

      this.turns.push(selected)
      document.getElementById(
        row.toString() + button.toString()
      ).textContent = this.player
      document
        .getElementById(row.toString() + button.toString())
        .setAttribute('disabled', 'disabled')
      document
        .getElementById(row.toString() + button.toString())
        .classList.add('bg-green-400')

      this.didPlayerWin()

      if (!this.gameOver) {
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
      if (this.turns.length > 4) {
        this.winConditions(this.player)
      }
    },
    winConditions(player) {
      const condition1 = ['11', '12', '13']
      const condition2 = ['21', '22', '23']
      const condition3 = ['31', '32', '33']
      const condition4 = ['11', '21', '31']
      const condition5 = ['12', '22', '32']
      const condition6 = ['13', '23', '33']
      const condition7 = ['11', '22', '33']
      const condition8 = ['13', '22', '31']
      const playerTurns = []
      const turns = this.turns
      Object.keys(turns).forEach(function (item) {
        Object.keys(turns[item]).forEach(function (value, key) {
          if (turns[item][value] === player) {
            playerTurns.push(value)
          }
        })
      })

      // Check if player wins
      if (this.isMatchingWinCondition(condition1, playerTurns.sort())) {
        this.win = player + ' WIN!'
        this.gameOver = true
      }

      if (this.isMatchingWinCondition(condition2, playerTurns.sort())) {
        this.win = player + ' WIN!'
        this.gameOver = true
      }

      if (this.isMatchingWinCondition(condition3, playerTurns.sort())) {
        this.win = player + ' WIN!'
        this.gameOver = true
      }

      if (this.isMatchingWinCondition(condition4, playerTurns.sort())) {
        this.win = player + ' WIN!'
        this.gameOver = true
      }

      if (this.isMatchingWinCondition(condition5, playerTurns.sort())) {
        this.win = player + ' WIN!'
        this.gameOver = true
      }

      if (this.isMatchingWinCondition(condition6, playerTurns.sort())) {
        this.win = player + ' WIN!'
        this.gameOver = true
      }

      if (this.isMatchingWinCondition(condition7, playerTurns.sort())) {
        this.win = player + ' WIN!'
        this.gameOver = true
      }

      if (this.isMatchingWinCondition(condition8, playerTurns.sort())) {
        this.win = player + ' WIN!'
        this.gameOver = true
      }

      if (this.gameOver) {
        document.getElementById('11').setAttribute('disabled', 'disabled')
        document.getElementById('12').setAttribute('disabled', 'disabled')
        document.getElementById('13').setAttribute('disabled', 'disabled')
        document.getElementById('21').setAttribute('disabled', 'disabled')
        document.getElementById('22').setAttribute('disabled', 'disabled')
        document.getElementById('23').setAttribute('disabled', 'disabled')
        document.getElementById('31').setAttribute('disabled', 'disabled')
        document.getElementById('32').setAttribute('disabled', 'disabled')
        document.getElementById('33').setAttribute('disabled', 'disabled')
      }
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
      document.getElementById('11').textContent = ''
      document
        .getElementById('11')
        .insertAdjacentHTML(
          'beforeend',
          '<span class="text-green-200">.</span>'
        )
      document.getElementById('11').removeAttribute('disabled')
      document.getElementById('11').classList.remove('bg-green-400')

      document.getElementById('12').textContent = ''
      document
        .getElementById('12')
        .insertAdjacentHTML(
          'beforeend',
          '<span class="text-green-200">.</span>'
        )
      document.getElementById('12').removeAttribute('disabled')
      document.getElementById('12').classList.remove('bg-green-400')

      document.getElementById('13').textContent = ''
      document
        .getElementById('13')
        .insertAdjacentHTML(
          'beforeend',
          '<span class="text-green-200">.</span>'
        )
      document.getElementById('13').removeAttribute('disabled')
      document.getElementById('13').classList.remove('bg-green-400')

      document.getElementById('21').textContent = ''
      document
        .getElementById('21')
        .insertAdjacentHTML(
          'beforeend',
          '<span class="text-green-200">.</span>'
        )
      document.getElementById('21').removeAttribute('disabled')
      document.getElementById('21').classList.remove('bg-green-400')

      document.getElementById('22').textContent = ''
      document
        .getElementById('22')
        .insertAdjacentHTML(
          'beforeend',
          '<span class="text-green-200">.</span>'
        )
      document.getElementById('22').removeAttribute('disabled')
      document.getElementById('22').classList.remove('bg-green-400')

      document.getElementById('23').textContent = ''
      document
        .getElementById('23')
        .insertAdjacentHTML(
          'beforeend',
          '<span class="text-green-200">.</span>'
        )
      document.getElementById('23').removeAttribute('disabled')
      document.getElementById('23').classList.remove('bg-green-400')

      document.getElementById('31').textContent = ''
      document
        .getElementById('31')
        .insertAdjacentHTML(
          'beforeend',
          '<span class="text-green-200">.</span>'
        )
      document.getElementById('31').removeAttribute('disabled')
      document.getElementById('31').classList.remove('bg-green-400')

      document.getElementById('32').textContent = ''
      document
        .getElementById('32')
        .insertAdjacentHTML(
          'beforeend',
          '<span class="text-green-200">.</span>'
        )
      document.getElementById('32').removeAttribute('disabled')
      document.getElementById('32').classList.remove('bg-green-400')

      document.getElementById('33').textContent = ''
      document
        .getElementById('33')
        .insertAdjacentHTML(
          'beforeend',
          '<span class="text-green-200">.</span>'
        )
      document.getElementById('33').removeAttribute('disabled')
      document.getElementById('33').classList.remove('bg-green-400')
    },
  },
}
</script>

<style>
.status {
  font-family: 'Press Start 2P', cursive;
}

.square:hover > span {
  color: #68d391;
}
</style>
