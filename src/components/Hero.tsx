import AuditForm from "./AuditForm";
export default function Hero() {
  return (
    <div className="text-center">
      
      <h1 className="text-5xl font-bold">
        AI Spend Audit
      </h1>

      <p className="text-gray-400 mt-4 max-w-xl">
        Find out if your startup is overpaying for AI tools like ChatGPT, Claude, Cursor, and GitHub Copilot.
      </p>

      <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
        Audit My Spend
      </button>
      <AuditForm />

    </div>
  );
}