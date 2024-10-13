import { EditPostDialog } from './EditPostDialog';
        {userId === author.split('/')[1] && (
          <XStack  display='flex' justifyContent='space-around'>
            <EditPostDialog post={post} />
            <DeletePostDialog postId={postId} />
          </XStack>
        )}