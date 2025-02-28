import './App.css';

function Title(prop) {
  return (
    <header>
      <h1 className='title'>{prop.text}</h1>
    </header>
  );
}

export default Title;
