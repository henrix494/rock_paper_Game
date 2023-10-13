import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-gradient-to-t from-[#1f3756] to-[#141539] h-screen flex items-center justify-center">
      <div className=" flex flex-col gap-10 text-4xl">
        <div>
          <Link href={"/cpu"}>
            <button className=" bg-[#92d838] px-10 py-2 rounded-3xl w-[280px] flex justify-center">
              Play VS CPU
            </button>
          </Link>
        </div>
        <div>
          <button className=" bg-[#92d838] px-10 py-2 rounded-3xl w-[280px] flex justify-center ">
            Play Online
          </button>
        </div>
      </div>
    </main>
  );
}
