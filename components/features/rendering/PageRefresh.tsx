'use client';

import { Button } from '@/components/ui/Button';

const PageRefresh = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <Button
      onClick={reloadPage}
      className="duration-150 hover:scale-[1.03] hover:opacity-90"
    >
      Odśwież
    </Button>
  );
};

export default PageRefresh;
