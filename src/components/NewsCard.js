import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, User } from "lucide-react";

const NewsCard = ({ news }) => {
  return (
    <Link
      href={`/news/${news.id}`}
      className="inline-flex items-center text-primary font-semibold text-sm hover:translate-x-1 transition-transform"
    >
      <div className="group bg-card-bg rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={
              news.news_image ||
              "https://img.etimg.com/thumb/msid-126364006,width-160,height-120,imgsize-78500/oil-falls-on-prospect-of-higher-venezuelan-output-ample-supply-outlook.jpg"
            }
            alt={news.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {news.title}
          </h3>
          <p className="text-muted text-sm mb-4 line-clamp-3">{news.summary}</p>
          <div className="flex justify-between">
            <div className="mt-auto">Read More ...</div>
            <div className="flex items-center gap-4 text-xs text-muted">
              <span className="flex items-center gap-1">
                {`${news.created_at} ${news.time.slice(0, 5)}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
