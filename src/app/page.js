'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';
import { getNews } from '../lib/api';

export default function Home() {
  const [allNews, setAllNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        setAllNews(data);
        setFilteredNews(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleSearch = (query) => {
    const lowerQuery = query?.toLowerCase();
    const filtered = allNews?.filter(
      (news) =>
        news.title?.toLowerCase()?.includes(lowerQuery) ||
        news.summary?.toLowerCase()?.includes(lowerQuery)
    );
    setFilteredNews(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {/* Hero / Search Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-card-bg/50 to-background/0">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            Market Insights & <span className="text-primary">Breaking News</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted mb-10">
            Stay ahead of the curve with real-time updates on stocks, crypto, and global markets.
          </p>
          <SearchBar onSearch={handleSearch} />
        </section>

        {/* News Grid Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Latest News
            </h2>
          
          {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-96 md:h-80 bg-card-bg/30 animate-pulse rounded-2xl"></div>
                 ))}
             </div>
          ) : filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted">No news found matching your search.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
