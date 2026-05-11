import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="relative overflow-hidden bg-white">
        <div className="container py-24 md:py-32 flex items-center justify-between gap-16">
          <h2 className="text-5xl md:text-6xl font-medium shrink-0">
            #BuildWith<span className="text-primary">Layer.</span>
          </h2>
          <p className="max-w-xs text-text-secondary text-base leading-relaxed">
            Compounding GTM intelligence. Built on your context. Deployed on voice and video.
          </p>
        </div>
      </div>
      <div className="bg-accent py-6">
        <div className="container flex items-center justify-between">
          <Link href="/home" className="flex items-center gap-3">
            <img src="/images/layer-logo.png" alt="Layer" className="h-8 w-auto" />
            <span className="font-medium text-lg">Layer</span>
          </Link>
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Layer Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
