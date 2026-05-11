'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUp, CalendarCheck, Globe, Layout, Play, Plus, Signature, Sparkles, Target, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const THEO_AVATAR = 'https://avatars.githubusercontent.com/u/68236786?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

export default function FeaturesSection() {
    return (
        <section className="border-b">
            <div className="py-24">
                <div className="container">
                    <div className="mb-12">
                        <h2 className="text-foreground max-w-2xl text-balance text-4xl font-semibold">
                            For Leadership
                        </h2>
                        <p className="text-muted-foreground mt-4 max-w-xl text-balance text-lg">
                            Insights and tools built for the people driving decisions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                        {/* Wide banner card */}
                        <Card variant="soft" className="col-span-full overflow-hidden pl-6 pt-6">
                            <Layout className="text-primary size-5" />
                            <h3 className="text-foreground mt-5 text-lg font-semibold">Complete Leadership Dashboard</h3>
                            <p className="text-muted-foreground mt-3 max-w-xl text-balance">
                                A single pane of glass for executives — track OKRs, team velocity, budget health, and delivery risk in real time.
                            </p>
                            <div
                                className="-ml-2 -mt-2 mr-0.5 pl-2 pt-2"
                                style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
                                <div className="bg-background rounded-tl-lg relative mx-auto mt-8 h-96 overflow-hidden border shadow ring-1 ring-border">
                                    <Image
                                        src="/images/hero-image.png"
                                        alt="Leadership dashboard"
                                        width={2880}
                                        height={1842}
                                        className="object-cover object-top h-full w-full"
                                    />
                                </div>
                            </div>
                        </Card>

                        {/* Card 1 */}
                        <Card variant="soft" className="overflow-hidden p-6">
                            <Target className="text-primary size-5" />
                            <h3 className="text-foreground mt-5 text-lg font-semibold">Real-time Visibility</h3>
                            <p className="text-muted-foreground mt-3 text-balance">
                                Get a clear view of team performance, project health, and delivery timelines — all in one place.
                            </p>
                            <MeetingIllustration />
                        </Card>

                        {/* Card 2 */}
                        <Card variant="soft" className="group overflow-hidden px-6 pt-6">
                            <TrendingUp className="text-primary size-5" />
                            <h3 className="text-foreground mt-5 text-lg font-semibold">Strategic Alignment</h3>
                            <p className="text-muted-foreground mt-3 text-balance">
                                Ensure every team's work maps directly to company goals with live progress tracking.
                            </p>
                            <CodeReviewIllustration />
                        </Card>

                        {/* Card 3 */}
                        <Card variant="soft" className="group overflow-hidden px-6 pt-6">
                            <Sparkles className="text-primary size-5" />
                            <h3 className="text-foreground mt-5 text-lg font-semibold">AI-Powered Insights</h3>
                            <p className="text-muted-foreground mt-3 text-balance">
                                Surface risks, blockers, and opportunities before they escalate — automatically.
                            </p>
                            <div
                                className="-mx-2 -mt-2 px-2 pt-2"
                                style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}>
                                <AIAssistantIllustration />
                            </div>
                        </Card>

                    </div>
                </div>
            </div>
        </section>
    )
}

const MeetingIllustration = () => (
    <Card aria-hidden className="mt-9 aspect-video p-4">
        <div className="mb-0.5 text-sm font-semibold">Leadership Sync</div>
        <div className="mb-4 flex gap-2 text-sm">
            <span className="text-muted-foreground">2:30 – 3:45 PM</span>
        </div>
        <div className="mb-2 flex -space-x-1.5">
            <div className="flex -space-x-1.5">
                {[
                    { src: MESCHAC_AVATAR, alt: 'Méschac Irung' },
                    { src: BERNARD_AVATAR, alt: 'Bernard Ngandu' },
                    { src: THEO_AVATAR, alt: 'Théo Balick' },
                    { src: GLODIE_AVATAR, alt: 'Glodie Lukose' },
                ].map((avatar, index) => (
                    <div key={index} className="bg-background size-7 rounded-full border p-0.5 shadow shadow-black/5">
                        <img className="aspect-square rounded-full object-cover" src={avatar.src} alt={avatar.alt} height="460" width="460" />
                    </div>
                ))}
            </div>
        </div>
        <div className="text-muted-foreground text-sm font-medium">Q2 OKR Review</div>
    </Card>
)

const CodeReviewIllustration = () => (
    <div aria-hidden className="relative mt-6">
        <Card className="aspect-video w-4/5 translate-y-4 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3">
            <div className="mb-3 flex items-center gap-2">
                <div className="bg-background size-6 rounded-full border p-0.5 shadow shadow-black/5">
                    <img className="aspect-square rounded-full object-cover" src={MESCHAC_AVATAR} alt="M Irung" height="460" width="460" />
                </div>
                <span className="text-muted-foreground text-sm font-medium">Méschac Irung</span>
                <span className="text-muted-foreground/75 text-xs">2m</span>
            </div>
            <div className="ml-8 space-y-2">
                <div className="bg-foreground/10 h-2 rounded-full" />
                <div className="bg-foreground/10 h-2 w-3/5 rounded-full" />
                <div className="bg-foreground/10 h-2 w-1/2 rounded-full" />
            </div>
            <Signature className="ml-8 mt-3 size-5" />
        </Card>
        <Card className="aspect-3/5 absolute -top-4 right-0 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
            <div className="bg-foreground/5 m-auto flex size-10 rounded-full">
                <Play className="fill-foreground/50 stroke-foreground/50 m-auto size-4" />
            </div>
        </Card>
    </div>
)

const AIAssistantIllustration = () => (
    <Card aria-hidden className="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0">
        <div className="w-fit">
            <Sparkles className="size-3.5 fill-purple-300 stroke-purple-300" />
            <p className="mt-2 line-clamp-2 text-sm">
                What are the top risks to our Q3 delivery based on current team velocity?
            </p>
        </div>
        <div className="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
            <div className="text-muted-foreground text-sm">Ask AI Assistant</div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="size-7 rounded-2xl bg-transparent shadow-none">
                        <Plus />
                    </Button>
                    <Button variant="outline" size="icon" className="size-7 rounded-2xl bg-transparent shadow-none">
                        <Globe />
                    </Button>
                </div>
                <Button size="icon" className="size-7 rounded-2xl shadow-none bg-foreground text-background hover:opacity-80">
                    <ArrowUp strokeWidth={3} />
                </Button>
            </div>
        </div>
    </Card>
)
