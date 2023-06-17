import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
      <div className="h-screen bg-cover bg-center bg-[url('/background.webp')]">
        <div className='relative ps-40 pe-40'>
          <Navbar />
        </div>
       <h1 className="text-3xl font-mono text-center text-slate-300">
          Welcome
        </h1>
        <div className="text-2xl font-mono text-center text-slate-300 m-10">
          become your best version
        </div>
      </div>
  )
}
