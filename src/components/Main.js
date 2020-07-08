import React from "react";

import illustrationGrowTogether from "../images/illustration-grow-together.svg";
import illustrationFlowingConversation from "../images/illustration-flowing-conversation.svg";
import illustrationYourUsers from "../images/illustration-your-users.svg";

export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="card mb-5">
          <div className="card-body text-center text-md-left">
            <div className="row">
              <div className="offset-md-1"></div>
              <div className="col-md-5 order-2 order-md-1 d-flex align-items-center">
                <div>
                  <h3 className="card-title font-weight-bold">Grow Together</h3>
                  <p className="card-text">
                    Generate meaningful discussions with your audience and build
                    a strong, loyal community. Think of the insightful
                    conversations you miss out on with a feedback form.
                  </p>
                </div>
              </div>
              <div className="col-md-6 order-1 order-md-2 text-md-right">
                <img
                  className="card-img-top"
                  src={illustrationGrowTogether}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-5">
          <div className="card-body text-center text-md-left">
            <div className="row">
              <div className="offset-md-1"></div>
              <div className="col-md-5 text-md-left">
                <img
                  className="card-img-top"
                  src={illustrationFlowingConversation}
                  alt=""
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <h3 className="card-title font-weight-bold">
                    Flowing Conversations
                  </h3>
                  <p className="card-text">
                    You wouldn't paginate a conversation in real life, so why do
                    it online? Our threads have just-in-time loading for a more
                    natural flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-5">
          <div className="card-body text-center text-md-left">
            <div className="row">
              <div className="offset-md-1"></div>
              <div className="col-md-5 order-2 order-md-1 d-flex align-items-center">
                <div>
                  <h3 className="card-title font-weight-bold">Your Users</h3>
                  <p className="card-text">
                    It takes no time at all to integrate Huddle with your app's
                    authentication solution. This means, once signed in to your
                    app, your users can start chatting immediately.
                  </p>
                </div>
              </div>
              <div className="col-md-6 order-1 order-md-2 text-md-right">
                <img
                  className="card-img-top"
                  src={illustrationYourUsers}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card card-get-started mb-3">
          <div className="card-body text-center">
            <h3 className="card-title card-title-get-started font-weight-bold">
              Ready To Build Your Community?
            </h3>
            <a
              href="#"
              className="btn btn-primary rounded-pill font-weight-bold"
              role="button"
            >
              Get Started For Free
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
