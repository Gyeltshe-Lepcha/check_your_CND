import { DownloadIcon, RotateIcon, ShareIcon } from "@/components/icons/Icons";

function ActionButton({ children, icon: Icon, variant = "secondary", onClick }) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white shadow-[0_8px_16px_rgba(37,99,235,0.22)]"
      : "border border-[#dce6f2] bg-white text-[#061633]";

  return (
    <button
      className={`inline-flex min-h-[43px] items-center justify-center gap-2 rounded-[16px] px-5 text-[16px] font-black transition hover:-translate-y-0.5 ${styles}`}
      type="button"
      onClick={onClick}
    >
      <Icon className="size-5" />
      <span>{children}</span>
    </button>
  );
}

export function ResultActions({ onDownload, onShare, onRetake, compact = false }) {
  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-4">
        <ActionButton icon={DownloadIcon} variant="primary" onClick={onDownload}>
          Download Report
        </ActionButton>
        <ActionButton icon={ShareIcon} onClick={onShare}>
          Share
        </ActionButton>
        <button
          className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#64789d]"
          type="button"
          onClick={onRetake}
        >
          <RotateIcon className="size-5" />
          <span>Retake Assessment</span>
        </button>
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
      <ActionButton icon={RotateIcon} onClick={onRetake}>
        Retake Assessment
      </ActionButton>
    </div>
  );
}
