import { useState } from 'react';
export const GroupCardDropdownMenuTriggerButton = ({
}: IGroupCardMenuButtonProps) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    <DropdownMenu open={isDropdownMenuOpen} onOpenChange={setIsDropdownMenuOpen}>
      <GroupCardDropdownMenuContent
        handleRenameClick={handleRenameClick}
        onDropdownMenuClose={() => setIsDropdownMenuOpen(false)}
      />