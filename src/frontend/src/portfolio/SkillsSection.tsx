import { SKILL_CATEGORIES } from "./data";

export function SkillsSection() {
  return (
    <section id="competences" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="fade-in-up mb-16 text-center">
          <span className="font-mono-code text-xs text-primary tracking-widest uppercase mb-3 block">
            {"// ma boîte à outils"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Compétences
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div
              key={cat.label}
              className="fade-in-up rounded-2xl border border-border bg-card/60 p-6 space-y-4"
              style={{ transitionDelay: `${ci * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                  {cat.icon}
                </div>
                <h3 className="font-display text-lg font-bold">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="text-sm px-3 py-1 rounded-full border border-border bg-muted/40 text-foreground font-medium"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
