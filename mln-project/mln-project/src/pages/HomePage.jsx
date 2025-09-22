import React from "react";
import './HomePage.css'
import { Link } from "react-router-dom";
import Family1 from "../assets/Family1.jpg"; // adjust path if needed


function Homepage() {

  const handleReadMoreClick = () => {
    alert("Nút bấm đã được nhấn!");
    // Bạn có thể thêm logic điều hướng hoặc các hành động khác ở đây
  };

  return (
    <div className="bg-[#FFFAE2] min-h-screen p-8">
      <div className="relative mb-12">
        {/* Title */}
        <h1 className="massive-text mb-10 font-extrabold leading-tight relative z-20">
          Hình ảnh của <br /> Đảng
        </h1>

        {/* Content row */}
        <div className="flex items-center gap-8">
          {/* Red part */}
          <div className="flex flex-col gap-4 w-1/3">
            <div className="colored-text px-4 py-3 font-semibold bg-red-600 text-white">
              Thể hiện về tinh thần vững nước của Đảng ta
            </div>
            <div className="colored-text px-4 py-3 font-semibold bg-red-600 text-white">
              Truyền tải tinh thần yêu nước cho giới trẻ
            </div>
          </div>

          {/* Gray rectangle (image) */}
          <div className="flex-1">
            <div className="title-image bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Thông tin giới thiệu */}
      <section className="mb-12 ">
        <h2 className="mb-4 text-2xl font-bold">
          Cổng thông tin về chủ nghĩa xã hội và chủ nghĩa Mác-Lênin
        </h2>
        <p className="mb-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Gravida elit malesuada ut
          aliquet. Ullamcorper ultrices tortor est semper tristique volutpat
          amet massa arcu. Elit lorem id est eleifend arcu tincidunt sit. At in
          morbi mauris molestie scelerisque lectus. Sed convallis nibh viverra
          mattis egestas faucibus. Aenean adipiscing posuere bibendum leo
          malesuada ut facilisi. Neque diam sit amet eros et molestie arcu
          ultrices.
        </p>
        {/* TODO: Bigger image height and smaller image width */}
        <div className="flex justify-center">
          <div className="h-[400px] w-2/3 bg-gray-300 rounded-md"></div>
        </div>
      </section>

      {/* More about us */}
      <section className="more-about-us">
        <h2 className="section-title">More about us</h2>
        <p className="section-text">
          Cổng thông tin về chủ nghĩa xã hội và chủ nghĩa Mác-Lênin,
          Cổng thông tin về chủ nghĩa xã hội và chủ nghĩa Mác-Lênin,
          Cổng thông tin về chủ nghĩa xã hội và chủ nghĩa Mác-Lênin,
          Cổng thông tin về chủ nghĩa xã hội và chủ nghĩa Mác-Lênin.
        </p>
        <ReadMoreButton onClick={handleReadMoreClick}>
                            MORE ABOUT US
        </ReadMoreButton>
      </section>

        {/* Bài viết nổi bật */}
<section className="mb-20">
  <h2 className="mb-6 text-2xl font-bold">Các Bài viết nổi bật</h2>

  <div className="grid gap-6 md:grid-cols-3">
    {/* Big grey box first */}
    <div className="md:col-span-2 flex flex-col gap-2">
      <Link to="/post">
        <img
          src={Family1}
          alt="Family"
          className="w-full rounded-md min-h-[332px] object-cover cursor-pointer hover:opacity-90 transition"
        />
      </Link>
      <p className="text-sm">Tại sao giới trẻ hiện nay</p>
    </div>

    {/* Smaller stacked boxes */}
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="h-40 bg-gray-300 rounded-md"></div>
        <p className="text-sm">Tại sao giới trẻ hiện nay</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-40 bg-gray-300 rounded-md"></div>
        <p className="text-sm">Tại sao giới trẻ hiện nay</p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

const ReadMoreButton = ({ children, onClick }) => {
            return (
                <div className="read-more-container">
                    <button onClick={onClick} className="read-more-button">
                        <span>{children}</span>
                        <span className="arrow">→</span>
                    </button>
                </div>
            );
        };


export default Homepage;
