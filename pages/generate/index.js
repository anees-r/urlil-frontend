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
    </>
  );
};

export default Generate;
