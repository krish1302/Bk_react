import React, { useState } from 'react'

function UseState(props) {
    const [book, setBook] = useState(props.page)

    function changeBook(){
      setBook("English")
    }
    
  return (
    <div>
        Book {book}<br/>
        <button type="button" class="btn btn-success" onClick={() => changeBook()}>Success</button>
    </div>
    
  )
}

export default UseState