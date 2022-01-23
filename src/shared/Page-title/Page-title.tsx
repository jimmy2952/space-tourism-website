import './Page-title.scss';

interface Props {
  title: {
    number: string;
    text: string;
  }
}

export const PageTitle = (props: Props) => {
  // console.log(props);
  const style = {
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <div className="page-title">
      <h5 className='title-number'>{props.title.number}</h5>
      <h5>{props.title.text}</h5>
    </div>
  );
}