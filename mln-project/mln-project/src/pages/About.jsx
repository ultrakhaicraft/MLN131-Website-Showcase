import React from "react";
import './About.css';

function About() {
  return (
    <div className="about-us p-8 text-center">
      <h1 className="text-4xl font-bold text-black relative inline-block mt-14">
        About our project
        {/* extra thin line below */}
        <span className="block w-3/4 mx-auto h-0.5 bg-black mt-2"></span>
      </h1>
      <p className="mt-6 text-xl font-thick">Đây là sản phẩm mang tính chất giáo dục về Đảng, nhất là giáo dục về gia đình trong bối cảnh của Đảng
        Mục đích của website này là giúp người đọc có thể hiểu được tư tưởng Đảng một cách tốt nhất.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center max-w-6xl mx-auto">
        <div className="showcase-image bg-gray-300">
          <img
            src="https://via.placeholder.com/500x250"
            alt="Project 1"
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
        <div className="showcase-image bg-gray-300">
          <img
            src="https://via.placeholder.com/500x250"
            alt="Project 2"
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-black relative inline-block mt-14">
        Our purpose
        <span className="block w-3/4 mx-auto h-0.5 bg-black mt-2"></span>
      </h1>
      <p className="mt-6 text-xl font-thick">
        Mục đích của website này là giúp người đọc có thể hiểu được tư tưởng Đảng một cách tốt nhất.
      </p>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-black relative inline-block mt-14">
        Our Team
        <span className="block w-3/4 mx-auto h-0.5 bg-black mt-2"></span>
        </h1>

              {/* Team grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-gray-300 rounded-full"></div>
            <p className="mt-2 font-semibold">Trần Lâm Khánh</p>
            <p className="mt-2 font-light">Role</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-gray-300 rounded-full"></div>
            <p className="mt-2 font-semibold">Trần Nguyễn Thu An </p>
            <p className="mt-2 font-light">Content Writer</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-gray-300 rounded-full"></div>
            <p className="mt-2 font-semibold">Nguyễn Đức Thành</p>
            <p className="mt-2 font-light">Frontend</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-gray-300 rounded-full"></div>
            <p className="mt-2 font-semibold">Phạm Đình Ngân</p>
            <p className="mt-2 font-light">Role</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 bg-gray-300 rounded-full"></div>
            <p className="mt-2 font-semibold">Phan Quang Khải</p>
            <p className="mt-2 font-light">Leader, Frontend</p>
          </div>
        </div>
      </div>

    </div>

    
  );
}

export default About;
