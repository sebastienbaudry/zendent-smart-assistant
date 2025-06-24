
import { Card, CardContent } from "@/components/ui/card";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  metric?: string;
}

export const BenefitCard = ({ icon, title, description, metric }: BenefitCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-100">
      <CardContent className="p-8 text-center">
        <div className="text-6xl mb-4 group-hover:animate-float">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        {metric && (
          <div className="bg-secondary/10 rounded-lg p-3">
            <span className="text-secondary font-semibold text-sm">
              {metric}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
