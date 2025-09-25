import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-5 py-3 text-white bg-[#454545] shadow-md z-50">
      {/* Logo */}
      <div className="text-3xl font-bold">
        <Link to="/">Chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ chủ nghĩa xã hội</Link>
      </div>

      {/* Menu */}
      <div className="flex justify-center gap-6 text-lg">
        <Link to="/" className="hover:text-blue-400">Trang chủ</Link>
        <Link to="/about" className="hover:text-blue-400">Về chúng tôi</Link>
        <Link to="/news" className="hover:text-blue-400">Tư liệu nổi bật</Link>
        <Link to ="/ai_usage" className="hover:text-blue-400">AI Usage</Link>
      </div>
    </nav>
  );
}

export default Navbar;
