import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  name: string;
  brand: string;
  price: number;
  rating: number;
  features: string[];
  image: string;
}

export function ProductCard({ name, brand, price, rating, features, image }: ProductCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <Image
          src={image}
          alt={name}
          width={300}
          height={200}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{brand}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold">${price}</span>
          <span className="text-sm">★ {rating}</span>
        </div>
        <ul className="text-sm mb-4">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
        <Button className="w-full">View Details</Button>
      </CardContent>
    </Card>
  );
}