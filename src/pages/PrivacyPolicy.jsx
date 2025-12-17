function PrivacyPolicy() {
  return (
    <section className="bg-zinc-950 text-white min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">
            Privacy <span className="text-cyan-400">Policy</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            At Vishbino Beverages Pvt. Ltd. (KLUE Drinks), we respect your privacy
            and are committed to protecting your personal information.
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-10 text-gray-400 leading-relaxed">

          {/* INTRO */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              1. Introduction
            </h3>
            <p>
              This Privacy Policy outlines how Vishbino Beverages Pvt. Ltd.
              collects, uses, and safeguards your information when you visit our
              website or interact with our services.
            </p>
          </div>

          {/* INFO COLLECTED */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              2. Information We Collect
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Name, email address, phone number</li>
              <li>Information submitted via contact or career forms</li>
              <li>Basic usage data such as browser type and device information</li>
            </ul>
          </div>

          {/* USAGE */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              3. How We Use Your Information
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>To respond to enquiries and applications</li>
              <li>To improve our products, services, and website experience</li>
              <li>For internal business and communication purposes</li>
            </ul>
          </div>

          {/* SECURITY */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              4. Data Protection & Security
            </h3>
            <p>
              We implement appropriate security measures to protect your personal
              data against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the internet
              is 100% secure.
            </p>
          </div>

          {/* THIRD PARTY */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              5. Third-Party Services
            </h3>
            <p>
              We may use trusted third-party services for analytics, communication,
              or payment processing. These providers are obligated to maintain
              the confidentiality of your information.
            </p>
          </div>

          {/* USER RIGHTS */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              6. Your Rights
            </h3>
            <p>
              You have the right to access, update, or request deletion of your
              personal information by contacting us directly.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              7. Contact Information
            </h3>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>

            <p className="mt-3 text-white">
              📧 ruthwikraj24@gmail.com <br />
              📞 +91 8252410616 <br />
              🏢 Vishbino Beverages Pvt. Ltd., India
            </p>
          </div>

        </div>

        {/* FOOT NOTE */}
        <div className="mt-16 text-sm text-gray-500 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
