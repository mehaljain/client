import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

export default function ShopAll() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('featured');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    
    const fetchProducts = async () => {
      try {
        const [skincareRes, haircareRes] = await Promise.all([
          axios.get("http://localhost:5000/api/skincare"),
          axios.get("http://localhost:5000/api/haircare")
        ]);

        const skincareProducts = skincareRes.data.map(p => ({ ...p, type: 'skincare' }));
        const haircareProducts = haircareRes.data.map(p => ({ ...p, type: 'haircare' }));
        
        setAllProducts([...skincareProducts, ...haircareProducts]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getFilteredAndSortedProducts = () => {
    let filtered = allProducts;

    if (filter !== 'all') {
      filtered = allProducts.filter(product => product.type === filter);
    }

    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.range && product.range.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'name-asc') return a.name.localeCompare(b.name);
      if (sort === 'name-desc') return b.name.localeCompare(a.name);
      return 0;
    });

    return sorted;
  };

  const filteredProducts = getFilteredAndSortedProducts();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-pink-100 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Shop All Products</h1>
          <p className="text-lg text-gray-600 mb-8">Discover our complete collection of premium skincare and haircare products</p>
          <div className="w-32 h-1 bg-gray-300 mx-auto"></div>
        </div>
      </div>

      {/* Filters and Search Section */}
      <div className="py-8 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Category:</span>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Products</option>
                <option value="skincare">Skincare</option>
                <option value="haircare">Haircare</option>
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Sort By:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold text-gray-800">{filteredProducts.length} Products</span>
              <p className="text-gray-600 mt-1">
                {filter === 'all' ? 'Complete collection of skincare and haircare products' :
                 filter === 'skincare' ? 'Premium skincare solutions for every skin type' :
                 'Transformative haircare solutions for every hair type'}
              </p>
            </div>
            
            {/* Active Filters Display */}
            {(filter !== 'all' || searchTerm) && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Active filters:</span>
                {filter !== 'all' && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {filter === 'skincare' ? 'Skincare' : 'Haircare'}
                  </span>
                )}
                {searchTerm && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    "{searchTerm}"
                  </span>
                )}
                <button
                  onClick={() => {
                    setFilter('all');
                    setSearchTerm('');
                    setSort('featured');
                  }}
                  className="text-red-600 text-xs hover:text-red-800 transition"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          )}

          {/* Products Grid */}
          {!loading && filteredProducts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={`${product.type}-${product._id}`} product={product} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">
                {searchTerm ? `No products match "${searchTerm}"` : 'Try adjusting your filters or search terms.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Category Summary Section */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Complete Product Range</h2>
            <div className="w-32 h-1 bg-gray-300 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Skincare Summary */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="text-green-500 mb-4 flex justify-center">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Skincare Collection</h3>
                <p className="text-gray-600">Premium skincare solutions for every skin type and concern</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-green-600">
                  {allProducts.filter(p => p.type === 'skincare').length}
                </span>
                <p className="text-gray-600">Products Available</p>
              </div>
            </div>

            {/* Haircare Summary */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="text-green-500 mb-4 flex justify-center">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Haircare Collection</h3>
                <p className="text-gray-600">Transformative haircare solutions for every hair type</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-green-600">
                  {allProducts.filter(p => p.type === 'haircare').length}
                </span>
                <p className="text-gray-600">Products Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
