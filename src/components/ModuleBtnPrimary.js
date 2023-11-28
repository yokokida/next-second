import Link from "next/link";

export default function BtnPrimary(props) {
  return (
    <>
      <div class={props.class}>
        <Link href={props.url} class="btn btn-primary">
          <span>{props.txt}</span>
        </Link>
      </div>
    </>
  );
}
