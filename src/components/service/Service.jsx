import React from "react";
import "./Service.css";
import { BiCheck } from "react-icons/bi";

const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
          </ul>
        </article>

        {/* BEGINNING OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
          </ul>
        </article>

        {/* BEGINNING OF CONTENT CREATION */}

        <article className="service">
          <div className="service_head">
            <h3>CONTENT CREATION</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
