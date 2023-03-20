import React from "react";

function CollectionCard({
  data,
  className = "",
  imageStyle = "",
}: {
  data: any;
  className?: string;
  imageStyle?: string;
}) {
  return (
    <div
      className={`w-full border-[1px] border-solid border-border-700 ${className}`}
    >
      <div
        className={`bg-image !h-[250px] xl:!h-[300px] ${imageStyle}`}
        style={{ backgroundImage: `url(${data.image})` }}
      />
      <div className="w-full flex flex-col py-5 lg:py-6 xl:py-10 px-5 lg:px-6 xl:px-10">
        <div className="text-title-3 mb-3 lg:mb-5">{data.title}</div>
        <div className="text-body-3">{data.text}</div>
      </div>
    </div>
  );
}

export default CollectionCard;
