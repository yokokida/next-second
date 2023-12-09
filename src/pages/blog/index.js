import { client } from "@/libs/client.js";
import Header from "@/components/Header.js";
import ModuleMv from "@/components/ModuleMv.js";
import Footer from "@/components/Footer.js";
import { LoopLine } from "@/components/LoopPost.js";
import ModulePagenation from "@/components/ModulePagenation.js";

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
                <LoopLine
                  id={content.id}
                  publishedAt={content.publishedAt}
                  categoryName={content.category.name}
                  title={content.title}
                />
              ))}
            </div>
            <ModulePagenation totalCount={20} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
