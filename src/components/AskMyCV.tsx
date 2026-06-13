import { lazy, Suspense, useState } from 'react'

const AskMyCVDialog = lazy(() => import('./AskMyCVDialog'))

export default function AskMyCV() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-accent text-c-bg px-5 py-3 shadow-lg hover:bg-white transition-colors duration-200 font-medium"
        aria-label="Talk to AI Andrii"
      >
        <span className="text-lg" aria-hidden>🎙️</span>
        <span className="text-sm font-medium">Talk to AI Andrii</span>
      </button>

      {open && (
        <Suspense fallback={null}>
          <AskMyCVDialog onClose={() => setOpen(false)} />
        </Suspense>
      )}
    </>
  )
}
