type SectionContainerProps = {
  children: React.ReactNode;
  styles?: React.CSSProperties;
};

const SectionContainer = ({ children, styles }: SectionContainerProps) => {
  return (
    <div style={{ border: "1px solid #000", height: "100%", ...styles }}>
      {children}
    </div>
  );
};

export default SectionContainer;
