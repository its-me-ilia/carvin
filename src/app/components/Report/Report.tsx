interface IReportProps {
  report: string;
}

export const Report: React.FC<IReportProps> = ({ report }) => {
  return <div dangerouslySetInnerHTML={{ __html: report }} />;
};
