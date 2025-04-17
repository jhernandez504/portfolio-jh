'use client'

import { useEffect, useState, ReactNode } from 'react'

export default function GradientWrapper({ children }: { children: ReactNode }) {
  const [bgStyle, setBgStyle] = useState({})

  useEffect(() => {
    const fancyGradient = {
      backgroundImage: `linear-gradient(112.5deg, rgb(214, 214, 214) 0%, rgb(214, 214, 214) 10%, rgb(195, 195, 195) 10%, rgb(195, 195, 195) 53%, rgb(176, 176, 176) 53%, rgb(176, 176, 176) 55%, rgb(157, 157, 157) 55%, rgb(157, 157, 157) 60%, rgb(137, 137, 137) 60%, rgb(137, 137, 137) 88%, rgb(118, 118, 118) 88%, rgb(118, 118, 118) 91%, rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%), linear-gradient(157.5deg, rgb(214, 214, 214) 0%, rgb(214, 214, 214) 10%, rgb(195, 195, 195) 10%, rgb(195, 195, 195) 53%, rgb(176, 176, 176) 53%, rgb(176, 176, 176) 55%, rgb(157, 157, 157) 55%, rgb(157, 157, 157) 60%, rgb(137, 137, 137) 60%, rgb(137, 137, 137) 88%, rgb(118, 118, 118) 88%, rgb(118, 118, 118) 91%, rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%), linear-gradient(135deg, rgb(214, 214, 214) 0%, rgb(214, 214, 214) 10%, rgb(195, 195, 195) 10%, rgb(195, 195, 195) 53%, rgb(176, 176, 176) 53%, rgb(176, 176, 176) 55%, rgb(157, 157, 157) 55%, rgb(157, 157, 157) 60%, rgb(137, 137, 137) 60%, rgb(137, 137, 137) 88%, rgb(118, 118, 118) 88%, rgb(118, 118, 118) 91%, rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%), linear-gradient(90deg, rgb(195, 195, 195), rgb(228, 228, 228))`,
    }

    const chaosGradient = {
      backgroundImage: `linear-gradient(216deg, rgba(77, 77, 77,0.05) 0%, rgba(77, 77, 77,0.05) 25%, rgba(42, 42, 42,0.05) 25%, rgba(42, 42, 42,0.05) 38%, rgba(223, 223, 223,0.05) 38%, rgba(223, 223, 223,0.05) 75%, rgba(36, 36, 36,0.05) 75%, rgba(36, 36, 36,0.05) 100%), linear-gradient(44deg, rgba(128, 128, 128,0.05) 0%, rgba(128, 128, 128,0.05) 34%, rgba(212, 212, 212,0.05) 34%, rgba(212, 212, 212,0.05) 57%, rgba(25, 25, 25,0.05) 57%, rgba(25, 25, 25,0.05) 89%, rgba(135, 135, 135,0.05) 89%, rgba(135, 135, 135,0.05) 100%), linear-gradient(241deg, rgba(55, 55, 55,0.05) 0%, rgba(55, 55, 55,0.05) 14%, rgba(209, 209, 209,0.05) 14%, rgba(209, 209, 209,0.05) 60%, rgba(245, 245, 245,0.05) 60%, rgba(245, 245, 245,0.05) 69%, rgba(164, 164, 164,0.05) 69%, rgba(164, 164, 164,0.05) 100%), linear-gradient(249deg, rgba(248, 248, 248,0.05) 0%, rgba(248, 248, 248,0.05) 32%, rgba(148, 148, 148,0.05) 32%, rgba(148, 148, 148,0.05) 35%, rgba(202, 202, 202,0.05) 35%, rgba(202, 202, 202,0.05) 51%, rgba(181, 181, 181,0.05) 51%, rgba(181, 181, 181,0.05) 100%), linear-gradient(92deg, hsl(214, 0%, 11%), hsl(214, 0%, 11%))`,
    }

    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    const update = () => setBgStyle(mq.matches ? chaosGradient : fancyGradient)

    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <div style={bgStyle} className="min-h-screen h-full w-full flex flex-col">
      {children}
    </div>
  )
}
