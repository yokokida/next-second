import React from "react";
import { useRouter } from "next/router";

export default function ModuleMv() {
  const router = useRouter();
  const pathname = router.pathname;

  var ttlEN = "";
  var ttlJA = "";
  if (pathname === "/about") {
    var ttlEN = "about us";
    var ttlJA = "私たちについて";
  } else if (pathname === "/business") {
    var ttlEN = "business";
    var ttlJA = "事業紹介";
  } else if (pathname === "/recruit") {
    var ttlEN = "recruit";
    var ttlJA = "事業紹介";
  } else {
    var ttlEN = "recruit";
    var ttlJA = "事業紹介";
  }
  return (
    <>
      <div id="page-mv" class="mv">
        <div class="mv-inner">
          <div class="content-width">
            <div class="page-ttl-box">
              <h1 class="page-ttl">{ttlEN}</h1>
              <p class="page-sub-ttl">{ttlJA}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
