import React, { useEffect, useState } from "react";
import CollectionCard from "../../components/CollectionCard";
import { chips, savedNotes } from "../../common";
import Modal from "../../components/Modal";
import { Slider } from "@mui/material";
import CustomSlider from "../../components/CustomSlider";
import { useLazyGetCollectionsQuery } from "../../api/fetchCollections";

const CollectionContainer = () => {
  const [isDetailsModalOpen, setDetailsModalOpen] = useState<boolean>(false);
  const [level, setLevel] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState("NOTES");
  const [selectedNote, setSelectedNote] = useState<{
    id: number;
    title: string;
    description: string;
    subtitle: string;
  }>();

  // const [getCollections, getCollectionsState] = useLazyGetCollectionsQuery();

  // useEffect(() => {
  //   getCollections();
  // }, []);

  // console.log(getCollectionsState)

  const collectionList = [
    { id: 1, name: "AI Conference 2024 Preparation" },
    { id: 2, name: "Breakthroughs in Reinforcement Learning" },
    { id: 3, name: "Thesis Notes: Policy Optimization Techniques" },
    { id: 4, name: "Dissertation Research: Reinforcement Learning" },
    { id: 5, name: "Advanced Reinforcement Learning: Study Notes" },
    { id: 6, name: "Future Trends in Proximal Policy Optimization" },
    { id: 7, name: "Reinforcement Learning for Autonomous Systems" },
  ];
  const [selectedCollection, setSelectedCollection] = useState(
    collectionList[0]
  );
  const handleLevelChange = (event: any) => {
    setLevel(event.target.value);
  };

  const keyWords = [
    "Articles",
    "React",
    "react-app",
    "documentation",
    "reference",
    "DOM",
  ];

  const renderSideBarComponent = () => {
    if (selectedOption === "NOTES")
      return (
        <div className="flex flex-col gap-4">
          <div className="py-5 px-4 bg-white rounded-[10px]">
            <div className="font-medium text-[#4A3500] text-[15px] mb-4">
              Keywords
            </div>
            <div className="flex flex-wrap gap-1.5">
              {keyWords.map((word) => (
                <div className="rounded-[20px] bg-[#EAB73426] text-[#4A3500] text-[14px] px-3 py-1.5">
                  {word}
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 bg-white rounded-[10px]">
            <div className="font-medium text-[#4A3500] text-[15px]">
              Sub-heading
            </div>
            <div className="mt-4 text-[13px]">
              <ul className="list-disc list-inside">
                <li>
                  The React reference documentation is broken down into
                  functional subsections.
                </li>
                <li>
                  It covers Programmatic React features such as Hooks,
                  Components, APIs, and Directives.
                </li>
                <li>
                  It also covers React DOM, which contains features for web
                  applications running in the browser DOM environment.
                </li>
                <li>
                  The documentation includes information on the Rules of React,
                  such as component and hook purity, and the Rules of Hooks.
                </li>
                <li>
                  The React reference documentation is broken down into
                  functional subset.
                </li>
                <li>
                  It also covers React DOM, which contains features for web
                  applications running in the browser DOM environment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
  };

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
              {selectedCollection.id === 4 ? (
                <>
                  {savedNotes.map((note) => (
                    <CollectionCard
                      configNumber={Math.floor(Math.random() * 3)}
                      title={note.title}
                      description={note.description}
                      subtitle={note.subtitle}
                      onClick={() => {
                        setDetailsModalOpen(true);
                        setSelectedNote(note);
                      }}
                    />
                  ))}
                </>
              ) : (
                <div className="flex items-center justify-center w-full">
                  <div className="text-[16px] leading-[22px] flex flex-col items-center mt-[13rem] gap-[14px] text-[#1D1D1DCC]">
                    <img
                      src="../../icons/bird-icon.svg"
                      alt="icon"
                      className="h-[7.375rem] w-[7.375rem]"
                    />
                    Oops! No notes found in this collection.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isDetailsModalOpen ? (
        <Modal
          showModal={isDetailsModalOpen}
          setShowModal={setDetailsModalOpen}
        >
          <div className="rounded-[10px] bg-white w-[80vw] h-[80vh] relative">
            <div className="bg-[#FBFBFB] px-6 py-4 flex justify-between rounded-t-[10px]">
              <div className="text-xs text-[#4A3500] flex items-center gap-2">
                <img src="../../icons/react-icon.svg" alt="icon" />
                {selectedNote?.title || 'React Reference Overview – React'}
              </div>
              <button onClick={() => setDetailsModalOpen(false)}>
                <img src="../../icons/close-icon.svg" alt="close" />
              </button>
            </div>
            <div className="bg-white p-5 flex gap-9">
              <div className="w-3/5 pl-[105px] pr-[90px] py-4">
                <div className="font-semibold text-[#4A3500] text-[23px] mb-3">
                  {selectedNote?.title || 'React Reference Overview – React'}
                </div>
                <div className="p-3 font-medium text-[14px] text-[#4A3500] flex items-center border border-[#F0F0F0] rounded w-fit">
                  Save to collection
                  <img src="../../icons/chevron.svg" alt="chevron" />
                </div>
                <div className="mt-6 text-[#1D1D1D] break-words">
                  The React reference documentation is broken down into
                  functional subsections. It covers Programmatic React features
                  such as Hooks, Components, APIs, and Directives. It also
                  covers React DOM, which contains features for web applications
                  running in the browser DOM environment.
                </div>
                <div className="mt-6 text-[#1D1D1D] break-words">
                  The documentation includes information on the Rules of React,
                  such as component and hook purity, and the Rules of Hooks.
                </div>
                <div className="mt-6 text-[#1D1D1D] break-words">
                  <ul className="list-disc list-inside">
                    <li>
                      The React reference documentation is broken down into
                      functional subsections.
                    </li>
                    <li>
                      It covers Programmatic React features such as Hooks,
                      Components, APIs, and Directives.
                    </li>
                    <li>
                      It also covers React DOM, which contains features for web
                      applications running in the browser DOM environment.
                    </li>
                    <li>
                      The documentation includes information on the Rules of
                      React, such as component and hook purity, and the Rules of
                      Hooks.
                    </li>
                  </ul>
                </div>
                <div className="mt-6 text-[#1D1D1D] break-words">
                  <ul className="list-disc list-inside">
                    <li>
                      The React reference documentation is broken down into
                      functional subset.
                    </li>
                    <li>
                      It also covers React DOM, which contains features for web
                      applications running in the browser DOM environment.
                    </li>
                  </ul>
                </div>
                <div
                  className="absolute bottom-0 pb-[15px] bg-[#FFFFFF80]"
                  style={{ backdropFilter: "blur(200px)" }}
                >
                  <div className="flex justify-between text-[14px] w-[3/5] text-[#1E1E1E]">
                    Summary level
                    <div className="font-semibold">{level}</div>
                  </div>
                  <CustomSlider
                    max={5}
                    min={1}
                    level={5}
                    handleChange={handleLevelChange}
                  />
                </div>
              </div>
              <div className="w-2/5 bg-[#FBFBFB] rounded-[10px] px-4 py-2">
                <div className="flex">
                  <button
                    className={`h-12 w-1/2 text-[#4A3500] ${
                      selectedOption === "NOTES"
                        ? "font-semibold border-b-[3px] border-[#4A3500]"
                        : "font-normal"
                    }`}
                    onClick={() => setSelectedOption("NOTES")}
                  >
                    Notes
                  </button>
                  <button
                    className={`h-12 w-1/2 text-[#4A3500] ${
                      selectedOption === "QUESTION"
                        ? "font-semibold border-b-[3px] border-[#4A3500]"
                        : "font-normal"
                    }`}
                    onClick={() => setSelectedOption("QUESTION")}
                  >
                    Add questions
                  </button>
                </div>
                {renderSideBarComponent()}
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CollectionContainer;
