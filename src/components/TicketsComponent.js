import React from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TicketsComponent.css";

function TicketsComponent() {
  return (
    <div className="tickets-container">
      <h1>TICKETS</h1>
      <div className="acc-custom">
        <Accordion>
          <div className="accordion-header-container">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="accordion-header">Ticket Option #1</div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="accordion-body">
                  <div className="accordion-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <button>BUY TICKET</button>
                  </div>
                  <div className="accordion-price">$45</div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </div>
          <div className="accordion-header-container">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="accordion-header">Ticket Option #2</div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="accordion-body">
                  <div className="accordion-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <button>BUY TICKET</button>
                  </div>
                  <div className="accordion-price">$85</div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </div>

          <div className="accordion-header-container">
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <div className="accordion-header">Ticket Option #3</div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="accordion-body">
                  <div className="accordion-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <button>BUY TICKET</button>
                  </div>
                  <div className="accordion-price">$125</div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </div>

          <div className="accordion-header-container">
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <div className="accordion-header">Ticket Option #4</div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="accordion-body">
                  <div className="accordion-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <button>BUY TICKET</button>
                  </div>
                  <div className="accordion-price">$155</div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </div>

          <div className="accordion-header-container">
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <div className="accordion-header">Ticket Option #5</div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="accordion-body">
                  <div className="accordion-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <button>BUY TICKET</button>
                  </div>
                  <div className="accordion-price">$185</div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default TicketsComponent;
