import { getGroupList } from '@/lib/api/group/server';
  const groups: IGroup[] = await getGroupList();