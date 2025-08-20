import { ReactNode, RefObject } from "react";

interface ISection {
  children: ReactNode;
  ref?: RefObject<HTMLElement>;
}

const Section = ({ children, ref }: ISection) => {
  return (
    <section ref={ref} className="px-5 flex flex-col gap-y-8">
      {children}
    </section>
  );
};

export default Section;
