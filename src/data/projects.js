  const projectsData = [
    {
      id: 'elegance',
      title: 'Elegance - E-Commerce Platform',
      tagline: 'Feature-rich web store with Razorpay & Analytics',
      category: 'Full Stack',
      featured: true,
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive, end-to-end full-stack e-commerce web application engineered for modern retail. Features secure payment processing, real-time analytics',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'EJS', 'Razorpay API', 'Nodemailer', 'Chart.js'],
      keyFeatures: [
        'Secure user authentication with session management',
        'Product search, multi-category filtering, and sorting algorithms',
        'Interactive Shopping Cart and Wishlist management',
        'Razorpay payment gateway integration with invoice generation',
        'Admin dashboard powered by Chart.js for revenue & order analytics',
        'User verification emails via Nodemailer integration'
      ],
      liveDemo: 'https://elegance-4zcb.onrender.com/',
      github: 'https://github.com/jasmineismail/elegance-ecommerce'
    },
    {
      id: 'netflix-clone',
      title: 'Netflix with AI movie recommendations',
      tagline: 'Sleek video streaming showcase UI with TMDB and Gemini API',
      category: 'Frontend',
      featured: true,
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80',
      description: 'A pixel-perfect UI replica of the popular Netflix streaming service. Consumes live media data from the TMDB API and offers instant video trailer popups and integrated Gemini API for movie recommendations.',
      techStack: ['React.js','TailwindCSS','Redux', 'TMDB API', 'Gemini API', 'Firebase Hosting',],
      keyFeatures: [
        'Dynamic row carousels with category feeds fetched live from TMDB API',
        'Instant movie trailer preview player modal integration',
        'Responsive layout matching native platform aesthetic across all screens',
        'Movie reccomendation according to the input from Gemini API and fetch details form TMDB accordingly',
        'Hosted and continuously deployed using Firebase Hosting'
      ],
      liveDemo: 'https://my-netflix-jasmine.web.app/',
      github: 'https://github.com/jasmineismail/netflix-clone'
    },
    {
      id: 'youtube-clone',
      title: 'YouTube Streaming Clone',
      tagline: 'High-performance video discovery platform',
      category: 'Frontend',
      featured: true,
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
      description: 'A feature-complete YouTube interface replica allowing users to search videos, view channel stats, watch content, and explore personalized recommendations.',
      techStack: ['React.js', 'Redux Toolkit', 'YouTube Data API v3', 'Tailwind CSS'],
      keyFeatures: [
        'Global state management utilizing Redux Toolkit for seamless navigation',
        'Live video search with auto-debounced query execution',
        'Dynamic recommendation engine rendering related video feeds',
        'Responsive user interface design'
      ],
      liveDemo: 'https://my-youtube-swart-eta.vercel.app/',
      github: 'https://github.com/jasmineismail/youtube-clone'
    }
  ];

  export default projectsData;