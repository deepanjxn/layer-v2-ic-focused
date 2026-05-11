"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { CheckCheck, Mic, Bot, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Starter",
    description:
      "For individual ICs getting started with AI-assisted GTM execution.",
    price: 49,
    yearlyPrice: 399,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "1 paired AI agent", icon: <Bot size={20} /> },
      { text: "5 call analyses / month", icon: <Mic size={20} /> },
      { text: "Basic prep & debrief", icon: <Zap size={20} /> },
    ],
    includes: [
      "Starter includes:",
      "CRM sync",
      "Call recording",
      "Pre-call briefing",
      "Post-call summaries",
      "1 user seat",
    ],
  },
  {
    name: "Growth",
    description:
      "Best value for GTM teams that need live co-pilot and team-level insights.",
    price: 99,
    yearlyPrice: 799,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "Unlimited AI agents", icon: <Bot size={20} /> },
      { text: "Unlimited call analyses", icon: <Mic size={20} /> },
      { text: "Live call co-pilot", icon: <Zap size={20} /> },
    ],
    includes: [
      "Everything in Starter, plus:",
      "Live co-pilot suggestions",
      "Custom playbooks",
      "Team performance insights",
      "Integrations (Salesforce, HubSpot)",
      "Up to 10 user seats",
    ],
  },
];

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-xl bg-neutral-50 border border-gray-200 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "0" ? "text-white" : "text-muted-foreground hover:text-black"
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId="switch"
              className="absolute top-0 left-0 h-12 w-full rounded-xl border-4 shadow-sm shadow-orange-600 border-orange-600 bg-gradient-to-t from-orange-500 via-orange-400 to-orange-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly Billing</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 flex-shrink-0 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "1" ? "text-white" : "text-muted-foreground hover:text-black"
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId="switch"
              className="absolute top-0 left-0 h-12 w-full rounded-xl border-4 shadow-sm shadow-orange-600 border-orange-600 bg-gradient-to-t from-orange-500 via-orange-400 to-orange-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly Billing
            <span className="rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-black">
              Save 20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
    hidden: { filter: "blur(10px)", y: -20, opacity: 0 },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="container pt-36 pb-24 min-h-screen relative"
      ref={pricingRef}
    >
      <article className="text-left mb-10 space-y-6 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-medium text-foreground">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.12}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-start"
            transition={{ type: "spring", stiffness: 250, damping: 40, delay: 0 }}
          >
            Simple pricing, serious results.
          </VerticalCutReveal>
        </h1>

        <TimelineContent
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-base text-text-secondary max-w-md"
        >
          Every plan includes a paired AI agent trained on your business context. Pick the tier that fits your team.
        </TimelineContent>

        <TimelineContent
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} className="w-fit" />
        </TimelineContent>
      </article>

      <div className="grid md:grid-cols-2 gap-4 py-6 max-w-3xl">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={cn(
                "relative border",
                plan.popular
                  ? "ring-2 ring-primary bg-orange-50"
                  : "bg-white"
              )}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl xl:text-3xl font-medium text-foreground mb-2">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-secondary mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-medium text-foreground">
                    $<NumberFlow value={isYearly ? plan.yearlyPrice : plan.price} />
                  </span>
                  <span className="text-text-secondary text-sm">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <button
                  className={cn(
                    "w-full mb-3 p-4 text-base rounded-xl font-medium transition-opacity hover:opacity-90",
                    plan.popular
                      ? "bg-gradient-to-t from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30 border border-orange-400 text-white"
                      : "bg-gradient-to-t from-neutral-900 to-neutral-700 shadow-lg shadow-neutral-900/20 border border-neutral-700 text-white"
                  )}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3 pt-5 border-t border-border">
                  <h4 className="text-xs font-medium uppercase tracking-widest text-text-tertiary mb-3">
                    Features
                  </h4>
                  <p className="font-medium text-sm text-foreground mb-3">
                    {plan.includes[0]}
                  </p>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <span className="h-5 w-5 bg-white border border-primary rounded-full grid place-content-center shrink-0">
                          <CheckCheck className="h-3 w-3 text-primary" />
                        </span>
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
