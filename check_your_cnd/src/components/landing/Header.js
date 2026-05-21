import { Brand } from "@/components/ui/Brand";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Header() {
  return (
    <header id="top" className="border-b border-blue-100 bg-white">
      <div className="mx-auto flex h-[82px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8">
        <Brand />
        <nav className="hidden items-center gap-10 text-base font-bold text-[#50668f] md:flex">
          <a className="transition hover:text-blue-700" href="#about">
            About
          </a>
          <a className="transition hover:text-blue-700" href="#faq">
            FAQ
          </a>
          <ButtonLink
            href="#assessment"
            size="nav"
            showIcon={false}
          >
            Start Assessment
          </ButtonLink>
        </nav>
        <ButtonLink
          className="text-sm md:hidden"
          href="#assessment"
          size="nav"
          showIcon={false}
        >
          Start
        </ButtonLink>
      </div>
    </header>
  );
}
