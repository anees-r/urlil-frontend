import Link from "next/link";
import Image from "next/image";
import HeroImage from "../public/hero-art.png";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="  flex flex-col justify-center items-center">
          <p className="font-bold text-4xl">
            Generate your <span style={{ color: "#C6FF00" }}>urlil</span> Now!
          </p>
          <p className="max-w-120 my-5 text-center">
            Want to make a long ahh URL easy to remeber? We got you. Simply
            paste your URL and the word you want to associate with it. BAM!!!
            you will have your short URL or should we say UrLil.
          </p>
          <Link href="/generate">
            <button
              className="btn py-2 px-4 rounded-4xl shadow-xl"
              style={{
                backgroundColor: "#C6FF00",
                color: "#263238",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Generate Now!
            </button>
          </Link>
        </div>
        <div className="p-2 flex justify-center">
          <Image
            alt="hero section artwork"
            src={HeroImage}
            width={650}
            height={650}
          ></Image>
        </div>
      </div>
    </>
  );
}
