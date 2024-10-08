"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { KeyFactors } from '@/components/KeyFactors';
import { FilterSection } from '@/components/FilterSection';
import { ProductList } from '@/components/ProductList';
import { ComparisonTable } from '@/components/ComparisonTable';

const luggageItems = [
  { id: 1, name: 'TravelPro Maxlite 5', brand: 'TravelPro', price: 159, rating: 4.5, features: ['Lightweight', 'Expandable', 'Spinner wheels'], image: 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { id: 2, name: 'Samsonite Omni PC', brand: 'Samsonite', price: 129, rating: 4.3, features: ['Hardside', 'TSA lock', 'Scratch-resistant'], image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { id: 3, name: 'Delsey Paris Helium Aero', brand: 'Delsey', price: 149, rating: 4.4, features: ['Double spinner wheels', 'Expandable', 'Glossy finish'], image: 'https://images.unsplash.com/photo-1550089479-fe0e48e7d788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
];

// ... (rest of the code remains the same)

export default function Luggage() {
  // ... (existing state and functions)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Luggage Recommendations</h1>

      <KeyFactors factors={keyFactors} />

      <div className="flex flex-col md:flex-row gap-8">
        {/* ... (existing Sheet and FilterSection components) */}

        <div className="w-full md:w-3/4">
          <ProductList products={luggageItems} totalModels={100} />
          <ComparisonTable products={luggageItems} />
        </div>
      </div>

      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Did You Know?</h2>
        <p>The world's largest piece of luggage is over 20 feet long and weighs more than 2,500 pounds!</p>
      </div>
    </div>
  );
}