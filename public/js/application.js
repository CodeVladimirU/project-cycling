

const filterForm = document.querySelector('#FilterForm')

console.log(';vfvrgb')
if(filterForm) {
  console.log('filterGorm')
  filterForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    let select = document.getElementById('locationFilter');
    let option = select.options[select.selectedIndex];
    console.log('let filter by location', option.value)

    const {action, method} = event.target
    let response
try {
response = await fetch(action, {
  method, 
  headers: {
    'Content-Type': "application/json"
  },
  body: JSON.stringify({location_id: option.value})
})
console.log('send req/body with location_id', option.value)
} catch(error) {console.log(error.message)}
console.log(method)
  
  try {
    postHtml = await response.text()
  document.querySelector('.js-container-list').innerHTML = postHtml } 
 catch(error) {console.log(error.message)} }
  ) }
