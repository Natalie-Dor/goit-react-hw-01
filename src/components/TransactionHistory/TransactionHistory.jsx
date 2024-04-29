import css from './TransactionHistory.module.css';
import TransactionHistoryData from '../TransactionHistoryData/TransactionHistoryData';
export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th>Type {items.type}</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.table}>
        {items.map(data => (
          <tr className={css.table} key={data.id}>
            <TransactionHistoryData items={data} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
