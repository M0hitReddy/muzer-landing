import Grad from "@/components/BgGrad";
import Bth from "@/components/Bth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Waitlist = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      
      <div className="w-full max-w-4xl">
        <Bth />

        <div className="p-8 rounded-3xl  backdrop-blur-sm border border-white/10 shadow-2xl shadow-primary/10 bg-white/10 di-grad ">
          <Grad />
          <h1 className="text-4xl font-bold mb-4">
            Join the <span className="gradient-text">Waitlist</span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Be among the first to experience Muzer when we launch. Secure your
            username now before someone else claims it!
          </p>

          <div className="flex flex-col items-center space-y-8">
            <WaitlistForm />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
              <div className="text-center p-6  rounded-2xl bg-black/30 border border-white/10">
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  Early Access
                </h3>
                <p className="text-gray-400">
                  Get priority access when we launch
                </p>
              </div>
              <div className="text-center p-6  rounded-2xl bg-black/30 border border-white/10">
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  Updates
                </h3>
                <p className="text-gray-400">Receive development updates</p>
              </div>
              <div className="text-center p-6  rounded-2xl bg-black/30 border border-white/10">
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  Exclusive
                </h3>
                <p className="text-gray-400">
                  Special perks for early adopters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
