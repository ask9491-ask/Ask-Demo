// Dummy transactions data
const transactions = [
    { date: "2025-08-01", amount: 500, purpose: "Annadanam" },
    { date: "2025-08-02", amount: 1000, purpose: "Temple Renovation" },
    { date: "2025-08-03", amount: 250, purpose: "Pooja" }
];

// Load transactions (anonymized)
function loadTransactions() {
    const tbody = document.getElementById('transactionBody');
    tbody.innerHTML = '';
    transactions.forEach(tx => {
        const row = `<tr>
            <td>${tx.date}</td>
            <td>₹${tx.amount}</td>
            <td>${tx.purpose}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// Handle donation and receipt generation
document.getElementById('donationForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    const purpose = document.getElementById('purpose').value;
    const date = new Date().toISOString().slice(0,10);

    // Add to transaction list (without name for transparency)
    transactions.unshift({ date, amount, purpose });
    loadTransactions();

    // Generate receipt
    const receiptDiv = document.getElementById('receipt');
    receiptDiv.innerHTML = `
        <h3>Donation Receipt</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Amount:</strong> ₹${amount}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
        <p>Thank you for your generous donation!</p>
        <button onclick="window.print()">Print Receipt</button>
    `;
    receiptDiv.style.display = 'block';

    // Reset form
    document.getElementById('donationForm').reset();
};

window.onload = loadTransactions;