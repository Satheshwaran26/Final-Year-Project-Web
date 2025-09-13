function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-neutral-900">
                  <path d="M12 2L2 7l10 5 10-5-10-5Z" strokeWidth="1.5"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="1.5"/>
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">FYP Web</h3>
                <p className="text-sm text-neutral-600">Building Tomorrow's Web</p>
              </div>
            </div>
            <p className="text-neutral-600 max-w-md mb-6">
              We specialize in creating modern, responsive web applications, mobile apps, and AI solutions that drive business growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-600">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeWidth="1.5"/>
                </svg>
              </a>
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-600">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" strokeWidth="1.5"/>
                </svg>
              </a>
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-600">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeWidth="1.5"/>
                  <rect x="2" y="9" width="4" height="12" strokeWidth="1.5"/>
                  <circle cx="4" cy="4" r="2" strokeWidth="1.5"/>
                </svg>
              </a>
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-600">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeWidth="1.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">App Development</a></li>
              <li><a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">AI / ML Solutions</a></li>
              <li><a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Ethical Hacking</a></li>
              <li><a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-neutral-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-500">
                  <path d="M3 7l9 6 9-6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" strokeWidth="1.5"/>
                  <path d="M3 7l9 6 9-6" strokeWidth="1.5"/>
                </svg>
                hello@fypweb.com
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-500">
                  <path d="M15 2H9a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" strokeWidth="1.5"/>
                  <path d="M11 19h2" strokeWidth="1.5"/>
                </svg>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-500">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="1.5"/>
                  <circle cx="12" cy="10" r="3" strokeWidth="1.5"/>
                </svg>
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-5 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              © 2024 FYP Web. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
