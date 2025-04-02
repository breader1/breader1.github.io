export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center text-center">
        <h1 className="text-4xl font-bold">👨‍💻 Brett's Portfolio 🚀</h1>
        <h2 className="text-2xl font-bold">🏗️ Under Construction 🛠️</h2>
        <p className="text-lg max-w-[600px]">
          This site is currently being updated. Please check back soon ✨
        </p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm opacity-75">
        <span>© {new Date().getFullYear()} - Brett Reader</span>
      </footer>
    </div>
  );
}
