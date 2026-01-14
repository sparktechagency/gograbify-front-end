import Home from "@/features/home";
import ReactLenis from "lenis/react"; 

export default function HomePage() {
  return (
    <div>  
       <ReactLenis root />
      <main> 
      <Home />
      </main>
    </div>
  );
}
