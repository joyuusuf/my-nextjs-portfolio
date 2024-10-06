import React from 'react'

const EmailSection = () => {
  return (
    <section>
                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
                <div className='z-10'>
                    <h5 className="text-xl font-bold text-white my-2">
                        Let's connect
                    </h5>

                    <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                        I'm currently looking for new opportunities, my inbox is always
                        open. Whether you have a question or just want to say hi, I'll
                        try my best to get back to you!
                    </p>
                </div>
    </section>
  )
}

export default EmailSection