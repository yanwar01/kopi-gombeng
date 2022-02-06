const Hero =(props)=>{
    return(
        <section className="bg-secondary">
        <div className=" text-white px-4 py-4 text-center">
          <div className="py-5">
            <h1 className="display-5 fw-bold text-white text-uppercase">{props.title}</h1>
          </div>
        </div>
      </section>
    )
}
export default Hero