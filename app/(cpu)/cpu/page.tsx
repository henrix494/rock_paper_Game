"use client";

import React from "react";
import Score from "@/components/Score/Score";
import Choice from "@/components/Choice/Choice";
import { useState } from "react";

export default function Page() {
  const [scoreM, setScore] = useState(0);

  // Define a function to update the score
  const updateScore = (newScore: number) => {
    setScore((prev) => prev + newScore);
  };

  return (
    <div className="bg-gradient-to-t from-[#1f3756] to-[#141539] h-screen flex flex-col items-center py-10 gap-32 max-lg:h-full">
      <Score scoreM={scoreM} />
      {/* Pass the updateScore function as a prop to the Choice component */}
      <Choice getScoreF={updateScore} />
      <div className="self-end mt-24 mr-12 px-5 py-2 text-white text-2xl border-2 border-black rounded-xl max-lg:mt-0">
        Rules
      </div>
    </div>
  );
}
