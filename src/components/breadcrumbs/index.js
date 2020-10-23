import css from './style.css';
import getCategories from '../services/index.js';

let link;
let parts = [{
  "text": 'Home',
  "link": '/'
}];
document.querySelector('.page-main').addEventListener('click', (e) =>{
 
  const breadcrumb = document.querySelector('#breadcrumb ol.breadcrumb');
  const bread = document.getElementById('breadcrumb');

if(e.target.tagName == "A"){
  console.dir(e.target);
    if (breadcrumb) {
        let here = location.href.replace(/(\?.*)$/, '').split('/').slice(3);
    
        for (let i = 0; i < here.length; i++) {
            let part = here[i];
            let pageName = part.toLowerCase();
          pageName = part.charAt(0).toUpperCase() + part.slice(1);
          link = e.target.pathname + here.slice(0, i + 1).join('/');
          // if(!breadcrumb.childNodes.innerText){
            breadcrumb.innerHTML +='<li><a href="' + link + '">' + e.target.textContent.replace(/\.(htm[l]?|asp[x]?|php|jsp)$/, '') + '</a></li>';

            // }
            console.dir(breadcrumb);
            
            parts.push({
              "text": e.target.textContent,
              "link": link
            })  
            unique(parts)
                 
          }
      }
      bread.classList.add('is-open');
    }
})
function unique(parts) {
  let result = [];

  for (let str of parts) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  console.log(result);

  return result;
}
// const getSortedUniqueSkills = users => {
//   return users.reduce((arrSkills, user) => {
//     arrSkills.push(...user.skills);

//     return arrSkills;
//   }, []).filter((elem, index, arrSkills) => index === arrSkills.indexOf(elem)).sort();