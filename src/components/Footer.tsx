import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import Link from "next/link";
import { FooterLinks } from "./footer-links";

/**
 * The footer component.
 *
 * It is needed to provide links to the terms of service, privacy policy, and the app's Github repository, and to display the app's name and license.
 * It uses simple semantic HTML elements to structure the content as well as the Link component from Next.js to navigate to the links.
 *
 * @returns A footer component with links to the terms of service, privacy policy, and the app's Github repository
 */
export const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-300">appstatis</span>
        </div>
        <FooterLinks />
        <div className="text-center sm:text-right">
          <p className="text-sm text-gray-400">
            {t("footer.copyright.message")}
          </p>
          <p className="text-sm text-gray-400">
            <Trans
              i18nKey="common:footer.copyright.license"
              components={{
                licenseLink: (
                  <Link
                    className="underline hover:no-underline"
                    href="https://www.apache.org/licenses/LICENSE-2.0.txt"
                    target="_blank"
                  />
                ),
              }}
            />
          </p>
        </div>
      </div>
    </footer>
  );
};
