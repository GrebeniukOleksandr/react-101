import css from './TransactionHistoryItem.module.css'
export default function TransactionHistoryItem({ transaction: { type, amount, currency } }) {
    return (
        <>
            <td className={css.nameType}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    );
}
