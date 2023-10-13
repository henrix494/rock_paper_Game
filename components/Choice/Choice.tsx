import React from "react";
import Image from "next/image";
import tri from "../../assets/bg-triangle.svg";
import rock from "../../assets/icon-rock.svg";
import papper from "../../assets/icon-paper.svg";
import misprim from "../../assets/icon-scissors.svg";
import { useState, useEffect } from "react";
interface ChoiceProps {
  getScoreF: (newScore: number) => void;
}
const Choice: React.FC<ChoiceProps> = ({ getScoreF }) => {
  const cpuOptions = ["rock", "papper", "misprim"];
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPick, setCurrentPick] = useState("s");
  const [cpuChoice, setcpuChoice] = useState("");
  const [gameState, setGameState] = useState(0);
  const [numberOfMoves, setNumberOfMovers] = useState(0);
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
  };

  useEffect(() => {
    if (currentPick === cpuChoice) {
      setGameState(2); // It's a tie
    } else if (
      (currentPick === "rock" && cpuChoice === "misprim") ||
      (currentPick === "papper" && cpuChoice === "rock") ||
      (currentPick === "misprim" && cpuChoice === "papper")
    ) {
      setGameState(1); // You win
      getScoreF(+1);
    } else {
      setGameState(0); // You lose
    }
  }, [currentPick, cpuChoice]);

  return (
    <div className="">
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
            </div>
          </div>
        </div>
      ) : (
        <div className=" relative">
          <Image src={tri} alt="Follow us on Twitter" />
          <div
            className=" absolute top-[-22%] left-[-20%]  bg-[white] px-10 py-10 rounded-full  border-[20px] border-[red] cursor-pointer max-lg:px-6 max-lg:py-6 max-lg:border-[10px] max-lg:left-0 max-lg:top-[-14%]"
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
            className=" absolute top-[-22%] right-[-20%] max-lg:right-[-5%] max-lg:top-[-15%] bg-[white] px-10 py-10 max-lg:px-4 max-lg:py-4 rounded-full  border-[20px] max-lg:border-[10px] border-[yellow] cursor-pointer"
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
            className=" absolute bottom-[-35%] right-[20%] bg-[white] px-10 py-10 rounded-full  border-[20px] border-[blue] cursor-pointer  max-lg:px-6 max-lg:py-6 max-lg:border-[10px] max-lg:right-[32%] max-lg:bottom-[-25%]"
          >
            {" "}
            <Image
              className=" max-lg:w-[40px]"
              height={100}
              width={60}
              src={misprim}
              alt="rock"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Choice;
