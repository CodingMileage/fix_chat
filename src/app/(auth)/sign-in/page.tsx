import SignInForm from "@/components/form/SignInForm";
import ParticlesBackground from "@/app/components/ParticlesBackground";

const page = () => {
  return (
    <ParticlesBackground>
      <div className="flex justify-center">
        <SignInForm />
      </div>
    </ParticlesBackground>
  );
};

export default page;
