import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const token =
    "ef7b5769772f2edfc916bf362fab95267ebd3b3e3c730d86c81a72030b1e587d8cb192441dbda7079449e837a0d56ee95c6e030d8a4ea0519184f9e464409cb58a67d30197154b2cf5cf1003bfb713387b8ac631a93272fed98a80f333eb1d02b85ea6469fc0792b32db3b3a3525f4700da5f7229ef6215cd0c8a72ec7e5a20c";
  const res = await fetch(
    "http://194.95.193.79:1337/api/blogeintrags?populate=Titelbild",
    {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    }
  );
  const fetchedData = await res.json();

  return {
    props: {
      posts: fetchedData.data,
    },
  };
};

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/minff.jpg" width="100%" />
        <div className={styles.filter_container}>
          <span>Filter</span>
        </div>
        <div className={styles.card_container}>
          {/* {posts.map((post) => (
            <Link href={"/" + post.id} key={post.id}>
              <div className={styles.posts}>
                <h3>{post.attributes.title}</h3>
              </div>
            </Link>
          ))} */}
        </div>
      </main>
    </div>
  );
}
