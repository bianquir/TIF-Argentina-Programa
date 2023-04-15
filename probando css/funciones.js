//carrusel

const carousel = document.querySelector('.carousel');
const prevButton = carousel.querySelector('.prev-button');
const nextButton = carousel.querySelector('.next-button');
const slidesContainer = carousel.querySelector('.slides-container');
const slides = slidesContainer.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
let currentIndex = 0;

nextButton.addEventListener('click', () => {
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
});

prevButton.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex--;
  }
  slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
});


//validacion de formulario de contacto
const constraints = {
    nombre: {
    presence: true,
    length: {
    minimum: 2,
    message: "debe tener al menos 2 caracteres"
        }
    },
        apellido: {
        presence: true,
        length: {
        minimum: 2,
        message: "debe tener al menos 2 caracteres"
            }
        },
            email: {
            presence: true,
            email: true
          },
            mensaje: {
            presence: true,
            length: {
                minimum: 10,
                message: "debe tener al menos 10 caracteres"
            }
        }
};
    
        const form = document.getElementById("formulario");
    
        form.addEventListener("submit", function (event) {
          event.preventDefault();
          const formData = new FormData(form);
          const formValues = Object.fromEntries(formData.entries());
          const errors = validate(formValues, constraints);
          if (errors) {
            alert(Object.values(errors).map(error => error.join("\n")).join("\n"));
          } else {
            alert("El formulario se envió correctamente");
            // Aquí se podría agregar código para enviar el formulario a un servidor
            form.reset();
          }
        });