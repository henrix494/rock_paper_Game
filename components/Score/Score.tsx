import React from "react";
import twitterIcon from "../../assets/logo.svg";
import Image from "next/image";
import { useState } from "react";
interface ChoiceProps {
  scoreM: number;
}
const Score: React.FC<ChoiceProps> = ({ scoreM }) => {
  const [score, setScore] = useState(0);
  return (
    <div className=" border-2 w-[40vw] max-lg:w-full h-[200px] max-lg:h-[100px]   rounded-xl border-[#ffffff7a] flex items-center justify-between px-10 max-lg:px-0 max-lg:border-0">
      <div>
        <Image priority src={twitterIcon} alt="Follow us on Twitter" />
      </div>
      <div className="bg-[white] h-[80%] w-[200px] flex flex-col items-center justify-center rounded-xl">
        <div>
          <p className=" text-xl max-lg:text-xl">Score</p>
        </div>
        <div>
          <p className=" text-6xl font-bold max-lg:text-2xl">{scoreM}</p>
        </div>
      </div>
    </div>
  );
};

export default Score;
