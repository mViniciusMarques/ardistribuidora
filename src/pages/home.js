import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/armazem.jpeg'

class Home extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Home" />
        <HeaderGeneric title={'Especialistas em distribuição'} />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" style={{ height: '25em', margin: '0 auto'}} /></span>
            <h2>Especialistas em distribuição</h2>
            <p>Com uma longa história no ramo de distribuição, A.R se posiciona como uma das principais empresas do ramo no Estado de Minas Gerais.
                Constituída por uma equipe de vendas composta por mais de 200 vendedores e promotores de vendas, investimos continuamente na capacitação dos nossos colaboradores, 
                buscando desenvolver as competências necessárias para melhor atender nossos clientes e parceiros.</p>
            
            <p>Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Consequat leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit enim turpis lorem ipsum dolor sit amet feugiat. Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet est velit quis lorem.</p>
            
            <h2>Tempus veroeros</h2>
            <p>Cep risus aliquam gravida cep ut lacus amet. Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae ante vestibulum ante. Blandit. Ante accumsan nisi eu placerat gravida placerat adipiscing in risus fusce vitae ac mi accumsan nunc in accumsan tempor blandit aliquet aliquet lobortis. Ultricies blandit lobortis praesent turpis. Adipiscing accumsan adipiscing adipiscing ac lacinia cep. Orci blandit a iaculis adipiscing ac. Vivamus ornare laoreet odio vis praesent nunc lorem mi. Erat. Tempus sem faucibus ac id. Vis in blandit. Nascetur ultricies blandit ac. Arcu aliquam. Accumsan mi eget adipiscing nulla. Non vestibulum ac interdum condimentum semper commodo massa arcu.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Home
