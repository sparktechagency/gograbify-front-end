
const DMCA = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-20 pt-8 px-4">
        <div className="max-w-300 mx-auto">
          <h1 className="text-2xl font-semibold mb-1">DMCA Policy</h1>
          
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
            <p className="text-white/50 text-sm">Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">Copyright Compliance</h2>
              <p>VidGrab respects the intellectual property rights of others and expects our users to do the same. We comply with the Digital Millennium Copyright Act (DMCA) and similar laws worldwide.</p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">Our Role</h2>
              <p>VidGrab is a tool that facilitates the downloading of publicly available content. We do not host, store, or distribute any content. All downloads are processed directly from the source platforms.</p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">Filing a DMCA Complaint</h2>
              <p>If you believe that content available through our service infringes your copyright, please provide us with the following information:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>A description of the copyrighted work</li>
                <li>The URL of the infringing content</li>
                <li>Your contact information (name, address, email, phone)</li>
                <li>A statement that you have a good faith belief the use is not authorized</li>
                <li>A statement under penalty of perjury that the information is accurate</li>
                <li>Your physical or electronic signature</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">Counter-Notification</h2>
              <p>If you believe your content was wrongly removed, you may file a counter-notification with:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Identification of the removed content and its location</li>
                <li>A statement under penalty of perjury that removal was mistaken</li>
                <li>Your contact information</li>
                <li>Consent to local federal court jurisdiction</li>
                <li>Your physical or electronic signature</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">Contact for DMCA Issues</h2>
              <p>Please send all DMCA-related correspondence to our designated agent through our contact page. We aim to respond to all valid requests within 48 hours.</p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-3">Repeat Infringer Policy</h2>
              <p>We maintain a policy to terminate users who repeatedly infringe on copyrights or other intellectual property rights.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DMCA;
