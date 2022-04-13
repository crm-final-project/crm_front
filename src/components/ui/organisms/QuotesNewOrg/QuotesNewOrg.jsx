import { TitleBar } from '../../atoms';
import { FlowOptions, NewQuoteForm } from '../../molecules';

export const QuotesNewOrg = (props) => {
  return (
    <>
      <TitleBar />
      <NewQuoteForm />
      <FlowOptions btn1_title='cancel' btn2_title='create' />
    </>
  );
};
