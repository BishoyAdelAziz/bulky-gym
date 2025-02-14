import { createFileRoute } from "@tanstack/react-router";
import Homehero from "../Components/HomeHero/Homehero";
import HomeNumbers from "../Components/HomeNumbers/HomeNumbers";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <body className="h-screen antialiased flex flex-col gap-6">
      <main className="text-5xl lg:text-7xl sm:max-md:text-xl mx-auto flex justify-center items-start gap-10 sm:max-md:gap-2 pt-8">
        <div className="uppercase text-lime-500 font-extrabold  items-end text-end">
          <motion.h3
            className={"relative -translate-x-[50vw]"}
            animate={{ translateX: "50vw" }}
            transition={{ duration: 1 }}
          >
            Transform
          </motion.h3>
          <motion.h3
            className={"relative -translate-x-[50vw]"}
            animate={{ translateX: "50vw" }}
            transition={{ duration: 1 }}
          >
            Elevate
          </motion.h3>
        </div>
        <div className="uppercase font-bold text-start">
          <motion.h3
            className={"relative translate-x-[50vw]"}
            animate={{ translateX: "-50vw" }}
            transition={{ delay: 1, duration: 1 }}
          >
            Your Body
          </motion.h3>
          <motion.h3
            className={"relative translate-x-[50vw]"}
            animate={{ translateX: "-50vw" }}
            transition={{ delay: 1, duration: 1 }}
          >
            Your Life
          </motion.h3>
        </div>
      </main>
      <section>
        <Homehero />
      </section>
      <section>
        <HomeNumbers />
      </section>
    </body>
  );
}
