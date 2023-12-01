import { client } from "../../libs/client.js";
import Header from "../../components/Header.js";
import ModuleMv from "../../components/ModuleMv.js";
import Footer from "../../components/Footer.js";
import LoopPost from "@/components/LoopPost.js";

export async function getStaticProps() {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
}

export default function Blogs({ blogs }) {
  return (
    <>
      <Header />
      <main>
        <ModuleMv />
        <div class="archive-content">
          <div class="content-width">
            <div class="m-post-container">
              {blogs.map((content) => (
                <LoopPost
                  id={content.id}
                  publishedAt={content.publishedAt}
                  categoryName={content.category.name}
                  title={content.title}
                />
              ))}
            </div>
            <div class="wp-pagenavi" role="navigation">
              <span aria-current="page" class="current">
                1
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
