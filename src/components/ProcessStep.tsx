
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl">{icon}</span>
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">{number}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </div>
  );
};
