import { PlayIcon } from "assets/icons";
const Hero = () => {
  return (
    <div className="w-full flex flex-col relative">
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[620px] xl:h-[800px]">
        <video
          muted
          loop
          autoPlay={true}
          title="Video Preview"
          src="/videos/intro-video.mp4"
          className="w-full h-full object-cover z-0"
        />
        <div className="w-full h-full margins absolute inset-0 flex flex-col justify-center xl:justify-end items-center pb-[0px] xl:pb-[190px]">
          <button
            className="h-[60px] lg:h-[80px] xl:h-[100px] w-[60px] lg:w-[80px] xl:w-[100px] 
            bg-primary-700 rounded-full text-white flex items-center justify-center animation mb-[20px] lg:mb-[30px] 2xl:mb-[60px]"
          >
            <PlayIcon className="h-5 lg:h-7 2xl:h-9 w-5 lg:w-7 2xl:w-9 ml-1" />
          </button>
          <div className="text-title-1 text-white text-center animation mb-[20px] lg:mb-[30px]">
            Live Twitch Stream
          </div>
          <button className="button-primary rounded-[6px] min-w-[160px] sm:min-w-[196px] h-[50px] sm:h-[53px]">
            Join Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
