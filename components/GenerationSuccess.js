import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import CopyIcon from "../public/copy-icon-g.png";
import CopiedIcon from "../public/copied-icon-w.png";

const GenerationSuccess = ({ finalUrl = "" }) => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(finalUrl);
    setCopied(true);
  };

  const handleNewGen = () => {
    router.push("/");
  };
  return (
    <>
      <div
        className="container flex flex-col max-w-110 rounded-3xl items-center mx-auto my-4 p-10 shadow-2xl"
        style={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)" }}
      >
        <p className="font-bold text-2xl mb-4">urlil. below</p>

        <div className="flex flex-row my-2">
          <code
            className="px-2 py-1 rounded-xl mx-1 max-w-80 min-w-80"
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          >
            <Link href={finalUrl} target="_blank">
              {finalUrl}
            </Link>
          </code>
          <div className="flex flex-col items-center mx-1">
            <button
              className="mb-1"
              onClick={handleCopy}
              style={{ cursor: "pointer" }}
            >
              <Image
                alt=""
                src={copied ? CopiedIcon : CopyIcon}
                width={20}
                height={20}
              />
            </button>
            <p style={{ fontSize: "12px" }}>{copied ? "Copied!" : "Copy"}</p>
          </div>
        </div>

        <button
          className="btn py-2 px-4 rounded-4xl max-w-80 shadow-xl mb-2 mt-4"
          style={{
            backgroundColor: "#C6FF00",
            color: "#263238",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={handleNewGen}
        >
          Generate New
        </button>
      </div>
    </>
  );
};

export default GenerationSuccess;
