'use client'

import React from 'react'
import { Card, CardContent } from '../../../../@/components/ui/card'
import { Avatar, AvatarFallback } from "../../../../@/components/ui/avatar"
import { Separator } from "../../../../@/components/ui/separator"

function AboutUs() {
  return (
    <div className="min-h-screen px-6 py-12 space-y-16 ">
      
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-green-800 drop-shadow-sm">Expense Ease</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Making expense tracking effortless, insightful, and beautifully simple.
        </p>
      </div>

      <Separator className="max-w-4xl mx-auto" />

      {/* About Box */}
      <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-white/70 border border-green-200 shadow-xl rounded-2xl">
        <CardContent className="py-8 px-10 space-y-4">
          <h2 className="text-3xl font-semibold text-green-900">Who We Are</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            We're a passionate team of developers and designers committed to helping you take charge of your finances.
            Whether you're a student, freelancer, or a working professional—Expense Ease makes budgeting, tracking, and saving easier than ever.
          </p>
        </CardContent>
      </Card>

      {/* Testimonials */}
      <section className="bg-muted/40 p-10 rounded-3xl shadow-inner">
        <h2 className="text-3xl font-semibold text-center text-green-800 mb-10">What People Are Saying</h2>
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Testimonial 1 */}
          <Card className="w-72 text-center shadow-md transition-transform hover:scale-105 duration-200">
            <CardContent className="pt-6 space-y-4">
              <p className="italic text-sm text-muted-foreground">
                "This app made me realize how much I was overspending. Super useful!"
              </p>
              <Avatar className="mx-auto">
                <AvatarFallback className="bg-pink-600 text-white">RS</AvatarFallback>
              </Avatar>
              <p className="font-semibold text-green-900">Riya S.</p>
              <p className="text-xs text-muted-foreground">Student</p>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="w-72 text-center shadow-md transition-transform hover:scale-105 duration-200">
            <CardContent className="pt-6 space-y-4">
              <p className="italic text-sm text-muted-foreground">
                "The perfect solution for my freelance finances. I love the dashboard!"
              </p>
              <Avatar className="mx-auto">
                <AvatarFallback className='bg-green-600 text-white'>AT</AvatarFallback>
              </Avatar>
              <p className="font-semibold text-green-900">Arjun T.</p>
              <p className="text-xs text-muted-foreground">Freelancer</p>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card className="w-72 text-center shadow-md transition-transform hover:scale-105 duration-200">
            <CardContent className="pt-6 space-y-4">
              <p className="italic text-sm text-muted-foreground">
                "Simple, clean UI and actually helps me save money. Highly recommended!"
              </p>
              <Avatar className="mx-auto">
                <AvatarFallback className='bg-blue-600 text-white'>MV</AvatarFallback>
              </Avatar>
              <p className="font-semibold text-green-900">Meena V.</p>
              <p className="text-xs text-muted-foreground">Working Mom</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
