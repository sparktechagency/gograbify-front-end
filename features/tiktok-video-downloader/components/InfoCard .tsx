import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color?: string; // default blue
}

export const InfoCard = ({
  title,
  description,
  Icon,
  color = "blue",
}: InfoCardProps) => {
  return (
    <div className={`p-6 rounded-xl bg-primary/5 border border-primary/20`}>
      <div className="flex items-start gap-3">
        <Icon
          className={`w-6 h-6 text-primary shrink-0 mt-1`}
        />
        <div>
          <h4 className={`mb-2 text-primary`}>{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};