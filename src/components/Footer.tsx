import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-300">appstatis</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            className="text-sm font-medium text-gray-400 hover:text-gray-200"
            href="terms-of-service"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm font-medium text-gray-400 hover:text-gray-200"
            href="privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-sm font-medium text-gray-400 hover:text-gray-200"
            href="https://github.com/appstatis/appstatis"
            target="_blank"
          >
            Github
          </Link>
        </nav>
        <div className="text-center sm:text-right">
          <p className="text-sm text-gray-400">
            © 2024 appstatis. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            This app is open source and licensed under the{" "}
            <Link
              className="underline hover:no-underline"
              href="https://www.apache.org/licenses/LICENSE-2.0.txt"
              target="_blank"
            >
              Apache License 2.0
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
