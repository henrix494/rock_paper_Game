import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-gradient-to-t from-[#1f3756] to-[#141539] h-screen flex items-center justify-center max-lg:h-full">
      <div className=" flex  gap-10 text-4xl max-lg:flex-col">
        <div className="w-[300px] border-2 border-[#ffffff86] h-max rounded-lg py-10 ">
          <div>
            <div>
              {" "}
              <h2 className="text-center text-white font-serif">Play VS CPU</h2>
            </div>
            <div>
              <h3 className=" text-center text-white py-10">Mode</h3>
            </div>
            <div className=" flex justify-center flex-col items-center gap-2">
              <Link href={"/cpu/normal"}>
                <button className=" bg-[#92d838]  py-2 rounded-3xl w-[280px] flex justify-center">
                  Normal
                </button>
              </Link>
              <Link href={"/cpu/lizard"}>
                <button className=" bg-[#92d838]  py-2 rounded-3xl w-[280px] flex justify-center">
                  Lizard
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[300px] border-2 border-[#ffffff86]  h-max rounded-lg py-10">
          {" "}
          <div>
            <div>
              {" "}
              <h2 className="text-center text-white font-serif">Play Online</h2>
            </div>
            <div>
              <h3 className=" text-center text-white py-10">Mode</h3>
            </div>
            <div className=" flex justify-center flex-col items-center gap-2">
              <Link href={"/cpu"}>
                <button className=" bg-[#92d838]  py-2 rounded-3xl w-[280px] flex justify-center">
                  Normal
                </button>
              </Link>
              <Link href={"/cpu"}>
                <button className=" bg-[#92d838]  py-2 rounded-3xl w-[280px] flex justify-center">
                  Lizard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
