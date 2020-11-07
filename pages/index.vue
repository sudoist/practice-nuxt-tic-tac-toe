<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="text-3xl title">practice-nuxt-tic-tac-toe</h1>
      <Game />
      <div class="links">
        <a
          href="https://github.com/sudoist/practice-nuxt-tic-tac-toe"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <a
          href="https://codepen.io/sudoist/pen/VwjGrbL"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          CodePen
        </a>
      </div>
      <h4 class="mt-3 text-lg">
        This started as a Vue.js technical exam but I went and tested out
        Nuxt.js as well.
      </h4>
      <h4>
        Original app can be viewed at
        <a class="text-blue-700" href="https://codepen.io/sudoist/pen/VwjGrbL">
          https://codepen.io/sudoist/pen/VwjGrbL
        </a>
      </h4>
      <p class="mt-3">
        Below is a random component to show a random fact on page load from
        <a class="text-blue-700" href="https://uselessfacts.jsph.pl/">
          https://uselessfacts.jsph.pl/
        </a>
        to practice API fetch.
      </p>
      <Fact />
    </div>
  </div>
</template>

<script>
import Fact from '../components/Fact'

export default {
  components: { Fact },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 70px;
  color: #35495e;
  letter-spacing: 1px;
}

@media only screen and (max-width: 600px) {
  .title {
    font-size: 2.5rem;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
