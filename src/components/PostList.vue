<template>
  <div class="post_list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";
export default {
  components: {
    SinglePost,
  },
  props: ["posts"],

  components: { SinglePost },
  setup(props) {
    onMounted(() => {
      console.log("on Mounted");
    });
    onUnmounted(() => {
      console.log("on UnMounted");
    });
    onUpdated(() => {
      console.log("on Update");
    });
  },
};
</script>

<style></style>
