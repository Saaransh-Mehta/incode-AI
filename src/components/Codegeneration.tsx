import { SearchIcon, SendIcon } from "lucide-react"
import TextareaAutosize from 'react-textarea-autosize';
import { usePromptStore } from '../store/promptStore';
import { IconReportSearch } from '@tabler/icons-react';
import MessageTemplate from "./MessageTemplate";
import { Badge } from "./ui/badge";

const Codegeneration = () => {
    const prompt = usePromptStore((state) => state.prompt);
  const setPrompt = usePromptStore((state) => state.setPrompt);
  return (
    <>
    <section className="upper-nav flex justify-between items-center bg-white p-4 shadow-md">

    </section>
      <section className="code-generation h-screen flex justify-between  items-center bg-gray-100">

        <div className="flex flex-col justify-between h-screen w-[30%] border border-neutral-200 rounded-2xl m-2 overflow-hidden">
            <h1 className="top-head p-2 ">
                <Badge className="text-lg border border-neutral-200" variant={"secondary"}>Chat</Badge>
            </h1>
            <div className="message-template flex-1 overflow-y-auto">
                <MessageTemplate/>
            </div>
            <div className="prompt-template">
                 <div className="prompt-box  flex flex-col border border-neutral-300  rounded-2xl  justify-center items-center m-4">
              <TextareaAutosize minRows={4}   value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder='What You wanted to create Today !' className="font-normal outline-none focus:outline-none focus:ring-0 focus:border-transparent  p-2  resize-none   rounded-2xl w-full"></TextareaAutosize>
             <div className="flex justify-between items-center w-full p-2">
             <div className="left-container">
                <button title='search from web' className=" px-4 py-2 rounded-2xl  hover:bg-gray-200 transition-colors">
                <SearchIcon/>
              </button>
                <button title='research and create' className=" px-4 py-2 rounded-2xl  hover:bg-gray-200 transition-colors">
                <IconReportSearch/>
              </button>
             </div>
               <button title='generate' onClick={(e)=>{
               
                console.log(prompt)
               }} className="  px-2 py-2 rounded-2xl mr-4 hover:bg-gray-200 transition-colors">
               <SendIcon/>
              </button>
             </div>
            </div>
            </div>
        </div>
        <div className="flex flex-col h-screen w-[70%] p-10 rounded-3xl border border-neutral-200 m-2">

        </div>
      </section>
    </>
  )
}

export default Codegeneration
