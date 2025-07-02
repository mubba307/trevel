import Contact from "@/components/contact/contact";


export default function Contactme() {
  return (
    <main
      style={{
        backgroundImage: "url('/paris.jpg')", // Corrected path (relative to public folder)
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="flex flex-col justify-between"
    >
      <Contact />
    </main>
  );
}

