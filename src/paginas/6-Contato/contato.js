import React from "react"
import "./contato.css"
import Card from "../../componentes/CardContatos/Card"
import Local from "../../componentes/Mapas/Local"


export default function Contato(){
    return(
        
        <div className="contato-container">

            <p className="titulo">Contato</p>

            <div className="container">

                <div className= "cards">
                    <Card
                        nome = 'Mariana Schiabel'
                        descricao = 'Coordenadora de Projetos da APAE'
                        email = 'coordenacao@apaesaocarlossp.org.br'  
                    />

                    <Card destaque={true}
                        nome = 'Célia Kawabata'
                        descricao = 'Docente IFSP e Coordenadora do Projeto'
                        email= 'celiak@ifsp.edu.br'
                    />

                    <Card 
                        nome = 'Gisele Dovigo'
                        descricao = 'Docente APAE'
                        email = 'giselelabor@yahoo.com.br'
                    />
                    
                </div>

                <div className="mapas">
                   <Local
                        nome='APAE'
                        descricao='Avenida Professor Luiz Augusto de Oliveira'
                        src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.479763008981!2d-47.89238562568898!3d-21.992921005849023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b870db004560a5%3A0x72b12181908d0a6c!2sAPAE%20-%20Associa%C3%A7%C3%A3o%20Pais%20Amigos%20Excepcionais!5e0!3m2!1spt-BR!2sbr!4v1685022708887!5m2!1spt-BR!2sbr"
                   
                    /> 
                    <Local
                        nome='IFSP'
                        descricao='Estrada Municipal Paulo Eduardo de Almeida'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.074372502622!2d-47.88106092568988!3d-21.970108505066197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8711e71fe250f%3A0xf5c8879e76e658c4!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20S%C3%A3o%20Paulo%2C%20Campus%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1685022873630!5m2!1spt-BR!2sbr"
                    />  
            
                </div>

            </div>
            
        </div>
        
    )
}
