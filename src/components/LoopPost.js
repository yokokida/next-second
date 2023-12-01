export default function LoopPost(props) {
  return (
    <>
      <div class={`item-box ${props.id}`}>
        <div class="post-info">
          <div class="post-meta">
            <time datetime={props.publishedAt} class="post-date">
              {props.publishedAt}
            </time>
            <div class="post-cats">
              <span class="post-cat">{props.categoryName}</span>
            </div>
          </div>
          <h3 class="post-ttl">
            <a href={`/blog/${props.id}`}>{props.title}</a>
          </h3>
        </div>
      </div>
    </>
  );
}
