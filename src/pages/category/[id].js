import { client } from "@/libs/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModuleMv from "@/components/ModuleMv";
import LoopPost from "@/components/LoopPost";
import ModulePagenation from "@/components/ModulePagenation";

export async function getStaticPaths() {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "blogs",
    queries: { filters: `category[equals]${id}` },
  });

  return {
    props: {
      blogs: data.contents,
    },
  };
}

export default function Category({ blogs }) {
  if (blogs.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
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
            <ModulePagenation totalCount={20} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
