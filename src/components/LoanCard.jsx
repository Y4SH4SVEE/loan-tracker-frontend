function LoanCard({ loan }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{loan.name}</h3>
      <p className="text-gray-600 mb-1">
        Due Date: <span className="font-medium">{loan.dueDate}</span>
      </p>
      <p className="text-gray-600 mb-4">
        Amount: <span className="font-bold text-blue-600">{loan.amount}</span>
      </p>

      <button className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
        Pay Now
      </button>
    </div>
  );
}

export default LoanCard;
