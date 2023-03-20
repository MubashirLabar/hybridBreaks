import React from "react";

function JoinUs() {
  return (
    <div className="w-full margins flex justify-center bg-foreground-700">
      <div
        className="w-full max-w-8xl flex items-center flex-col lg:flex-row 
        py-[56px] sm:py-[80px] lg:py-[120px]"
      >
        <div className="w-full lg:max-w-[900px] mb-4 lg:mr-6">
          <div className="text-body-1 text-center lg:text-start">
            Sign up to stay up to date with the latest news and announcements
            from Hybrid Breaks
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[200px] sm:w-full flex flex-col sm:flex-row items-center gap-4 lg:gap-6 xl:gap-10">
            <div className="button-primary min-w-full sm:min-w-[160px] xl:min-w-[192px] h-[48px] xl:h-[52px]">
              Join Today
            </div>
            <div className="button-primary-hollow min-w-full sm:min-w-[160px] xl:min-w-[192px] h-[48px] xl:h-[52px]">
              Contact us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
