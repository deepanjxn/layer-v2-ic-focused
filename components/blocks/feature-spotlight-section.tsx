import { AnimatedFeatureSpotlight } from '@/components/ui/feature-spotlight'
import { BarChart3 } from 'lucide-react'

export default function FeatureSpotlightSection() {
  return (
    <div className="py-16 md:py-24 border-b">
      <div className="container">
      <AnimatedFeatureSpotlight
        preheaderIcon={<BarChart3 className="size-4 text-primary" />}
        preheaderText="Real-time visibility"
        heading={
          <>
            Every metric your{' '}
            <span className="text-primary">leadership team</span>{' '}
            needs, in one place
          </>
        }
        description="Layer connects your teams, tools, and goals so executives always have a live view of what's moving and what's at risk — without chasing status updates."
        buttonText="See it in action"
        buttonProps={{ asChild: false }}
        imageUrl="/images/hero-image.png"
        imageAlt="Layer dashboard showing real-time leadership metrics"
      />
      </div>
    </div>
  )
}
