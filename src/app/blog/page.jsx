import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import Link from 'next/link';
import { blogPosts, getFeaturedBlogPost, getBlogCategories } from '@/data/blogPosts';

export const metadata = {
  title: 'Nutrition Blog - Dr. Priya Sharma | Evidence-Based Health Tips',
  description: 'Expert nutrition advice, health tips, and evidence-based articles on diabetes management, PCOS nutrition, weight loss, and healthy living from Dr. Priya Sharma.',
  keywords: ['nutrition blog', 'health tips', 'diabetes diet', 'PCOS nutrition', 'weight loss tips', 'healthy recipes', 'nutrition advice'],
};

export default function Blog() {
  const featuredPost = {
    title: "Complete Guide to PCOS Nutrition: Evidence-Based Approach",
    excerpt: "Comprehensive guide to managing PCOS through nutrition, including meal plans, supplements, and lifestyle modifications that actually work.",
    author: "Dr. Priya Sharma",
    date: "December 20, 2024",
    readTime: "12 min read",
    category: "PCOS Management",
    image: "/blog/pcos-nutrition.jpg",
    slug: "complete-guide-pcos-nutrition"
  };

  const blogPosts = [
    {
      title: "5 Myths About Diabetes Diet Debunked",
      excerpt: "Common misconceptions about diabetes nutrition that could be hampering your health goals. Learn the science-backed truth.",
      author: "Dr. Priya Sharma",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Diabetes",
      image: "/blog/diabetes-myths.jpg",
      slug: "diabetes-diet-myths-debunked"
    },
    {
      title: "PCOS-Friendly Meal Prep Ideas for Busy Women",
      excerpt: "Simple, nutritious meal prep recipes designed specifically for women with PCOS to balance hormones and manage weight.",
      author: "Dr. Priya Sharma",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Meal Planning",
      image: "/blog/meal-prep-pcos.jpg",
      slug: "pcos-meal-prep-ideas"
    },
    {
      title: "Heart-Healthy Foods for Managing Hypertension",
      excerpt: "Evidence-based nutrition strategies to naturally support healthy blood pressure through dietary choices.",
      author: "Dr. Priya Sharma",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Heart Health",
      image: "/blog/heart-healthy-foods.jpg",
      slug: "heart-healthy-foods-hypertension"
    },
    {
      title: "Weight Loss After 40: What Really Works",
      excerpt: "Age-specific strategies for sustainable weight loss, addressing metabolism changes and hormonal factors.",
      author: "Dr. Priya Sharma",
      date: "November 28, 2024",
      readTime: "8 min read",
      category: "Weight Management",
      image: "/blog/weight-loss-40.jpg",
      slug: "weight-loss-after-40"
    },
    {
      title: "Thyroid-Friendly Foods: Boost Your Metabolism Naturally",
      excerpt: "Discover foods that support thyroid function and metabolism, plus what to avoid for optimal thyroid health.",
      author: "Dr. Priya Sharma",
      date: "November 22, 2024",
      readTime: "9 min read",
      category: "Thyroid Health",
      image: "/blog/thyroid-foods.jpg",
      slug: "thyroid-friendly-foods"
    },
    {
      title: "Intermittent Fasting: Is It Right for You?",
      excerpt: "Science-based analysis of intermittent fasting benefits, risks, and how to determine if it fits your lifestyle.",
      author: "Dr. Priya Sharma",
      date: "November 15, 2024",
      readTime: "10 min read",
      category: "Lifestyle",
      image: "/blog/intermittent-fasting.jpg",
      slug: "intermittent-fasting-guide"
    },
    {
      title: "Anti-Inflammatory Foods for Better Health",
      excerpt: "Complete guide to anti-inflammatory nutrition, including food lists and meal ideas for reducing chronic inflammation.",
      author: "Dr. Priya Sharma",
      date: "November 8, 2024",
      readTime: "7 min read",
      category: "Nutrition Science",
      image: "/blog/anti-inflammatory-foods.jpg",
      slug: "anti-inflammatory-foods-guide"
    },
    {
      title: "Healthy Snacks for Diabetics: 20 Blood Sugar-Friendly Options",
      excerpt: "Delicious and nutritious snack ideas that won't spike blood sugar, with nutritional information and prep tips.",
      author: "Dr. Priya Sharma",
      date: "October 30, 2024",
      readTime: "6 min read",
      category: "Diabetes",
      image: "/blog/diabetic-snacks.jpg",
      slug: "healthy-diabetic-snacks"
    },
    {
      title: "Building Muscle on a Plant-Based Diet",
      excerpt: "Complete protein sources and meal planning strategies for building and maintaining muscle mass on a vegetarian diet.",
      author: "Dr. Priya Sharma",
      date: "October 25, 2024",
      readTime: "11 min read",
      category: "Sports Nutrition",
      image: "/blog/plant-based-muscle.jpg",
      slug: "muscle-building-plant-based-diet"
    }
  ];

  const categories = [
    "All Posts",
    "Diabetes",
    "PCOS Management",
    "Weight Management",
    "Heart Health",
    "Thyroid Health",
    "Meal Planning",
    "Nutrition Science",
    "Sports Nutrition",
    "Lifestyle"
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nutrition & Health Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Evidence-based nutrition advice, practical health tips, and insights
              from 7+ years of clinical experience at Apollo Gleneagles Hospital.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${index === 0
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Tag className="h-12 w-12 text-emerald-600" />
                  </div>
                  <p className="text-gray-600">Featured Article Image</p>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm">Featured</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest nutrition science and practical health tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Tag className="h-8 w-8 text-emerald-600" />
                    </div>
                    <p className="text-sm text-gray-600">Article Image</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay Updated with Nutrition Tips
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get weekly evidence-based nutrition tips, healthy recipes, and exclusive content
            delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg !border-2 !border-white !text-white placeholder:!text-emerald-400 focus:!outline-none focus:!ring-2 focus:!ring-white"
              />
              <button className="bg-white cursor-pointer text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-3">
              No spam, unsubscribe anytime. Your privacy is important to us.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
