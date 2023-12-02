function Sidebox({ children, head }) {
  return (
    <>
      <div class="sidebar-container">
        <h2 class="head">{head}</h2>
        <div class="cont">{children}</div>
      </div>
    </>
  );
}

function SideCategory(props) {
  return (
    <>
      <a href={props.link} class="post-cat">
        {props.name}
      </a>
    </>
  );
}

function SidePost(props) {
  return (
    <>
      <div class="item-box">
        <div class="post-thumb">
          <a href={props.link} class="img-box">
            <img
              src="/images/common/noimage.jpg"
              alt="ホームページをリニューアルしました"
            />
          </a>
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
          <h3 class="post-ttl">
            <a href={props.link}>{props.title}</a>
          </h3>
        </div>
      </div>
    </>
  );
}

export { Sidebox, SideCategory, SidePost };
