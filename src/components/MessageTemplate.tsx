import { Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'ai' | 'user';
  timestamp: string;
}

const MessageTemplate = () => {
  const messages: Message[] = [
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'ai',
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      text: "Hi! I need help with creating a React component. Can you help me?",
      sender: 'user',
      timestamp: '10:32 AM'
    },
    {
      id: 3,
      text: "Of course! I'd be happy to help you create a React component. What type of component are you looking to build?",
      sender: 'ai',
      timestamp: '10:33 AM'
    },
    {
      id: 4,
      text: "I want to create a button component with different variants like primary, secondary, and outline styles.",
      sender: 'user',
      timestamp: '10:35 AM'
    },
    {
      id: 5,
      text: "Perfect! I'll help you create a flexible button component with multiple variants. Let me provide you with a clean solution.",
      sender: 'ai',
      timestamp: '10:36 AM'
    }
  ];

  return (
    <div className="flex flex-col h-full  p-4 overflow-y-auto">
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex w-full ${
                message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              } items-start gap-3`}
            >
              {/* Avatar - Fixed size */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0 ${
                  message.sender === 'ai'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                    : 'bg-gradient-to-r from-green-500 to-teal-600'
                }`}
              >
                {message.sender === 'ai' ? (
                  <Bot className="w-5 h-5" />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </div>

              {/* Message Bubble - Fixed width */}
              <div
                className={`relative px-4 py-3 rounded-2xl shadow-sm w-64 ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white rounded-br-md'
                    : 'bg-white text-gray-800 rounded-bl-md border border-gray-200'
                }`}
              >
                <div className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.text}
                </div>

                <div
                  className={`text-xs mt-1 ${
                    message.sender === 'user'
                      ? 'text-blue-100'
                      : 'text-gray-500'
                  }`}
                >
                  {message.timestamp}
                </div>

                <div
                  className={`absolute top-4 w-0 h-0 ${
                    message.sender === 'user'
                      ? 'right-[-8px] border-l-8 border-l-blue-500 border-t-8 border-t-transparent border-b-8 border-b-transparent'
                      : 'left-[-8px] border-r-8 border-r-white border-t-8 border-t-transparent border-b-8 border-b-transparent'
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start mt-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 border border-gray-200">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageTemplate
