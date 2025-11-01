import Styles from './css/Product.module.css'

import Copo from '../images/copo_inclinado.png'
import Whats from '../images/w1.png'
import Toalhas from '../images/toalha.png'
import Cracha from '../images/cracha.png'
import Caneta from '../images/caneta_certa.png'
import Camiseta from '../images/camisa.png'
import Canecas from  '../images/canequinhas.png'
import Chaveiros from '../images/chaveirinho.png'

function Product() {
  return (
    <>
      <section className={Styles.copo}>

        <div className={Styles.caixa}>
            <h1>NOSSO SEGEMENTO DE PRODUTOS</h1>
        </div>

        <div className={Styles.cont}>

             <div className={Styles.copos}>
                 <img src={Copo} alt="Copo para personalizar" />
            
            <div className={Styles.texto}>
                <h2>Personalizamos copos</h2>
                <h3>Dos mais diversos tipos e tamanhos, fechamos orçamento para unidade e grandes pedidos.</h3>
                          
                          <div className={Styles.orca}>
                              <a
                                  href="https://wa.me/5511950782152"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={Styles.whatsLink}
                              >
                                  Faça seu orçamento
                              </a>
                          </div>
                
            </div>
        </div>
        </div>
      </section>



          <section className={Styles.camiseta}>
              <div className={Styles.camisetaContainer}>

                  <div className={Styles.textoCamiseta}>
                      <h2>Personalizamos Camisetas</h2>
                      <h3>Dos mais diversos tipos e tamanhos, fechamos orçamento para unidade e grandes pedidos.</h3>

                      <div className={Styles.camisetaBtn}>
                          <a
                              href="https://wa.me/5511950782152"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={Styles.whatsCamiseta}
                          >
                              Faça seu orçamento
                          </a>
                      </div>
                  </div>
                   <img src={Camiseta} alt="Personalizar camisetas" />

              </div>
          </section>







      <section className={Styles.toalhaSection}>
        <div className={Styles.toalha4}>
            <img src={Toalhas} alt="Personalizar toalhas" />
            

             <div className={Styles.textos}>
                <h2>Personalizamos Toalhas</h2>
                <h3>Dos mais diversos tipos e tamanhos, fechamos orçamento para unidade e grandes pedidos.</h3>
                          
                          <div className={Styles.orcas}>
                              <a
                                  href="https://wa.me/5511950782152"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={Styles.whats}
                              >
                                  Faça seu orçamento
                              </a>
                          </div>
                
            </div>

        </div>
    </section>


          <section className={Styles.canecasection}>
              <div className={Styles.canecacont}>

                  <div className={Styles.textocaneca}>
                      <h2>Personalizamos Canecas</h2>
                      <h3>Gravação de nomes, logos ou mensagens em canecas de diversos modelos e cores.</h3>

                      <div className={Styles.caneca}>
                          <a
                              href="https://wa.me/5511950782152"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={Styles.whatscan}
                          >
                              Faça seu orçamento
                          </a>
                      </div>
                  </div>
                    <img src={Canecas} alt="Personalizar canecas" />
              </div>
          </section>




          


          <section className={Styles.crachaSection}>
              <div className={Styles.crachaContainer}>
                  <img src={Cracha} alt="Personalizar crachás" />

                  <div className={Styles.texto1}>
                      <h2>Personalizamos Crachás</h2>
                      <h3>Dos mais diversos tipos e tamanhos, fechamos orçamento para unidade e grandes pedidos.</h3>

                      <div className={Styles.orcas}>
                          <a
                              href="https://wa.me/5511950782152"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={Styles.whatscra}
                          >
                              Faça seu orçamento
                          </a>
                      </div>
                  </div>
              </div>
          </section>



          <section className={Styles.chaveirosection}>
              <div className={Styles.chaveirocont}>

                  <div className={Styles.textochaveiro}>
                      <h2>Personalizamos Chaveiros</h2>
                      <h3>Gravação de nomes, logos ou mensagens em chaveiros de diversos modelos e materiais.</h3>

                      <div className={Styles.chaveirobtn}>
                          <a
                              href="https://wa.me/5511950782152"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={Styles.whatschaveiro}
                          >
                              Faça seu orçamento
                          </a>
                      </div>
                  </div>

                  <img src={Chaveiros} alt="Personalizar chaveiros" />
              </div>
          </section>























      <section className={Styles.caneta}>
  <div className={Styles.canetacontainer}>
    <img src={Caneta} alt="Personalizar canetas" />

    <div className={Styles.texto3}>
      <h2>Personalizamos Canetas</h2>
      <h3>Gravação de nomes, logos ou mensagens em canetas de diversos modelos e cores.</h3>

      <div className={Styles.canet1}>
        <a
          href="https://wa.me/5511950782152"
          target="_blank"
          rel="noopener noreferrer"
          className={Styles.whatsca}
        >
          Faça seu orçamento
        </a>
      </div>
    </div>
  </div>
</section>




    </>
  );
}

export default Product;
