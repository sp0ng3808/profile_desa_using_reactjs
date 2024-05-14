import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useParams, Link } from "react-router-dom";
import newsData from "../data/NewsData.json";
import dompyong from "../assets/images/dompyong-kulon.jpg";

export const NewsPage = () => {
  const { id } = useParams();
  const item = newsData.newsData[id];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Layout>
        <div className="grid grid-cols-1">
          <div id="home" className="relative">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute inset-0 flex items-center text-white">
              <div className="mx-0 md:mx-20 w-full text-center md:text-left">
                <div className="mb-8">
                  <Link
                    to="/"
                    state={{ id: "news" }}
                    className="text-2xl hover:underline hover:duration-75"
                  >
                    Kembali
                  </Link>
                </div>
                <div className="bg-slate-700/50 p-7 rounded-xl backdrop-blur-lg">
                  <h1 className="text-4xl mb-5 truncate">{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-center w-full h-screen"
              style={{
                backgroundImage: `url(${dompyong})`,
              }}
            ></div>
          </div>
        </div>
      </Layout>
    </>
  );
};
