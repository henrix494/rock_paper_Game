import { useState, useEffect } from "react";
export const dynamic = "force-dynamic";
export const revalidate = 5;
export const fetchCache = "force-no-store";
export default function LeaderBoardL() {
  const [isClicked, setIsclicked] = useState(false);
  const [data, setData] = useState<
    { id: number; name: string; score: number }[]
  >([]);
  useEffect(() => {
    const getData = async () => {};
    getData();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await fetch(`/api/getscorel`, {
          cache: "no-store",
        });
        const json = await data.json();
        setData(json.scores.rows);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [isClicked]);
  return (
    <div>
      <div
        className=" cursor-pointer"
        onClick={() => {
          setIsclicked(true);
        }}
      >
        Leader Board
      </div>
      {isClicked && (
        <div className=" absolute top-1/2 left-1/2 bg-[black]   translate-x-[-50%] translate-y-[-50%] z-[50] w-[50vw] h-[50vh] rounded-lg overflow-hidden max-lg:h-full max-lg:w-screen">
          <div className=" text-center  text-2xl border-b-2">
            <h2 className="py-4">Leader Board</h2>
            <div className="flex justify-around text-center gap-10 border-b-2 py-5 ">
              {" "}
              <div>name</div>
              <div>score</div>
            </div>

            <div
              className=" absolute top-0 right-0 m-5 text-2xl cursor-pointer"
              onClick={() => {
                setIsclicked(false);
              }}
            >
              X
            </div>
          </div>

          <div>
            {data.map((item) => {
              return (
                <div
                  className="flex justify-around border-b-2 py-5 text-center  "
                  key={item.id}
                >
                  <p className=" text-center">{item.name}</p>
                  <p className=" text-center">{item.score}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
