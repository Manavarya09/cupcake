import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

export function Demo() {
  const videoRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="demo" id="demo" aria-label="Live demo">
      <div className="container">
        <SectionHeader
          tag="DEMO"
          label="See cupcake in action"
          sub="Watch cupcake help a user manage emails and documents &mdash; entirely by voice."
        />

        <div className="demo-video reveal" ref={videoRef}>
          <iframe
            src="https://www.youtube.com/embed/kno2sGmwfuo"
            title="cupcake Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
