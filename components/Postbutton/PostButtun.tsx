import { useState } from "react";
interface postBTN {
  bestScore: number;
  name: string;
}

const PostButtun: React.FC<postBTN> = ({ bestScore, name }) => {
  const [error, setError] = useState("");
  const postHandle = async () => {
    const sendItem = await fetch(`/api/score`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        score: bestScore,
      }),
    });
    setError("Thank you");
    if (sendItem.status === 500) {
      const data = await sendItem.json();
      console.log(data);
      setError(data);
    }
  };
  return (
    <>
      {error && <div>{error}</div>}

      <button onClick={postHandle} className=" border-2 p-2">
        Post Score
      </button>
    </>
  );
};

export default PostButtun;
