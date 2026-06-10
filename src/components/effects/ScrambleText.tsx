import { useEffect, useRef, useState } from 'react'

interface ScrambleTextProps {
  text: string
  className?: string
}

export default function ScrambleText({ text, className = '' }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const elementRef = useRef<HTMLHeadingElement>(null)
  const hasTriggered = useRef(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered.current) {
            hasTriggered.current = true
            scramble()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [text])

  const scramble = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let iterations = 0

    const interval = setInterval(() => {
      let output = ''
      for (let i = 0; i < text.length; i++) {
        if (i < iterations) {
          output += text[i]
        } else {
          output += chars[Math.floor(Math.random() * 36)]
        }
      }
      setDisplayText(output)
      iterations += 1 / 3

      if (iterations >= text.length) {
        clearInterval(interval)
        setDisplayText(text)
      }
    }, 30)
  }

  return (
    <h2 ref={elementRef} className={className}>
      {displayText}
    </h2>
  )
}
