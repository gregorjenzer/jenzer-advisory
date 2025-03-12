"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button onClick={openModal} className="text-sm text-muted-foreground hover:text-accent hover:underline">
        Disclaimer
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white text-foreground rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold">Disclaimer</h2>
              <Button variant="ghost" size="icon" onClick={closeModal} className="h-8 w-8">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <div className="p-6 space-y-4">
              <p>
                The content presented on this website is provided by Jenzer Advisory FZ-LLC for informational purposes
                only.
              </p>

              <div className="space-y-2">
                <h3 className="font-bold">1. Professional Experience & Results</h3>
                <p>
                  The case studies, success metrics, and operational insights shared on this site reflect the personal
                  experience and leadership of Dr. Gregor Jenzer in his previous roles at global energy and industrial
                  organizations.
                </p>
                <p>
                  While these results are real, they do not represent endorsements or formal client testimonials from
                  the companies involved.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold">2. No Guarantees</h3>
                <p>
                  While Jenzer Advisory FZ-LLC brings extensive experience to every engagement, past performance does
                  not guarantee future results. Every organization is unique, and consulting outcomes depend on multiple
                  variables including implementation, market conditions, and team readiness.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold">3. External Links</h3>
                <p>
                  This website may contain links to third-party websites or resources (e.g., LinkedIn, Twitter). Jenzer
                  Advisory FZ-LLC is not responsible for their content or privacy practices.
                </p>
              </div>
            </div>
            <div className="flex justify-end p-4 border-t">
              <Button onClick={closeModal}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

