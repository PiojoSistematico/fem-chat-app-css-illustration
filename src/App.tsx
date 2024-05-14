import avatar from "./assets/images/avatar.jpg";
import dog1 from "./assets/images/dog-image-1.jpg";
import dog2 from "./assets/images/dog-image-2.jpg";
import dog3 from "./assets/images/dog-image-3.jpg";

function App() {
  return (
    <>
      <main className="font-regular relative flex h-screen flex-col items-center gap-4 bg-neutral-2 py-8 font-rubik text-sm text-primary-6 md:grid md:grid-cols-2 md:gap-32">
        <div className="absolute left-0 top-0 z-0 h-screen w-screen -translate-x-1/2 -translate-y-1/2 rounded-b-[400px] bg-gradient-to-b from-gradient-1 to-gradient-2 md:w-5/12 md:-translate-x-1/4 md:-translate-y-1/4"></div>
        <section
          title="phone"
          className="z-10 w-80 rounded-3xl bg-neutral-1 p-3 text-xs md:justify-self-end"
        >
          <div title="screen" className="rounded-2xl bg-neutral-2">
            <div
              title="header"
              className="relative flex flex-row items-center justify-between rounded-t-xl bg-gradient-to-r from-gradient-2 to-gradient-1 p-2 pt-4 text-neutral-1"
            >
              <div className="absolute -top-3 left-1/2 h-6 w-32 -translate-x-1/2 rounded-lg bg-neutral-1"></div>
              <div className="flex items-center gap-2">
                <div>{"<"}</div>
                <picture>
                  <img
                    src={avatar}
                    alt="avatar"
                    className="h-8 w-8 rounded-full border-2 border-neutral-1"
                  />
                </picture>
                <div className="flex flex-col">
                  <span className="font-medium">Samuel Green</span>
                  <span className="text-primary-1">Available to Walk</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <p className="w-9/12 animate-[fadeIn_300ms_ease-out_600ms_forwards] rounded-md bg-primary-1 p-2 text-primary-2 opacity-0">
                That sounds great. I’d be happy with that.
              </p>
              <p className="w-9/12 animate-[fadeIn_300ms_ease-out_1200ms_forwards] rounded-md bg-primary-1 p-2 text-primary-2 opacity-0">
                Could you send over some pictures of your dog, please?
              </p>
              <div className="flex animate-[fadeIn_300ms_ease-out_2000ms_forwards] flex-row gap-2 self-end opacity-0">
                <picture>
                  <img
                    src={dog1}
                    alt="dog photo"
                    className="h-8 w-8 rounded-md"
                  />
                </picture>
                <picture>
                  <img
                    src={dog2}
                    alt="dog photo"
                    className="h-8 w-8 rounded-md"
                  />
                </picture>
                <picture>
                  <img
                    src={dog3}
                    alt="dog photo"
                    className="h-8 w-8 rounded-md"
                  />
                </picture>
              </div>
              <p className="w-9/12 animate-[fadeIn_300ms_ease-out_2000ms_forwards] self-end rounded-md bg-neutral-1 p-2  opacity-0 ">
                Here are a few pictures. She’s a happy girl!
              </p>
              <p className="w-9/12 animate-[fadeIn_300ms_ease-out_2400ms_forwards] self-end rounded-md bg-neutral-1 p-2  opacity-0 ">
                Can you make it?
              </p>
              <p className="w-9/12 animate-[fadeIn_300ms_ease-out_3200ms_forwards] rounded-md bg-primary-1 p-2 text-primary-2 opacity-0 ">
                She looks so happy! The time we discussed works. How long shall
                I take her out for?
              </p>
              <div className=" flex  w-10/12 animate-[fadeIn_300ms_ease-out_3600ms_forwards] flex-row items-center justify-between rounded-md bg-gradient-to-r from-gradient-1 to-gradient-2 p-2 text-neutral-1 opacity-0">
                <div className="flex flex-row items-center gap-2">
                  <div className="h-4 w-4 rounded-full border border-solid border-neutral-1"></div>{" "}
                  <span>30 minute walk</span>
                </div>
                <span className="font-bold">$29</span>
              </div>
              <div className="flex w-10/12 animate-[fadeIn_300ms_ease-out_3600ms_forwards]  flex-row items-center justify-between rounded-md bg-gradient-to-r from-gradient-1 to-gradient-2 p-2 text-neutral-1 opacity-0">
                <div className="flex flex-row items-center gap-2">
                  <div className="h-4 w-4 rounded-full border border-solid border-neutral-1"></div>{" "}
                  <span>1 hour walk</span>
                </div>
                <span className="font-bold">$49</span>
              </div>
              <div className="mt-8 flex flex-row items-center justify-between rounded-2xl bg-neutral-1 p-2">
                <p>Type a message...</p>
                <p className="flex h-6 w-6 flex-row items-center justify-center rounded-full bg-neutral-3 text-neutral-1">
                  #
                </p>
              </div>
            </div>
          </div>
        </section>
        <section title="description" className="p-8 text-center md:text-left">
          <h1 className=" pb-4 text-3xl font-medium text-primary-5">
            Simple booking
          </h1>
          <p className="pr-8 text-base">
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
