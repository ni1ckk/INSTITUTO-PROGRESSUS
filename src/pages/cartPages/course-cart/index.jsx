import BlogsOne from "@/components/blogs/BlogsOne";
import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";

import React from "react";

import CourseCart from "../../../components/cartsAndCheckout/CourseCart";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "Course-cart || INSTITUTO PROGRESSUS - Cursos preparatórios",
  description:
    "Seu progresso começa aqui.",
};
export default function CourseCartPage() {
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        <CourseCart />

        <FooterOne />
      </div>
    </div>
  );
}
