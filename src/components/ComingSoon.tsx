"use client";

import { Clock } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center px-4">
        <div className="mb-6 flex justify-center">
          <div className="p-3 bg-primary/10 rounded-full">
            <Clock className="w-12 h-12 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            {description}
          </p>
        )}
        <p className="text-sm sm:text-base text-muted-foreground">
          This feature is coming soon. Stay tuned!
        </p>
      </div>
    </div>
  );
}
