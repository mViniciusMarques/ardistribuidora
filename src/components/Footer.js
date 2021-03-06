import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Trabalhe conosco</h2>
      <p>
        Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
        magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
        aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
        tincidunt odio.
      </p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Saiba mais
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Onde nos encontrar</h2>
      <dl className="alt">
        <dt>Endereço</dt>
        <dd>Rua Jose Teixeira Da Silva, 214 &bull; Cidade do Sol, Juiz de Fora M.G - 36085-440 &bull; BRASIL</dd>
        <dt>Phone</dt>
        <dd>(32) 3215-2763</dd>
        <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">financeiro@ardistribuidora.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/codebushi/gatsby-starter-stellar"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Desenvolvimento e Design: <a href="https://html5up.net">Empire 42</a>.
    </p>
  </footer>
)

export default Footer
