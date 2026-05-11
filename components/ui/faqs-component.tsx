'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

const faqItems = [
    {
        id: 'item-1',
        question: 'What is Layer and how does it work?',
        answer: 'Layer is an AI co-pilot platform for customer-facing ICs. Each rep gets a paired AI agent trained on your business context — your playbooks, CRM data, and call history. The agent helps with pre-call prep, provides live suggestions during calls, and automates post-call follow-up.',
    },
    {
        id: 'item-2',
        question: 'Which CRM and GTM tools does Layer integrate with?',
        answer: 'Layer connects natively with Salesforce and HubSpot. We also support integrations with Gong, Chorus, Outreach, Salesloft, and Zoom. Enterprise plans include custom integration support for any tool in your stack.',
    },
    {
        id: 'item-3',
        question: 'How is my data kept secure?',
        answer: 'All data is encrypted in transit and at rest. Layer is SOC 2 Type II compliant and your business data is never used to train models for other customers. Each AI agent is isolated to your organization.',
    },
    {
        id: 'item-4',
        question: 'Can I switch plans or cancel at any time?',
        answer: 'Yes. You can upgrade or downgrade your plan at any time from your account settings. If you cancel, you keep access until the end of your current billing period. No long-term contracts required on Starter or Growth.',
    },
    {
        id: 'item-5',
        question: 'How long does onboarding take?',
        answer: 'Most teams are live within a day. You connect your CRM, upload your playbooks, and Layer trains your agents automatically. Your reps can start using pre-call prep and post-call automation on day one.',
    },
]

export default function FAQs() {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-foreground text-4xl font-medium">FAQs</h2>
                        <p className="text-text-secondary mt-4 text-lg">Your questions answered</p>
                        <p className="text-text-secondary mt-6 hidden md:block text-sm">
                            Still have questions?{' '}
                            <Link href="#" className="text-primary font-medium hover:underline">
                                Talk to our team
                            </Link>
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <Accordion type="single" collapsible>
                            {faqItems.map((item) => (
                                <AccordionItem key={item.id} value={item.id}>
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline font-medium">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base text-text-secondary">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <p className="text-text-secondary mt-6 md:hidden text-sm">
                        Still have questions?{' '}
                        <Link href="#" className="text-primary font-medium hover:underline">
                            Talk to our team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
