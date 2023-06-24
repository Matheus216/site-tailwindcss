import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
      <div className="h-screen bg-cover bg-center bg-[url('/background.webp')]">
        <div className='relative ps-20 pe-20'>
          <Navbar />
        </div>
       <h1 className="text-3xl font-mono text-center text-slate-300 mt-20">
          Welcome
        </h1>
        <div className="text-2xl font-mono text-center text-slate-300 m-10 bg-[#19535da3] rounded-md">
          become your best version
        </div>
      </div>
  )
}
