export const TotalCash = (props) => {
  return (
    <>
      <p className='no_margins'>Total { props.title }:</p>
      <h2 className='no_margins'>COP$ { props.val }</h2>
    </>
  );
};
