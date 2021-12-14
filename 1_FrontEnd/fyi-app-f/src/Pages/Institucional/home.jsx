import "../../assets/styles/home.css";
import { Link } from 'react-scroll';

//componetes

import Button from "../../components/buttom";
import Footer from '../../components/footer';


//Imagens
import down from "../../assets/img/down.svg";
import clock from "../../assets/img/clock.svg";
import alunosicon from "../../assets/img/student.svg";
import empresaicon from "../../assets/img/empresa.svg";
import ppclica from "../../assets/img/foto-clica.png";

//imagens logo das empresas
import castle from "../../assets/img/empresas/castle.png";
import microsoft from "../../assets/img/empresas/microsoft.png";
import pearson from "../../assets/img/empresas/pearson.png";
import prometric from "../../assets/img/empresas/prometric.png";

//Logo Fyi
import branca from "../../assets/img/fyi-branca.svg";
import logo2 from '../../assets/img/logo2.svg';
import logobranca from '../../assets/img/Logo-branca1.svg';

//Icones
import pin from "../../assets/img/pin.svg";
import wifi from "../../assets/img/trasnmition.svg";
import infra from "../../assets/img/estrutura.svg";
import flex from "../../assets/img/flex.svg";

import { Router } from "react-router";
import { Component } from "react/cjs/react.production.min";
import { useState } from "react";





class Home extends Component {


