var reasons = [
    "2. Medicinal value.",  
    "3. Aesthetic benefits.", 
    "4. Preserves heritage and culture",
    "5 Protection of biodiversity and endangered species."
    ];
    
    var images = [
    src="https://i.postimg.cc/zGhBThdT/download-1.jpg",
    src="https://i.postimg.cc/0NcqS2qp/images.jpg",
    src="https://i.postimg.cc/B6F9V5KC/green-monkey-16000000.png",
    src="https://i.postimg.cc/3NbX0GtP/images-1.jpg"
    ];
    
    var i=0;
    function nextslide(){
     document.getElementById("reason1").innerHTML = reasons[i];
      
      document.getElementById("album").src = images[i];
      i++;
    }  
      
    
    function ChangeColour(){
        document.getElementById("Heading").style.color="green";
    }
    
    
    
      function flipimg(){
      document.getElementById("animal").src="https://images.unsplash.com/photo-1539394983236-f6b410a16987?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
      
    
      function changelion() {document.getElementById("lion").src="https://images.unsplash.com/photo-1585830659727-6f9bd254f1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ";
    }
    
    function changeimage01() {document.getElementById("image01").src="https://images.unsplash.com/photo-1577209299418-485f60c0d4de?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ";
      }
                              
    function changeimage02() {document.getElementById("image02").src="https://images.unsplash.com/photo-1550825406-24bb1399f85d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ";
     }
                              
     function changeimage03() {document.getElementById("image03").src="https://images.unsplash.com/photo-1563404389-05bd9100a2a0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ";
      }
                                             
    function changeimage04() {document.getElementById("image04").src="https://images.unsplash.com/photo-1582900871103-cc5471a4e3d4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ";
      }
      
      
    