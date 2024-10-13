import { Routes, Route } from 'react-router-dom';
import { Community, CommunityX } from '@/pages';

export const CommunityRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Community />} />
      <Route path="/:id" element={<CommunityX />} />
    </Routes>
  );
};