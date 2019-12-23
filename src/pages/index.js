import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import warehouse_pic from '../assets/images/armazem.jpeg'
import nestle_logo_pic from '../assets/images/nestle-logo.png'
import wickbold_logo_pic from '../assets/images/wickbold_logo.png'
import arcor_logo_pic from '../assets/images/logo-arcor.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Distribuidora A.R" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Especialistas em distribuição</h2>
                </header>
                <p className="content">
                  Sed lorem ipsum dolor sit amet nullam consequat feugiat
                  consequat magna adipiscing magna etiam amet veroeros. Lorem
                  ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                  ipsum dolor sit amet aliquam.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/home" className="button">
                      Saiba mais
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={warehouse_pic} style={{ height: '13em', width: '13em'}} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Parceiros</h2>
            </header>
            <ul className="features">
              <li>
                <div className="spotlight" >
                  <div className="content">
                    <span className="image" style={{marginLeft : '0px !important'}}>
                      <img src={nestle_logo_pic} style={{ height: '10em', width: '10em' }} alt="" />
                    </span>
                  </div>
                </div>
              
                <h3><b>Nestlé</b></h3>
                <p>
                  Nestlé S.A. é uma empresa transnacional suíça do setor de alimentos e bebidas com sede em Vevey, Vaud, na Suíça. 
                </p>

                  <Link to="/nestle" className="button">
                    Saiba mais
                  </Link>
              </li>
              <li>
              <div className="spotlight" >
                  <div className="content">
                    <span className="image" style={{marginLeft : '0px !important'}}>
                      <img src={wickbold_logo_pic} style={{ height: '10em', width: '10em' }} alt="" />
                    </span>
                  </div>
                </div>
                <h3><b>Wickbold</b></h3>
                <p>
                  Wickbold é uma empresa brasileira de fabricação de pães, panetones e alimentos em geral.
                </p>

                  <Link to="/wickbold" className="button">
                    Saiba mais
                  </Link>
              </li>

              <li>
              <div className="content">
                    <span className="image" style={{marginLeft : '0px !important'}}>
                      <img src={arcor_logo_pic} style={{ height: '13em', width: '13em' }} alt="" />
                    </span>
                  </div>
                <h3><b>Arcor</b></h3>
                <p>
                  O Grupo Arcor é uma empresa multinacional de origem argentina, especializada na elaboração de alimentos.
                </p>

                <Link to="/arcor" className="button">
                    Saiba mais
                </Link>
              </li>
              
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  {/* <Link to="/nestle" className="button">
                    Saiba mais
                  </Link> */}
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Nosso trabalho</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-truck"></span>
                <strong>5,120</strong> Km por mês
              </li>
              <li className="style2">
                <span className="icon fa-archive"></span>
                <strong>8,192</strong> Pacotes distribuidos
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Saiba mais
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Sobre nós</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
