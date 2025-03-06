"use client";
import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

const RedirectToUrl = () => {
  const [customError, setcustomError] = useState("");

  const router = useRouter();

  const { shorturl } = router.query;

  const fetchUrl = async () => {
    console.log(`${process.env.NEXT_PUBLIC_SERVER_GET}${shorturl}`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_GET}${shorturl}`);
    if (!res.ok) {
      setcustomError("Unexpected error occured");
      return "";
    }
    const fetchedData = await res.json();
    if (res.ok) {
      if (fetchedData.http_status === "SUCCESS") {
        return fetchedData.data.url;
      } else {
        setcustomError(fetchedData.http_status + ": " + fetchedData.message);
        return "";
      }
    }
  };

  const formatUrlAndRedirect = async () => {
    let url = await fetchUrl();

    if (!url) return;

    // Ensure the URL starts with http:// or https://
    if (!/^https?:\/\//i.test(shorturl)) {
      url = "https://" + url;
    }

    setTimeout(() => {
      window.location.href = url;
    }, 500);
  };

  useEffect(() => {
    if (!shorturl) return;
    formatUrlAndRedirect();
  }, [router.query]);

  return (
    <div
      className="container mx-auto text-center pt-80 text-xl"
      style={{ color: "" }}
    >
      {customError === "" && <>Redirecting to "{shorturl}"...</>}

      {customError !== "" && <p className="text-red-400">{customError}</p>}
    </div>
  );
};

export default RedirectToUrl;
