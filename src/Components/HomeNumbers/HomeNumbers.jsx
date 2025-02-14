import SmoothNumberIncrease from "./Smooth";
export default function HomeNumbers() {
  return (
    <>
      <div className="flex justify-evenly w-full sm:max-lg:grid sm:max-lg:grid-cols-2 gap-8">
        <div className="flex-col lg:w-1/4  text-center  items-center text-5xl sm:max-lg:text-xl sm:max-lg:rounded-ee-4xl p-4 sm:max-lg:ring-6 sm:max-lg:ring-lime-500">
          <h4 className="font-extrabold">Users</h4>
          <SmoothNumberIncrease endValue={3524} />
        </div>
        <div className="flex-col lg:w-1/4  justify-center  text-center items-center text-5xl sm:max-lg:text-xl sm:max-lg:rounded-es-4xl p-4 sm:max-lg:ring-6 sm:max-lg:ring-lime-500">
          <h3 className="font-extrabold">Trainers</h3>
          <SmoothNumberIncrease endValue={48} />
        </div>
        <div className="flex-col lg:w-1/4 justify-center text-center items-center text-5xl sm:max-lg:text-xl sm:max-lg:rounded-se-4xl  p-4 sm:max-lg:ring-6 sm:max-lg:ring-lime-500">
          <h3 className="font-extrabold">Brunches</h3>
          <SmoothNumberIncrease endValue={6} />
        </div>
        <div className="flex-col lg:w-1/4 justify-center text-center items-center text-5xl sm:max-lg:text-xl sm:max-lg:rounded-ss-4xl p-4 sm:max-lg:ring-6 sm:max-lg:ring-lime-500">
          <h3 className="font-extrabold">Elements</h3>
          <SmoothNumberIncrease endValue={480} />
        </div>
      </div>
    </>
  );
}
