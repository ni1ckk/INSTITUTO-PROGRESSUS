import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";

import React from "react";
import EventCheckOut from "@/components/cartsAndCheckout/EventCheckout";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "Event-checkout || INSTITUTO PROGRESSUS - Cursos preparatórios",
  description:
    "Seu progresso começa aqui.",
};
export default function EventCheckoutPage() {
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        <EventCheckOut />

        <FooterOne />
      </div>
    </div>
  );
}
