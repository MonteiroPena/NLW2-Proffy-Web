import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import "./styles.css"

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/44277979?s=460&u=c123b9d0c3c23a2505a84914ec047514a404a184&v=4" alt="Daniel Monteiro" />
        <div>
          <strong>Daniel Monteiro</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minha explosões.
          </p>

      <footer>
        <p>Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>

    </article>
  )
}

export default TeacherItem
