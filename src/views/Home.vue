<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    handleGet() {
      this.$http.get("https://www.reddit.com/r/all/top.json?limit=30&count=30");
      console.log("asdd");
    }
  }
};
</script>
