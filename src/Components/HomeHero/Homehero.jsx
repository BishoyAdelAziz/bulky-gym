import MainImage from "../../assets/Main-Gym.webp";
import { motion } from "framer-motion";
export default function Homehero() {
  return (
    <>
      <div className="flex sm:max-md:flex-col mx-auto items-center justify-center gap-8 ">
        <div className="relative bg-lime-500 md:w-1/2">
          <img
            src={MainImage}
            alt="Main Image"
            loading="lazy"
            className="rounded-es-full "
            width={900}
            height={600}
          />
          <p className="sm:max-md:text-xl shadow-lime-500 bg-blend-hard-light md:max-lg:text-4xl lg:text-6xl absolute uppercase top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl text-nowrap p-0 text-lime-500 font-extrabold">
            Well{" "}
            <span className="text-white">
              E<span className="text-lime-500">q</span>uipped
            </span>
          </p>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-2xl text-start md:w-1/2 uppercase"
        >
          <p className="font-extrabold sm:max-md:text-sm md:text-xl lg:text-4xl">
            we use the most Modern and Professional Equipment to Insure the
            service-ability to the variant users such as Professionals and
            Hobbys
          </p>
        </motion.div>
      </div>
    </>
  );
}
