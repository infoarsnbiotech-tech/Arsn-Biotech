export default function Footer() {
  return (
    <footer className="bg-navy-950 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src="/logo-full.png" alt="ARSN Tech" className="h-12 w-auto opacity-95" />
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} ARSN Tech. Innovating tomorrow, empowering today.
        </p>
      </div>
    </footer>
  )
}
