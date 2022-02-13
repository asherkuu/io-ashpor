import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { RedirectWrap } from "./styled";

const Redirect = ({ to, ssr = null }) => {
  const router = useRouter();

  useEffect(() => {
    if (ssr) window.location.pathname = to;
    else router.push(to);
  }, []);

  return (
    <RedirectWrap className="lds-roller" style={{ top: 300 }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </RedirectWrap>
  );
};

export default Redirect;
