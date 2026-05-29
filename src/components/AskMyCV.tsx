import { useState, useCallback } from 'react'
import {
  ConversationProvider,
  useConversationControls,
  useConversationStatus,
  useConversationMode,
} from '@elevenlabs/react'

const AGENT_ID = import.meta.env.VITE_ELEVENLABS_AGENT_ID as string | undefined

function AskMyCVInner({ onClose }: { onClose: () => void }) {
  const controls = useConversationControls()
  const { status, message } = useConversationStatus()
  const { isSpeaking } = useConversationMode()
  const [error, setError] = useState<string | null>(null)

  const isActive = status === 'connected' || status === 'connecting'

  const start = useCallback(async () => {
    if (!AGENT_ID) {
      setError('Missing VITE_ELEVENLABS_AGENT_ID in .env')
      return
    }
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true })
      controls.startSession({ agentId: AGENT_ID, connectionType: 'webrtc' })
      setError(null)
    } catch {
      setError('Microphone permission denied')
    }
  }, [controls])

  const stop = useCallback(() => {
    controls.endSession()
  }, [controls])

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-black">Talk to AI Andrii</h3>
            <p className="text-xs text-gray-500">Voice chat about my experience</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-black text-2xl leading-none">×</button>
        </div>

        <div className="flex flex-col items-center gap-4 py-6">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl transition-all ${isActive ? 'bg-red-100 animate-pulse' : 'bg-gray-100'}`}>
            {isActive ? '🔴' : '🎙️'}
          </div>
          <p className="text-sm text-gray-600 text-center">
            {status === 'connecting' && 'Connecting…'}
            {status === 'connected' && (isSpeaking ? 'Agent is speaking…' : 'Listening…')}
            {status === 'disconnected' && 'Press start, then ask anything about my work.'}
            {status === 'error' && (message || 'Error')}
          </p>
          {error && <p className="text-sm text-red-600">{error}</p>}
          {!isActive ? (
            <button onClick={start} className="bg-c-bg text-accent px-6 py-2 text-sm font-medium rounded-sm hover:bg-accent hover:text-c-bg transition-colors duration-200">Start conversation</button>
          ) : (
            <button onClick={stop} className="bg-red-600 text-white px-6 py-2 text-sm font-medium rounded-sm hover:opacity-90 transition-opacity">End conversation</button>
          )}
        </div>

        <p className="text-xs text-gray-400 text-center mt-2">Powered by ElevenLabs Conversational AI</p>
      </div>
    </div>
  )
}

export default function AskMyCV() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-accent text-c-bg px-5 py-3 shadow-lg hover:bg-white transition-colors duration-200 font-medium"
        aria-label="Talk to AI Andrii"
      >
        <span className="text-lg">🎙️</span>
        <span className="text-sm font-medium">Talk to AI Andrii</span>
      </button>

      {open && (
        <ConversationProvider>
          <AskMyCVInner onClose={() => setOpen(false)} />
        </ConversationProvider>
      )}
    </>
  )
}
