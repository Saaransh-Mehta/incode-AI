import { Cross, Hamburger, Library, MessageCircle, Search, X } from "lucide-react"
import { useState } from "react"
import { motion } from "motion/react"
const Sidebar = () => {
  const [isOpen,setisOpen] = useState<boolean>(true)
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const [active,isActive] = useState<number>(0);

  const toggleSidebar = ()=>{
    setisOpen(!isOpen)
  }

  const recentChat = [
    {
      id:1,
      title: "Recent Chat 1"
    },{
      id:2,
      title: "Recent Chat 2"
    },{
      id:3,
      title: "Recent Chat 3"
    },{
      id:4,
      title: "Recent Chat 4"
    },{
      id:5,
      title: "Recent Chat 5"
    },{
      id:6,
      title: "Recent Chat 6"
    }
  ]
  return (
    <>
      {isOpen ? (
        <>
          <motion.div 
          exit={{ x: "-100%" ,opacity: 0, transition: { duration: 0.3 } }}
          animate={{ x: 0 }}
          initial={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className='sidebar w-96 md:w-60 sm:w-48 border border-neutral-300 h-screen'>
            <div className="sidebar-close flex justify-end pl-4 pt-3">
              <X className="cursor-pointer" onClick={toggleSidebar} />  
            </div>
            <div className="sidebar-top h-32 flex justify-center items-center">
              <h1 className="font-semibold">Incode AI</h1>
            </div>
            <div className="middle-content">
              <ul className="flex flex-col gap-4 pl-4">
                <li className="flex flex-row gap-2"><MessageCircle/> New Chat</li>
                <li className="flex flex-row gap-2"><Search/> Search Chat</li>
                <li className="flex flex-row gap-2"><Library/> Library</li>
              </ul>
            </div>
            <div className="middle-content-2 mt-24 flex justify-center items-center px-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <p className="px-4 text-sm font-medium text-gray-600">Recent Chats</p>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
            <div className="recent-chats">
              <ul className="flex flex-col gap-1 pl-4 mt-10">
               
                {
                  recentChat.map((chat)=>(
                    <li 
                      key={chat.id} 
                      className={`hover:bg-gray-200 rounded-md p-2 transition-all cursor-pointer ${active === chat.id ? "bg-gray-300" : ""}`}
                      onClick={()=>isActive(chat.id)}
                    >
                      {chat.title}
                    </li>
                  ))
                }
              </ul>
            </div>
        

      {!isPremium && (
        <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
        className="mx-4  mt-20 mb-4">
          <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 shadow-lg">
            <button className="absolute top-2 right-2 text-white/70 hover:text-white">
              <X onClick={()=>setIsPremium(!isPremium)} className="w-4 h-4" />
            </button>
            <div className="pr-6">
              <h4 className="text-white font-semibold text-sm mb-1">Go Premium</h4>
              <p className="text-white/90 text-xs mb-3">Unlock unlimited chats and advanced features</p>
              <button className="bg-white/20 hover:bg-white/30 text-white text-xs px-3 py-1.5 rounded-md transition-all duration-200 backdrop-blur-sm">
                Upgrade Now
              </button>
            </div>
          </div>
        </motion.div>
      )}
          </motion.div>
          
        </>
      ) : (
        <>
        <Hamburger className="cursor-pointer" onClick={toggleSidebar} />
        </>
      )}
      
    </>
  )
}

export default Sidebar
