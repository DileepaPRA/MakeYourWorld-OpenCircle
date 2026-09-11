import Link from "next/link";
import { Button } from "@/components/ui/button";
import { World } from "@/engine";
import { growingForestWorld } from "@/data/worlds";
import { SITE_CONFIG } from "@/config/site";
import {
  Compass,
  Sparkles,
  GitPullRequest,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growing Worlds — 2D Paper-Collage Open Source Diorama",
  description:
    "An open-source educational platform where students and beginners practice real contribution workflows by populating handcrafted 2D paper-collage worlds.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-stone-200/60">
        {/* Decent paper craft background grid with radial fade mask */}
        <div 
          className="absolute inset-0 bg-grid-paper pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-80" 
          aria-hidden="true" 
        />

        <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/90 px-3.5 py-1 text-xs font-medium text-stone-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>Open Source Educational Diorama</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-stone-950 sm:text-5xl md:text-6xl font-serif">
            A Living Paper World Built By{" "}
            <span className="text-emerald-800 underline decoration-emerald-600/40 decoration-wavy underline-offset-8">
              Open Source
            </span>{" "}
            Contributions.
          </h1>

          <p className="mx-auto max-w-2xl text-base text-stone-600 sm:text-lg">
            Practice real GitHub workflows on tiny, bite-sized Good First Issues. Add your
            handcrafted paper cutout, submit two small commits, and see your name
            permanently placed in the world.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/worlds"
              className="relative group inline-flex rounded-xl p-[2px] overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)]"
            >
              {/* Rotating glowing light beam running around the border */}
              <div
                className="absolute inset-[-150%] animate-border-beam"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, #34d399 315deg, #a7f3d0 340deg, #ffffff 360deg)",
                }}
              />

              {/* Inner dark container button that leaves a 2px track for the light beam */}
              <Button
                size="lg"
                className="relative z-10 gap-2 bg-emerald-950/95 text-emerald-50 border border-emerald-500/20 transition-all duration-300 hover:bg-emerald-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F5]"
              >
                <Compass className="h-4 w-4 text-emerald-300 transition-transform duration-500 group-hover:rotate-45" />
                <span className="font-semibold tracking-wide">Explore All Worlds</span>
              </Button>
            </Link>
            <Link href="/how-to-contribute">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-stone-300 bg-white text-stone-800 hover:bg-stone-100"
              >
                <span>How to Contribute</span>
                <ArrowRight className="h-4 w-4 text-stone-600" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Interactive World Preview (Growing Forest) */}
      <section className="py-12 sm:py-16 bg-[#F4F1EA]/60 border-b border-stone-200/60">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-800">
                Featured Live World
              </span>
              <h2 className="text-2xl font-bold font-serif text-stone-900">
                Growing Forest
              </h2>
            </div>
            <Link
              href="/worlds/growing-forest"
              className="text-xs font-semibold text-emerald-900 hover:underline flex items-center gap-1"
            >
              <span>Open Fullscreen Canvas</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <World world={growingForestWorld} />
        </div>
      </section>

      {/* 3. The 4-Step Micro-Contribution Workflow */}
      <section className="py-16 sm:py-20 border-b border-stone-200/60">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-800">
              The Contribution Path
            </span>
            <h2 className="text-3xl font-bold font-serif text-stone-900">
              How You Grow The World
            </h2>
            <p className="text-sm text-stone-600">
              No complex frameworks or databases. Each contribution is intentionally
              scoped to 1–10 meaningful lines of code across two commits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-900/10 text-emerald-900 font-bold font-mono text-sm">
                01
              </div>
              <h3 className="font-bold text-stone-900">Claim an Issue</h3>
              <p className="text-xs text-stone-600">
                Pick an open slot from our reusable Good First Issue pool and comment to
                get assigned.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-900/10 text-emerald-900 font-bold font-mono text-sm">
                02
              </div>
              <h3 className="font-bold text-stone-900">Commit 1: Register</h3>
              <p className="text-xs text-stone-600">
                Choose an existing paper asset and register metadata in <code>objects.ts</code> (~1–5 LOC).
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-900/10 text-emerald-900 font-bold font-mono text-sm">
                03
              </div>
              <h3 className="font-bold text-stone-900">Commit 2: Place</h3>
              <p className="text-xs text-stone-600">
                Choose percentage coordinates in <code>placements.ts</code> (~1–5 LOC) and visually verify locally.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-900/10 text-emerald-900 font-bold font-mono text-sm">
                04
              </div>
              <h3 className="font-bold text-stone-900">PR & Merge</h3>
              <p className="text-xs text-stone-600">
                Open your PR against <code>dev</code>. Once merged, your name appears
                under your object!
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href={SITE_CONFIG.issuesUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2 bg-emerald-900 text-white hover:bg-emerald-800">
                <GitPullRequest className="h-4 w-4" />
                <span>Browse Reusable Issue Slots</span>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
