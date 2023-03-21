import { useEffect, useState } from "react";
import Link from "next/link";
import routes from "routes";
import { MenuIcon } from "assets/icons";

function Header() {
  const [expend, setExpend] = useState(false);

  const headerLink = [
    {
      label: "Schedule",
      link: "/",
    },
    {
      label: "Events",
      link: "/",
    },
    {
      label: "Marketplace",
      link: "/",
    },
    {
      label: "About Us",
      link: "/",
    },
    {
      label: "Support",
      link: "/",
    },
  ];

  useEffect(() => {
    if (expend) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [expend]);

  return (
    <>
      <div className="w-full margins flex items-center justify-center bg-service-bg border-b-[1px] border-solid border-border-700 h-[80px] xl:h-[96px] sticky top-0 left-0 right-0 z-[999]">
        <div className="w-full max-w-8xl flex items-center">
          <div className="flex-1 flex items-center">
            <Link href={routes.home}>
              <img
                src="/images/logo.svg"
                alt="logo"
                className="h-[28px] xl:h-[34px] cursor-pointer mr-10"
              />
            </Link>

            <div className="hidden xl:flex items-center gap-10 ">
              {headerLink.map((item, index) => (
                <Link key={index} href={item.link}>
                  <div className="text-[16px] text-service-700 cursor-pointer font-[600] animation hover:text-primary-700 tracking-[-0.015em]">
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="button-primary !font-[600] !hidden md:!flex">
              Connect Wallet
            </button>
            <button
              className="h-7 w-7 text-service-700 flex xl:hidden"
              onClick={() => setExpend(!expend)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* For Desktop| Tablet | Mobile Screen */}
      <div
        className={`bg-service-bg fixed inset-0 z-[1000] flex backdrop-blur-[10px] animation-3 hide ${
          expend ? "show expend" : ""
        }`}
        style={{
          right: `${expend ? "0px" : `calc(-100% + -200px)`}`,
        }}
      >
        <div className="w-full h-full bg-service-bg relative margins animation-2">
          <div className="w-full flex items-center h-[80px] absolute left-0 right-0 margins">
            <div className="flex-1 flex items-center">
              <Link href={routes.home}>
                <img
                  src="/images/logo.svg"
                  alt="logo"
                  className="h-[28px] cursor-pointer"
                />
              </Link>
            </div>
            <div
              className="h-[40px] w-[40px] text-service-700 flex items-center justify-center text-[54px] font-[300] cursor-pointer"
              onClick={() => setExpend(false)}
            >
              &times;
            </div>
          </div>
          <div className="h-full w-full flex flex-col justify-center items-center gap-[40px]">
            {headerLink.map((item, idx) => (
              <Link href={"/"} key={idx}>
                <div className="text-service-700 text-[22px] font-[500] leading-[30px] tracking-[-0.015em] cursor-pointer hover:text-primary-700">
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
