const React = require('react');

module.exports = function FilmBar({location}) {
  return (

  <form action='/filter' method='post' id="FilterForm"> 
   <p><select id="locationFilter">
   <option value={"0"}>...</option>
{location.map((el)=> <option value={el.id}>{el.title}</option>)}
   
   </select>
   <input  type="submit" value="Отправить"></input></p> 
  </form>
    
  )
}
