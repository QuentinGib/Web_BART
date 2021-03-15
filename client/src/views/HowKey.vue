<template>
<body>
  <navbar></navbar>
  <main>
      <h1 id="theme">Comment utiliser sa clé publique et privée ?</h1>
      <div class="Format_left">
        <div id='Instruction'>
          <h2>Instructions</h2>
          <ul><p><strong>Personnes concernées:</strong></p>
          <li>Les clients</li>
          <li>Les entreprises</li>
          <li>Les ressources</li>
          </ul>
          <p>Vous disposez d'une clé privée et d'une clé publique. Il ne faut pas perdre vos clés.
            En cas de perte, merci de nous contacter à cette address mail <strong>email@gmail.com</strong></p>
          <p>Vous n'aurez besoin que de votre clé privée pour signer les contrats.</p>
          <p><strong>Ne divulgez jamais votre clé privée !</strong></p>
        </div>
        <div id="ValidateContrat">
          <h2>Comment utiliser sa clé dans la validation de contrat</h2>
          <ul><p><strong>Personnes concernées:</strong></p>
          <li>Clients</li>
          <li>Ressources</li>
          </ul>
          <p>-Allez dans la page Valider un contrat</p>
          <p>-Choisissez l'id du contrat à valider</p>
          <p>-Appuyez sur "signer le contrat</p>
          <p>-Mettre sa clé privée et appuyez sur signer</p>
          </div>
        <div id='ValidateActivite'>
          <h2>Comment utiliser sa clé dans la validation de l'activité</h2>
         <ul><p><strong>Personnes concernées:</strong></p>
          <li>Clients</li>
         </ul>
         <p>-Allez dans la page Valider l'activité</p>
          <p>-Mettre sa clé privée</p>
          <p>-Appuyez sur signer</p>
        </div>
      </div>
        <aside class="Format_right">
          <div>
              <h1>Sommaire</h1>
              <ul>
                <li><a href="#Instruction">Instructions</a></li>
                <li><a href="#ValidateContrat">La validation de contrat</a></li>
                <li><a href="#ValidateActivite">La validation de l'activité</a></li>
              </ul>
          </div>
        </aside>
  </main>
</body>
</template>
<script>
import Nav from '../components/nav/nav'
export default {
  name: 'HowKey',
  components: {
    navbar: Nav
  }
}
</script>
<style>
.Format_left {
  float: left;
  width: 55%;
}
.Format_left div {
  margin-top: 5px;
  margin-bottom: 10rem;
}
.Format_left h2 {
  font-size: 300%;
  color: rgb(69, 111, 189);
  text-decoration: underline black;
}
.Format_left ul{
  font-size: 130%;
  color: brown;
}
.Format_left ul>li {
  font-size: 80%;
  color: rgb(69, 111, 189);
}
.Format_left p {
  margin: 0px;
  font-size: 150%;
}
.Format_right {
  width: 30%;
  float: right;
  margin-left: 5px;
  margin-top: 5px;
  position: sticky;
  top:0;
  background-color: gray;
  color: white;
}
.Format_right ul>li>a {
  color: black;
  font-size: 150%;
}
aside h1 {
  margin-bottom: 5px;
}
</style>
