<template>
  <article class="footer observer">
    <section class="footer__section">
      <h1>Skontaktuj się z nami:</h1>
      <div class="footer__section__top">
        <h3>Z.P.U. WI-MAG s.c.</h3>
        <p>ul. Wrocławska 12</p>
        <p>55-002 Kamieniec Wrocławski</p>
      </div>
      <div class="footer__section__bottom">
        <p>tel./fax:</p>
        <strong>+48 71 318-50-06</strong>
        <p>e-mail:</p>
        <strong>wimag@o2.pl</strong>
      </div>
    </section>
    <section class="footer__section">
      <h3>Napisz do nas</h3>
      <form class="footer__form">
        <div class="footer__form__item">
          <input type="text" placeholder="Imię (wymagane)" required />
        </div>
        <div class="footer__form__item">
          <input type="text" placeholder="Nazwisko" id="footer" />
        </div>
        <div class="footer__form__item" ref="test">
          <input type="email" placeholder="E-mail (wymagane)" required />
        </div>
        <div class="footer__form__item">
          <input type="number" placeholder="telefon" />
        </div>
        <div class="footer__form__item">
          <label>Wiadomość</label>
          <textarea placeholder="Co chcesz nam przekzać?" required />
        </div>
      </form>
      <button class="btn btn--highlight"
      >Wyślij</button>
    </section>
  </article>
</template>