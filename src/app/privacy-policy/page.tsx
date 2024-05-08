import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/privacyAndTerms/Header";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto my-10">
      <Link href="/" className={`mb-3 ${buttonVariants({ variant: "ghost" })}`}>
        Back
      </Link>

      <article className="space-y-3">
        <header>
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
          <p>
            Your privacy is important to us. It is Appstatis&apos;s policy to
            respect your privacy regarding any information we may collect from
            you across our website, and other sites we own and operate.
          </p>
        </header>

        <section>
          <Header>Information We Collect</Header>
          <p>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we&apos;re
            collecting it and how it will be used.
          </p>
        </section>

        <section>
          <Header>Use of Information</Header>
          <p>
            The information we collect is used to enhance the services we offer,
            to personalize your user experience, and to prefill your Appstatis
            account details where applicable.
          </p>
        </section>

        <section>
          <Header>Retention of Information</Header>
          <p>
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store,
            we&apos;ll protect within commercially acceptable means to prevent
            loss and theft, as well as unauthorized access, disclosure, copying,
            use, or modification.
          </p>
        </section>

        <section>
          <Header>Sharing of Information</Header>
          <p>
            We don&apos;t share any personally identifying information publicly
            or with third-parties, except when required to by law.
          </p>
        </section>

        <section>
          <Header>Data Protection</Header>
          <p>
            Appstatis acts in the capacity of both a data controller and a data
            processor with regard to the personal data processed through our
            services in terms of the applicable data protection laws, including
            the EU General Data Protection Regulation (GDPR).
          </p>
        </section>

        <section>
          <Header>External Sites</Header>
          <p>
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            practices of these sites and cannot accept responsibility or
            liability for their respective privacy policies.
          </p>
        </section>

        <section>
          <Header>Your Rights</Header>
          <p>
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
          </p>
        </section>

        <section>
          <Header>Acceptance of This Policy</Header>
          <p>
            Your continued use of our website will be regarded as acceptance of
            our practices around privacy and personal information. If you have
            any questions about how we handle user data and personal
            information, feel free to contact us.
          </p>
        </section>

        <time dateTime="2023-03-08">Last updated: 8 March 2023.</time>
      </article>
    </main>
  );
}
