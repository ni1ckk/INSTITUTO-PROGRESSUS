import Faq from "@/components/common/Faq";
import Preloader from "@/components/common/Preloader";
import ContactOne from "@/components/contacts/ContactOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "Contact-1 || INSTITUTO PROGRESSUS - Cursos preparatórios",
  description:
    "Seu progresso começa aqui.",
};

export default function ContactPage1() {
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />

      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <ContactOne />
        <Faq />

        <FooterOne />
      </div>
    </div>
  );
}
