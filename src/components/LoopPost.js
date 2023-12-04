import Link from "next/link";

function LoopPost(props) {
  return (
    <>
      <div class={`item-box ${props.id}`}>
        <div class="post-info">
          <div class="post-meta">
            <time datetime={props.publishedAt} class="post-date">
              {new Date(props.publishedAt)
                .toLocaleDateString("ja-JP")
                .split("/")
                .join(".")}
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

function LoopWorks(props) {
  return (
    <>
      <Link href={`/blog/${props.id}`} class={`item-box ${props.id}`}>
        <div class="post-thumb">
          <div class="img-box">
            <img
              src={props.thumbnail}
              alt={props.title}
              class="fadein-trigger"
              width="920"
              height="476"
            />
          </div>
        </div>
        <div class="post-info">
          <div class="post-meta">
            <time datetime={props.publishedAt} class="post-date">
              {new Date(props.publishedAt)
                .toLocaleDateString("ja-JP")
                .split("/")
                .join(".")}
            </time>
            <div class="post-cats">
              <span class="post-cat">{props.categoryName}</span>
            </div>
          </div>
          <h3 class="post-ttl">{props.title}</h3>
        </div>
      </Link>
    </>
  );
}

function LoopEvent(props) {
  return (
    <>
      <Link href={`/blog/${props.id}`} class={`item-box ${props.id}`}>
        <div class="post-thumb">
          <div class="post-cats">
            <span class="post-cat">{props.categoryName}</span>
          </div>
          <div class="img-box">
            <img
              src={props.thumbnail}
              alt={props.title}
              class="fadein-trigger"
              width="920"
              height="476"
            />
          </div>
        </div>
        <div class="post-info">
          <div class="post-meta">
            <time datetime={props.publishedAt} class="post-date">
              {new Date(props.publishedAt)
                .toLocaleDateString("ja-JP")
                .split("/")
                .join(".")}
            </time>
          </div>
          <h3 class="post-ttl">{props.title}</h3>
        </div>
      </Link>
    </>
  );
}

function LoopVoice(props) {
  return (
    <>
      <Link class={`item-box ${props.id}`}>
        <div class="post-thumb">
          <div class="img-box">
            <img
              src={props.thumbnail}
              alt={props.title}
              class="fadein-trigger"
              width="920"
              height="476"
            />
          </div>
        </div>
        <div class="post-info">
          <h3 class="post-ttl">{props.title}</h3>
        </div>
      </Link>
    </>
  );
}

export { LoopPost, LoopWorks, LoopEvent, LoopVoice };
