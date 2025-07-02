import About from "@/components/About/page";
import Highlight from "@/components/Highlight/Highlight";
import Navbar from "@/components/Navbar/Navbar";
export default function Aboutme() {
  return (
    <>
    
    <main style={{
        backgroundImage: "url('paris.jpg')",  // path relative to public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}>
      <About/>
      <Highlight/>
      <Navbar/>
    </main>
    </>
  );
}