<template>
  <div>
    <div id="footer">
        <span>Written by {{author}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: 'zerobreeze'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/styles/footer.styl'

</style>
