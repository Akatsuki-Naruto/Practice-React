import logo from './logo.svg';
import './App.css';
import renderTags from './function/callAPI';

function App() {
  return (
    <div className='App'>
      <Header>
              <div className="" >
                  <span><img href="https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340" alt="" className="imgIndexIcon"/></span>
                  <div className="indexIcon">daily.dev</div>
              </div>
              <button className="buttonLogIn">Log in</button>
              <button className="buttonSignUp">Sign up</button>
          </Header>
          <Main>
              <nav className="contentLeftIndex">
                  <ul className="listDiscovery">
                      <div className="part">Discover</div>
                      <li >
                          <a href="">Popular</a>
                      </li>
                      <li>
                          <a href="">Most upvoted</a>
                      </li>
                      <li>
                          <a href="">Best discussions</a>
                      </li>
                      <li>
                          <a href="">Search</a>
                      </li>
                  </ul>
                  <ul className="listContribute">
                      <div className="part">Contribute</div>
                      <li>
                          <a href="">Submit link</a>
                      </li>
                      <li>
                          <a href="">Suggest new source</a>
                      </li>
                  </ul>
                  <ul className="listManage">
                      <div className="part">Manage</div>
                      <li>
                          <a href="">Bookmarks</a>
                      </li>
                      <li>
                          <a href="">Reading history</a>
                      </li>
                      <li>
                          <a href="">Pause new tab</a>
                      </li>
                      <li>
                          <a href="">Customize</a>
                      </li>
                  </ul>                    
              </nav>
              <div className="mainTags">
                  <div className="headerMain">
                  <p>
                      Get the content you need by creating a personal feed <span>
                          <button className="buttonChooseTag">
                              <span className="buttonPlus">+</span>
                          Choose tags
                          </button>
                      </span></p>
                  </div>
                  <div className="headerTag">
                      <div>Popular</div>
                      <Button>
                          Add shortcuts
                          <span className="buttonPlus">+</span>
                      </Button>
                  </div>
                  <div id="Tags">
                      <ul id="listTags"></ul>
                  </div>
              </div>
              

              <div></div>
          </Main>
          <Footer>

          </Footer>
    </div>
  );
}

export default App;
