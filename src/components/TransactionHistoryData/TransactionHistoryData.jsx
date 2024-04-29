import css from './TransactionHistoryData.module.css';
export default function TransactionHistoryData({
  items: { type, amount, currency },
}) {
  return (
    <>
      <td className={css.table}>{type}</td>
      <td className={css.table}>{amount}</td>
      <td className={css.table}>{currency}</td>
    </>
  );
}
