import { render, screen } from "@testing-library/react"
import { About } from "."

describe( "<About />", ()=>{ 

  it("Deve renderizar um heading com texto about me", ()=>{
    render(<About />)
    expect( screen.getByRole( "heading", { name: /about me/i} ) ).toBeInTheDocument()
  })

  it("Deve conter uma paragraph", ()=> {
    render(<About />)
    expect( screen.getByTestId("paragraph") ).toBeInTheDocument()
  } )

 } )