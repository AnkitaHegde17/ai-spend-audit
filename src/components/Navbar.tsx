export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 border-b border-zinc-800">
      
      <div>
  <h1 className="text-2xl font-bold text-green-400">
    Credex Audit
  </h1>

  <p className="text-xs text-gray-500">
    Optimize your AI subscriptions
  </p>
</div>

      <a
  href="#audit-form"
  className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:bg-gray-200"
>
  Get Started
</a>

    </nav>
  );
}