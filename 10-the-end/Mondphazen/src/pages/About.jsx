import logo from "../assets/logo.png";

export default function About() {
  return (
    <div className="min-h-screen bg-stone-950 text-amber-50 flex flex-col items-center px-6 py-24">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-bold mb-4">About Mondphazen</h1>
        <p className="text-lg leading-relaxed text-stone-300">
          Mondphazen is more than a just a watch store — it’s a celebration of
          time, craftsmanship, and the celestial rhythm that guides us. Inspired
          by the beauty and mystery of the moon, our timepieces blend precision
          engineering with timeless aesthetics.
        </p>

        <p className="text-lg leading-relaxed text-stone-400">
          Each collection captures a different phase — from the calm of the new
          moon to the brilliance of the full moon — symbolizing the journey of
          transformation and balance. Every watch is designed with meticulous
          attention to detail, combining modern materials with classic design
          philosophy.
        </p>

        <p className="text-lg leading-relaxed text-stone-400">
          We believe time is not just measured — it’s experienced. With
          Mondphazen, you wear not only a watch, but a story written in light
          and shadow.
        </p>
        <div className="flex justify-center">
          <img src={logo} alt="Mondphazen Logo" className="h-30 w-auto" />
        </div>
      </div>
    </div>
  );
}
