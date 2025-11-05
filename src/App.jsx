import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card'
import FeedbackForm from './components/apps/FeedbackForm'
import ImageSlideshow from './components/apps/ImageSlideshow'
import TodoList from './components/apps/TodoList'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            React + shadcn/ui Demo Apps
          </h1>
          <p className="text-gray-600">
            Three different small applications built with shadcn/ui components
          </p>
        </div>

        <Tabs defaultValue="feedback" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="feedback">Feedback Form</TabsTrigger>
            <TabsTrigger value="slideshow">Image Slideshow</TabsTrigger>
            <TabsTrigger value="todo">Todo List</TabsTrigger>
          </TabsList>

          <TabsContent value="feedback" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Feedback Form App</CardTitle>
                <p className="text-gray-600">
                  Collect user feedback with a clean form interface using Card, Input, Textarea, and Button components.
                </p>
              </CardHeader>
              <CardContent>
                <FeedbackForm />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="slideshow" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Image Slideshow App</CardTitle>
                <p className="text-gray-600">
                  Browse through images with navigation controls using Card and Button components.
                </p>
              </CardHeader>
              <CardContent>
                <ImageSlideshow />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="todo" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Todo List App</CardTitle>
                <p className="text-gray-600">
                  Manage your tasks with add, complete, and delete functionality using Input, Button, Card, and Checkbox components.
                </p>
              </CardHeader>
              <CardContent>
                <TodoList />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Built with React, Vite, Tailwind CSS, and shadcn/ui components</p>
        </footer>
      </div>
    </div>
  )
}

export default App
