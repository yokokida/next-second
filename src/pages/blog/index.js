import { client } from "../../libs/client.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import HomeRecruit from "../../components/HomeRecruit.js";

export default function Home({ blogs }) {
  return (
    <>
      <Header />
      <main>
        <div>
          <ul>
            {blogs.map((blogs) => (
              <li key={blogs.id}>
                <a href={`/blogs/${blogs.id}`}>{blogs.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};
