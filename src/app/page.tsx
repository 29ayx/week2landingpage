import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24 gap-8">
      <Link href={"/ashutosh"}>
        <div className="border-2 border-gray-300 w-76 rounded-lg p-6 bg-white shadow-md">
          <h1 className="text-2xl font-bold mb-4">Visit Ashutosh Page</h1>
        </div>
      </Link>
      <Link href={"/ayush"}>

      <div className="border-2 border-gray-300 w-76 rounded-lg p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold mb-4">Visit Ayush Page</h1>
      </div>
      </Link>
      <Link href={"/ram"}>
      <div className="border-2 border-gray-300 w-76 rounded-lg p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold mb-4">Visit Ram Page</h1>
      </div>
      </Link>
    </div>
  );
}
