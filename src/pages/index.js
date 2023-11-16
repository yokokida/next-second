// pages/index.js
// import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blogs }) {
  return (
    <div>
      <ul>
        {blogs.map((blogs) => (
          <li key={blogs.id}>
            <a href={`/blogs/${blogs.id}`}>{blogs.title}</a>
          </li>
        ))}
      </ul>
    </div>
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
