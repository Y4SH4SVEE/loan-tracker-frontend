import LoanCard from "../components/LoanCard";
import Navbar from "../components/NavBar";

function Dashboard() {
  // Sample data – will be replaced with API later
  const loans = [
    { id: 1, name: "Home Loan", dueDate: "2025-07-01", amount: "₹25,000" },
    { id: 2, name: "Education Loan", dueDate: "2025-06-30", amount: "₹15,000" },
    { id: 3, name: "Business Loan", dueDate: "2025-07-15", amount: "₹40,000" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Welcome, User
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loans.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
