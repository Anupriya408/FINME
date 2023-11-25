import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <Img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-bg-v6.png" />
      </div>

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <div className="text-content">
            <p>Data-Powered Solutions for industrial Excellence</p>
            <button>Read More</button>
          </div>
          <div className="image-content">
            <img
              src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
              alt="Homepage Image"
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
