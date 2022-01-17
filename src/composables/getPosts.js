import { ref } from "vue";
import { projectFirestore } from "../firebase/config";
const getPosts = () => {
  const posts = ref([]);
  const errors = ref(null);
  const load = async () => {
    try {
      const res = await projectFirestore
        .collection("posts")
        .orderBy("desc")
        .get();
      posts.value = res.docs.map((doc) => {
        // console.log(doc.data());
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      errors.value = err.message;
    }
  };
  return { posts, errors, load };
};
export default getPosts;
