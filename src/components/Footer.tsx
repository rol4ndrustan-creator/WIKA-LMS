import Gunungan from "@/components/decorations/Gunungan";

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-bronze/20 px-6 py-12 text-center">
      <Gunungan className="h-10 mx-auto text-bronze/50 mb-4" />
      <p className="font-display text-2xl text-gold-gradient mb-2">WIKASATRIAN</p>
      <p className="text-fog text-sm max-w-md mx-auto leading-relaxed">
        Leadership begins with a journey. Building leaders rooted in
        Indonesian wisdom, ready for the future.
      </p>
      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-fog/40">
        © {new Date().getFullYear()} Wikasatrian. All rights reserved.
      </p>
    </footer>
  );
}
