// src/pages/Post.jsx - Page of Post
import React from "react";
import PostImage from "../components/PostImage";
import PostParagraph from "../components/PostParagraph";

const Post = () => {
  return (
    <div className="min-h-screen bg-[#FAF7E6]">
      <div className="max-w-8xl mx-auto px-6 py-8 bg-[#FAF7E6]">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Bai Viet</h1>
          <p className="text-sm text-gray-600 border-b border-gray-300 pb-1">
            Thứ hai, 15/09/2025 | 12:30
          </p>
        </header>

        {/* Title */}
        <h2 className="mb-4 text-center text-2xl font-bold">
          Tại sao giới trẻ nga
        </h2>

        {/* First Paragraph */}
        <PostParagraph text='Ngày 13/9, đồng chí Nguyễn Xuân Thắng, Ủy viên Bộ Chính trị, Giám đốc
          Học viện Chính trị quốc gia Hồ Chí Minh, Chủ tịch Hội đồng Lý luận
          Trung ương đã trao Bằng công nhận trường Chính trị tỉnh Sơn La đạt
          chuẩn mức 1.' className='mb-4 font-semibold'/>

        {/* First Image */}
        <div className="my-6">
          <div className="w-full h-48 bg-gray-300"></div>
          <p className="text-center text-sm mt-2 text-gray-700">
            Quang cảnh Lễ Công bố.
          </p>
        </div>

        {/* Second Paragraph */}
        <PostParagraph text='Ngày 13/9, đồng chí Nguyễn Xuân Thắng, Ủy viên Bộ Chính trị, Giám đốc
          Học viện Chính trị quốc gia Hồ Chí Minh, Chủ tịch Hội đồng Lý luận
          Trung ương đã trao Bằng công nhận trường Chính trị tỉnh Sơn La đạt
          chuẩn mức 1.' className='mb-6'/>

        {/* Second Image */}
        <div className="my-6">
          <div className="w-full h-48 bg-gray-300"></div>
          <p className="text-center text-sm mt-2 text-gray-700">
            Quang cảnh Lễ Công bố.
          </p>
        </div>

        {/* Third Paragraph */}
        <PostParagraph text='Phát biểu tại Lễ công bố Quyết định và trao Bằng công nhận trường
          Chính trị tỉnh Sơn La đạt chuẩn mức 1 diễn ra sáng nay 13/9, đồng chí
          Nguyễn Xuân Thắng, Ủy viên Bộ Chính trị, Giám đốc Học viện Chính trị
          quốc gia Hồ Chí Minh nhấn mạnh: “Với những thành quả quan trọng, những
          tiền đề vững vàng và đặc biệt là với ý chí vươn lên mạnh mẽ, quyết tâm,
          tập thể cán bộ, viên chức của trường sẽ đoàn kết, chung sức, đồng lòng,
          tiếp tục thực hiện thắng lợi các chỉ tiêu, nhiệm vụ xây trường đạt
          chuẩn mức 2; góp phần xây dựng tỉnh Sơn La ngày càng phát triển bền
          vững, hiện đại, văn minh, giàu đẹp và bản sắc' className='mb-6'/>
      </div>

      {/* References Source*/}
      <div>
        <p className="text-sm text-gray-600 border-b border-gray-300 pb-1"></p>
        <h1 className="text-2xl font-bold">References Source</h1>
        <h1 className="text-2xl font-bold">References Source</h1>
        <h1 className="text-2xl font-bold">References Source</h1>
      </div>
      {/* Author Footer */}
        <header className="mb-6">
          
          <p className="text-sm text-gray-600 border-b border-gray-300 pb-1">
            
          </p>
          <h1 className="text-2xl font-bold">Author Name</h1>
        </header>

    </div>
  );
};

export default Post;
