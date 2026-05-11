"use client"

import { BentoGridWithFeatures, type BentoFeature } from "@/components/ui/bento-grid"
import { Brain, Mic2, FileText, BarChart3, RefreshCw, Swords } from "lucide-react"

const IconCard = ({ icon: Icon, color }: { icon: React.ElementType; color: string }) => (
  <div className={`mt-6 flex h-44 w-full items-center justify-center rounded-2xl ${color}`}>
    <Icon className="size-12 text-white/80" strokeWidth={1.5} />
  </div>
)

const features: BentoFeature[] = [
  {
    id: "1",
    title: "Practice Mode",
    description: "Run AI-powered roleplay sessions so reps sharpen their pitch before facing a real buyer.",
    content: <IconCard icon={Swords} color="bg-gradient-to-br from-orange-400 to-orange-600" />,
    className: "col-span-1 md:col-span-3 lg:col-span-2 border-b md:border-r",
  },
  {
    id: "2",
    title: "Pre-call Briefing",
    description: "Auto-generate CRM-aware briefs — account history, open deals, personas — minutes before each call.",
    content: <IconCard icon={Brain} color="bg-gradient-to-br from-violet-400 to-violet-600" />,
    className: "col-span-1 md:col-span-3 lg:col-span-2 border-b lg:border-r",
  },
  {
    id: "3",
    title: "Live Co-pilot",
    description: "Real-time talk tracks, objection handlers, and competitive battle cards surfaced mid-call.",
    content: <IconCard icon={Mic2} color="bg-gradient-to-br from-blue-400 to-blue-600" />,
    className: "col-span-1 md:col-span-6 lg:col-span-2 border-b",
  },
  {
    id: "4",
    title: "Post-call Automation",
    description: "Summaries, next steps, CRM field updates, and follow-up emails — generated and pushed automatically the moment the call ends.",
    content: <IconCard icon={FileText} color="bg-gradient-to-br from-emerald-400 to-emerald-600" />,
    className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r",
  },
  {
    id: "5",
    title: "CRM Sync",
    description: "Push structured call data directly to Salesforce or HubSpot — no manual entry, no missed fields.",
    content: <IconCard icon={RefreshCw} color="bg-gradient-to-br from-sky-400 to-sky-600" />,
    className: "col-span-1 md:col-span-3 lg:col-span-3 border-b",
  },
  {
    id: "6",
    title: "Team Performance Analytics",
    description: "Track talk ratios, objection frequency, stage conversion, and coaching impact across every rep on your team.",
    content: <IconCard icon={BarChart3} color="bg-gradient-to-br from-rose-400 to-rose-600" />,
    className: "col-span-1 md:col-span-6 lg:col-span-6",
  },
]

export default function WhatYouCanBuild() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-medium text-foreground">What you can build</h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl">
            Every Layer plan comes with a full suite of AI-powered tools for the complete GTM motion.
          </p>
        </div>
        <BentoGridWithFeatures features={features} />
      </div>
    </section>
  )
}
