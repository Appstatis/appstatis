import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Header } from "@/components/privacyAndTerms/Header";

export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto my-10">
      <Link href="/" className={`mb-3 ${buttonVariants({ variant: "ghost" })}`}>
        Back
      </Link>

      <article className="space-y-3">
        <header>
          <h1 className="text-2xl font-bold">Terms of Service</h1>
          <p>
            Welcome to Appstatis! These terms and conditions outline the rules
            and regulations for the use of Appstatis&apos;s Website, located at
            www.appstatis.com.
          </p>
        </header>
        <section>
          <Header>Acceptance of Terms</Header>
          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Appstatis if you do not agree to
            take all of the terms and conditions stated on this page.
          </p>
        </section>
        <section>
          <Header>Payments</Header>
          <p>
            Appstatis offers services under both a one-time payment and a
            subscription-based model. Details about the scope of services, as
            well as any fees associated with these services, will be provided on
            our website or through a direct communication with you.
          </p>
        </section>
        <section>
          <Header>Subscription Terms</Header>
          <p>
            For subscription-based services, you will be billed in advance on a
            recurring and periodic basis. Your subscription will automatically
            renew under the exact same conditions unless you cancel it or
            Appstatis cancels it. A valid payment method, including credit card,
            is required to process the payment for your subscription.
          </p>
        </section>
        <section>
          <Header>Refunds</Header>
          <p>
            Refunds for services by Appstatis are only available under specific
            circumstances. A non-refundable deposit is required at the start of
            any project to cover initial resources and labor costs. Should you
            choose to discontinue the project part-way, a refund may be
            considered on a pro-rata basis, based on the completion status of
            the project. All requests for refunds must be made formally in
            writing within 7 days of the last submitted milestone. We reserve
            the right to first attempt to rectify any issues before issuing a
            refund.
          </p>
        </section>
        <section>
          <Header>Cancellation</Header>
          <p>
            You may cancel your subscription at any time. Please note that there
            will be no refunds for the fees already paid, except as may be
            required by applicable law.
          </p>
        </section>
        <section>
          <Header>Modifications to Service and Prices</Header>
          <p>
            Prices for our services are subject to change without notice. We
            reserve the right at any time to modify or discontinue the Service
            (or any part or content thereof) without notice at any time.
          </p>
        </section>
        <section>
          <Header>Governing Law</Header>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the Republic of Estonia, without regard to its conflict
            of law provisions. Our failure to enforce any right or provision of
            these Terms will not be considered a waiver of those rights. If any
            provision of these Terms is held to be invalid or unenforceable by a
            court, the remaining provisions of these Terms will remain in
            effect. These Terms constitute the entire agreement between us
            regarding our Service, and supersede and replace any prior
            agreements we might have had between us regarding the Service.
          </p>
        </section>
        <section>
          <Header>Changes to Terms</Header>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will provide
            at least 30 days&apos; notice prior to any new terms taking effect.
            What constitutes a material change will be determined at our sole
            discretion.
          </p>
        </section>
        <footer>
          <Header>Contact Us</Header>
          <p>If you have any questions about these Terms, please contact us.</p>
        </footer>

        <p>Last updated: 7 March 2023.</p>
      </article>
    </main>
  );
}
