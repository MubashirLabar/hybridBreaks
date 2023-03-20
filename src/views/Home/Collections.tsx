import CollectionCard from "components/CollectionCard";

function Collections() {
  const collectionList = [
    {
      title: "Traditional",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
      image: "/images/nfts/9.png",
    },
    {
      title: "Hybrid",
      text: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      image: "/images/nfts/14.png",
    },
    {
      title: "Digital",
      text: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      image: "/images/nfts/13.png",
    },
  ];

  return (
    <div className="w-full margins flex justify-center">
      <div
        className="w-full max-w-8xl
        pt-[40px] sm:pt-[48px] lg:pt-[70px] xl:pt-[96px] pb-[30px] ms:pb-[40px] lg:pb-[50px] xl:pb-[60px]"
      >
        <div className="w-full max-w-[700px] mb-3 sm:mb-4 lg:mb-6 text-title-1">
          Ushering in a new era of the hobby
        </div>
        <div className="w-full max-w-[100%] md:max-w-[90%] mb-[30px] sm:mb-[40px] lg:mb-[70px] xl:mb-[100px] text-body-1">
          Hybrid Breaks is the home for all Hybrid Collectors, us in the hobby
          who collect both Traditional and Digital.
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] xl:gap-[30px]">
          {collectionList.map((item, index) => (
            <CollectionCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
