import CollectionCard from "components/CollectionCard";

function Partners() {
  const cardData = {
    title: "Steady Breaks",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    image: "/images/nfts/12.png",
  };
  return (
    <div className="w-full margins flex justify-center">
      <div
        className="w-full max-w-8xl flex flex-col lg:flex-row 
        pt-[40px] sm:pt-[48px] lg:pt-[70px] xl:pt-[96px] pb-[30px] ms:pb-[40px] lg:pb-[50px] xl:pb-[60px]"
      >
        <div className="w-full flex flex-col mb-[54px] lg:mb-0 lg:mr-[50px] xl:mr-[84px]">
          <div className="w-full text-title-1 mb-4 sm:mb-6 lg:mb-[30px]">
            Only Industry Trusted Partners
          </div>
          <div className="text-body-1 mb-7 sm:mb-[40px] lg:mb-[70px]">
            Our community relies on us to bring only the best to the breaking
            table. No rugs here.
          </div>
          <div className="w-full grid grid-cols-3 gap-3 sm:gap-[25px] xl:gap-[48px]">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-full h-[48px] sm:h-[60px] xl:h-[75px] border-[1px] border-solid border-foreground-700 bg-foreground-700 flex items-center justify-center"
              >
                <div className="tex-[18px] sm:text-[20px]">Logo</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:max-w-[600px] flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <CollectionCard
            data={cardData}
            className="sm:max-w-[400px] lg:max-w-full"
            imageStyle="!h-[250px] sm:!h-[300px] lg:!h-[420px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
