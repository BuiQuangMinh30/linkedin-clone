import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import Image from "next/image";
import TimeAgo from "timeago-react";

function Widgets({ articles }) {
  return (
    <div className="hidden xl:inline space-y-2">
      {/* News */}
      <div className="bg-white dark:bg-[#1D2226] py-2.5 rounded-lg space-y-2 w-11/12 overflow-hidden border border-gray-300 dark:border-none">
        <div className="flex items-center justify-between font-bold px-2.5">
          <h4>LinkedIn News</h4>
          <InfoRoundedIcon className="h-5 w-5" />
        </div>

        <div className="space-y-1">
          {articles && articles.slice(0, 5).map((article) => (
            <div
              key={article.url}
              className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 dark:hover:bg-black/20 px-2.5 py-1"
            >
              <FiberManualRecordRoundedIcon className="!h-2 !w-2" />
              <div>
                <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                  {article.title}
                </h5>
                <TimeAgo
                  datetime={article.publishedAt}
                  className="text-xs mt-0.5 dark:text-white/75 opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Ads */}
      <div className="bg-white dark:bg-[#1D2226] w-11/12 h-64 px-2.5 rounded-lg sticky top-20 border border-gray-300 dark:border-none">
        <div className="relative w-full h-full">
          <Image
            src="data:image/png;base64,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"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Widgets;