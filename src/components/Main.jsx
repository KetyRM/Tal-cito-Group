import styles from './css/Main.module.css'
import caneta from '../images/caneta.png'
import camisa from '../images/camisa.png'
import canecas from '../images/canecas.png'
import produt from '../images/produtos.png'
import num1 from '../images/num1.png'
import num2 from '../images/num2.png'
import num3 from '../images/num3.png'
import laranja from '../images/whats_laranja.png'
import moca from '../images/mulher.png'



import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// estilos do Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Main() {
    const produtos = [
        { id: '1', image: canecas },
        { id: '2', image: camisa },
        { id: '3', image: caneta },
    ]

    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <div className={styles.texto}>
                    <h1>Sublimação e Designer</h1>
                    <h2>
                        Estampe os mais diversos itens com a Talacito Group,
                        unimos qualidade com excelência.
                    </h2>
                </div>

                <div className={styles.carrosel}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={20}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                    >
                        {produtos.map((produto) => (
                            <SwiperSlide key={produto.id}>
                                <img
                                    src={produto.image}
                                    alt={`Produto ${produto.id}`}
                                    className={styles.slideItem}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className={styles.personalizar}>

                <div className={styles.perso}>
                    <h1 className={styles.per}>COMO FAÇO PARA PERSONALIZAR?</h1>
                </div>

              


                <div className={styles.itens}>
                    <div className={styles.passos}>

                        <div className={styles.encaixe}>
                        <img src={num1} alt="Passo um" />
                        <h3 className={styles.frase}>Entre em contato pelo Whatsapp e fale com o atendente.</h3>
                    </div>


                    <div className={styles.encaixe}>
                        <img src={num2} alt="Passo 2" />
                        <h3 className={styles.frase}>Peça um orçamento do produto, e um para arte caso não tenha.</h3>
                    </div>


                    <div className={styles.encaixe}>
                        <img src={num3} alt="Passo 3" />
                        <h3 className={styles.frase}>Com tudo certo, será dado uma data de entrega para retirada.</h3>
                    </div>
                    </div>

                   

                    <div className={styles.imgprod}>
                        <img className={styles.produt} src={produt} alt="produtos para estampar" />
                    </div>
                </div>
            </section>

            <section className={styles.contato}>

                 <div className={styles.cont}>
                    <h1 className={styles.con}>COMO ENTRAR EM CONTATO?</h1>
                </div>

                <div className={styles.caixa}>

                    <div className={styles.contatos}>

                        <div className={styles.logo_text}>
                            <img src={laranja} alt="Logo do WhatsApp" />
                            <h3 className={styles.comuni}>Nosso principal meio de comunicação é o WhastApp:</h3>
                        </div>

                        <h3 className={styles.nume}>(11) 95078-2152</h3>
                        
                    </div>
                </div>
            </section>



            <section className={styles.escolher}>aaa</section>


        </main>
    )
}
