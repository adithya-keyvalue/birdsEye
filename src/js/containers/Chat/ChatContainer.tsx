import React from "react";

const ChartContainer: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-[6.75rem] ml-[7rem]">
      <div className="flex flex-col justify-between items-center">
        <div className="font-semibold text-2xl text-[#4A3500]">
          Chirp with Bird
        </div>
        <div className="text-[14px] leading-[22px] flex flex-col items-center mt-[13rem] gap-[14px] text-[#1D1D1DCC]">
          <img src="../../icons/bird-icon.svg" alt="icon" className="h-[7.375rem] w-[7.375rem]"/>
          Ask me anything about your saved content I'm here to help you find
          answers or explore what you need!
        </div>
        <div className="flex items-center fixed bottom-16 w-[42rem] border border-[#1D1D1D1A] rounded-lg h-14 px-[14px] py-4">
          <input
            className="w-full outline-none placeholder:text-[15px]"
            placeholder="Ask me anything"
          />
          <button>
            <img src="../../icons/send.svg" alt="send-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartContainer;
