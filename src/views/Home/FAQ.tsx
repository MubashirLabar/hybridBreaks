import React from "react";

function FAQ() {
  const faqs = [
    {
      title: "Sed ut perspiciatis",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
    {
      title: "Sed ut perspiciatis",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
    {
      title: "Sed ut perspiciatis",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
    {
      title: "Sed ut perspiciatis",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
  ];

  return (
    <div className="w-full margins flex justify-center">
      <div
        className="w-full max-w-8xl flex flex-col 
        pt-[40px] sm:pt-[48px] lg:pt-[70px] xl:pt-[96px] pb-[30px] ms:pb-[40px] lg:pb-[50px] xl:pb-[60px]"
      >
        <div className="w-full text-title-1 mb-[40px] lg:mb-[60px]">FAQs</div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[40px] xl:gap-[60px] mb-8 lg:mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-title-3 mb-4 lg:mb-6">{faq.title}</div>
              <div className="text-body-3">{faq.text}</div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-end justify-end">
          <button className="text-body-3 !text-primary-700 font-[500] animation hover:underline">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
