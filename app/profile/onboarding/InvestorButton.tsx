"use client";

export default function InvestorButton() {
  async function applyAsInvestor() {
    await fetch("/api/profile/investor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        investor: true,
      }),
    });
  }

  return (
    <a onClick={applyAsInvestor} className="border hover:border-green-500 transition-all rounded-md hover:cursor-pointer text-center text-gray-600 p-2 w-full mt-4">
      Continue as an investor
    </a>
  );
}
