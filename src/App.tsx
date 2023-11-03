import { useState } from "react";
import avatar from "./assets/images/avatar.jpg";
import dog1 from "./assets/images/dog-image-1.jpg";
import dog2 from "./assets/images/dog-image-2.jpg";
import dog3 from "./assets/images/dog-image-3.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="font-regular relative flex flex-col items-center justify-items-center  gap-10 bg-neutral-2 font-rubik text-base text-primary-6">
        <section
          title="phone"
          className=" w-[70%] rounded-3xl border-2 border-red-400 bg-neutral-1 p-2 text-sm"
        >
          <div title="screen" className="rounded-2xl bg-neutral-2">
            <div
              title="header"
              className="relative flex flex-row items-center justify-between rounded-t-xl bg-gradient-to-r from-gradient-2 to-gradient-1 p-2 text-neutral-1"
            >
              <div className="absolute h-4 w-8 rounded-md bg-neutral-1"></div>
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
                  <span>Samuel Green</span>
                  <span>Available to Walk</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            </div>
            <div className="chat">
              <p>That sounds great. I’d be happy with that.</p>
              <p>Could you send over some pictures of your dog, please?</p>
              <div className="flex flex-row gap-2">
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
              <p>Here are a few pictures. She’s a happy girl!</p>
              <p>Can you make it?</p>
              <p>
                She looks so happy! The time we discussed works. How long shall
                I take her out for?
              </p>
              <div>
                <div>Cirle</div> 30 minute walk <span>$29</span>
              </div>
              <div>
                <div>Cirle</div> 1 hour walk <span>$49</span>
              </div>
              <div>
                <div>Input</div>
                <div>Button</div>
              </div>
            </div>
          </div>
        </section>
        <section title="description" className="p-8 text-center">
          <h1 className=" pb-4 text-3xl font-medium text-primary-5">
            Simple booking
          </h1>
          <p>
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
