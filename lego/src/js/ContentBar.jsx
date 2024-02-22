import "../css/contentList.css"
import { content } from "../json/contentElements.js"


export function ContentBar() {

    

    function contentReader(content) {
        return content.map((product, index) => (
            <li key={index}>
            <a href=" ">
                <img src={product.image} alt={product.title} />
              <span className="contentTitle">{product.title}</span>
              </a>
            </li>
          ));
        }

        return (
            <div>
              <ul>{contentReader(content)}</ul>
            </div>
          ); 
    }
