import Link from "next/link";

export default function ModulePagenation({ totalCount }) {
  const PER_PAGE = 12;

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul class="wp-pagenavi" role="navigation">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index} class="item current">
          <Link href={`/blog/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  );
}
