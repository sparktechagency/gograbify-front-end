

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-20 pt-8 px-4">
        <div className="max-w-300 mx-auto text-base">
          <h1 className="text-2xl font-semibold mb-1">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
            <p className="text-white/50 text-sm">Last updated: {new Date().toLocaleDateString()}</p>

            <section className=" pb-4">
              <h2 className="text-xl font-medium text-foreground mb-1.5">Information We Collect</h2>
              <p>We collect minimal information to provide our service. This includes:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>URLs you submit for download</li>
                <li>Basic usage analytics (page views, feature usage)</li>
                <li>Device and browser information for optimization</li>
              </ul>
            </section>

            <section className=" pb-4">
              <h2 className="text-xl font-medium text-foreground mb-1.5">How We Use Your Information</h2>
              <p>We use the collected information solely to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Process your download requests</li>
                <li>Improve our service and user experience</li>
                <li>Prevent abuse and maintain security</li>
              </ul>
            </section>

            <section className=" pb-4">
              <h2 className="text-xl font-medium text-foreground mb-1.5">Data Storage</h2>
              <p>We do not permanently store the videos you download or your personal browsing history. Download requests are processed in real-time and not retained.</p>
            </section>

            <section className=" pb-4">
              <h2 className="text-xl font-medium text-foreground mb-1.5">Cookies</h2>
              <p>We use essential cookies to ensure the website functions properly. Third-party advertising partners may also use cookies to serve relevant ads.</p>
            </section>

            <section className=" pb-4">
              <h2 className="text-xl font-medium text-foreground mb-1.5">Third-Party Services</h2>
              <p>We may use third-party services for analytics and advertising. These services have their own privacy policies governing the use of your information.</p>
            </section>

            <section className=" pb-4">
              <h2 className="text-xl font-medium text-foreground mb-1.5">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us through our contact page.</p>
            </section>
          </div>
        </div>
      </main>
    
    </div>
  );
};

export default Privacy;
