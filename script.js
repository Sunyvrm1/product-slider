fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((data) => {
    const cardCont = document.querySelector(".cardCont");
    data.users.map((suny) => {
      cardCont.insertAdjacentHTML(
        "beforeend",
        `<div class="cardSlider">
        <div class="card">
            <img src="${suny.image}" alt="">
            <p class="name"><span class="first">${suny.firstName}</span> <span class="last">${suny.lastName}</span></p>
        </div>
        <div class="cardHover">
            <p>Full Name: ${suny.firstName} ${suny.maidenName} ${suny.lastName}</p>
            <p>Email: ${suny.email}</p>
            <p>Phone: ${suny.phone}</p>
            <p>Age: ${suny.age}</p>
            <p>Date of Birth: ${suny.birthDate}</p>
            <p>Department: ${suny.company.department}</p>
            <p>Title: ${suny.company.title}</p>
        </div>
    </div>`
      );
    });

    const firstCard = document.querySelector(".card").offsetWidth;
    // const cardCont1 = document.querySelector(".cardCont").offsetWidth;
    const arrow = document.querySelectorAll(".arrow");
    arrow.forEach((btn) => {
      btn.addEventListener("click", () => {
        cardCont.scrollLeft +=
          btn.id === "left" ? -firstCard - 15 : firstCard + 15; // for one slide per click
        // cardCont.scrollLeft += btn.id === "left" ? -cardCont1 - 15 : cardCont1 + 15; // for total slides move per click
      });
    });
  });
