'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { getNewsById } from '../../../lib/api';
import { notFound } from 'next/navigation';

export default function NewsDetail({ params }) {
  // Unwrap params using React.use()
  const { id } = use(params);
  
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNewsById(id);
        if (!data) {
           // Handle not found usually by redirecting or showing error
           // logic can be improved
        }
        console.log('----------->>>',data);
        
        setNews(data);
      } catch (error) {
        console.error("Failed to fetch news detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="h-8 bg-card-bg/50 animate-pulse w-3/4 rounded mb-4"></div>
            <div className="h-64 bg-card-bg/50 animate-pulse rounded-2xl mb-8"></div>
            <div className="space-y-4">
                <div className="h-4 bg-card-bg/50 animate-pulse w-full rounded"></div>
                <div className="h-4 bg-card-bg/50 animate-pulse w-full rounded"></div>
                <div className="h-4 bg-card-bg/50 animate-pulse w-2/3 rounded"></div>
            </div>
        </div>
      </div>
    );
  }

  if (!news) {
      return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">News Not Found</h2>
                    <Link href="/" className="text-primary hover:underline">Return Home</Link>
                </div>
            </div>
        </div>
      )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-muted hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to News
          </Link>

          <header className="mb-10">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              {news.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-4 text-muted border-b border-border pb-6">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-primary">
                            <User size={20} />
                        </div>
                        <span className="font-medium text-foreground">{news.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Calendar size={16} />
                        {news.date}
                    </div>
                </div>
                
                <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Share2 size={18} /> <span className="text-sm">Share</span>
                </button>
            </div>
          </header>

          <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src={news.image} 
              alt={news.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
             <p className="text-xl text-foreground font-semibold mb-8 border-l-4 border-primary pl-4">
                 {news.summary}
             </p>
             {/* Simulating rich text content */}
             <div className="space-y-6 news-blog">
                {news.ai_generated.split('. ').map((sentence, index) => (
                    <div key={index} dangerouslySetInnerHTML={{__html: sentence}}></div>
                ))}
             </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
