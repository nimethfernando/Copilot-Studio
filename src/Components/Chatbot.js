import React, { useRef } from "react";

const Chatbot = () => {
  const iframeRef = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col flex-grow h-[85vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <span className="ml-2 font-semibold text-white text-base">
              BL AI Assistant
            </span>
          </div>
          <div className="flex space-x-1">
            <div className="h-2 w-2 bg-green-400 rounded-full"></div>
            <div className="h-2 w-2 bg-yellow-400 rounded-full"></div>
            <div className="h-2 w-2 bg-red-400 rounded-full"></div>
          </div>
        </div>

        {/* Chat Area - Expanded to fill available space */}
        <div className="relative flex-grow h-full">
          <iframe
            ref={iframeRef}
            src="https://copilotstudio.microsoft.com/environments/Default-b8003b8e-9fe8-4692-8f6f-94f6c45bf00d/bots/crda8_beta/webchat?__version__=2"
            className="w-full h-full min-h-[10800px]"
            title="Chatbot"
            style={{ border: "none" }}
          ></iframe>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3 text-center border-t border-gray-200">
          <p className="text-sm text-gray-600">Powered by BL Beta AI Technologies</p>
        </div>
      </div>

      {/* Copyright outside the main container */}
      <div className="mt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BL Beta AI - All rights reserved
      </div>
    </div>
  );
};

export default Chatbot;
