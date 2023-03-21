import Link from "next/link";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedIcon,
  YoutubeIcon,
} from "assets/icons";
import routes from "routes";

function Footer() {
  const linksLeft = [
    {
      label: "Schedule",
      link: routes.schedule,
    },
    {
      label: "Events",
      link: routes.event,
    },
    {
      label: "Marketplace",
      link: routes.marketplace,
    },
  ];

  const linksRight = [
    {
      label: "Help desk",
      link: routes.schedule,
    },
    {
      label: "Events",
      link: routes.event,
    },
    {
      label: "Marketplace",
      link: routes.marketplace,
    },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      icon: <FacebookIcon />,
      link: "/",
    },
    {
      label: "Twitter",
      icon: <TwitterIcon />,
      link: "/",
    },
    {
      label: "Linked",
      icon: <LinkedIcon />,
      link: "/",
    },
    {
      label: "Youtube",
      icon: <YoutubeIcon />,
      link: "/",
    },
  ];

  return (
    <div className="w-full margins flex justify-center">
      <div className="w-full max-w-8xl py-[60px] lg:py-[120px] flex items-center">
        <div className="w-full flex flex-col">
          <div className="flex-1 items-center justify-center mb-6 flex lg:hidden">
            <Link href={routes.home}>
              <img
                src="/images/logo.svg"
                alt="logo"
                className="h-[28px] cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-full flex items-center flex-col lg:flex-row border-b-[1px] border-solid border-service-500 pb-8 mb-8 lg:mb-20">
            <div className="flex-1 flex items-center flex-col lg:flex-row gap-4 lg:gap-[70px] mb-4 lg:mb-0">
              {linksLeft.map((item, index) => (
                <div
                  key={index}
                  className="text-service-700 text-[16px] font-[600] leading-[36px] tracking-[-0.015em] hover:text-primary-700 cursor-pointer"
                >
                  {item.label}
                </div>
              ))}
            </div>
            <div className="flex-1 items-center justify-center hidden lg:flex">
              <Link href={routes.home}>
                <img
                  src="/images/logo.svg"
                  alt="logo"
                  className="h-[28px] cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex-1 flex items-center flex-col lg:flex-row gap-4 lg:gap-[70px]">
              {linksRight.map((item, index) => (
                <div
                  key={index}
                  className="text-service-700 text-[16px] font-[600] leading-[36px] tracking-[-0.015em] hover:text-primary-700 cursor-pointer"
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex items-center gap-2 lg:gap-[18px] mb-5 lg:mb-[30px]">
              {socialLinks.map((item, index) => (
                <div
                  key={index}
                  className="h-8 lg:h-10 w-8 lg:w-10 rounded-full flex items-center justify-center text-service-700 bg-secondary-500 cursor-pointer animation hover:bg-primary-700 hover:text-service-700"
                >
                  <div className="h-[18px] lg:h-[21px] w-[18px] lg:w-[21px]">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-[14px] lg:text-[15px] text-service-500 tracking-[-0.015em] leading-5 lg:leading-[24px]">
              © Photo, Inc. 2019. We love our users!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
