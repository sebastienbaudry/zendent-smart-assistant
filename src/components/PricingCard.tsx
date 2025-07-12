
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  minutes: string;
  pricePerMinute: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  onCtaClick?: () => void;
}

export const PricingCard = ({ 
  title, 
  price, 
  minutes, 
  pricePerMinute, 
  features, 
  isPopular = false,
  ctaText,
  onCtaClick
}: PricingCardProps) => {
  return (
    <Card className={`relative ${isPopular ? 'border-accent border-2 scale-105' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
            Plus populaire
          </span>
        </div>
      )}
      
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold text-gray-800">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold text-primary">{price}</span>
          <span className="text-gray-600 text-sm">/mois</span>
        </div>
        <p className="text-gray-600">{minutes}</p>
        <p className="text-sm text-accent font-semibold">{pricePerMinute}</p>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-secondary mr-3" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full ${isPopular ? 'bg-accent hover:bg-accent/90 text-white' : 'bg-primary hover:bg-primary/90 text-white'} font-semibold py-3`}
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
};
