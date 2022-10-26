import React from 'react';

const Action = (props) => {
return (
  <div id="Action" class="tabcontent">
  <div class="bg-cadrage">

      <div class="boite">
          <span>1. Finalité et objectifs</span>
      </div>

      <p>Votre envie professionnelle <span class="clair">(Qu’est-ce que vous voulez pour votre avenir ? Comment
              vous voyez-vous d’ici trois ans ?)</span></p>
      <textarea></textarea>

      <p>Vos objectifs<span class="clair">(Quels sont vos objectifs professionnels à plus court terme ? Comment
              vous voyez-vous d'ici 6 mois ?)</span></p>
      <textarea></textarea>

      <div class="boite">
          <span>2. Moyens et tableau de bord</span>
      </div>

      <p> Moyens et ressources
          <span class="clair">(De quels moyens disposez-vous ? Quelles sont vos ressources financières,
              matérielles, humaines ?)</span>
      </p>
      <textarea></textarea>
      <p>Indicateurs
          <span class="clair">(Que vous fixez-vous comme cap à atteindre ? Quel seuil vous fixez-vous ?)</span>
      </p>
      <textarea></textarea>



      <div class="boite">
          <span>3. Plan d'action</span>
      </div>
      <p>Tâches à effectuer
          <span class="clair">(Quels sont les grandes tâches à effectuer ? Quel est votre plan d'action ?)</span>
      </p>
      <textarea></textarea>
      <p>Acteurs
          <span class="clair">(Qui sont les acteurs impliqués dans ce projet ? Quelles seront les personnes
              impactées par ce projet ?)</span>
      </p>
      <textarea></textarea><br></br>






      <button>
          <a href="#defaultOpen">Envoyer </a>
      </button>
  </div>

</div>



  )
 };

export default Action;