import React from "react"
import "./contato.css"
import CardContato from "../../componentes/CardContatos/CardContato"

export default function Contato(){
    return(
        
        <div className="contato-container">
        <div className="titulo-container-contato">Contato</div>
        <div className="contato-cards">
            <div className="container">
            <div className="mapa-cards-container">
            <div className= "cards">

                <CardContato 
                    nome = 'Célia'
                    descricao = 'Docente IFSP'
                    email = 'E-mail: celiak@ifsp.edu.br'
                    
                />
                <CardContato 
                    nome = 'Gisele'
                    descricao = 'Professora APAE'
                    email = 'E-mail: giselelabor@yahoo.com.br'
                    telefone= '(16)99117-3816'
                />
                <CardContato 
                    nome = 'Mariana'
                    descricao = 'Coordenadora de Projetos da APAE'
                    email = 'E-mail: coordenacao@apaesaocarlossp.org.br'
                    telefone = '(16) 98166-9175'/>
                    
               
                    
            </div>
        </div>
        <div className="mapa-container">
            <div className="mapaApae">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.479763008981!2d-47.89238562568898!3d-21.992921005849023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b870db004560a5%3A0x72b12181908d0a6c!2sAPAE%20-%20Associa%C3%A7%C3%A3o%20Pais%20Amigos%20Excepcionais!5e0!3m2!1spt-BR!2sbr!4v1685022708887!5m2!1spt-BR!2sbr" width="180" height="140" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            

            
            <div className="mapaIFSP">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.074372502622!2d-47.88106092568988!3d-21.970108505066197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8711e71fe250f%3A0xf5c8879e76e658c4!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20S%C3%A3o%20Paulo%2C%20Campus%20S%C3%A3o%20Carlos!5e0!3m2!1spt-BR!2sbr!4v1685022873630!5m2!1spt-BR!2sbr" width="189" height="140" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}
