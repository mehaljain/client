import React, { useState } from 'react';

const filters = {
  category: [
    { label: 'Dry & Calming Range', count: 1 },
    { label: 'Pigmentation Range', count: 1 },
  ],
  skinConcern: [
    { label: 'Dehydrated Skin', count: 1 },
    { label: 'Dryness', count: 1 },
    { label: 'Pigmentation', count: 1 },
  ],
  skinType: [
    { label: 'All skin types', count: 1 },
    { label: 'Dry Skin', count: 1 },
    { label: 'Normal Skin', count: 1 },
  ],
};

function FilterSection({ title, items }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-6">
      <button
        className="flex items-center justify-between w-full font-heading text-lg font-bold text-gray-800 mb-2 focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {title}
        <span className="ml-2">{open ? '▾' : '▸'}</span>
      </button>
      {open && (
        <div className="pl-2">
          {items.map((item, idx) => (
            <label key={idx} className="flex items-center mb-2 font-body text-base text-gray-700 cursor-pointer">
              <input type="checkbox" className="mr-2 accent-primary-dark" />
              {item.label} <span className="ml-1 text-gray-500">({item.count})</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SkincareFilters() {
  return (
  <aside className="w-64 bg-white p-6 font-mono">
      <h3 className="font-heading text-xl font-bold text-gray-700 mb-6">Filter by</h3>
      <FilterSection title="Category" items={filters.category} />
      <FilterSection title="Skin Concern" items={filters.skinConcern} />
      <FilterSection title="Skin Type" items={filters.skinType} />
    </aside>
  );
}
