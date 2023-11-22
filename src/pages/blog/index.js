import { client } from "../../libs/client.js";
import Header from "../../components/Header.js";
import ModuleMv from "../../components/ModuleMv.js";
import Footer from "../../components/Footer.js";

export default function Blogs({ blogs }) {
  return (
    <>
      <Header />
      <main>
        <ModuleMv />
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
