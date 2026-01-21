import { CheckCircle } from "lucide-react";

const InfoBox = ({ title, description }: { title: string; description: string }) => (
  <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20">
    <div className="flex items-start gap-3">
      <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
      <div>
        <h4 className="mb-2 text-primary">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
); 

export default InfoBox;
