
const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className=" pb-20 pt-8 px-4">
        <div className="max-w-300 mx-auto">
          <h1 className="text-2xl font-semibold mb-1">Terms of Service</h1>
          
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
            <p className="text-white/50 text-sm">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-4">
              <h2 className="text-xl font-medium text-foreground mb-1.5">Acceptance of Terms</h2>
              <p>By accessing and using VidGrab, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>
            </section>

            <section className="mb-4">
              <h2 className="text-xl font-medium text-foreground mb-1.5">Service Description</h2>
              <p>VidGrab provides a tool to download videos from various platforms for personal, non-commercial use only. We do not host, store, or distribute any copyrighted content.</p>
            </section>

            <section className="mb-4">
              <h2 className="text-xl font-medium text-foreground mb-1.5">User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Use the service only for personal, non-commercial purposes</li>
                <li>Respect the copyright and intellectual property rights of content creators</li>
                <li>Comply with the terms of service of the source platforms</li>
                <li>Not use the service for any illegal activities</li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="text-xl font-medium text-foreground mb-1.5">Prohibited Uses</h2>
              <p>You may not use our service to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Download copyrighted content without authorization</li>
                <li>Redistribute or sell downloaded content</li>
                <li>Bypass any technological protection measures</li>
                <li>Engage in any activity that violates applicable laws</li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="text-xl font-medium text-foreground mb-1.5">Disclaimer</h2>
              <p>VidGrab is provided &quot;as is&quot; without any warranties. We are not responsible for the content you download or how you use it. You are solely responsible for ensuring your use complies with applicable laws.</p>
            </section>

            <section className="mb-4">
              <h2 className="text-xl font-medium text-foreground mb-1.5">Limitation of Liability</h2>
              <p>VidGrab shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.</p>
            </section>

            <section className="mb-4">
              <h2 className="text-xl font-medium text-foreground mb-1.5">Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
            </section>
          </div>
        </div>
      </main>
    
    </div>
  );
};

export default Terms;
