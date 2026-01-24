
const LegalSafety = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background">
      <main className="pb-20 pt-8 px-4">
        <div className="max-w-300 mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Legal & Safety Notice</h1>
          
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
            <p>
              GoGrabify is designed for personal and educational use only.
            </p>

            <p>
              Users must respect copyright laws and the terms of service of third-party platforms.
            </p>

            <div>
              <p className="mb-2">We confirm that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not host media files</li>
                <li>We do not store downloaded content</li>
                <li>We do not encourage piracy</li>
                <li>We comply with DMCA regulations</li>
              </ul>
            </div>

            <p>
              Users are fully responsible for how they use this service.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalSafety;