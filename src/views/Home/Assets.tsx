import { PlayIcon } from "assets/icons";
function Assets() {
  return (
    <div className="w-full margins flex justify-center">
      <div
        className="w-full max-w-8xl flex flex-col lg:flex-row items-center 
        pt-[40px] sm:pt-[48px] lg:pt-[70px] xl:pt-[96px] pb-[30px] ms:pb-[40px] lg:pb-[50px] xl:pb-[60px]"
      >
        <div className="w-full relative max-w-[750px] h-[280px] sm:h-[380px] xl:h-[420px] mb-6 sm:mb-8 lg:mb-0 mr-0 lg:mr-[50px] xl:mr-[84px]">
          <video
            muted
            loop
            autoPlay={true}
            title="Video Preview"
            src="/videos/intro-video.mp4"
            className="w-full h-full object-cover z-0"
          />
          <div className="w-full h-full absolute inset-0 flex flex-col justify-center items-center">
            <button className="h-[60px] lg:h-[80px] w-[60px] lg:w-[80px] bg-primary-700 rounded-full text-white flex items-center justify-center animation">
              <PlayIcon className="h-5 lg:h-7 w-5 lg:w-7 ml-1" />
            </button>
          </div>
        </div>
        <div className="w-full lg:max-w-[600px]">
          <div className="text-title-1">
            List assets in our Marketplace immediately after receiving them.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
