import Footer from "./Footer/page"

export default function Home() {
  return (
    <div> 
      <div className="flex ml-6 mr-6 gap-4 pt-10">
        <div className="w-1/3 bg-pink-400 h-72"></div>
        <div className="w-1/3 bg-yellow-400 h-72"></div>
        <div className="w-1/3 bg-green-400 h-72"></div>
      </div>

      <div className="flex mr-6 ml-6 pt-10 pb-10 gap-4">
        <div className="w-1/2 bg-blue-600 h-80"></div>
        <div className="w-1/2 bg-red-600 h-80"></div>
      </div> 

      <Footer />
    </div>
  )
}
