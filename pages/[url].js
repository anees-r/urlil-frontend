"use client";
import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RedirectToUrl = () => {
  const fetchUrl = async () => {};

  const router = useRouter();

  const { url } = router.query;

  // useEffect(() => {
  //   const url = fetchUrl();

  //   // Ensure the URL starts with http:// or https://
  //   if (!/^https?:\/\//i.test(url)) {
  //     url = "https://" + url;
  //   }

  //   setTimeout(() => {
  //     window.location.href = url;
  //   }, 500);
  // }, [router.query]);

  return (
    <div
      className="container mx-auto text-center pt-80 text-xl"
      style={{ color: "" }}
    >
      Redirecting to "{url}"...
    </div>
  );
};

export default RedirectToUrl;
