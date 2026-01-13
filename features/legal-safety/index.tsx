
import { Scale, AlertTriangle, FileText, Users, Lock } from "lucide-react";

const LegalSafety = () => {
  return (
    <div className="min-h-screen bg-background">
   
      <main className=" pb-16 px-4">
        <div className="max-w-300 mx-auto text-muted-foreground text-[16px]">
          <div className="text-center my-12">

            <h1 className="text-[26px] text-foreground font-medium mb-4">Legal & Safety Requirements</h1>
            <p className="text-muted-foreground text-[16px] max-w-2xl mx-auto">
              Understanding your rights and responsibilities when using VidGrab&apos;s video downloading service.
            </p>
          </div>

          <div className="space-y-8">
            {/* Important Notice */}
            <div className="glass-card p-6 border-l-4 border-l-yellow-500">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-medium mb-2 text-foreground">Important Notice</h2>
                  <p className="text-muted-foreground text-[16px]">
                    VidGrab is designed for downloading content that you have the legal right to download. 
                    Users are solely responsible for ensuring they have proper authorization to download 
                    any content. Downloading copyrighted material without permission is illegal in most jurisdictions.
                  </p>
                </div>
              </div>
            </div>

            {/* Copyright Compliance */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <Scale className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-medium mb-3 text-foreground">Copyright Compliance</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>Only download videos that you own, have created, or have explicit permission to download.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>Content licensed under Creative Commons may be downloaded according to their specific license terms.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>Educational fair use may apply in certain circumstances, but users should consult legal counsel.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>We comply with DMCA takedown requests and respect intellectual property rights.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Acceptable Use */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-medium mb-3 text-foreground">Acceptable Use Policy</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-foreground mb-2">✓ Permitted Uses</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Downloading your own uploaded content</li>
                        <li>• Saving videos with creator&apos;s permission</li>
                        <li>• Accessing public domain content</li>
                        <li>• Personal backup of licensed content</li>
                        <li>• Educational purposes under fair use</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2">✗ Prohibited Uses</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Commercial redistribution without rights</li>
                        <li>• Downloading copyrighted content illegally</li>
                        <li>• Circumventing platform restrictions</li>
                        <li>• Mass automated downloading (scraping)</li>
                        <li>• Any illegal activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-medium mb-3 text-foreground">User Responsibilities</h2>
                  <p className="text-muted-foreground mb-4">
                    By using VidGrab, you acknowledge and agree to the following responsibilities:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>You are solely responsible for verifying your legal right to download any content.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>You agree to indemnify VidGrab against any claims arising from your misuse of the service.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>You will not use this service for any unlawful purpose or in violation of any applicable laws.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>You understand that VidGrab does not host any videos and acts only as a tool.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Safety */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-medium mb-3 text-foreground">Data Safety & Privacy</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>We do not store or log the URLs you submit for downloading.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>No personal data is required to use our basic services.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>Downloaded files are processed securely and not retained on our servers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>We use industry-standard encryption for all data transfers.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <p className="text-center text-sm text-muted-foreground mt-12">
            Last updated: January 2026
          </p>
        </div>
      </main>
    </div>
  );
};

export default LegalSafety;