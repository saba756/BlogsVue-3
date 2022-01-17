// // in template we dont use the reactive value like name.value we only used
name
<template>
  <div class="home">
    <!-- <p ref="p">My name is {{ data.name }} {{ data.age }}</p> -->
    <!-- <button @click="handleClick">Click me</button> -->
    <!-- <button @click="age++">Add 1 to age</button> -->
    <!-- <button @click="updateData">Update</button>
    <h3>Reactive</h3>
    <p>My name is {{ dataReactive.name }} and age is {{ dataReactive.age }}</p>
    <button @click="updateDataReactive">UpdateReactive</button>
    <br /> -->
    <!-- <input type="text" v-model="search" />
    <div v-for="name in matchingName" :key="name">{{ name }}</div>
    <p>Search-term {{ search }}</p>
    <button @click="handleClick"></button> -->
    <div v-if="errors">{{ errors }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" class="layout" />
    </div>
    <div v-else><Spinner /></div>
    <!-- <button @click="showPost = !showPost">Toggle Post</button>
    <button @click="posts.pop()">Delete aPost</button> -->
  </div>
</template>

<script>
// @ is an alias to /src

import { ref, reactive, computed, watch, watchEffect } from "vue";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";
export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, errors, load } = getPosts();
    load();
    // console.log("setup");
    // // const p = ref(null);
    // const name = ref("saba"); //by defaulty these are not reactive variables inside data function in option api var are reactive
    // const age = ref("22");
    // const handleClick = () => {
    //   // console.log(p, p.value);
    //   // name = "rida"; // its not cahnge when we  click om this so we used reactivity
    //   name.value = "rida";
    //   age.value = 20;
    // };
    // const showPost = ref(true);
    // const data = ref({ name: "saba", age: 22 }); // ref is used for primitive
    // const dataReactive = reactive({ name: "rida", age: 20 }); //reactive is used for objects arrays
    // const Namedata = ref(["saba", "sahar", "sana", "sadaf", "aleena", "rida"]);
    // const search = ref("");

    // const updateData = () => {
    //   data.value.age = 30; // ref we used to acess the "value"
    // };
    // const updateDataReactive = () => {
    //   dataReactive.age = 70; // we used access without "value" in reactive
    // };
    // const matchingName = computed(() => {
    //   return Namedata.value.filter((name) => name.includes(search.value));
    // });

    // const stopWatch = watch(search, () => {
    //   console.log("setup");
    //   console.log("watch function run");
    // });
    // const stopEffect = watchEffect(() => {
    //   console.log("watch Effect func runnnn", search.value);
    //   //it always run when the the component load
    // });

    // const handleClick = () => {
    //   stopWatch();
    //   stopEffect();
    // };
    return {
      // name,
      // age,
      // showPost,
      posts,
      errors,
      // handleClick,
      // search,
      // Namedata,
      // data,
      // updateData,
      // dataReactive,
      // updateDataReactive,
      // matchingName,
    };
  },
};
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
