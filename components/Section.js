function Section(props){
    
  let keysArr = []
  //push all elements, except the title and section number (rest will be paragraphs) into the keysArr
  for (let keyName in props){
    if(keyName != "sectionTitle" && keyName != "sectionNumber"){
      let liElement = (<li key={`${props.sectionNumber + keyName}`}>{props[keyName]}</li>)
      keysArr.push(liElement)
    }
  }
  //create a ul with the li elements from the keys arr - this will create all the given paragraphs for the component
  let ul = (<ul>{keysArr}</ul>)

  //return a section with a navigating reference hr, title and the ul
  return (
    <section>
      <hr id={`section${props.sectionNumber}`}></hr>
      <h3>{props.sectionTitle}</h3>
      {ul}
    </section>
  )
}

export default Section