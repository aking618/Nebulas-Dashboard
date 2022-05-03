type SectionContainerProps = {
  children: React.ReactNode;
};

const SectionContainer = ({ children }: SectionContainerProps) => {
  return (
    <div style={{ border: "1px solid #000", height: "100%" }}>{children}</div>
  );
};

export default SectionContainer;