  render() {

    return (
      <div>
        <div className="background">
          <div className="container">
            {" "}





            <header>
              <nav className="nav">

                <a href="#"><img src={logobranca} alt="Logo minimalista for your information Learning Solution - FYI" /></a>

                <div className="mobile-menu" >
                  <div className="1"></div>
                  <div className="2"></div>
                  <div className="3"></div>
                </div>

                <ul className="nav-list">
                  <li><a href="http://18.206.139.225/">Home</a></li>
                  <li><a href="http://18.206.139.225/cursos">Cursos</a></li>
                  <li><a href="http://18.206.139.225/contato-duvidas">Contato / Duvidas</a></li>
                </ul>
              </nav>

              <script src="../mobile-navbar.js"></script>
            </header>



          </div>

          <main>
            <div className="container">
              <div className="information">
                <h2 className="container, text">
                  For Your Information Learning solution
                </h2>

                <p className=" container, text">
                  Desde 2003 sendo o principal <br />
                  centro de treinamento oficial <br /> da Microsoft
                </p>
              </div>
            </div>

            <div className="container text">
              <div className="saiba-btt">
                <Link to='sobre' smooth={true}>
                  <Button>Saiba Mais</Button>
                </Link>
              </div>
            </div>

            <div className="desce">

              <Link to='sobre' smooth={true}>
                <img src={down} />
              </Link>

            </div>

            <div className="container">
              <div className="aling-solid">
                <div className="solid">
                  <div className="treinamento">
                    <img src={clock} />
                    <div className="down-txt">
                      <h4>+10000</h4>
                      <p>Horas de treinamento</p>
                    </div>
                  </div>

                  <div className="alunos">
                    <img src={alunosicon} />
                    <div className="down-txt">
                      <h4>+1000</h4>
                      <p>Alunos Treinados</p>
                    </div>
                  </div>

                  <div className="empresas">
                    <img src={empresaicon} />
                    <div className="down-txt">
                      <h4>+50</h4>
                      <p>Empresas Atendidas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container empresas-aling">
              <div className="empresas-carrosel">
                <img src={castle} alt="logo da castle " />
                <img src={microsoft} alt="logo da microsoft " />
                <img src={pearson} alt="logo da pearson " />
                <img src={prometric} alt="logo da Prometric " />
              </div>
            </div>



            <div id="sobre">
              <div className="sobre-fyi text">
                <h3>
                  Sobre a <br /> For Your Learning Information
                </h3>

                <p>
                  A FYI nasceu em 2009 com a missão de formar excelentes
                  profissionais para as principais soluções de negócios e
                  tecnologia do mercado. Apoio a Microsoft e seu canal de
                  parceiros em Business Applications e Power Platform.
                </p>
              </div>
            </div>

            <div className="valores">
              <div className="nossos-valores text">
                <div className="texto-motivacional">
                  <h3>Nossos Valores</h3>
                  <p>
                    “Formar exelentes profissionais para as principais soluções
                    de negócios e tecnologia do mercado”
                  </p>

                  <p>
                    Reconhecemos a responsabilidade envolvida na qualidade de
                    entrega dos cursos para bom desenvolvimento do potencial de
                    cada indivíduo lutamos por isso
                  </p>
                </div>
              </div>
            </div>

            <div className="clica-ai">
              <div className="foto-clica">
                <div className="logo-fyi">
                  <img src={branca} alt="logo FYI branca" />
                </div>
                <img src={ppclica} alt="pessoas de fundo no predio da fyi" />
              </div>

              <div className="conhecas-nossos">
                <p className="conncursos">Conheça nossos cursos</p>

                <div className="informacoes-clica">


                  <svg width="27" height="38" viewBox="0 0 27 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill" d="M13.5848 0C6.46034 0 0.6875 5.68817 0.6875 12.7339C0.6875 24.9167 13.5848 37.4022 13.5848 37.4022C13.5848 37.4022 26.4821 24.9141 26.4821 12.7339C26.4821 5.69072 20.7093 0 13.5848 0ZM13.5848 19.7797C11.7377 19.7797 9.96625 19.0538 8.66014 17.7616C7.35403 16.4695 6.62027 14.717 6.62027 12.8896C6.62027 11.0622 7.35403 9.30971 8.66014 8.01756C9.96625 6.72542 11.7377 5.9995 13.5848 5.9995C15.4319 5.9995 17.2034 6.72542 18.5095 8.01756C19.8156 9.30971 20.5494 11.0622 20.5494 12.8896C20.5494 14.717 19.8156 16.4695 18.5095 17.7616C17.2034 19.0538 15.4319 19.7797 13.5848 19.7797Z" fill="#004B6D" />
                  </svg>
                  <p>Localização Privílegiadas</p>


                  <svg width="41" height="31" viewBox="0 0 41 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill" d="M8.65947 0.77518C8.49205 0.6053 8.2926 0.469893 8.07254 0.376695C7.85247 0.283497 7.61609 0.234335 7.37691 0.232019C7.13773 0.229703 6.90043 0.274278 6.67858 0.363197C6.45673 0.452116 6.25467 0.583636 6.08396 0.750242C4.15282 2.65952 2.62096 4.93018 1.57675 7.4312C0.532543 9.93222 -0.00334032 12.6141 1.56656e-05 15.3221C-0.00311647 18.1341 0.574941 20.9166 1.69831 23.4971C2.82168 26.0776 4.46638 28.401 6.53035 30.323C6.87773 30.6423 7.33659 30.8144 7.80951 30.8028C8.28243 30.7912 8.73216 30.5967 9.06323 30.2606C9.8557 29.4726 9.75789 28.2181 8.99552 27.4924C7.33911 25.9226 6.02098 24.0342 5.12125 21.942C4.22152 19.8499 3.75898 17.5976 3.76173 15.3221C3.76173 10.7184 5.62001 6.54359 8.63439 3.50601C9.36166 2.77031 9.43689 1.54829 8.65947 0.77518Z" fill="#004B6D" />
                    <path className="fill" d="M13.0755 5.16951C12.7452 4.83156 12.2937 4.63759 11.8198 4.63011C11.346 4.62263 10.8885 4.80225 10.5476 5.12961C9.19046 6.46154 8.11329 8.04863 7.37879 9.79849C6.64429 11.5483 6.26714 13.426 6.2693 15.3222C6.2693 19.5419 8.1 23.3351 11.0166 25.9562C11.3608 26.2586 11.8088 26.4177 12.2677 26.4006C12.7267 26.3834 13.1614 26.1912 13.4817 25.864C14.3043 25.046 14.1513 23.7591 13.3789 23.0359C12.3202 22.0461 11.4768 20.8509 10.9009 19.5242C10.3251 18.1974 10.029 16.7673 10.031 15.3222C10.031 12.4542 11.1771 9.85058 13.0404 7.94025C13.7576 7.20704 13.8755 5.96258 13.0755 5.16951Z" fill="#004B6D" />
                    <path className="fill" d="M27.0493 5.16951C27.3796 4.83156 27.8311 4.63759 28.305 4.63011C28.7788 4.62263 29.2363 4.80225 29.5772 5.12961C30.9343 6.46154 32.0115 8.04863 32.746 9.79849C33.4805 11.5483 33.8577 13.426 33.8555 15.3222C33.8555 19.5419 32.0248 23.3351 29.1082 25.9562C28.764 26.2586 28.316 26.4177 27.8571 26.4006C27.3981 26.3834 26.9634 26.1912 26.6431 25.864C25.8205 25.046 25.9735 23.7591 26.7459 23.0359C27.8046 22.0461 28.648 20.8509 29.2239 19.5242C29.7997 18.1974 30.0958 16.7673 30.0938 15.3222C30.0938 12.4542 28.9477 9.85058 27.0844 7.94025C26.3672 7.20704 26.2493 5.96258 27.0493 5.16951Z" fill="#004B6D" />
                    <path className="fill" d="M31.4656 0.77518C31.633 0.6053 31.8324 0.469893 32.0525 0.376695C32.2726 0.283497 32.509 0.234335 32.7481 0.232019C32.9873 0.229703 33.2246 0.274278 33.4465 0.363197C33.6683 0.452116 33.8704 0.583636 34.0411 0.750242C35.9722 2.65952 37.5041 4.93018 38.5483 7.4312C39.5925 9.93222 40.1284 12.6141 40.125 15.3221C40.1282 18.1341 39.5501 20.9166 38.4267 23.4971C37.3034 26.0776 35.6587 28.401 33.5947 30.323C33.2473 30.6423 32.7885 30.8144 32.3155 30.8028C31.8426 30.7912 31.3929 30.5967 31.0618 30.2606C30.2694 29.4726 30.3672 28.2181 31.132 27.4924C32.788 25.9224 34.1057 24.0339 35.005 21.9417C35.9042 19.8496 36.3664 17.5974 36.3633 15.3221C36.3633 10.7184 34.505 6.54359 31.4907 3.50601C30.7634 2.77031 30.6882 1.54829 31.4656 0.77518Z" fill="#004B6D" />
                    <path className="fill" d="M20.0625 11.5811C19.0648 11.5811 18.108 11.9752 17.4026 12.6767C16.6971 13.3783 16.3008 14.3298 16.3008 15.3219C16.3008 16.314 16.6971 17.2656 17.4026 17.9671C18.108 18.6686 19.0648 19.0628 20.0625 19.0628C21.0602 19.0628 22.017 18.6686 22.7224 17.9671C23.4279 17.2656 23.8242 16.314 23.8242 15.3219C23.8242 14.3298 23.4279 13.3783 22.7224 12.6767C22.017 11.9752 21.0602 11.5811 20.0625 11.5811Z" fill="#004B6D" />
                  </svg>

                  <p>Transmissão de Aula pela Internet</p>


                  <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill" d="M29.6371 3.31104H14.5394C12.8588 3.31104 11.4989 4.67091 11.4989 6.35146V14.8783L4.38647 21.9C4.17336 22.1107 4.02767 22.3801 3.96789 22.6738C3.90811 22.9675 3.93694 23.2723 4.05071 23.5496C4.16448 23.8269 4.35807 24.0642 4.60691 24.2313C4.85575 24.3984 5.14862 24.4878 5.44835 24.4881V32.0514C5.44835 32.4525 5.60772 32.8373 5.89139 33.121C6.17507 33.4046 6.55982 33.564 6.961 33.564H31.1634C31.5646 33.564 31.9493 33.4046 32.233 33.121C32.5167 32.8373 32.676 32.4525 32.676 32.0514V6.34995C32.676 4.67091 31.3177 3.31104 29.6371 3.31104ZM17.4316 23.1434V30.5387H8.47365V22.1163L12.9919 17.6555L17.4316 22.198V23.1434ZM20.5748 13.8996H17.5495V10.8743H20.5748V13.8996ZM26.6254 26.0008H23.6001V22.9755H26.6254V26.0008ZM26.6254 19.9502H23.6001V16.9249H26.6254V19.9502ZM26.6254 13.8996H23.6001V10.8743H26.6254V13.8996Z" fill="#004B6D" />
                    <g filter="url(#filter0_d_532:155)">
                      <path  className="fill" d="M11.499 22.9756H14.5243V26.0009H11.499V22.9756Z" fill="#004B6D" />
                    </g>
                    <defs>
                      <filter id="filter0_d_532:155" x="7.67759" y="22.9756" width="10.6682" height="10.6682" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="3.82143" />
                        <feGaussianBlur stdDeviation="1.91071" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_532:155" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_532:155" result="shape" />
                      </filter>
                    </defs>
                  </svg>

                  <p>Infraestrutura Completa</p>



                  <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill" d="M1.88099 14.114L18.658 23.8074C19.0308 23.9938 19.2172 23.9938 19.5901 23.9938C19.9629 23.9938 20.1493 23.9938 20.5221 23.8074L37.2991 14.114C37.6719 13.9276 37.8584 13.7412 38.0448 13.3684C38.4176 12.4363 38.2312 11.3179 37.2991 10.7586L20.5221 1.06526C19.9629 0.692439 19.2172 0.692439 18.658 1.06526L1.88099 10.7586C1.50817 10.9451 1.32176 11.1315 1.13535 11.5043C0.762526 12.4363 0.948937 13.5548 1.88099 14.114ZM37.2991 18.2151L36.9263 18.0287L20.5221 27.5356C19.9629 27.9085 19.2172 27.9085 18.658 27.5356L2.25382 18.0287L1.88099 18.2151C0.948937 18.7743 0.762526 19.8928 1.13535 20.8248C1.32176 21.1977 1.50817 21.3841 1.88099 21.5705L18.658 31.2639C19.2172 31.6367 19.9629 31.6367 20.5221 31.2639L37.2991 21.5705C38.2312 21.0113 38.4176 19.8928 38.0448 18.9607C37.8584 18.5879 37.6719 18.4015 37.2991 18.2151ZM37.2991 25.6715L36.9263 25.4851L20.5221 34.9921C19.9629 35.3649 19.2172 35.3649 18.658 34.9921L2.25382 25.4851L1.88099 25.6715C0.948937 26.2308 0.762526 27.3492 1.13535 28.2813C1.32176 28.6541 1.50817 28.8405 1.88099 29.0269L18.658 38.7203C19.2172 39.0931 19.9629 39.0931 20.5221 38.7203L37.2991 29.0269C38.2312 28.4677 38.4176 27.3492 38.0448 26.4172C37.8584 26.0444 37.6719 25.8579 37.2991 25.6715Z" fill="#004B6D" />
                  </svg>

                  <p>Flexibilidade e Serviços Adiciona</p>



                </div>

                <div className="botao-cl">
                  <a href="http://18.206.139.225/cursos"><Button>Nossos cursos</Button></a>
                </div>
              </div>



            </div>

            <Footer />

            

          </main>
        </div>
      </div>
    );
  }
}

export default Home;
