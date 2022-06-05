import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="hero bg-blue-100 min-h-[90vh] mx-auto mt-0 lg:-mt-4">
  <div className="hero-content">
    <div className="mx-8 lg:w-[80vw]">
      <h1 className="text-5xl font-bold text-primary">Find yourself a mate!</h1>
      <p className="py-6 font-roboto text-2xl w-100 lg:w-[35ch]">Welcome to the <strong>Check N Mate</strong>. Explore different projects on variety of topics and become a contributor.</p>
      <Link to="/auth/signup" className="btn btn-primary btn-outline text-lg px-6 py-1 rounded-lg border-primary border-2">Get Started</Link>
    </div>
  </div>
  <div className="mt-auto mx-auto hidden lg:block text-6xl ">&#8964;</div>
</div>
    </>
  );
}

export default Hero;