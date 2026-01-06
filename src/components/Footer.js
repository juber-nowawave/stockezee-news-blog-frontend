const Footer = () => {
    return (
      <footer className="bg-card-bg border-t border-border py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted">
          <p>&copy; {new Date().getFullYear()} Stockezee. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;