import { ref } from "vue";
const useTags = (posts) => {
  const tags = ref([]);
  const tagSet = new Set(); // set acnnot add the dubplicate
  posts.forEach((item) => {
    item.tags.forEach((tag) => tagSet.add(tag));
  });
  tags.value = [...tagSet];
  return { tags };
};
export default useTags;
