'use client'
import React from 'react'

const Industries = () => {
  return (
    <div className="bg-white dark:bg-gray-950 py-16 transition-colors">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white">
            Industries Engagement
          </h2>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          
          {/* Left Column - Large Rectangle */}
          <div className="lg:col-span-2">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96 lg:h-[400px] flex items-center justify-center transition-colors">
              <div className="text-gray-500 dark:text-gray-200 text-2xl font-medium">
                Industry Focus
              </div>
            </div>
          </div>
          
          {/* Right Column - Two Rows of Four Rectangles */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {/* First Row */}
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-44 lg:h-[12rem] flex items-center justify-center transition-colors">
                <div className="text-gray-500 dark:text-gray-200 text-sm font-medium text-center px-2">
                  Telecom
                </div>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-44 lg:h-[12rem] flex items-center justify-center transition-colors">
                <div className="text-gray-500 dark:text-gray-200 text-sm font-medium text-center px-2">
                  Aviation
                </div>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-44 lg:h-[12rem] flex items-center justify-center transition-colors">
                <div className="text-gray-500 dark:text-gray-200 text-sm font-medium text-center px-2">
                  Fintech
                </div>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-44 lg:h-[12rem] flex items-center justify-center transition-colors">
                <div className="text-gray-500 dark:text-gray-200 text-sm font-medium text-center px-2">
                  Enterprise
                </div>
              </div>
              
              {/* Second Row */}
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-44 lg:h-[12rem] flex items-center justify-center transition-colors">
                <div className="text-gray-500 dark:text-gray-200 text-sm font-medium text-center px-2">
                  Healthcare
                </div>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-44 lg:h-[12rem] flex items-center justify-center transition-colors">
                <div className="text-gray-500 dark:text-gray-200 text-sm font-medium text-center px-2">
                  Retail
                </div>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-44 lg:h-[12rem] flex items-center justify-center transition-colors">
                <div className="text-gray-500 dark:text-gray-200 text-sm font-medium text-center px-2">
                  Education
                </div>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-44 lg:h-[12rem] flex items-center justify-center transition-colors">
                <div className="text-gray-500 dark:text-gray-200 text-sm font-medium text-center px-2">
                  Government
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Industries
