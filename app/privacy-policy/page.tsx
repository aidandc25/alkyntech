'use client'

import { motion } from 'framer-motion'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-muted-foreground">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 md:p-12 space-y-8 text-muted-foreground"
            >
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="leading-relaxed">
                  AlkynTech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
                  <a href="https://alkyntech.com" className="text-primary hover:underline">alkyntech.com</a>{' '}
                  and use our services.
                </p>
                <p className="leading-relaxed mt-4">
                  By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Personal Information</h3>
                <p className="leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Fill out contact forms or request quotes</li>
                  <li>Subscribe to our newsletter or communications</li>
                  <li>Create an account or engage our services</li>
                  <li>Communicate with us via email, phone, or chat</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  This information may include:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and website URL</li>
                  <li>Project details and requirements</li>
                  <li>Payment and billing information</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Automatically Collected Information</h3>
                <p className="leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device and usage patterns, including:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information (type, operating system)</li>
                  <li>Pages visited, time spent on pages, and navigation paths</li>
                  <li>Referring website addresses</li>
                  <li>Date and time of visits</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="leading-relaxed">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li><strong className="text-foreground">Provide Services:</strong> To deliver the web development and automation services you request</li>
                  <li><strong className="text-foreground">Communication:</strong> To respond to your inquiries, send project updates, and provide customer support</li>
                  <li><strong className="text-foreground">Improve Our Services:</strong> To understand how users interact with our website and optimize user experience</li>
                  <li><strong className="text-foreground">Marketing:</strong> To send promotional materials, newsletters, and updates (with your consent)</li>
                  <li><strong className="text-foreground">Analytics:</strong> To analyze website traffic, user behavior, and performance metrics</li>
                  <li><strong className="text-foreground">Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
                  <li><strong className="text-foreground">Security:</strong> To protect against fraudulent, unauthorized, or illegal activity</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
                <p className="leading-relaxed">
                  We use the following third-party services that may collect information:
                </p>

                <div className="space-y-4 mt-4">
                  <div className="p-4 rounded-xl glass-subtle">
                    <h4 className="font-semibold text-foreground mb-2">Web3Forms</h4>
                    <p className="text-sm">
                      Our contact forms are processed through Web3Forms. Form submissions are securely transmitted and stored.
                      View their privacy policy at{' '}
                      <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        web3forms.com/privacy
                      </a>
                    </p>
                  </div>

                  <div className="p-4 rounded-xl glass-subtle">
                    <h4 className="font-semibold text-foreground mb-2">Google Analytics</h4>
                    <p className="text-sm">
                      We use Google Analytics to understand how visitors use our site. Google Analytics collects information anonymously and reports website trends.
                      View Google's privacy policy at{' '}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        policies.google.com/privacy
                      </a>
                    </p>
                  </div>

                  <div className="p-4 rounded-xl glass-subtle">
                    <h4 className="font-semibold text-foreground mb-2">Hosting & Infrastructure</h4>
                    <p className="text-sm">
                      Our website is hosted on secure infrastructure providers. These services may process technical data required for website delivery and performance.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files stored on your device.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Types of Cookies We Use:</h3>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li><strong className="text-foreground">Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong className="text-foreground">Preference Cookies:</strong> Remember your settings (e.g., dark/light theme)</li>
                </ul>

                <p className="leading-relaxed mt-4">
                  You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, some parts of our website may not function properly without cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Encryption of data in transit using SSL/TLS</li>
                  <li>Secure hosting infrastructure with regular security updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Regular security assessments and monitoring</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
                <p className="leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
                <p className="leading-relaxed mt-4">
                  Typical retention periods:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li><strong className="text-foreground">Contact Form Submissions:</strong> Up to 2 years or until inquiry resolution</li>
                  <li><strong className="text-foreground">Client Project Data:</strong> Duration of project plus 3 years for legal/warranty purposes</li>
                  <li><strong className="text-foreground">Analytics Data:</strong> 26 months (Google Analytics default)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="leading-relaxed">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li><strong className="text-foreground">Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong className="text-foreground">Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong className="text-foreground">Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong className="text-foreground">Object:</strong> Object to processing of your personal information in certain circumstances</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at{' '}
                  <a href="mailto:info@alkyntech.com" className="text-primary hover:underline">
                    info@alkyntech.com
                  </a>
                  . We will respond to your request within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">International Data Transfers</h2>
                <p className="leading-relaxed">
                  Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our services, you consent to the transfer of your information to the United States and other countries.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">California Privacy Rights (CCPA)</h2>
                <p className="leading-relaxed">
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Right to know what personal information is collected, used, shared, or sold</li>
                  <li>Right to delete personal information held by us</li>
                  <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
                  <li>Right to non-discrimination for exercising your CCPA rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">GDPR Compliance (EU Users)</h2>
                <p className="leading-relaxed">
                  If you are located in the European Economic Area (EEA), we process your personal information based on the following legal grounds:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li><strong className="text-foreground">Consent:</strong> You have given clear consent for processing</li>
                  <li><strong className="text-foreground">Contract:</strong> Processing is necessary to fulfill our contract with you</li>
                  <li><strong className="text-foreground">Legal Obligation:</strong> Processing is required by law</li>
                  <li><strong className="text-foreground">Legitimate Interest:</strong> Processing is in our legitimate business interests and does not override your rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                <p className="leading-relaxed mt-4">
                  We encourage you to review this Privacy Policy periodically. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 p-6 rounded-xl glass-subtle">
                  <p className="font-semibold text-foreground mb-2">AlkynTech</p>
                  <p>Email: <a href="mailto:info@alkyntech.com" className="text-primary hover:underline">info@alkyntech.com</a></p>
                  <p className="mt-2 text-sm">Response time: Within 24-48 hours</p>
                </div>
              </section>

              <section className="border-t border-border/50 pt-8">
                <p className="text-sm italic">
                  This Privacy Policy is effective as of {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} and applies to all information collected by AlkynTech through our website and services.
                </p>
              </section>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
