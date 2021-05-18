import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title} </title>
      <meta name='description' content={description}></meta>
      <meta name='keyword' content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Kumar's Online Shop",
  description: "We sell the best products for the cheap prices.",
  keywords: "electronic, buy electronic, cheap electronice online, shop online",
};

export default Meta;
