import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, User } from 'lucide-react';

const NewsCard = ({ news }) => {
  return (
    <div className="group bg-card-bg rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
       
        <Image 
          src={news.image|| 'https://img.etimg.com/thumb/msid-126364006,width-160,height-120,imgsize-78500/oil-falls-on-prospect-of-higher-venezuelan-output-ample-supply-outlook.jpg'} 
          alt={news.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-muted mb-3">
            <span className="flex items-center gap-1"><Clock size={12}/> {news.date}</span>
            <span className="flex items-center gap-1"><User size={12}/> {news.author}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{news.title}</h3>
        <p className="text-muted text-sm mb-4 line-clamp-3">
          {news.summary}
        </p>
        
        <div className="mt-auto">
          <Link 
            href={`/news/${news.id}`} 
            className="inline-flex items-center text-primary font-semibold text-sm hover:translate-x-1 transition-transform"
          >
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
