
const privacyData = [
  {
    title: "1. Information We Collect",
    content: "We do not require personal information to use our basic services.",
    subContent: "However, we may collect non-personal data such as:",
    list: [
      "IP address",
      "Browser type and version",
      "Device information",
      "Pages visited and usage statistics",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: "We use the information to:",
    list: [
      "Improve website performance",
      "Enhance user experience",
      "Prevent fraud and abuse",
      "Analyze traffic trends",
    ],
  },
  {
    title: "3. Data Security",
    content: "Downloaded files are processed temporarily and are not stored on our servers.",
    subContent: "We use industry-standard encryption (SSL/HTTPS) to secure data transfers.",
  },
  {
    title: "4. Cookies",
    content:
      "GoGrabify uses cookies to store visitor preferences and optimize website functionality. You can disable cookies in your browser settings.",
  },
  {
    title: "5. Third-Party Privacy Policies",
    content:
      "GoGrabify’s Privacy Policy does not apply to other advertisers or websites. We recommend reviewing their privacy policies separately.",
  },
  {
    title: "6. Children’s Information",
    content:
      "GoGrabify does not knowingly collect any personally identifiable information from children under 13 years of age.",
  },
  {
    title: "7. Updates to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Changes will be posted on this page.",
  },
  {
    title: "8. Contact Us",
    content: "If you have any questions about this Privacy Policy, contact us at:",
    email: "info@gograbify.com",
    emoji: "📧",
  },
];

const Privacy = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background">
      <main className="pb-20 pt-8 px-4">
        <div className="max-w-6xl mx-auto text-base">
          <h1 className="text-2xl font-semibold mb-2 ">
            Privacy Policy for <span className="text-primary">GoGrabify</span>
          </h1>
          <p className="text-muted-foreground mb-8">
            Effective Date: January 2026
          </p>

          <p className="mb-6 text-foreground/90">
            At GoGrabify (accessible from{" "}
            <span className="text-primary font-medium">
              https://gograbify.com
            </span>
            ), your privacy is one of our main priorities. This Privacy Policy
            explains what information we collect and how we use it.
          </p>

          <div className="space-y-8">
            {privacyData.map((section, index) => (
              <section
                key={index}
                className="bg-card/50 rounded-xl p-6 border border-border/50 hover:border-primary/20 transition-colors"
              >
                <h2 className="text-xl font-medium text-foreground mb-3">
                  {section.title}
                </h2>
                {section.content && (
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    {section.content}
                  </p>
                )}
                {section.subContent && (
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    {section.subContent}
                  </p>
                )}
                {section.list && (
                  <ul className="list-disc list-inside space-y-1.5 ml-2 mt-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.email && (
                  <p className="mt-2 font-medium text-primary flex items-center gap-2">
                    <span className="text-xl">{section.emoji}</span>
                    <a
                      href={`mailto:${section.email}`}
                      className="hover:underline"
                    >
                      {section.email}
                    </a>
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
