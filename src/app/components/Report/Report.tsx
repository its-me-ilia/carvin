interface IReportProps {
  report: string;
}

export const Report: React.FC<IReportProps> = ({ report }) => {
  return (
    <div
      style={{ background: "linear-gradient(#fff, #fff)" }}
      dangerouslySetInnerHTML={{ __html: report }}
    />
  );
};
