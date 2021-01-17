import React from "react";
import { Link } from "react-router-dom";
//icon
import * as BiIcon from "react-icons/bi";

export default function Terms() {
  return (
    <div>
      <div className="container pt-4 pb-4">
        <h1 className="text-center">Terms of Use</h1>
        <Link to="/" style={{ marginTop: "50px", color: "#e60029" }}>
          <BiIcon.BiLeftArrowCircle /> Back
        </Link>
        <hr style={{ marginBottom: "50px" }} />
        <h3>Terms of Use ("Terms")</h3>
        <p className="mt-4 mb-4">Last updated: December 21, 2020</p>
        <p className="mt-2 mb-2">
          Please read these Terms of Use ("Terms", "Terms of Use") carefully
          before using the http:/ www.roofbundle.ca website and the Roofbundle
          mobile application (the "Service") operated by Peters Build Inc ("us",
          "we", or "our").
        </p>
        <p className="mt-3 mb-3">
          Your access to and use of the Service is conditioned on your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users and others who access or use the Service.
        </p>
        <p className="mt-3 mb-3">
          <b>
            By accessing or using the Service you agree to be bound by these
            Terms. If you disagree with any part of the terms then you may not
            access the Service.
          </b>
        </p>
        <p className="mt-3 mb-3">
          <b>Purchases</b>
        </p>
        <p className="mt-3 mb-3">
          f you wish to purchase any product or service made available through
          the Service ("Purchase"), you may be asked to supply certain
          information relevant to your Purchase including, without limitation,
          your …
        </p>
        <p className="mt-3 mb-3">
          <b>Termination</b>
        </p>
        <p className="mt-3 mb-3">
          We may terminate or suspend access to our Service immediately, without
          prior notice or liability, for any reason whatsoever, including
          without limitation if you breach the Terms
        </p>
        <p className="mt-3 mb-3">
          All provisions of the Terms which by their nature should survive
          termination shall survive termination, including, without limitation,
          ownership provisions, warranty disclaimers, indemnity and limitations
          of liability.
        </p>
        <p className="mt-3 mb-3">
          <b>Content</b>
        </p>
        <p className="mt-3 mb-3">
          Our Service allows you to post, link, store, share and otherwise make
          available certain information, text, graphics, videos, or other
          material ("Content"). You are responsible for the …
        </p>
        <p className="mt-3 mb-3">
          <b>Links To Other Web Sites</b>
        </p>
        <p className="mt-3 mb-3">
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by Peters Build Inc
        </p>
        <p className="mt-3 mb-3">
          Peters Build Inc has no control over, and assumes no responsibility
          for, the content, privacy policies, or practices of any third party
          web sites or services. You further acknowledge and agree that Peters
          Build Inc shall not be responsible or liable, directly or indirectly,
          for any damage or loss caused or alleged to be caused by or in
          connection with use of or reliance on any such content, goods or
          services available on or through any such web sites or services.
        </p>
        <p className="mt-3 mb-3">
          <b>Changes</b>
        </p>
        <p className="mt-3 mb-3">
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material we will try to
          provide at least 2 days' notice prior to any new terms taking effect.
          What constitutes a material change will be determined at our sole
          discretion
        </p>
        <p className="mt-3 mb-3">
          <b>Contact Us</b>
        </p>
        <p className="mt-3 mb-3">
          If you have any questions about these Terms, please contact us
        </p>
        <p className="mt-3 mb-3">
          <a href="mailto:info@roofbundle.com">info@roofbundle.com</a>
        </p>
      </div>
    </div>
  );
}
