import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FilterSectionProps {
  budget: number[];
  setBudget: (value: number[]) => void;
  selectedBrands: string[];
  handleBrandChange: (brand: string) => void;
  brands: string[];
  size: string;
  setSize: (value: string) => void;
  sizes: string[];
  type: string;
  setType: (value: string) => void;
  types: string[];
}

export function FilterSection({
  budget,
  setBudget,
  selectedBrands,
  handleBrandChange,
  brands,
  size,
  setSize,
  sizes,
  type,
  setType,
  types
}: FilterSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-2">Budget</h3>
        <Slider
          min={0}
          max={1000}
          step={50}
          value={budget}
          onValueChange={setBudget}
        />
        <div className="flex justify-between mt-2">
          <span>${budget[0]}</span>
          <span>${budget[1]}</span>
        </div>
      </div>
      <div>
        <h3 className="font-medium mb-2">Brands</h3>
        {brands.map(brand => (
          <div key={brand} className="flex items-center space-x-2">
            <Checkbox
              id={brand}
              checked={selectedBrands.includes(brand)}
              onCheckedChange={() => handleBrandChange(brand)}
            />
            <label htmlFor={brand}>{brand}</label>
          </div>
        ))}
      </div>
      <div>
        <h3 className="font-medium mb-2">Size</h3>
        <RadioGroup value={size} onValueChange={setSize}>
          {sizes.map(s => (
            <div key={s} className="flex items-center space-x-2">
              <RadioGroupItem value={s} id={s} />
              <label htmlFor={s}>{s}</label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div>
        <h3 className="font-medium mb-2">Type</h3>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {types.map(t => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}