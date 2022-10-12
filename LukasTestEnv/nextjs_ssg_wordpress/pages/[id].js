import styles from "../styles/Home.module.css";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://www.medieninformatik.de/wp-json/wp/v2/posts?"
  );
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://www.medieninformatik.de/wp-json/wp/v2/posts?" + id
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};

const Post = ({ post }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{post.title.rendered}</h1>
        <div
          contentEditable="true"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </main>
    </div>
  );
};

export default Post;
