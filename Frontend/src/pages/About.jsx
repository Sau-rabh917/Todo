import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-cyan-900 mb-4 transition-all duration-500 hover:scale-105">About Todo App</h1>
          <p className="text-xl text-gray-600 transition-all duration-300 hover:text-cyan-700">Your Personal Task Management Companion</p>
        </div>

        {/* Why Todos Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          <h2 className="text-3xl font-bold text-cyan-800 mb-6 transition-all duration-300 hover:text-cyan-600">Why Do We Make Todos?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="transform transition-all duration-300 hover:scale-105 hover:bg-cyan-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-700 mb-4 transition-all duration-200 hover:text-cyan-600">🎯 Organization & Structure</h3>
              <p className="text-gray-700 leading-relaxed transition-all duration-200">
                Todos help us organize our thoughts and tasks in a structured way. Instead of keeping everything in our heads, 
                we can visually see what needs to be done, making it easier to prioritize and manage our time effectively.
              </p>
            </div>
            
            <div className="transform transition-all duration-300 hover:scale-105 hover:bg-cyan-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-700 mb-4 transition-all duration-200 hover:text-cyan-600">🧠 Reduce Mental Load</h3>
              <p className="text-gray-700 leading-relaxed transition-all duration-200">
                Our brains can only hold so much information at once. By writing down our tasks, we free up mental space 
                for more important thinking and creative work, reducing stress and anxiety.
              </p>
            </div>
            
            <div className="transform transition-all duration-300 hover:scale-105 hover:bg-cyan-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-700 mb-4 transition-all duration-200 hover:text-cyan-600">✅ Track Progress</h3>
              <p className="text-gray-700 leading-relaxed transition-all duration-200">
                Todos provide a clear way to track what we've accomplished. Each completed task gives us a sense of 
                achievement and motivates us to continue working towards our goals.
              </p>
            </div>
            
            <div className="transform transition-all duration-300 hover:scale-105 hover:bg-cyan-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-700 mb-4 transition-all duration-200 hover:text-cyan-600">⏰ Time Management</h3>
              <p className="text-gray-700 leading-relaxed transition-all duration-200">
                With a clear list of tasks, we can better estimate how long things will take and plan our days more 
                efficiently. This helps prevent procrastination and ensures important tasks don't get forgotten.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          <h2 className="text-3xl font-bold text-cyan-800 mb-6 transition-all duration-300 hover:text-cyan-600">Benefits of Using Todo Lists</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4 transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 p-4 rounded-lg">
              <div className="bg-cyan-100 p-3 rounded-full transition-all duration-300 hover:bg-cyan-200 hover:scale-110">
                <span className="text-cyan-700 text-xl">📈</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-200 hover:text-cyan-700">Increased Productivity</h3>
                <p className="text-gray-600 transition-all duration-200">
                  Studies show that people who use todo lists are 25% more productive than those who don't. 
                  Having a clear roadmap of tasks helps you stay focused and accomplish more.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 p-4 rounded-lg">
              <div className="bg-green-100 p-3 rounded-full transition-all duration-300 hover:bg-green-200 hover:scale-110">
                <span className="text-green-700 text-xl">😌</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-200 hover:text-green-700">Reduced Stress</h3>
                <p className="text-gray-600 transition-all duration-200">
                  When you know exactly what needs to be done, you eliminate the anxiety of forgetting important tasks. 
                  This leads to better mental health and work-life balance.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 p-4 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full transition-all duration-300 hover:bg-blue-200 hover:scale-110">
                <span className="text-blue-700 text-xl">🎯</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-200 hover:text-blue-700">Better Goal Achievement</h3>
                <p className="text-gray-600 transition-all duration-200">
                  Breaking down large goals into smaller, manageable tasks makes them more achievable. 
                  Each completed todo brings you closer to your bigger objectives.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 p-4 rounded-lg">
              <div className="bg-purple-100 p-3 rounded-full transition-all duration-300 hover:bg-purple-200 hover:scale-110">
                <span className="text-purple-700 text-xl">🔄</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-200 hover:text-purple-700">Improved Accountability</h3>
                <p className="text-gray-600 transition-all duration-200">
                  Writing down tasks creates a commitment to yourself. You're more likely to follow through 
                  when you've made a concrete plan rather than just thinking about it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Use Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          <h2 className="text-3xl font-bold text-cyan-800 mb-6 transition-all duration-300 hover:text-cyan-600">How to Use This Todo App</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-cyan-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-cyan-100 hover:shadow-lg">
              <div className="text-4xl mb-4 transition-all duration-300 hover:scale-110">📝</div>
              <h3 className="text-lg font-semibold text-cyan-800 mb-2 transition-all duration-200 hover:text-cyan-600">Create Tasks</h3>
              <p className="text-gray-600 text-sm transition-all duration-200">
                Add new todos with clear titles and descriptions to capture exactly what needs to be done.
              </p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-yellow-100 hover:shadow-lg">
              <div className="text-4xl mb-4 transition-all duration-300 hover:scale-110">✏️</div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2 transition-all duration-200 hover:text-yellow-600">Edit & Update</h3>
              <p className="text-gray-600 text-sm transition-all duration-200">
                Modify your todos as priorities change or new information comes to light.
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-green-100 hover:shadow-lg">
              <div className="text-4xl mb-4 transition-all duration-300 hover:scale-110">🗑️</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2 transition-all duration-200 hover:text-green-600">Complete & Delete</h3>
              <p className="text-gray-600 text-sm transition-all duration-200">
                Mark tasks as done and remove them to keep your list clean and focused.
              </p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          <h2 className="text-3xl font-bold text-cyan-800 mb-6 transition-all duration-300 hover:text-cyan-600">Pro Tips for Effective Todo Management</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3 transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 p-3 rounded-lg">
              <span className="text-cyan-600 font-bold transition-all duration-200 hover:scale-110">1.</span>
              <p className="text-gray-700 transition-all duration-200">
                <strong>Be Specific:</strong> Instead of "work on project," write "review chapter 3 of the report"
              </p>
            </div>
            
            <div className="flex items-start space-x-3 transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 p-3 rounded-lg">
              <span className="text-cyan-600 font-bold transition-all duration-200 hover:scale-110">2.</span>
              <p className="text-gray-700 transition-all duration-200">
                <strong>Prioritize:</strong> Focus on the most important tasks first, even if they're not the most urgent
              </p>
            </div>
            
            <div className="flex items-start space-x-3 transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 p-3 rounded-lg">
              <span className="text-cyan-600 font-bold transition-all duration-200 hover:scale-110">3.</span>
              <p className="text-gray-700 transition-all duration-200">
                <strong>Break Down Large Tasks:</strong> Split complex projects into smaller, manageable steps
              </p>
            </div>
            
            <div className="flex items-start space-x-3 transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 p-3 rounded-lg">
              <span className="text-cyan-600 font-bold transition-all duration-200 hover:scale-110">4.</span>
              <p className="text-gray-700 transition-all duration-200">
                <strong>Review Regularly:</strong> Take time each day to review and update your todo list
              </p>
            </div>
            
            <div className="flex items-start space-x-3 transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 p-3 rounded-lg">
              <span className="text-cyan-600 font-bold transition-all duration-200 hover:scale-110">5.</span>
              <p className="text-gray-700 transition-all duration-200">
                <strong>Celebrate Small Wins:</strong> Acknowledge completed tasks to maintain motivation
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 transform transition-all duration-500 hover:scale-105">
          <a 
            href="/homepage" 
            className="inline-block bg-cyan-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-800 hover:shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Start Managing Your Todos Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
