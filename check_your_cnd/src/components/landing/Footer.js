import { Brand } from "@/components/ui/Brand";

export function Footer() {
  return (
    <footer className="bg-white px-5 py-[50px] text-[#426197] sm:px-8">
      <div className="mx-auto max-w-[1380px]">
        <div className="flex flex-col justify-between gap-9 md:flex-row md:items-center">
          <div>
            <Brand footer />
            <p className="mt-5 max-w-[390px] text-[15px] leading-[1.6]">
              An educational tool for NCD risk awareness. Not a substitute for
              professional medical advice.
            </p>
          </div>
          <nav className="flex flex-wrap gap-8 text-[15px]">
            <a className="transition hover:text-blue-700" href="#about">
              About
            </a>
            <a className="transition hover:text-blue-700" href="#faq">
              FAQ
            </a>
            <a className="transition hover:text-blue-700" href="#privacy">
              Privacy
            </a>
            <a className="transition hover:text-blue-700" href="#terms">
              Terms
            </a>
          </nav>
        </div>

        <div className="mt-[42px] border-t border-blue-100 pt-[31px] text-center text-[14px]">
          &copy; 2026 HealthCheck. For informational purposes only. Always consult your
          healthcare provider.
        </div>
      </div>
    </footer>
  );
}
