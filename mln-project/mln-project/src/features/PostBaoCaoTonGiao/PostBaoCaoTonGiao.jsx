const PostBaoCaoTonGiao = () => {
  return (
    <div className="min-h-screen bg-[#FAF7E6]">
      <div className="max-w-8xl mx-auto px-6 py-8 bg-[#FAF7E6]">
        {/* Header */}
        <header className="mb-6">

          <p className="text-sm text-gray-600 border-b border-gray-300 pb-1">
            Thứ Sáu, 26/09/2025 | 22:30
          </p>
        </header>

        {/* Title */}
        <h1 className="mb-4 text-center text-2xl font-bold">
          Hiện trạng tôn giáo và chính sách tôn giáo hiện nay ở Việt Nam năm 2024

        </h1>

        {/* First Paragraph */}
        <PostParagraph text='Không gian mạng ngày nay đã trở thành một môi trường có vai trò quan trọng trong đời sống văn hóa - xã hội, trong đó bao gồm các hoạt động tôn giáo. 
        Nhiều tổ chức, cá nhân đã tận dụng môi trường này để truyền bá giáo lý, sinh hoạt tín ngưỡng cũng như các hoạt động gắn kết cộng đồng và các hoạt động nhân đạo khác như từ thiện,.. 
        Nhờ vậy mà đông đảo người dân, nhất là các bạn trẻ dễ dàng tiếp cận cũng từ đó mà các giá trị tích cực được lan tỏa trong xã hội.
        ' className='mb-4 font-semibold' />

       

        {/* First Image */}
        <div className="my-6">
          <div className="w-full h-48 bg-gray-300"></div>
          <p className="text-center text-sm mt-2 text-gray-700">
            Quang cảnh Lễ Công bố.
          </p>
        </div>

        
        {/* Second Image */}
        <div className="my-6">
          <div className="w-full h-48 bg-gray-300"></div>
          <p className="text-center text-sm mt-2 text-gray-700">
            Quang cảnh Lễ Công bố.
          </p>
        </div>


        

        {/* Second Image */}
        <div className="my-6">
          <div className="w-full h-48 bg-gray-300"></div>
          <p className="text-center text-sm mt-2 text-gray-700">
            Quang cảnh Lễ Công bố.
          </p>
        </div>

       
        {/* References Source*/}
        <div>
          <h1 className="text-2xl font-bold">Các nguồn thông tin</h1>
          <p className="text-sm text-gray-600 border-b border-gray-300 pb-1"></p>
          {/* Author Footer */}
          <header className="mb-6">          
            <p>
                https://vietnam.opendevelopmentmekong.net/topics/overview-of-religions-in-vietnam/
            </p>
          </header>
        </div>


      </div>
    </div>
  );
};

export default PostBaoCaoTonGiao;