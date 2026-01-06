import Link from 'next/link';
import { TrendingUp, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Stockezee
            </span>
          </Link>
          
          {/* <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">Stocks</Link>
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">Intraday Booster</Link>
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">Screener</Link>
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">News</Link>
          </div> */}

          <div className="md:hidden">
            <button className="text-foreground hover:text-primary p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
