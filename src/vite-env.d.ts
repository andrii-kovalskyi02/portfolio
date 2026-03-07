/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL: string
  readonly VITE_PHONE: string
  readonly VITE_WHATSAPP: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
