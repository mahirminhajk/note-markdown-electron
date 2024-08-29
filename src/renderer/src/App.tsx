import { ActionButtonsRow, Content, NotePreviewList, RootLayout, Sidebar } from '@/components'

const App = (): JSX.Element => {
  return (
    <>
      {/* <DraggableTopBar /> */}
      <RootLayout>
        <Sidebar className="p-2 bg-black/70">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/70 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
