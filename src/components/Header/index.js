import './styles.css';
import logo_github from '../../assets/images/github-mark-white.png'

const Header = () => {

  const recarregarPagina = () => {
    window.location.reload();
  };

  return (
    <header>
      
      <div className="header__content">
          <nav>
            <div className="logo__nav" onClick={recarregarPagina} style={{ cursor: 'pointer' }}>
              <figure>
                  <img src={logo_github} alt="Logo GitHub"  title="Logo GitHub" />
              </figure>
              <h1 className='header__content__titulo'>GitFind</h1>
            </div>
          </nav>
      </div>
      
    </header>    
  )
}

export { Header };