import styles from "../styles/Index.module.css";
import Image from "next/image";

export const getStaticPaths = async () => {
  const token =
    "ef7b5769772f2edfc916bf362fab95267ebd3b3e3c730d86c81a72030b1e587d8cb192441dbda7079449e837a0d56ee95c6e030d8a4ea0519184f9e464409cb58a67d30197154b2cf5cf1003bfb713387b8ac631a93272fed98a80f333eb1d02b85ea6469fc0792b32db3b3a3525f4700da5f7229ef6215cd0c8a72ec7e5a20c";
  const res = await fetch(
    "http://194.95.193.79:1337/api/blogeintrags?populate=*",
    {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    }
  );
  const fetchedData = await res.json();

  const paths = fetchedData.data.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
};

// Get Data of a Single post by fetching with the specific ID of that post
// We got the ID from the getStaticPaths function
export const getStaticProps = async (path) => {
  const id = path.params.id;
  const token =
    "ef7b5769772f2edfc916bf362fab95267ebd3b3e3c730d86c81a72030b1e587d8cb192441dbda7079449e837a0d56ee95c6e030d8a4ea0519184f9e464409cb58a67d30197154b2cf5cf1003bfb713387b8ac631a93272fed98a80f333eb1d02b85ea6469fc0792b32db3b3a3525f4700da5f7229ef6215cd0c8a72ec7e5a20c";
  const res = await fetch(
    "http://194.95.193.79:1337/api/blogeintrags/" + id + "?populate=*",
    {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    }
  );
  const fetchedData = await res.json();
  return {
    props: {
      post: fetchedData.data,
    },
    revalidate: 10,
  };
};

// The Component renders the page with the correct content
// We got the correct content from the getStaticProps function
const Post = ({ post }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{post.attributes.title}</h1>
        <div
          contentEditable="true"
          dangerouslySetInnerHTML={{ __html: post.attributes.Blogtext }}></div>
      </main>
    </div>
  );
};

export default Post;
