import { getUserWithUsername, postToJSON, firestore } from "../../lib/firebase";
import {
  query,
  collection,
  where,
  getDocs,
  limit,
  orderBy,
  getFirestore,
} from "firebase/firestore";
import UserProfile from "../../components/UserProfile";
import PostFeed from "../../components/PostFeed";
import Navbar from "../../components/Navbar";

export async function getServerSideProps({ query: urlQuery }) {
  const { username } = urlQuery;

  const userDoc = await getUserWithUsername(username);

  if (!userDoc) {
    return {
      notFound: true,
    };
  }
  let user = null;
  let posts = null;
  if (userDoc) {
    user = userDoc.data();
    const postsQuery = query(
      collection(getFirestore(), userDoc.ref.path, "Rezerwacje"),
      where("dataWyjazdu", "!=", null)
    );
    posts = (await getDocs(postsQuery)).docs.map((e) => postToJSON(e));
  }
  return {
    props: { user, posts },
  };
}

export default function PostPage({ user, posts }) {
  return (
    <main>
      <Navbar sticky={false} />
      <UserProfile user={user} />
      <PostFeed posts={posts} />
      <Navbar sticky={true} />
    </main>
  );
}
