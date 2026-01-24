
const DMCA = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background">
      <main className="pb-20 pt-8 px-4">
        <div className="max-w-300 mx-auto">
          <h1 className="text-2xl font-semibold mb-6">DMCA Policy</h1>
          
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
            <p>
              GoGrabify respects intellectual property rights and complies with the Digital Millennium Copyright Act (DMCA).
            </p>

            <p>
              If you believe your copyrighted work has been infringed, please send a DMCA notice including:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your contact details</li>
              <li>Description of the copyrighted work</li>
              <li>URL of the allegedly infringing material</li>
              <li>A statement of good faith belief</li>
              <li>A statement confirming accuracy</li>
              <li>Your electronic or physical signature</li>
            </ul>

            <div className="pt-4">
              <p className=" text-foreground mb-2">
                📧 Send DMCA notices to: <a href="mailto:info@gograbify.com" className="text-primary hover:underline">info@gograbify.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DMCA;
