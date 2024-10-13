      ...post,
    <>
      <Dialog modal>
        <Dialog.Trigger asChild>
          <Button>Edit</Button>
        </Dialog.Trigger>
        <Adapt when='sm' platform='touch'>
          <Sheet animation='medium' zIndex={200000} modal dismissOnSnapToBottom>
            <Sheet.Frame padding='$4' gap='$4'>
              <Adapt.Contents />
            </Sheet.Frame>
            <Sheet.Overlay
              animation='lazy'
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>

        <Dialog.Portal>
          <Dialog.Overlay
            key='overlay'
            animation='slow'
            opacity={0.5}
          <Dialog.Content
            bordered
            elevate
            key='content'
            animateOnly={['transform', 'opacity']}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            gap='$4'
          >
            <Form onSubmit={handleSubmit(updateByte)}>
              <Dialog.Title>Edit Post</Dialog.Title>
              <Dialog.Description>
                Make changes to your post here. Click save when you're done.
              </Dialog.Description>
              <Controller
                name={'description'}
                control={control}
                render={({ field }) => (
              <Unspaced>
                <Dialog.Close asChild>
                  <Button
                    position='absolute'
                    top='$3'
                    right='$3'
                    size='$2'
                    circular
                    icon={<Feather name='x-circle' size={16} color='#007AFF' />}
                  />
                </Dialog.Close>
              </Unspaced>
            </Form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </>