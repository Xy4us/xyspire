import { AnimatedSectionHeading } from "./AnimatedSectionHeading";

interface SectionHeadingProps {
  children: string;
}

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <AnimatedSectionHeading>
      {children}
    </AnimatedSectionHeading>
  );
};
