const React = require('react');

module.exports = function FilmBar({location}) {
  return (
  <form action='/filter' method='post' id="FilterForm"> 
  <div className="inpbtn">
   <p><select className="inpf" id="locationFilter">
   <option value={"0"}>...</option>
{location.map((el)=> <option value={el.id}>{el.title}</option>)}
   </select>
   <input className="btnf" type="submit" value="Отправить"></input></p> 
   </div>
  </form>
  )
}
