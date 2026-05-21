import { DownloadIcon, RotateIcon, ShareIcon } from "@/components/icons/Icons";

function ActionButton({ children, href, icon: Icon, variant = "secondary", onClick }) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white shadow-[0_8px_16px_rgba(37,99,235,0.22)]"
      : "border border-[#dce6f2] bg-white text-[#061633]";
  const className = `inline-flex min-h-[43px] items-center justify-center gap-2 rounded-[16px] px-5 text-[16px] font-black transition hover:-translate-y-0.5 ${styles}`;

  if (href) {
    return (
      <a className={className} href={href}>
        <Icon className="size-5" />
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
    >
      <Icon className="size-5" />
      <span>{children}</span>
    </button>
  );
}

function RetakeAction({ compact, onRetake, retakeHref }) {
  if (compact) {
    if (retakeHref) {
      return (
        <a
          className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#64789d]"
          href={retakeHref}
        >
          <RotateIcon className="size-5" />
          <span>Retake Assessment</span>
        </a>
      );
    }

    return (
      <button
        className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#64789d]"
        type="button"
        onClick={onRetake}
      >
        <RotateIcon className="size-5" />
        <span>Retake Assessment</span>
      </button>
    );
  }

  return (
    <ActionButton href={retakeHref} icon={RotateIcon} onClick={onRetake}>
      Retake Assessment
    </ActionButton>
  );
}

export function ResultActions({
  onDownload,
  onShare,
  onRetake,
  retakeHref,
  compact = false,
}) {
  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-4">
        <ActionButton icon={DownloadIcon} variant="primary" onClick={onDownload}>
          Download Report
        </ActionButton>
        <ActionButton icon={ShareIcon} onClick={onShare}>
          Share
        </ActionButton>
        <RetakeAction compact onRetake={onRetake} retakeHref={retakeHref} />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <ActionButton icon={DownloadIcon} variant="primary" onClick={onDownload}>
        Download Full Report
      </ActionButton>
      <ActionButton icon={ShareIcon} onClick={onShare}>
        Share Results
      </ActionButton>
      <RetakeAction onRetake={onRetake} retakeHref={retakeHref} />
    </div>
  );
}
