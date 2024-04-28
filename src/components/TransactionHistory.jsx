import TransactionHistoryData from './TransactionHistoryData';
export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type {items.type}</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(data => (
          <tr key={data.id}>
            <TransactionHistoryData items={data} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
