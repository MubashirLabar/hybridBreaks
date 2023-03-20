import React from "react";

function OurTeam() {
  const ourTeam = [
    {
      name: "Me",
      image: "/images/user.png",
      about:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
    },
    {
      name: "You",
      image: "/images/user.png",
      about:
        "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    },
    {
      name: "Night janitor",
      image: "/images/user.png",
      about:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
    },
  ];

  return (
    <div className="w-full margins flex justify-center">
      <div
        className="w-full max-w-8xl flex flex-col 
        pt-[40px] sm:pt-[48px] lg:pt-[70px] xl:pt-[96px] pb-[30px] ms:pb-[40px] lg:pb-[50px] xl:pb-[60px]"
      >
        <div className="w-full text-title-1 mb-[40px] lg:mb-[60px]">
          Our Team
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-[40px] xl:gap-[60px]">
          {ourTeam.map((user, idx) => (
            <div key={idx} className="w-full max-w-full flex flex-col">
              <div
                className="bg-image !h-[60px] lg:!h-[80px] !w-[60px] lg:!w-[80px] rounded-full mb-4 sm:mb-[20px] lg:mb-[32px]"
                style={{ backgroundImage: `url(${user.image})` }}
              />
              <div className="text-title-3">{user.name}</div>
              <div className="text-body-3 my-4 sm:my-[20px] lg:my-6">
                {user.about}
              </div>
              <div className="text-body-3 !text-primary-700 font-[500] animation hover:underline cursor-pointer">
                Learn more
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
