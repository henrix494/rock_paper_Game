"use client";
import Link from "next/link";

import React from "react";
import ScoreL from "@/components/Lizard/ScoreL/ScoreL";
import ChoiceL from "@/components/Lizard/ChoiceL/ChoiceL";
import { useState } from "react";
import Image from "next/image";
import rules from "@/assets/image-rules-bonus.svg";
import close from "../../../../assets/icon-close.svg";
import LeaderBoardL from "@/components/Lizard/LeaderBoard/LeaderBoardL";
export default function Page() {
	const [scoreM, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [clickRule, setClickRule] = useState(false);

	const updateScore = (newScore: number) => {
		setScore((prev) => prev + newScore);
	};
	const setbestScore = (newBestScore: number) => {
		setBestScore((prev) => prev + newBestScore);
	};
	const setModel = () => {
		setClickRule(true);
	};

	return (
		<div className="bg-gradient-to-t from-[#1f3756] to-[#141539] ">
			<div className="flex justify-center gap-10 text-white">
				{" "}
				<Link href={"/"}>
					<div>
						<p>Home</p>{" "}
					</div>
				</Link>
				<div>
					{" "}
					<LeaderBoardL />
				</div>
			</div>

			<div className="flex flex-col items-center py-10 gap-32  max-lg:gap-24 relative max-lg:h-full">
				{clickRule && (
					<div className=" absolute h-full bg-[#00000070] w-full z-20 top-0">
						<div className="flex justify-center items-center h-screen">
							<div></div>
							<div className="bg-[white] p-10 rounded-lg flex flex-col">
								{" "}
								<div className="flex justify-between pb-10 ">
									<p className=" text-xl font-bold">Rules</p>
									<Image
										className=" cursor-pointer"
										src={close}
										alt="Close"
										onClick={() => setClickRule(false)}
									/>
								</div>
								<Image className=" " src={rules} alt="rules" />
							</div>
						</div>
					</div>
				)}

				<ScoreL scoreM={scoreM} />

				<ChoiceL
					getScoreF={updateScore}
					setbestScore={setbestScore}
					bestScore={bestScore}
					scoreM={scoreM}
				/>
				<div
					onClick={setModel}
					className=" cursor-pointer self-end mt-24 mr-12 px-5 py-2 text-white text-2xl border-2 border-black rounded-xl max-lg:mt-0 max-lg:self-center max-lg:mr-0">
					Rules
				</div>
			</div>
		</div>
	);
}
