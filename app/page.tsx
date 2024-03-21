
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center space-y-4 ">
      <div className="flex justify-center p-10">
        <text>
          see if you or your friends need stop watching tiktoks in between
          rounds!
        </text>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link
          href="/leaderboard"
          className="bg-transparent  border-white rounded-md border-2 p-2 hover:bg-white hover:text-black transition duration-300 ease-in-out"
        >
          {" "}
          Leaderboard{" "}
        </Link>
      </div>
      <div className="flex justify-center p-10">
        <Link href="https://github.com/Andrewslayton/phoneChecker">
          learn about the project
        </Link>
      </div>
    </div>
  );
}