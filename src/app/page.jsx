import Hero from '@/components/Home/Hero/Hero';
import Destinations from '@/components/Home/Destination/Destination';
import About from '@/components/About/page';
import Stories from '@/components/Stories/Stories';
import FlightMap from '@/components/FligthMap/FlightMap';

export default function Home() {
  return (
    <>
      <main
        style={{
          backgroundImage: "url('Tour.jpg')", // Make sure Tour.jpg is in the public folder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Changed from 10vh to 100vh to cover full viewport height
        }}
      >
        <Hero />
        <Destinations />
        <Stories />
        <About />
        <FlightMap/>
        
      </main>
    </>
  );
}
