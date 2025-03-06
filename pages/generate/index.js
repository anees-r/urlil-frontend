import GenerateUrlBox from "@/components/GenerateUrlBox";
import React from "react";
import { useState } from "react";
import GenerationSuccess from "@/components/GenerationSuccess";

const Generate = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");
  return (
    <>
      {!isGenerated && (
        <GenerateUrlBox
          setIsGenerated={() => {
            setIsGenerated(true);
          }}
          setFinalUrl={(newUrl) => {
            setFinalUrl(newUrl);
          }}
        />
      )}

      {isGenerated && <GenerationSuccess finalUrl={finalUrl} />}

      {/* <div className="flex">
        <Image alt="" src={CopyIconG} height={40} width={40} />
        <Image alt="" src={CopiedIconW} height={40} width={40} />
      </div> */}
    </>
  );
};

export default Generate;
