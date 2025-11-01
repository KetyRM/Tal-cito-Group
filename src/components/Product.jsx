import Styles from './css/Product.module.css'

import Copo from '../images/copo_inclinado.png'
import Whats from '../images/w1.png'
import Toalhas from '../images/toalha.png'
import Cracha from '../images/cracha.png'

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



      <section className={Styles.camiseta}>aaaaaaa</section>



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



          
      <section className={Styles.caneca}>aa</section>


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













      <section className={Styles.chaveiro}>aa</section>


      
      <section className={Styles.caneta}>aa</section>
    </>
  );
}

export default Product;
