import React, { Component } from "react";
import { Link } from "react-router-dom";

//css
import "../../assets/styles/cursos.css";

//componets
import Header from "../../components/header";
import Button from "../../components/buttom";

//Imagens
import microSo from "../../assets/img/microsoftt.svg";


//cursos logo
import bi from "../../assets/img/power-bi-1.svg";
import di from "../../assets/img/dinamic.svg";
import az from "../../assets/img/azure.svg";
import my from "../../assets/img/mysql.svg";


class Cursos extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <Header />
                </div>

                <div className="areas-container">

                    <div className="area-aling">


                        <div className="conteudo-curso container">
                            <div className="texto-sobre-curso">
                                <p>Áreas de interes</p>
                                <p>Aproveite para saber mais sobre :</p>
                            </div>

                            <div className="card-area">
                                <div className="card-da-area">


                                    <img src={my} alt="logo da Microsoft Azure" />
                                    <p>My Sql</p>
                                </div>

                                <div className="card-da-area">
                                    <img src={di} alt="logo da Microsoft Dinamic 360 " />
                                    <p>Dinamics 360</p>
                                </div>

                                <div className="card-da-area">
                                    <img src={az} alt="logo da Microsoft Azure" />
                                    <p>Azure</p>
                                </div>

                                <div className="card-da-area">
                                    <img src={bi} alt="logo do power bi " />
                                    <p>Power BI</p>
                                </div>
                            </div>

                           <Link to="/turmas">
                                <Button>Todas as turmas</Button>
                           </Link>


                        </div>


                    </div>

                    <div className="microsoft-bottom container">
                        <img src={microSo} alt="logo da microsoft" />
                    </div>






                </div>

                <div className="cursos-main container">

                    <p>Cursos para você <span>começar</span></p>
                    <hr />

                    <div className="local-do-curso">
                        <div className="title__content">
                            <div className="pixel__title"></div>
                            <p>Nome da Area do curso</p>

                        </div>

                        <div className="scroll-curso">


                            <div class="scrolling-wrapper">

                                <div class="card__curso">

                                    <div className="imagem__card">

                                        <div className="icone-aling">

                                            <div className="tag_curso">

                                                <div className="tag__ok">
                                                    <img src={bi} alt="icon power bi" />
                                                </div>
                                    
                                            </div>

                                            <div className="titulo_card_curso">
                                            <div className="quote_p"></div>

                                                <p>Power BI</p>
                                            </div>



                                        </div>


                                    </div>

                                    <div className="card__botton">
                                        
                                        <p>
                                            Aprenda o passo a passo exato para criar dashboards e relatórios dinâmicos usando Business Intelligence
                                        </p>
                                    </div>



                                </div>

                                <div class="card__curso">

<div className="imagem__card">

    <div className="icone-aling">

        <div className="tag_curso">

            <div className="tag__ok">
                <img src={bi} alt="icon power bi" />
            </div>

        </div>

        <div className="titulo_card_curso">
        <div className="quote_p"></div>

            <p>Power BI</p>
        </div>



    </div>


</div>

<div className="card__botton">
    
    <p>
        Aprenda o passo a passo exato para criar dashboards e relatórios dinâmicos usando Business Intelligence
    </p>
</div>



</div>

<div class="card__curso">

<div className="imagem__card">

    <div className="icone-aling">

        <div className="tag_curso">

            <div className="tag__ok">
                <img src={bi} alt="icon power bi" />
            </div>

        </div>

        <div className="titulo_card_curso">
        <div className="quote_p"></div>

            <p>Power BI</p>
        </div>



    </div>


</div>

<div className="card__botton">
    
    <p>
        Aprenda o passo a passo exato para criar dashboards e relatórios dinâmicos usando Business Intelligence
    </p>
</div>



</div>


<div class="card__curso">

<div className="imagem__card">

    <div className="icone-aling">

        <div className="tag_curso">

            <div className="tag__ok">
                <img src={bi} alt="icon power bi" />
            </div>

        </div>

        <div className="titulo_card_curso">
        <div className="quote_p"></div>

            <p>Power BI</p>
        </div>



    </div>


</div>

<div className="card__botton">
    
    <p>
        Aprenda o passo a passo exato para criar dashboards e relatórios dinâmicos usando Business Intelligence
    </p>
</div>



</div>
<div class="card__curso">

<div className="imagem__card">

    <div className="icone-aling">

        <div className="tag_curso">

            <div className="tag__ok">
                <img src={bi} alt="icon power bi" />
            </div>

        </div>

        <div className="titulo_card_curso">
        <div className="quote_p"></div>

            <p>Power BI</p>
        </div>



    </div>


</div>

<div className="card__botton">
    
    <p>
        Aprenda o passo a passo exato para criar dashboards e relatórios dinâmicos usando Business Intelligence
    </p>
</div>



</div>
<div class="card__curso">

<div className="imagem__card">

    <div className="icone-aling">

        <div className="tag_curso">

            <div className="tag__ok">
                <img src={bi} alt="icon power bi" />
            </div>

        </div>

        <div className="titulo_card_curso">
        <div className="quote_p"></div>

            <p>Power BI</p>
        </div>



    </div>


</div>

<div className="card__botton">
    
    <p>
        Aprenda o passo a passo exato para criar dashboards e relatórios dinâmicos usando Business Intelligence
    </p>
</div>



</div>
<div class="card__curso">

<div className="imagem__card">

    <div className="icone-aling">

        <div className="tag_curso">

            <div className="tag__ok">
                <img src={bi} alt="icon power bi" />
            </div>

        </div>

        <div className="titulo_card_curso">
        <div className="quote_p"></div>

            <p>Power BI</p>
        </div>



    </div>


</div>

<div className="card__botton">
    
    <p>
        Aprenda o passo a passo exato para criar dashboards e relatórios dinâmicos usando Business Intelligence
    </p>
</div>



</div>
<div class="card__curso">

<div className="imagem__card">

    <div className="icone-aling">

        <div className="tag_curso">

            <div className="tag__ok">
                <img src={bi} alt="icon power bi" />
            </div>

        </div>

        <div className="titulo_card_curso">
        <div className="quote_p"></div>

            <p>Power BI</p>
        </div>



    </div>


</div>

<div className="card__botton">
    
    <p>
        Aprenda o passo a passo exato para criar dashboards e relatórios dinâmicos usando Business Intelligence
    </p>
</div>



</div>


                            </div>





                        </div>
                    </div>


                </div>








            </>
        )
    }

}



export default Cursos;