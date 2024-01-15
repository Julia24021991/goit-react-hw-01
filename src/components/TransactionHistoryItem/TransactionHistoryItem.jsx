export const TransactionHistoryItem = ({ item: { type, amount, currency } }) => {
    return (
        <tr>
            <td className="type">{type}</td>
            <td className="amount">{amount}</td>
            <td className="currency">{currency}</td>
        </tr>
    )
}