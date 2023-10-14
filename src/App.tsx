import { useState } from "react";
import avatar from "./assets/images/avatar.jpg";
import dog1 from "./assets/images/dog-image-1.jpg";
import dog2 from "./assets/images/dog-image-2.jpg";
import dog3 from "./assets/images/dog-image-3.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="align-center flex justify-center border-b-2 bg-gray-900 font-bold">
        <picture></picture>
        <section title="phone">
          <div className="screen">
            <div className="header">
              <div>{"<"}</div>
              <div className="profile">
                <picture>
                  <img src={avatar} alt="avatar" />
                </picture>
                <div>
                  <span>Samuel Green</span>
                  <span>Available to Walk</span>
                </div>
                <div>three dots</div>
              </div>
            </div>
            <div className="chat">
              <p>That sounds great. I’d be happy with that.</p>
              <p>Could you send over some pictures of your dog, please?</p>
              <div>
                <picture>
                  <img src={dog1} alt="dog photo" />
                </picture>
                <picture>
                  <img src={dog2} alt="dog photo" />
                </picture>
                <picture>
                  <img src={dog3} alt="dog photo" />
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
        <section title="description">
          <h1>Simple booking</h1>
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
