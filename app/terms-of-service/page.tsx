'use client'

import { motion } from 'framer-motion'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export default function TermsOfServicePage() {
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
                Terms of <span className="gradient-text">Service</span>
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
                <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and AlkynTech ("Company," "we," "us," or "our") concerning your access to and use of our website at{' '}
                  <a href="https://alkyntech.com" className="text-primary hover:underline">alkyntech.com</a>{' '}
                  and our related services (collectively, the "Services").
                </p>
                <p className="leading-relaxed mt-4">
                  By accessing or using the Services, you agree that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, you must not access or use the Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Services Overview</h2>
                <p className="leading-relaxed">
                  AlkynTech provides professional web development and automation services, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Custom website design and development</li>
                  <li>Web application development</li>
                  <li>Workflow automation and integration services</li>
                  <li>Technical consulting and support</li>
                  <li>Ongoing maintenance and updates</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  The specific scope, timeline, deliverables, and pricing for each project will be outlined in a separate Service Agreement or Statement of Work ("SOW").
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Client Responsibilities</h2>
                <p className="leading-relaxed">
                  To ensure successful project completion, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li><strong className="text-foreground">Provide Information:</strong> Supply accurate, complete, and timely information, materials, and feedback required for the project</li>
                  <li><strong className="text-foreground">Communication:</strong> Respond to inquiries and requests within reasonable timeframes</li>
                  <li><strong className="text-foreground">Access:</strong> Provide necessary access to systems, platforms, accounts, and resources needed to complete the work</li>
                  <li><strong className="text-foreground">Content:</strong> Ensure all content, images, text, and materials you provide are legally owned or licensed by you</li>
                  <li><strong className="text-foreground">Third-Party Services:</strong> Obtain and maintain any necessary third-party services, licenses, or accounts (hosting, domains, APIs, etc.)</li>
                  <li><strong className="text-foreground">Approvals:</strong> Review deliverables and provide approval or feedback within agreed timelines</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Pricing and Invoicing</h3>
                <p className="leading-relaxed">
                  Service fees, payment schedules, and payment methods will be specified in your SOW. Unless otherwise agreed in writing:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>A deposit or upfront payment may be required before work begins</li>
                  <li>Milestone payments may be required for larger projects</li>
                  <li>Final payment is due upon project completion or as specified in the SOW</li>
                  <li>All prices are in USD unless otherwise specified</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Late Payments</h3>
                <p className="leading-relaxed">
                  Invoices are due within the timeframe specified (typically 7-14 days). Late payments may result in:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Work suspension until payment is received</li>
                  <li>Late fees of 1.5% per month (or the maximum allowed by law) on overdue amounts</li>
                  <li>Withholding of deliverables, access, or source code until payment is complete</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Refunds</h3>
                <p className="leading-relaxed">
                  Due to the custom nature of our services:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Deposits and completed work are generally non-refundable</li>
                  <li>Refunds may be considered on a case-by-case basis at our sole discretion</li>
                  <li>If you cancel a project after work has begun, you are responsible for payment of work completed to date</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property Rights</h2>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Client-Provided Materials</h3>
                <p className="leading-relaxed">
                  You retain all rights to materials, content, branding, and intellectual property you provide to us. By providing these materials, you grant us a non-exclusive license to use them solely for the purpose of completing your project.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Work Product Ownership</h3>
                <p className="leading-relaxed">
                  Upon full payment of all fees:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>You will own the final deliverables created specifically for you (custom code, designs, etc.)</li>
                  <li>We retain ownership of our pre-existing code, frameworks, templates, tools, and methodologies</li>
                  <li>You receive a license to use such pre-existing materials as incorporated into your project</li>
                  <li>We may use generic, non-confidential knowledge and techniques developed during the project</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Portfolio Rights</h3>
                <p className="leading-relaxed">
                  We reserve the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Display completed work in our portfolio and marketing materials</li>
                  <li>Use your project as a case study (with your approval)</li>
                  <li>List you as a client (unless you request otherwise)</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  If you require confidentiality or non-disclosure, this must be specified in writing before work begins.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Third-Party Components</h3>
                <p className="leading-relaxed">
                  Projects may incorporate third-party libraries, frameworks, or services (open-source or licensed). You are responsible for compliance with their respective licenses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Project Timeline and Scope</h2>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Timelines</h3>
                <p className="leading-relaxed">
                  Project timelines are estimates based on the information available at project start. Timelines may be affected by:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Delays in receiving materials, feedback, or approvals from you</li>
                  <li>Scope changes or additional requests</li>
                  <li>Technical complications or third-party service issues</li>
                  <li>Force majeure events beyond our reasonable control</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Scope Changes</h3>
                <p className="leading-relaxed">
                  Any changes to the agreed scope (new features, design revisions, additional pages, etc.) may require:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Additional fees</li>
                  <li>Adjusted timelines</li>
                  <li>A revised SOW or change order</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  All scope changes must be agreed upon in writing before additional work proceeds.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Revisions</h3>
                <p className="leading-relaxed">
                  The number of included revision rounds will be specified in your SOW (typically 2-3 rounds). Additional revisions beyond the agreed amount may incur additional fees.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Warranties and Disclaimers</h2>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Our Warranties</h3>
                <p className="leading-relaxed">
                  We warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Services will be performed with reasonable skill and care</li>
                  <li>Work will substantially conform to the agreed specifications in the SOW</li>
                  <li>We will fix material defects in our work for a period specified in your SOW (typically 30-90 days post-launch)</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Disclaimers</h3>
                <p className="leading-relaxed">
                  EXCEPT AS EXPRESSLY PROVIDED ABOVE, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Warranties of merchantability or fitness for a particular purpose</li>
                  <li>Guaranteed results, traffic, rankings, or revenue</li>
                  <li>Uninterrupted or error-free operation of third-party services</li>
                  <li>Compatibility with all future software, browsers, or devices</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  We are not responsible for issues caused by:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Changes you or third parties make after project completion</li>
                  <li>Hosting, server, or infrastructure issues outside our control</li>
                  <li>Third-party service failures, API changes, or discontinuations</li>
                  <li>Content or materials you provide</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Our total liability for any claims arising from services shall not exceed the total amount you paid us for the specific project giving rise to the claim</li>
                  <li>We shall not be liable for indirect, incidental, special, consequential, or punitive damages</li>
                  <li>This includes but is not limited to: lost profits, lost revenue, lost data, business interruption, or loss of business opportunity</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Some jurisdictions do not allow limitation of certain damages, so some limitations may not apply to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Indemnification</h2>
                <p className="leading-relaxed">
                  You agree to indemnify, defend, and hold harmless AlkynTech and its employees, contractors, and affiliates from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Your use of the Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Content, materials, or information you provide</li>
                  <li>Infringement of any third-party intellectual property rights</li>
                  <li>Your use of the final deliverables in a manner not authorized by these Terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Confidentiality</h2>
                <p className="leading-relaxed">
                  Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the project. This obligation:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Applies to information clearly marked as confidential or reasonably understood to be confidential</li>
                  <li>Does not apply to information that is public, independently developed, or lawfully obtained from third parties</li>
                  <li>Survives termination of the service agreement</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  For projects requiring heightened confidentiality, a separate Non-Disclosure Agreement (NDA) may be executed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Termination by You</h3>
                <p className="leading-relaxed">
                  You may terminate services at any time by providing written notice. Upon termination:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>You remain responsible for payment of all work completed to the date of termination</li>
                  <li>Any deposits or prepayments for work not yet performed may be refunded at our discretion</li>
                  <li>We will deliver work completed to date (at our discretion) upon receipt of payment</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Termination by Us</h3>
                <p className="leading-relaxed">
                  We may terminate services if:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Payment is more than 30 days overdue</li>
                  <li>You fail to provide necessary materials, access, or feedback after reasonable notice</li>
                  <li>You violate these Terms or engage in abusive, illegal, or unethical conduct</li>
                  <li>The project becomes commercially impractical or legally problematic</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Effect of Termination</h3>
                <p className="leading-relaxed">
                  Upon termination by either party:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>All outstanding fees become immediately due</li>
                  <li>We may cease all work and revoke access to deliverables until payment is received</li>
                  <li>Provisions regarding payment, intellectual property, confidentiality, and liability survive termination</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Ongoing Maintenance and Support</h2>
                <p className="leading-relaxed">
                  Post-launch maintenance and support are available as separate services and are not included unless explicitly stated in your SOW. Maintenance may include:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Software and security updates</li>
                  <li>Bug fixes and technical support</li>
                  <li>Content updates and minor changes</li>
                  <li>Performance monitoring and optimization</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Maintenance agreements are billed separately (monthly, annually, or hourly) and may be terminated with 30 days' written notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
                <p className="leading-relaxed">
                  Our Services may integrate with or rely on third-party platforms, APIs, hosting providers, or services. We are not responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Availability, performance, or security of third-party services</li>
                  <li>Changes, discontinuation, or price increases by third-party providers</li>
                  <li>Your compliance with third-party terms of service</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  You are responsible for obtaining, maintaining, and paying for any necessary third-party services required for your project.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Dispute Resolution</h2>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Informal Resolution</h3>
                <p className="leading-relaxed">
                  In the event of any dispute, both parties agree to first attempt to resolve the matter through good-faith negotiation. Contact us at{' '}
                  <a href="mailto:info@alkyntech.com" className="text-primary hover:underline">info@alkyntech.com</a>{' '}
                  to initiate a discussion.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Governing Law</h3>
                <p className="leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of the United States and the state in which AlkynTech is registered, without regard to conflict of law principles.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Arbitration</h3>
                <p className="leading-relaxed">
                  If informal resolution fails, any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place remotely or in a mutually agreed location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">General Provisions</h2>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Entire Agreement</h3>
                <p className="leading-relaxed">
                  These Terms, together with any SOW, constitute the entire agreement between you and AlkynTech regarding the Services and supersede all prior agreements and understandings.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Amendments</h3>
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website. Your continued use of the Services after changes are posted constitutes acceptance of the new Terms.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Severability</h3>
                <p className="leading-relaxed">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Waiver</h3>
                <p className="leading-relaxed">
                  Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Assignment</h3>
                <p className="leading-relaxed">
                  You may not assign or transfer these Terms or your rights under them without our prior written consent. We may assign our rights and obligations under these Terms without restriction.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Force Majeure</h3>
                <p className="leading-relaxed">
                  Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, or internet/utility failures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="leading-relaxed">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-6 rounded-xl glass-subtle">
                  <p className="font-semibold text-foreground mb-2">AlkynTech</p>
                  <p>Email: <a href="mailto:info@alkyntech.com" className="text-primary hover:underline">info@alkyntech.com</a></p>
                  <p className="mt-2 text-sm">We will respond within 24-48 hours</p>
                </div>
              </section>

              <section className="border-t border-border/50 pt-8">
                <p className="text-sm italic">
                  By using AlkynTech's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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
