// import '../../App.scss';
export const HomeText = () => {
  const style = {
    width: '450px',
    height: '382px',
    display: 'flex',
    flexDirection: 'column' as 'column'
  }
  return (
    <div style={style}>
      <h5 style={{margin: 0}}>SO, YOU WANT TO TRAVEL TO</h5>
      <h1 style={{margin: '24px 0'}}> SPACE</h1>
      <p className="body-text" style={{margin: 0}}>
      Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
      </p>
    </div>
  );
}