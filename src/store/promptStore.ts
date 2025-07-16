import {create} from 'zustand';

interface PromptState{
    prompt:string;
    setPrompt:(prompt:string) => void;
    clearPrompt:() => void;

}

export const usePromptStore = create<PromptState>((set)=>({
prompt: '',
  setPrompt: (value) => set({ prompt: value }),
  clearPrompt: () => set({ prompt: '' }),
})
)