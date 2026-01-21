interface InstructionStepProps {
  step: number;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const InstructionStep = ({ step, title, description, Icon }: InstructionStepProps) => (
  <div className="flex gap-4">
    <div className="shrink-0">
      <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
        <span className="text-primary">{step}</span>
      </div>
    </div>
    <div>
      <h3 className="mb-2 flex items-center gap-2">
        <Icon className="w-5 h-5 text-primary" />
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);
export default InstructionStep;