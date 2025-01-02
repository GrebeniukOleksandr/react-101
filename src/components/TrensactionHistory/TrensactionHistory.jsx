import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import css from './TrensactionHistory.module.css';

export default function TrensactionHistory({transactions}) {
return (
<table className={css.customTable}>
    <thead className={css.customThead}>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </thead>
    <tbody>
        {transactions.map((transaction) => (
            <tr key={transaction.id}>
                <TransactionHistoryItem transaction={transaction} />
            </tr>)
        )}
    </tbody>
</table>
);
}