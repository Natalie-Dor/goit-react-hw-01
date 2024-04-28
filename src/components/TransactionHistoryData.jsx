export default function TransactionHistoryData({
  items: { type, amount, currency },
}) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
