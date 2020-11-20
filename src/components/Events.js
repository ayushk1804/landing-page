import React from "react"
import Title from "./Title"
import aboutusdata from "./eventdata"

const Events = () => {
  return (
    <section className="section ">
      <Title title="Upcoming Events" />
      <div className="section-center services-center">
        {aboutusdata.map(aboutus => {
          const { id, icon, title, text } = aboutus

          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Events