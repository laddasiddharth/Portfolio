"use client";
import React from "react";
import { cn } from "../../lib/utils";

interface DottedGlowBackgroundProps {
  className?: string;
}

export const DottedGlowBackground: React.FC<DottedGlowBackgroundProps> = ({
  className,
}) => {
  return (
    <div
      className={cn("absolute inset-0 h-full w-full bg-dotted", className)}
    />
  );
};
