<template>
  <div class="about">
    <Navbar></Navbar>
      
    <br>
			<h2 style="text-align:center;"><b>STAFF</b></h2>
		<br>
             <div class="container">
        <div class="card">
            <div class="content">
                <div class="imgBx">
                    <img src="../assets/team/fjola.jpg" alt="">
                </div>
                <div class="contentBx">
                    <h4>Fjola Ismaili</h4>
                    <h5>Full-stack Developer</h5>
                </div>
                <div class="sci">
                     <a href="https://www.facebook.com/fjolla.ismaili.587" class="fab fa-facebook-f"></a>
              
                <a href="https://twitter.com/" class="fab fa-twitter"></a>
             
                <a href="https://instagram.com/" class="fab fa-instagram"></a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <div class="imgBx">
                    <img src="../assets/team/nurije.jpg" alt="">
                </div>
                <div class="contentBx">
                    <h4>Nurije Osmani</h4>
                    <h5>Front-end Developer</h5>
                </div>
                <div class="sci">
                     <a href="https://facebook.com/" class="fab fa-facebook-f"></a>
              
                <a href="https://twitter.com/" class="fab fa-twitter"></a>
             
                <a href="https://instagram.com/" class="fab fa-instagram"></a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <div class="imgBx">
                    <img src="../assets/team/gresa.jpg" alt="">
                </div>
                <div class="contentBx">
                    <h4>Gresa Ahmeti</h4>
                    <h5> Web Designer</h5>
                </div>
                <div class="sci">
                     <a href="https://facebook.com/" class="fab fa-facebook-f"></a>
              
                <a href="https://twitter.com/" class="fab fa-twitter"></a>
             
                <a href="https://instagram.com/" class="fab fa-instagram"></a>
                </div>
            </div>
        </div>

    </div>
    <mini-cart></mini-cart>
    <footer-shop></footer-shop>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bellota+Text:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
*
{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Bellota Text', cursive;
}
body
{
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
   width: 100%;
   background: #f2f3f7;
}
.container
{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   
}
.container .card
{
   width: 330px;
   height: 416px;
   padding: 60px 30px;
   margin: 20px;
   background: #f2f3f7;
   box-shadow: 0.6em 0.6em 1.2em #d2dce9,
               -0.5em -0.5em 1em #ffffff;
   border-radius: 20px;
}
.container .card .content
{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
.container .card .content .imgBx
{
   width: 180px;
   height: 180px;
   border-radius: 50%;
   position: relative;
   margin-bottom: 20px;
   overflow: hidden;
}
.container .card .content .imgBx img
{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
}
.container .card .content .contentBx h4
{
   color: #36187d;
   font-size: 1.7rem;
   font-weight: bold;
   text-align: center;
   letter-spacing: 1px;
}
.container .card .content .contentBx h5
{
   color: #6c758f;
   font-size: 1.2rem;
   font-weight: bold;
   text-align: center;
}
.container .card .content .sci
{
   margin-top: 20px;
}
.container .card .content .sci a
{
   text-decoration: none;
   color: #6c758f;
   font-size: 30px;
   margin: 10px;
   transition: color 0.4s;
}
.container .card .content .sci a:hover
{
   color: #0196e3;
}

</style>