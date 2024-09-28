import React from "react";

interface CollectionCardProps {
  configNumber: number;
  title: string;
  description: string;
  subtitle: string;
  onClick: () => void;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  configNumber,
  title,
  description,
  subtitle,
  onClick,
}) => {
  const colorCongif = [
    {
      backgroundColor: "linear-gradient(135deg, #2E2C26, #504C3A, #7C7254)",
      textColor: "#FAFAFA",
      iconUrl: "../icons/globe-white.svg",
    },
    {
      backgroundColor: "linear-gradient(135deg, #FFFDE3, #E7D9B9, #C4B497)",
      textColor: "#000000",
      iconUrl: "../icons/globe.svg",
    },
    {
      backgroundColor: "linear-gradient(135deg, #2A2633, #3F3A4F, #5C5973)",
      textColor: "#FFFFFF",
      iconUrl: "../icons/globe-white.svg",
    },
  ];
  return (
    <div>
      <div
        className="w-[300px] h-[168px] rounded-lg px-4 py-4 flex flex-col justify-end"
        style={{
          background: colorCongif[configNumber].backgroundColor,
          color: colorCongif[configNumber].textColor,
        }}
        onClick={onClick}
      >
        <div>
          <img
            src={colorCongif[configNumber].iconUrl}
            alt="globe"
            className="pb-3"
          />
          <div className="mt-3 font-medium text-sm">{title}</div>
          <div className="mt-1 text-xs">{description}</div>
        </div>
      </div>
      <div className="text-[#4A3500] text-sm mt-2">{subtitle}</div>
    </div>
  );
};

export default CollectionCard;
