"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { KeyFactors } from '@/components/KeyFactors';
import { FilterSection } from '@/components/FilterSection';
import { ProductList } from '@/components/ProductList';
import { ComparisonTable } from '@/components/ComparisonTable';
import { Scale, Zap, Truck, Lock } from 'lucide-react';

const washingMachines = [
  { id: 1, name: 'EcoWash Pro', brand: 'GreenTech', price: 599, rating: 4.5, features: ['Energy efficient', 'Large capacity', 'Smart controls'], image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { id: 2, name: 'SpeedMaster 3000', brand: 'QuickClean', price: 499, rating: 4.2, features: ['Quick wash cycles', 'Compact design', 'Multiple wash programs'], image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
  { id: 3, name: 'SilentWash Elite', brand: 'WhisperAppliances', price: 699, rating: 4.7, features: ['Ultra-quiet operation', 'Steam cleaning', 'Anti-vibration technology'], image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80' },
];

const keyFactors = [
  {
    title: "Capacity",
    description: "Choose based on your laundry needs",
    icon: <Scale className="h-6 w-6" />,
    hoverText: "Larger capacity means fewer loads but may use more energy. Consider your typical laundry volume."
  },
  {
    title: "Energy Efficiency",
    description: "Save on bills and help the environment",
    icon: <Zap className="h-6 w-6" />,
    hoverText: "Higher efficiency ratings mean lower energy consumption and reduced utility costs over time."
  },
  {
    title: "Wash Programs",
    description: "Versatility for different fabric types",
    icon: <Truck className="h-6 w-6" />,
    hoverText: "More programs offer greater flexibility, but ensure you'll use them to justify any price increase."
  },
  {
    title: "Noise Level",
    description: "Important for open-plan living",
    icon: <Lock className="h-6 w-6" />,
    hoverText: "Lower decibel ratings are crucial if your laundry area is near living spaces or bedrooms."
  }
];

export default function WashingMachines() {
  const [budget, setBudget] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [size, setSize] = useState('');
  const [type, setType] = useState('');

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const brands = ['GreenTech', 'QuickClean', 'WhisperAppliances'];
  const sizes = ['Small', 'Medium', 'Large'];
  const types = ['Front Load', 'Top Load', 'Combo'];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Washing Machine Recommendations</h1>

      <KeyFactors factors={keyFactors} />

      <div className="flex flex-col md:flex-row gap-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden mb-4">Filters</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle>Filters</SheetTitle>
            <FilterSection
              budget={budget}
              setBudget={setBudget}
              selectedBrands={selectedBrands}
              handleBrandChange={handleBrandChange}
              brands={brands}
              size={size}
              setSize={setSize}
              sizes={sizes}
              type={type}
              setType={setType}
              types={types}
            />
          </SheetContent>
        </Sheet>

        <div className="hidden md:block w-1/4">
          <FilterSection
            budget={budget}
            setBudget={setBudget}
            selectedBrands={selectedBrands}
            handleBrandChange={handleBrandChange}
            brands={brands}
            size={size}
            setSize={setSize}
            sizes={sizes}
            type={type}
            setType={setType}
            types={types}
          />
        </div>

        <div className="w-full md:w-3/4">
          <ProductList products={washingMachines} totalModels={150} />
          <ComparisonTable products={washingMachines} />
        </div>
      </div>

      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Did You Know?</h2>
        <p>The world's largest washing machine can wash up to 100kg of laundry in a single cycle!</p>
      </div>
    </div>
  );
}