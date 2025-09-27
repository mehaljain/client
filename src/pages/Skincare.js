import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Skincare() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('featured');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("https://hs-project-server.onrender.com/api/skincare")
      .then(res => {
        setProducts(res.data.map(p => ({ ...p, type: 'skincare' })));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Sort products based on sort state
  const sortedProducts = [...products].sort((a, b) => {
    if (sort === 'price-low') return a.price - b.price;
    if (sort === 'price-high') return b.price - a.price;
    return 0; // featured (default order)
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-pink-100 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Skincare Products</h1>
          <p className="text-lg text-gray-600 mb-8">Discover our premium collection of natural and effective skincare solutions</p>
          <div className="w-32 h-1 bg-gray-300 mx-auto"></div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Count and Sort */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold text-gray-800">{products.length} Products</span>
              <p className="text-gray-600 mt-1">Premium skincare solutions for every skin type</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Sort By:</span>
              <select 
                className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={sort} 
                onChange={e => setSort(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          )}

          {/* Products Grid */}
          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && products.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">We couldn't find any skincare products at the moment.</p>
            </div>
          )}
        </div>
      </div>

      {/* Category Info Section */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our Skincare?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Clinically Tested</h3>
              <p className="text-gray-600">All products undergo rigorous testing for safety and effectiveness.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">100% Natural</h3>
              <p className="text-gray-600">Made with the finest natural ingredients from around the world.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Vegan & Cruelty-Free</h3>
              <p className="text-gray-600">Ethically produced products that are kind to animals and the environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
