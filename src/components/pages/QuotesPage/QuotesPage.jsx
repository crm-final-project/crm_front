import { useState, useEffect } from 'react';
import { QuotesOrg } from '../../ui/organisms';

export const QuotesPage = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(
    () => window.addEventListener('resize', handleWindowSizeChange),
    []
  );

  const view = width >= 1180 ? 'desktop' : 'mobile';

  return <QuotesOrg view={view} />;
};
