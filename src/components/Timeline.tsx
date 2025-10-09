import { ReactNode } from "react";

type TimelineItemProps = {
  period: string;
  role: string;
  company: string;
  description: string;
  isLast?: boolean;
  icon?: ReactNode;
};

function TimelineItem({ period, role, company, description, isLast = false, icon }: TimelineItemProps) {
  return (
    <li className="mb-10 ml-6">
      <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 ring-background">
        {icon || (
            <svg className="h-2.5 w-2.5 text-primary-foreground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
            </svg>
        )}
      </span>
      <div className="ml-4">
        <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">
          {role}
        </h3>
        <p className="block mb-2 text-sm font-normal leading-none text-muted-foreground">{company} &bull; {period}</p>
        <p className="mb-4 text-base font-normal text-muted-foreground">{description}</p>
      </div>
    </li>
  );
}

type TimelineProps = {
    items: Omit<TimelineItemProps, 'isLast' | 'icon'>[];
    icon?: ReactNode;
}

export function Timeline({ items, icon }: TimelineProps) {
  return (
    <ol className="relative border-l border-border">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} isLast={index === items.length - 1} icon={icon} />
      ))}
    </ol>
  );
}
