
 export function Prova ({global}) {
   return (
     <ul>
       {cardReader(global)}
     </ul>
   )
 }

 function cardReader(globals) {
   return globals.map((lbay, index) => (
     <li key={index}>
       <p className="lbayPara">{lbay.title}
         <a href=" ">{lbay.link}</a></p>
     </li>
   ))
 }