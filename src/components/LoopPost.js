import Link from "next/link";

function LoopLine(props) {
  return (
    <>
      <Link href={`/blog/${props.id}`} class={`item-box ${props.id}`}>
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

function LoopCard(props) {
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
          <h3 class="post-ttl">{props.title}</h3>
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
        </div>
      </Link>
    </>
  );
}

function LoopCardTrmOnThumb(props) {
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
          <h3 class="post-ttl">{props.title}</h3>
          <div class="post-meta">
            <time datetime={props.publishedAt} class="post-date">
              {new Date(props.publishedAt)
                .toLocaleDateString("ja-JP")
                .split("/")
                .join(".")}
            </time>
          </div>
        </div>
      </Link>
    </>
  );
}

function LoopCardOnlyTitle(props) {
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

function LoopCardWide(props) {
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
          <div class="post-cont">{props.title}</div>
          <p class="post-date">
            <time datetime={props.publishedAt} class="post-date">
              {new Date(props.publishedAt)
                .toLocaleDateString("ja-JP")
                .split("/")
                .join(".")}
            </time>
          </p>
          <h3 class="post-ttl">{props.title}</h3>
        </div>
      </Link>
    </>
  );
}

export {
  LoopLine,
  LoopCard,
  LoopCardTrmOnThumb,
  LoopCardOnlyTitle,
  LoopCardWide,
};
