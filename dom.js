let reind =0;
function di(){
document.getElementById("resu").style.display="block";
document.getElementById("im").style.display="block";
}
  function search() {
  
    const apiKey ='AIzaSyCe8iEfNX1TDh6Du_pfNlxevCusg9vC7wQ';
    const ssp = "375385362167e4f76";
    const query = document.getElementById('inp').value;
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${ssp}&q=${query}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        disA(data.items);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    
  }

  function disA(resu) {
    const res = document.getElementById('resu');
    res.innerHTML = '';

    if (resu.length === 0) {
      res.innerHTML = '<p>No result found.</p>';
      return;
    }

    const out = resu[reind].snippet;
    let xxx=resu[reind].formattedUrl;
    //console.log(xxx);
    const anse = document.createElement('div');
    anse.classList.add('rsitm');
    anse.innerHTML = `<div>${out}<a href="${xxx}"><b>Read more</b></a></div>`;
    res.appendChild(anse);
  }