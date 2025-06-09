import React from 'react'
import { Input } from "../../../@/components/ui/input";
import { Textarea } from "../../../@/components/ui/textarea";
import { Button } from "../../../@/components/ui/button";
import { Card, CardContent } from "../../../@/components/ui/card";
import Header from '../../_components/Header';
import Footer from '../../_components/Footer';

function Contact() {
  return (
    
    <div>
      <div>
        <Header/>
      </div>
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-emerald-600 mb-4">
        Contact Us
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        We'd love to hear from you! Whether you have a question, feedback, or need support — feel free to drop us a message.
      </p>

      <Card className="shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Name</label>
            <Input type="text" placeholder="Enter your full name" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Email</label>
            <Input type="email" placeholder="Enter your email" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Message</label>
            <Textarea rows="4" placeholder="How can we help you?" />
          </div>

          <Button className="w-full bg-emerald-600 hover:bg-emerald-800">
            Send Message
          </Button>
        </CardContent>
      </Card>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Or email us directly at{" "}
        <a href="mailto:support@expenseease.com" className="text-indigo-600 hover:underline">
          support@expenseease.com
        </a>
      </p>
    </div>
    <Footer/>      
      
    </div>
  )
}

export default Contact
