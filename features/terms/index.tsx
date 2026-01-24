
import { termsData } from "@/contents/terms-data";

const Terms = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-background">
      <main className=" pb-20 pt-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6 ">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Welcome to GoGrabify! By accessing this website, you agree to comply with these Terms of Service.</p>
          
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
            {/* <p className="text-white/50 text-sm">Last updated: {new Date().toLocaleDateString()}</p> */}

            {termsData.map((item, index) => (
              <section key={index} className="mb-4">
                <h2 className="text-lg font-medium text-white mb-1.5">{item.title}</h2>
                <p>{item.content}</p>
                {item.list && (
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    {item.list.map((listItem, listIndex) => (
                      <li key={listIndex}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
    
    </div>
  );
};

export default Terms;
