

const AIUsage = () => {
    return(
         <div className="min-h-screen bg-[#FAF7E6] px-6 py-10">
      {/* Header Card */}
      <div className="bg-[#FAF7E6] border-2 border-yellow-500 rounded-lg shadow-md p-8 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Artificial Intelligence Usage
        </h1>
        <p className="text-gray-700 mb-6">
          We would like to disclose our AI usage, which helped us create this
          project.
        </p>
        <div className="w-16 h-1 bg-yellow-500 mx-auto rounded"></div>
      </div>

      {/* Post Content */}
      <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Why we used AI
        </h2>
        <p className="text-gray-700 leading-relaxed">
          During the development of this project, AI tools were used to
          accelerate research, generate design ideas, and assist in writing code
          snippets. This allowed us to focus more on creativity and
          implementation while ensuring efficiency.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">
          What AI did for us
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Generated starter code for React components</li>
          <li>Suggested UI/UX improvements with Tailwind CSS</li>
          <li>Helped draft project documentation and explanations</li>
          <li>Supported in debugging and optimization</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900">
          Our Responsibility
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Although AI contributed to this project, every piece of code and
          content has been reviewed, edited, and validated by our team. We
          ensured that all final outputs align with the project requirements,
          ethical guidelines, and originality standards.
        </p>
      </div>
    </div>
    )
}

export default AIUsage;