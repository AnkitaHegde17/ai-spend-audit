"use client";

import { useEffect, useState } from "react";

export default function AuditForm() {
  const [result, setResult] = useState("");
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [seats, setSeats] = useState("");
  const [auditId, setAuditId] = useState("");

  useEffect(() => {
    const savedSpend = localStorage.getItem("spend");

    if (savedSpend) {
      setSpend(savedSpend);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("spend", spend);
  }, [spend]);

  let savingsRate = 0.2;

  if (tool === "ChatGPT") {
    savingsRate = 0.15;
  } else if (tool === "Claude") {
    savingsRate = 0.25;
  } else if (tool === "Cursor") {
    savingsRate = 0.3;
  } else if (tool === "GitHub Copilot") {
    savingsRate = 0.1;
  }

  const monthlySavings = Number(spend) * savingsRate;
  const yearlySavings = monthlySavings * 12;

  return (
    <div
      id="audit-form"
      className="mt-10 bg-zinc-900 p-6 rounded-2xl w-full max-w-xl"
    >
      <h2 className="text-2xl font-semibold mb-6">
        Enter Your AI Tool Spend
      </h2>

      <div className="flex flex-col gap-4">

        <select
          value={tool}
          onChange={(e) => setTool(e.target.value)}
          className="p-3 rounded-lg bg-black border border-zinc-700"
        >
          <option>Choose AI Tool</option>
          <option>ChatGPT</option>
          <option>Claude</option>
          <option>Cursor</option>
          <option>GitHub Copilot</option>
          <option>Gemini</option>
          <option>Anthropic API</option>
          <option>OpenAI API</option>
          <option>Windsurf</option>
          <option>v0</option>
        </select>

        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="p-3 rounded-lg bg-black border border-zinc-700"
        >
          <option>Choose Plan</option>

          <option>Plus</option>
          <option>Team</option>
          <option>Enterprise</option>

          <option>Pro</option>
          <option>Business</option>

          <option>API</option>
        </select>

        <input
          type="number"
          placeholder="Monthly Spend ($)"
          value={spend}
          onChange={(e) => setSpend(e.target.value)}
          className="p-3 rounded-lg bg-black border border-zinc-700"
        />

        <input
          type="number"
          placeholder="Number of Seats"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          className="p-3 rounded-lg bg-black border border-zinc-700"
        />

        <input
          type="number"
          placeholder="Team Size"
          className="p-3 rounded-lg bg-black border border-zinc-700"
        />

        <select className="p-3 rounded-lg bg-black border border-zinc-700">
          <option>Primary Use Case</option>
          <option>Coding</option>
          <option>Writing</option>
          <option>Research</option>
          <option>Data Analysis</option>
          <option>Mixed</option>
        </select>

        <button
          onClick={() => {
            let recommendation = "";

            if (tool === "ChatGPT") {
              recommendation =
                "Switching from ChatGPT Team to Plus may reduce unnecessary costs.";
            } else if (tool === "Claude") {
              recommendation =
                "Claude Pro may be enough for smaller teams instead of higher plans.";
            } else if (tool === "Cursor") {
              recommendation =
                "Cursor Pro is often sufficient unless your whole company needs Business.";
            } else if (tool === "GitHub Copilot") {
              recommendation =
                "GitHub Copilot Individual may be enough for smaller development teams.";
            } else {
              recommendation =
                "Your current AI spending already looks reasonably optimized.";
            }

            if (yearlySavings < 100) {
              recommendation =
                "Your current AI stack appears well optimized with limited savings opportunities.";
            }

            const id = crypto.randomUUID();
            setAuditId(id);

            setResult(
              `${recommendation} You could save approximately $${yearlySavings.toFixed(
                0
              )} per year.`
            );
          }}
          className="bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200"
        >
          Generate Audit
        </button>

      </div>

      {result && (
        <div className="mt-6 bg-green-900 p-6 rounded-xl">

          <h3 className="text-4xl font-bold mb-6">
            Audit Report
          </h3>

          {monthlySavings > 500 && (
            <div className="bg-yellow-400 text-black p-4 rounded-xl mb-4 font-semibold">
              High Savings Opportunity Detected 🚀

              <p className="mt-2">
                Credex can help your company reduce AI infrastructure costs even further.
              </p>

              <button className="mt-4 bg-black text-white px-5 py-3 rounded-xl font-semibold hover:bg-zinc-800">
                Book Credex Consultation
              </button>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-black p-5 rounded-xl">
              <p className="text-sm text-gray-400">
                Monthly Savings
              </p>

              <p className="text-4xl font-bold text-green-400 mt-2">
                ${monthlySavings.toFixed(0)}
              </p>
            </div>

            <div className="bg-black p-5 rounded-xl">
              <p className="text-sm text-gray-400">
                Annual Savings
              </p>

              <p className="text-4xl font-bold text-green-400 mt-2">
                ${yearlySavings.toFixed(0)}
              </p>
            </div>

          </div>

          <div className="bg-black p-5 rounded-xl mt-4">
            <p className="text-sm text-gray-400">
              Recommendation
            </p>

            <p className="mt-3 text-white leading-7">
              {result}
            </p>
          </div>

          <div className="bg-black p-5 rounded-xl mt-4">

            <p className="text-sm text-gray-400">
              AI Generated Summary
            </p>

            <p className="mt-3 text-white leading-7">
              Your current AI tooling setup shows potential cost optimization opportunities.
              Based on your selected tools and monthly spend, switching to more efficient
              plans could significantly reduce yearly expenses while maintaining similar
              productivity and workflow quality.
            </p>

          </div>

          <input
            type="email"
            placeholder="Enter your email to save this audit"
            className="mt-4 w-full p-3 rounded-lg bg-black border border-zinc-700"
          />

          <button className="mt-3 w-full bg-green-500 text-black py-3 rounded-xl font-semibold hover:bg-green-400">
            Save Audit Report
          </button>

          <div className="bg-black p-4 rounded-xl mt-4">
            <p className="text-sm text-gray-400">
              Shareable Report ID
            </p>

            <p className="text-green-300 mt-2 break-all">
              {auditId}
            </p>
          </div>

        </div>
      )}
    </div>
  );
}