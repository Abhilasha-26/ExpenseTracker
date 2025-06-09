import React from 'react'
import Header from '../../_components/Header'
import Footer from '../../_components/Footer'
import { Separator} from '../../../@/components/ui/separator'
import {Card ,CardContent} from '../../../@/components/ui/card'
import {Avatar,AvatarFallback} from '../../../@/components/ui/avatar'


function About_US() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
 <div className="min-h-screen px-6 py-8 space-y-12">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-900">Expense Ease</h1>
        <p className="mt-2 text-muted-foreground text-lg">
          Making expense tracking effortless and insightful.
        </p>
      </div>

      <Separator />

      {/* About Box */}
      <Card className="max-w-4xl mx-auto shadow-md">
        <CardContent className="py-6 px-8">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            We are a passionate team of developers and designers dedicated to helping you
            manage your finances with ease. Whether you're a student, freelancer, or working
            professional, Expense Ease gives you the tools to budget, track, and save—all in one place.
          </p>
        </CardContent>
      </Card>

      {/* Testimonials */}
      <section className="bg-muted p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-center mb-8">What People Are Saying</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Testimonial 1 */}
          <Card className="w-72 text-center">
            <CardContent className="pt-6 space-y-4">
              <p className="italic text-sm text-muted-foreground">
                "This app made me realize how much I was overspending. Super useful!"
              </p>
              <Avatar className="mx-auto">
                <AvatarFallback className="bg-pink-600">RS</AvatarFallback>
              </Avatar>
              <p className="font-medium">Riya S.</p>
              <p className="text-xs text-muted-foreground">Student</p>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="w-72 text-center">
            <CardContent className="pt-6 space-y-4">
              <p className="italic text-sm text-muted-foreground">
                "The perfect solution for my freelance finances. I love the dashboard!"
              </p>
              <Avatar className="mx-auto">
                <AvatarFallback className='bg-green-600'>AT</AvatarFallback>
              </Avatar>
              <p className="font-medium">Arjun T.</p>
              <p className="text-xs text-muted-foreground">Freelancer</p>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card className="w-72 text-center">
            <CardContent className="pt-6 space-y-4">
              <p className="italic text-sm text-muted-foreground">
                "Simple, clean UI and actually helps me save money. Highly recommended!"
              </p>
              <Avatar className="mx-auto">
                <AvatarFallback className='bg-blue-600'>MV</AvatarFallback>
              </Avatar>
              <p className="font-medium">Meena V.</p>
              <p className="text-xs text-muted-foreground">Working Mom</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>        

      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default About_US
