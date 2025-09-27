import React, { useState } from 'react';

const filters = {
  range: [
    { label: 'Moisture Boost', count: 2 },
    { label: 'Repair & Strengthen', count: 1 },
    { label: 'Hydration', count: 1 },
  ],
  hairType: [
    { label: 'Dry', count: 2 },
    { label: 'Normal', count: 1 },
    { label: 'Damaged', count: 1 },
    { label: 'Color-treated', count: 1 },
    { label: 'Curly', count: 1 },
  ],
  concern: [
    { label: 'Frizz', count: 2 },
    { label: 'Dullness', count: 1 },
    { label: 'Breakage', count: 1 },
    { label: 'Split Ends', count: 1 },
    { label: 'Dryness', count: 1 },
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

export default function HaircareFilters() {
  return (
  <aside className="w-64 bg-white p-6 font-mono">
      <h3 className="font-heading text-xl font-bold text-gray-700 mb-6">Filter by</h3>
      <FilterSection title="Range" items={filters.range} />
      <FilterSection title="Hair Type" items={filters.hairType} />
      <FilterSection title="Concern" items={filters.concern} />
    </aside>
  );
}
