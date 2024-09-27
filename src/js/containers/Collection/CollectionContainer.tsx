import React, { useState } from "react";
import CollectionCard from "../../components/CollectionCard";

const CollectionContainer = () => {
  const collectionList = [
    { id: 1, name: "Curated links" },
    { id: 2, name: "Research papers" },
    { id: 3, name: "Welcome papers" },
    { id: 4, name: "E-Books" },
    { id: 5, name: "Curated tools" },
    { id: 6, name: "Scribble" },
    { id: 7, name: "Artificial Intelligence" },
  ];
  const [selectedCollection, setSelectedCollection] = useState(
    collectionList[1]
  );

  const chips = [
    { id: 1, name: "All" },
    { id: 2, name: "Articles" },
    { id: 3, name: "Documents" },
    { id: 4, name: "YouTube" },
  ];

  const savedNotes = [
    {
      id: 1,
      title: "ACE© Credit Recommendation | Chegg Skills + Guild",
      description: "www.chegg.com",
			subtitle: 'ACE© Credit Recommendation'
    },
    {
      id: 2,
      title: "ACE© Credit Recommendation | Chegg Skills + Guild",
      description: "www.chegg.com",
			subtitle: 'Sprinklr::Idea'
    },
    {
      id: 3,
      title: "ACE© Credit Recommendation | Chegg Skills + Guild",
      description: "www.chegg.com",
			subtitle: 'Sprinklr::Idea'
    },
    {
      id: 4,
      title: "ACE© Credit Recommendation | Chegg Skills + Guild",
      description: "www.chegg.com",
			subtitle: 'Sprinklr::Idea'
    },
    {
      id: 5,
      title: "ACE© Credit Recommendation | Chegg Skills + Guild",
      description: "www.chegg.com",
			subtitle: 'ACE© Credit Recommendation'
    },
    {
      id: 6,
      title: "ACE© Credit Recommendation | Chegg Skills + Guild",
      description: "www.chegg.com",
			subtitle: 'Sprinklr::Idea'
    },
    {
      id: 7,
      title: "ACE© Credit Recommendation | Chegg Skills + Guild",
      description: "www.chegg.com",
			subtitle: 'ACE© Credit Recommendation'
    },
    {
      id: 8,
      title: "ACE© Credit Recommendation | Chegg Skills + Guild",
      description: "www.chegg.com",
			subtitle: 'ACE© Credit Recommendation'
    },
    {
      id: 9,
      title: "ACE© Credit Recommendation | Chegg Skills + Guild",
      description: "www.chegg.com",
			subtitle: 'ACE© Credit Recommendation'
    },
    {
      id: 10,
      title: "ACE© Credit Recommendation | Chegg Skills + Guild",
      description: "www.chegg.com",
			subtitle: 'Sprinklr::Idea'
    },
  ];

  return (
    <div className="mt-[108px] h-screen bg-[#FAFAFA]">
      <div className="flex gap-6 p-8">
        <div className="rounded-[10px] bg-white h-screen w-1/4 mb-12 p-6">
          <div className="flex justify-between font-semibold text-lg text-[#4A3500] items-center">
            Collections
            <button className="text-sm tracking-[-1%] text-[#D69701] font-normal">
              + Add new
            </button>
          </div>
          <div className="flex flex-col gap-1 mt-[18px]">
            {collectionList.map((item) => (
              <button
                className={`p-3 text-left ${
                  item.id === selectedCollection.id
                    ? "bg-[#FEF3DD] font-semibold"
                    : "font-normal"
                }`}
                onClick={() => {
                  setSelectedCollection(item);
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="w-3/4 rounded-[10px] bg-white">
          <div className="p-6">
            <div className="font-semibold text-lg text-[#4A3500]">
              {selectedCollection.name}
            </div>
            <div className="mt-4 flex gap-2 my-6">
              {chips.map((chip) => (
                <div
                  className={`px-3 py-1.5 rounded-[20px] border border-[#1D1D1D1A] ${
                    chip.id === 1
                      ? "bg-[#4A3500] text-white font-semibold"
                      : "text-[#4A3500] font-normal"
                  }`}
                >
                  {chip.name}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {savedNotes.map((note) => (
                <CollectionCard
                  configNumber={Math.floor(Math.random() * 3)}
                  title={note.title}
                  description={note.description}
									subtitle={note.subtitle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionContainer;
