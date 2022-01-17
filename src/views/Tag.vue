<template>
  <div class="tag">
    <div v-if="errors">{{ errors }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postWithTags" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>
<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";
export default {
  name: "Tag",
  components: { PostList, Spinner, TagCloud },
  setup() {
    const route = useRoute();
    const { posts, errors, load } = getPosts();
    load();
    const postWithTags = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });
    return { errors, posts, postWithTags };
  },
};
</script>
<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
