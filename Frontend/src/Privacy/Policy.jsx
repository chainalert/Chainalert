import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Policy() {
  return (
    <>
      <Header />
      <section
        className="bg-black text-white font-inter w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-10"
        id="Policy"
      >
        {/* Intro */}
        <div className="mt-8 mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-satoshi-bold text-center mb-20">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-justify">
            ChainAlert ("we," "us," or "our") operates an accountability layer
            for blockchain infrastructure that helps teams trace malicious
            funds, link abuse patterns, and proactively mitigate threats. We are
            committed to protecting your privacy and being transparent about how
            we collect, use, and protect your information. This Privacy Policy
            explains what information we collect, how we use it, your rights
            regarding your information, and how we protect your data when you
            use our platform, services, and website (collectively, the
            "Services").
          </p>
        </div>

        {/* Info Collected */}
        <div className="w-full">
          <ol className="list-none space-y-12">
            {/* Information We Collect */}
            <li>
              <h2 className="text-xl sm:text-2xl font-satoshi-bold mb-4">
                Information We Collect
              </h2>
              <ol className="list-decimal pl-5 sm:pl-12 space-y-8">
                {/* Direct Info */}
                <li>
                  <h3 className="text-lg sm:text-xl font-satoshi-bold mb-3">
                    Information You Provide Directly
                  </h3>
                  <ol className="list-[lower-roman] sm:pl-5 space-y-6">
                    {/* Abuse Reports */}
                    <li>
                      <h4 className="text-base sm:text-lg font-satoshi-bold mb-2">
                        Abuse Reports and Submissions:
                      </h4>
                      <ul className="list-disc sm:pl-5 space-y-1">
                        <li>Timestamps and submission metadata</li>
                        <li>
                          Description and categorization of reported incidents
                        </li>
                        <li>
                          Blockchain addresses, transaction hashes, and related
                          identifiers
                        </li>
                        <li>
                          Type of abuse or threat (e.g., scam, phishing, money
                          laundering, fraud)
                        </li>
                        <li>
                          Supporting evidence such as links, screenshots,
                          documents, or other materials
                        </li>
                        <li>
                          Optional contact information (email address or
                          username) for follow-up communications
                        </li>
                      </ul>
                    </li>
                    {/* Account Info */}
                    <li>
                      <h4 className="text-base sm:text-lg font-satoshi-bold mb-2">
                        Account Information (if applicable):
                      </h4>
                      <ul className="list-disc sm:pl-5 space-y-1">
                        <li>Username and email address for registered users</li>
                        <li>Profile information and preferences</li>
                        <li>API access credentials and usage data</li>
                      </ul>
                    </li>
                    {/* Communications */}
                    <li>
                      <h4 className="text-base sm:text-lg font-satoshi-bold mb-2">
                        Communications:
                      </h4>
                      <ul className="list-disc sm:pl-5 space-y-1">
                        <li>
                          Messages sent through contact forms, support tickets,
                          or direct communications
                        </li>
                        <li>Feedback, suggestions, and survey responses</li>
                      </ul>
                    </li>
                  </ol>
                </li>
                {/* Automatic Info */}
                <li>
                  <h3 className="text-lg sm:text-xl font-satoshi-bold mb-3">
                    Information We Collect Automatically
                  </h3>
                  <ol className="list-[lower-roman] sm:pl-5 space-y-6">
                    <li>
                      <h4 className="text-base sm:text-lg font-satoshi-bold mb-2">
                        Technical and Usage Data:
                      </h4>
                      <ul className="list-disc sm:pl-5 space-y-1">
                        <li>IP addresses and general location information</li>
                        <li>
                          Browser type, operating system, and device information
                        </li>
                        <li>
                          Pages visited, time spent, and navigation patterns
                        </li>
                        <li>Referral sources and search terms</li>
                        <li>API usage logs and performance metrics</li>
                      </ul>
                    </li>
                    <li>
                      <h4 className="text-base sm:text-lg font-satoshi-bold mb-2">
                        Blockchain Analysis Data:
                      </h4>
                      <ul className="list-disc sm:pl-5 space-y-1">
                        <li>Public blockchain transaction data and patterns</li>
                        <li>Address clustering and behavioral analysis</li>
                        <li>Risk scores and threat intelligence indicators</li>
                        <li>Network topology and flow analysis</li>
                      </ul>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            {/* How We Use Your Information             */}
            <li>
              <h2 className="text-xl sm:text-2xl font-satoshi-bold mb-4">
                How We Use Your Information
              </h2>
              <ol className="list-decimal pl-5 sm:pl-12 space-y-8">
                {/* Core Service Operations                 */}
                <li>
                  <h3 className="text-lg sm:text-xl font-satoshi-bold mb-3">
                    Core Service Operations
                  </h3>
                  <ul className="list-disc sm:pl-5 space-y-1">
                    <li>
                      Processing and analyzing abuse reports and threat
                      intelligence
                    </li>
                    <li>
                      Maintaining databases of malicious addresses and
                      suspicious patterns
                    </li>
                    <li>
                      Providing risk assessment and compliance tools to
                      infrastructure teams
                    </li>
                    <li>
                      Generating alerts and notifications about potential
                      threats
                    </li>
                  </ul>
                </li>
                {/* Platform Improvement                 */}
                <li>
                  <h3 className="text-lg sm:text-xl font-satoshi-bold mb-3">
                    Platform Improvement
                  </h3>
                  <ul className="list-disc sm:pl-5 space-y-1">
                    <li>
                      Analyzing usage patterns to improve our services and user
                      experience
                    </li>
                    <li>
                      Developing new features and enhancing existing
                      functionality
                    </li>
                    <li>
                      Conducting research on blockchain security and abuse
                      patterns
                    </li>
                    <li>
                      Training machine learning models for threat detection
                    </li>
                  </ul>
                </li>
                {/* Communication and Support                 */}
                <li>
                  <h3 className="text-lg sm:text-xl font-satoshi-bold mb-3">
                    Communication and Support
                  </h3>
                  <ul className="list-disc sm:pl-5 space-y-1">
                    <li>
                      Responding to inquiries, support requests, and feedback
                    </li>
                    <li>
                      Sending important service updates and security
                      notifications
                    </li>
                    <li>Providing customer support and technical assistance</li>
                  </ul>
                </li>
                {/* Legal and Security                 */}
                <li>
                  <h3 className="text-lg sm:text-xl font-satoshi-bold mb-3">
                    Legal and Security
                  </h3>
                  <ul className="list-disc sm:pl-5 space-y-1">
                    <li>
                      Complying with legal obligations and regulatory
                      requirements
                    </li>
                    <li>
                      Protecting against fraud, abuse, and security threats
                    </li>
                    <li>Enforcing our terms of service and policies</li>
                    <li>
                      Cooperating with law enforcement when legally required
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            {/* Legal Basis for Processing (GDPR) */}
            <li className="mb-6">
              <h2 className="text-xl sm:text-2xl font-satoshi-bold mb-4">
                Legal Basis for Processing (GDPR)
              </h2>
              <p className="mb-3">
                For users in the European Economic Area, our legal basis for
                processing includes:
              </p>
              <ul className="list-disc pl-5 sm:pl-12 space-y-3">
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold">
                    Legitimate interests:
                  </strong>
                  Processing and analyzing abuse reports and threat
                  intelligence.
                </li>
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold">
                    Public interest:
                  </strong>
                  Contributing to blockchain security and combating financial
                  crime.
                </li>
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold">Consent:</strong> When
                  you voluntarily submit reports or provide optional
                  information.
                </li>
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold">
                    Legal obligation:
                  </strong>
                  Complying with applicable laws and regulations.
                </li>
              </ul>
            </li>
            {/* Data Sharing and Disclosure             */}
            <li>
              <h2 className="text-xl sm:text-2xl font-satoshi-bold mb-4">
                Data Sharing and Disclosure
              </h2>
              <ol className="list-decimal pl-5 sm:pl-12 space-y-5">
                {/*                     Service Providers and Partners                 */}
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold pr-1.5">
                    Service Providers and Partners
                  </strong>
                  We may share information with trusted third-party service
                  providers who assist us in operating our platform, including:
                  <br />
                  <br />
                  <ul className="list-disc sm:pl-5 space-y-2">
                    <li>Cloud infrastructure and hosting providers</li>
                    <li>Analytics and monitoring services</li>
                    <li>Security and fraud prevention services</li>
                    <li>Communication and customer support tools</li>
                  </ul>
                </li>
                {/* Law Enforcement and Legal Requirements */}
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold pr-1.5">
                    Law Enforcement and Legal Requirements
                  </strong>
                  We may disclose information when required by law or in
                  response to:
                  <br />
                  <br />
                  <ul className="list-disc sm:pl-5 space-y-2">
                    <li>
                      Valid legal process (subpoenas, court orders, warrants)
                    </li>
                    <li>Requests from law enforcement agencies</li>
                    <li>National security requirements</li>
                    <li>Regulatory investigations</li>
                  </ul>
                </li>
                {/* Research and Public Safety */}
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold pr-1.5">
                    Research and Public Safety
                  </strong>
                  We may share anonymized, aggregated data for:
                  <br />
                  <br />
                  <ul className="list-disc sm:pl-5 space-y-2">
                    <li>Academic research on blockchain security</li>
                    <li>Industry threat intelligence sharing</li>
                    <li>
                      Public safety and financial crime prevention initiatives
                    </li>
                    <li>Regulatory reporting and compliance</li>
                  </ul>
                </li>
                {/* Business Transfers */}
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold pr-1.5">
                    Business Transfers
                  </strong>
                  In the event of a merger, acquisition, or sale of assets, user
                  information may be transferred as part of the transaction,
                  subject to appropriate privacy protections.
                  <br />
                  <br />
                  <strong className="font-satoshi-bold pr-1.5">
                    We do not sell, rent, or share your personal data with third
                    parties for marketing purposes.
                  </strong>
                </li>
              </ol>
            </li>
            {/* Data Retention             */}
            <li className="mb-6">
              <h2 className="text-xl sm:text-2xl font-satoshi-bold mb-4">
                Data Retention
              </h2>
              <p className="mb-3">
                We retain information for as long as necessary to provide our
                services and fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc pl-5 sm:pl-12 space-y-3">
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold">Abuse reports:</strong>
                  Retained indefinitely to maintain historical threat
                  intelligence
                </li>
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold">
                    Account information:
                  </strong>
                  Retained while your account is active plus 3 years after
                  closure
                </li>
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold">Usage data:</strong>{" "}
                  Typically retained for 2 years for analytics and improvement
                  purposes
                </li>
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold">Communications:</strong>
                  Retained for 7 years for support and legal purposes
                </li>
              </ul>
            </li>
            {/* Data Security             */}
            <li className="mb-6">
              <h2 className="text-xl sm:text-2xl font-satoshi-bold mb-4">
                Data Security
              </h2>
              <p className="mb-3">
                We implement industry-standard security measures to protect your
                information, including:
              </p>
              <ul className="list-disc pl-5 sm:pl-12 space-y-3 mb-5">
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold">Encryption:</strong>
                  Data encrypted in transit and at rest using strong encryption
                  protocols
                </li>
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold">
                    Access controls:
                  </strong>
                  Multi-factor authentication and role-based access restrictions
                </li>
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold">Regular audits:</strong>
                  Periodic security assessments and vulnerability testing
                </li>
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold">Staff training:</strong>
                  Regular security awareness training for all personnel
                </li>
                <li className="text-base sm:text-lg leading-relaxed">
                  <strong className="font-satoshi-bold">Monitoring:</strong>
                  Continuous security monitoring and threat detection
                </li>
              </ul>
              While we strive to protect your information, no method of
              transmission or storage is 100% secure. We cannot guarantee
              absolute security.
            </li>
            {/* Your Rights and Choices             */}
            <li>
              <h2 className="text-xl sm:text-2xl font-satoshi-bold mb-4">
                Your Rights and Choices
              </h2>
              Depending on your location, you may have the following rights
              regarding your personal data:
              <ol className="list-decimal pl-5 sm:pl-12 space-y-8 mt-5 mb-5">
                {/* Access and Portability                 */}
                <li>
                  <h3 className="text-lg sm:text-xl font-satoshi-bold mb-3">
                    Access and Portability
                  </h3>
                  <ul className="list-disc sm:pl-5 space-y-1">
                    <li>Request access to personal data we hold about you</li>
                    <li>Request a copy of your data in a portable format</li>
                  </ul>
                </li>
                {/* Correction and Updates */}
                <li>
                  <h3 className="text-lg sm:text-xl font-satoshi-bold mb-3">
                    Correction and Updates
                  </h3>
                  <ul className="list-disc sm:pl-5 space-y-1">
                    <li>Request correction of inaccurate or incomplete data</li>
                    <li>Update your account information and preferences</li>
                  </ul>
                </li>
                {/* Deletion and Restriction*/}
                <li>
                  <h3 className="text-lg sm:text-xl font-satoshi-bold mb-3">
                    Deletion and Restriction
                  </h3>
                  <ul className="list-disc sm:pl-5 space-y-1">
                    <li>
                      Request deletion of your personal data (subject to legal
                      and business requirements)
                    </li>
                    <li>
                      Request restriction of processing in certain circumstances
                    </li>
                  </ul>
                </li>
                {/* Objection and Withdrawal                 */}
                <li>
                  <h3 className="text-lg sm:text-xl font-satoshi-bold mb-3">
                    Objection and Withdrawal
                  </h3>
                  <ul className="list-disc sm:pl-5 space-y-1">
                    <li>Object to processing based on legitimate interests</li>
                    <li>
                      Withdraw consent where processing is based on consent
                    </li>
                    <li>Opt out of non-essential communications</li>
                  </ul>
                </li>
              </ol>
              To exercise these rights, contact us at [privacy@chainalert.com].
            </li>
            {/* International Data Transfers             */}
            <li className="mb-6">
              <h2 className="text-xl sm:text-2xl font-satoshi-bold mb-4">
                International Data Transfers
              </h2>
              <p className="mb-3">
                ChainAlert operates globally and may transfer your information
                to countries outside your jurisdiction. When we transfer data
                internationally, we ensure appropriate safeguards are in place,
                including:
              </p>
              <ul className="list-disc pl-5 sm:pl-12 space-y-3">
                <li className="text-base sm:text-lg leading-relaxed">
                  Standard contractual clauses approved by relevant authorities
                </li>
                <li className="text-base sm:text-lg leading-relaxed">
                  Adequacy decisions by competent authorities
                </li>
                <li className="text-base sm:text-lg leading-relaxed">
                  Other lawful transfer mechanisms as available
                </li>
              </ul>
            </li>
            {/* Children's Privacy             */}
            <li className="mb-6">
              <h2 className="text-xl sm:text-2xl font-satoshi-bold mb-4">
                Children's Privacy
              </h2>
              <p className="mb-3">
                Our services are not intended for individuals under 16 years of
                age (or the applicable age of consent in your jurisdiction). We
                do not knowingly collect personal information from children. If
                we become aware that we have collected information from a child,
                we will take steps to delete it promptly.
              </p>
            </li>
            {/* Updates to This Privacy Policy             */}
            <li className="mb-6">
              <h2 className="text-xl sm:text-2xl font-satoshi-bold mb-4">
                Updates to This Privacy Policy
              </h2>
              <p className="mb-3">
                We may update this Privacy Policy periodically to reflect
                changes in our practices, services, or applicable law. We will:
              </p>
              <ul className="list-disc pl-5 sm:pl-12 space-y-3">
                <li className="text-base sm:text-lg leading-relaxed">
                  Post updated versions on our website with a new effective date
                </li>
                <li className="text-base sm:text-lg leading-relaxed">
                  Notify users of material changes via email or prominent
                  website notice
                </li>
                <li className="text-base sm:text-lg leading-relaxed">
                  Provide opportunity to review changes before they take effect
                </li>
              </ul>
            </li>
            {/* Contact Information             */}
            <li className="mb-6">
              <h2 className="text-xl sm:text-2xl font-satoshi-bold mb-4">
                Contact Information
              </h2>
              <p className="mb-3">
                For all inquiries regarding this Privacy Policy or our data
                practices, please visit our [Contact Us page] or reach out
                through the contact methods listed there.
              </p>
            </li>
          </ol>
        </div>

        <p className="text-base sm:text-lg font-bold mt-10 pl-5">
          By using ChainAlert, you acknowledge that you understand our permanent
          data retention policy and business model, and you consent to our
          collection and use of information as described in this policy.
        </p>
        <p className="text-sm sm:text-base font-inter mt-4 mb-6 pl-5">
          This Privacy Policy was last updated on 15-08-2025.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Policy;
