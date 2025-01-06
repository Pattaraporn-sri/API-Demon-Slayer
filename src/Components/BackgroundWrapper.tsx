interface BackgroundWrapperProps {
  page: number; // หน้าปัจจุบัน
  children: React.ReactNode; // เนื้อหาภายใน Component
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  page,
  children,
}) => {
  const getBackgroundClass = (page: number): string => {
    const backgrounds: { [key: number]: string } = {
      1: "bg-Demon1",
      2: "bg-Demon1",
      3: "bg-Demon1",
      4: "bg-Demon1",
      5: "bg-Demon1",
      6: "bg-Demon1",
      7: "bg-Demon1",
      8: "bg-Demon1",
      9: "bg-Demon1",
    };
    return backgrounds[page] || "bg-default";
  };

  return (
    <div
      className={`min-h-full bg-cover bg-fixed bg-bottom  ${getBackgroundClass(
        page
      )}`}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
