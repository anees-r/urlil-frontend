import React from "react";
import { useState } from "react";

const GenerateUrlBox = (props) => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [customError, setCustomError] = useState("");

  const handleGenerate = async () => {
    // url cant be empty
    if (url === "") {
      setCustomError("URL can not be empty!");
    }

    //if both inps are not empty
    if (shorturl !== "" && url !== "") {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_GET}${shorturl}`
      );
      // if response is corrupt
      if (!res.ok) {
        setCustomError("An error occured! Please try again.");
      }

      if (res.ok) {
        const fetchedData = await res.json();

        // if the keyword is already used
        if (fetchedData.http_status === "SUCCESS") {
          setCustomError(
            "This keyword is already used! Please try something else."
          );
        } else {
          // saving data when both are provided
          const postRes = await fetch(process.env.NEXT_PUBLIC_SERVER_POST, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              url,
              shorturl,
            }),
          });
          if (!postRes.ok) {
            setCustomError("An error occured! Please try again.");
          }
          const fetchedData = await postRes.json();
          if (postRes.ok) {
            if (fetchedData.http_status === "SUCCESS") {
              setShorturl("");
              setUrl("");
              props.setFinalUrl(
                `${process.env.NEXT_PUBLIC_HOST}/${fetchedData.data.shorturl}`
              );
              props.setIsGenerated(true);
            }
          } else {
            setCustomError(
              `${fetchedData.http_status}: ${fetchedData.message}`
            );
          }
        }
      }
    }
    // saving data when url is not empty but keyword is
    else if (url !== "") {
      const postRes = await fetch(process.env.NEXT_PUBLIC_SERVER_POST, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          shorturl,
        }),
      });
      if (!postRes.ok) {
        setCustomError("An error occured! Please try again.");
      }
      const fetchedData = await postRes.json();
      if (postRes.ok) {
        if (fetchedData.http_status === "SUCCESS") {
          setShorturl("");
          setUrl("");
          props.setFinalUrl(
            `${process.env.NEXT_PUBLIC_HOST}/${fetchedData.data.shorturl}`
          );
          props.setIsGenerated(true);
        } else {
          setCustomError(`${fetchedData.http_status}: ${fetchedData.message}`);
        }
      }
    }
  };

  return (
    <>
      {customError !== "" && (
        <>
          <div
            className="container mx-auto flex justify-center p-2 max-w-xl rounded-xl"
            style={{
              color: "rgb(198,255,0)",
              backgroundColor: "rgba(198,255,0,0.1)",
            }}
          >
            <p className=" text-white mx-1">{customError}</p>
            <button
              className="mx-1"
              style={{ color: "C6FF00", cursor: "pointer" }}
              onClick={() => {
                setCustomError("");
              }}
            >
              Dismiss
            </button>
          </div>
        </>
      )}
      <div
        className="container flex flex-col max-w-100 rounded-3xl items-center mx-auto my-4 p-10 shadow-2xl"
        style={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)" }}
      >
        <p className="font-bold text-3xl">Generate below</p>

        <input
          className="max-w-100 py-1 px-3 rounded-4xl outline-emerald-700 mb-1 mt-5"
          style={{ backgroundColor: "#ffffff", color: "#263238" }}
          type="text"
          id="url"
          placeholder="Url: i.e https://test.com"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />

        <input
          className="max-w-80 py-1 px-3 rounded-4xl outline-emerald-700 my-1"
          style={{ backgroundColor: "#ffffff", color: "#263238" }}
          type="text"
          id="shorturl"
          placeholder="Keyword: i.e test"
          value={shorturl}
          onChange={(e) => {
            setShorturl(e.target.value);
          }}
        />

        <button
          className="btn py-2 px-4 rounded-4xl max-w-80 shadow-xl mb-2 mt-4"
          style={{
            backgroundColor: "#C6FF00",
            color: "#263238",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
    </>
  );
};

export default GenerateUrlBox;
