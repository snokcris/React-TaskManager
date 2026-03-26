type SummaryProps = {
  total: number;
  pending: number;
  completed: number;
};

function Summary({ total, pending, completed }: SummaryProps) {
  return (
    <div className="summary">
      <span>Total: {total}</span>
      <span>Pending: {pending}</span>
      <span>Completed: {completed}</span>
    </div>
  );
}

export default Summary;