import { Content, RootLayout, Sidebar } from '@/components'

function App(): JSX.Element {
  return (
    <RootLayout>
      <Sidebar className="p-2 bg-black/70">Sidebar</Sidebar>
      <Content className="border-l bg-zinc-900/70 border-l-white/20">Content</Content>
    </RootLayout>
  )
}

export default App
