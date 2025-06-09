import React from 'react'

function Hero() {
  return (
<section className="bg-off-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="max-w-prose">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
        Take control of your
        <strong className="text-emerald-500">   money </strong>
        smartly.
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
      Track, save, and grow — effortlessly with ExpenseEase.
      </p>

      <div className="mt-4 flex gap-4 sm:mt-6">
        <a
          className="inline-block rounded border border-emerald-600 bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-emerald-300 hover:text-black"
          href="/sign-in"
        >
          Get Started
        </a>

        
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
