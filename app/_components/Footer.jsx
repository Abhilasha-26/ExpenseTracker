import React from 'react'
import { Separator } from "../../@/components/ui/separator"
import { Github, Linkedin, Mail } from "lucide-react"

function Footer() {
  return (
    <div>
    <footer className="mt-1 px-6">
      <Separator className="mb-6" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground py-4">
        {/* Left Side */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-medium text-primary">ExpenseEase</span>. All rights reserved.
        </p>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:contact@expenseease.com" className="hover:text-primary">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>        
    </div>

  )
}

export default Footer
