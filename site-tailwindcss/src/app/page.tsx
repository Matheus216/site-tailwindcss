import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
      <div className="relative ps-[2rem] pe-[2rem] h-screen w-screen bg-cover bg-center bg-[url('/background.webp')] bg-black">
        <Navbar />
       <h1 className="text-3xl font-mono text-center text-slate-300 mt-[70%] md:mt-20">
          Welcome
        </h1>
        <div className="text-2xl font-mono text-center text-slate-300 m-10 bg-[#19535da3] rounded-md">
          become your best version
        </div>
      </div>
  )
}
