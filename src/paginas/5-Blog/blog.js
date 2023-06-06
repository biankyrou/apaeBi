import "./blog.css";
import img_blog from "../5-Blog/blogger.png";

export default function Blog(){
    return(
        <section className="blog-container">

            <div className="paragrafos-geral">
                <p className="paragrafo-blog">As atividades dos alunos são realizadas semanalmente.</p>
                <p className="paragrafo-blog">Acesse nosso blog para saber mais:</p> 
            </div>

            <div className="imagem-blog">
                <a className="blog" href="https://inclusaoifspsc.blogspot.com/">
                    <img src={img_blog} alt ="blog" className="imagem-link-blog"></img>
                </a>
            </div>
            
        </section>
    )
}
