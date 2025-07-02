import Flightinfo from "@/components/Flightinfo/Flightinfo";

export default function Status() {
  return (
    <main
      style={{
        backgroundImage: "url('/Tour.jpg')", // added leading slash for public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="flex justify-center items-start py-10 px-4"
    >
      <Flightinfo />
    </main>
  );
}
