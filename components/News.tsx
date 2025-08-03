import { Newspaper } from "lucide-react";
import React from "react";

interface NEWSITEMS {
  heading: string;
  subHeading: string;
}
const newsItems: NEWSITEMS[] = [
  {
    heading: "Tech Giants Collaborate on AI Ethics",
    subHeading:
      "Leading companies join forces to develop responsible AI guidelines.",
  },
  {
    heading: "New Social Media Platform 'Profyle' Launches Beta",
    subHeading:
      "A LinkedIn-like community platform focuses on clean UI and user privacy.",
  },
  {
    heading: "Electric Cars Overtake Gasoline in Sales for First Time",
    subHeading:
      "The automotive industry marks a milestone in green transportation.",
  },
  {
    heading: "Breakthrough in Quantum Computing Achieved",
    subHeading:
      "Researchers demonstrate stable quantum error correction methods.",
  },
  {
    heading: "Global Climate Summit Sets New Emission Targets",
    subHeading:
      "Countries pledge to cut carbon emissions by 50% over next decade.",
  },
];

const News = () => {
  return (
    <div className="hidden md:block w-[25%] bg-white h-fit rounded-lg border border-gray-300">
      <div className="flex items-center justify-between p-3">
        <h1 className="font-medium text-blue-500 text-sm flex gap-x-1.5 items-center">
          <Newspaper size={18} />
          <div>
            {" "}
            <i className="ri-donut-chart-fill"></i>ut
            <span className="text-gray-700">Link News</span>
          </div>
        </h1>
      </div>
      <div>
        {newsItems.map((newsItem, index) => (
          <div
            key={index}
            className="px-3 py-2 bg-gray-200 hover:cursor-pointer"
          >
            <h1 className="text-sm font-medium">{newsItem.heading}</h1>
            <p className="text-xs font-medium text-gray-600">
              {newsItem.subHeading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
