// import Link from "next/link";
import { client } from "../libs/client";
import HomeAbout from "../components/HomeAbout";
import HomeBusiness from "../components/HomeBusiness";
import HomeNews from "../components/HomeNews";
import HomeRecruit from "../components/HomeRecruit";

export default function Home({ blogs }) {
  return (
    <>
      <HomeAbout></HomeAbout>
      <HomeBusiness></HomeBusiness>
      <HomeNews></HomeNews>
      <HomeRecruit></HomeRecruit>
      <div>
        <ul>
          {blogs.map((blogs) => (
            <li key={blogs.id}>
              <a href={`/blogs/${blogs.id}`}>{blogs.title}</a>
            </li>
          ))}
        </ul>
      </div>
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
