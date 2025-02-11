import { XMarkIcon } from "@heroicons/react/24/outline";
import VentisLogo from "./3ventis";

export default function Success({ close }) {
  return (
    <>
      <div className="fixed w-full bg-[#ffffff50] z-[10000] backdrop-blur-[5px] bottom-0 left-0 right-0 top-0 h-full">
        <div
          style={{ backgroundColor: "white" }}
          className=" shadow-2xl max-w-[452px] backdrop-blur-[5px] z-[1000000] w-full mx-auto abscenter rounded-[2rem] p-[3rem] px-[4rem]"
        >
          <div className="grid items-center justify-center gap-12 text-center">
            <span className="grid items-center justify-center ">
              <VentisLogo />
            </span>
            <div>
              <p className="font-medium strong text-[3.2rem] leading-[40px] text-color">
                Thanks for signing up! 🤩
              </p>
              <p
                className="text-[1.4rem] leading-[20px] max-w-[320px] w-full mx-auto "
                style={{ color: "rgba(125, 125, 122, 1)" }}
              >
                You're on the list! We'll notify you when we launch so you can
                start planning your dream events.
              </p>
            </div>
          </div>
          <span
            onClick={close}
            className="absolute top-8 right-8 cursor-pointer"
          >
            <XMarkIcon aria-hidden="true" className="size-10 " color="black" />
          </span>
        </div>
      </div>
    </>
  );
}
