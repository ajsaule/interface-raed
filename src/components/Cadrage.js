import React from 'react'
const Cadrage = (props) => {
  return (
    <div class="bg-cadrage">
      <div class="item-flex-v1">
        <div>
          <p>
            <label>Nom et Prénom :</label>{' '}
          </p>
          <p>
            <input type="text" />
          </p>
        </div>
        <div className="age">
          <p>
            <label for="age">Age :</label>
          </p>
          <p>
            <input type="number" id="age" name="age" min="18" max="100" />
          </p>
        </div>
      </div>
      <div class="boite">
        <span>1. Présentez-vous et présentez votre envie</span>
      </div>

      <p>
        Vous{' '}
        <span class="clair">
          (Qui êtes-vous ? Vos études ? Votre vécu professionnel ?)
        </span>
      </p>
      <textarea></textarea>

      <p>
        Votre envie
        <span class="clair">
          {' '}
          (Logique, développement, création, reprise, horizon ?)
        </span>
      </p>
      <textarea></textarea>

      <div class="boite">
        <span>2. Finalité et objectifs</span>
      </div>

      <p>
        Votre envie professionnelle
        <span class="clair">
          (Qu’est-ce que vous voulez pour votre avenir ? Comment vous voyez-vous
          d’ici trois ans ?)
        </span>
      </p>
      <textarea></textarea>

      <p>
        Vos objectifs{' '}
        <span class="clair">
          (Quels sont vos objectifs professionnels à plus court terme ? Comment
          vous voyez-vous d'ici 3 mois ?)
        </span>
      </p>
      <textarea></textarea>

      <div class="boite">
        <span>3. Votre démarche entrepreneuriale </span>
      </div>

      <p id="under">
        Dans quelle démarche entrepreneuriale souhaitez vous vous lancer ?
      </p>

      <div>
        <label>
          <input type="radio" name="check" value="check__1" />
          Vous souhaitez lancer de nouveaux projets dans votre entrepriset
        </label>
        <p class="clair">
          Faire émerger puis concrétiser des projets d'activités nouvelles dans
          les TPE, PME-PMI et entreprises artisanales représente un enjeu
          économique important et permet d’asseoir et/ou de développer leur
          compétitivité. Il peut s’agir de structurer la démarche commerciale,
          développer un bureau d’études ou bien encore lancer un nouveau produit
          ou process... Des projets de développement « dorment » dans chaque
          entreprise ! Vous souhaitez identifier le ou les projets susceptibles
          de contribuer à la pérennité de votre entreprise, d’anticiper et de
          prendre une longueur d’avance sur vos concurrents : une règle d’or car
          les besoins des clients évoluent, tout autant que l’environnement dans
          lequel vous agissez agit votre comme le secteur d’activité de votre
          entreprise évoluent. En outre, projeter l’évolution de votre
          entreprise, c’est prendre de la hauteur en tant que manager.
        </p>
      </div>

      <div>
        <label>
          <input type="radio" name="check" value="check__2" />
          Vous réfléchissez à la création d'une entreprise
        </label>
        <p class="clair">
          Et en ces temps de crise où certaines entreprises sont plutôt
          frileuses en matière de recrutement, pourquoi ne pas tenter sa chance
          si on peine à trouver un emploi ? Les motivations des candidats à la
          création d’entreprise sont nombreuses : plus d’autonomie, ne plus
          subir les inconvénients du statut de salarié ou encore le chômage...
          Mais cela ne suffit pas... Attention, si cela est votre seule
          motivation, un projet sérieux repose sur une vraie stratégie, permet
          de cheminer de l’idée à la concrétisation, respecte des étapes
          chronologiques. Le futur entrepreneur « doit porter son rêve et oser
          aller jusqu’au bout ». La création d’entreprise représente tout à la
          fois un enjeu collectif et un enjeu personnel.
        </p>
      </div>

      <div>
        <label>
          <input type="radio" name="check" value="check__3" />
          Vous souhaitez céder votre entreprise
        </label>
        <p class="clair">
          Céder son entreprise n'est pas aussi simple que l'on pourrait le
          penser. Le nombre de cessions ne cesse d'augmenter et il vous faudra
          mettre toutes les chances de votre côté pour réussir le passage de
          témoin, si vous souhaitez que son existence soit pérennisée. Cette
          étape décisive dans votre parcours nécessite une grande anticipation.
          Vous allez, en outre, rencontrer un repreneur qui n'aura peut-être pas
          la même vision que vous et il est nécessaire de vous y préparer. La
          transmission, c'est l'affaire de deux logiques : celle d'un cédant qui
          vend son passé tout en se construisant un autre avenir, et celle d'un
          repreneur qui achète son avenir en le construisant autour d'une
          entreprise. Il vous faudra faire le point sur votre projet, sa
          faisabilité, ses répercussions, tout en vous faisant découvrir les
          différentes étapes de la cession d'entreprise.
        </p>
      </div>

      <div>
        <label>
          <input type="radio" name="check" value="check__4" />
          Vous réfléchissez à la reprise d'entreprise
        </label>
        <p class="clair">
          Vous vous apprêtez à franchir un cap professionnel qui ne doit pas
          laisser de place à l'improvisation. En effet, reprendre une
          entreprise, au contraire de la création, va vous permettre de vous
          appuyer sur une structure existante, mais cela ne signifie pas que
          tout coulera de source. Il vous faudra vous poser les bonnes questions
          : Que se passera-t-il au départ du dirigeant ? Suis-je la bonne
          personne pour donner un avenir à cette entreprise ? Cette entreprise
          est-elle celle qui me permettra de développer mon projet de vie ?
          Cette étape décisive dans votre parcours professionnel nécessite une
          grande anticipation. Vous allez rencontrer un cédant qui n'aura
          peut-être pas la même vision que vous et il est nécessaire de vous y
          préparer. La transmission, c'est l'affaire de deux logiques : celle
          d'un cédant qui vend son passé tout en se construisant un autre
          avenir, et celle d'un repreneur qui achète son avenir en le
          construisant autour d'une entreprise. Il vous faudra faire le point
          sur votre projet, sa faisabilité, ses répercussions, tout en
          découvrant les différentes étapes de la reprise d'entreprise.
        </p>
      </div>

      <div>
        <label>
          <input type="radio" name="check" value="check__5" />
          Autre, précisez :
        </label>
        <p>
          <textarea></textarea>
        </p>
      </div>

      <button id="btnFirstPage" onclick="myFunction()">
        Suivant
      </button>
    </div>
  )
}

export default Cadrage
