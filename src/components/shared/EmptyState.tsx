import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { FileQuestion } from "lucide-react";

type EmptyStateProps = {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  action?: React.ReactNode;
};

export default function EmptyState({
  title = "No data available",
  description = "There are no items to display at this time.",
  icon: Icon = FileQuestion,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed rounded-lg border-muted bg-muted/10">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-background ring-1 ring-border">
        <Icon className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 mb-6 text-sm text-muted-foreground max-w-sm">{description}</p>
      {action ? <div>{action}</div> : null}
    </div>
  );
}

