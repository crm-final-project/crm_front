import { useState, useEffect } from 'react';
import { MyQuotesOrg } from '../../ui/organisms';

export const MyQuotesPage = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(
    () => window.addEventListener('resize', handleWindowSizeChange),
    []
  );

  const view = width >= 1180 ? 'desktop' : 'mobile';

  return <MyQuotesOrg view={view} />;
};
