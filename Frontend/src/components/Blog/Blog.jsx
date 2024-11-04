import { useState, useEffect } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const MEDIUM_USERNAME = 'souvikkk23'; // Replace with your Medium username

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`
        );
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.status === 'ok') {
          const formattedPosts = data.items.map(post => ({
            title: post.title,
            link: post.link,
            thumbnail: post.thumbnail,
            date: new Date(post.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            // Estimate read time based on content length
            readTime: `${Math.ceil(post.content.split(' ').length / 200)} min read`,
            // Clean excerpt from HTML tags and limit length
            excerpt: post.description
              .replace(/<[^>]*>/g, '')
              .slice(0, 150) + '...',
            categories: post.categories.length > 0 ? post.categories : ['General']
          }));
          setPosts(formattedPosts);
        } else {
          throw new Error('Failed to fetch blog posts');
        }
      } catch (err) {
        console.error('Error fetching Medium posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  if (loading) {
    return (
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
              /
            </h2>
            <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
              blog
            </h2>
            <div className="flex-grow h-[1px] bg-custom-darkvoid/20 dark:bg-custom-snow/20"></div>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-custom-liquidlava"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
              /
            </h2>
            <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
              blog
            </h2>
            <div className="flex-grow h-[1px] bg-custom-darkvoid/20 dark:bg-custom-snow/20"></div>
          </div>
          <div className="text-center text-red-500 dark:text-red-400 py-8">
            {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
            /
          </h2>
          <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
            blog
          </h2>
          <div className="flex-grow h-[1px] bg-custom-darkvoid/20 dark:bg-custom-snow/20"></div>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-custom-darkvoid/50 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                {post.thumbnail && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-custom-darkvoid/60 dark:text-custom-snow/60">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-custom-darkvoid dark:text-custom-snow group-hover:text-custom-liquidlava transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-custom-darkvoid/80 dark:text-custom-snow/80">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-custom-liquidlava/10 text-custom-liquidlava rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center text-custom-darkvoid/60 dark:text-custom-snow/60 py-8">
            No blog posts found.
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog; 