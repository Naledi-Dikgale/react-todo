const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  
    return (
      <header style={headerStyle}> 
        <h1>ToDos</h1>
        <p>Items will persist in the browser local storage</p>
      </header>
    );
  };
  export default Header;