
import { useState } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "Creating an environment",
  },
  {
    text: "creating files",
  },
  {
    text: "Creating main.tsx",
  },
  {
    text: "Building Your App",
  },
  {
    text: "Just completed Hold On...",
  }
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
     
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

   

      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    
    </div>
  );
}
