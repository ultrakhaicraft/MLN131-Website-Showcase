import React from "react";
import './HomePage.css'

function Homepage() {
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
      <section className="mb-12">
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
      <section className="mb-12">
        <h2 className="mb-2 text-xl font-bold">More about us</h2>
        <p className="text-gray-700">
          Cổng thông tin về chủ nghĩa xã hội và chủ nghĩa Mác-Lênin,
          Cổng thông tin về chủ nghĩa xã hội và chủ nghĩa Mác-Lênin,
          Cổng thông tin về chủ nghĩa xã hội và chủ nghĩa Mác-Lênin,
          Cổng thông tin về chủ nghĩa xã hội và chủ nghĩa Mác-Lênin.
        </p>
      </section>

        {/* Bài viết nổi bật */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Các Bài viết nổi bật</h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          {/* Left column (2 stacked items) */}
          <div className="flex flex-col gap-6">
            <div className="h-40 bg-gray-300 rounded-md flex items-end p-2 text-sm">
              Tại sao giới trẻ hiện nay
            </div>
            <div className="h-40 bg-gray-300 rounded-md flex items-end p-2 text-sm">
              Tại sao giới trẻ hiện nay
            </div>
          </div>

          {/* Right column (spanning 2 cols) */}
          <div className="md:col-span-2 flex">
            <div className="h-full w-full bg-gray-300 rounded-md flex items-end p-2 text-sm min-h-[332px]">
              Tại sao giới trẻ hiện nay
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
