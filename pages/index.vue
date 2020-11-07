<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">practice-nuxt-tic-tac-toe</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <h4>
        This started as a Vue.js technical exam but I went and tested out
        Nuxt.js as well. Original app can be viewed at
        <a href="https://codepen.io/sudoist/pen/VwjGrbL"></a>
      </h4>
      <p>
        Here is a random component to show some random facts on page load from
        <a href="https://uselessfacts.jsph.pl/">
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
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
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
