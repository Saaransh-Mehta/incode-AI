import { IconReportSearch } from '@tabler/icons-react';
import { SearchIcon, SendIcon } from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';
import { usePromptStore } from '../store/promptStore';
import { motion } from 'motion/react';
const Chatinterface = () => {

  const prompt = usePromptStore((state) => state.prompt);
  const setPrompt = usePromptStore((state) => state.setPrompt);

  return (
    <section className="chat-interface h-screen">
      <div className=" inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(130%_130%_at_50%_10%,#ffffff_30%,#e0e7ff_70%,#6366f1_100%)]">
        <div className="ai-branding flex flex-col items-center-safe justify-center">
          <div>
            <img 
            className="h-50  mb-2"
            src="/logo.png" alt="logo" />
          </div>
          <h1 className="text-4xl font-semibold bebas tracking-wide  ">
            Welcome back Saaransh!
          </h1>
        </div>
        <div className="featured-tag flex justify-center items-center mt-10">
                  <span className='text-sm text-gray-500 px-4 py-2 '>Featured Prompts</span>

            </div>
            <div className="featured-prompts flex flex-col items-center mt-8">
              <div className='flex flex-row gap-3'>
                <motion.button
                initial={{scale: 0.9}}
                whileHover={{scale: 1}}
                whileTap={{scale: 0.95}}
                 onClick={() => setPrompt('Create a landing page for AI startup')}
                >
                  <span className='text-sm text-gray-500 border hover:bg-gray-200 border-neutral-200 px-4 py-2 rounded-xl'>Create a landing page for AI startup</span>
                </motion.button>
                 <motion.button
                 initial={{scale: 0.9}}
                whileHover={{scale: 1}}
                whileTap={{scale: 0.95}}
                onClick={() => setPrompt('Create a landing page for AI startup')}
                 >
                  <span className='text-sm text-gray-500 hover:bg-gray-200 border border-neutral-200 px-4 py-2 rounded-xl'>Create a landing page for AI startup</span>
                </motion.button>
                 <motion.button
                 initial={{scale: 0.9}}
                whileHover={{scale: 1}}
                whileTap={{scale: 0.95}}
                 onClick={() => setPrompt('Create a landing page for AI startup')}
                 >
                  <span className='text-sm text-gray-500 border hover:bg-gray-200 border-neutral-200 px-4 py-2 rounded-xl'>Create a landing page for AI startup</span>
                </motion.button>
              </div>
              <div className='flex flex-row gap-3 mt-10'>
                <motion.button
                initial={{scale: 0.9}}
                whileHover={{scale: 1}}
                whileTap={{scale: 0.95}}
                onClick={() => setPrompt('Create a landing page for AI startup')}
                >
                  <span className='text-sm text-gray-500 hover:bg-gray-200 border border-neutral-200 px-4 py-2 rounded-xl'>Create a landing page for AI startup</span>
                </motion.button>
                <motion.button
                initial={{scale: 0.9}}
                whileHover={{scale: 1}}
                whileTap={{scale: 0.95}}
                onClick={() => setPrompt('Create a landing page for AI startup')}
                >
                  <span className='text-sm text-gray-500 hover:bg-gray-200 border border-neutral-200 px-4 py-2 rounded-xl'>Create a landing page for AI startup</span>
                </motion.button>
              </div>
            </div>
            <div className="prompt-box flex flex-col border border-neutral-300 w-160 rounded-2xl mx-auto justify-center items-center mt-16">
              <TextareaAutosize minRows={4}   value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder='What You wanted to create Today !' className="font-normal w-160 outline-none focus:outline-none focus:ring-0 focus:border-transparent  p-2  resize-none   rounded-2xl "></TextareaAutosize>
             <div className="flex justify-between items-center w-full p-2">
             <div className="left-container">
                <button title='search from web' className=" px-4 py-2 rounded-2xl  hover:bg-gray-200 transition-colors">
                <SearchIcon/>
              </button>
                <button title='research and create' className=" px-4 py-2 rounded-2xl  hover:bg-gray-200 transition-colors">
                <IconReportSearch/>
              </button>
             </div>
               <button title='generate' onClick={(e)=>console.log(prompt)} className="  px-2 py-2 rounded-2xl mr-4 hover:bg-gray-200 transition-colors">
               <SendIcon/>
              </button>
             </div>
            </div>
            
            
      </div>
    </section>
  )
}

export default Chatinterface
