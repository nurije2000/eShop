<template>
  <div class="contact">
    <NavBar></NavBar>
  <body>
   <!-- contact section -->
         <section id="contact-section">
           
           <div class="container">
             
           	 <h2>Contact Us</h2>
              <p>Email us and keep upto date with our latest news</p>
             <div class="contact-form">

                  <!-- First grid -->
               <div>
                 <i class="fa fa-map-marker"></i><span class="form-info"> 10000 Prishtine, Kosovo</span><br>
                 <i class="fa fa-phone" > </i><span class="form-info">  +49 345678</span><br>
                 <i class="fa fa-envelope"></i><span class="form-info">  eShop@Gmail.com</span>
               </div>
               
                   <!-- second grid -->
           <div>        
             <form>
               <input type="text" placeholder="Your Name" required>
               <input type="text" placeholder="Last Name"><br>
               <input type="Email" placeholder="Email" required><br>
               <input type="text" placeholder="Subject of this message"><br>
               <textarea name="message" placeholder="Message" rows="5" required></textarea><br>
               <button class="submit" >Send Message</button> 
             </form>   
               </div>
             </div>
           </div>
         </section>

         <footer-shop></footer-shop>
     </body> </div>
</template>


<style>

* body{
    padding: 0px;
    margin: 0px;  
    font-family: sans-serif;
  
   }   


 .container{
      width: 90%;
      margin: auto;
      overflow: hidden;
    }
    /* contact form css */


    #contact-section{
      background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.9)),url(../assets/contact.jpg);
      background-size: cover;
      background-position: center;
      height: 100%;
      width: 100% ;
      padding-bottom: 2%;
    }

    #contact-section .container h2{
      text-align: center;
       text-decoration: underline;
        /* text-decoration-color:red; */
        text-underline-position: under;
        color: rgb(238, 235, 235);
        letter-spacing: 2px;
        
    }

    

    #contact-section .container p{
      text-align: center; 
      width: 70%; 
      margin-left: auto;
       margin-right: auto; 
       padding-bottom: 3%;
       color: #fff;
       letter-spacing:3px;
    }

    .contact-form i.fa{
      /* color: red; */
      /* color: #fff; */
      font-size: 22px; 
      padding: 3%;
      background-color: none;
      border-radius: 80%;
      margin: 2%;
      /* border: 2px solid #fff; */
      cursor: pointer;
      border:2px solid rgb(190, 190, 190);
      color: rgb(190, 190, 190);
    }
    
    .contact-form i.fa:hover{
      cursor: pointer;
      border:2px solid white;
      color: white;
    }
     
      .contact-form{
        display: grid;
        grid-template-columns: auto auto;
         }
      
      .form-info{
        font-size: 16px;
        font-style: italic;
        color: white;
        letter-spacing: 2px;
      }
      input{
        padding: 10px;
        margin:10px;
        width: 70%;
        background-color:rgba(136, 133, 133, 0.5);
        color: white;
        border: none;
        outline:none;
      }

      input::placeholder{
        color: white;
      }
    
       textarea{
      padding: 10px;
      margin: 10px;     
      width: 70%;
      background-color:rgba(136, 133, 133, 0.5);
      color: white;
      border: none;
      outline:none;
     }
     textarea::placeholder{
       color: white;
     }
     
      
    
      .submit{
      width: 40%;
      background: none;
      padding: 4px;
      outline: none;
       /* border: 1px solid #fff;
      color: #fff; */
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 2px;
      height: 33px;
      text-align: center;
      cursor: pointer;
      letter-spacing: 2px;
      margin-left: 3%;
      border:2px solid rgb(190, 190, 190);
      color: rgb(190, 190, 190);
     }

     .submit:hover{
           border: 1px solid #fff;
      color: #fff;
      cursor: pointer;
     }

        /* media queries */
    @media (max-width: 768px){

 #contact-section .contact-form{
        display: block;
        width: 100%;
        text-align: center;
      }
      #contact-section .submit{

        width: 60%;
      }

  }



</style>