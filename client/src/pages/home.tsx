import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-sm">H</span>
              </div>
              <span className="font-semibold text-lg">HelloWorld</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium" data-testid="nav-home">
                Home
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium" data-testid="nav-about">
                About
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium" data-testid="nav-contact">
                Contact
              </a>
            </div>

            <button className="md:hidden p-2 text-muted-foreground hover:text-foreground" data-testid="button-mobile-menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-20">
        <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-scale-in">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-foreground mb-8 leading-tight" data-testid="text-hero-title">
                Hello <span className="text-primary font-medium">World!</span>
              </h1>
            </div>
            
            <div className="animate-fade-in">
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-description">
                Welcome to your starting point. A clean, minimal foundation ready for your next great idea.
              </p>
            </div>

            <div className="animate-fade-in flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                data-testid="button-get-started"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent text-foreground px-8 py-4 rounded-lg font-semibold text-lg border-2 border-border hover:border-primary hover:text-primary transition-all duration-200"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4" data-testid="text-features-title">
                Simple. Clean. <span className="text-secondary">Ready.</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-description">
                Built with modern web technologies and designed for scalability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300" data-testid="card-feature-fast">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Fast & Modern</h3>
                <p className="text-muted-foreground leading-relaxed">Built with performance in mind using the latest web standards and best practices.</p>
              </div>

              <div className="text-center p-8 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300" data-testid="card-feature-responsive">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Fully Responsive</h3>
                <p className="text-muted-foreground leading-relaxed">Seamlessly adapts to any screen size, from mobile phones to desktop displays.</p>
              </div>

              <div className="text-center p-8 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300" data-testid="card-feature-extensible">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Easy to Extend</h3>
                <p className="text-muted-foreground leading-relaxed">Clean, semantic code structure makes it simple to build upon and customize.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-accent/50 py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-xs">H</span>
              </div>
              <span className="font-semibold text-foreground">HelloWorld</span>
            </div>
            
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="link-privacy">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="link-terms">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200" data-testid="link-support">
                Support
              </a>
            </div>
            
            <p className="text-muted-foreground text-sm" data-testid="text-copyright">
              © 2024 HelloWorld. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
