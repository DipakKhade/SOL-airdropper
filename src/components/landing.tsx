import Link from "next/link"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import solimg from '../../public/sol-landing.jpg'
import sol2img from '../../public/sol2imag.jpg'
import Image from "next/image"
import MenuButtons from "./MenuButtons"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-12 lg:py-24 xl:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock the Power of Solana Airdrops
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our Solana airdropper helps you stay on top of the latest airdrops and claim your share of the
                    Solana ecosystem.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="text-normal md:text-4xl font-bold text-center ">Connect your <span className="text-blue-600">Solana</span> wallet and <span className="text-blue-600">Air drop</span>
        <p className="text-xl text-slate-600">Get Ready to Soar with Solana!</p>
        <MenuButtons/>
        </div>
                </div>
              </div>
              <Image
                src={solimg}
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                width="550"
                height="550"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Maximize Your Solana Airdrop Earnings
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our Solana airdropper provides a comprehensive solution to help you stay informed, eligible, and ready
                  to claim the latest airdrops.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src={sol2img}
                alt="Feature"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width="550"
                height="310"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Airdrop Alerts</h3>
                      <p className="text-muted-foreground">
                        Get notified about the latest Solana airdrops so you never miss an opportunity.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Eligibility Tracking</h3>
                      <p className="text-muted-foreground">
                        Easily track your eligibility for upcoming airdrops and ensure you meet all the requirements.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Claim Assistance</h3>
                      <p className="text-muted-foreground">
                        Our platform guides you through the airdrop claiming process, making it seamless and
                        hassle-free.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <div className="text-center">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              </div>
              <div className="grid gap-4 lg:pl-12">
                {/* @ts-ignore */}
                <Accordion>
                  <AccordionItem value="what-is-solana-airdropper">
                    <AccordionTrigger>What is Solana Airdropper?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Solana Airdropper is a platform that helps you stay informed and eligible for the latest Solana
                        airdrops. It provides a comprehensive solution to maximize your airdrop earnings by tracking
                        eligibility, sending alerts, and guiding you through the claiming process.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="how-does-it-work">
                    <AccordionTrigger>How does Solana Airdropper work?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Solana Airdropper works by continuously monitoring the Solana ecosystem for upcoming airdrops.
                        It analyzes the eligibility criteria for each airdrop and tracks your wallet activity to
                        determine if you qualify. When a new airdrop is detected, youll receive a notification with all
                        the details and instructions on how to claim it.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="is-it-free-to-use">
                    <AccordionTrigger>Is Solana Airdropper free to use?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Yes, Solana Airdropper is completely free to use. We believe in empowering the Solana community
                        and providing access to airdrop opportunities without any cost. Our platform is supported by
                        optional premium features and partnerships, allowing us to offer the core airdrop tracking and
                        claiming services at no charge.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="how-do-i-sign-up">
                    <AccordionTrigger>How do I sign up for Solana Airdropper?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Signing up for Solana Airdropper is quick and easy. All you need to do is visit our website and
                        click the Sign Up button. Youll be prompted to connect your Solana wallet, and well start
                        tracking your eligibility for upcoming airdrops right away. Its that simple!
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
