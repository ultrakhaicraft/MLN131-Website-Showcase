import React from "react";
import "./HomePage.css";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import PostImage1 from "@/assets/Dang1.jpg";
import PostImage3 from "@/assets/PostImage3.jpg";
import HinhAnhHCM from "@/assets/HinhAnhHCM.png"
import IntroImage from "@/assets/hcm_3.jpg";
import KhaiNiemTonGiao from "@/assets/KhaiNiemTonGiao.jpeg"    
import HinhAnhLeHoi1 from "@/assets/HinhAnhLeHoi1.jpeg";


=======
import { motion } from "framer-motion";

import Family1 from "@/assets/PostImage1.jpg";
import PostImage1 from "@/assets/Dang1.jpg";
import HinhAnhHCM from "@/assets/HinhAnhHCM.png";
import cover2 from "@/assets/cover2.png";
>>>>>>> 68eb0aaf772ec5519fd3a5a8ed4bba501e98a21f

function Homepage() {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate("/about");
  };

  return (
    <div className="bg-[#FFFAE2] min-h-screen p-8">
      {/* Header Section */}
      <motion.div
        className="relative mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="relative z-20 mb-10 text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600 drop-shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hình ảnh của <br /> Đảng
        </motion.h1>

        <div className="flex items-center gap-8">
          <motion.img
            src={HinhAnhHCM}
            alt="Hình ảnh của Đảng"
            className="w-3/4 mx-auto rounded-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Giới thiệu */}
      <section className="mb-16">
        <motion.h2
          className="mb-4 text-5xl font-bold text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Cổng thông tin về dân tộc và tôn giáo của Việt Nam
<<<<<<< HEAD
        </h2>
        <p className="mb-4 text-xl">
          Chào mừng mọi người đển với cổng thông tin về dân tộc và tôn giáo của Việt Nam dành cho người Việt Nam
        </p>
        
        <div className="flex justify-center">
          <img className="rounded-md h-[400px] w-2/3" src={IntroImage} alt="Hình ảnh giới thiệu" /> 
        </div>
=======
        </motion.h2>
        <motion.p
          className="mb-6 text-xl text-center text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Chào mừng mọi người đến với cổng thông tin về dân tộc và tôn giáo của Việt Nam.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src={cover2}
            alt="cover2"
            className="object-cover shadow-xl cursor-pointer rounded-xl"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
>>>>>>> 68eb0aaf772ec5519fd3a5a8ed4bba501e98a21f
      </section>

      {/* Về chúng tôi */}
      <section className="my-20 text-center">
        <motion.h2
          className="mb-6 text-5xl font-bold text-red-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Về chúng tôi
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto mb-6 text-xl text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trong website này, các bạn có thể đọc qua các tài liệu và tin tức mới nhất về dân tộc và tôn giáo của Việt Nam.
        </motion.p>

        <ReadMoreButton onClick={handleReadMoreClick}>
          Nhấn vào đây để tìm hiểu thêm
        </ReadMoreButton>
      </section>

      {/* Bài viết nổi bật */}
      <section className="mb-20">
        <h2 className="mb-8 text-4xl font-bold section-title">Các Bài viết nổi bật</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Big Post */}
          <motion.div
            className="flex flex-col gap-2 md:col-span-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/post/1">
              <img
                src={PostImage3}
                alt="Family"
                className="w-full rounded-lg h-[600px] object-cover shadow-lg hover:brightness-90 transition"
              />
            </Link>
            <p className="text-lg font-semibold medium-text">
              Thủ tướng Phạm Minh Chính chỉ đạo thúc đẩy mạnh phát triển tại các vùng dân tộc thiểu số
            </p>
          </motion.div>

          {/* Side Posts */}
          <div className="flex flex-col gap-6">
            <motion.div
              className="flex flex-col gap-2"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/post/2">
                <img
<<<<<<< HEAD
                  src={HinhAnhLeHoi1}
                  alt="Family"
                  className="w-full h-[220px] rounded-md object-cover cursor-pointer hover:opacity-90 transition"
                />
              </Link>
              <p className="medium-text">Tăng cường quản lí nhà nước về hoạt động tôn giáo trên không gian mạng Việt Nam hiện nay</p>
              <div className="flex flex-col gap-2">
                <Link to="/post/3">
                  <img
                    src={KhaiNiemTonGiao}
                    alt="Family"
                    className="w-full  h-[220px] rounded-md object-cover cursor-pointer hover:opacity-90 transition"
                  />
                </Link>
                <p className="medium-text">Thông qua thời kỳ quá độ, làm sao để tôn giáo cần được quản lý chặt chẽ hơn để đảm bảo an ninh trật tự xã hội ?</p>
              </div>
            </div>
=======
                  src={PostImage1}
                  alt="Post 2"
                  className="w-full h-[220px] rounded-lg object-cover shadow-md hover:brightness-90 transition"
                />
              </Link>
              <p className="font-medium medium-text">
                Tăng cường quản lí nhà nước về hoạt động trên không gian mạng Việt Nam hiện nay
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-2"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/post/3">
                <img
                  src={PostImage1}
                  alt="Post 3"
                  className="w-full h-[220px] rounded-lg object-cover shadow-md hover:brightness-90 transition"
                />
              </Link>
              <p className="font-medium medium-text">
                Thông qua thời kỳ quá độ, làm sao để tôn giáo cần được quản lý chặt chẽ hơn để đảm bảo an ninh trật tự xã hội?
              </p>
            </motion.div>
>>>>>>> 68eb0aaf772ec5519fd3a5a8ed4bba501e98a21f
          </div>
        </div>
      </section>
    </div>
  );
}

const ReadMoreButton = ({ children, onClick }) => {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.button
        onClick={onClick}
        className="px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-red-500 to-yellow-500 hover:from-yellow-500 hover:to-red-500 hover:shadow-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {children} <span className="ml-2">→</span>
      </motion.button>
    </motion.div>
  );
};

export default Homepage;
