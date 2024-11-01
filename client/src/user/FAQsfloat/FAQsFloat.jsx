import React from "react";
import FaqSection from "../../components/FAQs/FAQsPage";
import { Helmet } from 'react-helmet';
const FAQs = () => {
  return (
    <>
     <Helmet>
        <title>Vanmoh | FAQs</title>
      </Helmet>
    <div>
      <FaqSection />
    </div>
    </>
  );
};

export default FAQs;
