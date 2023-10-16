import React from "react";
import Image from "next/image";
import tri from "@/assets/bg-pentagon.svg";
import rock from "@/assets/icon-rock.svg";
import papper from "@/assets/icon-paper.svg";
import misprim from "@/assets/icon-scissors.svg";
import spock from "@/assets/icon-spock.svg";
import lizard from "@/assets/icon-lizard.svg";
import PostButtunL from "../Postbutton/PostButtunL";
import { useState, useEffect } from "react";
interface ChoiceProps {
  getScoreF: (newScore: number) => void;
  setbestScore: (setbestScore: number) => void;
  scoreM: number;
  bestScore: number;
}
const ChoiceL: React.FC<ChoiceProps> = ({
  getScoreF,
  scoreM,
  setbestScore,
  bestScore,
}) => {
  const cpuOptions = ["rock", "papper", "misprim", "lizard", "spock"];
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPick, setCurrentPick] = useState("s");
  const [cpuChoice, setcpuChoice] = useState("");
  const [gameState, setGameState] = useState(0);
  const [numberOfMoves, setNumberOfMovers] = useState(0);
  const [name, setName] = useState("");
  const getPlayerChoise = (choice: string) => {
    setCurrentPick(choice);
    setIsPlaying(true);
    setNumberOfMovers((number) => number++);

    let randomCPUChoice;
    do {
      randomCPUChoice =
        cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
    } while (randomCPUChoice === choice);
    setcpuChoice(randomCPUChoice);
    if (choice === randomCPUChoice) {
      setGameState(2); // It's a tie
    }
  };
  const resetGame = () => {
    setIsPlaying(false);
    setGameState(0);

    setNumberOfMovers((number) => number++);
    setCurrentPick("s");
    setcpuChoice("");
    if (gameState === 0) {
      setbestScore(-bestScore);
    }
  };

  useEffect(() => {
    if (currentPick === cpuChoice) {
      setGameState(2); // It's a tie
    } else if (
      (currentPick === "rock" && cpuChoice === "misprim" && isPlaying) ||
      (currentPick === "rock" && cpuChoice === "lizard" && isPlaying) ||
      (currentPick === "papper" && cpuChoice === "rock" && isPlaying) ||
      (currentPick === "papper" && cpuChoice === "spock" && isPlaying) ||
      (currentPick === "misprim" && cpuChoice === "papper" && isPlaying) ||
      (currentPick === "misprim" && cpuChoice === "lizard" && isPlaying) ||
      (currentPick === "lizard" && cpuChoice === "spock" && isPlaying) ||
      (currentPick === "lizard" && cpuChoice === "papper" && isPlaying) ||
      (currentPick === "spock" && cpuChoice === "misprim" && isPlaying) ||
      (currentPick === "spock" && cpuChoice === "rock" && isPlaying)
    ) {
      setGameState(1); // You win
      getScoreF(+1);
      setbestScore(+1);
    } else if (
      (currentPick !== "rock" && cpuChoice !== "misprim" && isPlaying) ||
      (currentPick !== "rock" && cpuChoice !== "lizard" && isPlaying) ||
      (currentPick !== "papper" && cpuChoice !== "rock" && isPlaying) ||
      (currentPick !== "papper" && cpuChoice !== "spock" && isPlaying) ||
      (currentPick !== "misprim" && cpuChoice !== "papper" && isPlaying) ||
      (currentPick !== "misprim" && cpuChoice !== "lizard" && isPlaying) ||
      (currentPick !== "lizard" && cpuChoice !== "spock" && isPlaying) ||
      (currentPick !== "lizard" && cpuChoice !== "papper" && isPlaying) ||
      (currentPick !== "spock" && cpuChoice !== "misprim" && isPlaying) ||
      (currentPick !== "spock" && cpuChoice !== "rock" && isPlaying)
    ) {
      setGameState(0); // You lose
      getScoreF(-scoreM);
    }
  }, [currentPick, cpuChoice]);

  return (
    <div className=" ">
      {isPlaying ? (
        <div className="flex w-screen max-w-[900px] justify-around text-white ">
          {" "}
          <div className="flex flex-col items-center gap-10">
            <p>Your Pick</p>
            <div className="  bg-[white] px-10 py-10 rounded-full  border-[20px] border-[yellow] max-lg:px-4 max-lg:py-4 max-lg:border-[10px]">
              {" "}
              {currentPick === "rock" && (
                <Image
                  width={60}
                  src={rock}
                  alt="rock"
                  className=" max-lg:w-[40px]"
                />
              )}
              {currentPick === "papper" && (
                <Image
                  width={60}
                  src={papper}
                  alt="rock"
                  className=" max-lg:w-[40px]"
                />
              )}
              {currentPick === "misprim" && (
                <Image
                  width={60}
                  src={misprim}
                  alt="rock"
                  className=" max-lg:w-[40px]"
                />
              )}
              {currentPick === "lizard" && (
                <Image
                  width={60}
                  src={lizard}
                  alt="rock"
                  className=" max-lg:w-[40px]"
                />
              )}
              {currentPick === "spock" && (
                <Image
                  width={60}
                  src={spock}
                  alt="rock"
                  className=" max-lg:w-[40px]"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div> status</div>
            <div>
              {" "}
              {gameState === 2 && <p className=" text-3xl">Its a tie</p>}
              {gameState === 1 && <p className=" text-3xl">You win</p>}
              {gameState === 0 && <p className=" text-3xl">You lose</p>}
            </div>
            {gameState === 0 && <div>Best Score {bestScore}</div>}
            {gameState === 0 && (
              <input
                className=" text-[black] p-2 rounded-lg"
                placeholder="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            )}
            {gameState === 0 && (
              <PostButtunL bestScore={bestScore} name={name} />
            )}

            <div>
              <button onClick={resetGame}>Play again</button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10">
            <p>House Pick</p>
            <div className="  bg-[white] px-10 py-10 rounded-full  border-[20px] border-[red] max-lg:px-4 max-lg:py-4 max-lg:border-[10px]">
              {" "}
              {cpuChoice === "rock" && (
                <Image
                  width={60}
                  src={rock}
                  alt="rock"
                  className=" max-lg:w-[40px]"
                />
              )}
              {cpuChoice === "papper" && (
                <Image
                  width={60}
                  src={papper}
                  alt="rock"
                  className=" max-lg:w-[40px]"
                />
              )}
              {cpuChoice === "misprim" && (
                <Image
                  width={60}
                  src={misprim}
                  alt="rock"
                  className=" max-lg:w-[40px]"
                />
              )}
              {cpuChoice === "spock" && (
                <Image
                  width={60}
                  src={spock}
                  alt="rock"
                  className=" max-lg:w-[40px]"
                />
              )}
              {cpuChoice === "lizard" && (
                <Image
                  width={60}
                  src={lizard}
                  alt="rock"
                  className=" max-lg:w-[40px]"
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className=" relative">
          <Image src={tri} alt="Follow us on Twitter" />
          <div
            className=" max-lg:top-20 absolute top-[10%] left-[-25%]  bg-[white] px-10 py-10 rounded-full  border-[10px] border-[red] cursor-pointer max-lg:px-6 max-lg:py-6 max-lg:border-[10px] max-lg:left-0 "
            onClick={() => getPlayerChoise("rock")}
          >
            {" "}
            <Image
              className=" max-lg:w-[40px]"
              height={100}
              width={60}
              src={rock}
              alt="rock"
            />
          </div>
          <div
            onClick={() => getPlayerChoise("papper")}
            className=" max-lg:top-20  absolute top-[8%] right-[-30%] max-lg:right-[-5%]  bg-[white] px-10 py-10 max-lg:px-4 max-lg:py-4 rounded-full  border-[10px] max-lg:border-[10px] border-[yellow] cursor-pointer"
          >
            {" "}
            <Image
              height={100}
              className=" max-lg:w-[40px]"
              width={60}
              src={papper}
              alt="rock"
            />
          </div>
          <div
            onClick={() => getPlayerChoise("misprim")}
            className=" max-lg:bottom-[-20%] max-lg:right-0 absolute bottom-[-35%] right-[-23%] bg-[white] px-10 py-10 rounded-full  border-[10px] border-[blue] cursor-pointer  max-lg:px-6 max-lg:py-6 max-lg:border-[10px] "
          >
            {" "}
            <Image
              className=" max-lg:w-[40px]"
              height={100}
              width={60}
              src={misprim}
              alt="rock"
            />
          </div>{" "}
          <div
            onClick={() => getPlayerChoise("lizard")}
            className=" max-lg:bottom-[-19%] max-lg:left-1 absolute bottom-[-35%] left-[-18%] bg-[white] px-10 py-10 rounded-full  border-[10px] border-[blue] cursor-pointer  max-lg:px-6 max-lg:py-6 max-lg:border-[10px] "
          >
            {" "}
            <Image
              className=" max-lg:w-[40px]"
              height={100}
              width={60}
              src={lizard}
              alt="rock"
            />
          </div>
          <div
            onClick={() => getPlayerChoise("spock")}
            className=" absolute top-[-35%] left-[28%] max-lg:top-[-20%] max-lg:left-[34%] bg-[white] px-10 py-10 rounded-full  border-[10px] border-[blue] cursor-pointer  max-lg:px-6 max-lg:py-6 max-lg:border-[10px] "
          >
            {" "}
            <Image
              className=" max-lg:w-[40px]"
              height={100}
              width={60}
              src={spock}
              alt="rock"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default ChoiceL;
